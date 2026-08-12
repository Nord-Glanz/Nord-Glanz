import { RoutePath } from '../types';
import { COMPANY_INFO } from '../data/company';
import { Logo } from './Logo';
import {
  Sparkles,
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  ArrowUp,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface FooterProps {
  onNavigate: (path: RoutePath) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 font-sans border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand & Philosophy */}
          <div className="space-y-4">
            <button
              onClick={scrollToTop}
              className="flex items-center text-left focus:outline-none group p-0"
              id="footer-logo-button"
            >
              <Logo size={44} showText={true} textColor="text-white" subtextColor="text-slate-400" />
            </button>

            <p className="text-sm text-slate-400 leading-relaxed">
              Ihr Meisterbetrieb-Standard für professionelle Glas-, Stein- und Fassadenreinigung in Barmstedt und Umgebung. Glasklare Ergebnisse &amp; saubere Qualität.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Kostenlose Erstbesichtigung bis 10 km</span>
            </div>
          </div>

          {/* Column 2: Navigation & Pages */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase mb-4 border-l-2 border-[#1B75D0] pl-3">
              Seitenstruktur
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Startseite', path: '/' as RoutePath },
                { label: 'Unsere Leistungen', path: '/leistungen' as RoutePath },
                { label: 'Referenzen & Projekte', path: '/referenzen' as RoutePath },
                { label: 'Preise & Angebot', path: '/preise' as RoutePath },
                { label: 'Über Nord Glanz', path: '/ueber-uns' as RoutePath },
                { label: 'Häufige Fragen (FAQ)', path: '/faq' as RoutePath },
                { label: 'Kontakt & Anfrage', path: '/kontakt' as RoutePath }
              ].map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => onNavigate(item.path)}
                    className="hover:text-[#3BC8FF] transition-colors flex items-center gap-2 text-slate-400 hover:translate-x-0.5 duration-150"
                  >
                    <span className="text-xs text-slate-600">›</span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Schwerpunkte & Leistungen */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase mb-4 border-l-2 border-[#1B75D0] pl-3">
              Schwerpunkte
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {[
                'Fenster- & Glasreinigung',
                'Wintergarten & Glasdächer',
                'Photovoltaikanlagen',
                'Stein- & Pflasterreinigung',
                'Fassaden- & Klinkerreinigung',
                'Carports & Überdachungen',
                'Rahmen & Rollläden',
                'Sonderreinigung (Lotuseffekt)'
              ].map((service, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1B75D0] shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Service Area */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase mb-4 border-l-2 border-[#1B75D0] pl-3">
              Kontakt &amp; Einsatzgebiet
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#3BC8FF] shrink-0 mt-1" />
                <span>{COMPANY_INFO.fullAddress}</span>
              </div>
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="flex items-center gap-3 hover:text-white transition-colors block"
              >
                <Phone className="w-4 h-4 text-[#1B75D0] shrink-0" />
                <span className="font-medium text-white">{COMPANY_INFO.phone}</span>
              </a>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappClean}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-emerald-400 hover:text-emerald-300 transition-colors block"
              >
                <MessageSquare className="w-4 h-4 shrink-0" />
                <span>{COMPANY_INFO.whatsapp} (WhatsApp)</span>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-3 hover:text-white transition-colors block"
              >
                <Mail className="w-4 h-4 text-[#3BC8FF] shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </a>
              <a
                href={COMPANY_INFO.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition-colors block text-[#3BC8FF]"
              >
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>nord-glanz.com</span>
              </a>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-900">
              <span className="text-xs font-medium text-slate-500 block mb-2">
                Einsatzgebiet (ca. 20 km um Barmstedt):
              </span>
              <div className="flex flex-wrap gap-1 text-[11px] text-slate-400">
                {COMPANY_INFO.cities.slice(0, 8).map((city, i) => (
                  <span key={i} className="bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    {city}
                  </span>
                ))}
                <span className="text-slate-500 py-0.5 px-1">u.v.m.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Legal Links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.legalName}. Alle Rechte vorbehalten.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('/impressum')}
              className="hover:text-slate-300 transition-colors"
              id="footer-impressum-link"
            >
              Impressum
            </button>
            <button
              onClick={() => onNavigate('/datenschutz')}
              className="hover:text-slate-300 transition-colors"
              id="footer-datenschutz-link"
            >
              Datenschutz
            </button>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#1B75D0] transition-colors"
              aria-label="Nach oben scrollen"
              id="scroll-to-top-button"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
