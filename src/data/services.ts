import { ServiceItem } from '../types';
import { APP_IMAGES } from './images';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'fensterreinigung',
    title: 'Fensterreinigung',
    category: 'glas',
    iconName: 'Sparkles',
    featured: true,
    image: APP_IMAGES.heroHouse,
    shortDesc: 'Glasklare Sicht ohne Schlieren und Streifen für Wohnungen, Wohnhäuser und Gewerbeobjekte.',
    fullDesc: 'Unsere professionelle Fensterreinigung garantiert glasklare Ergebnisse ohne lästige Streifen oder Rückstände. Wir reinigen Scheiben jeder Bauart – ob Sprossenfenster, Bodentiefes Glas oder schwer zugängliche Elemente. Auf Wunsch säubern wir Rahmen, Falzen und Bänke direkt gründlich mit.',
    benefits: [
      '100% streifenfreie Glasreinigung',
      'Schonende Behandlung empfindlicher Gläser',
      'Inklusive Rahmen- und Falzenreinigung auf Wunsch',
      'Flexible Intervalle oder Einzeleinsätze'
    ],
    applicationAreas: [
      'Einfamilienhäuser & Mehrfamilienhäuser',
      'Büros, Praxen & Verkaufsräume',
      'Wintergärten & Dachflächenfenster',
      'Miet- & Gewerbeobjekte in Barmstedt + 20 km'
    ],
    faqs: [
      {
        question: 'Reinigen Sie die Fensterrahmen gleich mit?',
        answer: 'Ja, auf Wunsch säubern wir Rahmen, Fensterbänke und Dichtungen gründlich mit milden, kunststoffschonenden Reinigern.'
      },
      {
        question: 'Wie hoch können schwer erreichbare Fenster geputzt werden?',
        answer: 'Mit unserem modernen Reinstwasser-Teleskopstangen-System erreichen wir Höhen von bis zu 15 Metern sicher vom Boden aus.'
      }
    ]
  },
  {
    id: 'wintergarten',
    title: 'Wintergartenreinigung',
    category: 'glas',
    iconName: 'Sun',
    featured: true,
    image: APP_IMAGES.wintergarten,
    shortDesc: 'Komplettreinigung von Glasdächern, Seitenelementen und Tragkonstruktionen für ungestörten Lichtgenuss.',
    fullDesc: 'Ein Wintergarten bringt Natur und Licht ins Haus, verlangt jedoch regelmäßige Pflege. Wir entfernen hartnäckigen Moosansatz, Vogelkot, Staub und Algen von Glasdachflächen, Rinnen und Streben – sicher und schonend.',
    benefits: [
      'Gefahrlose Teleskopreinigung vom Boden aus',
      'Gründliche Beseitigung von Algen und Grünspan',
      'Reinigung aller Sparren, Ecken und Dichtungen',
      'Längere Lebensdauer des gesamten Wintergartens'
    ],
    applicationAreas: [
      'Glas-Wintergärten & Sommergärten',
      'Glaseindeckungen & Überdachungen',
      'Aluminium-, Holz- und Kunststoffrahmen'
    ],
    faqs: [
      {
        question: 'Müssen Sie auf mein Wintergartendach steigen?',
        answer: 'Nein, wir arbeiten mit ultraleichten Carbon-Teleskopstangen und Reinstwasser absolut sicher und beschädigungsfrei vom Boden aus.'
      }
    ]
  },
  {
    id: 'photovoltaik',
    title: 'Photovoltaikreinigung',
    category: 'glas',
    iconName: 'Zap',
    featured: true,
    image: APP_IMAGES.pvReinigung,
    shortDesc: 'Ertragssteigerung von bis zu 20% durch professionelle PV- und Solaranlagenreinigung.',
    fullDesc: 'Ablagerungen wie Feinstaub, Pollen, Ruß und Vogelkot verringern die Effizienz Ihrer Photovoltaikanlage spürbar. Wir reinigen Solarmodule sanft mit entmineralisiertem Reinstwasser und Spezialbürsten ohne chemische Zusätze.',
    benefits: [
      'Bis zu 20% mehr Energieertrag erzielen',
      'Rückstandsfrei ohne Kalk- oder Seifenschleier',
      'Werterhalt und Garantieschutz der Module',
      'Umweltschonend ohne Chemikalien'
    ],
    applicationAreas: [
      'Dachanlagen auf Ein- und Mehrfamilienhäusern',
      'Gewerbliche Photovoltaik-Großanlagen',
      'Solarthermie-Kollektoren'
    ],
    faqs: [
      {
        question: 'Warum reicht normaler Regen nicht aus?',
        answer: 'Regen schwemmt groben Staub ab, hinterlässt jedoch kalkhaltige Ränder und entfernt klebrigen Pollen- oder Rußfilm nicht.'
      }
    ]
  },
  {
    id: 'steinreinigung',
    title: 'Stein- & Pflasterreinigung',
    category: 'stein',
    iconName: 'Layers',
    featured: true,
    image: APP_IMAGES.steinterrasse,
    shortDesc: 'Porenfreie Tiefenreinigung von Einfahrten, Gehwegen und Plätzen mit Oberflächenschutz.',
    fullDesc: 'Unkraut, Moos und Flechten lassen gepflasterte Wege und Steinflächen alt und ungepflegt wirken. Unsere professionelle Steinreinigung entfernt tiefsitzenden Schmutz gründlich und bereitet die Fläche auf eine Langzeit-Imprägnierung vor.',
    benefits: [
      'Schonender Wasserdruck mit Rotationsflächenreiniger',
      'Beseitigung von Flechten, Algen und Verfärbungen',
      'Optionales Neu-Einsanden der Fugen',
      'Hochwirksamer Hydrophobier-Schutz gegen Neubefall'
    ],
    applicationAreas: [
      'Hofeinfahrten & Gehwege',
      'Naturstein- & Betonpflaster',
      'Gewerbliche Eingangs- und Parkbereiche'
    ],
    faqs: [
      {
        question: 'Wird der Stein durch den Wasserdruck beschädigt?',
        answer: 'Nein, wir arbeiten mit regulierbaren Spezial-Flächenreinigern, die Schmutz lösen, ohne die Oberflächenstruktur aufzurauen.'
      }
    ]
  },
  {
    id: 'glasfassade',
    title: 'Fassaden- & Glasfassadenreinigung',
    category: 'stein',
    iconName: 'Building2',
    featured: true,
    image: APP_IMAGES.glasfassade,
    shortDesc: 'Repräsentativer Glanz für Wohn- und Firmengebäude – schonende Reinigung von Putz, Klinker & Glas.',
    fullDesc: 'Die Fassade ist die Visitenkarte Ihres Gebäudes. Wir säubern Klinker-, Putz-, Metall- und Glasfassaden gründlich von Umweltverschmutzungen, Ruß und Grünbelag.',
    benefits: [
      'Schonendes Niederdruck-Verfahren',
      'Beseitigung von Schimmel- und Algenbefall',
      'Optische Aufwertung der gesamten Immobilie',
      'Langfristiger Material- und Werterhalt'
    ],
    applicationAreas: [
      'Büro- und Geschäftsgebäude',
      'Putz- und Klinkerfassaden an Wohngebäuden',
      'Industriehallen & Gewerbekomplexe'
    ],
    faqs: [
      {
        question: 'Muss das Gebäude nach gestrichen werden?',
        answer: 'In den meisten Fällen reicht eine sanfte professionelle Fassadenreinigung völlig aus, um die Fassade wie neu erstrahlen zu lassen.'
      }
    ]
  },
  {
    id: 'carport',
    title: 'Carport- & Überdachungsreinigung',
    category: 'glas',
    iconName: 'Home',
    featured: true,
    image: APP_IMAGES.carport,
    shortDesc: 'Saubere Glas- und Polycarbonatdächer an Carports, Terrassendächern und Vordächern.',
    fullDesc: 'Sammeln sich Moos, Nadeln und Blätter auf dem Carportdach, hemmt das nicht nur den Lichteinfall, sondern kann zu Wasserschäden führen. Wir reinigen Eindeckung, Rinnen und Tragwerk gründlich.',
    benefits: [
      'Wieder voller Lichtdurchlass',
      'Schonung von Dichtungen und Stegplatten',
      'Saubere Abläufe und Rinnen',
      'Schutz vor Pilz- und Feuchtigkeitsschäden'
    ],
    applicationAreas: [
      'Carportdächer aus Glas oder Polycarbonat',
      'Hauseingangsvordächer',
      'Terrassenüberdachungen'
    ],
    faqs: [
      {
        question: 'Werden auch Doppelstegplatten wieder klar?',
        answer: 'Ja, wir entfernen Beläge auf der Oberseite gründlich und spülen Rinnen aus.'
      }
    ]
  },
  {
    id: 'terrassenreinigung',
    title: 'Terrassenreinigung',
    category: 'stein',
    iconName: 'Sparkle',
    featured: false,
    image: APP_IMAGES.steinterrasse,
    shortDesc: 'Sichere, rutschfreie Terrassenflächen aus Stein, Fliesen oder Holz.',
    fullDesc: 'Glatte, rutschige Terrassenbeläge im Frühjahr bergen Verletzungsgefahren. Wir befreien Ihre Terrasse von Schmierfilmen, Moos und Verfärbungen.',
    benefits: [
      'Rutschhemmende Sauberkeit',
      'Ideal vor der Sommersaison',
      'Gleichmäßiges, fleckenfreies Ergebnis'
    ],
    applicationAreas: ['Feinsteinzeug', 'Betonplatten', 'Natursteinterrassen', 'Holz & WPC (sanft)'],
    faqs: []
  },
  {
    id: 'rahmenreinigung',
    title: 'Rahmen- & Falzenreinigung',
    category: 'glas',
    iconName: 'Square',
    featured: false,
    image: APP_IMAGES.heroHouse,
    shortDesc: 'Intensivreinigung aller Fensterrahmen, Beschläge und Innenfalzen.',
    fullDesc: 'Gereinigte Scheiben wirken erst dann perfekt, wenn auch die Rahmen blitzblank sind. Wir entfernen Schmutzablagerungen, Nikotin und Grauschleier aus allen Ecken.',
    benefits: ['Intensivpflege für Kunststoff & Alu', 'Dichtungsschonend', 'Keine Vergilbung'],
    applicationAreas: ['Kunststoffrahmen', 'Aluminiumrahmen', 'Lackierte Holzfenster'],
    faqs: []
  },
  {
    id: 'rollladenreinigung',
    title: 'Rollladen- & Jalousienreinigung',
    category: 'glas',
    iconName: 'Sliders',
    featured: false,
    image: APP_IMAGES.heroHouse,
    shortDesc: 'Gründliche Beseitigung von Witterungsspuren auf Rollläden und Außenraffstores.',
    fullDesc: 'Rollläden schützen vor Sonne und Blicken, verharzen und verschmutzen aber durch Straßenstaub und Pollen. Wir säubern Lamelle für Lamelle.',
    benefits: ['Leichtgängigkeit fördern', 'Optische Erneuerung', 'Pflege der Führungs-Schienen'],
    applicationAreas: ['Kunststoff-Rollläden', 'Aluminium-Raffstores', 'Aussenjalousien'],
    faqs: []
  },
  {
    id: 'regenrinnenreinigung',
    title: 'Regenrinnenreinigung',
    category: 'sonder',
    iconName: 'Droplets',
    featured: false,
    image: APP_IMAGES.reinigungsfahrzeug,
    shortDesc: 'Schutz vor Überlauf und Wasserschäden an der Hausfassade.',
    fullDesc: 'Verstopfte Dachrinnen führen bei Starkregen schnell zu durchnässtem Mauerwerk. Wir befreien Rinnen und Fallrohre von Laub, Erde und Verstopfungen.',
    benefits: ['Verhinderung teurer Wasserschäden', 'Funktionskontrolle des Ablaufs', 'Sauberer Abtransport des Laubs'],
    applicationAreas: ['Dachrinnen an Wohngebäuden', 'Gewerbehalle-Rinnen', 'Gartenhaus-Rinnen'],
    faqs: []
  },
  {
    id: 'pflasterreinigung',
    title: 'Pflaster- & Wegereinigung',
    category: 'stein',
    iconName: 'Grid',
    featured: false,
    image: APP_IMAGES.steinterrasse,
    shortDesc: 'Gepflegte Wege, Einfahrten und Parkflächen frei von Unkraut & Moos.',
    fullDesc: 'Hochdruck-Flächenreinigung für Pflastersteine mit sauberem Kantenabschluss und Fugenpflege.',
    benefits: ['Unkrautbefreiung', 'Sicheres Auftreten', 'Werterhaltung'],
    applicationAreas: ['Garageneinfahrten', 'Gehwege', 'Parkplätze'],
    faqs: []
  },
  {
    id: 'sonderreinigung',
    title: 'Sonderreinigung & Lotuseffekt',
    category: 'sonder',
    iconName: 'ShieldCheck',
    featured: true,
    image: APP_IMAGES.reinigungsfahrzeug,
    shortDesc: 'Nano-Versiegelungen (Lotuseffekt) und Kunststoffrahmen-Intensivpflege.',
    fullDesc: 'Für lang anhaltende Sauberkeit bieten wir spezielle Nano-Glasversiegelungen mit Abperleffekt sowie Tiefenreinigung für stark vergilbte Kunststoffoberflächen.',
    benefits: [
      'Wasser & Schmutz perlen einfach ab',
      'Bis zu 50% seltenere Reinigungsintervalle',
      'Kunststoff-Auffrischung ohne Abrasivmittel'
    ],
    applicationAreas: ['Duschkabinen & Duschglas', 'Schwer zugängliche Glasdächer', 'Vergilbte Kunststoffprofilen'],
    faqs: []
  }
];
