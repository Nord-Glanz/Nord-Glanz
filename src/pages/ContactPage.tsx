import { RoutePath } from '../types';
import { COMPANY_INFO } from '../data/company';
import { ContactForm } from '../components/ContactForm';
import { Timeline } from '../components/Timeline';
import { SEOHead } from '../components/SEOHead';
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (path: RoutePath) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  return (
    <>
      <SEOHead
        title="Kontakt & Angebot | Nord Glanz Barmstedt"
        description="Nehmen Sie direkt Kontakt auf: Telefonisch, per WhatsApp oder über unser Online-Formular mit Foto-Upload für schnelle Festpreis-Angebote."
        path="/kontakt"
      />

      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 font-sans border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center max-w-3xl">
          <span className="text-[#3BC8FF] font-semibold text-xs uppercase tracking-wider bg-[#3BC8FF]/10 px-3.5 py-1.5 rounded-full border border-[#3BC8FF]/20 inline-block mb-3">
            Kontakt &amp; Anfragen
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Wir freuen uns auf Ihre Nachricht
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Ob kostenloses Festpreisangebot, Terminabsprache oder Erstbesichtigung – wählen Sie Ihren bevorzugten Kontaktweg.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {/* Card 1: Phone & WhatsApp */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md">
                <h3 className="font-bold text-slate-900 text-lg mb-4 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-[#1B75D0]" />
                  <span>Direkter Kontakt</span>
                </h3>

                <div className="space-y-4 text-sm">
                  <a
                    href={`tel:${COMPANY_INFO.phoneClean}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#1B75D0]/10 text-[#1B75D0] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">Telefon</span>
                      <strong className="text-slate-900 block">{COMPANY_INFO.phone}</strong>
                    </div>
                  </a>

                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappClean}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">WhatsApp Service</span>
                      <strong className="text-emerald-700 block">{COMPANY_INFO.whatsapp}</strong>
                    </div>
                  </a>

                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#3BC8FF]/10 text-[#1B75D0] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">E-Mail</span>
                      <strong className="text-slate-900 block">{COMPANY_INFO.email}</strong>
                    </div>
                  </a>

                  <a
                    href={COMPANY_INFO.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#1B75D0]/10 text-[#1B75D0] flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">Website</span>
                      <strong className="text-[#1B75D0] block">nord-glanz.com</strong>
                    </div>
                  </a>
                </div>
              </div>

              {/* Card 2: Operating hours & Radius */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md space-y-4">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-500" />
                    <span>Öffnungs- &amp; Bürozeiten</span>
                  </h4>
                  <p className="text-slate-600 text-xs">{COMPANY_INFO.workingHours}</p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#1B75D0]" />
                    <span>Standort &amp; Radius</span>
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed mb-3">
                    {COMPANY_INFO.fullAddress}
                    <br />
                    Einsatzgebiet: ca. 20 km Umkreis.
                  </p>

                  <div className="flex flex-wrap gap-1 text-[11px] text-slate-600">
                    {COMPANY_INFO.cities.map((city, idx) => (
                      <span key={idx} className="bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Form Area */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <Timeline />
    </>
  );
}
