import React from 'react';
import { Language } from '../i18n/translations';
import { localizedPath } from '../utils/localizedPath';

interface Props { language: Language }

const wa = 'https://wa.me/6285820830530?text=';

export const LuwukStopoverPage: React.FC<Props> = ({ language }) => {
  const id = language === 'ID';
  type ItinerarySlot = [string, string[]];
  type ItineraryDay = { day: string; title: string; time: ItinerarySlot[] };
  const days: ItineraryDay[] = id ? [
    { day: 'Hari 1', title: 'Luwuk Stopover — 1 Day Escape', time: [
      ['11.30 — Tiba di Luwuk', ['Penjemputan oleh tim lokal di bandara atau titik awal yang disepakati', 'Meet and greet dan persiapan perjalanan']],
      ['12.00 — Pickup & makan siang', ['Berangkat dengan private transport', 'Makan siang atau mencoba kuliner lokal']],
      ['13.30 — Explore Piala Waterfall', ['Mengunjungi kawasan Air Terjun Piala', 'Menikmati alam tropis, berenang, dan bersantai', 'Dokumentasi perjalanan']],
      ['15.30 — Kilo 5 & pesisir Luwuk', ['Menuju kawasan pesisir Luwuk', 'Mengunjungi Kilo 5 dan menikmati suasana sore', 'Waktu untuk foto dan bersantai']],
      ['18.30 — Drop-off hotel / bandara', ['Diantar ke hotel atau bandara', 'Perjalanan selesai']]
    ]}
  ] : [
    { day: 'Day 1', title: 'Luwuk Stopover — 1 Day Escape', time: [
      ['11:30 — Arrival in Luwuk', ['Pick-up by the local team at the airport or an agreed starting point', 'Meet and greet and trip briefing']],
      ['12:00 — Pickup & lunch', ['Depart by private transport', 'Lunch or a local food experience']],
      ['13:30 — Explore Piala Waterfall', ['Visit the Piala Waterfall area', 'Enjoy the tropical surroundings, swim and relax', 'Trip documentation']],
      ['15:30 — Kilo 5 & Luwuk coastline', ['Head to the Luwuk coastline', 'Visit Kilo 5 and enjoy the afternoon atmosphere', 'Time for photos and relaxing']],
      ['18:30 — Drop-off at hotel / airport', ['Transfer to your hotel or the airport', 'Trip ends']]
    ]}
  ];
  const included = id
    ? ['Penjemputan saat tiba di Luwuk', 'Private transport selama perjalanan', 'Kunjungan ke Piala Waterfall', 'Kilo 5 & pesisir Luwuk', 'Dokumentasi perjalanan', 'Drop-off ke hotel atau bandara']
    : ['Pick-up on arrival in Luwuk', 'Private transport throughout the trip', 'Visit to Piala Waterfall', 'Kilo 5 & the Luwuk coastline', 'Trip documentation', 'Drop-off at your hotel or the airport'];
  const excluded = id
    ? ['Tiket pesawat', 'Akomodasi', 'Pengeluaran pribadi', 'Asuransi perjalanan', 'Makan dan tiket masuk, kecuali tercantum dalam penawaran']
    : ['Flight tickets', 'Accommodation', 'Personal expenses', 'Travel insurance', 'Meals and entrance fees unless stated in your quote'];
  const suited = id
    ? ['Wisatawan yang transit di Luwuk', 'First-time visitor ke Banggai', 'Couple & honeymoon', 'Private trip keluarga', 'Wisatawan yang punya waktu terbatas']
    : ['Travellers on a stopover in Luwuk', 'First-time visitors to Banggai', 'Couples & honeymooners', 'Private family trips', 'Travellers with limited time'];
  const highlights = id
    ? ['✈️ Tiba di Luwuk', '💦 Piala Waterfall', '🌊 Kilo 5 & pesisir Luwuk', '🚗 Private transport', '📸 Dokumentasi perjalanan', '🏨 Drop-off ke hotel atau bandara']
    : ['✈️ Arrival in Luwuk', '💦 Piala Waterfall', '🌊 Kilo 5 & the Luwuk coastline', '🚗 Private transport', '📸 Trip documentation', '🏨 Drop-off at hotel or airport'];
  return <div className="luwuk-stopover bg-[#FFF8EC] min-h-screen">
    <section className="relative min-h-[440px] sm:min-h-[540px] flex items-end overflow-hidden">
      <img src={'https://banggaiwonderland.my.id/images/piala.jpg'} alt={id ? 'Air Terjun Piala di Luwuk, Banggai' : 'Piala Waterfall in Luwuk, Banggai'} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#052C37] via-[#052C37]/45 to-black/10" />
      <div className="container relative z-10 pb-12 sm:pb-16 text-white">
        <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-white/75 mb-5"><a href={localizedPath('', language)}>{id ? 'Beranda' : 'Home'}</a> / <a href={localizedPath('packages/', language)}>{id ? 'Paket Wisata' : 'Tour Packages'}</a> / <span className="text-white">Luwuk Stopover</span></nav>
        <span className="eyebrow light">{id ? 'PRIVATE TRIP · LUWUK · SULAWESI TENGAH' : 'PRIVATE TRIP · LUWUK · CENTRAL SULAWESI'}</span>
        <h1 className="mt-4 max-w-4xl text-4xl sm:text-5xl lg:text-6xl leading-tight text-white">{id ? 'Luwuk Stopover — 1 Day Escape' : 'Luwuk Stopover — 1 Day Escape'}</h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/85">{id ? 'Punya waktu singkat di Luwuk tapi tetap ingin menikmati alam Banggai? Paket 1 hari yang praktis untuk kamu yang transit atau baru tiba di Luwuk.' : 'Short on time in Luwuk but still want to enjoy Banggai\'s nature? A practical one-day trip for travellers on a stopover or just arriving in Luwuk.'}</p>
        <div className="flex flex-wrap gap-3 mt-7 text-sm"><span className="rounded-full bg-white/15 border border-white/25 px-4 py-2">1 {id ? 'Hari' : 'Day'}</span><span className="rounded-full bg-white/15 border border-white/25 px-4 py-2">{id ? 'Private Trip' : 'Private Trip'}</span><span className="rounded-full bg-white/15 border border-white/25 px-4 py-2">Luwuk (LUW)</span></div>
      </div>
    </section>
    <section className="py-12 sm:py-16"><div className="container grid lg:grid-cols-[1fr_320px] gap-10">
      <article className="min-w-0">
        <p className="text-base sm:text-lg leading-8 text-slate-700">{id ? 'Luwuk Stopover adalah paket 1 hari untuk kamu yang transit atau baru tiba di Luwuk dan ingin memanfaatkan waktu dengan perjalanan yang praktis, tanpa harus menginap lama. Rute dapat disesuaikan dengan jam kedatangan dan keberangkatan penerbanganmu.' : 'Luwuk Stopover is a one-day trip for travellers on a stopover or just arriving in Luwuk who want to make the most of their time with a practical journey, without a long stay. The route can be adjusted around your flight arrival and departure times.'}</p>
        <ul className="highlight-list">{highlights.map(h=><li key={h}>{h}</li>)}</ul>
        <div className="mt-10"><span className="eyebrow">{id ? 'RUNDOWN PERJALANAN' : 'YOUR JOURNEY'}</span><h2 className="mt-3 text-3xl">{id ? 'Itinerary 1 Hari di Luwuk' : 'Luwuk One-Day Itinerary'}</h2>
          <div className="mt-7 space-y-7">{days.map((day,i)=><section key={day.day} className="rounded-3xl bg-white border border-slate-100 p-5 sm:p-7 shadow-sm">
            <div className="flex items-start gap-4"><span className="shrink-0 rounded-2xl bg-[#0A3A40] text-white px-3 py-2 text-sm font-semibold">{day.day}</span><div><h3 className="text-xl sm:text-2xl text-[#0A3A40]">{day.title}</h3><div className="mt-5 space-y-5">{day.time.map(([time,items])=><div key={time}><h4 className="font-semibold text-slate-800">{time}</h4><ul className="mt-2 space-y-2">{items.map(item=><li key={item} className="flex gap-2 text-sm leading-6 text-slate-600"><span className="text-teal-600">•</span>{item}</li>)}</ul></div>)}</div></div></div>
          </section>)}</div>
        </div>
        <div className="mt-12"><span className="eyebrow">{id ? 'FASILITAS PAKET' : 'PACKAGE DETAILS'}</span><h2 className="mt-3 text-3xl">{id ? 'Apa yang Termasuk dalam Paket?' : 'What Is Included?'}</h2><div className="grid sm:grid-cols-2 gap-3 mt-6">{included.map(item=><div key={item} className="bg-white border border-slate-100 rounded-xl p-4 flex gap-3 text-sm text-slate-700"><span className="text-teal-600 font-bold">✓</span>{item}</div>)}</div>
          <h3 className="text-xl text-[#0A3A40] mt-9">{id ? 'Tidak Termasuk' : 'Not Included'}</h3><div className="grid sm:grid-cols-2 gap-3 mt-4">{excluded.map(item=><div key={item} className="bg-white border border-slate-100 rounded-xl p-4 flex gap-3 text-sm text-slate-600"><span className="text-slate-400 font-bold">×</span>{item}</div>)}</div>
        </div>
        <div className="mt-12"><span className="eyebrow">{id ? 'COCOK UNTUK' : 'PERFECT FOR'}</span><h2 className="mt-3 text-3xl">{id ? 'Cocok untuk' : 'Perfect for'}</h2><ul className="suited-list">{suited.map(item=><li key={item}>{item}</li>)}</ul>
          <p className="stopover-tagline">{id ? 'Tidak perlu menunggu beberapa hari untuk mulai menjelajahi Banggai. One day in Luwuk, one beautiful memory.' : 'No need to wait days to start exploring Banggai. One day in Luwuk, one beautiful memory.'}</p></div>
        <aside className="mt-10 rounded-2xl bg-[#E6F9FA] border border-[#BCE8EB] p-5 sm:p-6"><h3 className="text-lg text-[#0A3A40]">{id ? 'Catatan perjalanan' : 'Travel notes'}</h3><p className="mt-2 text-sm leading-7 text-slate-700">{id ? 'Itinerary dapat disesuaikan dengan jadwal penerbangan, cuaca, kondisi jalan, dan situasi lokal. Urutan kunjungan atau durasi di setiap lokasi dapat berubah demi kenyamanan dan keselamatan wisatawan. Konfirmasi waktu penerbangan sebelum memesan.' : 'The itinerary may be adjusted to flight schedules, weather, road conditions and local circumstances. Visit order or time at each location may change for guest comfort and safety. Please confirm your flight times before booking.'}</p></aside>
        <div className="mt-12"><h2 className="text-2xl">{id ? 'Pertanyaan Umum Paket Luwuk Stopover' : 'Luwuk Stopover FAQs'}</h2><div className="mt-5 space-y-4">{(id ? [['Apakah paket ini private trip?','Ya. Perjalanan menggunakan private transport, sehingga ritme dan urutan kunjungan dapat disesuaikan dengan kebutuhanmu.'],['Apakah bisa dijemput dan diantar ke hotel atau bandara?','Bisa. Kami menjemput saat kamu tiba di Luwuk dan mengantarmu kembali ke hotel atau bandara di akhir perjalanan.'],['Apakah itinerary bisa berubah?','Bisa. Penyesuaian dilakukan dengan mempertimbangkan jadwal penerbangan, cuaca, kondisi jalan, dan situasi lokal.'],['Apakah harga paket tercantum?','Harga dikonfirmasi berdasarkan tanggal perjalanan, jumlah peserta, dan rincian layanan yang dipilih.']]:[['Is this a private tour?','Yes. The trip uses private transport, so the pace and order of stops can be adjusted for your group.'],['Can you pick me up and drop me at my hotel or the airport?','Yes. We meet you on arrival in Luwuk and take you back to your hotel or the airport at the end of the day.'],['Can the itinerary change?','Yes. Adjustments depend on flight schedules, weather, road conditions and local circumstances.'],['Is the package price fixed?','The quote is confirmed based on travel dates, group size and the services you choose.']]).map(([q,a])=><details key={q} className="bg-white rounded-xl border border-slate-100 p-5"><summary className="font-semibold text-[#0A3A40] cursor-pointer">{q}</summary><p className="mt-3 text-sm leading-7 text-slate-600">{a}</p></details>)}</div></div>
      </article>
      <aside id="contact" className="lg:sticky lg:top-28 h-fit rounded-3xl bg-white border border-slate-100 shadow-lg p-6">
        <span className="eyebrow">{id ? 'RINGKASAN PAKET' : 'TRIP OVERVIEW'}</span><h2 className="mt-3 text-2xl">{id ? 'Luwuk Stopover' : 'Luwuk Stopover'}</h2><p className="mt-3 text-sm leading-6 text-slate-600">{id ? 'Perjalanan privat 1 hari dengan titik awal dan akhir di Luwuk.' : 'A private one-day journey starting and ending in Luwuk.'}</p>
        <ul className="mt-5 space-y-3 text-sm text-slate-700"><li>◷　1 {id ? 'Hari' : 'Day'}</li><li>⌖　Piala Waterfall · Kilo 5</li><li>♧　{ id ? 'Sightseeing · Berenang · Fotografi' : 'Sightseeing · Swimming · Photography'}</li><li>◇　{ id ? 'Private transport' : 'Private transport'}</li></ul>
        <a href={wa+encodeURIComponent(id?'Halo Banggai Paradise, saya ingin konsultasi paket Luwuk Stopover 1 Day Escape. Mohon informasi ketersediaan dan penawaran untuk tanggal perjalanan saya.':'Hello Banggai Paradise, I would like to enquire about the Luwuk Stopover 1 Day Escape. Please share availability and a quote for my travel dates.')} target="_blank" rel="noreferrer" className="mt-7 w-full inline-flex items-center justify-center rounded-full bg-[#EE7F6D] px-5 py-4 text-sm font-bold text-white hover:bg-[#D9604D]">{id ? 'Konsultasi & Pesan via WhatsApp' : 'Enquire & Book via WhatsApp'}</a>
        <a href={localizedPath('packages/', language)} className="mt-4 block text-center text-sm font-semibold text-[#0A3A40]">{id ? 'Lihat paket perjalanan lainnya' : 'Explore other tour packages'}</a>
      </aside>
    </div></section>
  </div>;
};
