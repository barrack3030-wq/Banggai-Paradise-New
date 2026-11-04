import React, { useState } from 'react';
import { Language } from '../i18n/translations';

interface FinalCTAProps {
  onPlanTripClick: () => void;
  language: Language;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onPlanTripClick, language }) => {
  const [email, setEmail] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const isEn = language === 'EN';

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast(isEn ? 'Please enter a valid email address.' : 'Silakan masukkan alamat email yang valid.');
      return;
    }
    setEmail('');
    showToast(
      isEn
        ? 'Welcome aboard! Watch your inbox for island travel tips.'
        : 'Terima kasih! Kami akan mengirimkan panduan dan tips wisata Banggai ke email Anda.'
    );
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };


  return (
    <div className="section" style={{ paddingBottom: 0 }}>
      <section className="cta" id="contact">
        <div className="cta-g1" aria-hidden="true"></div>
        <div className="cta-g2" aria-hidden="true"></div>

        <div className="cta-in">
          {/* Left: Copy & Newsletter Form */}
          <div className="cta-copy">
            <span className="eyebrow light">{isEn ? "Let's go" : 'Mari Berangkat'}</span>
            <h2>
              {isEn ? 'Ready for your next ' : 'Siap untuk petualangan '}
              <em>{isEn ? 'adventure?' : 'berikutnya?'}</em>
            </h2>
            <p>
              {isEn
                ? 'Tell us your dates and your dream trip. We will take care of the rest.'
                : 'Beri tahu kami tanggal dan impian perjalanan Anda. Tim Banggai Paradise akan mengurus segalanya dengan sempurna.'}
            </p>

            <form className="sub" onSubmit={handleSubscribe}>
              <label className="sr" htmlFor="sub-email">
                Email address
              </label>
              <input
                id="sub-email"
                type="email"
                name="email"
                placeholder={isEn ? 'Your email address' : 'Alamat email Anda'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
              <button className="btn btn-coral btn-sm" type="submit">
                <span>{isEn ? 'Get travel tips' : 'Dapatkan Tips Trip'}</span>
              </button>
            </form>
          </div>

          {/* Right: Quick Action Cards */}
          <div className="cta-stack">
            <a
              className="box cursor-pointer"
              href={`https://wa.me/628124567890?text=${encodeURIComponent(
                isEn
                  ? 'Hello Banggai Paradise, I would like to plan a trip to Banggai Islands.'
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
                <b>{isEn ? 'Chat with us' : 'Chat via WhatsApp'}</b>
                <small>{isEn ? 'Quick answers from our team' : 'Respon cepat dari tim lokal kami'}</small>
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
                <b>{isEn ? 'Plan my trip' : 'Konsultasi Itinerary'}</b>
                <small>{isEn ? 'Get a custom itinerary' : 'Rancang paket sesuai keinginan Anda'}</small>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="toast show" role="alert">
          {toastMessage}
        </div>
      )}
    </div>
  );
};
