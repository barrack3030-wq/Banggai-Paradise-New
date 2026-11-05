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
  const isEn = language !== 'ID';
  const isEs = language === 'ES';

  const tiles = [
    {
      cls: 'tile t1',
      img: 'https://asset.kompas.com/crops/wjHiAD2R0fzDyN6sHMgXVmoZT0c%3D/790x0%3A3801x2007/1200x800/data/photo/2023/01/08/63baa9e75aa1a.jpg',
      chip: isEs ? 'Lago' : isEn ? 'Lake' : 'Danau',
      titleEn: 'Danau Paisu Pok',
      titleId: 'Danau Paisu Pok',
      titleEs: 'Lago Paisu Pok',
      descEn: 'A glass-clear lake surrounded by lush tropical forest.',
      descEs: 'Un lago de aguas transparentes rodeado de vegetación tropical.',
      descId: 'Air sebening kaca di tengah rimbunnya hutan tropis Banggai.',
      destQuery: 'Danau Paisu Pok',
    },
    {
      cls: 'tile t2',
      img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/ab/e5/20/caption.jpg?h=-1&s=1&w=1200',
      chip: null,
      titleEn: 'Mandel & Oyama Beach',
      titleId: 'Pantai Mandel & Oyama',
      titleEs: 'Playas de Mandel y Oyama',
      descEn: 'White sand, clear turquoise water and a peaceful tropical shoreline.',
      descEs: 'Arena clara, aguas turquesas y un litoral tropical tranquilo.',
      descId: 'Hamparan pasir putih dan air laut jernih di pesisir tropis Banggai.',
      destQuery: 'Pantai Mandel dan Oyama Beach',
    },
    {
      cls: 'tile t3',
      img: 'https://indonesiabackpacking.wordpress.com/wp-content/uploads/2022/03/img_20211206_090811-1-1.jpg',
      chip: null,
      titleEn: 'Mbuang-Mbuang Island',
      titleId: 'Pulau Mbuang-Mbuang',
      titleEs: 'Isla de Mbuang-Mbuang',
      descEn: 'Turquoise lagoons and green islets across the Banggai Sea.',
      descEs: 'Lagunas turquesas y pequeños islotes verdes en el mar de Banggai.',
      descId: 'Laguna biru kehijauan dan gugusan pulau hijau di perairan Banggai.',
      destQuery: 'Pulau Mbuang-Mbuang',
    },
    {
      cls: 'tile t4',
      img: 'https://commons.wikimedia.org/wiki/Special:FilePath/%22Pulo-Dua-Balantak.jpg%22.jpg?width=1200',
      chip: null,
      titleEn: 'Pulo Dua Balantak',
      titleId: 'Pulo Dua Balantak',
      titleEs: 'Pulo Dua, Balantak',
      descEn: 'A striking island ridge, white-sand shores and clear blue waters in Balantak.',
      descEs: 'Colinas insulares, playas de arena clara y aguas azules en Balantak.',
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
            <span className="eyebrow light">{isEs ? 'Destinos' : isEn ? 'Destination' : 'Destinasi'}</span>
            <h2>{isEs ? 'Lugares que merecen el viaje' : isEn ? 'Places worth the journey' : 'Destinasi yang Patut Dikunjungi'}</h2>
          </div>
          <p className="dest-sub">
            {isEn
              ? (isEs ? 'Aguas cristalinas, playas tranquilas y paisajes insulares que conservan su esencia natural.' : 'Crystal-clear water, quiet beaches and island life that still feels untouched.')
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
                onPlanTripForDestination(isEs ? tile.titleEs || tile.titleEn : isEn ? tile.titleEn : tile.titleId);
              }}
            >
              <img
                src={tile.img}
                alt={isEs ? tile.titleEs : isEn ? tile.titleEn : tile.titleId}
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
                <p>{isEs ? tile.descEs : isEn ? tile.descEn : tile.descId}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
