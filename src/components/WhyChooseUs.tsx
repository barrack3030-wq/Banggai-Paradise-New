import React from 'react';
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

          <div className="trust-grid">
            {/* Card 1 */}
            <article className="tcard">
              <span className="num" aria-hidden="true">01</span>
              <div className="ti">
                <svg className="ic">
                  <use href="#i-shield" />
                </svg>
              </div>
              <h3>{isEn ? 'Trusted & Professional' : 'Terpercaya & Profesional'}</h3>
              <p>
                {isEn
                  ? 'Clear communication, reliable service and careful planning from the first message to your return home.'
                  : 'Komunikasi transparan, armada terawat, dan perencanaan matang dari kontak pertama hingga Anda tiba kembali di rumah.'}
              </p>
            </article>

            {/* Card 2 (Featured Coral) */}
            <article className="tcard coral">
              <span className="num" aria-hidden="true">02</span>
              <div className="ti">
                <svg className="ic">
                  <use href="#i-heart" />
                </svg>
              </div>
              <h3>{isEn ? 'Friendly Local Guides' : 'Pemandu Lokal Ramah'}</h3>
              <p>
                {isEn
                  ? 'Warm, knowledgeable guides who show you hidden beaches and the island stories behind them.'
                  : 'Guide lokal ramah dan bersahabat yang siap menunjukkan pantai rahasia serta kisah kearifan lokal Banggai.'}
              </p>
            </article>

            {/* Card 3 */}
            <article className="tcard">
              <span className="num" aria-hidden="true">03</span>
              <div className="ti">
                <svg className="ic">
                  <use href="#i-compass" />
                </svg>
              </div>
              <h3>{isEn ? 'Tailor-Made Journeys' : 'Perjalanan Sesuai Keinginan'}</h3>
              <p>
                {isEn
                  ? 'Families, couples, friends or teams, we shape each trip to your pace, interests and budget.'
                  : 'Keluarga, pasangan, sahabat, atau corporate trip — kami rancang sesuai tempo, minat, dan anggaran Anda.'}
              </p>
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
                  src="/assets/img/beach-photo.jpg"
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
                  src="/assets/img/aerial.svg"
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
                  src="/assets/img/sunset.svg"
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
