# Banggai Paradise

Website source for **Banggai Paradise Tour & Travel** (Vite + React, deployed to GitHub Pages
by `.github/workflows/deploy-pages.yml` on every push to `main`).

## SEO

### What is already in place

| Item | Where |
| --- | --- |
| Title, meta description, canonical, robots, Open Graph, Twitter card | `index.html` |
| Structured data (TravelAgency + WebSite + WebPage, JSON-LD) | `index.html` |
| Title / description / `<html lang>` switch for Indonesian | `src/seo/applySeo.ts` (called from `App.tsx`) |
| `robots.txt`, `sitemap.xml` (page + 5 images), `404.html` (noindex) | `public/` |
| Share image 1200×630, favicon PNG, apple-touch-icon, 512px logo | `public/assets/img/` |
| Legacy static copy set to `noindex` | `public/extracted_banggai/index.html` |

### Production URL

All absolute URLs currently use `https://barrack3030-wq.github.io/Banggai-Paradise-New/`.
When the site moves to a custom domain, replace that URL in these files:

```bash
OLD='https://barrack3030-wq.github.io/Banggai-Paradise-New/'
NEW='https://YOUR-DOMAIN.com/'
grep -rlF "$OLD" index.html public README.md | xargs sed -i "s#$OLD#$NEW#g"
```

Also change `base` in `vite.config.ts` to `'/'` (it is `/Banggai-Paradise-New/` on GitHub Actions
builds), and add a `public/CNAME` file containing the domain.

> `robots.txt` is only honoured at the root of a host. On the current GitHub Pages project URL
> it has no effect; it starts working on a custom domain.

### Launch checklist (needs your Google account)

1. Open [Google Search Console](https://search.google.com/search-console) and add the property
   (URL-prefix property for the current URL, or Domain property for a custom domain).
2. Verify ownership (HTML tag, or DNS record for a custom domain).
3. Submit `sitemap.xml` under *Sitemaps*.
4. Use *URL inspection* on the home page, check "View crawled page" shows the content, then *Request indexing*.
5. Test sharing previews with the Facebook Sharing Debugger and the Rich Results Test.
6. Create a Google Business Profile with the **same** name, phone and address as the website.

### Before going live: replace placeholders

These values are used on the site and in the structured data. They look like placeholders:

- Phone / WhatsApp `+62 812-4567-890` (in `index.html`, `Footer.tsx`, `FloatingWhatsApp.tsx`, `FinalCTA.tsx`, …)
- Email `info@banggaiparadise.com`
- Social links in `Footer.tsx` point to the generic `instagram.com`, `facebook.com`, `tiktok.com`.
  Use your real profile URLs and add them as `sameAs` in the JSON-LD.
