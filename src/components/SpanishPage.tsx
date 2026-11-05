import React from 'react';
import { assetUrl } from '../utils/assetUrl';

const wa = (message: string) => `https://wa.me/6285820830530?text=${encodeURIComponent(message)}`;

const packages = [
  { name: 'Escapada a Luwuk', duration: '1 día', desc: 'Una jornada privada para conocer la cascada de Piala, la costa de Luwuk y algunos rincones de los alrededores.', image: 'assets/images/banggai_white_sand_beach_1793766899675.jpg' },
  { name: 'Luwuk y Salakan', duration: '3 días · 2 noches', desc: 'Un recorrido flexible entre Luwuk y Salakan para descubrir paisajes costeros y empezar a explorar las islas Banggai.', image: 'assets/images/banggai_pulodua_coasthill_1793781298326.jpg' },
  { name: 'Banggai esencial', duration: '4 días · 3 noches', desc: 'Una ruta por la zona de Paisu Pok y la isla de Peleng, con paradas organizadas según los horarios de transporte y las condiciones locales.', image: 'assets/images/banggai_hero_paisupok_1793766897829.jpg' },
  { name: 'Banggai en profundidad', duration: '5 días · 4 noches', desc: 'Más tiempo para conectar Luwuk, Salakan y Peleng, combinando el lago Paisu Pok con otros paisajes costeros.', image: 'assets/images/banggai_snorkeling_coral_1793766898966.jpg' },
  { name: 'La gran ruta de Banggai', duration: '6 días · 5 noches', desc: 'Una propuesta más amplia por Luwuk, Salakan, Peleng, Banggai Laut, Kamumu, Salodik y Pulo Dua.', image: 'assets/images/banggai_sombori_islands_1793766898898.jpg' },
];

const destinations = [
  { name: 'Lago Paisu Pok', text: 'Un lago de aguas transparentes en la isla de Peleng, uno de los paisajes más conocidos del archipiélago.', image: 'assets/images/banggai_hero_paisupok_1793766897829.jpg' },
  { name: 'Playas de Mandel y Oyama', text: 'Costa tropical, arena clara y mar de tonos turquesa. La visita se adapta a la ruta y a las condiciones del día.', image: 'assets/images/banggai_white_sand_beach_1793766899675.jpg' },
  { name: 'Isla de Mbuang-Mbuang', text: 'Un entorno insular de pequeñas islas y aguas de color turquesa en el mar de Banggai.', image: 'assets/images/banggai_sombori_islands_1793766898898.jpg' },
  { name: 'Pulo Dua, Balantak', text: 'Colinas verdes, costa y vistas abiertas al mar en la zona de Balantak.', image: 'assets/images/banggai_pulodua_coasthill_1793781298326.jpg' },
];

export const SpanishPage: React.FC = () => (
  <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#052C37]/95 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
        <a href="/es/" className="shrink-0" aria-label="Banggai Paradise, inicio">
          <img src={assetUrl('assets/img/logo-white.png')} alt="Banggai Paradise" className="h-10 w-auto object-contain sm:h-12" />
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex" aria-label="Navegación principal">
          <a href="#inicio" className="hover:text-cyan-200">Inicio</a><a href="#viajes" className="hover:text-cyan-200">Viajes</a><a href="#destinos" className="hover:text-cyan-200">Destinos</a><a href="#nosotros" className="hover:text-cyan-200">Quiénes somos</a><a href="#contacto" className="hover:text-cyan-200">Contacto</a>
        </nav>
        <div className="flex items-center gap-2 text-xs font-bold">
          <a href="/id/" className="rounded-full border border-white/25 px-3 py-2 hover:bg-white/10">ID</a>
          <a href="/eng/" className="rounded-full border border-white/25 px-3 py-2 hover:bg-white/10">EN</a>
          <span className="rounded-full bg-white px-3 py-2 text-[#052C37]">ES</span>
        </div>
      </div>
    </header>

    <main>
      <section id="inicio" className="relative isolate flex min-h-[680px] items-center overflow-hidden bg-[#052C37] text-white sm:min-h-[740px]">
        <img src={assetUrl('assets/images/banggai_hero_paisupok_1793766897829.jpg')} alt="Aguas transparentes del lago Paisu Pok en las islas Banggai" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#052C37]/95 via-[#052C37]/75 to-[#052C37]/35" />
        <div className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
          <div className="max-w-3xl" data-reveal>
            <p className="mb-5 text-xs font-bold uppercase tracking-[.24em] text-cyan-200">Viajes privados · Guías locales · Sulawesi Central</p>
            <h1 className="font-serif text-5xl leading-[1.08] sm:text-6xl lg:text-7xl">Descubre las islas Banggai, un rincón extraordinario de Indonesia</h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">Lagos de aguas cristalinas, playas tranquilas y pequeños archipiélagos. Diseñamos viajes a medida con apoyo local para que explores Banggai a tu ritmo.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#viajes" className="rounded-full bg-[#F28B62] px-7 py-4 text-sm font-bold text-[#14252A] shadow-lg transition hover:-translate-y-0.5">Ver propuestas de viaje</a>
              <a href={wa('Hola, estoy organizando un viaje a las islas Banggai desde España. Me gustaría recibir información sobre rutas y opciones privadas.')} target="_blank" rel="noreferrer" className="rounded-full border border-white/55 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur hover:bg-white/20">Hablar con el equipo local</a>
            </div>
            <p className="mt-6 text-xs text-white/65">Banggai · Sulawesi Central · Indonesia</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div><p className="text-xs font-bold uppercase tracking-[.22em] text-[#0B7180]">Un viaje diferente</p><h2 className="mt-4 font-serif text-4xl leading-tight text-[#12343D] sm:text-5xl">Banggai se disfruta sin prisas</h2></div>
          <p className="max-w-3xl text-base leading-8 text-slate-600">Llegar hasta estas islas requiere cierta planificación: hay trayectos por carretera y conexiones marítimas, y los horarios pueden condicionar el recorrido. Por eso, cada propuesta se confirma teniendo en cuenta las fechas, el tamaño del grupo y las conexiones disponibles.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <article className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-100"><span className="text-sm font-bold text-[#0B7180]">01</span><h3 className="mt-4 text-xl font-semibold">Conocimiento local</h3><p className="mt-3 leading-7 text-slate-600">Orientación de personas que conocen la zona, sus rutas y la vida cotidiana de las comunidades costeras.</p></article>
          <article className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-100"><span className="text-sm font-bold text-[#0B7180]">02</span><h3 className="mt-4 text-xl font-semibold">Rutas a medida</h3><p className="mt-3 leading-7 text-slate-600">Un plan que tiene en cuenta tus días disponibles, tus intereses y el ritmo que prefieres para viajar.</p></article>
          <article className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-100"><span className="text-sm font-bold text-[#0B7180]">03</span><h3 className="mt-4 text-xl font-semibold">Información clara</h3><p className="mt-3 leading-7 text-slate-600">Antes de confirmar, revisamos contigo el itinerario, los traslados incluidos y los servicios de la propuesta.</p></article>
        </div>
      </section>

      <section id="viajes" className="bg-[#F0F5F4] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.22em] text-[#0B7180]">Ideas para tu viaje</p><h2 className="mt-4 font-serif text-4xl text-[#12343D] sm:text-5xl">Encuentra la ruta que encaja contigo</h2><p className="mt-5 leading-8 text-slate-600">Son puntos de partida, no itinerarios cerrados. La disponibilidad, el orden de las visitas y el presupuesto se concretan según tus fechas y las conexiones locales.</p></div>
          <div className="mt-11 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {packages.map((item) => <article key={item.name} className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200/70">
              <div className="h-56 overflow-hidden"><img src={assetUrl(item.image)} alt={item.name} loading="lazy" className="h-full w-full object-cover transition duration-700 hover:scale-105" /></div>
              <div className="p-6"><p className="text-xs font-bold uppercase tracking-wider text-[#0B7180]">{item.duration}</p><h3 className="mt-2 text-xl font-semibold text-[#12343D]">{item.name}</h3><p className="mt-3 min-h-[84px] leading-7 text-slate-600">{item.desc}</p><a href={wa('Hola, me interesa la propuesta «'+item.name+'» para viajar a Banggai. ¿Podrían enviarme información sobre el itinerario y el presupuesto?')} target="_blank" rel="noreferrer" className="mt-5 inline-flex font-bold text-[#0B7180] hover:text-[#052C37]">Consultar esta ruta <span aria-hidden="true">→</span></a></div>
            </article>)}
          </div>
        </div>
      </section>

      <section id="destinos" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.22em] text-[#0B7180]">Lugares que recordarás</p><h2 className="mt-4 font-serif text-4xl text-[#12343D] sm:text-5xl">Paisajes de las islas Banggai</h2><p className="mt-5 leading-8 text-slate-600">Cada lugar tiene su propio carácter. La selección final depende del tiempo disponible y de las condiciones de transporte y visita.</p></div>
        <div className="mt-11 grid gap-5 sm:grid-cols-2">
          {destinations.map((place) => <article key={place.name} className="group relative min-h-[340px] overflow-hidden rounded-3xl bg-[#052C37]">
            <img src={assetUrl(place.image)} alt={place.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#052C37]/95 via-[#052C37]/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-white"><h3 className="font-serif text-3xl">{place.name}</h3><p className="mt-3 max-w-xl leading-7 text-white/85">{place.text}</p></div>
          </article>)}
        </div>
      </section>

      <section id="nosotros" className="bg-[#052C37] py-20 text-white lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div><p className="text-xs font-bold uppercase tracking-[.22em] text-cyan-200">Banggai Paradise</p><h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">Una perspectiva local para conocer el archipiélago</h2></div>
          <div><p className="text-base leading-8 text-white/80">Banggai Paradise nace del vínculo con esta región de Indonesia. El conocimiento de las islas, los paisajes, las rutas y las comunidades locales ayuda a preparar viajes personales y flexibles, con atención a los detalles prácticos de cada recorrido.</p><p className="mt-5 text-base leading-8 text-white/80">La galería reúne momentos con viajeros a los que se ha acompañado o asistido personalmente mientras se colaboraba con otras agencias de viajes. Las imágenes muestran experiencia de acompañamiento local y no implican que esas reservas se realizaran a través de Banggai Paradise.</p><div className="mt-8 grid grid-cols-3 gap-3"><div className="rounded-2xl bg-white/10 p-4"><strong className="block text-lg">Local</strong><span className="text-xs text-white/65">Conocimiento de la zona</span></div><div className="rounded-2xl bg-white/10 p-4"><strong className="block text-lg">Flexible</strong><span className="text-xs text-white/65">Rutas personalizadas</span></div><div className="rounded-2xl bg-white/10 p-4"><strong className="block text-lg">Cercano</strong><span className="text-xs text-white/65">Trato personal</span></div></div></div>
        </div>
      </section>

      <section id="contacto" className="bg-[#F8FAFC] px-5 py-20 text-center sm:px-8 lg:py-24">
        <p className="text-xs font-bold uppercase tracking-[.22em] text-[#0B7180]">Empieza a preparar tu viaje</p><h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl leading-tight text-[#12343D] sm:text-5xl">¿Te gustaría descubrir Banggai?</h2><p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">Cuéntanos cuándo te gustaría viajar, cuántas personas sois y qué lugares te interesan. El equipo local podrá orientarte sobre las opciones y los siguientes pasos.</p>
        <a href={wa('Hola Banggai Paradise. Estoy preparando un viaje a las islas Banggai desde España. Estas son mis fechas aproximadas y me gustaría recibir asesoramiento.')} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-[#F28B62] px-8 py-4 font-bold text-[#14252A] shadow-lg transition hover:-translate-y-0.5">Consultar por WhatsApp</a>
      </section>
    </main>
    <footer className="bg-[#031F28] px-5 py-9 text-center text-sm text-white/65"><p className="font-semibold text-white">Banggai Paradise · Islas Banggai, Indonesia</p><p className="mt-2">Viajes privados y experiencias locales en Sulawesi Central.</p><p className="mt-4">© {new Date().getFullYear()} Banggai Paradise. Todos los derechos reservados.</p><div className="mt-4 flex justify-center gap-4"><a href="/id/">Bahasa Indonesia</a><a href="/eng/">English</a><a href="/es/" aria-current="page">Español</a></div></footer>
    <a href={wa('Hola Banggai Paradise, me gustaría consultar un viaje a las islas Banggai.')} target="_blank" rel="noreferrer" aria-label="Contactar con Banggai Paradise por WhatsApp" className="fixed bottom-5 right-5 z-40 rounded-full bg-[#1FAF68] px-5 py-4 text-sm font-bold text-white shadow-xl">WhatsApp</a>
  </div>
);
