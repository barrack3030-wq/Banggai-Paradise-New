import React from 'react';
import { assetUrl } from '../utils/assetUrl';
import { Language } from '../i18n/translations';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const isEn = language === 'EN';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="fg">
          {/* Brand Info */}
          <div className="fbrand">
            <img
              src={assetUrl('assets/img/logo-white.png')}
              alt="Banggai Paradise Tour & Travel"
              width={530}
              height={250}
              loading="lazy"
            />
            <p>
              {isEn
                ? 'Your best choice travel partner for unforgettable island journeys. Trusted, professional, and locally rooted.'
                : 'Pilihan terbaik partner perjalanan Anda menjelajahi surga tersembunyi Kepulauan Banggai. Terpercaya, profesional, dan berakar lokal.'}
            </p>
            <div className="soc">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg className="ic">
                  <use href="#i-ig" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg className="ic">
                  <use href="#i-fb" />
                </svg>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <svg className="ic">
                  <use href="#i-tt" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav Column 1 */}
          <div>
            <h4>{isEn ? 'Company' : 'Perusahaan'}</h4>
            <nav>
              <a href="#about">{isEn ? 'About Us' : 'Tentang Kami'}</a>
              <a href="#packages">{isEn ? 'Tour Packages' : 'Paket Wisata'}</a>
              <a href="#destinations">{isEn ? 'Destinations' : 'Destinasi'}</a>
              <a href="#blog">{isEn ? 'Travel Blog' : 'Blog Wisata'}</a>
            </nav>
          </div>

          {/* Nav Column 2 */}
          <div>
            <h4>{isEn ? 'Destinations' : 'Destinasi Unggulan'}</h4>
            <nav>
              <a href="#destinations">Danau Paisu Pok</a>
              <a href="#destinations">Kepulauan Sombori</a>
              <a href="#destinations">Pulo Dua &amp; Balantak</a>
              <a href="#destinations">Banggai Laut Coral</a>
            </nav>
          </div>

          {/* Contact Column */}
          <div>
            <h4>{isEn ? 'Contact & Office' : 'Kontak & Kantor'}</h4>
            <nav>
              <a
                href="https://wa.me/628124567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp: +62 812-4567-890
              </a>
              <a href="mailto:info@banggaiparadise.com">
                info@banggaiparadise.com
              </a>
              <span className="text-sm block text-cyan-200/70 mt-1">
                Luwuk &amp; Banggai Islands, Sulawesi Tengah, Indonesia
              </span>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="fbar">
          <div>
            &copy; {currentYear} Banggai Paradise Tour &amp; Travel. All rights reserved.
          </div>
          <div>
            {isEn ? 'Your best choice travel partner.' : 'Pilihan terbaik partner perjalanan Anda.'}
          </div>
        </div>
      </div>
    </footer>
  );
};
