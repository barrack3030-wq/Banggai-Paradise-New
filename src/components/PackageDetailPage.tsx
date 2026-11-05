import React from 'react';
import { Language } from '../i18n/translations';
import { assetUrl } from '../utils/assetUrl';

type Detail = { slug:string; titleId:string; titleEn:string; durationId:string; durationEn:string; introId:string; introEn:string; placesId:string[]; placesEn:string[]; image:string; routeId:string; routeEn:string; };
const details: Record<string,Detail> = {
'luwuk-one-day': {slug:'luwuk-one-day',titleId:'Luwuk One Day Private Trip',titleEn:'Luwuk One Day Private Trip',durationId:'1 Hari',durationEn:'1 Day',introId:'Jelajahi pesona Luwuk dalam perjalanan privat satu hari. Rute dapat mencakup Air Terjun Piala, kawasan pesisir Kilo 5, dan tempat menarik di sekitar kota sesuai waktu kunjungan.',introEn:'Explore Luwuk on a private one-day escape. The route can include Piala Waterfall, the Kilo 5 coastline and selected city highlights, depending on your available time.',placesId:['Kota Luwuk','Air Terjun Piala','Pesisir Kilo 5'],placesEn:['Luwuk City','Piala Waterfall','Kilo 5 Coast'],image:'assets/images/banggai_white_sand_beach_1793766899675.jpg',routeId:'Penjemputan di Luwuk → Air Terjun Piala → kawasan pesisir Kilo 5 → pengantaran kembali di Luwuk.',routeEn:'Pick-up in Luwuk → Piala Waterfall → Kilo 5 coastal area → drop-off in Luwuk.'},
'luwuk-salakan': {slug:'luwuk-salakan',titleId:'Private Trip Luwuk Salakan 3 Hari 2 Malam',titleEn:'Luwuk Salakan Private Trip',durationId:'3 Hari 2 Malam',durationEn:'3 Days 2 Nights',introId:'Perjalanan privat yang menghubungkan Luwuk dan Salakan. Nikmati perjalanan darat dan laut, suasana pesisir, serta waktu menjelajahi Kepulauan Banggai dengan ritme yang dapat disesuaikan.',introEn:'A private journey connecting Luwuk and Salakan. Experience coastal scenery, land and sea transfers, and time to explore the Banggai Islands at a pace planned around your group.',placesId:['Luwuk','Salakan','Kepulauan Banggai'],placesEn:['Luwuk','Salakan','Banggai Islands'],image:'assets/images/banggai_pulodua_coasthill_1793781298326.jpg',routeId:'Hari perjalanan dimulai di Luwuk, dilanjutkan menuju Salakan dan destinasi pilihan di Kepulauan Banggai. Jadwal kapal, transportasi, dan urutan kunjungan dikonfirmasi berdasarkan tanggal perjalanan.',routeEn:'Begin in Luwuk, continue to Salakan and selected destinations in the Banggai Islands. Boat schedules, transfers and visit order are confirmed for your travel dates.'},
'banggai-four-days': {slug:'banggai-four-days',titleId:'Paket Wisata Banggai 4 Hari 3 Malam',titleEn:'Banggai 4 Days 3 Nights Tour',durationId:'4 Hari 3 Malam',durationEn:'4 Days 3 Nights',introId:'Jelajahi keindahan Kepulauan Banggai dalam perjalanan empat hari. Rencana perjalanan berfokus pada Paisu Pok, Pulau Peleng, dan destinasi pilihan di sekitarnya.',introEn:'Discover the Banggai Islands on a four-day journey focused on Paisu Pok, Peleng Island and selected nearby highlights.',placesId:['Paisu Pok','Pulau Peleng','Luwuk'],placesEn:['Paisu Pok Lake','Peleng Island','Luwuk'],image:'assets/images/banggai_hero_paisupok_1793766897829.jpg',routeId:'Rute perjalanan disusun untuk menghubungkan Luwuk, Pulau Peleng, dan kawasan Paisu Pok. Urutan lokasi menyesuaikan jadwal kapal, cuaca, dan lama waktu kunjungan.',routeEn:'The trip is planned around Luwuk, Peleng Island and the Paisu Pok area. Visit order depends on boat schedules, weather and time available at each location.'},
'banggai-five-days': {slug:'banggai-five-days',titleId:'Paket Wisata Banggai 5 Hari 4 Malam',titleEn:'Banggai 5 Days 4 Nights Tour',durationId:'5 Hari 4 Malam',durationEn:'5 Days 4 Nights',introId:'Private trip lima hari untuk menjelajahi Luwuk, Salakan, dan Pulau Peleng, termasuk kawasan Paisu Pok serta destinasi pesisir pilihan. Cocok untuk perjalanan yang membutuhkan waktu eksplorasi lebih panjang.',introEn:'A five-day private journey connecting Luwuk, Salakan and Peleng Island, including the Paisu Pok area and selected coastal destinations, with more time for exploration.',placesId:['Luwuk','Salakan','Pulau Peleng','Paisu Pok'],placesEn:['Luwuk','Salakan','Peleng Island','Paisu Pok Lake'],image:'assets/images/banggai_snorkeling_coral_1793766898966.jpg',routeId:'Rencana rute menghubungkan Luwuk, Salakan, dan Pulau Peleng. Destinasi dan waktu singgah ditentukan bersama berdasarkan tanggal, transportasi yang tersedia, dan minat peserta.',routeEn:'The suggested route connects Luwuk, Salakan and Peleng Island. Stops and timing are finalized around travel dates, available transport and group interests.'},
'ultimate-banggai': {slug:'ultimate-banggai',titleId:'Paket Wisata Banggai 6 Hari 5 Malam',titleEn:'Ultimate Banggai 6 Days 5 Nights',durationId:'6 Hari 5 Malam',durationEn:'6 Days 5 Nights',introId:'Perjalanan privat enam hari untuk menjelajahi kawasan Luwuk, Salakan, Pulau Peleng, Banggai Laut, Kamumu, Salodik, dan Pulo Dua. Rute akhir disusun berdasarkan kondisi perjalanan dan prioritas destinasi.',introEn:'A six-day private journey exploring Luwuk, Salakan, Peleng Island, Banggai Laut, Kamumu, Salodik and Pulo Dua. The final route is planned around travel conditions and your destination priorities.',placesId:['Luwuk','Salakan','Pulau Peleng','Banggai Laut','Kamumu','Salodik','Pulo Dua'],placesEn:['Luwuk','Salakan','Peleng Island','Banggai Laut','Kamumu','Salodik','Pulo Dua'],image:'assets/images/banggai_sombori_islands_1793766898898.jpg',routeId:'Perjalanan multiwilayah yang memerlukan koordinasi transportasi darat dan laut. Jadwal antarpulau, urutan destinasi, dan waktu kunjungan dikonfirmasi sebelum pemesanan.',routeEn:'A multi-area journey requiring coordination of land and sea transfers. Inter-island schedules, destination order and visit times are confirmed before booking.'},
'custom-banggai-trip': {slug:'custom-banggai-trip',titleId:'Custom Trip Kepulauan Banggai',titleEn:'Custom Banggai Islands Trip',durationId:'Durasi fleksibel',durationEn:'Flexible duration',introId:'Belum menemukan paket yang sesuai? Rancang perjalanan berdasarkan tanggal, jumlah peserta, durasi, dan destinasi yang ingin dikunjungi. Tim lokal dapat membantu menyusun rencana dan penawaran sesuai kebutuhan.',introEn:'Not sure which package fits? Build a trip around your dates, group size, preferred duration and destinations. Our local team can help shape a practical route and tailored quote.',placesId:['Luwuk','Paisu Pok','Pulau Peleng','Banggai Laut','Pulo Dua'],placesEn:['Luwuk','Paisu Pok Lake','Peleng Island','Banggai Laut','Pulo Dua'],image:'assets/images/banggai_white_sand_beach_1793766899675.jpg',routeId:'Rute, durasi, dan pilihan transportasi disusun khusus setelah konsultasi. Sampaikan tanggal perjalanan, jumlah peserta, dan daftar destinasi prioritas.',routeEn:'Route, duration and transport options are planned after consultation. Share your travel dates, group size and priority destinations.'}
};

export const PackageDetailPage: React.FC<{slug:string;language:Language}> = ({slug,language}) => {
 const d=details[slug] || details['custom-banggai-trip']; const id=language==='ID';
 const title=id?d.titleId:d.titleEn, duration=id?d.durationId:d.durationEn;
 const wa='https://wa.me/6285820830530?text='+encodeURIComponent((id?'Halo Banggai Paradise, saya ingin konsultasi paket ':'Hello Banggai Paradise, I would like to enquire about the ')+title+'. Mohon informasi itinerary, ketersediaan, dan penawaran.');
 const label=id?'GAMBARAN PERJALANAN':'TRIP OVERVIEW';
 return <div className="luwuk-stopover package-detail-page bg-[#FFF8EC] min-h-screen">
  <section className="relative min-h-[430px] sm:min-h-[520px] flex items-end overflow-hidden">
   <img src={assetUrl(d.image)} alt={title+' - Banggai Islands'} className="absolute inset-0 w-full h-full object-cover"/>
   <div className="absolute inset-0 bg-gradient-to-t from-[#052C37] via-[#052C37]/55 to-black/10"/>
   <div className="container relative z-10 pb-10 sm:pb-14 text-white">
    <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-white/80 mb-4"><a href={import.meta.env.BASE_URL}>{id?'Beranda':'Home'}</a> / <a href={import.meta.env.BASE_URL+'packages/'}>{id?'Paket Wisata':'Tour Packages'}</a> / <span>{title}</span></nav>
    <span className="eyebrow light">{id?'PRIVATE TRIP · KEPULAUAN BANGGAI':'PRIVATE TRIP · BANGGAI ISLANDS'}</span>
    <h1 className="mt-3 max-w-4xl text-4xl sm:text-5xl lg:text-6xl leading-tight text-white">{title}</h1>
    <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/90">{id?d.introId:d.introEn}</p>
    <div className="flex flex-wrap gap-2 mt-5"><span className="rounded-full bg-white/15 border border-white/25 px-4 py-2 text-sm">{duration}</span><span className="rounded-full bg-white/15 border border-white/25 px-4 py-2 text-sm">Private Trip</span></div>
   </div>
  </section>
  <section className="py-10 sm:py-14"><div className="container grid lg:grid-cols-[1fr_310px] gap-9">
   <article className="min-w-0">
    <span className="eyebrow">{label}</span><h2 className="mt-3 text-3xl">{id?'Rute dan destinasi':'Route and destinations'}</h2>
    <p className="mt-4 text-sm sm:text-base leading-8 text-slate-700">{id?d.routeId:d.routeEn}</p>
    <h2 className="mt-9 text-2xl">{id?'Destinasi dalam rencana perjalanan':'Destinations in the trip plan'}</h2>
    <div className="mt-4 flex flex-wrap gap-2">{(id?d.placesId:d.placesEn).map(p=><span key={p} className="rounded-full bg-white border border-slate-200 px-3 py-2 text-sm text-slate-700">{p}</span>)}</div>
    <section className="mt-9 rounded-2xl bg-white border border-slate-100 p-5 sm:p-6">
     <h2 className="text-xl">{id?'Informasi sebelum memesan':'Before you book'}</h2>
     <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600 list-disc pl-5">
      <li>{id?'Rute final dan urutan kunjungan dikonfirmasi berdasarkan tanggal perjalanan, cuaca, jadwal transportasi, dan kondisi lokal.':'The final route and visit order are confirmed based on travel dates, weather, transport schedules and local conditions.'}</li>
      <li>{id?'Harga disiapkan berdasarkan jumlah peserta, tanggal, kebutuhan akomodasi, dan layanan yang dipilih.':'Quotes are prepared based on group size, dates, accommodation needs and selected services.'}</li>
      <li>{id?'Rincian fasilitas, tiket, makan, dan transportasi akan dicantumkan dalam penawaran sebelum pembayaran.':'Exact inclusions for accommodation, tickets, meals and transport will be listed in your proposal before payment.'}</li>
     </ul>
    </section>
    <div className="mt-9"><h2 className="text-2xl">{id?'Pertanyaan umum':'Frequently asked questions'}</h2><div className="mt-4 space-y-3">
     {(id?[
      ['Apakah ini private trip?','Ya, paket dirancang sebagai perjalanan privat. Detail kebutuhan grup dibahas saat konsultasi.'],
      ['Apakah harga sudah tetap?','Harga dikonfirmasi setelah tanggal, jumlah peserta, akomodasi, dan layanan yang dibutuhkan diketahui.'],
      ['Bisakah rute disesuaikan?','Bisa. Rute akhir dibicarakan bersama dan mempertimbangkan jadwal transportasi serta kondisi lokal.']
     ]:[
      ['Is this a private trip?','Yes, the package is planned as a private journey. Group requirements can be discussed during consultation.'],
      ['Is the price fixed?','A quote is prepared after confirming dates, group size, accommodation and required services.'],
      ['Can the route be customized?','Yes. The final route is agreed together, considering transport schedules and local conditions.']
     ]).map(([q,a])=><details key={q} className="bg-white rounded-xl border border-slate-100 p-4"><summary className="cursor-pointer font-semibold text-[#0A3A40] text-sm">{q}</summary><p className="mt-2 text-sm leading-7 text-slate-600">{a}</p></details>)}
    </div></div>
   </article>
   <aside id="contact" className="h-fit rounded-2xl bg-white border border-slate-100 shadow-sm p-5 lg:sticky lg:top-24">
    <span className="eyebrow">{id?'RINGKASAN PAKET':'TRIP SUMMARY'}</span><h2 className="mt-3 text-2xl">{title}</h2>
    <p className="mt-3 text-sm text-slate-600">{id?'Durasi':'Duration'}: {duration}</p><p className="mt-2 text-sm text-slate-600">{id?'Jenis perjalanan':'Trip type'}: Private Trip</p>
    <a href={wa} target="_blank" rel="noreferrer" className="mt-6 w-full inline-flex justify-center rounded-full bg-[#EE7F6D] px-4 py-3 text-sm font-semibold text-white">{id?'Konsultasi via WhatsApp':'Enquire via WhatsApp'}</a>
    <a href={import.meta.env.BASE_URL+'packages/'} className="mt-4 block text-center text-sm font-semibold text-[#0A3A40]">{id?'Lihat paket lainnya':'Explore other packages'}</a>
   </aside>
  </div></section>
 </div>;
};
