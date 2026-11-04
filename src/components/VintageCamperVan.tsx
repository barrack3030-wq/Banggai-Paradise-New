import React from 'react';

interface VintageCamperVanProps {
  className?: string;
  width?: number;
  height?: number;
}

export const VintageCamperVan: React.FC<VintageCamperVanProps> = ({
  className = '',
  width = 380,
  height = 240,
}) => {
  return (
    <div className={`relative inline-block filter drop-shadow-2xl select-none ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 500 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <defs>
          {/* Gradients for vintage orange metal paint */}
          <linearGradient id="orangeBody" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FB923C" />
            <stop offset="35%" stopColor="#EA580C" />
            <stop offset="85%" stopColor="#C2410C" />
            <stop offset="100%" stopColor="#9A3412" />
          </linearGradient>

          {/* Cream white top half */}
          <linearGradient id="creamRoof" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FEF3C7" />
            <stop offset="100%" stopColor="#FDE68A" />
          </linearGradient>

          {/* Chrome bumper and trim */}
          <linearGradient id="chrome" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F8FAFC" />
            <stop offset="50%" stopColor="#CBD5E1" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>

          {/* Window tint */}
          <linearGradient id="glassTint" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#0369A1" stopOpacity="0.8" />
          </linearGradient>

          {/* Wheel rubber */}
          <radialGradient id="tireRubber" cx="50%" cy="50%" r="50%">
            <stop offset="60%" stopColor="#1E293B" />
            <stop offset="85%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#020617" />
          </radialGradient>

          <filter id="shadowUnderVan" x="-10%" y="0%" width="120%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="8" />
            <feOffset dx="0" dy="12" />
            <feComponentTransfer><feFuncA type="linear" slope="0.45" /></feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ambient Ground Shadow */}
        <ellipse cx="250" cy="275" rx="210" ry="20" fill="#041E26" opacity="0.4" filter="blur(8px)" />

        {/* --- MAIN BUS CABIN --- */}
        {/* Lower Body (Vintage Orange) */}
        <path
          d="M60 180 C60 170 65 155 75 155 L420 155 C435 155 445 165 445 180 L445 235 C445 245 435 250 425 250 L370 250 C370 215 320 215 320 250 L190 250 C190 215 140 215 140 250 L75 250 C65 250 60 242 60 230 Z"
          fill="url(#orangeBody)"
          stroke="#7C2D12"
          strokeWidth="3"
        />

        {/* Chrome beltline trim separating cream and orange */}
        <path d="M68 155 L435 155" stroke="url(#chrome)" strokeWidth="5" strokeLinecap="round" />

        {/* Upper Body & Cabin (Vintage Cream White) */}
        <path
          d="M80 155 C76 130 90 95 125 90 L395 90 C420 90 432 110 435 155 Z"
          fill="url(#creamRoof)"
          stroke="#D97706"
          strokeWidth="2.5"
        />

        {/* Curved Roof Pop-top / Cap */}
        <path
          d="M110 90 C125 78 180 75 260 75 C340 75 385 78 405 90 Z"
          fill="#FFFBEB"
          stroke="#D97706"
          strokeWidth="2"
        />

        {/* Luggage Roof Rack (Vintage Camper Style) */}
        <path d="M140 73 L370 73" stroke="url(#chrome)" strokeWidth="4" strokeLinecap="round" />
        <path d="M160 73 L160 62 L350 62 L350 73" stroke="url(#chrome)" strokeWidth="3" fill="none" />
        <path d="M195 62 L195 73 M230 62 L230 73 M265 62 L265 73 M300 62 L300 73 M335 62 L335 73" stroke="url(#chrome)" strokeWidth="2" />
        {/* Surfboard on top */}
        <path
          d="M170 57 C220 52 300 52 340 57 C335 63 290 64 170 63 Z"
          fill="#38BDF8"
          stroke="#0284C7"
          strokeWidth="1.5"
        />

        {/* --- WINDOWS --- */}
        {/* Front curved windshield */}
        <path
          d="M90 150 C86 132 96 102 125 98 L160 98 L160 150 Z"
          fill="url(#glassTint)"
          stroke="#64748B"
          strokeWidth="2.5"
        />
        {/* Driver side window */}
        <path
          d="M170 98 L240 98 L240 150 L170 150 Z"
          fill="url(#glassTint)"
          stroke="#64748B"
          strokeWidth="2"
        />
        {/* Center passenger window */}
        <path
          d="M250 98 L330 98 L330 150 L250 150 Z"
          fill="url(#glassTint)"
          stroke="#64748B"
          strokeWidth="2"
        />
        {/* Rear side window */}
        <path
          d="M340 98 L415 98 C422 110 425 130 425 150 L340 150 Z"
          fill="url(#glassTint)"
          stroke="#64748B"
          strokeWidth="2"
        />

        {/* Window Reflection highlights */}
        <path d="M100 142 L120 106 M185 142 L205 106 M265 142 L285 106 M355 142 L375 106" stroke="white" strokeWidth="2.5" opacity="0.6" strokeLinecap="round" />

        {/* --- FRONT NOSE & DETAILS --- */}
        {/* Front nose curvature */}
        <path
          d="M60 180 C58 200 60 215 68 230"
          stroke="#C2410C"
          strokeWidth="3"
        />

        {/* Front Headlight (Round Chrome) */}
        <circle cx="68" cy="195" r="16" fill="url(#chrome)" stroke="#64748B" strokeWidth="2" />
        <circle cx="68" cy="195" r="12" fill="#FEF08A" stroke="#EAB308" strokeWidth="1.5" />
        <circle cx="66" cy="192" r="4" fill="white" opacity="0.8" />

        {/* Front Turn Signal (Amber) */}
        <rect x="62" y="220" width="12" height="8" rx="3" fill="#F97316" stroke="#C2410C" strokeWidth="1.5" />

        {/* Big VW-style Circular Chrome Front Emblem */}
        <circle cx="95" cy="195" r="18" fill="url(#chrome)" stroke="#475569" strokeWidth="2.5" />
        <circle cx="95" cy="195" r="14" fill="#0A3A40" />
        {/* Palm tree inside the emblem to customize for Banggai Paradise! */}
        <path d="M95 204 L95 188" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
        <path d="M95 188 C91 184 86 186 84 188 M95 188 C99 184 104 186 106 188" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />

        {/* Front Chrome Bumper */}
        <path
          d="M48 240 C48 234 56 230 72 230 L85 230 L85 250 L68 250 C54 250 48 246 48 240 Z"
          fill="url(#chrome)"
          stroke="#64748B"
          strokeWidth="2"
        />

        {/* Rear Chrome Bumper */}
        <path
          d="M425 235 L448 235 C452 235 456 238 456 242 C456 246 452 250 446 250 L425 250 Z"
          fill="url(#chrome)"
          stroke="#64748B"
          strokeWidth="2"
        />

        {/* Door line and handles */}
        <path d="M165 155 L165 248" stroke="#9A3412" strokeWidth="2" />
        <rect x="175" y="175" width="14" height="4" rx="2" fill="url(#chrome)" stroke="#475569" strokeWidth="1" />
        <path d="M335 155 L335 248" stroke="#9A3412" strokeWidth="2" />
        <rect x="315" y="175" width="14" height="4" rx="2" fill="url(#chrome)" stroke="#475569" strokeWidth="1" />

        {/* Air vents on rear quarter panel */}
        <path d="M428 175 L438 175 M428 182 L438 182 M428 189 L438 189 M428 196 L438 196" stroke="#9A3412" strokeWidth="2" strokeLinecap="round" />

        {/* --- WHEELS --- */}
        {/* Front Wheel */}
        <g>
          {/* Tire */}
          <circle cx="165" cy="250" r="38" fill="url(#tireRubber)" stroke="#0F172A" strokeWidth="3" />
          {/* Chrome Rim */}
          <circle cx="165" cy="250" r="24" fill="url(#chrome)" stroke="#64748B" strokeWidth="2" />
          {/* Inner Orange Hubcap */}
          <circle cx="165" cy="250" r="14" fill="#EA580C" stroke="#C2410C" strokeWidth="1.5" />
          {/* Center Chrome Nut */}
          <circle cx="165" cy="250" r="6" fill="url(#chrome)" />
          {/* Rim slots */}
          <circle cx="165" cy="232" r="2.5" fill="#1E293B" />
          <circle cx="165" cy="268" r="2.5" fill="#1E293B" />
          <circle cx="147" cy="250" r="2.5" fill="#1E293B" />
          <circle cx="183" cy="250" r="2.5" fill="#1E293B" />
        </g>

        {/* Rear Wheel */}
        <g>
          {/* Tire */}
          <circle cx="345" cy="250" r="38" fill="url(#tireRubber)" stroke="#0F172A" strokeWidth="3" />
          {/* Chrome Rim */}
          <circle cx="345" cy="250" r="24" fill="url(#chrome)" stroke="#64748B" strokeWidth="2" />
          {/* Inner Orange Hubcap */}
          <circle cx="345" cy="250" r="14" fill="#EA580C" stroke="#C2410C" strokeWidth="1.5" />
          {/* Center Chrome Nut */}
          <circle cx="345" cy="250" r="6" fill="url(#chrome)" />
          {/* Rim slots */}
          <circle cx="345" cy="232" r="2.5" fill="#1E293B" />
          <circle cx="345" cy="268" r="2.5" fill="#1E293B" />
          <circle cx="327" cy="250" r="2.5" fill="#1E293B" />
          <circle cx="363" cy="250" r="2.5" fill="#1E293B" />
        </g>
      </svg>
    </div>
  );
};
