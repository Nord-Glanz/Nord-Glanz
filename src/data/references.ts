import { ReferenceProject } from '../types';
import { APP_IMAGES, PLACEHOLDER_IMAGES } from './images';

export const REFERENCES_DATA: ReferenceProject[] = [
  {
    id: 'ref-1',
    title: 'Glas- & Rahmenreinigung Wohnhaus mit Dachrinnenservice',
    location: 'Barmstedt (Zentrum)',
    clientType: 'Privatkundschaft',
    serviceType: 'Fenster- & Dachrinnenreinigung',
    beforeImage: APP_IMAGES.glasRahmenBefore,
    afterImage: APP_IMAGES.glasRahmenRef,
    description: 'Komplettreinigung aller Fensterscheiben inkl. Rahmen und gründliche Befreiung der Dachrinnen von Laub und Moos.',
    reviewText: 'Herrlich glasklare Sicht und die Dachrinnen laufen bei Regen wieder einwandfrei ab. Nord Glanz war überpünktlich und extrem sauber!',
    author: 'Familie S., Barmstedt',
    rating: 5,
    date: 'Juni 2026'
  },
  {
    id: 'ref-3',
    title: 'Steinterrasse & Hofeinfahrt Naturstein',
    location: 'Quickborn',
    clientType: 'Privatkundschaft',
    serviceType: 'Steinreinigung & Imprägnierung',
    beforeImage: PLACEHOLDER_IMAGES.terraceDirty,
    afterImage: APP_IMAGES.steinterrasse,
    description: 'Tiefenreinigung einer 85 m² großen Granitsteinterrasse und Beseitigung von dunklem Algenbelag mit anschließender Hydrophobierung.',
    reviewText: 'Unglaublich, was aus den alten Steinen herausgeholt wurde. Schaut aus wie neu verlegt! Keine Spritzer an der Hauswand.',
    author: 'Sabine & Peter K., Quickborn',
    rating: 5,
    date: 'April 2026'
  },
  {
    id: 'ref-5',
    title: 'Terrassendachreinigung',
    location: 'Henstedt-Ulzburg',
    clientType: 'Privatkundschaft',
    serviceType: 'Überdachungsreinigung',
    beforeImage: APP_IMAGES.carport,
    afterImage: APP_IMAGES.terrassendachAfter,
    description: 'Beseitigung von Witterungsschmutz, Algen- und Moosbelag auf einem Terrassendach.',
    reviewText: 'Sehr schnelle Rückmeldung auf meine Anfrage. Foto gesendet, Angebot erhalten, Termin geklappt. Perfekt!',
    author: 'Thomas R., Henstedt-Ulzburg',
    rating: 5,
    date: 'Mai 2026'
  },
  {
    id: 'ref-7',
    title: 'Einfamilienhaus Rahmen- & Rollladen-Intensivpflege',
    location: 'Tornesch',
    clientType: 'Privatkundschaft',
    serviceType: 'Rollladen- & Rahmenreinigung',
    beforeImage: APP_IMAGES.rahmenRefBefore,
    afterImage: APP_IMAGES.rahmenRefAfter,
    description: 'Gründliche Beseitigung von vergilbtem Straßenschmutz an allen weißen Kunststofffensterrahmen und Aluminium-Rollläden.',
    reviewText: 'Unsere 15 Jahre alten Rahmenelemente erstrahlen wieder strahlend weiß. Wir sind begeistert vom Ergebnis!',
    author: 'Gudrun W., Tornesch',
    rating: 5,
    date: 'März 2026'
  }
];
