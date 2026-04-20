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
