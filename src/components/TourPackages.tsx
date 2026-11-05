import React, { useRef } from 'react';
import { assetUrl } from '../utils/assetUrl';
import { TourPackage } from '../types';
import { Language } from '../i18n/translations';
import { localizedPath } from '../utils/localizedPath';

interface TourPackagesProps {
  onSelectPackage: (pkg: TourPackage) => void;
  language: Language;
}

type PackageChoice = {
  id: string;
  titleEn: string;
  titleId: string;
  durationEn: string;
  durationId: string;
  descriptionEn: string;
  descriptionId: string;
  placesEn: string[];
  placesId: string[];
  image: string;
  featured?: boolean;
  badgeEn?: string;
  badgeId?: string;
};

const PACKAGE_CHOICES: PackageChoice[] = [
  {
    id: 'luwuk-one-day',
    titleEn: 'Luwuk One Day Private Trip',
    titleId: 'Luwuk One Day Private Trip',
    durationEn: '1 Day',
    durationId: '1 Hari',
    descriptionEn: 'A private day trip from Luwuk to Piala Waterfall, the Luwuk coastline and nearby city highlights.',
    descriptionId: 'Private trip satu hari dari Luwuk untuk mengunjungi Air Terjun Piala, pesisir Luwuk, dan destinasi sekitar kota.',
    placesEn: ['Luwuk City', 'Piala Waterfall', 'Kilo 5 Coast'],
    placesId: ['Kota Luwuk', 'Air Terjun Piala', 'Pesisir Kilo 5'],
    image: assetUrl('assets/img/beach.svg'),
  },
  {
    id: 'luwuk-stopover',
    titleEn: 'Luwuk Stopover',
    titleId: 'Paket Wisata Luwuk 2 Hari 1 Malam',
    durationEn: '2 Days 1 Night',
    durationId: '2 Hari 1 Malam',
    descriptionEn: 'Explore Piala Waterfall, Luwuk coastline, Salodik and nearby highlights at a relaxed pace.',
    descriptionId: 'Jelajahi Air Terjun Piala, pesisir Luwuk, Salodik, serta destinasi sekitar dengan perjalanan yang santai.',
    placesEn: ['Luwuk City', 'Piala Waterfall', 'Salodik'],
    placesId: ['Kota Luwuk', 'Air Terjun Piala', 'Salodik'],
    image: assetUrl('assets/images/banggai_white_sand_beach_1793766899675.jpg'),
  },
  {
    id: 'luwuk-salakan',
    titleEn: 'Luwuk Salakan Private Trip',
    titleId: 'Private Trip Luwuk Salakan 3 Hari 2 Malam',
    durationEn: '3 Days 2 Nights',
    durationId: '3 Hari 2 Malam',
    descriptionEn: 'A flexible cross-island journey connecting Luwuk and Salakan with coastal scenery and time to explore the Banggai Islands.',
    descriptionId: 'Perjalanan antarpulau yang fleksibel menghubungkan Luwuk dan Salakan, dengan pemandangan pesisir serta waktu menjelajahi Kepulauan Banggai.',
    placesEn: ['Luwuk', 'Salakan', 'Banggai Islands'],
    placesId: ['Luwuk', 'Salakan', 'Kepulauan Banggai'],
    image: assetUrl('assets/images/banggai_pulodua_coasthill_1793781298326.jpg'),
  },
  {
    id: 'banggai-four-days',
    titleEn: 'Banggai 4 Days 3 Nights',
    titleId: 'Paket Wisata Banggai 4 Hari 3 Malam',
    durationEn: '4 Days 3 Nights',
    durationId: '4 Hari 3 Malam',
    descriptionEn: 'Discover Paisu Pok, Peleng Island and selected highlights across the Banggai Islands.',
    descriptionId: 'Jelajahi Paisu Pok, Pulau Peleng, dan destinasi pilihan di Kepulauan Banggai.',
    placesEn: ['Paisu Pok', 'Peleng Island', 'Luwuk'],
    placesId: ['Paisu Pok', 'Pulau Peleng', 'Luwuk'],
    image: assetUrl('assets/images/banggai_hero_paisupok_1793766897829.jpg'),
    featured: true,
    badgeEn: 'Best Seller',
    badgeId: 'Terlaris',
  },
  {
    id: 'banggai-five-days',
    titleEn: 'Banggai 5 Days 4 Nights',
    titleId: 'Paket Wisata Banggai 5 Hari 4 Malam',
    durationEn: '5 Days 4 Nights',
    durationId: '5 Hari 4 Malam',
    descriptionEn: 'A private journey connecting Luwuk, Salakan and Peleng, including Paisu Pok and selected coastal destinations.',
    descriptionId: 'Private trip yang menghubungkan Luwuk, Salakan, dan Peleng, termasuk Paisu Pok serta destinasi pesisir pilihan.',
    placesEn: ['Luwuk', 'Salakan', 'Peleng Island'],
    placesId: ['Luwuk', 'Salakan', 'Pulau Peleng'],
    image: assetUrl('assets/images/banggai_snorkeling_coral_1793766898966.jpg'),
  },
  {
    id: 'ultimate-banggai',
    titleEn: 'Ultimate Banggai 6 Days 5 Nights',
    titleId: 'Paket Wisata Banggai 6 Hari 5 Malam',
    durationEn: '6 Days 5 Nights',
    durationId: '6 Hari 5 Malam',
    descriptionEn: 'A longer private journey through Luwuk, Salakan, Peleng, Banggai Laut, Kamumu, Salodik and Pulo Dua.',
    descriptionId: 'Perjalanan private lebih panjang menjelajahi Luwuk, Salakan, Peleng, Banggai Laut, Kamumu, Salodik, dan Pulo Dua.',
    placesEn: ['Luwuk', 'Salakan', 'Peleng', 'Banggai Laut', 'Pulo Dua'],
    placesId: ['Luwuk', 'Salakan', 'Peleng', 'Banggai Laut', 'Pulo Dua'],
    image: assetUrl('assets/images/banggai_sombori_islands_1793766898898.jpg'),
  },
  {
    id: 'custom-banggai-trip',
    titleEn: 'Custom Trip / Not Sure Yet',
    titleId: 'Custom Trip / Belum Tahu',
    durationEn: 'Flexible duration',
    durationId: 'Durasi fleksibel',
    descriptionEn: 'Not sure which route to choose? Tell us your dates, group size and interests. Our local team will help plan a suitable trip.',
    descriptionId: 'Belum yakin memilih rute? Sampaikan tanggal, jumlah peserta, dan minat perjalanan Anda. Tim lokal kami akan membantu menyusun trip yang sesuai.',
    placesEn: [],
    placesId: [],
    image: assetUrl('assets/images/banggai_white_sand_beach_1793766899675.jpg'),
  },
];

const makePackage = (choice: PackageChoice, isEn: boolean): TourPackage => ({
  id: choice.id,
  name: isEn ? choice.titleEn : choice.titleId,
  subtitle: isEn ? choice.durationEn : choice.durationId,
  badge: choice.featured ? 'Best Seller' : undefined,
  category: 'relax',
  duration: isEn ? choice.durationEn : choice.durationId,
  groupType: 'Private trip',
  image: choice.image,
  rating: 0,
  reviewCount: 0,
  shortDesc: isEn ? choice.descriptionEn : choice.descriptionId,
  highlights: isEn ? choice.placesEn : choice.placesId,
  itinerary: [],
  included: [],
  excluded: [],
});

export const TourPackages: React.FC<TourPackagesProps> = ({ onSelectPackage, language }) => {
  const isEn = language === 'EN';
  const sliderRef = useRef<HTMLDivElement>(null);
  const slide = (direction: -1 | 1) => {
    const track = sliderRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>('.pcard');
    const distance = card ? card.getBoundingClientRect().width + 22 : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * distance, behavior: 'smooth' });
  };

  return (
    <section className="section packages" id="packages">
      <div className="container">
        <div className="package-slider-controls" aria-label={isEn ? 'Package slider controls' : 'Kontrol geser paket'}>
          <span className="package-slider-hint">{isEn ? 'Explore our trips' : 'Geser untuk melihat semua paket'}</span>
          <div className="package-slider-arrows">
            <button type="button" aria-label={isEn ? 'Previous packages' : 'Paket sebelumnya'} onClick={() => slide(-1)}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18 9 12l6-6" /></svg>
            </button>
            <button type="button" aria-label={isEn ? 'Next packages' : 'Paket berikutnya'} onClick={() => slide(1)}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
            </button>
          </div>
        </div>
        <div className="pgrid package-slider" ref={sliderRef}>
          {PACKAGE_CHOICES.map((pkg) => (
            <article
              key={pkg.id}
              className={`pcard ${pkg.featured ? 'feat' : ''} cursor-pointer`}
              onClick={() => { window.location.href = localizedPath('packages/' + pkg.id + '/', language); }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  window.location.href = localizedPath('packages/' + pkg.id + '/', language);
                }
              }}
            >
              <div className="pa">
                {pkg.featured && <span className="chip chip-c">{isEn ? pkg.badgeEn : pkg.badgeId}</span>}
                <img src={pkg.image} alt={isEn ? pkg.titleEn : pkg.titleId} loading="lazy" width={600} height={700} />
              </div>
              <div className="pb">
                <h3>{isEn ? pkg.titleEn : pkg.titleId}</h3>
                <p>{isEn ? pkg.descriptionEn : pkg.descriptionId}</p>
                <ul className="meta">
                  <li>
                    <svg className="ic"><use href="#i-calendar" /></svg>
                    <span>{isEn ? pkg.durationEn : pkg.durationId}</span>
                  </li>
                  <li>
                    <svg className="ic"><use href="#i-users" /></svg>
                    <span>Private trip</span>
                  </li>
                </ul>
                <div className="prow">
                  <span className="text-sm font-semibold text-[#0A3A40]">{isEn ? 'View trip details' : 'Lihat detail paket'}</span>
                  <span className="round" aria-hidden="true">
                    <svg className="ic"><use href="#i-arrow" /></svg>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
