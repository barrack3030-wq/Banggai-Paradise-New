import React, { useRef } from 'react';
import { assetUrl } from '../utils/assetUrl';
import { Language } from '../i18n/translations';

interface WhyChooseUsProps {
  onPlanTripClick: () => void;
  language: Language;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  onPlanTripClick,
  language,
}) => {
  const isEn = language === 'EN';
  const sliderRef = useRef<HTMLDivElement>(null);
  const slide = (direction: -1 | 1) => {
    const track = sliderRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>('.tcard');
    track.scrollBy({ left: direction * (card ? card.getBoundingClientRect().width + 22 : track.clientWidth * .8), behavior: 'smooth' });
  };

  return (
    <>
      {/* ============ TRUST SECTION ============ */}
      <section className="section trust" id="why">
        <div className="container">
          <div className="head-c">
            <span className="eyebrow">{isEn ? 'Why Banggai Paradise' : 'Mengapa Banggai Paradise'}</span>
            <h2>
              {isEn ? (
                <>
                  Trusted and professional,<br className="br-d" /> from hello to goodbye
                </>
              ) : (
                <>
                  Terpercaya &amp; profesional,<br className="br-d" /> dari awal hingga kembali pulang
                </>
              )}
            </h2>
            <p>
              {isEn
                ? 'Every detail is handled by a local team that knows the islands, so you can simply enjoy the journey.'
                : 'Setiap detail perjalanan diatur langsung oleh tim lokal berpengalaman agar Anda dapat menikmati liburan dengan tenang dan berkesan.'}
            </p>
          </div>

          <div className="trust-slider-controls">
            <span className="trust-slider-hint">{isEn ? 'Discover what makes the journey special' : 'Geser untuk mengenal keunggulan perjalanan kami'}</span>
            <div className="trust-slider-arrows">
              <button type="button" aria-label={isEn ? 'Previous benefits' : 'Keunggulan sebelumnya'} onClick={() => slide(-1)}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18 9 12l6-6" /></svg>
              </button>
              <button type="button" aria-label={isEn ? 'Next benefits' : 'Keunggulan berikutnya'} onClick={() => slide(1)}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
              </button>
            </div>
          </div>
          <div className="trust-grid trust-slider" ref={sliderRef}>
            <article className="tcard">
              <div className="trust-photo"><img src="https://banggaiwonderland.my.id/_astro/1000561157.CuqSp_O_.jpg" alt={isEn ? 'Banggai Islands travel experience' : 'Pengalaman perjalanan di Kepulauan Banggai'} loading="lazy" /></div>
              <span className="num" aria-hidden="true">01</span>
              <div className="trust-copy">
                <h3>{isEn ? 'Trusted & Professional' : 'Terpercaya & Profesional'}</h3>
                <p>{isEn ? 'Clear communication, thoughtful trip planning and attentive local support from your first enquiry to the end of your journey.' : 'Komunikasi yang jelas, perencanaan perjalanan yang matang, dan dukungan tim lokal sejak konsultasi pertama hingga perjalanan selesai.'}</p>
              </div>
            </article>
            <article className="tcard coral">
              <div className="trust-photo"><img src="https://banggaiwonderland.my.id/_astro/1000567706%20(1).Bt5MDsVS.jpg" alt={isEn ? 'Local guide and island scenery in Banggai' : 'Pemandu lokal dan panorama Kepulauan Banggai'} loading="lazy" /></div>
              <span className="num" aria-hidden="true">02</span>
              <div className="trust-copy">
                <h3>{isEn ? 'Friendly Local Guides' : 'Pemandu Lokal Ramah'}</h3>
                <p>{isEn ? 'Discover Banggai with people who know the area, its routes, coastal communities and the stories behind each place.' : 'Jelajahi Banggai bersama orang lokal yang mengenal wilayah, rute, masyarakat pesisir, dan cerita di balik setiap tempat.'}</p>
              </div>
            </article>
            <article className="tcard">
              <div className="trust-photo"><img src="https://banggaiwonderland.my.id/_astro/1000576872.jYD6zMGT.jpg" alt={isEn ? 'Banggai nature and island landscape' : 'Lanskap alam dan pulau-pulau Banggai'} loading="lazy" /></div>
              <span className="num" aria-hidden="true">03</span>
              <div className="trust-copy">
                <h3>{isEn ? 'Tailor-Made Journeys' : 'Perjalanan Sesuai Keinginan'}</h3>
                <p>{isEn ? 'Private trips shaped around your travel dates, interests and preferred pace, with room to discuss the details together.' : 'Private trip yang disusun mengikuti tanggal, minat, dan ritme perjalanan Anda, dengan ruang untuk membicarakan detailnya bersama.'}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS SECTION ============ */}
      <section className="section how" id="how">
        <div className="container">
          <div className="head-c">
            <span className="eyebrow">{isEn ? 'How it works' : 'Cara Kerja'}</span>
            <h2>
              {isEn ? (
                <>
                  Three simple steps<br className="br-d" /> to your island escape
                </>
              ) : (
                <>
                  Tiga langkah mudah<br className="br-d" /> menuju surga Banggai
                </>
              )}
            </h2>
          </div>

          <ol className="chain">
            {/* Step 1 */}
            <li className="step">
              <div className="sc">
                <img
                  src={assetUrl('assets/img/beach-photo.jpg')}
                  alt="Share your dream trip"
                  loading="lazy"
                  width={310}
                  height={310}
                />
              </div>
              <span className="sn">1</span>
              <h3>{isEn ? 'Share your dream trip' : 'Ceritakan Trip Impian Anda'}</h3>
              <p>
                {isEn
                  ? 'Tell us your dates, group and the kind of experience you want.'
                  : 'Beri tahu kami tanggal keberangkatan, jumlah peserta, dan pengalaman yang Anda inginkan.'}
              </p>
            </li>

            {/* Step 2 */}
            <li className="step">
              <div className="sc">
                <img
                  src={assetUrl('assets/img/aerial.svg')}
                  alt="We craft your plan"
                  loading="lazy"
                  width={600}
                  height={700}
                />
              </div>
              <span className="sn">2</span>
              <h3>{isEn ? 'We craft your plan' : 'Kami Susun Rencana Terbaik'}</h3>
              <p>
                {isEn
                  ? 'Our team designs a clear itinerary with honest pricing, then fine-tunes it with you.'
                  : 'Tim kami merancang itinerary lengkap dengan harga transparan, lalu disempurnakan bersama Anda.'}
              </p>
            </li>

            {/* Step 3 */}
            <li className="step">
              <div className="sc">
                <img
                  src={assetUrl('assets/img/sunset.svg')}
                  alt="Pack and enjoy"
                  loading="lazy"
                  width={600}
                  height={700}
                />
              </div>
              <span className="sn">3</span>
              <h3>{isEn ? 'Pack and enjoy' : 'Siapkan Koper & Nikmati Liburan'}</h3>
              <p>
                {isEn
                  ? 'Show up, relax and let your local guides take care of everything else.'
                  : 'Tiba di Banggai, rileks, dan biarkan pemandu lokal kami yang mengurus segala kenyamanan Anda.'}
              </p>
            </li>
          </ol>

          <div className="mt-14 text-center">
            <button
              type="button"
              className="btn btn-coral"
              onClick={onPlanTripClick}
            >
              <span>{isEn ? 'Start Planning Your Trip' : 'Mulai Rencanakan Trip'}</span>
              <svg className="ic">
                <use href="#i-arrow" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
