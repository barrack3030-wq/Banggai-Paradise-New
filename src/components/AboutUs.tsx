import React from 'react';
import { Language } from '../i18n/translations';

interface AboutUsProps {
  onMeetTeamClick: () => void;
  language: Language;
}

export const AboutUs: React.FC<AboutUsProps> = ({
  onMeetTeamClick,
  language,
}) => {
  const isEn = language === 'EN';

  return (
    <div className="section" style={{ paddingBottom: 0 }}>
      <section className="about" id="about">
        <div className="about-bg" aria-hidden="true">
          <div className="about-ring"></div>
        </div>

        {/* Vintage Orange Travel Van Asset */}
        <div className="about-media">
          <picture>
            <source srcSet="/assets/img/van.webp" type="image/webp" />
            <img
              src="/assets/img/van.png"
              alt="Vintage orange travel van"
              loading="lazy"
              width={406}
              height={320}
            />
          </picture>
        </div>

        {/* Text Content */}
        <div className="about-txt">
          <span className="eyebrow on-teal">{isEn ? 'About Us' : 'Tentang Kami'}</span>
          <h2>
            {isEn ? (
              <>
                Local hearts,<br /> island stories
              </>
            ) : (
              <>
                Hati lokal,<br /> cerita kepulauan
              </>
            )}
          </h2>

          <p>
            {isEn
              ? 'Banggai Paradise Tour & Travel is built by people who call these islands home. We share the places we love, the right way.'
              : 'Banggai Paradise Tour & Travel dirintis oleh putra-putri daerah yang mencintai tanah kelahirannya. Kami membawa Anda menikmati keindahan pulau dengan cara terbaik, aman, dan penuh keramahan.'}
          </p>

          <ul>
            <li>
              <svg className="ic">
                <use href="#i-check" />
              </svg>
              <span>{isEn ? 'Clear itineraries and honest prices' : 'Itinerary jelas dan harga jujur tanpa biaya tersembunyi'}</span>
            </li>
            <li>
              <svg className="ic">
                <use href="#i-check" />
              </svg>
              <span>{isEn ? 'Small, personal and well-organized trips' : 'Trip personal, privat, dan tertata rapi'}</span>
            </li>
            <li>
              <svg className="ic">
                <use href="#i-check" />
              </svg>
              <span>{isEn ? 'Support from planning until you are home' : 'Pendampingan penuh dari konsultasi awal hingga tiba di rumah'}</span>
            </li>
          </ul>

          <button
            type="button"
            className="btn btn-white"
            onClick={onMeetTeamClick}
          >
            <span>{isEn ? 'Meet Our Team' : 'Konsultasi Dengan Tim Kami'}</span>
            <svg className="ic">
              <use href="#i-arrow" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
};
