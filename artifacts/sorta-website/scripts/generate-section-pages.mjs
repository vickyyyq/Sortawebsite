/**
 * Post-build script: generates per-section HTML files with correct OG meta tags.
 *
 * After `vite build` produces dist/public/index.html (with generic homepage tags),
 * this script creates dist/public/<section>/index.html for every section route.
 * Static hosting (Nginx, CDN) then serves the section-specific file when bots
 * request /problem, /team, /solution, etc., making social share previews correct.
 */

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const distDir = resolve(root, "dist/public");
const sectionMetaPath = resolve(root, "section-meta.json");

const { baseUrl, sections } = JSON.parse(readFileSync(sectionMetaPath, "utf-8"));

const indexHtml = readFileSync(resolve(distDir, "index.html"), "utf-8");

function escAttr(s) {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

function injectOgMeta(html, section) {
  const canonicalUrl = `${baseUrl}${section.route}`;
  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${escAttr(section.title)}</title>`)
    .replace(
      /(<meta\s+name="description"\s+content=")[^"]*(")/,
      `$1${escAttr(section.description)}$2`,
    )
    .replace(
      /(<link\s+rel="canonical"\s+href=")[^"]*(")/,
      `$1${escAttr(canonicalUrl)}$2`,
    )
    .replace(
      /(<meta\s+property="og:title"\s+content=")[^"]*(")/,
      `$1${escAttr(section.title)}$2`,
    )
    .replace(
      /(<meta\s+property="og:description"\s+content=")[^"]*(")/,
      `$1${escAttr(section.description)}$2`,
    )
    .replace(
      /(<meta\s+property="og:url"\s+content=")[^"]*(")/,
      `$1${escAttr(canonicalUrl)}$2`,
    )
    .replace(
      /(<meta\s+property="og:image"\s+content=")[^"]*(")/,
      `$1${escAttr(section.ogImage)}$2`,
    )
    .replace(
      /(<meta\s+name="twitter:title"\s+content=")[^"]*(")/,
      `$1${escAttr(section.title)}$2`,
    )
    .replace(
      /(<meta\s+name="twitter:description"\s+content=")[^"]*(")/,
      `$1${escAttr(section.description)}$2`,
    )
    .replace(
      /(<meta\s+name="twitter:image"\s+content=")[^"]*(")/,
      `$1${escAttr(section.ogImage)}$2`,
    );
}

let generated = 0;
for (const section of sections) {
  if (section.route === "/") continue;

  const sectionDir = resolve(distDir, section.route.replace(/^\//, ""));
  mkdirSync(sectionDir, { recursive: true });

  const html = injectOgMeta(indexHtml, section);
  writeFileSync(resolve(sectionDir, "index.html"), html, "utf-8");

  console.log(`  ✓ ${section.route} → "${section.title}"`);
  generated++;
}

console.log(`\nGenerated ${generated} section HTML pages in dist/public/`);
