import { SEOHead } from '../components/SEOHead';
import { COMPANY_INFO } from '../data/company';

export function PrivacyPage() {
  return (
    <>
      <SEOHead
        title="Datenschutzerklärung | Nord Glanz Barmstedt"
        description="Datenschutzerklärung der Nord Glanz Gebäude- und Außenreinigung in Barmstedt nach DSGVO."
        path="/datenschutz"
      />

      <section className="py-16 bg-white font-sans">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8 text-slate-700 leading-relaxed text-sm">
          <div className="border-b border-slate-200 pb-6">
            <h1 className="text-3xl font-extrabold text-slate-900 mb-2">
              Datenschutzerklärung
            </h1>
            <p className="text-slate-500 text-xs">Stand: 2026 / DSGVO-konform</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900">1. Datenschutz auf einen Blick</h2>
            <h3 className="font-semibold text-slate-800">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>

            <h3 className="font-semibold text-slate-800">Datenerfassung auf unserer Website</h3>
            <p>
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
              <br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber:
              <br />
              {COMPANY_INFO.legalName}
              <br />
              {COMPANY_INFO.fullAddress}
              <br />
              E-Mail: {COMPANY_INFO.email}
              <br />
              Telefon: {COMPANY_INFO.phone}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900">2. Datenerfassung und Kontaktaufnahme</h2>
            <p>
              Wenn Sie uns per Kontaktformular, E-Mail oder WhatsApp Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            </p>
            <p>
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900">3. Ihre Rechte als betroffene Person</h2>
            <p>
              Sie haben jederzeit das Recht auf kostenfreie Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
            </p>
            <p>
              Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der oben angegebenen Adresse an uns wenden.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
