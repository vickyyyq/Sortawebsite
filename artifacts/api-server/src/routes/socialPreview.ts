import { Router, type IRouter, type Request, type Response } from "express";
import sectionMetaJson from "../../../sorta-website/section-meta.json";

const { baseUrl, sections } = sectionMetaJson;

const SECTIONS_BY_ID = Object.fromEntries(
  sections.map((s) => [s.route.replace(/^\//, "") || "home", s]),
);

const router: IRouter = Router();

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function buildPreviewHtml(section: (typeof sections)[number]): string {
  const canonicalUrl = `${baseUrl}${section.route}`;
  const e = escapeHtml;

  return `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${e(section.title)}</title>
  <meta name="description" content="${e(section.description)}" />
  <link rel="canonical" href="${e(canonicalUrl)}" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Sorta" />
  <meta property="og:title" content="${e(section.title)}" />
  <meta property="og:description" content="${e(section.description)}" />
  <meta property="og:url" content="${e(canonicalUrl)}" />
  <meta property="og:image" content="${e(section.ogImage)}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:locale" content="ja_JP" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${e(section.title)}" />
  <meta name="twitter:description" content="${e(section.description)}" />
  <meta name="twitter:image" content="${e(section.ogImage)}" />
  <meta http-equiv="refresh" content="0; url=${e(canonicalUrl)}" />
  <script>window.location.replace(${JSON.stringify(canonicalUrl)});</script>
</head>
<body>
  <p>Redirecting to <a href="${e(canonicalUrl)}">${e(canonicalUrl)}</a>…</p>
</body>
</html>`;
}

router.get("/share/:section", (req: Request, res: Response) => {
  const rawSection = req.params["section"];
  const sectionId =
    typeof rawSection === "string" ? rawSection : Array.isArray(rawSection) ? String(rawSection[0]) : "home";
  const section = SECTIONS_BY_ID[sectionId];

  if (!section) {
    res.status(404).json({ error: "Section not found" });
    return;
  }

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=3600");
  res.send(buildPreviewHtml(section));
});

router.get("/share", (_req: Request, res: Response) => {
  const section = SECTIONS_BY_ID["home"] ?? sections[0];
  if (!section) {
    res.status(404).json({ error: "No sections configured" });
    return;
  }
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=3600");
  res.send(buildPreviewHtml(section));
});

router.get("/og-preview", (_req: Request, res: Response) => {
  const cards = sections.map((s) => {
    const label = s.route === "/" ? "/" : s.route;
    return `
      <figure style="margin:0;display:flex;flex-direction:column;align-items:center;gap:8px;">
        <a href="${escapeHtml(s.ogImage)}" target="_blank" rel="noopener" style="display:block;">
          <img src="${escapeHtml(s.ogImage)}"
               alt="${escapeHtml(s.title)}"
               width="560" height="294"
               style="border-radius:6px;border:1px solid #e2e8f0;max-width:100%;height:auto;display:block;" />
        </a>
        <figcaption style="font-family:monospace;font-size:13px;color:#4a5568;background:#f7fafc;padding:3px 10px;border-radius:4px;">
          ${escapeHtml(label)}
        </figcaption>
      </figure>`;
  });

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>OG Image Preview — Sorta</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    body { margin: 0; padding: 32px 24px; background: #f0f4f8; font-family: system-ui, sans-serif; }
    h1 { font-size: 20px; font-weight: 600; color: #1a202c; margin: 0 0 24px; }
    .grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; max-width: 1160px; }
    @media (max-width: 640px) { .grid { grid-template-columns: 1fr; } }
  </style>
</head>
<body>
  <h1>OG Image Preview (${sections.length} sections)</h1>
  <div class="grid">
    ${cards.join("\n")}
  </div>
</body>
</html>`;

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.send(html);
});

router.get("/share-sections", (_req: Request, res: Response) => {
  const result = sections.map((s) => ({
    id: s.route.replace(/^\//, "") || "home",
    title: s.title,
    description: s.description,
    ogImage: s.ogImage,
    previewUrl: `/api/share/${s.route.replace(/^\//, "") || "home"}`,
    canonicalUrl: `${baseUrl}${s.route}`,
  }));
  res.json({ sections: result });
});

export default router;
