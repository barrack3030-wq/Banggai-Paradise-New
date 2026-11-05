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
      img: 'https://asset.kompas.com/crops/wjHiAD2R0fzDyN6sHMgXVmoZT0c%3D/790x0%3A3801x2007/1200x800/data/photo/2023/01/08/63baa9e75aa1a.jpg',
      chip: isEn ? 'Lake' : 'Danau',
      titleEn: 'Danau Paisu Pok',
      titleId: 'Danau Paisu Pok',
      descEn: 'A glass-clear lake surrounded by lush tropical forest.',
      descId: 'Air sebening kaca di tengah rimbunnya hutan tropis Banggai.',
      destQuery: 'Danau Paisu Pok',
    },
    {
      cls: 'tile t2',
      img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/ab/e5/20/caption.jpg?h=-1&s=1&w=1200',
      chip: null,
      titleEn: 'Mandel & Oyama Beach',
      titleId: 'Pantai Mandel & Oyama',
      descEn: 'White sand, clear turquoise water and a peaceful tropical shoreline.',
      descId: 'Hamparan pasir putih dan air laut jernih di pesisir tropis Banggai.',
      destQuery: 'Pantai Mandel dan Oyama Beach',
    },
    {
      cls: 'tile t3',
      img: 'https://indonesiabackpacking.wordpress.com/wp-content/uploads/2022/03/img_20211206_090811-1-1.jpg',
      chip: null,
      titleEn: 'Mbuang-Mbuang Island',
      titleId: 'Pulau Mbuang-Mbuang',
      descEn: 'Turquoise lagoons and green islets across the Banggai Sea.',
      descId: 'Laguna biru kehijauan dan gugusan pulau hijau di perairan Banggai.',
      destQuery: 'Pulau Mbuang-Mbuang',
    },
    {
      cls: 'tile t4',
      img: 'https://soalpalu.com/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-01-at-22.11.32.jpeg',
      chip: null,
      titleEn: 'Pulo Dua Balantak',
      titleId: 'Pulo Dua Balantak',
      descEn: 'A striking island ridge, white-sand shores and clear blue waters in Balantak.',
      descId: 'Punggung bukit yang khas, pantai pasir putih, dan laut jernih di Balantak.',
      destQuery: 'Pulo Dua Balantak',
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
