import { useState } from 'react';
import { REAL_GOOGLE_REVIEWS, GOOGLE_REVIEWS_SUMMARY, GoogleReview } from '../data/googleReviews';
import { Star, CheckCircle, ChevronLeft, ChevronRight, Heart, Camera, ThumbsUp, Sparkles, Filter } from 'lucide-react';

export function GoogleReviewsSection() {
  const [filter, setFilter] = useState<'all' | 'local_guide' | 'mit_text'>('all');
  const [activeTab, setActiveTab] = useState<'grid' | 'carousel'>('grid');
  const [carouselIndex, setCarouselIndex] = useState(0);

  const reviewsWithText = REAL_GOOGLE_REVIEWS.filter(r => r.comment && r.comment.trim().length > 0);

  const filteredReviews = REAL_GOOGLE_REVIEWS.filter((r) => {
    if (filter === 'local_guide') return r.isLocalGuide;
    if (filter === 'mit_text') return r.comment && r.comment.length > 30;
    return true;
  });

  const nextCarousel = () => {
    setCarouselIndex((prev) => (prev === filteredReviews.length - 1 ? 0 : prev + 1));
  };

  const prevCarousel = () => {
    setCarouselIndex((prev) => (prev === 0 ? filteredReviews.length - 1 : prev - 1));
  };

  const currentCarouselReview: GoogleReview = filteredReviews[carouselIndex] || filteredReviews[0];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-y border-slate-200/80 font-sans relative overflow-hidden" id="google-rezensionen">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-blue-500/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Google Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white text-slate-800 text-xs font-semibold mb-4 shadow-sm border border-slate-200">
            {/* Google "G" icon colors */}
            <div className="flex items-center gap-1 font-bold">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </div>
            <span className="text-slate-300">|</span>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FBBC05] text-[#FBBC05]" />
              ))}
            </div>
            <span className="font-extrabold text-slate-900">{GOOGLE_REVIEWS_SUMMARY.rating} / 5.0</span>
            <span className="text-slate-500 font-normal">({GOOGLE_REVIEWS_SUMMARY.totalCount} echte Rezensionen)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Echte Google-Rezensionen unserer Kunden
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            100% verifizierte Erfahrungen von Kunden aus ganz Schleswig-Holstein und Hamburg.
          </p>

          {/* Highlights chips */}
          <div className="flex flex-wrap justify-center items-center gap-2 mt-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              100% 5-Sterne-Bewertungen
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#1B75D0] text-xs font-semibold border border-blue-200">
              <Sparkles className="w-3.5 h-3.5" />
              Top Zufriedenheit bei Fenstern &amp; Terrassendächern
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold border border-amber-200">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              Empfohlen von Google Local Guides
            </span>
          </div>
        </div>

        {/* View mode & Filters bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
          {/* Filters */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-semibold text-slate-500 flex items-center gap-1 mr-1">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Alle ({REAL_GOOGLE_REVIEWS.length})
            </button>
            <button
              onClick={() => setFilter('mit_text')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                filter === 'mit_text'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Mit ausführlichem Text ({reviewsWithText.length})
            </button>
            <button
              onClick={() => setFilter('local_guide')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                filter === 'local_guide'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Google Local Guides ({REAL_GOOGLE_REVIEWS.filter(r => r.isLocalGuide).length})
            </button>
          </div>

          {/* Toggle Grid vs Carousel */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
            <button
              onClick={() => setActiveTab('grid')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'grid'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Karten-Übersicht
            </button>
            <button
              onClick={() => setActiveTab('carousel')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'carousel'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Karussell-Ansicht
            </button>
          </div>
        </div>

        {/* VIEW 1: Grid Mode */}
        {activeTab === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-slate-200/90 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Author Header */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-11 h-11 rounded-full text-white font-bold flex items-center justify-center text-base shadow-sm shrink-0 ${rev.avatarBg}`}
                      >
                        {rev.avatarLetter}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-bold text-slate-900 text-sm">{rev.author}</h4>
                          {rev.isLocalGuide && (
                            <span
                              title="Google Local Guide"
                              className="w-3.5 h-3.5 rounded-full bg-amber-500 text-white flex items-center justify-center text-[9px] font-black"
                            >
                              ★
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500">
                          {rev.reviewCountText || 'Google Rezension'}
                        </p>
                      </div>
                    </div>

                    {/* Google G logo mini */}
                    <div className="w-5 h-5 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-[10px] font-bold text-[#4285F4] shrink-0" title="Verifizierte Google Rezension">
                      G
                    </div>
                  </div>

                  {/* Stars + Time Ago + Badges */}
                  <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                      ))}
                      <span className="text-xs font-semibold text-slate-500 ml-1.5">
                        {rev.timeAgo}
                      </span>
                    </div>

                    {rev.isNew && (
                      <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
                        Neu
                      </span>
                    )}
                  </div>

                  {/* Price / Category Badges if present */}
                  {(rev.priceLevel || rev.serviceMentioned) && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {rev.priceLevel && (
                        <span className="text-[11px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                          {rev.priceType ? `${rev.priceType} · ` : ''}{rev.priceLevel}
                        </span>
                      )}
                      {rev.serviceMentioned && (
                        <span className="text-[11px] text-[#1B75D0] bg-[#1B75D0]/10 px-2 py-0.5 rounded font-medium border border-[#1B75D0]/20">
                          {rev.serviceMentioned}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Comment Text */}
                  <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-line">
                    "{rev.comment}"
                  </p>
                </div>

                {/* Footer metadata (photos, likes) */}
                {(rev.photosCount || rev.likesCount) && (
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center gap-3">
                      {rev.photosCount && (
                        <span className="flex items-center gap-1 text-slate-500">
                          <Camera className="w-3.5 h-3.5 text-slate-400" /> {rev.photosCount} Fotos
                        </span>
                      )}
                      {rev.likesCount && (
                        <span className="flex items-center gap-1 text-rose-500 font-medium">
                          <Heart className="w-3.5 h-3.5 fill-rose-500" /> {rev.likesCount}
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-slate-400">Google Profil</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* VIEW 2: Carousel Mode */}
        {activeTab === 'carousel' && currentCarouselReview && (
          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/60 border border-slate-200 relative">
            {/* Top row */}
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <div className="flex items-center gap-1">
                {[...Array(currentCarouselReview.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FBBC05] text-[#FBBC05]" />
                ))}
                <span className="ml-2 font-bold text-slate-800 text-sm">
                  5.0 von 5.0
                </span>
                <span className="text-xs text-slate-400 ml-1">
                  • {currentCarouselReview.timeAgo}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {currentCarouselReview.isLocalGuide && (
                  <span className="inline-flex items-center gap-1 text-xs text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200 font-medium">
                    ★ Google Local Guide
                  </span>
                )}
                <span className="inline-flex items-center gap-1 text-xs text-[#4285F4] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200 font-medium">
                  Verifizierte Google Rezension
                </span>
              </div>
            </div>

            {/* Comment */}
            <p className="text-slate-800 text-lg sm:text-xl leading-relaxed italic mb-8 font-normal">
              "{currentCarouselReview.comment}"
            </p>

            {/* Service & Price */}
            {(currentCarouselReview.serviceMentioned || currentCarouselReview.priceLevel) && (
              <div className="flex flex-wrap gap-2 mb-6">
                {currentCarouselReview.serviceMentioned && (
                  <span className="text-xs font-semibold text-[#1B75D0] bg-[#1B75D0]/10 px-3 py-1 rounded-full">
                    Leistung: {currentCarouselReview.serviceMentioned}
                  </span>
                )}
                {currentCarouselReview.priceLevel && (
                  <span className="text-xs text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                    {currentCarouselReview.priceType ? `${currentCarouselReview.priceType}: ` : ''}{currentCarouselReview.priceLevel}
                  </span>
                )}
              </div>
            )}

            {/* Reviewer info + Navigation buttons */}
            <div className="flex items-center justify-between border-t border-slate-100 pt-6 flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-full text-white font-bold flex items-center justify-center text-lg shadow-sm ${currentCarouselReview.avatarBg}`}
                >
                  {currentCarouselReview.avatarLetter}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">
                    {currentCarouselReview.author}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {currentCarouselReview.reviewCountText || 'Google Nutzer'}
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevCarousel}
                  className="p-2.5 rounded-full bg-slate-100 hover:bg-[#1B75D0] hover:text-white text-slate-600 transition-colors"
                  aria-label="Vorherige Rezension"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-semibold text-slate-400 px-2">
                  {carouselIndex + 1} / {filteredReviews.length}
                </span>
                <button
                  onClick={nextCarousel}
                  className="p-2.5 rounded-full bg-slate-100 hover:bg-[#1B75D0] hover:text-white text-slate-600 transition-colors"
                  aria-label="Nächste Rezension"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Google Trust Card */}
        <div className="mt-12 max-w-4xl mx-auto bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 border border-amber-500/20">
              <ThumbsUp className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-base">
                Zufriedenheitsgarantie von Nord Glanz
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
                Wir verlassen Ihr Objekt erst, wenn Sie mit dem Ergebnis zu 100% glücklich sind.
              </p>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-2">
            <a
              href="https://www.google.com/search?q=Nord+Glanz+Barmstedt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors"
            >
              <span>Alle Bewertungen auf Google</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
