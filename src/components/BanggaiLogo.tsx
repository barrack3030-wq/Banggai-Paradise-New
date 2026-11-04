import React from 'react';

interface BanggaiLogoProps {
  variant?: 'light' | 'dark' | 'emblem';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BanggaiLogo: React.FC<BanggaiLogoProps> = ({
  variant = 'dark',
  className = '',
  size = 'md'
}) => {
  const isLight = variant === 'light';

  // Responsive dimensions
  const scale = size === 'sm' ? 0.8 : size === 'lg' ? 1.25 : 1;

  if (variant === 'emblem') {
    return (
      <div className={`relative inline-flex flex-col items-center justify-center p-3 rounded-full bg-gradient-to-br from-[#0284C7] to-[#0A3A40] text-white shadow-xl shadow-cyan-900/20 text-center ${className}`}>
        {/* Palm tree svg */}
        <svg width={36 * scale} height={36 * scale} viewBox="0 0 48 48" fill="none" className="mb-0.5 text-white">
          <path d="M24 44V20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M24 20C20 16 12 16 8 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M24 18C18 12 11 12 6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M24 20C28 16 36 16 40 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M24 18C30 12 37 12 42 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M24 18C24 10 24 6 24 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M24 18C20 12 21 8 20 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          <path d="M24 18C28 12 27 8 28 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
        <span className="font-serif italic font-bold tracking-tight text-white leading-tight" style={{ fontSize: `${13 * scale}px` }}>
          Banggai Paradise
        </span>
        <span className="text-[9px] font-sans tracking-widest uppercase text-cyan-200 font-medium">
          Tour &amp; Travel
        </span>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2.5 group cursor-pointer ${className}`}>
      {/* Brand Icon */}
      <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-transform group-hover:scale-105 ${
        isLight
          ? 'bg-white/15 text-white backdrop-blur-sm border border-white/20'
          : 'bg-[#0284C7] text-white shadow-sm'
      }`}>
        <svg width="22" height="22" viewBox="0 0 48 48" fill="none">
          <path d="M24 42V18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M24 18C19 14 12 14 8 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M24 16C17 10 10 10 5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M24 18C29 14 36 14 40 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M24 16C31 10 38 10 43 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M24 16C24 9 24 5 24 3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="21" cy="19" r="1.5" fill="currentColor" />
          <circle cx="27" cy="19" r="1.5" fill="currentColor" />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col text-left">
        <span className={`font-bold tracking-tight leading-none text-[1.125rem] transition-colors ${
          isLight ? 'text-white' : 'text-[#0A3A40]'
        }`}>
          Banggai Paradise
        </span>
        <span className={`text-[10px] uppercase font-semibold tracking-widest mt-0.5 transition-colors ${
          isLight ? 'text-cyan-200' : 'text-[#0284C7]'
        }`}>
          Tour &amp; Travel
        </span>
      </div>
    </div>
  );
};
