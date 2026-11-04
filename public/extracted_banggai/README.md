# Banggai Paradise Tour & Travel

Website for **Banggai Paradise Tour & Travel**: *your best choice travel partner*.
Static, dependency-free site (HTML, CSS, vanilla JS) that is responsive from phone to desktop.

## Structure

```
index.html            page markup (hero, why us, packages, destinations, how it works, about, blog, CTA, footer)
assets/css/styles.css design tokens, components and responsive rules
assets/js/main.js     mobile menu, scroll reveal, booking form, newsletter, contact links
assets/img/           logo, illustrations (SVG), beach photo, van cutout, favicon
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8080
```

## Make it yours

- **WhatsApp / email:** set `CONFIG.whatsapp` (e.g. `6281234567890`) and `CONFIG.email` at the top of `assets/js/main.js`.
- **Colors:** edit the variables in `:root` at the top of `assets/css/styles.css`.
- **Photos:** replace the illustrations in `assets/img/` (`beach.svg`, `reef.svg`, `sunset.svg`, `aerial.svg`, `hero.svg`) with your own images and keep the same file names, or update the `src` in `index.html`.
- **Prices and copy:** package prices currently read "On request"; edit them directly in `index.html`.

## Deploy

Static hosting works as is (GitHub Pages, Netlify, Cloudflare Pages). For GitHub Pages: Settings → Pages → deploy from branch `main`, folder `/ (root)`.
