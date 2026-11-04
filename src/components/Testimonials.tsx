import React, { useState, useEffect } from 'react';
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
  CheckCircle2,
  SlidersHorizontal,
  LayoutGrid,
  Play,
  Pause,
  Plus,
  X,
  MessageSquare,
  Sparkles,
  MapPin
} from 'lucide-react';
import { TESTIMONIALS } from '../data/travelData';
import { Testimonial } from '../types';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface TestimonialsProps {
  onPlanTripClick: () => void;
  language: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onPlanTripClick, language }) => {
  const [reviews, setReviews] = useState<Testimonial[]>(TESTIMONIALS);
  const [layoutMode, setLayoutMode] = useState<'carousel' | 'grid'>('carousel');
  const [filterType, setFilterType] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [showAddReviewModal, setShowAddReviewModal] = useState(false);
  const t = TRANSLATIONS[language].testimonials;

  // New review form state
  const [newAuthor, setNewAuthor] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newTrip, setNewTrip] = useState('Paisu Pok & Peleng Wonder (3D2N)');
  const [newRating, setNewRating] = useState(5);
  const [newTitle, setNewTitle] = useState('');
  const [newComment, setNewComment] = useState('');
  const [newHighlight, setNewHighlight] = useState('');
  const [newUserType, setNewUserType] = useState<'Couple' | 'Family' | 'Solo Adventurer' | 'Group Friends'>('Couple');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Filtered reviews
  const filteredReviews = reviews.filter((r) => {
    if (filterType === 'all') return true;
    if (filterType === 'couple') return r.userType === 'Couple';
    if (filterType === 'family') return r.userType === 'Family';
    if (filterType === 'adventure') return r.userType === 'Solo Adventurer' || r.userType === 'Group Friends';
    return true;
  });

  const [itemsPerView, setItemsPerView] = useState(3);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Responsive items visible (Mobile: 1, Tablet: 2, Desktop: 3)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, filteredReviews.length - itemsPerView);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Reset or clamp index when filter or viewport size changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [filterType, maxIndex, currentIndex]);

  // Touch swipe support for mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setTouchStartX(null);
  };

  // Autoplay effect for carousel
  useEffect(() => {
    if (!isAutoplay || layoutMode !== 'carousel') return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoplay, layoutMode, maxIndex]);

  const handleAddReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor || !newComment || !newTitle) return;

    const newRev: Testimonial = {
      id: `testi-${Date.now()}`,
      name: newAuthor,
      role: newUserType === 'Couple' ? 'Couple Travelers' : newUserType === 'Family' ? 'Family Travelers' : 'Adventure Traveler',
      location: newLocation || 'Indonesia',
      avatar: newUserType === 'Couple' ? '💑' : newUserType === 'Family' ? '👨‍👩‍👧' : '🎒',
      rating: newRating,
      date: 'Baru saja',
      tripPackage: newTrip,
      title: newTitle,
      comment: newComment,
      highlightSpot: newHighlight || 'Banggai Archipelago',
      verified: true,
      userType: newUserType
    };

    setReviews([newRev, ...reviews]);
    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
      setShowAddReviewModal(false);
      setNewAuthor('');
      setNewLocation('');
      setNewTitle('');
      setNewComment('');
      setNewHighlight('');
    }, 1500);
  };

  return (
    <section id="testimonials" className="py-24 bg-[#F8FAFC] relative overflow-hidden border-t border-slate-200/60">
      
      {/* Background Ambient Accents */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching Mockup 2 format */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold tracking-widest uppercase text-[#F26A4F]">
              {t.kicker}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#062D35] tracking-tight text-balance">
              {t.headline}
            </h2>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed text-balance">
              {t.subheadline}
            </p>
          </div>

          {/* Social Proof Metric Badge */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm flex items-center gap-4 shrink-0">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-500 font-extrabold text-lg">
              {t.ratingScore}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs font-bold text-[#062D35] mt-0.5">
                {t.verifiedCount}
              </p>
              <p className="text-[11px] text-slate-400">
                {t.safeBoatsLabel}
              </p>
            </div>
          </div>
        </div>

        {/* Filter Pills & View Mode Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200/60">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-200/70 rounded-full overflow-x-auto max-w-full">
            {[
              { id: 'all', label: t.allReviews },
              { id: 'couple', label: t.couples },
              { id: 'family', label: t.families },
              { id: 'adventure', label: t.adventurers }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterType(tab.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  filterType === tab.id
                    ? 'bg-white text-[#062D35] shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Right Controls: Carousel vs Grid + Autoplay + Write Review */}
          <div className="flex items-center gap-2">
            
            {/* View Switcher: Carousel / Grid */}
            <div className="flex items-center p-1 bg-slate-200/70 rounded-full">
              <button
                onClick={() => setLayoutMode('carousel')}
                className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer ${
                  layoutMode === 'carousel'
                    ? 'bg-white text-[#062D35] shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Carousel View"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Carousel</span>
              </button>
              <button
                onClick={() => setLayoutMode('grid')}
                className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer ${
                  layoutMode === 'grid'
                    ? 'bg-white text-[#062D35] shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Grid</span>
              </button>
            </div>

            {/* Carousel navigation buttons (only shown in carousel mode) */}
            {layoutMode === 'carousel' && (
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setIsAutoplay(!isAutoplay)}
                  className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-slate-50 transition-colors cursor-pointer"
                  title={isAutoplay ? 'Pause auto-sliding' : 'Play auto-sliding'}
                >
                  {isAutoplay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={handlePrev}
                  className="w-8 h-8 rounded-full bg-white border border-slate-200 text-[#062D35] flex items-center justify-center hover:bg-slate-50 shadow-sm transition-colors cursor-pointer"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-8 h-8 rounded-full bg-white border border-slate-200 text-[#062D35] flex items-center justify-center hover:bg-slate-50 shadow-sm transition-colors cursor-pointer"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Write a review button */}
            <button
              onClick={() => setShowAddReviewModal(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-[#062D35] hover:bg-[#041E26] shadow-sm transition-colors cursor-pointer ml-1"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{t.writeReviewBtn}</span>
            </button>

          </div>

        </div>

        {/* ========================================================
            LAYOUT 1: CAROUSEL MODE
            ======================================================== */}
        {layoutMode === 'carousel' ? (
          <div className="relative">
            {/* Sliding container with touch swipe support */}
            <div
              className="overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-out gap-6"
                style={{
                  transform: `translateX(calc(-${currentIndex} * (100% + 24px) / ${itemsPerView}))`,
                }}
              >
                {filteredReviews.map((item) => (
                  <div
                    key={item.id}
                    className="w-full shrink-0 md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                  >
                    <div className="h-full bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-cyan-200 transition-all duration-300 flex flex-col justify-between text-left group">
                      
                      <div>
                        {/* Top Row: Stars & Quote Icon */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-1 text-amber-400">
                            {[...Array(Math.max(1, Math.min(5, Math.floor(item.rating || 5))))].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-amber-400" />
                            ))}
                          </div>
                          <div className="w-8 h-8 rounded-full bg-cyan-50 text-[#0284C7] flex items-center justify-center group-hover:bg-[#F26A4F] group-hover:text-white transition-colors">
                            <Quote className="w-4 h-4" />
                          </div>
                        </div>

                        {/* Trip Package Tag */}
                        <div className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-[#062D35] mb-3">
                          {item.tripPackage}
                        </div>

                        {/* Title & Comment */}
                        <h4 className="text-base font-bold text-[#062D35] mb-2 leading-snug">
                          "{item.title}"
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                          {item.comment}
                        </p>
                      </div>

                      {/* Bottom Author Section */}
                      <div className="pt-4 border-t border-slate-100 space-y-2">
                        {item.highlightSpot && (
                          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#0284C7]">
                            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                            <span className="truncate">Favorite: {item.highlightSpot}</span>
                          </div>
                        )}

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-cyan-100/70 border border-cyan-200 text-lg flex items-center justify-center shrink-0">
                              {item.avatar || '👤'}
                            </div>
                            <div>
                                <div className="flex items-center gap-1">
                                  <span className="text-xs font-bold text-[#062D35]">{item.name}</span>
                                  {item.verified && (
                                    <span title="Verified Traveler">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                                    </span>
                                  )}
                                </div>
                              <p className="text-[10px] text-slate-400">
                                {item.role} · {item.location}
                              </p>
                            </div>
                          </div>

                          <span className="text-[10px] text-slate-400 font-medium">
                            {item.date}
                          </span>
                        </div>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Indicators */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx ? 'w-8 bg-[#062D35]' : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* ========================================================
              LAYOUT 2: GRID MODE
              ======================================================== */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-cyan-200 transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(Math.max(1, Math.min(5, Math.floor(item.rating || 5))))].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-cyan-50 text-[#0284C7] flex items-center justify-center group-hover:bg-[#F26A4F] group-hover:text-white transition-colors">
                      <Quote className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-[#062D35] mb-3">
                    {item.tripPackage}
                  </div>

                  <h4 className="text-base font-bold text-[#062D35] mb-2 leading-snug">
                    "{item.title}"
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {item.comment}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2">
                  {item.highlightSpot && (
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#0284C7]">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="truncate">Favorite: {item.highlightSpot}</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-cyan-100/70 border border-cyan-200 text-lg flex items-center justify-center shrink-0">
                        {item.avatar || '👤'}
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="text-xs font-bold text-[#062D35]">{item.name}</span>
                          {item.verified && (
                            <span title="Verified Traveler">
                              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                            </span>
                          )}
                        </div>
                        <p className="text-[10px] text-slate-400">
                          {item.role} · {item.location}
                        </p>
                      </div>
                    </div>

                    <span className="text-[10px] text-slate-400 font-medium">
                      {item.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Banner & Direct Consultation */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-cyan-900 via-[#062D35] to-[#041E26] text-white flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-lg">
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <span>{t.ctaBannerTitle}</span>
            </h4>
            <p className="text-xs sm:text-sm text-cyan-200">
              {t.ctaBannerDesc}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onPlanTripClick}
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#F26A4F] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] shadow-md shadow-orange-950/30 transition-all cursor-pointer whitespace-nowrap"
            >
              {t.planAdventureBtn}
            </button>
          </div>
        </div>

      </div>

      {/* Write a Review Modal */}
      {showAddReviewModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
            onClick={() => setShowAddReviewModal(false)}
          />

          <div className="min-h-full flex items-center justify-center p-4 text-center">
            <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 text-left shadow-2xl animate-in fade-in zoom-in-95 duration-200">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-xl font-bold text-[#062D35]">Bagikan Pengalaman Anda</h3>
                  <p className="text-xs text-slate-500">Ceritakan keseruan liburan Anda bersama Banggai Paradise</p>
                </div>
                <button
                  onClick={() => setShowAddReviewModal(false)}
                  className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {submitSuccess ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Ulasan Berhasil Dikirim!</h4>
                  <p className="text-xs text-slate-500">Terima kasih telah berbagi cerita perjalanan Anda bersama Banggai Paradise.</p>
                </div>
              ) : (
                <form onSubmit={handleAddReviewSubmit} className="mt-5 space-y-4">
                  {/* Name & Location */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Nama Anda *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Sarah & Budi"
                        value={newAuthor}
                        onChange={(e) => setNewAuthor(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Kota / Negara
                      </label>
                      <input
                        type="text"
                        placeholder="Contoh: Jakarta"
                        value={newLocation}
                        onChange={(e) => setNewLocation(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                      />
                    </div>
                  </div>

                  {/* Trip Package Taken */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Paket yang Diikuti
                    </label>
                    <select
                      value={newTrip}
                      onChange={(e) => setNewTrip(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800"
                    >
                      <option value="Paisu Pok & Peleng Wonder (3D2N)">Paisu Pok &amp; Peleng Wonder (3D2N)</option>
                      <option value="Sombori & Island Hopping (4D3N)">Sombori &amp; Island Hopping (4D3N)</option>
                      <option value="Snorkeling & Jellyfish Sanctuary (3D2N)">Snorkeling &amp; Jellyfish Sanctuary (3D2N)</option>
                      <option value="Pulo Dua & Tropical Coast (2D1N)">Pulo Dua &amp; Tropical Coast (2D1N)</option>
                      <option value="Custom Private Trip">Custom Private Trip</option>
                    </select>
                  </div>

                  {/* User Type & Rating */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Tipe Traveler
                      </label>
                      <select
                        value={newUserType}
                        onChange={(e) => setNewUserType(e.target.value as any)}
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800"
                      >
                        <option value="Couple">Pasangan / Honeymoon</option>
                        <option value="Family">Keluarga</option>
                        <option value="Solo Adventurer">Solo Traveler</option>
                        <option value="Group Friends">Grup / Teman</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Rating: {newRating} Bintang
                      </label>
                      <div className="flex items-center gap-1 pt-1.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            type="button"
                            key={star}
                            onClick={() => setNewRating(star)}
                            className="text-amber-400 hover:scale-125 transition-transform cursor-pointer"
                          >
                            <Star className={`w-5 h-5 ${star <= newRating ? 'fill-amber-400' : 'text-slate-300'}`} />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Review Title */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Judul Ulasan *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Pengalaman tak terlupakan di Danau Paisu Pok"
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                    />
                  </div>

                  {/* Review Comment */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Cerita Liburan Anda *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Ceritakan keramahan pemandu, kenyamanan perahu, keindahan alam, atau dokumentasi drone yang Anda dapatkan..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                    />
                  </div>

                  {/* Highlight Spot */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Spot Favorit (Opsional)
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Danau Paisu Pok, Tebing Kahyangan"
                      value={newHighlight}
                      onChange={(e) => setNewHighlight(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setShowAddReviewModal(false)}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
                    >
                      Batal
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#F26A4F] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] shadow-md transition-all cursor-pointer"
                    >
                      Kirim Ulasan
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>
        </div>
      )}

    </section>
  );
};
