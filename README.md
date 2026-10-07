# Coworking Space Al Reem Island — Aegis Coworking micro-site

One-page React (Vite) site for **https://coworkingspacealreemisland.online**, targeting "coworking space Al Reem Island" (shared office, flexible workspace, coworking space Addax Tower, coworking space ADGM, coworking space Abu Dhabi).
Header and footer link back to www.aegiscoworking.ae.

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # build + prerender -> dist/
```

## Prerender (runs on every `npm run build` / Vercel deploy)

`scripts/prerender.mjs` renders the full page into `dist/index.html` (so Google and AI bots read all
content without JavaScript), injects title/meta/canonical/Open Graph/geo tags and the JSON-LD graph
(WebSite, WebPage, Breadcrumb, Organization, LocalBusiness, Service + OfferCatalog, FAQPage, guides),
inlines CSS, preloads fonts, and writes `404.html`, `sitemap.xml`, `robots.txt` and dated `llms` files.

## Edit content

Everything (prices, hero stats, spaces, pricing, amenities, gallery, reviews, FAQs, guides, keywords) is in `src/data/content.js`.
Also update `public/llms.txt` and `public/llms-full.txt` when prices change.

## Deploy

GitHub → Vercel (framework Vite, defaults) → add domain `coworkingspacealreemisland.online` (connect to Production)
and `www.coworkingspacealreemisland.online` (308 redirect to coworkingspacealreemisland.online) → DNS at IONOS:
A record `@` → value shown by Vercel.
