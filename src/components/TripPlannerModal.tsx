import React, { useState } from 'react';
import { X, Check, Compass, Calendar, Users, MessageCircle, Sparkles } from 'lucide-react';

interface TripPlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: 'IDR' | 'USD';
  initialDestination?: string;
}

export const TripPlannerModal: React.FC<TripPlannerModalProps> = ({
  isOpen,
  onClose,
  currency,
  initialDestination = ''
}) => {
  if (!isOpen) return null;

  const [selectedSpots, setSelectedSpots] = useState<string[]>(
    initialDestination ? [initialDestination] : ['Danau Paisu Pok', 'Kepulauan Sombori']
  );
  const [duration, setDuration] = useState('3 Days 2 Nights');
  const [travelers, setTravelers] = useState(2);
  const [travelMonth, setTravelMonth] = useState('April - Mei (Best Weather)');
  const [includeDrone, setIncludeDrone] = useState(true);
  const [hotelType, setHotelType] = useState<'standard' | 'comfort' | 'resort'>('comfort');
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [notes, setNotes] = useState('');

  const spotOptions = [
    'Danau Paisu Pok',
    'Kepulauan Sombori',
    'Danau Ubur-Ubur Mbuang-Mbuang',
    'Pulau Dua (Pulo Dua)',
    'Pantai Mandel',
    'Air Terjun Piala'
  ];

  const toggleSpot = (spot: string) => {
    if (selectedSpots.includes(spot)) {
      if (selectedSpots.length > 1) {
        setSelectedSpots(selectedSpots.filter((s) => s !== spot));
      }
    } else {
      setSelectedSpots([...selectedSpots, spot]);
    }
  };

  // Base estimate calculation
  const baseDailyPerPersonIdr = hotelType === 'resort' ? 1450000 : hotelType === 'comfort' ? 1100000 : 850000;
  const daysCount = duration.includes('2') ? 2 : duration.includes('3') ? 3 : duration.includes('4') ? 4 : 5;
  const discount = travelers >= 6 ? 0.8 : travelers >= 4 ? 0.88 : 1;
  const estTotalIdr = Math.round(baseDailyPerPersonIdr * daysCount * travelers * discount);
  const estTotalUsd = Math.round(estTotalIdr / 15500);

  const formattedEst = currency === 'IDR'
    ? `Rp ${estTotalIdr.toLocaleString('id-ID')}`
    : `$${estTotalUsd.toLocaleString('en-US')}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const spotsText = selectedSpots.join(', ');
    const text = encodeURIComponent(
      `Halo Banggai Paradise Tour & Travel!\n\nSaya ingin merancang *Custom Private Trip* ke Banggai:\n\n` +
      `Nama: ${name || 'Calon Wisatawan'}\n` +
      `WhatsApp: ${whatsapp || '-'}\n` +
      `Destinasi Pilihan: ${spotsText}\n` +
      `Durasi: ${duration}\n` +
      `Jumlah Peserta: ${travelers} Orang\n` +
      `Waktu Perjalanan: ${travelMonth}\n` +
      `Tipe Penginapan: ${hotelType.toUpperCase()}\n` +
      `Free Drone Doc: ${includeDrone ? 'Ya (Wajib)' : 'Tidak'}\n` +
      `Catatan Khusus: ${notes || '-'}\n` +
      `Estimasi Budget: ~${formattedEst}\n\n` +
      `Mohon dibantu draft itinerary dan penawaran terbaiknya. Terima kasih!`
    );
    window.location.href = `https://wa.me/628124567890?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="min-h-full flex items-center justify-center p-4 sm:p-6 text-center">
        <div className="relative bg-white text-slate-900 rounded-3xl max-w-3xl w-full text-left shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
          
          {/* Header */}
          <div className="relative bg-gradient-to-r from-[#072F3A] to-[#0A3A40] text-white p-6 sm:p-8">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-cyan-200 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tailor-Made Private Itinerary</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold">Plan Your Dream Banggai Journey</h3>
            <p className="text-xs sm:text-sm text-cyan-100 mt-1">
              Rancang liburan pulau privat Anda bersama pemandu lokal kami. Transparan, fleksibel, dan tanpa repot.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            
            {/* Step 1: Choose Destinations */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                1. Pilih Destinasi yang Ingin Dikunjungi
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {spotOptions.map((spot) => {
                  const isSelected = selectedSpots.includes(spot);
                  return (
                    <button
                      type="button"
                      key={spot}
                      onClick={() => toggleSpot(spot)}
                      className={`p-3 rounded-xl text-xs font-semibold text-left transition-all border flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-cyan-50 border-[#0284C7] text-[#0A3A40] shadow-sm'
                          : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      <span className="truncate">{spot}</span>
                      {isSelected && <Check className="w-4 h-4 text-[#0284C7] shrink-0 ml-1" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Duration & Travelers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  2. Durasi Perjalanan
                </label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold text-slate-800"
                >
                  <option value="2 Days 1 Night">2 Hari 1 Malam (Weekend Quick)</option>
                  <option value="3 Days 2 Nights">3 Hari 2 Malam (Paling Populer)</option>
                  <option value="4 Days 3 Nights">4 Hari 3 Malam (Complete Sombori)</option>
                  <option value="5 Days 4 Nights">5 Hari 4 Malam (Ultimate Explorer)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  3. Jumlah Peserta: <span className="text-[#0284C7] font-bold">{travelers} Orang</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={travelers}
                  onChange={(e) => setTravelers(parseInt(e.target.value))}
                  className="w-full mt-3 accent-[#0284C7] cursor-pointer"
                />
              </div>
            </div>

            {/* Step 3: Hotel Preference */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                4. Standar Penginapan
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'standard', label: 'Eko-Homestay', desc: 'Bersih & Nyaman di Desa' },
                  { id: 'comfort', label: 'Comfort Hotel', desc: 'AC, Air Hangat & Wifi' },
                  { id: 'resort', label: 'Resort / Cottage', desc: 'Tepi Pantai Eksklusif' }
                ].map((opt) => (
                  <button
                    type="button"
                    key={opt.id}
                    onClick={() => setHotelType(opt.id as any)}
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                      hotelType === opt.id
                        ? 'border-[#0284C7] bg-cyan-50/50 text-[#0A3A40]'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <p className="text-xs font-bold">{opt.label}</p>
                    <p className="text-[10px] text-slate-500">{opt.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nama Anda
                </label>
                <input
                  type="text"
                  required
                  placeholder="Nama lengkap"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nomor WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  placeholder="08xxxxxxxxxx"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                />
              </div>
            </div>

            {/* Price Preview & Submit */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="block text-[11px] text-slate-500">Perkiraan Estimasi Paket</span>
                <span className="text-xl font-extrabold text-[#0A3A40]">{formattedEst}</span>
                <span className="text-xs text-slate-500"> (Total {travelers} orang)</span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#F26A4F] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] shadow-md shadow-orange-500/25 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Kirim Rencana ke WhatsApp</span>
              </button>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
};
