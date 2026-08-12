import { RoutePath } from '../types';
import { COMPANY_INFO } from '../data/company';
import { APP_IMAGES } from '../data/images';
import { SEOHead } from '../components/SEOHead';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Award,
  Droplets,
  HeartHandshake,
  Clock,
  MapPin,
  ChevronRight
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: RoutePath) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <>
      <SEOHead
        title="Über uns | Nord Glanz Barmstedt"
        description="Lernen Sie Nord Glanz kennen: Ihr regionaler Spezialist für Gebäude- und Außenreinigung in Barmstedt mit Reinstwasser-Technologie."
        path="/ueber-uns"
      />

      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 font-sans border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center max-w-3xl">
          <span className="text-[#3BC8FF] font-semibold text-xs uppercase tracking-wider bg-[#3BC8FF]/10 px-3.5 py-1.5 rounded-full border border-[#3BC8FF]/20 inline-block mb-3">
            Qualität aus Barmstedt
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Über Nord Glanz
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Glasklare Ergebnisse, ehrliches Handwerk und freundlicher Service im Raum Barmstedt und ca. 20 km Umkreis.
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-white font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#1B75D0] font-semibold text-xs uppercase tracking-wider bg-[#1B75D0]/10 px-3.5 py-1.5 rounded-full border border-[#1B75D0]/20 inline-block mb-3">
                Unsere Mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                Saubere Arbeit, auf die Sie sich verlassen können
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                <strong>{COMPANY_INFO.legalName}</strong> wurde mit einem klaren Ziel gegründet: Hausbesitzern, Gewerbetreibenden und Wohnungsverwaltungen in Barmstedt und Umgebung einen verlässlichen, hochklassigen Reinigungs-Service zu bieten, der durch sichtbare Präzision überzeugt.
              </p>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                Egal ob verstaubte Fenster im Obergeschoss, verschmutzte Solarmodule oder von Moos überzogene Steinterrassen – wir bringen die ursprüngliche Schönheit Ihrer Immobilie schonend zurück.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1B75D0] flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Regionale Nähe</h4>
                    <p className="text-slate-500 text-xs">Schnelle Wege in Barmstedt</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Faire Festpreise</div>
                    <p className="text-slate-500 text-xs">Ohne versteckte Kosten</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <img
                  src={APP_IMAGES.heroHouse}
                  alt="Nord Glanz Qualitätsreinigung"
                  referrerPolicy="no-referrer"
                  className="w-full h-[480px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Cleaning Technology */}
      <section className="py-20 bg-slate-50 font-sans border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#1B75D0] font-semibold text-xs uppercase tracking-wider bg-[#1B75D0]/10 px-3.5 py-1.5 rounded-full border border-[#1B75D0]/20 inline-block mb-3">
              Moderne Ausrüstung
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Unsere Reinigungstechnik
            </h2>
            <p className="text-slate-600 text-base mt-3">
              Für maximale Sauberkeit bei vollster Schonung aller Bausubstanzen nutzen wir Spitzen-Equipment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-[#1B75D0] flex items-center justify-center mb-6">
                <Droplets className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Reinstwasser (Osmose)</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Entmineralisiertes Wasser zieht Schmutz wie ein Magnet an und trocknet vollkommen streifen- und rückstandsfrei von selbst ab – ohne aggressive Chemie.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-[#3BC8FF]/10 text-[#1B75D0] flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Carbon-Teleskopstangen</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Ermöglichen das problemlose Erreichen von bis zu 15 Meter Höhe. Damit reinigen wir Glasdächer und PV-Anlagen sicher vom Boden aus.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Regulierbare Flächenreiniger</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Verhindert das Auswaschen oder Beschädigen der Steinoberflächen. Dreck wird gelöst, ohne Schmutzwasserspritzer an Wänden zu hinterlassen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900 text-white font-sans text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4">
            Lernen Sie uns persönlich kennen
          </h2>
          <p className="text-slate-300 text-sm mb-8">
            Wir beraten Sie gerne unverbindlich vor Ort oder am Telefon.
          </p>
          <button
            onClick={() => onNavigate('/kontakt')}
            className="bg-[#1B75D0] hover:bg-[#1663b3] text-white font-bold px-8 py-4 rounded-2xl shadow-xl transition-all text-sm inline-flex items-center gap-2"
          >
            <span>Jetzt Kontakt aufnehmen</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </>
  );
}
