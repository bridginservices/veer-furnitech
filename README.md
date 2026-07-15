# Veer Furnitech — Website

Modern, responsive, SEO-optimized 4-page marketing site for **Veer Furnitech**, a
furniture manufacturing & interior design company in Nagpur, Maharashtra.

Built with [Astro](https://astro.build) — fast, static-first HTML for excellent
SEO and load performance. No framework runtime; just a little vanilla JS for the
slider, menu and form.

## Pages

| Page | Route | Highlights |
| --- | --- | --- |
| Home | `/` | Auto hero slider, about, services, "areas we serve" marquee, testimonials, stats |
| Services | `/services/` | Interior design, material supply, custom manufacturing, installation |
| Furniture | `/furniture/` | Video-background banner + living/bedroom/kitchen/office/commercial categories |
| Contact | `/contact/` | WhatsApp + email form, click-to-call, Google Maps embed, socials |

## Getting started

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # production build → ./dist
npm run preview    # preview the production build
```

> On this machine, Node lives at `C:\Program Files\nodejs`. If `npm` isn't found
> in a fresh shell, add that folder to `PATH` first.

## Brand & content

- **Colors:** off-white `#f8f5f2` + maroon `#6b1d1d` with a brass accent `#b08d57`.
- **Fonts:** Playfair Display (headings) + Poppins (body), via Google Fonts.
- All business info (phone, address, email, socials, services, testimonials,
  furniture categories) lives in **`src/data/site.js`** — edit there once and it
  updates across every page. This keeps the Name/Address/Phone consistent for
  local SEO.

## Before going live — replace placeholders

1. **Domain:** set the real domain in `astro.config.mjs` (`site`) and
   `public/robots.txt`. This drives canonical URLs, the sitemap and Open Graph.
2. **Images:** hero, about, service and furniture images currently load from
   Unsplash for demo purposes. Swap them for real Veer Furnitech project photos
   (put files in `src/assets/` or `public/`, then update the paths).
3. **Video:** the Furniture banner uses a sample stock video; replace the
   `<source src>` in `src/pages/furniture.astro` with your own clip.
4. **Logo:** the official Veer Furnitech logo is in place at `public/logo.png`
   (transparent PNG, rendered via `src/components/Logo.astro`). Replace that
   file to update it everywhere.
5. **OG image:** add a `public/og-image.jpg` (1200×630) for social sharing.
6. **Google Maps:** the embed points to the Hingna MIDC area — replace `mapEmbed`
   in `src/data/site.js` with the exact pin once the Google Business Profile is
   verified.

## SEO features included

- Per-page meta titles, descriptions and keywords targeting *Furniture in
  Nagpur*, *Interior Designer in Nagpur*, *Modular Kitchen Nagpur*, etc.
- Semantic heading hierarchy (one `<h1>` per page), image `alt` text.
- `LocalBusiness`/`FurnitureStore` JSON-LD structured data with NAP + geo.
- Canonical URLs, Open Graph + Twitter cards, `sitemap-index.xml`, `robots.txt`.
- Lazy-loaded images and fast static output.
