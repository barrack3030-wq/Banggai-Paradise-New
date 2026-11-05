import React from 'react';
import { Language } from '../i18n/translations';
import { assetUrl } from '../utils/assetUrl';

interface Props { language: Language }

const wa = 'https://wa.me/6285820830530?text=';

export const LuwukStopoverPage: React.FC<Props> = ({ language }) => {
  const id = language === 'ID';
  type ItinerarySlot = [string, string[]];
  type ItineraryDay = { day: string; title: string; time: ItinerarySlot[] };
  const days: ItineraryDay[] = id ? [
    { day: 'Hari 1', title: 'Tiba dan eksplorasi alam Luwuk', time: [
      ['11.30 — Tiba di Bandara Luwuk', ['Penjemputan di bandara dan meet and greet', 'Persiapan perjalanan bersama tim lokal']],
      ['12.00 — Memulai eksplorasi Luwuk', ['Berangkat dari bandara', 'Makan siang atau mencoba kuliner lokal', 'Menikmati perjalanan dengan lanskap tropis']],
      ['Siang — Air Terjun Piala', ['Mengunjungi kawasan Air Terjun Piala', 'Menjelajahi alam tropis, berenang, dan bersantai', 'Waktu untuk fotografi']],
      ['Sore — Pesisir Luwuk', ['Menuju kawasan pesisir', 'Mengunjungi Kilo 5 atau spot pesisir pilihan', 'Menikmati suasana sore dan fotografi']],
      ['Malam — Check-in dan istirahat', ['Check-in hotel di Luwuk', 'Makan malam dan waktu bebas', 'Bermalam di Luwuk']]
    ]},
    { day: 'Hari 2', title: 'Salodik dan perjalanan pulang', time: [
      ['Pagi — Sarapan dan check-out', ['Sarapan di hotel', 'Check-out dan berangkat menuju Salodik']],
      ['Pagi–siang — Eksplorasi Salodik', ['Menjelajahi kawasan alam Salodik', 'Mengunjungi air terjun atau spot alam yang sesuai kondisi', 'Berenang, bersantai, dan fotografi', 'Makan siang lokal']],
      ['Sore — Kembali ke Luwuk', ['Perjalanan kembali ke Luwuk', 'City sightseeing jika waktu memungkinkan', 'Transfer menuju Bandara Luwuk dan trip selesai']]
    ]}
  ] : [
    { day: 'Day 1', title: 'Arrival and nature exploration in Luwuk', time: [
      ['11:30 — Arrival at Luwuk Airport', ['Airport pick-up and meet and greet', 'Prepare for the journey with the local team']],
      ['12:00 — Start exploring Luwuk', ['Depart from the airport', 'Lunch or local food experience', 'Enjoy the tropical scenery along the way']],
      ['Afternoon — Piala Waterfall', ['Visit the Piala Waterfall area', 'Explore the tropical surroundings, swim and relax', 'Photography time']],
      ['Late afternoon — Luwuk coastline', ['Head towards the coast', 'Visit Kilo 5 or a suitable coastal viewpoint', 'Enjoy the afternoon atmosphere and take photos']],
      ['Evening — Hotel check-in', ['Check in to your hotel in Luwuk', 'Dinner and free time', 'Overnight in Luwuk']]
    ]},
    { day: 'Day 2', title: 'Salodik and departure', time: [
      ['Morning — Breakfast and check-out', ['Breakfast at the hotel', 'Check out and depart for Salodik']],
      ['Morning to afternoon — Explore Salodik', ['Explore the natural area around Salodik', 'Visit a waterfall or nature spot depending on local conditions', 'Swim, relax and take photos', 'Local lunch']],
      ['Afternoon — Return to Luwuk', ['Travel back to Luwuk', 'City sightseeing if time allows', 'Transfer to Luwuk Airport and trip ends']]
    ]}
  ];
  const included = id
    ? ['Penjemputan dan pengantaran bandara', 'Transportasi darat privat', 'Pemandu lokal berbahasa Inggris', 'Akomodasi 1 malam', 'Makanan sesuai itinerary', 'Tiket masuk destinasi', 'Pengalaman kuliner lokal', 'Bantuan fotografi', 'Itinerary fleksibel', 'Video drone (opsional, berdasarkan permintaan)']
    : ['Airport pick-up and drop-off', 'Private land transportation', 'English-speaking local guide', 'One-night accommodation', 'Meals as stated in the itinerary', 'Destination entrance fees', 'Local food experience', 'Photography assistance', 'Flexible itinerary', 'Drone video (optional, upon request)'];
  const excluded = id
    ? ['Tiket pesawat', 'Alat snorkeling', 'Pengeluaran pribadi', 'Makanan di luar itinerary', 'Asuransi perjalanan', 'Layanan video drone jika tidak disepakati dalam penawaran']
    : ['Flight tickets', 'Snorkeling equipment', 'Personal expenses', 'Meals outside the itinerary', 'Travel insurance', 'Drone video service unless agreed in the trip proposal'];
  return <div className="bg-[#FFF8EC] min-h-screen">
    <section className="relative min-h-[440px] sm:min-h-[540px] flex items-end overflow-hidden">
      <img src={assetUrl('assets/images/banggai_white_sand_beach_1793766899675.jpg')} alt={id ? 'Pemandangan pesisir tropis di sekitar Luwuk, Banggai' : 'Tropical coastline scenery around Luwuk, Banggai'} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#052C37] via-[#052C37]/45 to-black/10" />
      <div className="container relative z-10 pb-12 sm:pb-16 text-white">
        <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-white/75 mb-5"><a href={import.meta.env.BASE_URL}>{id ? 'Beranda' : 'Home'}</a> / <a href={import.meta.env.BASE_URL+'packages/'}>{id ? 'Paket Wisata' : 'Tour Packages'}</a> / <span className="text-white">Luwuk Stopover</span></nav>
        <span className="eyebrow light">{id ? 'PRIVATE TRIP · LUWUK · SULAWESI TENGAH' : 'PRIVATE TRIP · LUWUK · CENTRAL SULAWESI'}</span>
        <h1 className="mt-4 max-w-4xl text-4xl sm:text-5xl lg:text-6xl leading-tight text-white">{id ? 'Paket Wisata Luwuk 2 Hari 1 Malam' : 'Luwuk Stopover: 2 Days 1 Night Tour'}</h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/85">{id ? 'Jelajahi Air Terjun Piala, pesisir Luwuk, dan Salodik dalam perjalanan singkat yang nyaman bersama tim lokal.' : 'Discover Piala Waterfall, the Luwuk coastline and Salodik on a relaxed short escape with a local team.'}</p>
        <div className="flex flex-wrap gap-3 mt-7 text-sm"><span className="rounded-full bg-white/15 border border-white/25 px-4 py-2">2 {id ? 'Hari 1 Malam' : 'Days 1 Night'}</span><span className="rounded-full bg-white/15 border border-white/25 px-4 py-2">{id ? 'Private Trip' : 'Private Trip'}</span><span className="rounded-full bg-white/15 border border-white/25 px-4 py-2">Luwuk (LUW)</span></div>
      </div>
    </section>
    <section className="py-12 sm:py-16"><div className="container grid lg:grid-cols-[1fr_320px] gap-10">
      <article className="min-w-0">
        <p className="text-base sm:text-lg leading-8 text-slate-700">{id ? 'Paket wisata Luwuk 2 hari 1 malam dirancang untuk wisatawan yang memiliki waktu terbatas di Banggai. Perjalanan menggabungkan air terjun, panorama tropis, pesisir kota, dan suasana alam Salodik tanpa harus melakukan perjalanan panjang antarpulau. Rute dapat disesuaikan dengan waktu kedatangan dan keberangkatan penerbangan.' : 'The Luwuk 2 days 1 night tour is designed for travellers with limited time in Banggai. This short escape combines a waterfall, tropical scenery, the city coastline and the natural surroundings of Salodik without a long inter-island journey. The route can be adjusted around your flight arrival and departure times.'}</p>
        <div className="mt-10"><span className="eyebrow">{id ? 'RUNDOWN PERJALANAN' : 'YOUR JOURNEY'}</span><h2 className="mt-3 text-3xl">{id ? 'Itinerary Luwuk 2 Hari 1 Malam' : 'Luwuk 2 Days 1 Night Itinerary'}</h2>
          <div className="mt-7 space-y-7">{days.map((day,i)=><section key={day.day} className="rounded-3xl bg-white border border-slate-100 p-5 sm:p-7 shadow-sm">
            <div className="flex items-start gap-4"><span className="shrink-0 rounded-2xl bg-[#0A3A40] text-white px-3 py-2 text-sm font-semibold">{day.day}</span><div><h3 className="text-xl sm:text-2xl text-[#0A3A40]">{day.title}</h3><div className="mt-5 space-y-5">{day.time.map(([time,items])=><div key={time}><h4 className="font-semibold text-slate-800">{time}</h4><ul className="mt-2 space-y-2">{items.map(item=><li key={item} className="flex gap-2 text-sm leading-6 text-slate-600"><span className="text-teal-600">•</span>{item}</li>)}</ul></div>)}</div></div></div>
          </section>)}</div>
        </div>
        <div className="mt-12"><span className="eyebrow">{id ? 'FASILITAS PAKET' : 'PACKAGE DETAILS'}</span><h2 className="mt-3 text-3xl">{id ? 'Apa yang Termasuk dalam Paket?' : 'What Is Included?'}</h2><div className="grid sm:grid-cols-2 gap-3 mt-6">{included.map(item=><div key={item} className="bg-white border border-slate-100 rounded-xl p-4 flex gap-3 text-sm text-slate-700"><span className="text-teal-600 font-bold">✓</span>{item}</div>)}</div>
          <h3 className="text-xl text-[#0A3A40] mt-9">{id ? 'Tidak Termasuk' : 'Not Included'}</h3><div className="grid sm:grid-cols-2 gap-3 mt-4">{excluded.map(item=><div key={item} className="bg-white border border-slate-100 rounded-xl p-4 flex gap-3 text-sm text-slate-600"><span className="text-slate-400 font-bold">×</span>{item}</div>)}</div>
        </div>
        <aside className="mt-10 rounded-2xl bg-[#E6F9FA] border border-[#BCE8EB] p-5 sm:p-6"><h3 className="text-lg text-[#0A3A40]">{id ? 'Catatan perjalanan' : 'Travel notes'}</h3><p className="mt-2 text-sm leading-7 text-slate-700">{id ? 'Itinerary dapat disesuaikan dengan jadwal penerbangan, cuaca, kondisi jalan, dan situasi lokal. Urutan kunjungan atau durasi di setiap lokasi dapat berubah demi kenyamanan dan keselamatan wisatawan. Konfirmasi waktu penerbangan sebelum memesan.' : 'The itinerary may be adjusted to flight schedules, weather, road conditions and local circumstances. Visit order or time at each location may change for guest comfort and safety. Please confirm your flight times before booking.'}</p></aside>
        <div className="mt-12"><h2 className="text-2xl">{id ? 'Pertanyaan Umum Paket Luwuk Stopover' : 'Luwuk Stopover FAQs'}</h2><div className="mt-5 space-y-4">{(id ? [['Apakah paket ini private trip?','Ya. Perjalanan menggunakan konsep private trip, sehingga rute dan ritme perjalanan dapat dibicarakan sesuai kebutuhan grup.'],['Apakah penjemputan dari Bandara Luwuk termasuk?','Penjemputan dan pengantaran bandara termasuk dalam rincian paket. Waktu penjemputan disesuaikan dengan jadwal penerbangan.'],['Apakah itinerary bisa berubah?','Bisa. Penyesuaian dilakukan dengan mempertimbangkan cuaca, kondisi jalan, jadwal penerbangan, dan situasi lokal.'],['Apakah harga paket tercantum?','Harga dikonfirmasi berdasarkan tanggal perjalanan, jumlah peserta, kebutuhan akomodasi, dan rincian layanan.']]:[['Is this a private tour?','Yes. The trip is arranged as a private experience, and the pace can be discussed for your group.'],['Is airport transfer included?','Airport pick-up and drop-off are included in the package details. Timing follows your flight schedule.'],['Can the itinerary change?','Yes. Adjustments depend on weather, road conditions, flight schedules and local circumstances.'],['Is the package price fixed?','The quote is confirmed based on travel dates, group size, accommodation needs and selected services.']]).map(([q,a])=><details key={q} className="bg-white rounded-xl border border-slate-100 p-5"><summary className="font-semibold text-[#0A3A40] cursor-pointer">{q}</summary><p className="mt-3 text-sm leading-7 text-slate-600">{a}</p></details>)}</div></div>
      </article>
      <aside className="lg:sticky lg:top-28 h-fit rounded-3xl bg-white border border-slate-100 shadow-lg p-6">
        <span className="eyebrow">{id ? 'RINGKASAN PAKET' : 'TRIP OVERVIEW'}</span><h2 className="mt-3 text-2xl">{id ? 'Luwuk Stopover' : 'Luwuk Stopover'}</h2><p className="mt-3 text-sm leading-6 text-slate-600">{id ? 'Perjalanan privat 2 hari 1 malam dengan titik awal dan akhir di Luwuk.' : 'A private 2 days 1 night journey starting and ending in Luwuk.'}</p>
        <ul className="mt-5 space-y-3 text-sm text-slate-700"><li>◷　2 {id ? 'Hari 1 Malam' : 'Days 1 Night'}</li><li>⌖　Luwuk City & Salodik</li><li>♧　{ id ? 'Sightseeing · Berenang · Fotografi' : 'Sightseeing · Swimming · Photography'}</li><li>◇　{ id ? 'Pemandu lokal' : 'Local guide'}</li></ul>
        <a href={wa+encodeURIComponent(id?'Halo Banggai Paradise, saya ingin konsultasi Paket Wisata Luwuk 2 Hari 1 Malam. Mohon informasi ketersediaan dan penawaran untuk tanggal perjalanan saya.':'Hello Banggai Paradise, I would like to enquire about the Luwuk 2 Days 1 Night tour. Please share availability and a quote for my travel dates.')} target="_blank" rel="noreferrer" className="mt-7 w-full inline-flex items-center justify-center rounded-full bg-[#EE7F6D] px-5 py-4 text-sm font-bold text-white hover:bg-[#D9604D]">{id ? 'Konsultasi & Pesan via WhatsApp' : 'Enquire & Book via WhatsApp'}</a>
        <a href={import.meta.env.BASE_URL+'packages/'} className="mt-4 block text-center text-sm font-semibold text-[#0A3A40]">{id ? 'Lihat paket perjalanan lainnya' : 'Explore other tour packages'}</a>
      </aside>
    </div></section>
  </div>;
};
