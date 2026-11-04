import React from 'react';
import { X, Check, Clock, Users, Star, Shield, Award } from 'lucide-react';
import { TourPackage } from '../types';

interface PackageModalProps {
  pkg: TourPackage | null;
  onClose: () => void;
}

export const PackageModal: React.FC<PackageModalProps> = ({ pkg, onClose }) => {
  if (!pkg) return null;


  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="min-h-full flex items-center justify-center p-4 sm:p-6 text-center">
        <div className="relative bg-white rounded-3xl max-w-4xl w-full text-left shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/75 text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header Media */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden">
            <img
              src={pkg.image}
              alt={pkg.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 text-white">
              {pkg.badge && (
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F26A4F] text-white shadow-md mb-2">
                  {pkg.badge}
                </span>
              )}
              <h2 className="text-2xl sm:text-3xl font-extrabold">{pkg.name}</h2>
              <p className="text-cyan-200 text-sm">{pkg.subtitle}</p>

              <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-slate-200">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-cyan-300" />
                  {pkg.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-cyan-300" />
                  {pkg.groupType}
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  {pkg.rating} ({pkg.reviewCount} ulasan wisatawan)
                </span>
              </div>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left 7 cols: Itinerary & Inclusions */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-[#0A3A40] mb-2">Ringkasan Perjalanan</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pkg.shortDesc}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">Highlights Utama</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {pkg.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <Check className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Day-by-Day Itinerary */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">Rencana Perjalanan (Itinerary)</h3>
                <div className="space-y-4">
                  {pkg.itinerary.map((day) => (
                    <div key={day.day} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-cyan-100 text-[#0284C7] font-bold text-xs flex items-center justify-center shrink-0">
                        H{day.day}
                      </div>
                      <div className="flex-1 pb-4 border-b border-slate-100 last:border-0">
                        <h4 className="text-sm font-bold text-slate-900">{day.title}</h4>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">{day.description}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {day.spots.map((spot, sIdx) => (
                            <span key={sIdx} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                              {spot}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-teal-800 mb-2 flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-teal-600" />
                    <span>Sudah Termasuk</span>
                  </h4>
                  <ul className="text-xs text-slate-600 space-y-1.5">
                    {pkg.included.map((inc, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-teal-600">•</span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                    <X className="w-4 h-4 text-slate-400" />
                    <span>Belum Termasuk</span>
                  </h4>
                  <ul className="text-xs text-slate-500 space-y-1.5">
                    {pkg.excluded.map((exc, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-slate-400">•</span>
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

            {/* Contact Information */}
            <div className="lg:col-span-5 bg-slate-50/90 rounded-2xl p-6 border border-slate-200/80 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#0A3A40]">Informasi &amp; Konsultasi</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  Untuk informasi ketersediaan, penyesuaian itinerary, dan penawaran terbaru, silakan hubungi tim kami.
                </p>
                <a href="#contact" onClick={onClose} className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-[#0A3A40] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#07515D]">
                  Hubungi Tim Kami
                </a>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between">
                <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5 text-teal-600" />Resmi &amp; Berizin</span>
                <span className="flex items-center gap-1"><Award className="w-3.5 h-3.5 text-teal-600" />Free 4K Drone</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
