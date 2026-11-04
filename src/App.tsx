import React, { useState, useEffect } from 'react';
import { SvgSprite } from './components/SvgSprite';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TourPackages } from './components/TourPackages';
import { ExploreDestinations } from './components/ExploreDestinations';
import { AboutUs } from './components/AboutUs';
import { TravelBlog } from './components/TravelBlog';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { PackageModal } from './components/PackageModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ErrorPage404 } from './components/ErrorPage404';
import { TourPackage } from './types';
import { Language } from './i18n/translations';

export default function App() {
  const [currency, setCurrency] = useState<'IDR' | 'USD'>('IDR');
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('banggai_lang');
    return saved === 'ID' || saved === 'EN' ? (saved as Language) : 'EN';
  });
  const [selectedPackage, setSelectedPackage] = useState<TourPackage | null>(null);
  const [is404Active, setIs404Active] = useState<boolean>(() => {
    return window.location.hash === '#/404' || window.location.hash === '#404' || window.location.hash === '#error';
  });

  const handleSelectLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('banggai_lang', lang);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  // Scroll reveal observer
  useEffect(() => {
    document.documentElement.classList.add('js');
    const reveals = document.querySelectorAll('[data-reveal]');
    if ('IntersectionObserver' in window && reveals.length > 0) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add('in');
              io.unobserve(en.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
      );
      reveals.forEach((el) => io.observe(el));
      return () => io.disconnect();
    }
  }, []);

  // Listen for hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/404' || hash === '#404' || hash === '#error') {
        setIs404Active(true);
      } else {
        setIs404Active(false);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleToggleCurrency = () => {
    setCurrency((prev) => (prev === 'IDR' ? 'USD' : 'IDR'));
  };

  const handleExplorePackages = () => {
    const el = document.getElementById('packages');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewDestinations = () => {
    const el = document.getElementById('destinations');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactScroll = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // If 404 route is active, render dedicated Error 404 page
  if (is404Active) {
    return (
      <ErrorPage404
        language={language}
        onBackToHome={() => {
          window.location.hash = '#home';
          setIs404Active(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onExplorePackages={() => {
          window.location.hash = '#packages';
          setIs404Active(false);
          setTimeout(() => {
            const el = document.getElementById('packages');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}
      />
    );
  }

  return (
    <>
      {/* SVG Icon Sprite Definitions from extracted index.html */}
      <SvgSprite />

      <a className="skip" href="#main">
        {language === 'ID' ? 'Lewati ke konten' : 'Skip to content'}
      </a>

      {/* Top Header Navigation */}
      <Navbar
        onPlanTripClick={handleContactScroll}
        currency={currency}
        onToggleCurrency={handleToggleCurrency}
        language={language}
        onSelectLanguage={handleSelectLanguage}
      />

      {/* Main Content Sections */}
      <main id="main">
        {/* Section 1: Hero */}
        <Hero
          onExplorePackages={handleExplorePackages}
          onViewDestinations={handleViewDestinations}
          language={language}
        />

        {/* Section 2: Trust & How It Works */}
        <WhyChooseUs
          onPlanTripClick={handleContactScroll}
          language={language}
        />

        {/* Section 3: Tour Packages */}
        <TourPackages
          onSelectPackage={(pkg) => setSelectedPackage(pkg)}
          currency={currency}
          searchFilter="all"
          language={language}
        />

        {/* Section 4: Explore Destinations (Bento Grid) */}
        <ExploreDestinations
          onPlanTripForDestination={handleContactScroll}
          language={language}
        />

        {/* Section 5: About Us */}
        <AboutUs
          onMeetTeamClick={handleContactScroll}
          language={language}
        />

        {/* Section 6: Travel Blog */}
        <TravelBlog language={language} />

        {/* Section 7: Final CTA */}
        <FinalCTA onPlanTripClick={handleContactScroll} language={language} />
      </main>

      {/* Footer */}
      <Footer language={language} />

      {/* Interactive Modals */}
      {selectedPackage && (
        <PackageModal
          pkg={selectedPackage}
          onClose={() => setSelectedPackage(null)}
          currency={currency}
        />
      )}

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

    </>
  );
}
