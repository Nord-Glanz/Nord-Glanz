import { RoutePath } from '../types';
import { PriceEstimatorSection } from '../components/PriceEstimatorSection';
import { ContactForm } from '../components/ContactForm';
import { SEOHead } from '../components/SEOHead';
import {
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  Phone,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface PricingPageProps {
  onNavigate: (path: RoutePath) => void;
}

export function PricingPage({ onNavigate }: PricingPageProps) {
  return (
    <>
      <SEOHead
        title="Preise & Angebot | Nord Glanz Barmstedt"
        description="Faire Festpreis-Angebote für Glas- & Steinreinigung. Erstbesichtigung bis 10 km kostenlos. Angebot auch anhand von Fotos möglich."
        path="/preise"
      />

      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 font-sans border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center max-w-3xl">
          <span className="text-[#3BC8FF] font-semibold text-xs uppercase tracking-wider bg-[#3BC8FF]/10 px-3.5 py-1.5 rounded-full border border-[#3BC8FF]/20 inline-block mb-3">
            Garantierte Festpreise
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Preise &amp; Unverbindliche Kalkulation
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Warum gibt es bei uns keine sturen Festpreise? Weil jedes Gebäude individuell ist! Sie zahlen nur für die Leistung, die Sie auch wirklich benötigen.
          </p>
        </div>
      </section>

      {/* Main Pricing Explanation Section */}
      <PriceEstimatorSection onNavigate={onNavigate} />

      {/* Contact Form Section on Pricing Page */}
      <section className="py-20 bg-slate-50 font-sans">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Jetzt Festpreis-Angebot anfordern
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Laden Sie Fotos hoch oder beschreiben Sie Ihr Objekt – Sie erhalten Ihr verbindliches Festpreis-Angebot <strong>innerhalb von 48 Stunden</strong>.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
