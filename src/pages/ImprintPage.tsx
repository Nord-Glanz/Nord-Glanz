import { SEOHead } from '../components/SEOHead';
import { COMPANY_INFO } from '../data/company';

export function ImprintPage() {
  return (
    <>
      <SEOHead
        title="Impressum | Nord Glanz Barmstedt"
        description="Impressum der Nord Glanz Gebäude- und Außenreinigung in Barmstedt nach § 5 TDDDG."
        path="/impressum"
      />

      <section className="py-16 bg-white font-sans">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8 text-slate-700 leading-relaxed text-sm">
          <div className="border-b border-slate-200 pb-6">
            <h1 className="text-3xl font-extrabold text-slate-900 mb-2">
              Impressum
            </h1>
            <p className="text-slate-500 text-xs">Angaben gemäß § 5 TDDDG / DDG</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900">Dienstanbieter</h2>
            <p>
              <strong>{COMPANY_INFO.legalName}</strong>
              <br />
              {COMPANY_INFO.fullAddress}
              <br />
              Deutschland
            </p>

            <h2 className="text-lg font-bold text-slate-900 mt-6">Vertretungsberechtigte Gesellschafter</h2>
            <p>Vertreten durch die Gesellschafter {COMPANY_INFO.owner}</p>

            <h2 className="text-lg font-bold text-slate-900 mt-6">Kontakt</h2>
            <p>
              Telefon: <a href={`tel:${COMPANY_INFO.phoneClean}`} className="hover:underline text-[#1B75D0]">{COMPANY_INFO.phone}</a>
              <br />
              WhatsApp: <a href={`https://wa.me/${COMPANY_INFO.whatsappClean}`} target="_blank" rel="noopener noreferrer" className="hover:underline text-emerald-600">{COMPANY_INFO.whatsapp}</a>
              <br />
              E-Mail: <a href={`mailto:${COMPANY_INFO.email}`} className="hover:underline text-[#1B75D0]">{COMPANY_INFO.email}</a>
              <br />
              Website: <a href={COMPANY_INFO.website} target="_blank" rel="noopener noreferrer" className="hover:underline text-[#1B75D0]">{COMPANY_INFO.website}</a>
            </p>

            <h2 className="text-lg font-bold text-slate-900 mt-6">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              <br />
              DE 341 892 014 (Muster-ID)
            </p>

            <h2 className="text-lg font-bold text-slate-900 mt-6">Berufshaftpflichtversicherung</h2>
            <p>
              Betriebshaftpflichtversicherung für Gebäude- und Außenreinigung mit weltweiter Deckung bei der Allianz Versicherungs-AG.
            </p>

            <h2 className="text-lg font-bold text-slate-900 mt-6">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              <br />
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1B75D0] underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              <br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
