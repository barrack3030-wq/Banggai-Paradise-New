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
      <section className="about about-founder" id="about">
        <div className="about-bg" aria-hidden="true">
          <div className="about-ring"></div>
        </div>

        <div className="about-txt">
          <span className="eyebrow on-teal">{isEn ? 'About Us' : 'Tentang Kami'}</span>
          <h2>{isEn ? 'A local perspective. A more personal journey.' : 'Berangkat dari lokal. Menjelajah lebih personal.'}</h2>
          <div className="founder-identity">
            <strong>Aji Zulfikar</strong>
            <span>{isEn ? 'Founder & Local Guide' : 'Pendiri & Pemandu Lokal'}</span>
          </div>

          <p>
            {isEn
              ? 'Banggai Paradise was founded by Aji Zulfikar, a local guide from the Banggai region with experience accompanying international travelers. His knowledge of the islands, natural landscapes, routes and local life helps shape journeys that feel personal, flexible and thoughtfully planned.'
              : 'Banggai Paradise didirikan oleh Aji Zulfikar, pemandu lokal dari wilayah Banggai yang berpengalaman mendampingi wisatawan internasional. Pengetahuannya tentang kepulauan, alam, rute perjalanan, dan kehidupan masyarakat setempat membantu menciptakan perjalanan yang personal, fleksibel, dan direncanakan dengan baik.'}
          </p>

          <ul>
            <li><svg className="ic"><use href="#i-check" /></svg><span>{isEn ? 'Local knowledge of destinations and routes' : 'Pengetahuan lokal tentang destinasi dan rute perjalanan'}</span></li>
            <li><svg className="ic"><use href="#i-check" /></svg><span>{isEn ? 'Flexible trips shaped around your travel style' : 'Perjalanan fleksibel sesuai gaya liburan Anda'}</span></li>
            <li><svg className="ic"><use href="#i-check" /></svg><span>{isEn ? 'Personal assistance from planning to the journey' : 'Pendampingan personal sejak perencanaan hingga perjalanan'}</span></li>
          </ul>

          <button type="button" className="btn btn-white" onClick={onMeetTeamClick}>
            <span>{isEn ? 'Plan Your Journey' : 'Rencanakan Perjalanan'}</span>
            <svg className="ic"><use href="#i-arrow" /></svg>
          </button>
        </div>
      </section>
    </div>
  );
};
