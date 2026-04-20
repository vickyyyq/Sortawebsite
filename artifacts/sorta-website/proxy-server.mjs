/**
 * proxy-server.mjs
 *
 * Production server for the Sorta marketing website.
 *
 * Behaviour
 * ─────────
 * - Social-crawler bot requests for known section paths
 *   (/, /problem, /solution, …) are proxied to the API server's
 *   /api/share/:section endpoint, which returns fully-rendered HTML
 *   with correct Open Graph meta tags.
 *
 * - All other requests are served from the Vite-built static files in
 *   dist/public/.  Unknown paths fall back to index.html so that the
 *   React SPA can handle client-side routing.
 *
 * Bot user-agents covered: Slack, LINE, Facebook/Meta, Twitter/X,
 * LinkedIn, WhatsApp, Telegram, Discord, Google, Apple, Bing, Yandex.
 *
 * Environment variables
 * ─────────────────────
 *   PORT      – port this server listens on          (required)
 *   API_PORT  – port the API server listens on       (default: 8080)
 */

import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// ── Config ────────────────────────────────────────────────────────────────

const __dirname = fileURLToPath(new URL(".", import.meta.url));
// Resolve to an absolute, canonical path so containment checks are reliable.
const STATIC_DIR = path.resolve(__dirname, "dist", "public");
// Sentinel used for containment checks: resolved dir always ends with sep.
const STATIC_DIR_PREFIX = STATIC_DIR + path.sep;

const rawPort = process.env["PORT"];
if (!rawPort) throw new Error("PORT environment variable is required");
const PORT = Number(rawPort);
if (Number.isNaN(PORT) || PORT <= 0) throw new Error(`Invalid PORT: ${rawPort}`);

const API_PORT = Number(process.env["API_PORT"] ?? "8080");

// ── Known section paths (must match section-meta.json routes) ─────────────

const SECTION_PATHS = new Map([
  ["/", "home"],
  ["/problem", "problem"],
  ["/solution", "solution"],
  ["/use-cases", "use-cases"],
  ["/team", "team"],
  ["/why-now", "why-now"],
  ["/contact", "contact"],
]);

// ── Bot user-agent pattern ────────────────────────────────────────────────

// LINE's crawler UA is "LineBot/2.0 (...)".  We also keep a broad LINE/
// match for older or variant agents, but LineBot must be explicit.
const BOT_UA_RE =
  /Twitterbot|facebookexternalhit|Slackbot-LinkExpanding|LinkedInBot|WhatsApp|TelegramBot|Discordbot|LineBot|LINE\/|Googlebot|bingbot|YandexBot|Applebot|ia_archiver|Pinterestbot|Embedly|Nuzzel|Outbrain|W3C_Validator|rogerbot|msnbot/i;

function isBot(userAgent) {
  return BOT_UA_RE.test(userAgent ?? "");
}

// ── MIME types for static-file serving ───────────────────────────────────

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js":   "application/javascript; charset=utf-8",
  ".mjs":  "application/javascript; charset=utf-8",
  ".css":  "text/css; charset=utf-8",
  ".json": "application/json",
  ".svg":  "image/svg+xml",
  ".png":  "image/png",
  ".jpg":  "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif":  "image/gif",
  ".ico":  "image/x-icon",
  ".woff": "font/woff",
  ".woff2":"font/woff2",
  ".ttf":  "font/ttf",
  ".otf":  "font/otf",
  ".mp4":  "video/mp4",
  ".webm": "video/webm",
  ".txt":  "text/plain; charset=utf-8",
  ".xml":  "application/xml",
};

function mimeType(filePath) {
  return MIME[path.extname(filePath).toLowerCase()] ?? "application/octet-stream";
}

// ── Proxy request to API server ───────────────────────────────────────────

function proxyToApi(apiPath, req, res) {
  const options = {
    hostname: "localhost",
    port: API_PORT,
    path: apiPath,
    method: "GET",
    headers: {
      "user-agent":      req.headers["user-agent"] ?? "",
      "accept":          req.headers["accept"] ?? "text/html",
      "accept-language": req.headers["accept-language"] ?? "",
      "x-forwarded-for": req.socket.remoteAddress ?? "",
    },
  };

  const proxyReq = http.request(options, (proxyRes) => {
    res.writeHead(proxyRes.statusCode ?? 200, proxyRes.headers);
    proxyRes.pipe(res, { end: true });
  });

  proxyReq.on("error", (err) => {
    console.error(`[proxy-server] API proxy error for ${apiPath}:`, err.message);
    serveIndexHtml(res);
  });

  proxyReq.end();
}

// ── Serve static file ─────────────────────────────────────────────────────

function serveFile(filePath, res) {
  const stat = fs.statSync(filePath);
  res.writeHead(200, {
    "content-type":   mimeType(filePath),
    "content-length": stat.size,
    "cache-control":  filePath.includes("/assets/") ? "public, max-age=31536000, immutable" : "public, max-age=60",
  });
  fs.createReadStream(filePath).pipe(res, { end: true });
}

// ── SPA fallback ──────────────────────────────────────────────────────────

function serveIndexHtml(res) {
  const indexPath = path.join(STATIC_DIR, "index.html");
  try {
    const stat = fs.statSync(indexPath);
    res.writeHead(200, {
      "content-type":   "text/html; charset=utf-8",
      "content-length": stat.size,
      "cache-control":  "no-cache",
    });
    fs.createReadStream(indexPath).pipe(res, { end: true });
  } catch {
    res.writeHead(500, { "content-type": "text/plain" });
    res.end("Internal server error: index.html not found");
  }
}

// ── Request handler ───────────────────────────────────────────────────────

const server = http.createServer((req, res) => {
  const rawUrl = req.url ?? "/";
  const rawPathname = rawUrl.split("?")[0] ?? "/";
  // Normalise trailing slash so /team/ and /team both hit the same section.
  const pathname =
    rawPathname !== "/" && rawPathname.endsWith("/")
      ? rawPathname.slice(0, -1)
      : rawPathname;
  const ua = req.headers["user-agent"] ?? "";

  // 1. Bot requests to known section paths → API OG preview
  if (isBot(ua)) {
    const sectionId = SECTION_PATHS.get(pathname);
    if (sectionId !== undefined) {
      proxyToApi(`/api/share/${sectionId}`, req, res);
      return;
    }
  }

  // 1b. /api/* requests → forward to API server regardless of UA.
  //     Replit's path router normally sends these to the API artifact
  //     directly, but we handle them here as a safety net in case this
  //     server receives such requests (e.g. direct port access, tests).
  if (pathname.startsWith("/api/") || pathname === "/api") {
    proxyToApi(pathname + (req.url?.includes("?") ? "?" + req.url.split("?")[1] : ""), req, res);
    return;
  }

  // 2. Attempt to serve a matching static file
  //
  // Security: resolve the full absolute path and verify it is inside
  // STATIC_DIR before touching the filesystem.  This prevents path-traversal
  // attacks such as /../../../../etc/passwd or URL-encoded variants.
  const resolved = path.resolve(STATIC_DIR, "." + pathname);
  const inBounds =
    resolved === STATIC_DIR || resolved.startsWith(STATIC_DIR_PREFIX);

  if (!inBounds) {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("Not found");
    return;
  }

  try {
    const stat = fs.statSync(resolved);
    if (stat.isFile()) {
      serveFile(resolved, res);
      return;
    }
    // If it's a directory, try index.html inside it
    if (stat.isDirectory()) {
      const dirIndex = path.join(resolved, "index.html");
      const dirIndexResolved = path.resolve(dirIndex);
      if (
        (dirIndexResolved === STATIC_DIR || dirIndexResolved.startsWith(STATIC_DIR_PREFIX)) &&
        fs.existsSync(dirIndexResolved)
      ) {
        serveFile(dirIndexResolved, res);
        return;
      }
    }
  } catch {
    // file not found — fall through to SPA
  }

  // 3. SPA fallback
  serveIndexHtml(res);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`[proxy-server] Listening on port ${PORT} (static: ${STATIC_DIR}, api: localhost:${API_PORT})`);
});

server.on("error", (err) => {
  console.error("[proxy-server] Fatal error:", err);
  process.exit(1);
});
