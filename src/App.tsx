import React, { useState, useEffect } from 'react';
import { SvgSprite } from './components/SvgSprite';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TourPackages } from './components/TourPackages';
import { ExploreDestinations } from './components/ExploreDestinations';
import { DestinationsPage } from './components/DestinationsPage';
import { AboutUs } from './components/AboutUs';
import { TravelBlog } from './components/TravelBlog';

import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { PackageModal } from './components/PackageModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { TourPackage } from './types';
import { Language } from './i18n/translations';

type Page = 'home' | 'packages' | 'destinations' | 'about' | 'blog';

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('banggai_lang');
      return saved === 'ID' || saved === 'EN' ? saved as Language : 'EN';
    } catch { return 'EN'; }
  });
  const [selectedPackage, setSelectedPackage] = useState<TourPackage | null>(null);
  const basePath = import.meta.env.BASE_URL;
  const routePath = window.location.pathname.startsWith(basePath)
    ? window.location.pathname.slice(basePath.length)
    : window.location.pathname.replace(/^\/+/, '');
  const route = routePath.split('/').filter(Boolean)[0] || 'home';
  const page: Page = route === 'packages' || route === 'destinations' || route === 'about' || route === 'blog' ? route : 'home';
  const isArticleReadingPage = page === 'blog' && routePath.split('/').filter(Boolean).length > 1;

  const handleSelectLanguage = (lang: Language) => {
    setLanguage(lang);
    try { localStorage.setItem('banggai_lang', lang); } catch { /* optional */ }
  };

  useEffect(() => {
    document.body.classList.toggle('blog-reading-mode', isArticleReadingPage);
    return () => document.body.classList.remove('blog-reading-mode');
  }, [isArticleReadingPage]);

  useEffect(() => {
    document.documentElement.lang = language.toLowerCase();
    document.documentElement.classList.add('js');
    const reveals = document.querySelectorAll('[data-reveal]');
    if ('IntersectionObserver' in window && reveals.length) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
      reveals.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }
  }, [page, language]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const intro = {
    packages: language === 'ID'
      ? ['Paket Tour Kepulauan Banggai', 'Pilih pengalaman perjalanan yang sesuai, mulai dari wisata pantai dan island hopping hingga petualangan laut bersama tim lokal Banggai Paradise.']
      : ['Banggai Islands Tour Packages', 'Choose a trip that suits your travel style, from beach escapes and island hopping to ocean adventures with the local Banggai Paradise team.'],
    destinations: language === 'ID'
      ? ['Jelajahi Destinasi Kepulauan Banggai', 'Kenali dan rencanakan perjalanan ke danau sebening kristal, pantai pasir putih, gugusan pulau, dan lanskap pesisir Banggai.']
      : ['Explore the Banggai Islands', 'Discover and plan a journey to crystal-clear lakes, white-sand beaches, island groups and the coastal landscapes of Banggai.'],
    about: language === 'ID'
      ? ['Tentang Banggai Paradise', 'Kenali tim lokal dan cara kami membantu merencanakan perjalanan yang nyaman, terarah, dan berkesan di Kepulauan Banggai.']
      : ['About Banggai Paradise', 'Meet the local team and learn how we help plan thoughtful, comfortable and memorable journeys through the Banggai Islands.'],
    blog: language === 'ID'
      ? ['Travel Blog Banggai Paradise', 'Baca panduan perjalanan, inspirasi destinasi, dan tips praktis sebelum menjelajahi Kepulauan Banggai.']
      : ['Banggai Paradise Travel Blog', 'Read travel guides, destination inspiration and practical tips before exploring the Banggai Islands.']
  } as const;

  return <>
    <SvgSprite />
    <a className="skip" href="#main">{language === 'ID' ? 'Lewati ke konten' : 'Skip to content'}</a>
    <Navbar onPlanTripClick={() => scrollTo('contact')} language={language} onSelectLanguage={handleSelectLanguage} />
    <main id="main">
      {page === 'home' ? <>
        <Hero onExplorePackages={() => scrollTo('packages')} onViewDestinations={() => { window.location.href = basePath + 'destinations/'; }} language={language} />
        <WhyChooseUs onPlanTripClick={() => scrollTo('contact')} language={language} />
        <TourPackages onSelectPackage={setSelectedPackage} language={language} />
        <ExploreDestinations onPlanTripForDestination={() => scrollTo('contact')} language={language} />
        <AboutUs onMeetTeamClick={() => scrollTo('contact')} language={language} />
        <TravelBlog language={language} showAllArticles />
      </> : <>
        {!isArticleReadingPage && page !== 'blog' && <section className="page-intro">
          <div className="container">
            <span className="eyebrow">{page === 'packages' ? 'TOUR EXPERIENCES' : page === 'destinations' ? 'BANGGAI ISLANDS' : page === 'about' ? 'OUR STORY' : 'TRAVEL JOURNAL'}</span>
            <h1>{intro[page][0]}</h1>
            <p>{intro[page][1]}</p>
          </div>
        </section>}
        {page === 'packages' && <TourPackages onSelectPackage={setSelectedPackage} searchFilter="all" language={language} />}
        {page === 'destinations' && <DestinationsPage onPlanTrip={(name) => { sessionStorage.setItem('destination_interest', name); scrollTo('contact'); }} language={language} />}
        {page === 'about' && <AboutUs onMeetTeamClick={() => scrollTo('contact')} language={language} />}
        {page === 'blog' && <TravelBlog language={language} />}
      </>}
      {!isArticleReadingPage && <FinalCTA onPlanTripClick={() => scrollTo('contact')} language={language} />}
    </main>
    <Footer language={language} />
    {selectedPackage && (page === 'home' || page === 'packages') && <PackageModal pkg={selectedPackage} onClose={() => setSelectedPackage(null)} language={language} />}
    <FloatingWhatsApp />
  </>;
}
