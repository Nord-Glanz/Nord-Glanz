import { useState } from 'react';
import { REVIEWS_DATA } from '../data/reviews';
import { Star, CheckCircle, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export function ReviewSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === REVIEWS_DATA.length - 1 ? 0 : prev + 1));
  };

  const currentReview = REVIEWS_DATA[currentIndex];

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 text-xs font-semibold mb-3 border border-amber-500/20">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>4.9 / 5.0 bei Google Bewertungen</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Was unsere Kunden aus Schleswig-Holstein &amp; Hamburg sagen
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Echte Erfahrungsberichte von Hausbesitzern, Gewerbekunden und Wohnungsverwaltungen.
          </p>
        </div>

        {/* Carousel Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-200/80 relative">
          <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-100 pointer-events-none" />

          {/* Rating Stars & Verified Tag */}
          <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-amber-400 text-amber-400"
                />
              ))}
              <span className="ml-2 font-bold text-slate-800 text-sm">
                {currentReview.rating}.0
              </span>
            </div>

            {currentReview.verified && (
              <span className="inline-flex items-center gap-1 text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 font-medium">
                <CheckCircle className="w-3.5 h-3.5" />
                Verifizierte Bewertung
              </span>
            )}
          </div>

          {/* Review Text */}
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed italic mb-8">
            "{currentReview.comment}"
          </p>

          {/* Reviewer Info & Navigation */}
          <div className="flex items-center justify-between border-t border-slate-100 pt-6 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div
                className={`w-11 h-11 rounded-full text-white font-bold flex items-center justify-center text-base shadow-sm ${currentReview.avatarBg}`}
              >
                {currentReview.author.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">
                  {currentReview.author}
                </h4>
                <p className="text-xs text-slate-500">
                  {currentReview.location} • <span className="text-[#1B75D0]">{currentReview.service}</span>
                </p>
              </div>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-full bg-slate-100 hover:bg-[#1B75D0] hover:text-white text-slate-600 transition-colors"
                id="review-prev-button"
                aria-label="Vorherige Bewertung"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs font-semibold text-slate-400 px-1">
                {currentIndex + 1} / {REVIEWS_DATA.length}
              </span>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-full bg-slate-100 hover:bg-[#1B75D0] hover:text-white text-slate-600 transition-colors"
                id="review-next-button"
                aria-label="Nächste Bewertung"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
