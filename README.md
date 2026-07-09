# Agatis Group Website

Marketing website for **Agatis Group (PT Agatis Investama Abadi)**, an Indonesia-focused investment holding company.

**Live:** [www.agatisgroup.com](https://www.agatisgroup.com)

## Tech stack

- [Astro 7](https://astro.build), statically generated (`output: 'static'`)
- [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite` (CSS-first config, no `tailwind.config.js`)
- Self-hosted fonts (Fraunces, Inter) via [Fontsource](https://fontsource.org)
- `@astrojs/sitemap` for sitemap generation at build time

## Development

Requires **Node 22+** (pinned in `.nvmrc`).

```bash
npm install
npm run dev       # Dev server with HMR at http://localhost:4321
npm run build     # Production build → dist/
npm run preview   # Serve the built dist/ locally
```

There is no separate test suite. `npm run build` is the verification gate; it type-checks `.astro` files and fails on broken references.

## Project structure

```
src/
├── data/          # All copy & portfolio data (typed TS objects), edit content here
│   ├── site.ts        # Company facts, nav, contact, socials
│   ├── holdings.ts    # Public/private equity strategy & holdings
│   └── businesses.ts  # Homepage business arms
├── layouts/       # BaseLayout (SEO, OG meta, JSON-LD, header/footer)
├── components/    # Presentational components (Hero, Section, HoldingCard, …)
├── pages/         # File-based routes: /, /investments, /contact, …
└── styles/        # global.css: design tokens & component classes
```

**Content is data-driven:** to change wording, holdings, navigation, or contact details, edit the files in `src/data/`, not the component markup.

## Deployment

Hosted on **Cloudflare Pages**, Git-connected: every push to `master` automatically builds and deploys. No manual step required.
