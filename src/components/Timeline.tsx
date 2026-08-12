import {
  MessageSquare,
  Camera,
  FileCheck,
  CalendarCheck,
  Sparkles,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

export function Timeline() {
  const steps = [
    {
      num: '01',
      title: 'Anfrage stellen',
      desc: 'Nutzen Sie unser kurzes Formular, rufen Sie uns an oder schreiben Sie uns per WhatsApp.',
      icon: MessageSquare,
      color: 'bg-blue-500'
    },
    {
      num: '02',
      title: 'Fotos senden',
      desc: 'Optional Fotos des Objekts senden für eine noch schnellere und präzisere Einschätzung.',
      icon: Camera,
      color: 'bg-indigo-500'
    },
    {
      num: '03',
      title: 'Angebot erhalten',
      desc: 'Transparentes Festpreisangebot – ohne versteckte Kosten oder Anfahrtszuschläge.',
      icon: FileCheck,
      color: 'bg-cyan-500'
    },
    {
      num: '04',
      title: 'Termin vereinbaren',
      desc: 'Wunschtermin festlegen. Auf Wunsch führen wir Außenreinigungen auch ohne Ihre Anwesenheit durch.',
      icon: CalendarCheck,
      color: 'bg-emerald-500'
    },
    {
      num: '05',
      title: 'Gründliche Reinigung',
      desc: 'Pünktlicher Einsatz mit Reinstwasser & modernen Schonverfahren durch unser erfahrenes Team.',
      icon: Sparkles,
      color: 'bg-sky-500'
    },
    {
      num: '06',
      title: 'Gemeinsame Abnahme',
      desc: 'Ergebnis prüfen, strahlenden Glanz genießen. Erst wenn Sie zufrieden sind, sind wir es auch.',
      icon: CheckCircle2,
      color: 'bg-emerald-600'
    }
  ];

  return (
    <section className="py-20 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#1B75D0] font-semibold text-xs uppercase tracking-wider bg-[#1B75D0]/10 px-3.5 py-1.5 rounded-full border border-[#1B75D0]/20 inline-block mb-3">
            In 6 einfachen Schritten zum perfekten Ergebnis
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            So unkompliziert ist der Ablauf mit Nord Glanz
          </h2>
          <p className="text-slate-600 text-base mt-3">
            Vom ersten Kontakt bis zum strahlenden Endergebnis – transparent, zügig und verlässlich.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/80 hover:border-[#1B75D0]/40 transition-all hover:shadow-xl hover:bg-white group relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl ${step.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-extrabold text-slate-300 group-hover:text-[#1B75D0] transition-colors">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#1B75D0] transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.desc}
                </p>

                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                    <ChevronRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
