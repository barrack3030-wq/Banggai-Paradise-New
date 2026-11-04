import React from 'react';
import { assetUrl } from '../utils/assetUrl';
import { Language } from '../i18n/translations';

interface ExploreDestinationsProps {
  onPlanTripForDestination: (destinationName: string) => void;
  language: Language;
}

export const ExploreDestinations: React.FC<ExploreDestinationsProps> = ({
  onPlanTripForDestination,
  language,
}) => {
  const isEn = language === 'EN';

  const tiles = [
    {
      cls: 'tile t1',
      img: assetUrl('assets/img/beach.svg'),
      chip: isEn ? 'Beach' : 'Pantai',
      titleEn: 'White-Sand Beaches & Paisu Pok',
      titleId: 'Pantai Pasir Putih & Paisu Pok',
      descEn: 'Soft sand, swaying palms and endless turquoise mirror waters.',
      descId: 'Pasir sehalus tepung, lambaian nyiur kelapa, dan danau kaca sebening kristal.',
      destQuery: 'Danau Paisu Pok & Pantai Pasir Putih',
    },
    {
      cls: 'tile t2',
      img: assetUrl('assets/img/reef.svg'),
      chip: null,
      titleEn: 'Coral Reefs Sanctuary',
      titleId: 'Taman Karang Hidup',
      descEn: 'Snorkel above living color and endemic marine life.',
      descId: 'Snorkeling di atas terumbu karang warna-warni dan ikan kardinal Banggai.',
      destQuery: 'Taman Karang & Biota Bawah Laut',
    },
    {
      cls: 'tile t3',
      img: assetUrl('assets/img/aerial.svg'),
      chip: null,
      titleEn: 'Hidden Islands Lagoon',
      titleId: 'Laguna Karst Sombori',
      descEn: 'Secret lagoons and majestic cliffs only boats reach.',
      descId: 'Laguna zamrud rahasia yang hanya bisa dijangkau oleh perahu lokal.',
      destQuery: 'Kepulauan Sombori',
    },
    {
      cls: 'tile t4',
      img: assetUrl('assets/img/sunset.svg'),
      chip: null,
      titleEn: 'Golden Hour at Sea & Pulo Dua',
      titleId: 'Golden Hour di Laut & Pulo Dua',
      descEn: 'Sail into a sky of gold, pink and violet as the day slows down over Balantak hills.',
      descId: 'Berlayar saat mentari senja keemasan berpadu dengan keelokan sabana perbukitan Balantak.',
      destQuery: 'Pulo Dua & Balantak',
    },
  ];

  return (
    <section className="dest" id="destinations">
      <div className="glow g-a" aria-hidden="true"></div>
      <div className="glow g-b" aria-hidden="true"></div>

      <div className="container">
        {/* Head Row */}
        <div className="head-row">
          <div>
            <span className="eyebrow light">{isEn ? 'Destination' : 'Destinasi'}</span>
            <h2>{isEn ? 'Places worth the journey' : 'Destinasi yang Patut Dikunjungi'}</h2>
          </div>
          <p className="dest-sub">
            {isEn
              ? 'Crystal-clear water, quiet beaches and island life that still feels untouched.'
              : 'Air laut sebening kristal, pantai tersembunyi yang sunyi, dan ketenangan kepulauan alami yang masih murni.'}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento">
          {tiles.map((tile, idx) => (
            <a
              key={idx}
              className={`${tile.cls} cursor-pointer`}
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onPlanTripForDestination(isEn ? tile.titleEn : tile.titleId);
              }}
            >
              <img
                src={tile.img}
                alt={isEn ? tile.titleEn : tile.titleId}
                loading="lazy"
                width={600}
                height={700}
              />
              {tile.chip && <span className="chip chip-w">{tile.chip}</span>}
              {!tile.chip && (
                <span className="go">
                  <svg className="ic">
                    <use href="#i-arrow" />
                  </svg>
                </span>
              )}
              <div className="tt">
                <h3>{isEn ? tile.titleEn : tile.titleId}</h3>
                <p>{isEn ? tile.descEn : tile.descId}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
