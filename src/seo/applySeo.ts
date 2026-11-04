import type { Language } from '../i18n/translations';

/**
 * Keeps <html lang>, <title> and the description / social meta tags in sync with
 * the language the visitor picked. The static values in index.html are the English
 * defaults (what crawlers see first); this only changes them for Indonesian.
 *
 * Canonical URL, og:image and JSON-LD are intentionally NOT touched: the site is a
 * single URL, so they never change per language.
 */
interface SeoCopy {
  htmlLang: string;
  ogLocale: string;
  ogLocaleAlternate: string;
  title: string;
  description: string;
}

const SEO_COPY: Record<Language, SeoCopy> = {
  EN: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    ogLocaleAlternate: 'id_ID',
    title: 'Banggai Islands Tour Packages | Banggai Paradise',
    description:
      'Private Banggai Islands tours with licensed local guides: Paisu Pok Lake, Sombori karst lagoons, jellyfish lake and island hopping. Free drone documentation.',
  },
  ID: {
    htmlLang: 'id',
    ogLocale: 'id_ID',
    ogLocaleAlternate: 'en_US',
    title: 'Paket Wisata Kepulauan Banggai | Banggai Paradise',
    description:
      'Paket wisata Kepulauan Banggai dengan pemandu lokal berlisensi: Danau Paisu Pok, Sombori, Danau Ubur-Ubur, island hopping. Trip privat, video drone gratis.',
  },
};

function setMeta(selector: string, createAttr: 'name' | 'property', key: string, value: string): void {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(createAttr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

export function applySeo(language: Language): void {
  if (typeof document === 'undefined') return;
  const copy = SEO_COPY[language] ?? SEO_COPY.EN;

  document.documentElement.lang = copy.htmlLang;
  document.title = copy.title;

  setMeta('meta[name="description"]', 'name', 'description', copy.description);

  setMeta('meta[property="og:title"]', 'property', 'og:title', copy.title);
  setMeta('meta[property="og:description"]', 'property', 'og:description', copy.description);
  setMeta('meta[property="og:locale"]', 'property', 'og:locale', copy.ogLocale);
  setMeta('meta[property="og:locale:alternate"]', 'property', 'og:locale:alternate', copy.ogLocaleAlternate);

  setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', copy.title);
  setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', copy.description);
}
