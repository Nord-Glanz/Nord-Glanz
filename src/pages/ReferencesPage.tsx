import { useState } from 'react';
import { RoutePath, ReferenceProject } from '../types';
import { REFERENCES_DATA } from '../data/references';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { LightboxModal } from '../components/LightboxModal';
import { SEOHead } from '../components/SEOHead';
import {
  MapPin,
  Star,
  Quote,
  Maximize2,
  Calendar,
  Building,
  UserCheck,
  CheckCircle2
} from 'lucide-react';

interface ReferencesPageProps {
  onNavigate: (path: RoutePath) => void;
}

export function ReferencesPage({ onNavigate }: ReferencesPageProps) {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'Privatkundschaft' | 'Gewerbekunde' | 'Wohnungsverwaltung'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredReferences = REFERENCES_DATA.filter((ref) => {
    if (selectedFilter === 'all') return true;
    return ref.clientType === selectedFilter;
  });

  const activeLightboxItem = lightboxIndex !== null ? filteredReferences[lightboxIndex] : null;

  return (
    <>
      <SEOHead
        title="Referenzen & Projekte | Nord Glanz Barmstedt"
        description="Echte Arbeitsbeispiele und Vorher-Nachher Ergebnisse aus Barmstedt, Elmshorn, Quickborn, Pinneberg, Kaltenkirchen und Henstedt-Ulzburg."
        path="/referenzen"
      />

      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 font-sans border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center max-w-3xl">
          <span className="text-[#3BC8FF] font-semibold text-xs uppercase tracking-wider bg-[#3BC8FF]/10 px-3.5 py-1.5 rounded-full border border-[#3BC8FF]/20 inline-block mb-3">
            Ausgewählte Arbeitsbeispiele
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Vorher &amp; Nachher Ergebnisse
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Überzeugen Sie sich selbst von unseren Reinigungsergebnissen bei Privat- und Gewerbeobjekten im Raum Barmstedt und Umgebung.
          </p>
        </div>
      </section>

      {/* References Gallery Section */}
      <section className="py-12 bg-slate-50 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Filters */}
          <div className="flex justify-center mb-10 flex-wrap gap-2">
            {[
              { id: 'all', label: 'Alle Referenzen (8)' },
              { id: 'Privatkundschaft', label: 'Privathäuser & Wohnungen' },
              { id: 'Gewerbekunde', label: 'Büros & Gewerbe' },
              { id: 'Wohnungsverwaltung', label: 'Wohnungsverwaltungen' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id as any)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                  selectedFilter === tab.id
                    ? 'bg-[#1B75D0] text-white shadow-md shadow-[#1B75D0]/25'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Reference Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {filteredReferences.map((item, idx) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
              >
                {/* Before/After Interactive Slider */}
                <div className="relative">
                  <BeforeAfterSlider
                    beforeImage={item.beforeImage}
                    afterImage={item.afterImage}
                    beforeLabel="Vorher"
                    afterLabel="Nachher (Nord Glanz)"
                    className="h-[300px] sm:h-[360px]"
                  />
                  <button
                    onClick={() => setLightboxIndex(idx)}
                    className="absolute bottom-4 right-4 bg-slate-900/80 text-white p-2.5 rounded-full hover:bg-slate-900 transition-colors z-20 shadow-md border border-slate-700"
                    aria-label="Großansicht öffnen"
                    title="Großansicht öffnen"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B75D0] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                      <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.date}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Customer Review Quote if available */}
                  {item.reviewText && (
                    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 mt-2 relative">
                      <div className="flex items-center gap-1 mb-1">
                        {[...Array(item.rating || 5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-slate-700 text-xs italic leading-relaxed">
                        "{item.reviewText}"
                      </p>
                      <span className="text-[11px] font-bold text-slate-500 block mt-2">
                        — {item.author}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <LightboxModal
          isOpen={lightboxIndex !== null}
          onClose={() => setLightboxIndex(null)}
          title={activeLightboxItem.title}
          imageSrc={activeLightboxItem.afterImage}
          description={`${activeLightboxItem.location} – ${activeLightboxItem.description}`}
          onPrev={() =>
            setLightboxIndex((prev) =>
              prev === 0 ? filteredReferences.length - 1 : (prev as number) - 1
            )
          }
          onNext={() =>
            setLightboxIndex((prev) =>
              prev === filteredReferences.length - 1 ? 0 : (prev as number) + 1
            )
          }
        />
      )}
    </>
  );
}
