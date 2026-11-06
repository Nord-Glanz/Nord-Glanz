import { RoutePath } from '../types';
import { APP_IMAGES, PLACEHOLDER_IMAGES } from '../data/images';
import { COMPANY_INFO } from '../data/company';
import { SERVICES_DATA } from '../data/services';
import { FAQS_DATA } from '../data/faqs';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { GoogleReviewsSection } from '../components/GoogleReviewsSection';
import { Timeline } from '../components/Timeline';
import { SEOHead } from '../components/SEOHead';
import {
  Sparkles,
  MessageSquare,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Star,
  Phone,
  ArrowRight,
  HelpCircle,
  MapPin,
  Building2,
  Award,
  ThumbsUp,
  Droplets
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: RoutePath) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <SEOHead
        title="Professionelle Glas- & Steinreinigung Schleswig-Holstein & Hamburg"
        description="Nord Glanz ist Ihr Spezialist für Fensterreinigung, Büroreinigung, Photovoltaik, Stein- und Fassadenreinigung in Schleswig-Holstein und Hamburg. Jetzt kostenloses Angebot anfragen!"
        path="/"
      />

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden font-sans">
        {/* Hero Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0 opacity-40">
          <picture className="block w-full h-full">
            <source media="(min-width: 1024px)" srcSet={APP_IMAGES.heroHouse} />
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='9'%3E%3Crect width='100%25' height='100%25' fill='%23ffffff'/%3E%3C/svg%3E"
              alt="Professionelle Glasreinigung Schleswig-Holstein Hamburg Nord Glanz"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover bg-white"
            />
          </picture>
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#020617_0%,rgba(15,23,42,0.92)_62%,rgba(15,23,42,0.4)_100%)] sm:bg-[linear-gradient(to_right,#020617_0%,rgba(15,23,42,0.92)_calc(max(1.5rem,(100%_-_80rem)_/_2_+_1.5rem)_+_16.75rem),rgba(15,23,42,0.4)_100%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            {/* Trust Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B75D0]/30 border border-[#3BC8FF]/40 text-[#3BC8FF] text-xs font-semibold mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#3BC8FF]" />
              <span>Gebäude- &amp; Außenreinigung in Schleswig-Holstein &amp; Hamburg</span>
            </div>

            {/* Main Hero Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6 sm:max-w-2xl">
              Professionelle Glas-
              <br className="hidden sm:inline" />{' '}
              und Steinreinigung in
              <br className="hidden sm:inline" />{' '}
              <span className="text-[#3BC8FF] underline decoration-[#1B75D0] underline-offset-8">
                Schleswig-Holstein
                <br className="hidden sm:inline" />{' '}
                und Hamburg
              </span>
              .
            </h1>

            {/* Subtitle */}
            <p className="text-slate-200 text-lg sm:text-xl font-normal leading-relaxed mb-8 max-w-lg">
              Für Privat und Gewerbe. Glasklare Ergebnisse, saubere Qualität und schonende Reinstwasser-Technologie für Ihre Immobilie.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
              <button
                onClick={() => onNavigate('/kontakt')}
                id="hero-cta-offer"
                className="bg-[#1B75D0] hover:bg-[#1663b3] text-white font-bold text-base px-8 py-4 rounded-2xl shadow-xl shadow-[#1B75D0]/30 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group"
              >
                <span>Kostenloses Angebot</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappClean}?text=Hallo%20Nord%20Glanz,%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Reinigung.`}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-whatsapp"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base px-8 py-4 rounded-2xl shadow-xl shadow-emerald-600/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2.5"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp schreiben</span>
              </a>
            </div>

            {/* Hero Trust Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-800/80 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span><strong>5,0 Sterne</strong> (12 Google Rezensionen)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Einsatz in ganz SH &amp; Hamburg</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Zufriedenheitsgarantie</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Grid Section */}
      <section className="py-20 bg-slate-50 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <span className="text-[#1B75D0] font-semibold text-xs uppercase tracking-wider bg-[#1B75D0]/10 px-3.5 py-1.5 rounded-full border border-[#1B75D0]/20 inline-block mb-3">
                Unsere Schwerpunkte
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Erstklassige Reinigung für Ihr Gebäude
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/kontakt')}
              className="text-[#1B75D0] hover:text-[#1663b3] font-bold text-sm flex items-center gap-1.5 hover:gap-2 transition-all self-start md:self-auto group"
            >
              <span>Angebot für Ihre Reinigung anfragen</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.filter((s) => s.featured).map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl hover:border-[#1B75D0]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-slate-700">
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

                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {service.benefits.slice(0, 3).map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Nord Glanz - Philosophy & USPs */}
      <section className="py-20 bg-white font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image side */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
                <img
                  src={APP_IMAGES.gruenderTeam}
                  alt="Die Gründer von Nord Glanz: T. Cords & M. vom Endt"
                  referrerPolicy="no-referrer"
                  className="w-full h-[460px] object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:flex bg-slate-900 text-white p-5 rounded-2xl shadow-2xl max-w-xs border border-slate-800">
                <div className="flex items-start gap-3.5">
                  <Award className="w-7 h-7 text-[#3BC8FF] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-white">vom Endt &amp; Cords GbR</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      Inhabergeführt, persönlich &amp; mit vollem Einsatz vor Ort bei Ihnen.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content side */}
            <div>
              <span className="text-[#1B75D0] font-semibold text-xs uppercase tracking-wider bg-[#1B75D0]/10 px-3.5 py-1.5 rounded-full border border-[#1B75D0]/20 inline-block mb-3">
                Persönlich vor Ort im Einsatz
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                Warum Kunden in Schleswig-Holstein &amp; Hamburg auf Nord Glanz vertrauen
              </h2>

              <p className="text-slate-600 text-base leading-relaxed mb-8">
                Hinter Nord Glanz stehen wir als Inhaber: <strong>T. Cords &amp; M. vom Endt</strong>. Bei uns gibt es keine anonymen Callcenter oder wechselnde Subunternehmer – wir beraten Sie persönlich, planen transparent und sorgen mit modernster Reinigungstechnik für glasklare Ergebnisse an Ihrem Gebäude.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {COMPANY_INFO.usps.map((usp, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#1B75D0]/10 text-[#1B75D0] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">{usp.title}</h4>
                      <p className="text-slate-600 text-xs leading-relaxed">{usp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
                <button
                  onClick={() => onNavigate('/ueber-uns')}
                  className="bg-slate-900 text-white font-semibold px-6 py-3 rounded-xl text-sm hover:bg-slate-800 transition-colors"
                >
                  Mehr über uns erfahren
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Before/After Comparison */}
      <section className="py-20 bg-slate-900 text-white font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#3BC8FF] font-semibold text-xs uppercase tracking-wider bg-[#3BC8FF]/10 px-3.5 py-1.5 rounded-full border border-[#3BC8FF]/20 inline-block mb-3">
              Ergebnisse im direkten Vergleich
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Sehen Sie den Unterschied selbst
            </h2>
            <p className="text-slate-300 text-sm mt-3">
              Ziehen Sie den Regler nach links und rechts, um die Wirkung unserer professionellen Stein- und Glasreinigung zu testen.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <BeforeAfterSlider
              beforeImage={PLACEHOLDER_IMAGES.terraceDirty}
              afterImage={APP_IMAGES.steinterrasse}
              beforeLabel="Vorher (Moos & Bewuchs)"
              afterLabel="Nachher (Nord Glanz Steinreinigung)"
              className="h-[350px] sm:h-[480px]"
            />
          </div>
        </div>
      </section>

      {/* Process Workflow Timeline */}
      <Timeline />

      {/* Google Rezensionen Section */}
      <GoogleReviewsSection />

      {/* FAQ Preview */}
      <section className="py-20 bg-white font-sans">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-[#1B75D0] font-semibold text-xs uppercase tracking-wider bg-[#1B75D0]/10 px-3.5 py-1.5 rounded-full border border-[#1B75D0]/20 inline-block mb-3">
              Häufig gestellte Fragen
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Antworten auf die wichtigsten Fragen
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS_DATA.slice(0, 5).map((faq) => (
              <details
                key={faq.id}
                className="bg-slate-50 rounded-2xl border border-slate-200/80 p-5 group [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between font-bold text-slate-900 cursor-pointer text-base">
                  <span>{faq.question}</span>
                  <span className="ml-4 transition-transform group-open:rotate-180 text-[#1B75D0]">
                    ▼
                  </span>
                </summary>
                <p className="text-slate-600 text-sm mt-3 leading-relaxed border-t border-slate-200/60 pt-3">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => onNavigate('/faq')}
              className="inline-flex items-center gap-2 text-[#1B75D0] font-bold text-sm hover:underline"
            >
              <span>Alle {FAQS_DATA.length} Fragen im FAQ-Bereich ansehen</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-[#1B75D0] to-slate-900 text-white font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Bereit für glasklare Sauberkeit?
          </h2>
          <p className="text-slate-200 max-w-xl mx-auto text-base mb-8">
            Sichern Sie sich jetzt Ihr kostenloses Festpreisangebot. Wir sind in ganz Schleswig-Holstein und Hamburg für Sie im Einsatz.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('/kontakt')}
              className="w-full sm:w-auto bg-white text-[#1B75D0] hover:bg-slate-100 font-bold px-8 py-4 rounded-2xl shadow-xl transition-all text-base"
              id="final-cta-offer"
            >
              Kostenloses Angebot anfragen
            </button>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappClean}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-2xl shadow-xl transition-all text-base flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Direkt WhatsApp schreiben</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
