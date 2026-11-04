import React, { useEffect } from 'react';
import { Language } from '../i18n/translations';

interface DestinationsPageProps { language: Language; onPlanTrip: (name: string) => void; }

const DESTINATIONS = [
 { id:'paisu-pok', category:'Lake', image:'https://banggaiwonderland.my.id/images/DSCF7073-5.webp', location:'Luk Panenteng, Bulagi Utara, Banggai Kepulauan', name:'Danau Paisu Pok', en:'Lake Paisu Pok', desc:'Danau air tawar dengan kejernihan luar biasa, warna biru kehijauan, dan pepohonan terendam yang menciptakan panorama khas.', descEn:'An exceptionally clear freshwater lake with blue-green water and submerged trees creating an iconic landscape.' },
 { id:'paisu-batango', category:'Spring', image:'https://banggaiwonderland.my.id/images/paisu.jpg', location:'Luk Panenteng, Banggai Kepulauan', name:'Paisu Batango', en:'Paisu Batango', desc:'Mata air pantai dan laguna pasang surut tempat air tawar, payau, dan laut bertemu dalam lanskap alami.', descEn:'A coastal spring and tidal lagoon where fresh, brackish and seawater meet in a beautiful natural setting.' },
 { id:'kawalu-bay', category:'Bay', image:'https://banggaiwonderland.my.id/images/kawalu.webp', location:'Banggai Kepulauan, Sulawesi Tengah', name:'Kawalu Bay', en:'Kawalu Bay', desc:'Teluk dengan air toska, hutan mangrove, dan perbukitan hijau. Cocok untuk menikmati panorama pesisir dan aktivitas laut.', descEn:'A calm bay framed by turquoise water, mangroves and green hills, ideal for coastal scenery and ocean activities.' },
 { id:'poganda', category:'Beach', image:'https://banggaiwonderland.my.id/images/Poganda-Beach-Banggai-IndonesiaJuara-Trip.webp', location:'Luk Panenteng, Bulagi Utara, Banggai Kepulauan', name:'Pantai Poganda', en:'Poganda Beach', desc:'Pantai pasir putih dengan air pirus yang tenang, terumbu karang dangkal, dan fasilitas sederhana yang dikelola desa.', descEn:'A white-sand beach with calm turquoise water, shallow reefs and simple community-managed facilities.' },
 { id:'pulau-dua', category:'Island', image:'https://banggaiwonderland.my.id/images/images%20(2).jpg', location:'Balantak Utara, Kabupaten Banggai', name:'Pulau Dua Balantak', en:'Pulau Dua Balantak', desc:'Perpaduan perbukitan savana, pantai pasir putih dan hitam, serta laut jernih dengan terumbu karang.', descEn:'A striking mix of rolling savannah hills, white and dark-sand beaches, and clear water with coral reefs.' },
 { id:'salodik', category:'Waterfall', image:'https://banggaiwonderland.my.id/images/images%20(3).jpg', location:'Salodik, Luwuk Utara, Kabupaten Banggai', name:'Air Terjun Salodik', en:'Salodik Waterfall', desc:'Air terjun bertingkat dengan air biru kehijauan, akses yang relatif mudah, dan suasana hutan yang menyegarkan.', descEn:'A multi-tiered waterfall with blue-green pools, relatively easy access and refreshing forest surroundings.' },
 { id:'piala', category:'Waterfall', image:'https://banggaiwonderland.my.id/images/piala.jpg', location:'Hanga-Hanga, Luwuk, Kabupaten Banggai', name:'Air Terjun Piala', en:'Piala Waterfall', desc:'Kaskade bertingkat yang mengalir ke kolam alami berwarna hijau kebiruan, dikelilingi suasana hutan tropis.', descEn:'A cascading waterfall flowing into clear blue-green natural pools surrounded by tropical forest.' },
 { id:'kilo-5', category:'Beach', image:'https://banggaiwonderland.my.id/images/Pantai-Kilo-5-1.webp', location:'Luwuk, Kabupaten Banggai', name:'Pantai Kilo 5', en:'Kilo 5 Beach', desc:'Pantai ikonik Luwuk dengan pasir putih, air relatif tenang, area snorkeling, kuliner, dan suasana matahari terbenam.', descEn:'Luwuk’s iconic beach, known for white sand, calm water, snorkeling spots, local food and sunset views.' },
 { id:'mbuang-mbuang', category:'Island', image:'https://banggaiwonderland.my.id/images/mbuang%20mbuang.jpg', location:'Bokan Kepulauan, Banggai Laut', name:'Pulau Mbuang-Mbuang', en:'Mbuang-Mbuang Island', desc:'Pulau dengan Danau Paisu Batongan, ubur-ubur tak menyengat, taman kima, dan pantai berpasir putih.', descEn:'An island home to Paisu Batongan Lake, stingless jellyfish, giant-clam gardens and white-sand beaches.' },
 { id:'long-beach', category:'Beach', image:'https://banggaiwonderland.my.id/images/long%20b.jpg', location:'Pulau Banggai, Banggai Laut', name:'Long Beach', en:'Long Beach', desc:'Pantai pasir putih yang hanya dapat diakses dengan perahu, dengan air jernih dan area snorkeling dari tepi pantai.', descEn:'A white-sand beach reached by boat, with clear water and snorkeling opportunities right off the shore.' }
];

export const DestinationsPage: React.FC<DestinationsPageProps> = ({ language, onPlanTrip }) => {
 const isEn = language === 'EN';
 const names = DESTINATIONS.map(d => isEn ? d.en : d.name);
 useEffect(() => {
   const description = isEn ? 'Explore ten remarkable places across the Banggai Islands, from Paisu Pok Lake and Kawalu Bay to Pulau Dua and hidden waterfalls.' : 'Jelajahi 10 destinasi pilihan di Kepulauan Banggai, mulai dari Danau Paisu Pok dan Kawalu Bay hingga Pulau Dua dan air terjun alami.';
   document.title = isEn ? '10 Banggai Islands Destinations to Explore | Banggai Paradise' : '10 Destinasi Wisata Banggai yang Wajib Dijelajahi | Banggai Paradise';
   let meta = document.querySelector('meta[name="description"]');
   if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name','description'); document.head.appendChild(meta); }
   meta.setAttribute('content', description);
   const structured = { '@context':'https://schema.org', '@type':'ItemList', name:isEn ? 'Banggai Islands Destinations' : 'Destinasi Wisata Kepulauan Banggai', description, numberOfItems:DESTINATIONS.length, itemListElement:DESTINATIONS.map((d,i)=>({'@type':'ListItem',position:i+1,item:{'@type':'TouristAttraction',name:isEn?d.en:d.name,description:isEn?d.descEn:d.desc,image:d.image,address:{'@type':'PostalAddress',addressLocality:d.location,addressCountry:'ID'}}})) };
   let script=document.getElementById('destinations-jsonld') as HTMLScriptElement|null;
   if(!script){script=document.createElement('script');script.id='destinations-jsonld';script.type='application/ld+json';document.head.appendChild(script);}
   script.textContent=JSON.stringify(structured);
   return ()=>{document.getElementById('destinations-jsonld')?.remove();};
 },[language]);
 const labels: Record<string,{id:string;en:string}> = {Lake:{id:'Danau',en:'Lake'},Spring:{id:'Mata Air',en:'Spring'},Bay:{id:'Teluk',en:'Bay'},Beach:{id:'Pantai',en:'Beach'},Island:{id:'Pulau',en:'Island'},Waterfall:{id:'Air Terjun',en:'Waterfall'}};
 return <section className="section packages destinations-listing">
  <div className="container">
   <div className="pgrid destinations-grid">{DESTINATIONS.map((d,i)=><article className={`pcard destination-card ${i===0?'feat':''}`} key={d.id}>
    <div className="pa"><span className="chip chip-w">{labels[d.category][isEn?'en':'id']}</span><img src={d.image} alt={isEn?d.en:d.name} loading={i<3?'eager':'lazy'} width="800" height="620"/></div>
    <div className="pb"><div className="destination-location">{d.location}</div><h3>{isEn?d.en:d.name}</h3><p>{isEn?d.descEn:d.desc}</p><div className="prow"><span className="text-sm font-semibold text-[#0A3A40]">{isEn?'Plan a visit':'Rencanakan Kunjungan'}</span><button type="button" className="round" aria-label={(isEn?'Plan a visit to ':'Rencanakan kunjungan ke ')+(isEn?d.en:d.name)} onClick={()=>onPlanTrip(isEn?d.en:d.name)}><svg className="ic"><use href="#i-arrow"/></svg></button></div></div>
   </article>)}</div>
   <p className="destinations-source">{isEn?'Destination information and photography referenced from Banggai Wonderland.':'Referensi informasi dan foto destinasi: Banggai Wonderland.'} <a href="https://banggaiwonderland.my.id/id/destinations/" target="_blank" rel="noreferrer">Baca panduan destinasi</a>.</p>
  </div>
 </section>;
};
