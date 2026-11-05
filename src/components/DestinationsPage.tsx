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

 const labels: Record<string,{id:string;en:string;es:string}> = {Lake:{id:'Danau',en:'Lake',es:'Lago'},Spring:{id:'Mata Air',en:'Spring',es:'Manantial'},Bay:{id:'Teluk',en:'Bay',es:'Bahía'},Beach:{id:'Pantai',en:'Beach',es:'Playa'},Island:{id:'Pulau',en:'Island',es:'Isla'},Waterfall:{id:'Air Terjun',en:'Waterfall',es:'Cascada'}};
 const spanish: Record<string,{name:string;desc:string}> = {
 'paisu-pok':{name:'Lago Paisu Pok',desc:'Un lago de agua dulce excepcionalmente transparente, con tonos azul verdosos y árboles sumergidos que crean un paisaje singular.'},
 'paisu-batango':{name:'Paisu Batango',desc:'Un manantial costero y una laguna donde se encuentran aguas dulces, salobres y marinas.'},
 'kawalu-bay':{name:'Bahía de Kawalu',desc:'Una bahía de aguas turquesas, manglares y colinas verdes, ideal para disfrutar del paisaje litoral.'},
 'poganda':{name:'Playa de Poganda',desc:'Una playa de arena blanca y aguas turquesas, con arrecifes poco profundos y servicios comunitarios sencillos.'},
 'pulau-dua':{name:'Pulo Dua, Balantak',desc:'Colinas de sabana, playas de arena clara y oscura y aguas transparentes con arrecifes de coral.'},
 'salodik':{name:'Cascada de Salodik',desc:'Una cascada escalonada con pozas de tonos azul verdosos, rodeada de vegetación tropical.'},
 'piala':{name:'Cascada de Piala',desc:'Una sucesión de pequeñas cascadas que desembocan en pozas naturales entre el bosque tropical.'},
 'kilo-5':{name:'Playa de Kilo 5',desc:'Una de las playas conocidas de Luwuk, con arena clara, zonas para practicar snorkel y ambiente al atardecer.'},
 'mbuang-mbuang':{name:'Isla de Mbuang-Mbuang',desc:'Un paisaje insular de pequeñas islas y aguas turquesas en el mar de Banggai.'},
 'long-beach':{name:'Long Beach',desc:'Una playa de arena blanca, accesible en barco, con aguas transparentes y zonas para practicar snorkel.'},
 'sombori':{name:'Islas Sombori',desc:'Formaciones kársticas, pequeñas lagunas y paisajes marinos de gran belleza.'}
 };

export const DestinationsPage: React.FC<DestinationsPageProps> = ({ language, onPlanTrip }) => {
 const isEn = language === 'EN';
 const isEs = language === 'ES';
 const names = DESTINATIONS.map(d => isEs ? (spanish[d.id]?.name||d.en) : isEn ? d.en : d.name);
 useEffect(() => {
   const description = isEs ? 'Descubre diez lugares de las islas Banggai, desde el lago Paisu Pok y la bahía de Kawalu hasta Pulo Dua y cascadas tropicales.' : isEn ? 'Explore ten remarkable places across the Banggai Islands, from Paisu Pok Lake and Kawalu Bay to Pulau Dua and hidden waterfalls.' : 'Jelajahi 10 destinasi pilihan di Kepulauan Banggai, mulai dari Danau Paisu Pok dan Kawalu Bay hingga Pulau Dua dan air terjun alami.';
   document.title = isEs ? '10 lugares que descubrir en las islas Banggai | Banggai Paradise' : isEn ? '10 Banggai Islands Destinations to Explore | Banggai Paradise' : '10 Destinasi Wisata Banggai yang Wajib Dijelajahi | Banggai Paradise';
   let meta = document.querySelector('meta[name="description"]');
   if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name','description'); document.head.appendChild(meta); }
   meta.setAttribute('content', description);
   const structured = { '@context':'https://schema.org', '@type':'ItemList', name:isEs ? 'Destinos de las islas Banggai' : isEn ? 'Banggai Islands Destinations' : 'Destinasi Wisata Kepulauan Banggai', description, numberOfItems:DESTINATIONS.length, itemListElement:DESTINATIONS.map((d,i)=>({'@type':'ListItem',position:i+1,item:{'@type':'TouristAttraction',name:isEs?(spanish[d.id]?.name||d.en):isEn?d.en:d.name,description:isEs?(spanish[d.id]?.desc||d.descEn):isEn?d.descEn:d.desc,image:d.image,address:{'@type':'PostalAddress',addressLocality:d.location,addressCountry:'ID'}}})) };
   let script=document.getElementById('destinations-jsonld') as HTMLScriptElement|null;
   if(!script){script=document.createElement('script');script.id='destinations-jsonld';script.type='application/ld+json';document.head.appendChild(script);}
   script.textContent=JSON.stringify(structured);
   return ()=>{document.getElementById('destinations-jsonld')?.remove();};
 },[language]);
 return <section className="section packages destinations-listing">
  <div className="container">
   <div className="pgrid destinations-grid">{DESTINATIONS.map((d,i)=><article id={d.id} className={`pcard destination-card ${i===0?'feat':''}`} key={d.id}>
    <div className="pa"><span className="chip chip-w">{labels[d.category][isEs?'es':isEn?'en':'id']}</span><img src={d.image} alt={isEs?(spanish[d.id]?.name||d.en):isEn?d.en:d.name} loading={i<3?'eager':'lazy'} width="800" height="620"/></div>
    <div className="pb"><div className="destination-location">{d.location}</div><h3>{isEs?(spanish[d.id]?.name||d.en):isEn?d.en:d.name}</h3><p>{isEs?(spanish[d.id]?.desc||d.descEn):isEn?d.descEn:d.desc}</p><div className="prow"><span className="text-sm font-semibold text-[#0A3A40]">{isEs?'Planifica la visita':isEn?'Plan a visit':'Rencanakan Kunjungan'}</span><button type="button" className="round" aria-label={(isEs?'Planificar una visita a ':isEn?'Plan a visit to ':'Rencanakan kunjungan ke ')+(isEs?(spanish[d.id]?.name||d.en):isEn?d.en:d.name)} onClick={()=>onPlanTrip(isEs?(spanish[d.id]?.name||d.en):isEn?d.en:d.name)}><svg className="ic"><use href="#i-arrow"/></svg></button></div></div>
   </article>)}</div>
   <p className="destinations-source">{isEs?'Información e imágenes de destinos: Banggai Wonderland.':isEn?'Destination information and photography referenced from Banggai Wonderland.':'Referensi informasi dan foto destinasi: Banggai Wonderland.'} <a href="https://banggaiwonderland.my.id/id/destinations/" target="_blank" rel="noreferrer">{isEs?'Consultar la guía de destinos':isEn?'Read destination guide':'Baca panduan destinasi'}</a>.</p>
  </div>
 </section>;
};
