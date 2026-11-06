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
  Home
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

  const serviceOptions = [
    'Fensterreinigung',
    'Unterhalts- & Büroreinigung',
    'Regenrinnenreinigung',
    'Photovoltaikreinigung',
    'Stein- & Pflasterreinigung',
    'Fassadenreinigung',
    'Überdachungsreinigung',
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

  const handleSubmit = (e: React.FormEvent) => {
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

    // Simulate fast validation & API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/60 border border-slate-200/80 font-sans">
      {isSuccess ? (
        <div className="text-center py-12 px-4 animate-in fade-in duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            Vielen Dank für Ihre Anfrage!
          </h3>
          <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed mb-8">
            Wir haben Ihre Nachricht erhalten. Wir prüfen Ihre Angaben und melden uns innerhalb von 48 Stunden mit Ihrem persönlichen Festpreisangebot.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                setIsSuccess(false);
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
              className="bg-slate-100 text-slate-700 font-semibold px-6 py-3 rounded-xl hover:bg-slate-200 transition-colors text-sm"
            >
              Weitere Anfrage senden
            </button>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappClean}?text=Hallo%20Nord%20Glanz,%20ich%20habe%20gerade%20eine%20Anfrage%20über%20die%20Website%20gesendet.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-emerald-700 transition-colors text-sm flex items-center gap-2 shadow-md shadow-emerald-600/20"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Zusätzlich WhatsApp öffnen</span>
            </a>
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
            <div className="flex items-center gap-3 text-xs text-slate-600">
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
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              id="submit-contact-form-button"
              className="w-full sm:w-auto bg-[#1B75D0] hover:bg-[#1663b3] text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-[#1B75D0]/25 transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-60"
            >
              {isSubmitting ? (
                <span>Wird gesendet...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Kostenloses Angebot anfragen</span>
                </>
              )}
            </button>
          </div>

          <div className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>Ihre Daten werden vertraulich behandelt &amp; nicht weitergegeben.</span>
          </div>
        </form>
      )}
    </div>
  );
}
