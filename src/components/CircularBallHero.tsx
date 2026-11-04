import React, { useState } from 'react';
import { ArrowRight, Compass, MessageCircle, MapPin, Sparkles, Star } from 'lucide-react';
import { VintageCamperVan } from './VintageCamperVan';
import { SearchFilter } from './SearchFilter';

interface CircularBallHeroProps {
  onExplorePackages: () => void;
  onViewDestinations: () => void;
  onSelectDestinationBall: (destName: string) => void;
  onSearch: (filters: { destination: string; date: string; guests: string }) => void;
}

export const CircularBallHero: React.FC<CircularBallHeroProps> = ({
  onExplorePackages,
  onViewDestinations,
  onSelectDestinationBall,
  onSearch,
}) => {
  const [activeBallHover, setActiveBallHover] = useState<string | null>(null);

  const destinationBalls = [
    {
      id: 'paisu-pok',
      name: 'Danau Paisu Pok',
      subtitle: 'Danau Kaca Terbening',
      image: '/src/assets/images/banggai_hero_paisupok_1793766897829.jpg',
      size: 'w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32',
      pos: 'top-0 left-6 sm:left-12',
      badge: 'Paisu Pok'
    },
    {
      id: 'sombori',
      name: 'Kepulauan Sombori',
      subtitle: 'Karst & Laguna Toska',
      image: '/src/assets/images/banggai_sombori_islands_1793766898898.jpg',
      size: 'w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44',
      pos: 'top-24 sm:top-28 left-24 sm:left-36 md:left-44',
      badge: 'Sombori'
    },
    {
      id: 'jellyfish',
      name: 'Danau Ubur-Ubur',
      subtitle: 'Stingless Jellyfish',
      image: '/src/assets/images/banggai_snorkeling_coral_1793766898966.jpg',
      size: 'w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32',
      pos: 'top-56 sm:top-64 md:top-72 left-6 sm:left-12',
      badge: 'Jellyfish Lake'
    }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative w-full overflow-hidden bg-[#0A3A40] text-white">
      
      {/* ========================================================
          1. TOP PANORAMIC BEACH STRIP (Background)
          ======================================================== */}
      <div className="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden">
        <img
          src="/src/assets/images/banggai_white_sand_beach_1793766899675.jpg"
          alt="Banggai tropical paradise beach and ocean"
          className="w-full h-full object-cover object-top filter brightness-105"
          referrerPolicy="no-referrer"
        />
        {/* Soft overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/30 via-transparent to-transparent" />
      </div>

      {/* ========================================================
          2. THE ICONIC CENTRAL "BALL" (SPHERE) & CURVED MENU
          As seen in the uploaded reference design
          ======================================================== */}
      <div className="relative -mt-44 sm:-mt-52 md:-mt-60 z-30 flex flex-col items-center">
        
        {/* Arched Wing Navigation & Central Ball Container */}
        <div className="relative w-full max-w-5xl px-4 flex flex-col items-center">
          
          {/* Symmetrical Curved Wings (Desktop/Tablet) */}
          <div className="w-full flex items-center justify-between relative px-2 sm:px-8 -mb-10 sm:-mb-14 z-10 pointer-events-none">
            
            {/* Left Curved Banner: "Tour Package" */}
            <div className="pointer-events-auto transform -rotate-6 sm:-rotate-8 transition-transform hover:scale-105">
              <a
                href="#tour-packages"
                onClick={(e) => handleNavClick(e, '#tour-packages')}
                className="inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full bg-[#0369A1]/90 hover:bg-[#0284C7] text-white font-bold text-xs sm:text-base md:text-lg tracking-wide shadow-xl shadow-cyan-950/40 backdrop-blur-md border border-cyan-300/40 cursor-pointer"
              >
                <span>Tour Package</span>
                <ArrowRight className="w-4 h-4 hidden sm:inline" />
              </a>
            </div>

            {/* Right Curved Banner: "Destination" */}
            <div className="pointer-events-auto transform rotate-6 sm:rotate-8 transition-transform hover:scale-105">
              <a
                href="#destinations"
                onClick={(e) => handleNavClick(e, '#destinations')}
                className="inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full bg-[#0369A1]/90 hover:bg-[#0284C7] text-white font-bold text-xs sm:text-base md:text-lg tracking-wide shadow-xl shadow-cyan-950/40 backdrop-blur-md border border-cyan-300/40 cursor-pointer"
              >
                <span>Destination</span>
                <Compass className="w-4 h-4 hidden sm:inline" />
              </a>
            </div>

          </div>

          {/* THE BIG SPHERICAL "BALL" EMBLEM */}
          <div className="relative z-20 group">
            {/* Outer subtle 3D glowing ring */}
            <div className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full p-2 bg-gradient-to-b from-cyan-300/50 via-teal-400/20 to-transparent shadow-2xl shadow-cyan-950/70">
              
              {/* Inner Spherical Ball */}
              <div className="w-full h-full rounded-full bg-gradient-to-b from-[#0284C7] via-[#0096AF] to-[#0A3A40] border-4 border-white/90 shadow-[inset_0_8px_16px_rgba(255,255,255,0.4),0_12px_28px_rgba(0,0,0,0.4)] flex flex-col items-center justify-center text-center p-4 transition-transform duration-300 group-hover:scale-102">
                
                {/* Palm Tree SVG Icon */}
                <svg width="44" height="44" viewBox="0 0 48 48" fill="none" className="text-white drop-shadow-md mb-1 sm:w-12 sm:h-12">
                  <path d="M24 44V18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  <path d="M24 18C18 13 10 13 6 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M24 16C16 9 9 9 4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M24 18C30 13 38 13 42 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M24 16C32 9 39 9 44 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M24 16C24 8 24 4 24 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="21" cy="19" r="1.5" fill="currentColor" />
                  <circle cx="27" cy="19" r="1.5" fill="currentColor" />
                </svg>

                {/* Script Brand Name */}
                <h2 className="font-serif italic font-extrabold text-xl sm:text-2xl md:text-3xl tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] leading-tight">
                  Banggai Paradise
                </h2>
                
                {/* Subtitle */}
                <p className="font-sans text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-cyan-200 drop-shadow-sm mt-0.5">
                  Tour &amp; Travel
                </p>

                {/* Rating Stars indicator inside ball */}
                <div className="flex items-center gap-1 mt-1 text-amber-300">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-amber-300" />
                  ))}
                </div>

              </div>

            </div>

            {/* Bottom Arched Sub-links ("About Us" & "Travel Blog") following the ball curve */}
            <div className="flex items-center justify-center gap-3 sm:gap-6 -mt-3 relative z-30">
              <a
                href="#about-us"
                onClick={(e) => handleNavClick(e, '#about-us')}
                className="px-4 py-1.5 rounded-full bg-[#0A3A40]/90 hover:bg-[#0284C7] text-cyan-100 hover:text-white text-xs sm:text-sm font-semibold tracking-wider shadow-md backdrop-blur-sm border border-cyan-400/30 transition-colors"
              >
                About Us
              </a>
              <a
                href="#travel-blog"
                onClick={(e) => handleNavClick(e, '#travel-blog')}
                className="px-4 py-1.5 rounded-full bg-[#0A3A40]/90 hover:bg-[#0284C7] text-cyan-100 hover:text-white text-xs sm:text-sm font-semibold tracking-wider shadow-md backdrop-blur-sm border border-cyan-400/30 transition-colors"
              >
                Travel Blog
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* ========================================================
          3. AQUA WAVE MID-SECTION WITH "BEST CHOICE TRAVEL PARTNER!"
          ======================================================== */}
      <div className="relative pt-6 pb-20 mt-4 bg-gradient-to-b from-[#22D3EE] via-[#06B6D4] to-[#0284C7] text-[#0A3A40] rounded-t-[40px] sm:rounded-t-[70px] md:rounded-t-[100px] border-t-4 border-cyan-200/50 shadow-2xl">
        
        {/* BIG HERO TITLE (Styled exactly like the reference image) */}
        <div className="text-center px-4 max-w-4xl mx-auto my-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-wider uppercase font-display drop-shadow-[0_4px_12px_rgba(4,30,38,0.45)] [text-shadow:_0_3px_0_#0369A1,_0_6px_0_#075985,_0_8px_16px_rgba(0,0,0,0.4)]">
            BEST CHOICE TRAVEL PARTNER!
          </h1>
          <p className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-cyan-950/80 max-w-xl mx-auto">
            Jelajahi keajaiban danau kristal, gugusan pulau karst Sombori, dan pantai tropis Banggai bersama pemandu lokal berlisensi.
          </p>
        </div>

        {/* ========================================================
            4. THE CONNECTED BALLS (LEFT) & CAMPER VAN (RIGHT)
            ======================================================== */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 6 cols: 3 Connected Circular Balls (Foto-Foto Berbentuk Bola Terhubung) */}
            <div className="lg:col-span-6 relative h-[380px] sm:h-[420px] md:h-[460px] w-full max-w-md mx-auto lg:mx-0">
              
              {/* SVG Connecting Branches between the 3 Balls */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 450 450" fill="none">
                {/* Branch line from Ball 1 (top left) to Ball 2 (center) */}
                <line
                  x1="110"
                  y1="70"
                  x2="240"
                  y2="190"
                  stroke="#F26A4F"
                  strokeWidth="8"
                  strokeLinecap="round"
                  className="filter drop-shadow-md"
                />
                {/* Branch line from Ball 2 (center) to Ball 3 (bottom left) */}
                <line
                  x1="240"
                  y1="190"
                  x2="110"
                  y2="330"
                  stroke="#F26A4F"
                  strokeWidth="8"
                  strokeLinecap="round"
                  className="filter drop-shadow-md"
                />
                {/* Inner white dashed line for travel vibe */}
                <line
                  x1="110"
                  y1="70"
                  x2="240"
                  y2="190"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <line
                  x1="240"
                  y1="190"
                  x2="110"
                  y2="330"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
              </svg>

              {/* The 3 Circular Photo Balls */}
              {destinationBalls.map((ball) => (
                <div
                  key={ball.id}
                  onClick={() => onSelectDestinationBall(ball.name)}
                  onMouseEnter={() => setActiveBallHover(ball.id)}
                  onMouseLeave={() => setActiveBallHover(null)}
                  className={`absolute ${ball.pos} z-20 cursor-pointer group`}
                >
                  {/* Outer Coral Ring (like in user design) */}
                  <div
                    className={`${ball.size} rounded-full p-1.5 sm:p-2 bg-gradient-to-tr from-[#EA580C] via-[#F26A4F] to-[#FB923C] shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:ring-4 group-hover:ring-white`}
                  >
                    {/* Inner image container */}
                    <div className="w-full h-full rounded-full overflow-hidden border-2 border-white relative bg-sky-100">
                      <img
                        src={ball.image}
                        alt={ball.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                      {/* Pill Badge */}
                      <div className="absolute inset-x-0 bottom-1 sm:bottom-2 text-center px-1">
                        <span className="inline-block px-1.5 py-0.5 rounded-full bg-[#0A3A40]/90 text-white text-[9px] sm:text-[11px] font-bold shadow-sm truncate max-w-[90%]">
                          {ball.badge}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Tooltip on hover */}
                  <div className={`absolute left-full top-1/2 -translate-y-1/2 ml-3 bg-white text-slate-800 text-xs font-bold py-1.5 px-3 rounded-xl shadow-xl border border-slate-200 whitespace-nowrap pointer-events-none transition-all duration-200 ${
                    activeBallHover === ball.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                  }`}>
                    <p className="text-[#0284C7]">{ball.name}</p>
                    <p className="text-[10px] text-slate-500 font-normal">{ball.subtitle}</p>
                  </div>
                </div>
              ))}

            </div>

            {/* Right 6 cols: Vintage Camper Van & "TRUSTED AND PROFESSIONAL" */}
            <div className="lg:col-span-6 flex flex-col items-center lg:items-end text-center lg:text-right space-y-4">
              
              {/* Scalable Vintage Orange Camper Van */}
              <div className="transform hover:scale-105 transition-transform duration-300 cursor-pointer" onClick={onExplorePackages}>
                <VintageCamperVan width={420} height={230} />
              </div>

              {/* Bold Motto from Image: "TRUSTED AND PROFESSIONAL" */}
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-widest uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  TRUSTED AND PROFESSIONAL
                </h3>
                <p className="text-xs sm:text-sm text-cyan-950 font-medium max-w-sm ml-auto">
                  Melayani ribuan wisatawan domestik &amp; internasional dengan armada darat nyaman, speedboat aman, dan drone dokumentasi 4K gratis.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3 pt-2">
                <button
                  onClick={onExplorePackages}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#F26A4F] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] shadow-lg shadow-orange-950/20 transition-all cursor-pointer transform hover:-translate-y-0.5"
                >
                  <span>Explore Tour Packages</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="https://wa.me/628124567890?text=Halo%20Banggai%20Paradise,%20saya%20tertarik%20dengan%20trip%20ke%20Banggai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold text-[#0A3A40] bg-white hover:bg-cyan-50 shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Guide</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* ========================================================
          5. THE BOTTOM ARQUE / TRANSITION WITH SEARCH FILTER
          As seen in the bottom half of the reference image
          ======================================================== */}
      <div className="relative bg-[#0284C7] pt-4 pb-14 -mt-2">
        {/* Curving transition wave */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
              <span>Cari &amp; Sesuaikan Tanggal Trip Anda</span>
            </span>
          </div>

          {/* Quick Search Bar */}
          <SearchFilter onSearch={onSearch} />
        </div>
      </div>

    </section>
  );
};
