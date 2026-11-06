import { useState, useEffect } from 'react';
import { RoutePath } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ReferencesPage } from './pages/ReferencesPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { ImprintPage } from './pages/ImprintPage';
import { TermsPage } from './pages/TermsPage';

export default function App() {
  const getPathFromLocation = (): RoutePath => {
    const path = window.location.pathname as RoutePath;
    const validPaths: RoutePath[] = [
      '/',
      '/leistungen',
      '/referenzen',
      '/preise',
      '/ueber-uns',
      '/faq',
      '/kontakt',
      '/datenschutz',
      '/impressum',
      '/agb'
    ];
    return validPaths.includes(path) ? path : '/';
  };

  const [currentPath, setCurrentPath] = useState<RoutePath>(getPathFromLocation());

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(getPathFromLocation());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: RoutePath) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderContent = () => {
    switch (currentPath) {
      case '/':
        return <HomePage onNavigate={navigateTo} />;
      case '/leistungen':
        return <ServicesPage onNavigate={navigateTo} />;
      case '/referenzen':
        return <ReferencesPage onNavigate={navigateTo} />;
      case '/preise':
        return <PricingPage onNavigate={navigateTo} />;
      case '/ueber-uns':
        return <AboutPage onNavigate={navigateTo} />;
      case '/faq':
        return <FAQPage onNavigate={navigateTo} />;
      case '/kontakt':
        return <ContactPage onNavigate={navigateTo} />;
      case '/datenschutz':
        return <PrivacyPage />;
      case '/impressum':
        return <ImprintPage />;
      case '/agb':
        return <TermsPage />;
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-[#1B75D0] selection:text-white">
      <Header currentPath={currentPath} onNavigate={navigateTo} />
      <main className="flex-1">{renderContent()}</main>
      <Footer onNavigate={navigateTo} />
      <WhatsAppButton />
    </div>
  );
}
