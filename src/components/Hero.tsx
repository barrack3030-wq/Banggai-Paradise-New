import React, { useState } from 'react';
import { assetUrl } from '../utils/assetUrl';
import { Language } from '../i18n/translations';

interface HeroProps {
  onExplorePackages: () => void;
  onViewDestinations: () => void;
  language: Language;
}

const HERO_SLIDES = [
  {
    image: assetUrl('assets/images/banggai_hero_paisupok_1793766897829.jpg'),
    titleEn: 'Danau Paisu Pok',
    titleId: 'Danau Paisu Pok',
    subEn: 'Mirror Lake · Peleng',
    subId: 'Danau Kaca · P. Peleng',
  },
  {
    image: assetUrl('assets/images/banggai_sombori_islands_1793766898898.jpg'),
    titleEn: 'Sombori Archipelago',
    titleId: 'Kepulauan Sombori',
    subEn: 'Karst Cliffs & Lagoons',
    subId: 'Tebing Karst & Laguna Zamrud',
  },
  {
    image: assetUrl('assets/images/banggai_white_sand_beach_1793766899675.jpg'),
    titleEn: 'White-Sand Mandel Beach',
    titleId: 'Pantai Pasir Putih Mandel',
    subEn: 'Soft Sand & Swaying Palms',
    subId: 'Pasir Selembut Sutra & Kelapa',
  },
  {
    image: assetUrl('assets/images/banggai_snorkeling_coral_1793766898966.jpg'),
    titleEn: 'Living Coral Sanctuary',
    titleId: 'Taman Terumbu Karang & Biota',
    subEn: 'Pristine Marine Life & Jellyfish',
    subId: 'Danau Ubur-Ubur & Ikan Kardinal',
  },
  {
    image: assetUrl('assets/images/banggai_pulodua_coasthill_1793781298326.jpg'),
    titleEn: 'Pulo Dua & Balantak',
    titleId: 'Pulo Dua & Savana Balantak',
    subEn: 'Green Hills & Sea Boardwalk',
    subId: 'Perbukitan Teletubbies & Jembatan Laut',
  },
];

export const Hero: React.FC<HeroProps> = ({
  onExplorePackages,
  onViewDestinations,
  language,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const isEn = language === 'EN';

  // 5 Background Slide Autoplay
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ============ HERO SECTION ============ */}
      <section className="hero relative overflow-hidden" id="home">
        {/* Full 5-Image Slides Background */}
        <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
          {HERO_SLIDES.map((slide, idx) => (
            <div
              key={idx}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{
                opacity: idx === activeSlide ? 0.42 : 0,
              }}
            >
              <img
                src={slide.image}
                alt={
                  isEn
                    ? `${slide.titleEn} – ${slide.subEn}`
                    : `${slide.titleId} – ${slide.subId}`
                }
                decoding="async"
                fetchPriority={idx === 0 ? 'high' : 'low'}
                className="w-full h-full object-cover transition-transform duration-[6000ms] ease-out"
                style={{
                  transform: idx === activeSlide ? 'scale(1.06)' : 'scale(1)',
                }}
              />
            </div>
          ))}
          {/* Subtle gradient vignette to guarantee crisp legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#052C37]/90 via-[#052C37]/80 to-[#07485A]/70" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#052C37]/30 to-[#052C37]/80" />
        </div>

        <div className="hero-bg" aria-hidden="true">
          <i></i>
          <i></i>
        </div>

        {/* Slide Indicators on Desktop/Tablet/Mobile */}
        <div className="absolute top-28 right-6 sm:right-10 z-20 flex items-center gap-1.5 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
          <span className="text-[11px] font-semibold text-white/90 mr-1 hidden sm:inline">
            {isEn ? HERO_SLIDES[activeSlide].titleEn : HERO_SLIDES[activeSlide].titleId}
          </span>
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer pointer-events-auto ${
                idx === activeSlide ? 'w-5 bg-[#5CE1E6]' : 'w-1.5 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="container hero-grid">
          {/* Left Column: Copy & CTAs */}
          <div className="hero-copy">
            <span className="pill">
              <b>
                <svg className="ic">
                  <use href="#i-sparkle" />
                </svg>
              </b>
              <span>Tour &amp; Travel · Banggai Paradise</span>
            </span>

            <h1>
              {isEn ? 'Your best choice ' : 'Pilihan terbaik '}
              <em>{isEn ? 'travel partner' : 'partner perjalanan'}</em>
              {isEn ? ' in the Banggai Islands' : ' di Kepulauan Banggai'}
            </h1>

            <p className="lead">
              {isEn
                ? 'Handcrafted island journeys led by friendly local experts. Trusted, professional and made around the way you love to travel.'
                : 'Perjalanan kepulauan eksklusif didampingi pemandu lokal terpercaya. Aman, profesional, dan disesuaikan dengan gaya liburan impian Anda.'}
            </p>

            <div className="hero-cta">
              <button
                type="button"
                className="btn btn-coral"
                onClick={onExplorePackages}
              >
                <span>{isEn ? 'Explore Packages' : 'Jelajahi Paket'}</span>
                <svg className="ic">
                  <use href="#i-arrow" />
                </svg>
              </button>

              <button
                type="button"
                className="btn btn-glass"
                onClick={onViewDestinations}
              >
                <span>{isEn ? 'View Destinations' : 'Lihat Destinasi'}</span>
              </button>
            </div>

            <ul className="chips">
              <li>
                <svg className="ic">
                  <use href="#i-shield" />
                </svg>
                <span>{isEn ? 'Trusted & professional' : 'Terpercaya & profesional'}</span>
              </li>
              <li>
                <svg className="ic">
                  <use href="#i-heart" />
                </svg>
                <span>{isEn ? 'Friendly local guides' : 'Pemandu lokal ramah'}</span>
              </li>
              <li>
                <svg className="ic">
                  <use href="#i-compass" />
                </svg>
                <span>{isEn ? 'Tailor-made trips' : 'Private trip fleksibel'}</span>
              </li>
            </ul>
          </div>

          {/* Right Column: Hero Art Composition with Van, Arch & Bubbles */}
          <div className="hero-art">
            <div className="orbit" aria-hidden="true"></div>

            {/* Arch Background Illustration */}
            <div className="arch">
              <img
                src={assetUrl('assets/img/hero.svg')}
                alt="Tropical beach with palm trees and sailing boat"
                width={600}
                height={800}
              />
            </div>

            {/* Floating Info Card */}
            <div className="float-card">
              <span className="gi">
                <svg className="ic">
                  <use href="#i-pin" />
                </svg>
              </span>
              <div>
                <b>{isEn ? 'Island Hopping' : 'Jelajah Pulau'}</b>
                <small>{isEn ? 'Custom itineraries' : 'Itinerary fleksibel'}</small>
              </div>
            </div>

            {/* Circular Photo Bubble 1 */}
            <div className="bubble bubble-photo">
              <img
                src={assetUrl('assets/img/beach-photo.jpg')}
                alt="Turquoise water and palm trees on a white-sand beach"
                width={310}
                height={310}
              />
            </div>

            {/* Circular Illustration Bubble 2 */}
            <div className="bubble bubble-reef">
              <img
                src={assetUrl('assets/img/reef.svg')}
                alt="Coral reef illustration"
                width={600}
                height={700}
              />
            </div>

            {/* Vintage Orange Travel Van */}
            <picture className="van-hero">
              <source srcSet={assetUrl('assets/img/van.webp')} type="image/webp" />
              <img
                src={assetUrl('assets/img/van.png')}
                alt="Vintage orange travel van"
                width={406}
                height={320}
              />
            </picture>
          </div>
        </div>

        {/* 3-Tier Multi-layer Curved Wave Divider */}
        <svg className="hero-wave" viewBox="0 0 1440 170" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 90C240 20 480 150 760 80S1240 10 1440 70V170H0Z" fill="#fff" opacity=".18" />
          <path d="M0 120C300 60 560 170 860 110S1280 60 1440 110V170H0Z" fill="#fff" opacity=".35" />
          <path d="M0 146C320 100 640 180 940 140S1300 110 1440 140V170H0Z" fill="#FFF8EC" />
        </svg>
      </section>

    </>
  );
};
