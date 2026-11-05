import React from 'react';
import { Language } from '../i18n/translations';

interface FinalCTAProps {
  onPlanTripClick: () => void;
  language: Language;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onPlanTripClick, language }) => {
  const isEn = language !== 'ID';
  const isEs = language === 'ES';

  return (
    <div className="section" style={{ paddingBottom: 0 }}>
      <section className="cta" id="contact">
        <div className="cta-g1" aria-hidden="true"></div>
        <div className="cta-g2" aria-hidden="true"></div>

        <div className="cta-in">
          <div className="cta-copy">
            <span className="eyebrow light">{isEs ? 'Vamos a viajar' : isEn ? "Let's go" : 'Mari Berangkat'}</span>
            <h2>
              {isEs ? '¿Preparado para tu próxima ' : isEn ? 'Ready for your next ' : 'Siap untuk petualangan '}
              <em>{isEs ? 'aventura?' : isEn ? 'adventure?' : 'berikutnya?'}</em>
            </h2>
            <p>
              {isEn
                ? (isEs ? 'Cuéntanos qué viaje tienes en mente. Nuestro equipo local te ayudará a organizarlo.' : 'Tell us about your travel plans. Our local team is ready to help.')
                : 'Ceritakan rencana perjalanan Anda. Tim lokal kami siap membantu melalui WhatsApp.'}
            </p>
          </div>

          {/* Right: Quick Action Cards */}
          <div className="cta-stack">
            <a
              className="box cursor-pointer"
              href={`https://wa.me/628124567890?text=${encodeURIComponent(
                isEn
                  ? (isEs ? 'Hola, Banggai Paradise. Me gustaría organizar un viaje a las islas Banggai.' : 'Hello Banggai Paradise, I would like to plan a trip to Banggai Islands.')
                  : 'Halo Banggai Paradise, saya ingin tanya info paket dan merencanakan liburan ke Kepulauan Banggai.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bi">
                <svg className="ic">
                  <use href="#i-chat" />
                </svg>
              </span>
              <span>
                <b>{isEs ? 'Habla con nosotros' : isEn ? 'Chat with us' : 'Chat via WhatsApp'}</b>
                <small>{isEs ? 'Atención directa de nuestro equipo' : isEn ? 'Quick answers from our team' : 'Respon cepat dari tim lokal kami'}</small>
              </span>
            </a>

            <a
              className="box cursor-pointer"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onPlanTripClick();
              }}
            >
              <span className="bi teal">
                <svg className="ic">
                  <use href="#i-mail" />
                </svg>
              </span>
              <span>
                <b>{isEs ? 'Planifica mi viaje' : isEn ? 'Plan my trip' : 'Konsultasi Itinerary'}</b>
                <small>{isEs ? 'Prepara una ruta a tu medida' : isEn ? 'Get a custom itinerary' : 'Rancang paket sesuai keinginan Anda'}</small>
              </span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
