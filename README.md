# SourcePoint website — Astra draft

Fresh implementation for sourcepointjohn/SP-Website-Astra. No content or code was pulled from the other website repository. Uses the supplied brand artwork and three supplied product images.

## Build and hosting

- Install development tools: `npm ci` (Node 20+).
- Build command: `npm run build`. Pinned esbuild compacts CSS and JavaScript whitespace without bundling, identifier renaming, or syntax minification.
- Format source: `npm run format`; verify formatting: `npm run format:check`. Prettier preserves embedded HTML template text.
- Stylesheets retain their original cascade order; section comments identify component and responsive groups. Shared colors, fonts, and repeated radii are defined in `public/styles.css`.
- Cloudflare Worker name: `sp-website-astra`.
- Deploy command: `npx wrangler@4 deploy`.
- Root directory: repository root.
- Static output: `dist`, configured in `wrangler.jsonc`.
- Connect this repository in Cloudflare Workers Builds. No custom domain is configured by this project.

## Content rules

Use Steel French throughout. The only warehouse location reference is Atlanta, GA Warehouses. Include Forge, Chateau, Element, Heritage, Valera, Lucera. Feature Chateau, Element and Heritage Torrefied Mahogany on the homepage. Preserve the supplied logo artwork, Source Green #157553, Forest Black #03140A, Sage #BBCAC5 and Bone #F8F5EE.

## Draft limitations / before launch

All pages are noindex and robots disallows crawling. This is not access control. Forms explicitly say preview only and cannot submit; no personal data is stored or transmitted. Add approved form endpoints and privacy terms before enabling collection. No unverified pricing, discounts, performance claims, inventory, addresses, testimonials or lead times are published.

Supply approved executive bios and portraits, warranty and care PDFs, specification and installation documents, dealer directory and portal URL, sales contact details, and any legal pages needed for production. No dummy product pages or dead document links are included. Odoo integration and dealer authentication are not implemented.

After content approval, enable indexing and generate a sitemap for the confirmed production domain. The legal agreements supplied in the conversation are not included in this public repository.

## Source organization

- `build.mjs`: asset compaction and static output generation.
- `src/pages.mjs`: route registration and page-specific styles/scripts.
- `src/pages/`: home, collections, company, resources, contact, and not-found templates.
- `src/layout.mjs`: shared document head, navigation, and footer.
- `src/components.mjs`: shared links, CTAs, product cards, and draft form markup.
- `src/warranty-data.mjs`: product IDs, display names, document URLs, and revision labels.
- `src/warranty.mjs`: reusable warranty group, product card, and document-link rendering.
- `public/warranty.css`: warranty styles, loaded after the base stylesheet only on the warranty page.

`npm run deploy` invokes Wrangler once. Wrangler runs `npm run build` through the existing configuration hook; the npm deploy script does not run a second build. Element and warranty page assets are declared through the shared document head.
