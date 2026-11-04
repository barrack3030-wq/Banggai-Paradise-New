import React, { useState, useEffect } from 'react';
import { SvgSprite } from './components/SvgSprite';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TourPackages } from './components/TourPackages';
import { ExploreDestinations } from './components/ExploreDestinations';
import { AboutUs } from './components/AboutUs';
import { TravelBlog } from './components/TravelBlog';
import { Testimonials } from './components/Testimonials';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { PackageModal } from './components/PackageModal';
import { TripPlannerModal } from './components/TripPlannerModal';
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
  const [isTripPlannerOpen, setIsTripPlannerOpen] = useState(false);
  const [plannerDestination, setPlannerDestination] = useState<string>('');
  const [searchFilter, setSearchFilter] = useState<string>('all');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
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

  const handleSearch = (filters: { destination: string; date: string; guests: string }) => {
    setSearchFilter(filters.destination || 'all');
    if (filters.destination) {
      setPlannerDestination(filters.destination);
    }
    showToast(
      language === 'ID'
        ? 'Pilihan menarik! Menampilkan paket yang sesuai...'
        : "Great choice! Let's explore your matching journeys."
    );
    const el = document.getElementById('packages');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenPlannerForDestination = (destName: string) => {
    setPlannerDestination(destName);
    setIsTripPlannerOpen(true);
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
        onPlanTripClick={() => {
          setPlannerDestination('');
          setIsTripPlannerOpen(true);
        }}
        currency={currency}
        onToggleCurrency={handleToggleCurrency}
        language={language}
        onSelectLanguage={handleSelectLanguage}
      />

      {/* Main Content Sections */}
      <main id="main">
        {/* Section 1: Hero & Booking Bar */}
        <Hero
          onExplorePackages={handleExplorePackages}
          onViewDestinations={handleViewDestinations}
          onSearch={handleSearch}
          language={language}
        />

        {/* Section 2: Trust & How It Works */}
        <WhyChooseUs
          onPlanTripClick={() => {
            setPlannerDestination('');
            setIsTripPlannerOpen(true);
          }}
          language={language}
        />

        {/* Section 3: Tour Packages */}
        <TourPackages
          onSelectPackage={(pkg) => setSelectedPackage(pkg)}
          currency={currency}
          searchFilter={searchFilter}
          language={language}
        />

        {/* Section 4: Explore Destinations (Bento Grid) */}
        <ExploreDestinations
          onPlanTripForDestination={handleOpenPlannerForDestination}
          language={language}
        />

        {/* Section 5: About Us */}
        <AboutUs
          onMeetTeamClick={() => {
            setPlannerDestination('');
            setIsTripPlannerOpen(true);
          }}
          language={language}
        />

        {/* Section 6: Travel Blog */}
        <TravelBlog language={language} />

        {/* Section 7: Testimonials */}
        <Testimonials
          onPlanTripClick={() => {
            setPlannerDestination('');
            setIsTripPlannerOpen(true);
          }}
          language={language}
        />

        {/* Section 8: Final CTA */}
        <FinalCTA
          onPlanTripClick={() => {
            setPlannerDestination('');
            setIsTripPlannerOpen(true);
          }}
          language={language}
        />
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

      {isTripPlannerOpen && (
        <TripPlannerModal
          isOpen={isTripPlannerOpen}
          onClose={() => setIsTripPlannerOpen(false)}
          currency={currency}
          initialDestination={plannerDestination}
        />
      )}

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

      {/* Global Interactive Toast Notification */}
      {toastMessage && (
        <div id="toast" className="toast show" role="alert">
          {toastMessage}
        </div>
      )}
    </>
  );
}
