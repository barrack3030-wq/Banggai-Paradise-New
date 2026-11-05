import React, { useState, useEffect } from 'react';
import { assetUrl } from '../utils/assetUrl';
import { Language } from '../i18n/translations';

interface NavbarProps {
  onPlanTripClick: () => void;
  currency: 'IDR' | 'USD';
  onToggleCurrency: () => void;
  language: Language;
  onSelectLanguage: (lang: Language | 'ES') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onPlanTripClick,
  language,
  onSelectLanguage,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Language switch reloads the page, so show the new choice immediately and let the
  // transition play before navigating (otherwise the page is replaced before anything animates).
  const [pendingLang, setPendingLang] = useState<Language | 'ES' | null>(null);
  const shownLang = pendingLang ?? language;
  const chooseLanguage = (lang: Language | 'ES') => {
    if (pendingLang || lang === language) return;
    setPendingLang(lang);
    window.setTimeout(() => onSelectLanguage(lang), 220);
  };
  // Back/forward cache can restore this page with a stale pending state
  useEffect(() => {
    const reset = () => setPendingLang(null);
    window.addEventListener('pageshow', reset);
    return () => window.removeEventListener('pageshow', reset);
  }, []);
  const basePath = import.meta.env.BASE_URL;
  const pathParts = window.location.pathname.replace(basePath, '').split('/').filter(Boolean);
  const localePrefix = pathParts[0] === 'id' || pathParts[0] === 'eng' || pathParts[0] === 'es' ? pathParts[0] : (language === 'ID' ? 'id' : language === 'ES' ? 'es' : 'eng');
  const localizedBase = basePath + localePrefix + '/';
  const currentPath = (pathParts[0] === 'id' || pathParts[0] === 'eng' || pathParts[0] === 'es' ? pathParts[1] : pathParts[0]) || 'home';
  const [activeSection, setActiveSection] = useState(currentPath);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      if (currentPath !== 'home') return;
      const sections = ['home', 'packages', 'destinations', 'how', 'about', 'blog', 'contact'];
      const scrollPos = window.scrollY + 160;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPath]);

  // Lock body scroll on mobile when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`} id="top">
      <div className="nav">
        {/* Brand Logo from extracted assets */}
        <a className="brand" href={localizedBase} aria-label="Banggai Paradise Tour & Travel, home" onClick={closeMenu}>
          <img src={assetUrl('assets/img/logo-white.png')} alt="Banggai Paradise Tour & Travel" width="530" height="250" />
        </a>

        {/* Navigation Menu */}
        <nav className={`menu ${mobileMenuOpen ? 'open' : ''}`} id="menu" aria-label="Main navigation">
          <a
            href={localizedBase}
            className={activeSection === 'home' ? 'is-active' : ''}
            onClick={closeMenu}
          >
            {language === 'ID' ? 'Beranda' : language === 'ES' ? 'Inicio' : 'Home'}
          </a>
          <a
            href={localizedBase + "packages/"}
            className={activeSection === 'packages' ? 'is-active' : ''}
            onClick={closeMenu}
          >
            {language === 'ID' ? 'Paket Wisata' : language === 'ES' ? 'Paquetes' : 'Tour Package'}
          </a>
          <a
            href={localizedBase + "destinations/"}
            className={activeSection === 'destinations' ? 'is-active' : ''}
            onClick={closeMenu}
          >
            {language === 'ID' ? 'Destinasi' : language === 'ES' ? 'Destinos' : 'Destination'}
          </a>
          <a
            href={localizedBase + "about/"}
            className={activeSection === 'about' ? 'is-active' : ''}
            onClick={closeMenu}
          >
            {language === 'ID' ? 'Tentang Kami' : language === 'ES' ? 'Quiénes somos' : 'About Us'}
          </a>
          <a
            href={localizedBase + "blog/"}
            className={activeSection === 'blog' ? 'is-active' : ''}
            onClick={closeMenu}
          >
            {language === 'ID' ? 'Blog Wisata' : language === 'ES' ? 'Blog de viajes' : 'Travel Blog'}
          </a>

          {/* Mobile Language & CTA */}
          <div className="mobile-language-row flex items-center justify-between gap-3 pt-4 border-t border-white/10 min-[981px]:hidden">
            <span className="text-sm text-white/80 font-medium">Bahasa / Language:</span>
            <div className="mobile-language-switch flex items-center rounded-full bg-white/10 border border-white/25 p-1">
              <button
                type="button"
                onClick={() => chooseLanguage('EN')}
                className={`mobile-language-option px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 ease-out active:scale-95 cursor-pointer ${
                  shownLang === 'EN' ? 'bg-white text-[#07485A]' : 'text-white/80'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => chooseLanguage('ES')}
                className={`mobile-language-option px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 ease-out active:scale-95 cursor-pointer ${
                  shownLang === 'ES' ? 'bg-white text-[#07485A]' : 'text-white/80'
                }`}
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => chooseLanguage('ID')}
                className={`mobile-language-option px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 ease-out active:scale-95 cursor-pointer ${
                  shownLang === 'ID' ? 'bg-white text-[#07485A]' : 'text-white/80'
                }`}
              >
                ID
              </button>
            </div>
          </div>

          <a
            href="#contact"
            className="menu-cta btn btn-coral btn-sm"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              onPlanTripClick();
            }}
          >
            <span>{language === 'ID' ? 'Rencanakan Trip' : language === 'ES' ? 'Planifica tu viaje' : 'Plan My Trip'}</span>
            <svg className="ic"><use href="#i-arrow" /></svg>
          </a>
        </nav>

        {/* Right CTA & Language switcher (Desktop) */}
        <div className="hidden min-[981px]:flex items-center gap-3">
          <div className="flex items-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 p-0.5">
            <button
              type="button"
              onClick={() => chooseLanguage('EN')}
              className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ease-out active:scale-95 cursor-pointer ${
                shownLang === 'EN' ? 'bg-white text-[#07485A] shadow-sm' : 'text-white/80 hover:text-white'
              }`}
              title="Switch to English"
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => chooseLanguage('ES')}
              className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ease-out active:scale-95 cursor-pointer ${
                shownLang === 'ES' ? 'bg-white text-[#07485A] shadow-sm' : 'text-white/80 hover:text-white'
              }`}
              title="Cambiar a español"
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => chooseLanguage('ID')}
              className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ease-out active:scale-95 cursor-pointer ${
                shownLang === 'ID' ? 'bg-white text-[#07485A] shadow-sm' : 'text-white/80 hover:text-white'
              }`}
              title="Ganti ke Bahasa Indonesia"
            >
              ID
            </button>
          </div>

          <a
            href="#contact"
            className="btn btn-coral btn-sm nav-cta"
            onClick={(e) => {
              e.preventDefault();
              onPlanTripClick();
            }}
          >
            <span>{language === 'ID' ? 'Rencanakan Trip' : 'Plan My Trip'}</span>
            <svg className="ic"><use href="#i-arrow" /></svg>
          </a>
        </div>

        {/* Burger Button for Mobile */}
        <button
          className="burger"
          id="burger"
          aria-label={mobileMenuOpen ? (language === 'ID' ? 'Tutup menu' : 'Close menu') : (language === 'ID' ? 'Buka menu' : 'Open menu')}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};
