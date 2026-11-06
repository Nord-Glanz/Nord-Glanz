import { useState } from 'react';
import { RoutePath } from '../types';
import { FAQS_DATA } from '../data/faqs';
import { SEOHead } from '../components/SEOHead';
import {
  HelpCircle,
  Search,
  MessageSquare,
  ChevronRight,
  Phone
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface FAQPageProps {
  onNavigate: (path: RoutePath) => void;
}

export function FAQPage({ onNavigate }: FAQPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'allgemein' | 'glas' | 'stein' | 'ablauf'>('all');

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesQuery =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <>
      <SEOHead
        title="FAQ – Häufige Fragen & Antworten | Nord Glanz"
        description="Antworten auf häufig gestellte Fragen zu Fensterreinigung, Photovoltaik, Steinreinigung, Preisen, Ablauf und Zahlungsarten bei Nord Glanz."
        path="/faq"
      />

      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 font-sans border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center max-w-3xl">
          <span className="text-[#3BC8FF] font-semibold text-xs uppercase tracking-wider bg-[#3BC8FF]/10 px-3.5 py-1.5 rounded-full border border-[#3BC8FF]/20 inline-block mb-3">
            Häufige Fragen ({FAQS_DATA.length} Antworten)
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Fragen &amp; Antworten
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Hier finden Sie Antworten auf alle Fragen rund um unsere Dienstleistungen, Abläufe, Preise und die moderne Reinstwasser-Reinigungstechnik.
          </p>
        </div>
      </section>

      <section className="py-12 bg-slate-50 font-sans min-h-[600px]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Search bar */}
          <div className="relative mb-8">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Suchen nach z.B. 'Regenrinne', 'Büro', 'Photovoltaik', 'Bezahlung'..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 bg-white shadow-sm focus:border-[#1B75D0] focus:ring-2 focus:ring-[#1B75D0]/20 outline-none text-sm text-slate-800"
              id="faq-search-input"
            />
          </div>

          {/* Category Filters */}
          <div className="flex justify-center mb-8 flex-wrap gap-2">
            {[
              { id: 'all', label: `Alle Fragen (${FAQS_DATA.length})` },
              { id: 'glas', label: 'Fenster & Glas' },
              { id: 'stein', label: 'Stein & Fassade' },
              { id: 'ablauf', label: 'Ablauf & Bezahlung' },
              { id: 'allgemein', label: 'Allgemein & Service' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === tab.id
                    ? 'bg-[#1B75D0] text-white shadow-md shadow-[#1B75D0]/25'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* FAQ Accordion List */}
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-3xl border border-slate-200">
              <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-600 font-bold">Keine passende Antwort gefunden?</p>
              <p className="text-slate-400 text-xs mt-1">
                Rufen Sie uns direkt an oder schreiben Sie uns per WhatsApp.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq) => (
                <details
                  key={faq.id}
                  className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm hover:border-[#1B75D0]/30 transition-all group [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex items-center justify-between font-bold text-slate-900 cursor-pointer text-base">
                    <span>{faq.question}</span>
                    <span className="ml-4 transition-transform group-open:rotate-180 text-[#1B75D0] shrink-0">
                      ▼
                    </span>
                  </summary>
                  <p className="text-slate-600 text-sm mt-3 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          )}

          {/* Direct Help Banner */}
          <div className="mt-12 bg-slate-900 text-white p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-bold text-lg mb-1">Ihre Frage war nicht dabei?</h3>
              <p className="text-slate-300 text-xs">
                Wir helfen Ihnen gerne persönlich weiter.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="bg-white text-slate-900 font-bold px-4 py-2.5 rounded-xl text-xs hover:bg-slate-100 transition-colors flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#1B75D0]" />
                <span>Anrufen</span>
              </a>
              <button
                onClick={() => onNavigate('/kontakt')}
                className="bg-[#1B75D0] text-white font-bold px-4 py-2.5 rounded-xl text-xs hover:bg-[#1663b3] transition-colors"
              >
                Anfrage senden
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
