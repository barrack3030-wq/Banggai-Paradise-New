import React, { useState } from 'react';
import { assetUrl } from '../utils/assetUrl';
import { TourPackage } from '../types';
import { TOUR_PACKAGES } from '../data/travelData';
import { Language } from '../i18n/translations';

interface TourPackagesProps {
  onSelectPackage: (pkg: TourPackage) => void;
  searchFilter: string;
  language: Language;
}

export const TourPackages: React.FC<TourPackagesProps> = ({
  onSelectPackage,
  searchFilter,
  language,
}) => {
  const [filter, setFilter] = useState<'all' | 'beach' | 'adventure' | 'discover'>('all');
  const isEn = language === 'EN';

  // Standard packages with extracted styling and illustrations
  const displayPackages = [
    {
      id: 'beach-relax',
      badge: isEn ? 'Relax' : 'Santai',
      badgeClass: 'chip-w',
      isFeatured: false,
      image: assetUrl('assets/img/beach.svg'),
      titleEn: 'Beach & Relax Getaway',
      titleId: 'Paket Liburan Pantai Santai',
      descEn: 'Slow mornings, soft white sand and calm turquoise water, made for unwinding.',
      descId: 'Pagi yang tenang, pasir putih selembut sutra, dan laut toska yang meneduhkan jiwa.',
      daysEn: 'Flexible days (3D2N / 4D3N)',
      daysId: 'Hari fleksibel (3H2M / 4H3M)',
      typeEn: 'Private or group',
      typeId: 'Private atau open trip',
      originalPkg: TOUR_PACKAGES[0],
    },
    {
      id: 'snorkeling-diving',
      badge: isEn ? 'Adventure' : 'Petualangan',
      badgeClass: 'chip-w',
      isFeatured: true,
      image: assetUrl('assets/img/reef.svg'),
      titleEn: 'Snorkeling & Diving Expedition',
      titleId: 'Ekspedisi Snorkeling & Diving',
      descEn: 'Float above colorful coral gardens with guides who keep you safe and comfortable.',
      descId: 'Menyelami taman terumbu karang hidup dan biota laut langka bersama instruktur lokal berpengalaman.',
      daysEn: 'Flexible days (4D3N)',
      daysId: 'Hari fleksibel (4H3M)',
      typeEn: 'Private or group · Free Drone',
      typeId: 'Private trip · Gratis Drone',
      originalPkg: TOUR_PACKAGES[1],
    },
    {
      id: 'island-hopping',
      badge: isEn ? 'Discover' : 'Jelajah',
      badgeClass: 'chip-w',
      isFeatured: false,
      image: assetUrl('assets/img/sunset.svg'),
      titleEn: 'Island Hopping by Boat',
      titleId: 'Island Hopping Spektakuler',
      descEn: 'Glide between islands and finish the day with a golden sunset on the water.',
      descId: 'Berlayar melintasi gugusan pulau karang Sombori dan ditutup matahari terbenam keemasan.',
      daysEn: 'Flexible days (5D4N)',
      daysId: 'Hari fleksibel (5H4M)',
      typeEn: 'Private speedboat',
      typeId: 'Speedboat private',
      originalPkg: TOUR_PACKAGES[2],
    },
  ];

  return (
    <section className="section packages" id="packages">
      <div className="container">
        {/* Head Row */}
        <div className="head-row">
          <div>
            <span className="eyebrow">{isEn ? 'Tour Package' : 'Paket Wisata'}</span>
            <h2>{isEn ? 'Pick your island escape' : 'Pilih Petualangan Pulau Anda'}</h2>
          </div>
          <a
            className="btn btn-outline btn-sm"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span>{isEn ? 'View all packages' : 'Lihat Semua Paket'}</span>
            <svg className="ic">
              <use href="#i-arrow" />
            </svg>
          </a>
        </div>

        {/* Packages Grid */}
        <div className="pgrid">
          {displayPackages.map((pkg) => (
            <article
              key={pkg.id}
              className={`pcard ${pkg.isFeatured ? 'feat' : ''} cursor-pointer`}
              onClick={() => onSelectPackage(pkg.originalPkg)}
            >
              {/* Media Container */}
              <div className="pa">
                <span className={`chip ${pkg.badgeClass}`}>{pkg.badge}</span>
                {pkg.isFeatured && (
                  <span className="chip chip-c">{isEn ? 'Featured' : 'Unggulan'}</span>
                )}
                <img
                  src={pkg.image}
                  alt={isEn ? pkg.titleEn : pkg.titleId}
                  loading="lazy"
                  width={600}
                  height={700}
                />
              </div>

              {/* Body */}
              <div className="pb">
                <h3>{isEn ? pkg.titleEn : pkg.titleId}</h3>
                <p>{isEn ? pkg.descEn : pkg.descId}</p>

                <ul className="meta">
                  <li>
                    <svg className="ic">
                      <use href="#i-calendar" />
                    </svg>
                    <span>{isEn ? pkg.daysEn : pkg.daysId}</span>
                  </li>
                  <li>
                    <svg className="ic">
                      <use href="#i-users" />
                    </svg>
                    <span>{isEn ? pkg.typeEn : pkg.typeId}</span>
                  </li>
                </ul>
                <div className="prow">
                  <span className="text-sm font-semibold text-[#0A3A40]">{isEn ? 'View itinerary' : 'Lihat Itinerary'}</span>
                  <button
                    type="button"
                    className="round cursor-pointer"
                    aria-label={`View details for ${isEn ? pkg.titleEn : pkg.titleId}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectPackage(pkg.originalPkg);
                    }}
                  >
                    <svg className="ic"><use href="#i-arrow" /></svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
