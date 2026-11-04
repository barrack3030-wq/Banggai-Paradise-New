import React, { useEffect, useState } from 'react';
import { assetUrl } from '../utils/assetUrl';
import { Language } from '../i18n/translations';

interface TravelBlogProps {
  language: Language;
}

export const TravelBlog: React.FC<TravelBlogProps> = ({ language }) => {
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);
  const isEn = language === 'EN';
  const author = 'Banggai Paradise Editorial Team';
  const publishedAt = '2026-11-05';
  const formatDate = (value: string) => new Intl.DateTimeFormat(isEn ? 'en' : 'id', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(value + 'T00:00:00Z'));

  useEffect(() => {
    const pageUrl = window.location.href.split('#')[0];
    const data = { '@context': 'https://schema.org', '@type': 'Blog', name: isEn ? 'Banggai Paradise Travel Blog' : 'Blog Wisata Banggai Paradise', url: pageUrl, publisher: { '@type': 'Organization', name: 'Banggai Paradise' }, blogPost: articles.map((article: any) => ({ '@type': 'BlogPosting', headline: isEn ? article.titleEn : article.titleId, description: isEn ? article.excerptEn : article.excerptId, articleSection: article.category, datePublished: publishedAt, dateModified: publishedAt, author: { '@type': 'Organization', name: author }, publisher: { '@type': 'Organization', name: 'Banggai Paradise' }, mainEntityOfPage: pageUrl, image: new URL(article.img, window.location.origin).href, inLanguage: isEn ? 'en' : 'id-ID' })) };
    let script = document.getElementById('blog-jsonld') as HTMLScriptElement | null;
    if (!script) { script = document.createElement('script'); script.id = 'blog-jsonld'; script.type = 'application/ld+json'; document.head.appendChild(script); }
    script.textContent = JSON.stringify(data);
    document.title = isEn ? 'Banggai Islands Travel Blog & Guides | Banggai Paradise' : 'Blog Wisata Kepulauan Banggai | Banggai Paradise';
    const description = isEn ? 'Read travel guides, island-hopping advice and practical tips for exploring the Banggai Islands with Banggai Paradise.' : 'Baca panduan wisata, tips island hopping, dan informasi perjalanan untuk menjelajahi Kepulauan Banggai bersama Banggai Paradise.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', 'description'); document.head.appendChild(meta); }
    meta.setAttribute('content', description);
    return () => { document.getElementById('blog-jsonld')?.remove(); };
  }, [language]);

  const articles = [
    {
      id: 1,
      isBig: true,
      img: assetUrl('assets/img/aerial.svg'),
      category: isEn ? 'Guide' : 'Panduan',
      readTime: isEn ? '5 min read' : '5 mnt baca',
      titleEn: 'Island hopping for first-timers: how to plan the perfect trip',
      titleId: 'Panduan Island Hopping Pemula: Cara Merencanakan Liburan Sempurna ke Banggai',
      excerptEn: 'What to pack, how to plan your days and how to make the most of every boat ride through crystal lagoons.',
      excerptId: 'Perlengkapan yang harus dibawa, rute pulau terbaik, dan tips menikmati setiap pelayaran perahu di kepulauan Banggai.',
      content: isEn
        ? 'Planning your first journey to the Banggai Islands is an exciting adventure. Start by deciding between Peleng (for the famed crystal Paisu Pok Lake and lush waterfalls) and Banggai Laut (for snorkeling with endemic cardinalfish and secluded beaches). We recommend packing reef-safe sunscreen, a dry bag for boat hops, and water shoes for coral and rocky coves.'
        : 'Merencanakan liburan pertama ke Kepulauan Banggai adalah petualangan magis. Mulailah dengan membagi waktu antara Pulau Peleng (Danau Paisu Pok dan air terjun) serta Banggai Laut (gugusan pulau karang dan ikan kardinal). Jangan lupa membawa tabir surya aman karang, dry bag, serta pakaian renang yang nyaman.',
    },
    {
      id: 2,
      isBig: false,
      img: assetUrl('assets/img/reef.svg'),
      category: isEn ? 'Tips' : 'Tips Wisata',
      readTime: isEn ? '4 min read' : '4 mnt baca',
      titleEn: 'Snorkeling basics for beginners in tropical waters',
      titleId: 'Dasar Snorkeling untuk Pemula di Perairan Tropis',
      excerptEn: 'Simple tips to feel confident, breathe easy, and safely enjoy the pristine underwater wonderland.',
      excerptId: 'Tips praktis agar rileks, bernapas tenang, dan menikmati keindahan terumbu karang dengan nyaman.',
      content: isEn
        ? 'Snorkeling in Banggai’s turquoise waters is suitable for all swimming levels. Always ensure your mask creates a watertight seal without over-tightening. Our guides provide life jackets and personalized assistance so even non-swimmers can float above thriving coral reefs safely.'
        : 'Snorkeling di perairan Banggai ramah bagi semua tingkat kemahiran berenang. Pemandu kami senantiasa menyediakan pelampung standar dan pendampingan personal agar siapa pun dapat menikmati terumbu karang dengan tenang.',
    },
    {
      id: 3,
      isBig: false,
      img: assetUrl('assets/img/sunset.svg'),
      category: isEn ? 'Inspiration' : 'Inspirasi',
      readTime: isEn ? '3 min read' : '3 mnt baca',
      titleEn: 'Chasing the perfect golden hour at sea',
      titleId: 'Berburu Sunset Emas di Atas Lautan Banggai',
      excerptEn: 'Our favorite secret vantage points on the water when the tropical day turns golden and violet.',
      excerptId: 'Titik-titik terbaik di atas perahu saat mentari perlahan tenggelam membiaskan spektrum jingga dan lembayung.',
      content: isEn
        ? 'As the equatorial sun dips below the karst horizons, the sea turns into a molten gold canvas. A sunset boat drift between the cliffs of Sombori or near the wooden boardwalks of Balantak is an unforgettable memory of any Banggai expedition.'
        : 'Ketika mentari khatulistiwa perlahan surut di balik tebing karst, lautan Banggai memantulkan cahaya keemasan yang menakjubkan. Momen sunset di atas perahu kayu adalah penutup hari yang sempurna setelah seharian menjelajahi pulau.',
    },
  ];

  return (
    <section className="section blog" id="blog">
      <div className="container">
        {/* Head Row */}
        <div className="head-row">
          <div>
            <span className="eyebrow">{isEn ? 'Travel Blog' : 'Blog Wisata'}</span>
            <h2>{isEn ? 'Stories & travel tips' : 'Kisah & Tips Perjalanan'}</h2>
          </div>
          <a
            className="btn btn-outline btn-sm"
            href="#blog"
            onClick={(e) => {
              e.preventDefault();
              setSelectedArticle(articles[0]);
            }}
          >
            <span>{isEn ? 'All articles' : 'Semua Artikel'}</span>
            <svg className="ic">
              <use href="#i-arrow" />
            </svg>
          </a>
        </div>

        {/* Blog Grid */}
        <div className="bgrid">
          {articles.map((art) => (
            <article
              key={art.id}
              className={`bcard ${art.isBig ? 'big' : ''} cursor-pointer`}
              onClick={() => setSelectedArticle(art)}
            >
              <div className="ba">
                <img
                  src={art.img}
                  alt={isEn ? art.titleEn : art.titleId}
                  loading="lazy"
                  width={600}
                  height={700}
                />
              </div>

              <div className="bb">
                <div className="bm">
                  <em>{art.category}</em>
                  <span>{art.readTime}</span>
                </div>
                <h3>{isEn ? art.titleEn : art.titleId}</h3>
                <p>{isEn ? art.excerptEn : art.excerptId}</p>
                <div className="blog-byline"><span>{isEn ? 'By' : 'Oleh'} <strong>{author}</strong></span><time dateTime={publishedAt}>{formatDate(publishedAt)}</time></div>

                <div className="rm">
                  <span>{isEn ? 'Read article' : 'Baca artikel'}</span>
                  <svg className="ic">
                    <use href="#i-arrow" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-lg cursor-pointer"
            >
              ✕
            </button>
            <div className="mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#EE7F6D]">
                {selectedArticle.category} · {selectedArticle.readTime}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#07485A] mt-2 leading-tight">
                {isEn ? selectedArticle.titleEn : selectedArticle.titleId}
              </h3>
            </div>
            <div className="rounded-2xl overflow-hidden h-60 mb-6 bg-slate-100">
              <img
                src={selectedArticle.img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-slate-700 leading-relaxed text-base">
              {selectedArticle.content}
            </p>
            <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                className="btn btn-coral btn-sm"
                onClick={() => setSelectedArticle(null)}
              >
                <span>{isEn ? 'Close' : 'Tutup'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
