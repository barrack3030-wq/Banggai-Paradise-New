import React, { useEffect, useMemo } from 'react';
import { assetUrl } from '../utils/assetUrl';
import { Language } from '../i18n/translations';

interface TravelBlogProps { language: Language; showAllArticles?: boolean; }

export const TravelBlog: React.FC<TravelBlogProps> = ({ language, showAllArticles = false }) => {
  const isEn = language === 'EN';
  const author = 'Banggai Paradise Editorial Team';
  const publishedAt = '2026-11-05';
  const basePath = import.meta.env.BASE_URL;
  const articles = [
    { id: 1, slug: 'island-hopping-guide', isBig: true, img: 'https://banggaiwonderland.my.id/images/DSCF7073-5.webp', category: isEn ? 'Guide' : 'Panduan', readTime: isEn ? '5 min read' : '5 mnt baca', titleEn: 'Island hopping for first-timers: how to plan the perfect trip', titleId: 'Panduan Island Hopping Pemula: Cara Merencanakan Liburan Sempurna ke Banggai', excerptEn: 'What to pack, how to plan your days and how to make the most of every boat ride through crystal lagoons.', excerptId: 'Perlengkapan yang harus dibawa, rute pulau terbaik, dan tips menikmati setiap pelayaran perahu di Kepulauan Banggai.', contentEn: 'Planning your first journey to the Banggai Islands is an exciting adventure. Start by deciding which islands and experiences you want to prioritise, then allow enough time for transfers by boat. Pack reef-conscious sun protection, a dry bag for boat journeys and comfortable footwear. Confirm local transport schedules before departure because connections can vary by route and day.', contentId: 'Merencanakan liburan pertama ke Kepulauan Banggai akan lebih nyaman jika dilakukan sejak awal. Tentukan pulau dan pengalaman yang ingin diprioritaskan, lalu sisihkan waktu yang cukup untuk perjalanan menggunakan kapal. Bawa pelindung matahari yang ramah lingkungan, dry bag, air minum, dan alas kaki yang nyaman. Pastikan kembali jadwal transportasi lokal sebelum berangkat karena koneksi antarpulau dapat berbeda menurut rute dan hari perjalanan.' },
    { id: 2, slug: 'snorkeling-basics', isBig: false, img: assetUrl('assets/img/reef.svg'), category: isEn ? 'Tips' : 'Tips Wisata', readTime: isEn ? '4 min read' : '4 mnt baca', titleEn: 'Snorkeling basics for beginners in tropical waters', titleId: 'Dasar Snorkeling untuk Pemula di Perairan Tropis', excerptEn: 'Simple tips to feel confident, breathe easy, and safely enjoy the underwater world.', excerptId: 'Tips praktis agar rileks, bernapas tenang, dan menikmati keindahan bawah laut dengan nyaman.', contentEn: 'Choose a mask that fits comfortably and check its seal before entering the water. Use a life jacket if you are not a confident swimmer, stay within the area advised by your guide and never stand on or touch coral. Avoid feeding fish and take all rubbish back to shore.', contentId: 'Pilih masker yang pas dan nyaman, lalu periksa kerapatannya sebelum masuk ke air. Gunakan pelampung jika belum percaya diri berenang, tetap berada di area yang diarahkan pemandu, serta jangan menginjak atau menyentuh terumbu karang. Hindari memberi makan ikan dan bawa kembali semua sampah ke daratan.' },
    { id: 3, slug: 'golden-hour-banggai', isBig: false, img: assetUrl('assets/img/sunset.svg'), category: isEn ? 'Inspiration' : 'Inspirasi', readTime: isEn ? '3 min read' : '3 mnt baca', titleEn: 'Chasing the perfect golden hour at sea', titleId: 'Berburu Sunset Emas di Atas Lautan Banggai', excerptEn: 'Our favorite ways to enjoy the islands as the tropical day turns golden.', excerptId: 'Cara menikmati suasana Kepulauan Banggai saat cahaya senja mulai menyelimuti lautan.', contentEn: 'Not every memorable island experience needs a packed itinerary. Leave room to enjoy the coastline, watch the changing light and appreciate the quiet rhythm of island life. Check return boat arrangements in advance and avoid staying at isolated spots after dark without a safe transport plan.', contentId: 'Tidak semua pengalaman berkesan di pulau membutuhkan jadwal yang padat. Sisakan waktu untuk menikmati garis pantai, melihat perubahan cahaya, dan merasakan suasana kehidupan pulau. Pastikan pengaturan transportasi kembali sejak awal dan hindari berada di lokasi terpencil setelah gelap tanpa rencana perjalanan yang aman.' }
  ];
  const titleOf = (a: typeof articles[number]) => isEn ? a.titleEn : a.titleId;
  const excerptOf = (a: typeof articles[number]) => isEn ? a.excerptEn : a.excerptId;
  const contentOf = (a: typeof articles[number]) => isEn ? a.contentEn : a.contentId;
  const formatDate = (value: string) => new Intl.DateTimeFormat(isEn ? 'en' : 'id', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(value + 'T00:00:00Z'));
  const slug = window.location.pathname.replace(/\/$/, '').split('/').pop() || '';
  const selectedArticle = useMemo(() => articles.find(a => a.slug === slug) || null, [slug, language]);

  useEffect(() => {
    document.body.classList.toggle('blog-reading-mode', Boolean(selectedArticle));
    const pageUrl = window.location.href.split('#')[0];
    const description = selectedArticle ? excerptOf(selectedArticle) : (isEn ? 'Read travel guides, island-hopping advice and practical tips for exploring the Banggai Islands with Banggai Paradise.' : 'Baca panduan wisata, tips island hopping, dan informasi perjalanan untuk menjelajahi Kepulauan Banggai bersama Banggai Paradise.');
    document.title = selectedArticle ? titleOf(selectedArticle) + ' | Banggai Paradise' : (isEn ? 'Banggai Islands Travel Blog & Guides | Banggai Paradise' : 'Blog Wisata Kepulauan Banggai | Banggai Paradise');
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', 'description'); document.head.appendChild(meta); }
    meta.setAttribute('content', description);
    const structured = selectedArticle ? { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: titleOf(selectedArticle), description, articleSection: selectedArticle.category, datePublished: publishedAt, dateModified: publishedAt, author: { '@type': 'Organization', name: author }, publisher: { '@type': 'Organization', name: 'Banggai Paradise' }, mainEntityOfPage: pageUrl, image: new URL(selectedArticle.img, window.location.origin).href, inLanguage: isEn ? 'en' : 'id-ID' } : { '@context': 'https://schema.org', '@type': 'Blog', name: isEn ? 'Banggai Paradise Travel Blog' : 'Blog Wisata Banggai Paradise', description, url: pageUrl, publisher: { '@type': 'Organization', name: 'Banggai Paradise' }, blogPost: articles.map(a => ({ '@type': 'BlogPosting', headline: titleOf(a), description: excerptOf(a), articleSection: a.category, datePublished: publishedAt, dateModified: publishedAt, author: { '@type': 'Organization', name: author }, publisher: { '@type': 'Organization', name: 'Banggai Paradise' }, url: basePath + 'blog/' + a.slug + '/', image: new URL(a.img, window.location.origin).href, inLanguage: isEn ? 'en' : 'id-ID' })) };
    let script = document.getElementById('blog-jsonld') as HTMLScriptElement | null;
    if (!script) { script = document.createElement('script'); script.id = 'blog-jsonld'; script.type = 'application/ld+json'; document.head.appendChild(script); }
    script.textContent = JSON.stringify(structured);
    return () => { document.body.classList.remove('blog-reading-mode'); document.getElementById('blog-jsonld')?.remove(); };
  }, [language, selectedArticle]);

  if (selectedArticle) {
    const relatedArticles = articles.filter(a => a.slug !== selectedArticle.slug);
    const relatedDestinationIds = selectedArticle.slug === 'island-hopping-guide'
      ? ['paisu-pok','paisu-batango','kawalu-bay']
      : selectedArticle.slug === 'snorkeling-basics'
        ? ['poganda','pulau-dua','mbuang-mbuang']
        : ['kilo-5','pulau-dua','long-beach'];
    const destinationCards = [
      {id:'paisu-pok',name:'Danau Paisu Pok',en:'Lake Paisu Pok',image:'https://banggaiwonderland.my.id/images/DSCF7073-5.webp',desc:'Danau jernih dan lanskap pulau yang ikonik.',descEn:'A clear lake and an iconic island landscape.'},
      {id:'paisu-batango',name:'Paisu Batango',en:'Paisu Batango',image:'https://banggaiwonderland.my.id/images/paisu.jpg',desc:'Laguna alami dengan perpaduan air tawar dan laut.',descEn:'A natural lagoon where fresh and seawater meet.'},
      {id:'kawalu-bay',name:'Kawalu Bay',en:'Kawalu Bay',image:'https://banggaiwonderland.my.id/images/kawalu.webp',desc:'Teluk tenang dengan air toska dan mangrove.',descEn:'A quiet bay with turquoise water and mangroves.'},
      {id:'poganda',name:'Pantai Poganda',en:'Poganda Beach',image:'https://banggaiwonderland.my.id/images/Poganda-Beach-Banggai-IndonesiaJuara-Trip.webp',desc:'Pantai pasir putih dan perairan dangkal.',descEn:'A white-sand beach with shallow coastal waters.'},
      {id:'pulau-dua',name:'Pulau Dua Balantak',en:'Pulau Dua Balantak',image:'https://banggaiwonderland.my.id/images/images%20(2).jpg',desc:'Perbukitan savana dan panorama laut terbuka.',descEn:'Savannah hills and expansive ocean views.'},
      {id:'kilo-5',name:'Pantai Kilo 5',en:'Kilo 5 Beach',image:'https://banggaiwonderland.my.id/images/Pantai-Kilo-5-1.webp',desc:'Pantai populer untuk menikmati laut dan senja.',descEn:'A popular beach for the sea and sunset.'},
      {id:'mbuang-mbuang',name:'Pulau Mbuang-Mbuang',en:'Mbuang-Mbuang Island',image:'https://banggaiwonderland.my.id/images/mbuang%20mbuang.jpg',desc:'Pulau dengan danau, pantai, dan kehidupan bawah laut.',descEn:'An island with lakes, beaches and marine life.'},
      {id:'long-beach',name:'Long Beach',en:'Long Beach',image:'https://banggaiwonderland.my.id/images/long%20b.jpg',desc:'Pantai terpencil berpasir putih yang dicapai dengan perahu.',descEn:'A secluded white-sand beach reached by boat.'}
    ].filter(d => relatedDestinationIds.includes(d.id));
    return <article className="blog-reading-page"><div className="blog-reading-container">
      <nav className="article-breadcrumb" aria-label={isEn ? 'Breadcrumb' : 'Navigasi halaman'}>
        <a href={basePath}>{isEn ? 'Home' : 'Beranda'}</a><span>/</span><a href={basePath + 'blog/'}>Blog</a><span>/</span><span aria-current="page">{titleOf(selectedArticle)}</span>
      </nav>
      <a className="blog-back-link" href={basePath + 'blog/'}>← {isEn ? 'Back to all articles' : 'Kembali ke semua artikel'}</a>
      <header className="article-header">
        <div className="blog-reading-meta"><span className="article-category">{selectedArticle.category}</span><span>{selectedArticle.readTime}</span></div>
        <h1>{titleOf(selectedArticle)}</h1><p className="article-deck">{excerptOf(selectedArticle)}</p>
        <div className="blog-reading-byline"><span className="article-author-mark">BP</span><span className="article-author-copy"><small>{isEn ? 'Written by' : 'Ditulis oleh'}</small><strong>{author}</strong></span><span className="article-date"><small>{isEn ? 'Published' : 'Diterbitkan'}</small><time dateTime={publishedAt}>{formatDate(publishedAt)}</time></span></div>
      </header>
      <figure className="article-hero-media"><img className="blog-reading-cover" src={selectedArticle.img} alt={titleOf(selectedArticle)} /><figcaption>{isEn ? 'Explore the Banggai Islands with thoughtful local travel planning.' : 'Jelajahi Kepulauan Banggai dengan perencanaan perjalanan bersama tim lokal.'}</figcaption></figure>
      <div className="article-topic-tags" aria-label={isEn ? 'Article topics' : 'Topik artikel'}><span>{selectedArticle.category}</span><span>{isEn ? 'Banggai Islands' : 'Kepulauan Banggai'}</span><span>{isEn ? 'Travel Guide' : 'Panduan Perjalanan'}</span></div>
      <div className="blog-reading-content"><p>{contentOf(selectedArticle)}</p></div>
      <section className="article-related-section"><div className="article-section-heading"><span className="eyebrow">{isEn ? 'KEEP READING' : 'LANJUTKAN MEMBACA'}</span><h2>{isEn ? 'Related travel stories' : 'Artikel yang mungkin Anda sukai'}</h2></div>
        <div className="article-related-grid">{relatedArticles.map(a => <a className="article-related-card" href={basePath + 'blog/' + a.slug + '/'} key={a.slug}><img src={a.img} alt={titleOf(a)} loading="lazy"/><div><span>{a.category} · {a.readTime}</span><h3>{titleOf(a)}</h3><p>{excerptOf(a)}</p><strong>{isEn ? 'Read article' : 'Baca artikel'} →</strong></div></a>)}</div>
      </section>
      <section className="article-related-section article-destinations-section"><div className="article-section-heading"><span className="eyebrow">{isEn ? 'EXPLORE THE REGION' : 'JELAJAHI KAWASAN'}</span><h2>{isEn ? 'Destinations connected to this story' : 'Destinasi terkait artikel ini'}</h2><p>{isEn ? 'Continue your journey with places that match this travel topic.' : 'Lanjutkan inspirasi perjalanan dengan destinasi yang sesuai dengan topik ini.'}</p></div>
        <div className="article-destination-grid">{destinationCards.map(d=><a className="article-destination-card" href={basePath + 'destinations/#' + d.id} key={d.id}><img src={d.image} alt={isEn?d.en:d.name} loading="lazy"/><div><h3>{isEn?d.en:d.name}</h3><p>{isEn?d.descEn:d.desc}</p><strong>{isEn?'Explore destination':'Lihat destinasi'} →</strong></div></a>)}</div>
        <a className="article-all-destinations" href={basePath + 'destinations/'}>{isEn ? 'View all destinations' : 'Lihat semua destinasi'} →</a>
      </section>
      <aside className="article-end-cta">
        <div><span className="eyebrow">{isEn ? 'PLAN YOUR JOURNEY' : 'RENCANAKAN PERJALANAN'}</span><h2>{isEn ? 'Ready to explore the Banggai Islands?' : 'Siap menjelajahi Kepulauan Banggai?'}</h2><p>{isEn ? 'Turn these ideas into a thoughtful trip with a local team.' : 'Wujudkan inspirasi dari artikel ini menjadi perjalanan yang lebih terencana bersama tim lokal.'}</p></div>
        <a href="https://wa.me/6285820830530" target="_blank" rel="noreferrer">{isEn ? 'Discuss your trip' : 'Konsultasikan perjalanan'} <span aria-hidden="true">→</span></a>
      </aside>
    </div></article>;
  }

  return <section className="section blog" id="blog"><div className="container"><div className="head-row"><div><span className="eyebrow">{isEn ? 'Travel Blog' : 'Blog Wisata'}</span><h2>{isEn ? 'Stories & travel tips' : 'Kisah & Tips Perjalanan'}</h2></div>{showAllArticles && <a className="btn btn-outline btn-sm" href={basePath + 'blog/'}><span>{isEn ? 'All articles' : 'Semua Artikel'}</span><svg className="ic"><use href="#i-arrow" /></svg></a>}</div><div className="bgrid">{articles.map(art => <article key={art.id} className={`bcard ${art.isBig ? 'big' : ''}`}><a className="blog-card-link" href={basePath + 'blog/' + art.slug + '/'} aria-label={isEn ? 'Read article: ' + titleOf(art) : 'Baca artikel: ' + titleOf(art)}><div className="ba"><img src={art.img} alt={titleOf(art)} loading="lazy" width="600" height="700" /></div><div className="bb"><div className="bm"><em>{art.category}</em><span>{art.readTime}</span></div><h3>{titleOf(art)}</h3><p>{excerptOf(art)}</p><div className="blog-byline"><span>{isEn ? 'By' : 'Oleh'} <strong>{author}</strong></span><time dateTime={publishedAt}>{formatDate(publishedAt)}</time></div><div className="rm"><span>{isEn ? 'Read article' : 'Baca artikel'}</span><svg className="ic"><use href="#i-arrow" /></svg></div></div></a></article>)}</div></div></section>;
};
