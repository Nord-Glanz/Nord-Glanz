import { RoutePath } from '../types';
import { COMPANY_INFO } from '../data/company';
import {
  ShieldCheck,
  Camera,
  MapPin,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  Euro
} from 'lucide-react';

interface PriceEstimatorSectionProps {
  onNavigate: (path: RoutePath) => void;
}

export function PriceEstimatorSection({ onNavigate }: PriceEstimatorSectionProps) {
  return (
    <section className="py-20 bg-slate-900 text-slate-100 font-sans relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1B75D0]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3BC8FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#3BC8FF] font-semibold text-xs uppercase tracking-wider bg-[#3BC8FF]/10 px-3.5 py-1.5 rounded-full border border-[#3BC8FF]/20 inline-block mb-3">
            Faire &amp; Unverbindliche Preisfindung
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Transparente Festpreise ohne böse Überraschungen
          </h2>
          <p className="text-slate-300 text-base mt-3 leading-relaxed">
            Keine versteckten Kosten oder Pauschalen. Wir kalkulieren jedes Objekt individuell nach Reinigungsaufwand, Material und Fläche.
          </p>
        </div>

        {/* 3 Main Pricing Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Card 1: Free visit */}
          <div className="bg-slate-800/80 backdrop-blur-md rounded-3xl p-8 border border-slate-700/80 hover:border-[#3BC8FF]/50 transition-all shadow-xl flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#1B75D0]/20 border border-[#1B75D0]/40 text-[#3BC8FF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Erstbesichtigung
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Wir bieten Ihnen eine fachgerechte Erstbesichtigung vor Ort, erfassen alle Flächen und erstellen ein verbindliches Festpreisangebot – im Umkreis von 10 km um unseren Standort vollkommen kostenlos.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-slate-300 border-t border-slate-700/60 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Kostenlose Erstbesichtigung im Umkreis von 10 km</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Persönliche Beratung &amp; Aufmaß vor Ort</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Photo Quote */}
          <div className="bg-gradient-to-b from-[#1B75D0]/30 to-slate-800/90 backdrop-blur-md rounded-3xl p-8 border border-[#1B75D0]/60 shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <span className="absolute top-4 right-4 bg-emerald-500 text-slate-950 font-extrabold text-[10px] uppercase px-2.5 py-1 rounded-full">
              Schnellste Option
            </span>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Camera className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Angebot anhand von Fotos
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Senden Sie uns einfach 2-3 Smartphone-Fotos des Objekts per WhatsApp oder Formular. Sie erhalten garantiert <strong>innerhalb von 48 Stunden</strong> ein verbindliches Festpreis-Angebot.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-slate-300 border-t border-slate-700/60 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Angebot erhalten innerhalb von 48 Std.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Direkt per WhatsApp oder E-Mail</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Tax Benefit */}
          <div className="bg-slate-800/80 backdrop-blur-md rounded-3xl p-8 border border-slate-700/80 hover:border-[#3BC8FF]/50 transition-all shadow-xl flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Euro className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Steuerlich absetzbar (20%)
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Privathaushalte können 20% der Lohnkosten als haushaltsnahe Dienstleistung direkt von der Einkommensteuer abziehen (bis zu 4.000 € sparen).
              </p>
            </div>
            <ul className="space-y-2 text-xs text-slate-300 border-t border-slate-700/60 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Ordentliche Rechnung</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Anerkannt beim Finanzamt</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Banner inside price section */}
        <div className="bg-gradient-to-r from-[#1B75D0] to-[#0F172A] rounded-3xl p-8 sm:p-10 border border-[#3BC8FF]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-2xl font-bold text-white">
              Bereit für glasklares Wunschergebnis?
            </h3>
            <p className="text-slate-300 text-sm">
              Anfrage in unter 2 Minuten ausfüllen oder direkt per Telefon sprechen.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => onNavigate('/kontakt')}
              className="w-full sm:w-auto bg-white text-[#1B75D0] hover:bg-slate-100 font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all text-sm flex items-center justify-center gap-2"
              id="price-estimator-cta-button"
            >
              <span>Jetzt Angebot anfragen</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="w-full sm:w-auto bg-slate-800 text-white hover:bg-slate-700 border border-slate-600 font-semibold px-6 py-3.5 rounded-xl transition-all text-sm flex items-center justify-center gap-2"
            >
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
