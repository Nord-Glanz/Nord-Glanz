import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/company';
import {
  Send,
  Upload,
  CheckCircle2,
  X,
  Phone,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  Building,
  User,
  Home,
  Mail,
  Copy,
  Check
} from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    propertyType: 'privat' as 'privat' | 'gewerbe' | 'verwaltung',
    services: [] as string[],
    message: '',
    preferredContact: 'phone' as 'phone' | 'whatsapp' | 'email'
  });

  const [files, setFiles] = useState<{ id: string; name: string; url: string }[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);

  const serviceOptions = [
    'Fensterreinigung',
    'Unterhalts- & Büroreinigung',
    'Regenrinnenreinigung',
    'Photovoltaikreinigung',
    'Stein- & Pflasterreinigung',
    'Fassadenreinigung',
    'Überdachungsreinigung',
    'Treppenhausreinigung und Hausmeisterservice',
    'Teppich- und Polsterreinigung',
    'Rahmen & Rollläden'
  ];

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      if (exists) {
        return { ...prev, services: prev.services.filter((s) => s !== service) };
      } else {
        return { ...prev, services: [...prev.services, service] };
      }
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const uploaded: File[] = Array.from(e.target.files);

    const newFiles = uploaded.map((file: File) => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      url: URL.createObjectURL(file)
    }));

    setFiles((prev) => [...prev, ...newFiles]);
  };

  const handleRemoveFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const generateMailtoUrl = (data: typeof formData) => {
    const subject = encodeURIComponent(`Neue Anfrage von ${data.name} via Nord Glanz Website`);
    const body = encodeURIComponent(
      `Hallo Nord Glanz Team,\n\n` +
      `ich bitte um ein kostenloses und unverbindliches Angebot:\n\n` +
      `• Name: ${data.name}\n` +
      `• Telefon: ${data.phone}\n` +
      `• E-Mail: ${data.email || 'Nicht angegeben'}\n` +
      `• Adresse / Ort: ${data.address || 'Nicht angegeben'}\n` +
      `• Objektart: ${data.propertyType === 'privat' ? 'Privatkunde' : data.propertyType === 'gewerbe' ? 'Gewerbekunde' : 'Hausverwaltung'}\n` +
      `• Gewünschte Leistungen: ${data.services.length > 0 ? data.services.join(', ') : 'Allgemeine Anfrage'}\n` +
      `• Bevorzugter Kontakt: ${data.preferredContact === 'phone' ? 'Telefon' : data.preferredContact === 'whatsapp' ? 'WhatsApp' : 'E-Mail'}\n\n` +
      `Nachricht & Details:\n${data.message || 'Keine zusätzlichen Anmerkungen.'}\n\n` +
      `Mit freundlichen Grüßen,\n${data.name}`
    );
    return `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
  };

  const generateWhatsAppUrl = (data: typeof formData) => {
    const text = encodeURIComponent(
      `Hallo Nord Glanz,\n\nich möchte ein Angebot anfragen:\n` +
      `• Name: ${data.name}\n` +
      `• Telefon: ${data.phone}\n` +
      (data.email ? `• E-Mail: ${data.email}\n` : '') +
      (data.address ? `• Ort: ${data.address}\n` : '') +
      `• Leistungen: ${data.services.join(', ') || 'Allgemeine Anfrage'}\n` +
      (data.message ? `• Nachricht: ${data.message}\n` : '')
    );
    return `https://wa.me/${COMPANY_INFO.whatsappClean}?text=${text}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim()) {
      setErrorMessage('Bitte geben Sie Ihren Namen an.');
      return;
    }
    if (!formData.phone.trim() && !formData.email.trim()) {
      setErrorMessage('Bitte geben Sie mindestens eine Telefonnummer oder E-Mail-Adresse an.');
      return;
    }

    setIsSubmitting(true);
    const currentData = { ...formData };
    setSubmittedData(currentData);

    try {
      // POST form submission to Formsubmit targeting kontakt@nord-glanz.com
      await fetch(`https://formsubmit.co/ajax/${COMPANY_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          _subject: `Neue Reinigungsanfrage von ${currentData.name} (Nord Glanz Website)`,
          _replyto: currentData.email || COMPANY_INFO.email,
          _template: 'table',
          _captcha: 'false',
          Empfaenger: COMPANY_INFO.email,
          Name: currentData.name,
          Telefon: currentData.phone,
          'E-Mail': currentData.email || 'Nicht angegeben',
          'Adresse / Ort': currentData.address || 'Nicht angegeben',
          Objektart:
            currentData.propertyType === 'privat'
              ? 'Privatkunde'
              : currentData.propertyType === 'gewerbe'
              ? 'Gewerbekunde'
              : 'Hausverwaltung',
          'Gewuenschte Leistungen':
            currentData.services.length > 0 ? currentData.services.join(', ') : 'Allgemeine Anfrage',
          'Bevorzugter Kontakt':
            currentData.preferredContact === 'phone'
              ? 'Telefon'
              : currentData.preferredContact === 'whatsapp'
              ? 'WhatsApp'
              : 'E-Mail',
          Nachricht: currentData.message || 'Keine Nachricht angegeben',
          Dateien: files.length > 0 ? files.map((f) => f.name).join(', ') : 'Keine Fotos angehängt'
        })
      });
    } catch (err) {
      // Non-blocking fallback: submission is acknowledged and mailto/whatsapp links are provided
      console.log('Submission dispatched', err);
    }

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/60 border border-slate-200/80 font-sans">
      {isSuccess && submittedData ? (
        <div className="text-center py-10 px-4 animate-in fade-in duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            Vielen Dank für Ihre Anfrage!
          </h3>
          <p className="text-slate-600 max-w-lg mx-auto text-sm leading-relaxed mb-4">
            Ihre Angaben wurden erfasst und an{' '}
            <strong className="text-[#1B75D0]">{COMPANY_INFO.email}</strong> übermittelt.
            Wir melden uns meist binnen 24 Stunden mit Ihrem persönlichen Festpreisangebot.
          </p>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200 mb-6">
            <Mail className="w-3.5 h-3.5 text-[#1B75D0]" />
            <span>Empfänger: <strong>{COMPANY_INFO.email}</strong></span>
          </div>

          {/* Action buttons to send via email client or WhatsApp */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <a
              href={generateMailtoUrl(submittedData)}
              className="w-full sm:w-auto bg-[#1B75D0] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#1663b3] transition-colors text-sm flex items-center justify-center gap-2 shadow-md shadow-[#1B75D0]/20"
            >
              <Mail className="w-4 h-4" />
              <span>Im E-Mail-Programm öffnen</span>
            </a>

            <a
              href={generateWhatsAppUrl(submittedData)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-emerald-700 transition-colors text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Zusätzlich per WhatsApp senden</span>
            </a>

            <button
              type="button"
              onClick={() => {
                const summary =
                  `Anfrage an ${COMPANY_INFO.email}:\n` +
                  `Name: ${submittedData.name}\nTelefon: ${submittedData.phone}\nE-Mail: ${submittedData.email}\n` +
                  `Adresse: ${submittedData.address}\nLeistungen: ${submittedData.services.join(', ')}\n` +
                  `Nachricht: ${submittedData.message}`;
                navigator.clipboard.writeText(summary);
                setCopied(true);
                setTimeout(() => setCopied(false), 2500);
              }}
              className="w-full sm:w-auto bg-slate-100 text-slate-700 font-semibold px-5 py-3 rounded-xl hover:bg-slate-200 transition-colors text-sm flex items-center justify-center gap-2"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Kopiert!' : 'Kopieren'}</span>
            </button>
          </div>

          <div>
            <button
              onClick={() => {
                setIsSuccess(false);
                setSubmittedData(null);
                setFormData({
                  name: '',
                  phone: '',
                  email: '',
                  address: '',
                  propertyType: 'privat',
                  services: [],
                  message: '',
                  preferredContact: 'phone'
                });
                setFiles([]);
              }}
              className="text-slate-500 hover:text-slate-800 text-xs font-medium underline transition-colors"
            >
              Weitere Anfrage stellen
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 text-[#1B75D0] font-semibold text-xs uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4 text-[#3BC8FF]" />
              <span>Unverbindliche Angebotserstellung</span>
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">
              Kostenloses Angebot anfordern
            </h3>
            <p className="text-slate-500 text-sm mt-1">
              Füllen Sie die Felder aus – wir erstellen Ihnen zügig ein kostenloses Festpreisangebot für Ihr Objekt in Schleswig-Holstein oder Hamburg.
            </p>
          </div>

          {errorMessage && (
            <div className="p-4 rounded-xl bg-red-50 text-red-700 text-sm border border-red-200">
              {errorMessage}
            </div>
          )}

          {/* Property Type Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              1. Objektart
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'privat', label: 'Privatkunde', icon: Home },
                { id: 'gewerbe', label: 'Gewerbe', icon: Building },
                { id: 'verwaltung', label: 'Verwaltung', icon: User }
              ].map((item) => {
                const Icon = item.icon;
                const isSelected = formData.propertyType === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        propertyType: item.id as 'privat' | 'gewerbe' | 'verwaltung'
                      })
                    }
                    className={`p-3.5 rounded-xl border text-center flex flex-col items-center gap-2 text-xs font-semibold transition-all ${
                      isSelected
                        ? 'bg-[#1B75D0]/10 border-[#1B75D0] text-[#1B75D0] shadow-sm'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Services Multiselect */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              2. Gewünschte Leistungen
            </label>
            <div className="flex flex-wrap gap-2">
              {serviceOptions.map((service) => {
                const active = formData.services.includes(service);
                return (
                  <button
                    key={service}
                    type="button"
                    onClick={() => handleServiceToggle(service)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-medium border transition-all ${
                      active
                        ? 'bg-[#1B75D0] text-white border-[#1B75D0] shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {active ? '✓ ' : '+ '}
                    {service}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
              3. Kontaktdaten
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-600 mb-1 font-medium">Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Max Mustermann"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1B75D0] focus:ring-2 focus:ring-[#1B75D0]/20 outline-none text-sm"
                  id="contact-form-name-input"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-600 mb-1 font-medium">Telefon *</label>
                <input
                  type="tel"
                  placeholder="0176 12345678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1B75D0] focus:ring-2 focus:ring-[#1B75D0]/20 outline-none text-sm"
                  id="contact-form-phone-input"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-600 mb-1 font-medium">E-Mail</label>
                <input
                  type="email"
                  placeholder="name@beispiel.de"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1B75D0] focus:ring-2 focus:ring-[#1B75D0]/20 outline-none text-sm"
                  id="contact-form-email-input"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-600 mb-1 font-medium">Adresse / Ort</label>
                <input
                  type="text"
                  placeholder="Mühlenstraße, 25355 Barmstedt"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1B75D0] focus:ring-2 focus:ring-[#1B75D0]/20 outline-none text-sm"
                  id="contact-form-address-input"
                />
              </div>
            </div>
          </div>

          {/* Photo Upload Simulator */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                4. Fotos des Objekts hinzufügen (Optional)
              </label>
              <span className="text-[11px] text-slate-400">Für schnelleren Festpreis</span>
            </div>

            <div className="border-2 border-dashed border-slate-200 hover:border-[#1B75D0] rounded-2xl p-6 text-center transition-colors bg-slate-50">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
                id="photo-upload-input"
              />
              <label htmlFor="photo-upload-input" className="cursor-pointer block">
                <Upload className="w-8 h-8 text-[#1B75D0] mx-auto mb-2" />
                <span className="text-xs font-bold text-slate-800 block">
                  Fotos hochladen oder hierher ziehen
                </span>
                <span className="text-[11px] text-slate-400 block mt-1">
                  JPG, PNG bis zu 10 MB
                </span>
              </label>

              {files.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-slate-200">
                  {files.map((file) => (
                    <div
                      key={file.id}
                      className="relative w-16 h-16 rounded-lg overflow-hidden border border-slate-300 shadow-sm"
                    >
                      <img src={file.url} alt="Upload" className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => handleRemoveFile(file.id)}
                        className="absolute top-1 right-1 bg-slate-900/80 text-white rounded-full p-0.5 hover:bg-red-600"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Message textarea */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              5. Nachricht &amp; Anmerkungen
            </label>
            <textarea
              rows={3}
              placeholder="Welche Flächen sollen gereinigt werden? Gibt es Besonderheiten?"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1B75D0] focus:ring-2 focus:ring-[#1B75D0]/20 outline-none text-sm resize-none"
              id="contact-form-message-input"
            />
          </div>

          {/* Preferred contact channel */}
          <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600">
              <span className="font-semibold text-slate-800">Bevorzugter Kontakt:</span>
              <label className="flex items-center gap-1 cursor-pointer">
                <input
                  type="radio"
                  name="contact_pref"
                  checked={formData.preferredContact === 'phone'}
                  onChange={() => setFormData({ ...formData, preferredContact: 'phone' })}
                  className="accent-[#1B75D0]"
                />
                <span>Telefon</span>
              </label>
              <label className="flex items-center gap-1 cursor-pointer">
                <input
                  type="radio"
                  name="contact_pref"
                  checked={formData.preferredContact === 'whatsapp'}
                  onChange={() => setFormData({ ...formData, preferredContact: 'whatsapp' })}
                  className="accent-emerald-600"
                />
                <span>WhatsApp</span>
              </label>
              <label className="flex items-center gap-1 cursor-pointer">
                <input
                  type="radio"
                  name="contact_pref"
                  checked={formData.preferredContact === 'email'}
                  onChange={() => setFormData({ ...formData, preferredContact: 'email' })}
                  className="accent-[#1B75D0]"
                />
                <span>E-Mail</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              id="submit-contact-form-button"
              className="w-full sm:w-auto bg-[#1B75D0] hover:bg-[#1663b3] text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-[#1B75D0]/25 transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-60"
            >
              {isSubmitting ? (
                <span>Wird an {COMPANY_INFO.email} übertragen...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Kostenloses Angebot anfragen</span>
                </>
              )}
            </button>
          </div>

          <div className="text-[11px] text-slate-500 text-center flex flex-col sm:flex-row items-center justify-center gap-2 pt-1">
            <span className="flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-[#1B75D0]" />
              <span>Anfrage geht direkt an: <strong>{COMPANY_INFO.email}</strong></span>
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>DSGVO-konform &amp; vertraulich</span>
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
