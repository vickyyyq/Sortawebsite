# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### Sorta Marketing Website (`artifacts/sorta-website`)
- **Type**: React + Vite (frontend-only, no backend required)
- **Preview path**: `/`
- **Description**: Full bilingual (EN/JP) marketing website for Sorta — a Japanese deep-tech recycling infrastructure startup
- **Sections**: Nav, Hero (with looping video), Problem, Solution, Value Proposition, Use Cases, Product Teaser, Traction/Status, Partnership Form, Vision/Mission, Team, Why Now, Footer CTA, Footer
- **Design system**: Custom CSS variables — gold (#E1A200), sky (#00A5E5), navy (#121C29), mist (#CDDFED), fog (#F4F9FF)
- **Fonts**: Rethink Sans (headings) + Quicksand (body) from Google Fonts
- **Language toggle**: React context (`src/contexts/LanguageContext.tsx`) switches all copy between English and Japanese
- **Partnership form**: react-hook-form + zod validation, no backend (shows toast on submit)
- **Key files**:
  - `artifacts/sorta-website/src/pages/Home.tsx` — main page assembly
  - `artifacts/sorta-website/src/components/` — individual section components
  - `artifacts/sorta-website/src/contexts/LanguageContext.tsx` — bilingual context
  - `artifacts/sorta-website/src/index.css` — full design system

### API Server (`artifacts/api-server`)
- Express 5, esbuild, Zod validation
- Routes in `artifacts/api-server/src/routes/`
- `/api/share/:section` — returns fully-rendered OG-tag HTML for social crawlers

## Bot-Detection Reverse Proxy

Social crawlers (Slack, LINE, Facebook, Twitter/X, LinkedIn, etc.) are intercepted before they reach the React SPA so they receive correct Open Graph meta tags.

**Files:**
- `Caddyfile` — canonical Caddy reverse-proxy config for self-hosted / custom-domain deployments at sorta.co.jp. Matches known bot user-agents and routes section paths (`/problem`, `/solution`, `/use-cases`, `/team`, `/why-now`, `/contact`, `/`) to `/api/share/:section`.
- `artifacts/sorta-website/proxy-server.mjs` — zero-extra-dependency Node.js server used by Replit's production deployment. Same bot-detection logic: bots → API OG preview; humans → static SPA files with index.html fallback.

**Production deployment:** The website's `artifact.toml` now runs `proxy-server.mjs` instead of static-file serving, so bot detection is active in every Replit deployment.

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
