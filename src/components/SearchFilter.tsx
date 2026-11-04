import React, { useState } from 'react';
import { MapPin, Calendar, Users, Search } from 'lucide-react';

interface SearchFilterProps {
  onSearch: (filters: { destination: string; date: string; guests: string }) => void;
}

export const SearchFilter: React.FC<SearchFilterProps> = ({ onSearch }) => {
  const [destination, setDestination] = useState('all');
  const [date, setDate] = useState('Flexible 2026');
  const [guests, setGuests] = useState('2-4 Guests');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ destination, date, guests });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-200/80 p-3 sm:p-4 max-w-4xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 sm:gap-4 items-center">
        {/* Field 1: Destination */}
        <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-slate-50/80 hover:bg-slate-50 border border-slate-200/60 transition-colors">
          <div className="w-9 h-9 rounded-lg bg-cyan-100/70 text-[#0284C7] flex items-center justify-center shrink-0">
            <MapPin className="w-4 h-4" />
          </div>
          <div className="flex flex-col flex-1 min-w-0 text-left">
            <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Destination
            </label>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-transparent text-sm font-bold text-slate-800 focus:outline-none cursor-pointer truncate"
            >
              <option value="all">All Banggai Islands</option>
              <option value="paisu-pok">Danau Paisu Pok</option>
              <option value="sombori">Kepulauan Sombori</option>
              <option value="jellyfish">Danau Ubur-Ubur</option>
              <option value="pulo-dua">Pulau Dua &amp; Balantak</option>
              <option value="mandel">Pantai Mandel</option>
            </select>
          </div>
        </div>

        {/* Field 2: Travel Dates */}
        <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-slate-50/80 hover:bg-slate-50 border border-slate-200/60 transition-colors">
          <div className="w-9 h-9 rounded-lg bg-cyan-100/70 text-[#0284C7] flex items-center justify-center shrink-0">
            <Calendar className="w-4 h-4" />
          </div>
          <div className="flex flex-col flex-1 min-w-0 text-left">
            <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Travel Dates
            </label>
            <select
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="bg-transparent text-sm font-bold text-slate-800 focus:outline-none cursor-pointer truncate"
            >
              <option value="Flexible 2026">Flexible Dates</option>
              <option value="This Month">This Month (Immediate)</option>
              <option value="Next Month">Next Month</option>
              <option value="Holiday Season">Holiday / Long Weekend</option>
              <option value="Custom Dates">Custom Private Dates</option>
            </select>
          </div>
        </div>

        {/* Field 3: Guests */}
        <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-slate-50/80 hover:bg-slate-50 border border-slate-200/60 transition-colors">
          <div className="w-9 h-9 rounded-lg bg-cyan-100/70 text-[#0284C7] flex items-center justify-center shrink-0">
            <Users className="w-4 h-4" />
          </div>
          <div className="flex flex-col flex-1 min-w-0 text-left">
            <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Guests
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="bg-transparent text-sm font-bold text-slate-800 focus:outline-none cursor-pointer truncate"
            >
              <option value="1-2 Guests">1-2 Guests (Couple/Solo)</option>
              <option value="2-4 Guests">2-4 Guests (Small Group)</option>
              <option value="5-8 Guests">5-8 Guests (Family)</option>
              <option value="9+ Guests">9+ Guests (Company/Group)</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#F26A4F] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] shadow-md shadow-orange-500/20 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer text-sm"
          >
            <Search className="w-4 h-4" />
            <span>Search Trips</span>
          </button>
        </div>
      </div>
    </form>
  );
};
