import React, { useState, useEffect } from 'react';
import { Language } from '../i18n/translations';

interface NavbarProps {
  onPlanTripClick: () => void;
  currency: 'IDR' | 'USD';
  onToggleCurrency: () => void;
  language: Language;
  onSelectLanguage: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onPlanTripClick,
  language,
  onSelectLanguage,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

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
  }, []);

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`} id="top">
      <div className="nav">
        {/* Brand Logo from extracted assets */}
        <a className="brand" href="#home" aria-label="Banggai Paradise Tour & Travel, home" onClick={(e) => handleNavClick(e, '#home')}>
          <img src="/assets/img/logo-white.png" alt="Banggai Paradise Tour & Travel" width="530" height="250" />
        </a>

        {/* Navigation Menu */}
        <nav className={`menu ${mobileMenuOpen ? 'open' : ''}`} id="menu" aria-label="Main navigation">
          <a
            href="#home"
            className={activeSection === 'home' ? 'is-active' : ''}
            onClick={(e) => handleNavClick(e, '#home')}
          >
            {language === 'ID' ? 'Beranda' : 'Home'}
          </a>
          <a
            href="#packages"
            className={activeSection === 'packages' ? 'is-active' : ''}
            onClick={(e) => handleNavClick(e, '#packages')}
          >
            {language === 'ID' ? 'Paket Wisata' : 'Tour Package'}
          </a>
          <a
            href="#destinations"
            className={activeSection === 'destinations' ? 'is-active' : ''}
            onClick={(e) => handleNavClick(e, '#destinations')}
          >
            {language === 'ID' ? 'Destinasi' : 'Destination'}
          </a>
          <a
            href="#about"
            className={activeSection === 'about' ? 'is-active' : ''}
            onClick={(e) => handleNavClick(e, '#about')}
          >
            {language === 'ID' ? 'Tentang Kami' : 'About Us'}
          </a>
          <a
            href="#blog"
            className={activeSection === 'blog' ? 'is-active' : ''}
            onClick={(e) => handleNavClick(e, '#blog')}
          >
            {language === 'ID' ? 'Blog Wisata' : 'Travel Blog'}
          </a>

          {/* Mobile Language & CTA */}
          <div className="flex items-center justify-between gap-3 pt-4 border-t border-white/10 min-[981px]:hidden">
            <span className="text-xs text-white/70 font-medium">Bahasa / Language:</span>
            <div className="flex items-center rounded-full bg-white/10 border border-white/20 p-1 text-xs">
              <button
                type="button"
                onClick={() => onSelectLanguage('EN')}
                className={`px-3 py-1 rounded-full font-bold transition-all cursor-pointer ${
                  language === 'EN' ? 'bg-white text-[#07485A]' : 'text-white/80'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => onSelectLanguage('ID')}
                className={`px-3 py-1 rounded-full font-bold transition-all cursor-pointer ${
                  language === 'ID' ? 'bg-white text-[#07485A]' : 'text-white/80'
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
            <span>{language === 'ID' ? 'Rencanakan Trip' : 'Plan My Trip'}</span>
            <svg className="ic"><use href="#i-arrow" /></svg>
          </a>
        </nav>

        {/* Right CTA & Language switcher (Desktop) */}
        <div className="hidden min-[981px]:flex items-center gap-3">
          <div className="flex items-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 p-0.5 text-xs">
            <button
              type="button"
              onClick={() => onSelectLanguage('EN')}
              className={`px-2.5 py-1 rounded-full font-semibold transition-all cursor-pointer ${
                language === 'EN' ? 'bg-white text-[#07485A] shadow-sm' : 'text-white/80 hover:text-white'
              }`}
              title="Switch to English"
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => onSelectLanguage('ID')}
              className={`px-2.5 py-1 rounded-full font-semibold transition-all cursor-pointer ${
                language === 'ID' ? 'bg-white text-[#07485A] shadow-sm' : 'text-white/80 hover:text-white'
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
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
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
