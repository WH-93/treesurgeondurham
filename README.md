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

## Contact / form

The contact form submits via FormSubmit.co to enquiries@treefellingnearme.co.uk
(same operator as treefellingnearme.co.uk). The address is only used as the
form's delivery target — no phone or email is shown on the site.

## Notes

- Sitemap: Astro's sitemap integration not installed yet — `@astrojs/sitemap` would
  generate sitemap-index.xml automatically. Currently robots.txt references it but
  the file is only generated after adding the integration.
- Favicon is a generated SVG mark (tree + stump).
