import { useState, useEffect } from 'react';
import { RoutePath } from '../types';
import { COMPANY_INFO } from '../data/company';
import { Logo } from './Logo';
import {
  Phone,
  MessageSquare,
  Sparkles,
  Menu,
  X,
  MapPin,
  Clock,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

interface HeaderProps {
  currentPath: RoutePath;
  onNavigate: (path: RoutePath) => void;
}

export function Header({ currentPath, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; path: RoutePath }[] = [
    { label: 'Startseite', path: '/' },
    { label: 'Leistungen', path: '/leistungen' },
    { label: 'Referenzen', path: '/referenzen' },
    { label: 'Preise', path: '/preise' },
    { label: 'Über uns', path: '/ueber-uns' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Kontakt', path: '/kontakt' }
  ];

  const handleNavClick = (path: RoutePath) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full font-sans transition-all duration-300">
      {/* Top Bar - Contact & Location */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors">
              <MapPin className="w-3.5 h-3.5 text-[#3BC8FF]" />
              <strong className="text-white font-medium">Barmstedt</strong> &amp; 20 km Umkreis
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              {COMPANY_INFO.workingHours}
            </span>
            <span className="hidden lg:flex items-center gap-1 text-[#3BC8FF] bg-[#1B75D0]/20 px-2 py-0.5 rounded-full text-[11px] font-medium border border-[#3BC8FF]/30">
              <ShieldCheck className="w-3 h-3" />
              Erstbesichtigung bis 10 km kostenlos
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="flex items-center gap-1.5 hover:text-[#3BC8FF] transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#1B75D0]" />
              <span className="hidden sm:inline">{COMPANY_INFO.phone}</span>
              <span className="sm:hidden">Anrufen</span>
            </a>
            <span className="text-slate-700">|</span>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappClean}?text=Hallo%20Nord%20Glanz,%20ich%20m%C3%B6chte%20ein%20kostenloses%20Angebot%20anfragen.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-100'
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('/')}
            className="flex items-center text-left group focus:outline-none focus:ring-2 focus:ring-[#1B75D0]/50 rounded-lg p-1 transition-all"
            id="header-logo-button"
          >
            <Logo size={42} showText={true} textColor="text-slate-900" subtextColor="text-slate-500" />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  id={`nav-link-${link.path.replace('/', '') || 'home'}`}
                  className={`px-3.5 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-slate-100 text-[#1B75D0] font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Desktop Call to Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('/kontakt')}
              id="header-cta-button"
              className="bg-[#1B75D0] hover:bg-[#1663b3] text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md shadow-[#1B75D0]/25 transition-all hover:shadow-lg hover:shadow-[#1B75D0]/30 active:scale-[0.98] flex items-center gap-2 group"
            >
              <span>Kostenloses Angebot</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle-button"
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="Menü öffnen"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex justify-end">
          <div className="w-full max-w-sm bg-white h-full shadow-2xl flex flex-col justify-between p-6 overflow-y-auto animate-in slide-in-from-right duration-200">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#1B75D0] to-[#3BC8FF] flex items-center justify-center text-white">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-slate-900 text-lg">Nord Glanz</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                  id="mobile-menu-close-button"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="py-6 flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = currentPath === link.path;
                  return (
                    <button
                      key={link.path}
                      onClick={() => handleNavClick(link.path)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                        isActive
                          ? 'bg-[#1B75D0]/10 text-[#1B75D0] font-semibold'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-4 h-4 opacity-40" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
              <button
                onClick={() => handleNavClick('/kontakt')}
                className="w-full bg-[#1B75D0] text-white py-3 rounded-xl font-semibold text-center shadow-md shadow-[#1B75D0]/20 flex items-center justify-center gap-2"
              >
                <span>Kostenloses Angebot anfordern</span>
              </button>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappClean}?text=Hallo%20Nord%20Glanz,%20ich%20m%C3%B6chte%20ein%20kostenloses%20Angebot%20anfragen.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold text-center shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Nachricht</span>
              </a>
              <div className="text-center pt-2 text-xs text-slate-400">
                Einsatzgebiet: Barmstedt + 20 km Umkreis
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
