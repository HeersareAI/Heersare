# Heersare Designer

A responsive single-page developer portfolio built with Next.js App Router, React, TypeScript, Tailwind CSS, and Lucide icons.

## Run locally

```powershell
cd C:\Users\Heers\Desktop\HeersareAI
npm install
npm run dev
```

Open http://localhost:3000 (or the address printed by Next.js if that port is busy).

## Validate and build

```powershell
npm run lint
npm run typecheck
npm run build
```

The production build exports the portfolio to `out/`. Serve this folder with any static web host. For a local production preview:

```powershell
npx serve out
```

## Editing

- `app/page.tsx`: portfolio sections, project previews, capability and technology data.
- `app/components.tsx`: keyboard-accessible mobile navigation and progressive scroll reveals.
- `app/globals.css`: Tailwind theme, animation, reduced-motion preferences, focus styles.
- `app/layout.tsx`: page and social metadata.
- `public/`: local brand assets.

`SITE_URL` can override the canonical origin used by social metadata when moving to a different host. The Sites archive can be prepared after building with `node scripts/package-site.mjs`.

Project visuals are illustrative interfaces, not live demos. All project links lead to relevant sections; no repository links, contact details, testimonials, or statistics are fabricated. Contact returns to the top, as requested. No credentials or external services are required.
