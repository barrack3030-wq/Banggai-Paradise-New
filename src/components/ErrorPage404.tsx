import React from 'react';
import { Compass, Home, MapPin, ArrowRight, MessageCircle } from 'lucide-react';
import { BanggaiLogo } from './BanggaiLogo';
import { Language } from '../i18n/translations';

interface ErrorPage404Props {
  onBackToHome: () => void;
  onExplorePackages: () => void;
  language?: Language;
}

export const ErrorPage404: React.FC<ErrorPage404Props> = ({
  onBackToHome,
  onExplorePackages,
  language = 'ID',
}) => {
  const isEn = language === 'EN';

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#041E26] via-[#062D35] to-[#0A3A40] text-white flex flex-col justify-between p-6 select-none relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#0284C7]/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <header className="max-w-7xl mx-auto w-full flex items-center justify-between py-4 relative z-10">
        <a href="#home" onClick={onBackToHome} className="cursor-pointer">
          <BanggaiLogo variant="light" size="md" />
        </a>
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white/90 bg-white/10 hover:bg-white/20 border border-white/20 transition-colors cursor-pointer"
        >
          <Home className="w-3.5 h-3.5" />
          <span>{isEn ? 'Back to Home' : 'Kembali ke Beranda'}</span>
        </button>
      </header>

      {/* Main 404 Content */}
      <main className="max-w-2xl mx-auto my-auto text-center space-y-6 relative z-10 py-12">
        
        {/* Big 404 Badge with Compass */}
        <div className="relative inline-block">
          <span className="text-8xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-cyan-200 via-teal-300 to-[#0A3A40] tracking-tighter opacity-80 font-display">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#062D35]/90 border-2 border-cyan-400 text-cyan-300 flex items-center justify-center shadow-2xl backdrop-blur-md">
              <Compass className="w-10 h-10 sm:w-12 sm:h-12 text-[#F26A4F] animate-spin-slow" />
            </div>
          </div>
        </div>

        {/* Text Details */}
        <div className="space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 text-cyan-200 border border-white/15">
            {isEn ? 'Island Not Found' : 'Pulau Tidak Ditemukan'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {isEn ? 'Oops! You Have Sailed Too Far' : 'Ups! Anda Berlayar Terlalu Jauh'}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-lg mx-auto">
            {isEn
              ? 'The page or secret cove you were looking for does not exist or has moved. Do not worry, the Banggai Archipelago is still waiting for you!'
              : 'Halaman atau rute yang Anda cari tidak dapat ditemukan atau mungkin telah berpindah lokasi. Jangan khawatir, kepulauan Banggai tetap menanti Anda!'}
          </p>
        </div>

        {/* Quick Recommended Destinations */}
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 max-w-md mx-auto text-left space-y-2">
          <p className="text-[11px] font-bold uppercase tracking-wider text-cyan-300">
            {isEn ? 'Popular Destinations You Might Be Looking For:' : 'Destinasi Populer yang Mungkin Anda Cari:'}
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <button
              onClick={() => {
                onBackToHome();
                setTimeout(() => {
                  const el = document.getElementById('destinations');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-1.5 text-cyan-100 transition-colors text-left"
            >
              <MapPin className="w-3.5 h-3.5 text-[#F26A4F] shrink-0" />
              <span className="truncate">Danau Paisu Pok</span>
            </button>
            <button
              onClick={() => {
                onBackToHome();
                setTimeout(() => {
                  const el = document.getElementById('destinations');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-1.5 text-cyan-100 transition-colors text-left"
            >
              <MapPin className="w-3.5 h-3.5 text-[#F26A4F] shrink-0" />
              <span className="truncate">Kepulauan Sombori</span>
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#F26A4F] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] shadow-lg shadow-orange-950/40 transition-all cursor-pointer transform hover:-translate-y-0.5"
          >
            <Home className="w-4 h-4" />
            <span>{isEn ? 'Back to Home' : 'Kembali ke Beranda'}</span>
          </button>

          <button
            onClick={onExplorePackages}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#0A3A40] hover:bg-[#0284C7]/40 border border-cyan-400/30 transition-all cursor-pointer"
          >
            <span>{isEn ? 'Explore Tour Packages' : 'Lihat Paket Wisata'}</span>
            <ArrowRight className="w-4 h-4 text-cyan-300" />
          </button>

          <a
            href="https://wa.me/628124567890?text=Halo%20Banggai%20Paradise,%20saya%20butuh%20bantuan%20navigasi%20website"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-medium text-cyan-200 hover:text-white transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Chat WhatsApp</span>
          </a>
        </div>

      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto w-full text-center py-4 text-xs text-slate-400 relative z-10 border-t border-white/10">
        © 2026 Banggai Paradise Tour &amp; Travel. Official Tour Operator Kepulauan Banggai, Sulawesi Tengah.
      </footer>

    </div>
  );
};
