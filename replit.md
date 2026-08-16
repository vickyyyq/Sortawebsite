# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Validation**: Zod (`zod/v4`)

## Artifacts

### Sorta Marketing Website (`artifacts/sorta-website`)
- **Type**: React + Vite (frontend-only, no backend required)
- **Preview path**: `/`
- **Description**: Full bilingual (EN/JP) marketing website for Sorta — a Japanese deep-tech recycling infrastructure startup
- **Sections**: Nav, Hero (with looping video), Problem, Solution, Value Proposition, Use Cases, Product Teaser, Traction/Status, Partnership Form, Vision/Mission, Team, Why Now, Footer CTA, Footer
- **Design system**: Custom CSS variables — gold (#E1A200), sky (#00A5E5), navy (#121C29), mist (#CDDFED), fog (#F4F9FF)
- **Fonts**: Rethink Sans (headings) + Quicksand (body) from Google Fonts
- **Language toggle**: React context (`src/contexts/LanguageContext.tsx`) switches all copy between English and Japanese
- **Partnership form**: react-hook-form + zod validation, submits directly to Formspree (no backend)
- **Key files**:
  - `artifacts/sorta-website/src/pages/Home.tsx` — main page assembly
  - `artifacts/sorta-website/src/components/` — individual section components
  - `artifacts/sorta-website/src/contexts/LanguageContext.tsx` — bilingual context
  - `artifacts/sorta-website/src/index.css` — full design system

## Social Share Previews

Per-section Open Graph meta tags are generated statically at build time by
`artifacts/sorta-website/scripts/generate-section-pages.mjs`, which writes a
`dist/public/<section>/index.html` for every route in `section-meta.json`. No
runtime bot detection or reverse proxy is needed — static hosting serves the
correct pre-rendered file for each path directly.

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
