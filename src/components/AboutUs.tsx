import React from 'react';
import { Language } from '../i18n/translations';

interface AboutUsProps {
  onMeetTeamClick: () => void;
  language: Language;
}

// `focus` is the CSS object-position used when the photo is cropped to 4:3,
// so heads and faces stay inside the frame (portrait photos need this most).
const visitorPhotos: { file: string; focus?: string }[] = [
  { file: 'IMG-20260816-WA0024.jpg', focus: '50% 60%' },
  { file: 'IMG-20260817-WA0062(1).jpg' },
  { file: 'IMG-20260821-WA0025(1).jpg' },
  { file: 'IMG-20260829-WA0005.jpg', focus: '50% 100%' },
  { file: 'IMG-20261008-WA0008(2).jpg', focus: '50% 22%' },
  { file: 'IMG-20261105-WA0001.jpg', focus: '50% 20%' },
  { file: 'IMG-20261105-WA0002.jpg', focus: '42% 50%' },
  { file: 'IMG-20261105-WA0003.jpg' },
  { file: 'IMG-20261105-WA0004.jpg' },
  { file: 'IMG-20261105-WA0005.jpg' },
  { file: 'IMG-20261105-WA0006.jpg', focus: '50% 55%' },
  { file: 'IMG-20261105-WA0007.jpg', focus: '50% 65%' },
];

export const AboutUs: React.FC<AboutUsProps> = ({
  onMeetTeamClick,
  language,
}) => {
  const isEn = language !== 'ID';
  const isEs = language === 'ES';

  return (
    <div className="section" style={{ paddingBottom: 0 }}>
      <section className="about about-founder" id="about">
        <div className="about-bg" aria-hidden="true">
          <div className="about-ring"></div>
        </div>

        <div className="about-txt">
          <span className="eyebrow on-teal">{isEs ? 'Quiénes somos' : isEs ? 'Quiénes somos' : isEn ? 'About Us' : 'Tentang Kami'}</span>
          <p>
            {isEn
              ? (isEs ? 'Banggai Paradise fue creado por Aji Zulfikar, guía local de la región de Banggai. Su conocimiento de las islas, los paisajes, las rutas y la vida local permite organizar experiencias cercanas, flexibles y bien planificadas.' : 'Banggai Paradise was founded by Aji Zulfikar, a local guide from the Banggai region with experience accompanying international travelers. His knowledge of the islands, natural landscapes, routes and local life helps shape journeys that feel personal, flexible and thoughtfully planned.')
              : 'Banggai Paradise didirikan oleh Aji Zulfikar, pemandu lokal dari wilayah Banggai yang berpengalaman mendampingi wisatawan internasional. Pengetahuannya tentang kepulauan, alam, rute perjalanan, dan kehidupan masyarakat setempat membantu menciptakan perjalanan yang personal, fleksibel, dan direncanakan dengan baik.'}
          </p>

          <ul>
            <li><svg className="ic"><use href="#i-check" /></svg><span>{isEs ? 'Conocimiento local de destinos y rutas' : isEs ? 'Conocimiento local de destinos y rutas' : isEn ? 'Local knowledge of destinations and routes' : 'Pengetahuan lokal tentang destinasi dan rute perjalanan'}</span></li>
            <li><svg className="ic"><use href="#i-check" /></svg><span>{isEs ? 'Viajes flexibles adaptados a tu forma de viajar' : isEs ? 'Viajes flexibles adaptados a tu forma de viajar' : isEn ? 'Flexible trips shaped around your travel style' : 'Perjalanan fleksibel sesuai gaya liburan Anda'}</span></li>
            <li><svg className="ic"><use href="#i-check" /></svg><span>{isEs ? 'Atención personal desde la planificación hasta el viaje' : isEs ? 'Atención personal desde la planificación hasta el viaje' : isEn ? 'Personal assistance from planning to the journey' : 'Pendampingan personal sejak perencanaan hingga perjalanan'}</span></li>
          </ul>

          <div className="visitor-gallery">
            <div className="visitor-gallery-heading">
              <span className="eyebrow on-teal">{isEs ? 'Galería de viajeros' : isEn ? 'Visitor Gallery' : 'Galeri Pengunjung'}</span>
              <p>{isEn ? (isEs ? 'Momentos con viajeros a quienes he acompañado o prestado asistencia en Banggai.' : 'Moments with guests I have personally guided or assisted in Banggai.') : 'Momen bersama tamu yang pernah saya pandu atau dampingi secara langsung di Banggai.'}</p>
            </div>
            <div className="visitor-gallery-grid">
              {visitorPhotos.map(({ file, focus }, index) => (
                <figure className="visitor-gallery-card" key={file}>
                  <img
                    src={`/assets/images/visitor-gallery/${file}`}
                    style={focus ? { objectPosition: focus } : undefined}
                    alt={isEs ? `Momento de viaje ${index + 1} en Banggai` : isEn ? `Guest travel moment ${index + 1} in Banggai` : `Momen perjalanan tamu ${index + 1} di Banggai`}
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption>{isEs ? 'Momentos con viajeros' : isEs ? 'Momentos con viajeros' : isEn ? 'Guest moments' : 'Momen bersama tamu'}</figcaption>
                </figure>
              ))}
            </div>
            <p className="visitor-gallery-note">
              {isEs ? 'Nota: Estas fotografías muestran a viajeros a quienes acompañé, guié o presté asistencia mientras colaboraba con otras agencias. Se comparten como muestra de mi experiencia como guía y no implican que esas personas reservaran a través de Banggai Paradise.' : isEn ? 'Note: These photos feature guests I personally brought, guided or assisted while working with other travel agencies. They are shared to show my guiding experience and do not imply that those guests booked through or are affiliated with Banggai Paradise.' : 'Catatan: Foto-foto ini menampilkan tamu yang pernah saya bawa, pandu, atau dampingi saat bekerja bersama agensi perjalanan lain. Foto dibagikan sebagai dokumentasi pengalaman saya sebagai pemandu, dan bukan berarti para tamu tersebut memesan melalui atau berafiliasi dengan Banggai Paradise.'}
            </p>
          </div>

          <button type="button" className="btn btn-white" onClick={onMeetTeamClick}>
            <span>{isEs ? 'Planifica tu viaje' : isEs ? 'Planifica tu viaje' : isEn ? 'Plan Your Journey' : 'Rencanakan Perjalanan'}</span>
            <svg className="ic"><use href="#i-arrow" /></svg>
          </button>
        </div>
      </section>
    </div>
  );
};
