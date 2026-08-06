# Tree Surgeon Durham

Basic Astro site for a Durham tree surgeon. Deployed to Cloudflare Pages.

## Dev

```bash
nvm use 22
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
npm run preview    # serve the built site
```

## Deploy

```bash
npx wrangler pages deploy dist --project-name=treesurgeondurham --branch=main
```

Domain: treesurgeondurham.co.uk (Cloudflare Pages custom domain, zone active in Cloudflare).

## Areas template (local SEO hub-and-spoke)

- `/areas/` — hub page linking to all town pages
- `/areas/<town>/` — one landing page per town, targeting "tree surgeon <town>"
- Data source: `src/data/areas.ts` — add a town by adding one entry (slug, name, intro, work)
- Spoke pages share the services list, CTA and breadcrumb; the H1/title/intro are town-specific
- Sitemap regenerates automatically on build

To add a town: append an object to `areas` in `src/data/areas.ts`, rebuild, deploy.

## Contact / form

The contact form submits via FormSubmit.co to enquiries@treefellingnearme.co.uk
(same operator as treefellingnearme.co.uk). The address is only used as the
form's delivery target — no phone or email is shown on the site.

## Notes

- Sitemap: Astro's sitemap integration not installed yet — `@astrojs/sitemap` would
  generate sitemap-index.xml automatically. Currently robots.txt references it but
  the file is only generated after adding the integration.
- Favicon is a generated SVG mark (tree + stump).
