# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing website for **Agatis Group (PT Agatis Investama Abadi)** — an Indonesia-focused investment holding company. This is a redesign of the previous Google Sites site (agatisgroup.com), rebuilt as a statically-generated **Astro** site with a "refined institutional" aesthetic.

## Commands

```bash
npm run dev       # Dev server with HMR at http://localhost:4321
npm run build     # Static production build → dist/ (also generates sitemap)
npm run preview   # Serve the built dist/ locally
```

There is no test suite or linter configured. The build is the verification gate — `npm run build` type-checks `.astro` files and fails on broken references.

When previewing via the Claude Preview MCP, use the `astro` config in `.claude/launch.json`.

## Architecture

Astro 7 (static output) + **Tailwind CSS v4** (via `@tailwindcss/vite` — no `tailwind.config.js`; theme tokens live in CSS). `@astrojs/sitemap` generates the sitemap at build. Fonts (Fraunces, Inter) are self-hosted via Fontsource and subset automatically into the build.

**Content is data-driven.** All copy and portfolio data lives in `src/data/*.ts` as typed objects/arrays, rendered by presentational components. To change wording, holdings, nav, or contact details, edit `src/data` — not the markup.

- `src/data/site.ts` — company facts, `nav` (drives both header & footer + mobile menu), `contact`, `socials` (with inline SVG icon paths).
- `src/data/holdings.ts` — `publicEquity`/`privateEquity` strategy + performance, and `publicHoldings`/`privateHoldings` arrays (typed `Holding`).
- `src/data/businesses.ts` — the three homepage business arms.

**Design system** is entirely in `src/styles/global.css`:
- Brand tokens in `@theme` (Tailwind v4 CSS-first config). Brand green is `#008037`; usable as `bg-brand`, `text-brand-dark`, `bg-cream`, etc.
- Reusable component classes in `@layer components`: `.container-x`, `.eyebrow`, `.btn`/`.btn-primary`/`.btn-on-dark`/`.btn-outline-light`, `.display`, `.heading-lg`.

**Layout & components:**
- `src/layouts/BaseLayout.astro` — `<head>` (SEO, OG/Twitter meta, JSON-LD Organization, favicons), renders `Header` + `<slot>` + `Footer`. Accepts `title`/`description`/`image` props per page.
- `src/components/Section.astro` — standard padded section; `bg` prop = `cream | tint | white | dark`.
- `Hero.astro` (`size="lg|sm"`, named `actions` slot), `Header.astro`, `Footer.astro`, `BusinessPillars.astro`, `StatBand.astro` (performance bars), `HoldingCard.astro`, `CTASection.astro`.

**Routing:** file-based in `src/pages` — `/`, `/investments`, `/investments/public-companies`, `/investments/private-companies`, `/contact`. The blog is an external Substack link (in `nav`).

### Reveal animations — important invariant

Scroll-in animations use `[data-reveal]` + an IntersectionObserver in `BaseLayout.astro`. The hiding CSS is gated behind a `.js` class (added to `<html>` by an inline head script). **Never hide `[data-reveal]` content with un-gated CSS** — the `.js` gate guarantees content is fully visible if JS is absent/fails. There is also an on-load "sweep" that reveals in-viewport elements as a safety net.

## Brand assets

Logos in `public/` were derived from the source kit at `H:\My Drive\# AGATIS Group Logo\Agatis Holding` (white Agathis-tree-in-green-circle + AGATIS wordmark): `logo-horizontal.png` (light bg), `logo-horizontal-white.png` (dark bg), `tree-white.png`/`tree-black.png` (watermark motif), `favicon.png`, `apple-touch-icon.png`, `og-image.png`.

## Not yet set up

- No deployment configured. As a static site, `dist/` deploys to any static host (Netlify/Vercel/Cloudflare Pages). DNS cutover from Google Sites is a separate step.
- Remote: `origin` → https://github.com/agatisgroup/agatisgroupwebsite (public, branch `master`). Push with `git push`.
