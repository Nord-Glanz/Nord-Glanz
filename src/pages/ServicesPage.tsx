import { useState } from 'react';
import { RoutePath, ServiceItem } from '../types';
import { SERVICES_DATA } from '../data/services';
import { SEOHead } from '../components/SEOHead';
import {
  CheckCircle2,
  ChevronRight,
  Sparkles,
  MapPin,
  ArrowRight,
  Info,
  X,
  MessageSquare
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (path: RoutePath) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'glas' | 'stein' | 'sonder'>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const filteredServices = SERVICES_DATA.filter((s) => {
    if (activeCategory === 'all') return true;
    return s.category === activeCategory;
  });

  return (
    <>
      <SEOHead
        title="Leistungen | Gebäude- & Außenreinigung Barmstedt"
        description="Alle Reinigungsleistungen von Nord Glanz: Fensterreinigung, Unterhalts- & Büroreinigung, Photovoltaik, Stein- & Pflasterreinigung, Fassadenreinigung, Überdachungsreinigung & Regenrinnenreinigung."
        path="/leistungen"
      />

      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 font-sans border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center max-w-3xl">
          <span className="text-[#3BC8FF] font-semibold text-xs uppercase tracking-wider bg-[#3BC8FF]/10 px-3.5 py-1.5 rounded-full border border-[#3BC8FF]/20 inline-block mb-3">
            Unser Leistungsspektrum
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Professionelle Gebäude- &amp; Außenreinigung
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Hochwertige Handwerksqualität für Privat- und Gewerbeobjekte in ganz Schleswig-Holstein und Hamburg. Reinstwasser-Technologie, Oberflächenschonung und transparente Festpreise.
          </p>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="py-12 bg-slate-50 font-sans min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-center mb-10 flex-wrap gap-2">
            {[
              { id: 'all', label: `Alle Leistungen (${SERVICES_DATA.length})` },
              { id: 'glas', label: 'Glas- & Fensterreinigung' },
              { id: 'stein', label: 'Stein- & Fassadenreinigung' },
              { id: 'sonder', label: 'Büro, Treppenhaus, Textil & Dachrinnen' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                  activeCategory === tab.id
                    ? 'bg-[#1B75D0] text-white shadow-md shadow-[#1B75D0]/25'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full border border-slate-700">
                      {service.id === 'unterhaltsreinigung'
                        ? 'Gewerbe & Büro'
                        : service.id === 'regenrinnenreinigung'
                        ? 'Dach & Rinne'
                        : service.id === 'treppenhausreinigung'
                        ? 'Treppenhaus & Service'
                        : service.id === 'teppichreinigung'
                        ? 'Textil & Polster'
                        : service.category === 'glas'
                        ? 'Glas & Fenster'
                        : 'Stein & Fassade'}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#1B75D0] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>

                    <div className="space-y-1 mb-4">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                        Ihre Vorteile:
                      </span>
                      {service.benefits.map((b, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 flex items-center gap-2 mt-2">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-2.5 rounded-xl text-xs transition-colors"
                  >
                    Details &amp; FAQ
                  </button>
                  <button
                    onClick={() => onNavigate('/kontakt')}
                    className="flex-1 bg-[#1B75D0] hover:bg-[#1663b3] text-white font-semibold py-2.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-1"
                  >
                    <span>Anfragen</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white max-w-3xl w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200 my-8">
            <div className="relative h-64 sm:h-72">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 bg-slate-900/80 text-white p-2 rounded-full hover:bg-slate-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[#3BC8FF] font-semibold text-xs uppercase tracking-wider block mb-1">
                  Detailinformationen
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold">{selectedService.title}</h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-2">Beschreibung:</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{selectedService.fullDesc}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-2">Vorteile auf einen Blick:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-2">Typische Einsatzorte:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.applicationAreas.map((area, i) => (
                    <span key={i} className="bg-blue-50 text-[#1B75D0] text-xs font-medium px-3 py-1 rounded-full border border-blue-100">
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {selectedService.faqs.length > 0 && (
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-2">Häufige Fragen zu dieser Leistung:</h4>
                  <div className="space-y-3">
                    {selectedService.faqs.map((f, i) => (
                      <div key={i} className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                        <p className="font-semibold text-slate-900 text-xs mb-1">Q: {f.question}</p>
                        <p className="text-slate-600 text-xs leading-relaxed">A: {f.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Kostenlose &amp; unverbindliche Erstbesichtigung in Schleswig-Holstein &amp; Hamburg.
              </span>
              <button
                onClick={() => {
                  setSelectedService(null);
                  onNavigate('/kontakt');
                }}
                className="w-full sm:w-auto bg-[#1B75D0] hover:bg-[#1663b3] text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-md shadow-[#1B75D0]/20"
              >
                Jetzt Angebot anfragen
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
