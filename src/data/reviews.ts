import { Review } from '../types';

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    author: 'Michael B.',
    location: 'Barmstedt',
    rating: 5,
    date: 'Vor 2 Wochen',
    service: 'Fenster- & Rahmenreinigung',
    comment: 'Pünktlich auf die Minute, extrem höflich und die Fenster sind so sauber, dass man meint, es sei kein Glas vorhanden. Auch die Kanten und Rahmen wurden ohne Aufpreis gründlich gewischt. Absolute Empfehlung!',
    verified: true,
    avatarBg: 'bg-blue-600'
  },
  {
    id: 'rev-2',
    author: 'Karin E.',
    location: 'Elmshorn',
    rating: 5,
    date: 'Vor 3 Wochen',
    service: 'Regenrinnenreinigung',
    comment: 'Unsere Dachrinnen waren nach dem Herbst komplett verstopft und liefen bei Regen über. Das Team von Nord Glanz hat alles professionell gereinigt, die Abläufe befreit und den Abfall sauber mitgenommen. Großartiger Service!',
    verified: true,
    avatarBg: 'bg-emerald-600'
  },
  {
    id: 'rev-3',
    author: 'Stefan M.',
    location: 'Quickborn',
    rating: 5,
    date: 'Vor 1 Monat',
    service: 'Photovoltaikreinigung',
    comment: 'Sehr unkomplizierte Kontaktaufnahme über WhatsApp: Fotos vom Dach geschickt, innerhalb von 15 Minuten ein faires Angebot erhalten. Die PV-Anlage glänzt wieder wie neu.',
    verified: true,
    avatarBg: 'bg-cyan-600'
  },
  {
    id: 'rev-4',
    author: 'Annette T.',
    location: 'Henstedt-Ulzburg',
    rating: 5,
    date: 'Vor 1 Monat',
    service: 'Stein- & Pflasterreinigung',
    comment: 'Unsere Einfahrt sieht nach der Steinreinigung aus wie frisch verlegt. Der Moosbelag ist komplett weg und die anschließende Versiegelung lohnt sich wirklich. Tolle Handwerksarbeit!',
    verified: true,
    avatarBg: 'bg-indigo-600'
  },
  {
    id: 'rev-5',
    author: 'Dr. Thorsten W.',
    location: 'Pinneberg',
    rating: 5,
    date: 'Vor 2 Monaten',
    service: 'Gewerbliche Glasreinigung',
    comment: 'Wir lassen unsere Kanzleiräume monatlich von Nord Glanz reinigen. Immer zuverlässig, diskret und absolut gründlich. Genau so stellt man sich Dienstleistung vor.',
    verified: true,
    avatarBg: 'bg-sky-700'
  }
];
