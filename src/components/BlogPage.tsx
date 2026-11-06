import React, { useMemo, useState } from 'react';
import { assetUrl } from '../utils/assetUrl';
import { Language } from '../i18n/translations';

interface BlogPageProps { language: Language; }

export const BlogPage: React.FC<BlogPageProps> = ({ language }) => {
  const isEn = language === 'EN';
  const [category, setCategory] = useState('all');
  const articles = [
    {
      id: 1, category: 'guide', image: assetUrl('assets/images/banggai_hero_paisupok_1793766897829.jpg'),
      title: isEn ? 'A first-timer’s guide to exploring the Banggai Islands' : 'Panduan Pertama Menjelajahi Kepulauan Banggai',
      excerpt: isEn ? 'Plan your island journey with practical advice on routes, boat transfers, places to visit and what to prepare before you go.' : 'Rencanakan perjalanan antarpulau dengan panduan rute, transportasi laut, destinasi, dan persiapan sebelum berangkat.',
      date: isEn ? 'TRAVEL GUIDE' : 'PANDUAN WISATA', read: isEn ? '6 min read' : '6 menit baca',
      body: isEn ? 'The Banggai Islands reward travellers who take time to plan. Begin in Luwuk, confirm your boat connections in advance, and allow enough time between destinations. Pack light, bring sun protection and keep essential items in a waterproof bag.' : 'Kepulauan Banggai memberi pengalaman terbaik bagi wisatawan yang merencanakan perjalanan dengan baik. Mulailah dari Luwuk, pastikan jadwal transportasi laut, dan sediakan waktu yang cukup di antara destinasi. Bawa perlengkapan secukupnya, pelindung matahari, serta tas tahan air untuk barang penting.'
    },
    {
      id: 2, category: 'tips', image: assetUrl('assets/img/reef.svg'),
      title: isEn ? 'Snorkeling basics for beginners in tropical waters' : 'Panduan Snorkeling untuk Pemula di Perairan Tropis',
      excerpt: isEn ? 'Simple ways to feel comfortable in the water and enjoy the colourful marine life responsibly.' : 'Cara sederhana agar lebih nyaman di air dan menikmati kehidupan bawah laut dengan tetap bertanggung jawab.',
      date: isEn ? 'TRAVEL TIPS' : 'TIPS PERJALANAN', read: isEn ? '4 min read' : '4 menit baca',
      body: isEn ? 'Choose a mask that fits comfortably, never touch coral, and follow your guide’s instructions. If you are not a confident swimmer, use a life jacket and stay close to your guide.' : 'Pilih masker yang nyaman, jangan menyentuh terumbu karang, dan ikuti arahan pemandu. Jika belum percaya diri berenang, gunakan pelampung dan tetap berada dekat dengan pemandu.'
    },
    {
      id: 3, category: 'inspiration', image: assetUrl('assets/img/sunset.svg'),
      title: isEn ? 'Slow moments and golden sunsets across Banggai' : 'Menikmati Senja dan Momen Tenang di Kepulauan Banggai',
      excerpt: isEn ? 'A slower way to experience the islands, from quiet coastlines to warm evening light.' : 'Cara menikmati pulau dengan lebih santai, dari garis pantai yang tenang hingga cahaya senja.',
      date: isEn ? 'INSPIRATION' : 'INSPIRASI', read: isEn ? '3 min read' : '3 menit baca',
      body: isEn ? 'Not every memorable moment needs a packed itinerary. Leave room to enjoy the coastline, watch the changing light and appreciate the quiet rhythm of island life.' : 'Tidak semua momen berkesan membutuhkan jadwal yang padat. Sisakan waktu untuk menikmati garis pantai, melihat perubahan cahaya, dan merasakan suasana kehidupan pulau yang tenang.'
    }
  ];
  const filtered = useMemo(() => category === 'all' ? articles : articles.filter(a => a.category === category), [category, isEn]);
  const lead = filtered[0] || articles[0];
  const side = articles.filter(a => a.id !== lead.id);
  const popular = [...articles].reverse();
  const labels = [
    ['all', isEn ? 'All articles' : 'Semua Artikel'],
    ['guide', isEn ? 'Travel guides' : 'Panduan Wisata'],
    ['tips', isEn ? 'Travel tips' : 'Tips Perjalanan'],
    ['inspiration', isEn ? 'Inspiration' : 'Inspirasi']
  ];
  return <section className="section editorial-blog">
    <div className="container">
      <div className="editorial-heading">
        <div><span className="eyebrow">{isEn ? 'THE JOURNAL' : 'JURNAL PERJALANAN'}</span><h2>{isEn ? 'Stories from the Banggai Islands' : 'Cerita dari Kepulauan Banggai'}</h2><p>{isEn ? 'Ideas, local insights and practical notes for a more meaningful journey.' : 'Inspirasi, wawasan lokal, dan panduan praktis untuk perjalanan yang lebih berkesan.'}</p></div>
      </div>
      <div className="editorial-filters" aria-label={isEn ? 'Filter articles' : 'Filter artikel'}>
        {labels.map(([value,label]) => <button key={value} type="button" className={category === value ? 'active' : ''} onClick={() => setCategory(value)}>{label}</button>)}
      </div>
      <div className="editorial-feature-grid">
        <article className="editorial-feature">
          <a href="#popular-articles" className="editorial-image"><img src={lead.image} alt={lead.title} /><span>{lead.date}</span></a>
          <div className="editorial-copy"><div className="editorial-meta">{lead.date}<span>·</span>{lead.read}</div><h3>{lead.title}</h3><p>{lead.excerpt}</p><a href="#popular-articles" className="editorial-read">{isEn ? 'Explore story' : 'Baca cerita'} <span>↗</span></a></div>
        </article>
        <aside className="editorial-side"><h3>{isEn ? 'More to explore' : 'Artikel lainnya'}</h3>{side.map(a => <article className="editorial-side-item" key={a.id}><img src={a.image} alt={a.title} /><div><span>{a.date}</span><h4>{a.title}</h4><small>{a.read}</small></div></article>)}</aside>
      </div>
      <section className="editorial-category">
        <div className="editorial-section-head"><div><span className="eyebrow">{isEn ? 'TRAVEL NOTES' : 'CATATAN WISATA'}</span><h2>{isEn ? 'Travel better, discover more' : 'Jelajahi dengan Lebih Baik'}</h2></div></div>
        <div className="editorial-secondary-grid">
          <article className="editorial-secondary-main"><img src={articles[1].image} alt={articles[1].title}/><div><span>{articles[1].date} · {articles[1].read}</span><h3>{articles[1].title}</h3><p>{articles[1].excerpt}</p></div></article>
          <div className="editorial-mini-list">{articles.filter(a => a.id !== 2).map(a => <article key={a.id}><img src={a.image} alt={a.title}/><div><span>{a.date}</span><h4>{a.title}</h4><small>{a.read}</small></div></article>)}</div>
        </div>
      </section>
    </div>
    <section className="editorial-popular" id="popular-articles"><div className="container"><span className="eyebrow">{isEn ? 'READER FAVOURITES' : 'PILIHAN PEMBACA'}</span><h2>{isEn ? 'Popular articles' : 'Artikel Populer'}</h2><div className="editorial-popular-grid">{popular.map(a => <article key={a.id}><img src={a.image} alt={a.title}/><div><span>{a.date}</span><h3>{a.title}</h3><small>{a.read}</small></div></article>)}</div></div></section>
  </section>;
};
