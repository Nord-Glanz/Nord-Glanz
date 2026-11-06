import { ServiceItem } from '../types';
import { APP_IMAGES } from './images';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'fensterreinigung',
    title: 'Fensterreinigung',
    category: 'glas',
    iconName: 'Sparkles',
    featured: true,
    image: APP_IMAGES.fensterreinigung,
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
      'Dachflächenfenster & Schaufenster',
      'Miet- & Gewerbeobjekte in ganz Schleswig-Holstein & Hamburg'
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
    id: 'unterhaltsreinigung',
    title: 'Unterhalts- & Büroreinigung',
    category: 'sonder',
    iconName: 'Building',
    featured: true,
    image: APP_IMAGES.bueroreinigung,
    shortDesc: 'Zuverlässige, diskrete Unterhaltsreinigung für Büros, Kanzleien und Gewerbeobjekte.',
    fullDesc: 'Ein sauberes, gepflegtes Arbeitsumfeld schafft Vertrauen bei Kunden und Wohlbefinden im Team. Nord Glanz bietet passgenaue Unterhalts- und Büroreinigung in flexiblen Intervallen: Ob tägliche Bürohygiene, wöchentliche Unterhaltsreinigung oder bedarfsgerechte Grundpflege von Arbeitsplätzen, Sanitäranlagen und Gemeinschaftsräumen – absolut verlässlich, gründlich und diskret.',
    benefits: [
      'Gepflegte, repräsentative Arbeits- und Empfangsbereiche',
      'Feste, eingespielte Reinigungskräfte & klare Leistungsverzeichnisse',
      'Flexible Reinigungszeiten (früh morgens, abends oder samstags)',
      'Schonende Pflege empfindlicher Oberflächen, IT- & Büromöbel',
      'Inklusive Sanitärhygiene, Mülltrennung und Teeküchenservice'
    ],
    applicationAreas: [
      'Büros, Agenturen & Verwaltungsräume',
      'Kanzleien, Beratungs- & Firmenräume',
      'Verkaufs- und Ausstellungsflächen',
      'Treppenhäuser & Gemeinschaftsflächen in Gewerbeobjekten'
    ],
    faqs: [
      {
        question: 'Zu welchen Zeiten findet die Büroreinigung statt?',
        answer: 'Ganz nach Ihrem Wunsch – meist außerhalb Ihrer Geschäftszeiten am frühen Morgen, am späten Nachmittag oder abends, damit Ihr Tagesgeschäft vollkommen ungestört bleibt.'
      },
      {
        question: 'Gibt es starre Vertragslaufzeiten?',
        answer: 'Nein, wir setzen auf zufriedene Kunden statt langfristiger Bindungen. Unsere Unterhaltsverträge sind fair und flexibel kündbar.'
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
    shortDesc: 'Porenfreie Tiefenreinigung von Außenflächen.',
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
    title: 'Fassadenreinigung',
    category: 'stein',
    iconName: 'Building2',
    featured: true,
    image: APP_IMAGES.glasfassade,
    shortDesc: 'Repräsentativer Glanz für Wohn- und Firmengebäude – schonende Reinigung von Putz, Klinker & Glas.',
    fullDesc: 'Die Fassade ist die Visitenkarte Ihres Gebäudes. Wir säubern Klinker-, Putz-, Metall- und Glasfassaden gründlich von Umweltverschmutzungen, Ruß und Grünbelag.',
    benefits: [
      'Chemiefreie Reinigung',
      'Beseitigung von oberflächlichem Schmutz und Algen',
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
    title: 'Überdachungsreinigung',
    category: 'glas',
    iconName: 'Home',
    featured: true,
    image: APP_IMAGES.carport,
    shortDesc: 'Saubere Glas- und Polycarbonatdächer an Terrassendächern, Carports und Vordächern.',
    fullDesc: 'Sammeln sich Moos, Nadeln und Blätter auf dem Dach, hemmt das nicht nur den Lichteinfall, sondern kann zu Wasserschäden führen. Wir reinigen Eindeckung, Rinnen und Tragwerk gründlich.',
    benefits: [
      'Wieder voller Lichtdurchlass',
      'Schonung von Dichtungen und Stegplatten',
      'Saubere Abläufe und Rinnen',
      'Schutz vor Pilz- und Feuchtigkeitsschäden'
    ],
    applicationAreas: [
      'Terrassenüberdachungen',
      'Carportdächer aus Glas oder Polycarbonat',
      'Hauseingangsvordächer'
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
    featured: true,
    image: APP_IMAGES.regenrinne,
    shortDesc: 'Effektiver Schutz vor Überlauf, Schlamm und kostspieligen Wasserschäden an Fassade und Dach.',
    fullDesc: 'Laub, Tannennadeln, Moos und Dachsedimente setzen Dachrinnen im Jahresverlauf stark zu. Bei Starkregen staut sich das Wasser, läuft über und dringt in Fassadendämmung oder Mauerwerk ein. Nord Glanz befreit Ihre Regenrinnen gründlich von Schmutz und Ablagerungen – sicher, schnell und mit fachgerechter Entsorgung des Grünguts.',
    benefits: [
      'Schutz vor teuren Wasserschäden an Mauerwerk & Fassade',
      'Gründliche Befreiung von Laub, Moos, Nadeln und Schlamm',
      'Prüfung und Reinigung der Abläufe und Rinnensiebe',
      'Sicherer Einsatz bis 10 Meter Höhe ohne Dachbeschädigung',
      'Inklusive sauberem Abtransport und Entsorgung der Abfälle'
    ],
    applicationAreas: [
      'Dachrinnen an Ein- und Mehrfamilienhäusern',
      'Gewerbehallen, Lager & Bürogebäude',
      'Überdachungen, Garagen, Vordächer & Nebengebäude',
      'Zink-, Kupfer- und Kunststoffrinnen jeder Bauart'
    ],
    faqs: [
      {
        question: 'Wie oft sollte eine Dachrinne gereinigt werden?',
        answer: 'Wir empfehlen mindestens eine Reinigung pro Jahr im Spätherbst nach dem vollständigen Laubfall, bei starkem Baumbestand zusätzlich im Frühjahr.'
      },
      {
        question: 'Müssen Sie mein Dach betreten?',
        answer: 'Nein, wir arbeiten sicher von abgestützten Steigsystemen oder mit Teleskopwerkzeugen, sodass Ihre Dachziegel vollständig geschont bleiben.'
      }
    ]
  },
  {
    id: 'treppenhausreinigung',
    title: 'Treppenhausreinigung und Hausmeisterservice',
    category: 'sonder',
    iconName: 'Building',
    featured: true,
    image: APP_IMAGES.treppenhausService,
    shortDesc: 'Regelmäßige Treppenhauspflege und zuverlässiger Hausmeisterservice für gepflegte Immobilien.',
    fullDesc: 'Ein gepflegtes Treppenhaus und ein funktionierendes Gebäude sind die Visitenkarte jeder Immobilie. Wir übernehmen die gründliche Reinigung aller Etagen, Geländer und Eingangsbereiche sowie zuverlässige Hausmeisterdienste für Eigentümer, Hausverwaltungen und Mieter.',
    benefits: [
      'Gründliche Nass- & Trockenreinigung aller Etagen',
      'Pflege von Handläufen, Fenstern & Eingangsbereichen',
      'Zuverlässige Objekt- & Sichtkontrolle',
      'Feste, verlässliche Reinigungsintervalle nach Maß'
    ],
    applicationAreas: [
      'Mehrfamilienhäuser & Wohnanlagen',
      'Wohnungsbaugesellschaften & Hausverwaltungen',
      'Gewerbeobjekte & Bürokomplexe'
    ],
    faqs: [
      {
        question: 'In welchen Intervallen reinigen Sie Treppenhäuser?',
        answer: 'Ganz nach Vereinbarung: meist wöchentlich, zweiwöchentlich oder monatlich, inklusive turnusmäßiger Fenster- und Geländerpflege.'
      },
      {
        question: 'Welche Hausmeisteraufgaben übernehmen Sie?',
        answer: 'Unter anderem Sichtkontrollen des Gesamtzustands, Bereitstellung der Mülltonnen und kleinere Instandhaltungsarbeiten vor Ort.'
      }
    ]
  },
  {
    id: 'teppichreinigung',
    title: 'Teppich- und Polsterreinigung',
    category: 'sonder',
    iconName: 'Sparkles',
    featured: true,
    image: APP_IMAGES.teppichPolster,
    shortDesc: 'Fasertiefe Frische und hygienische Tiefenreinigung für Teppichböden, Polstermöbel und Bürostühle.',
    fullDesc: 'Schmutz, Flecken, Milben und Gerüche setzen sich tief im Gewebe von Polstern und Teppichen fest. Mit unserem modernen Sprühextraktionsverfahren und schonenden Reinigungsmitteln sorgen wir für fasertiefe Hygiene, frischen Duft und neuwertige Farben.',
    benefits: [
      'Fasertiefe Sprühextraktion & gezielte Fleckentfernung',
      'Beseitigung von Allergenen, Feinstaub & Gerüchen',
      'Schonende Pflege für feine Polsterstoffe & Teppichfasern',
      'Schnelle Trocknungszeiten für zeitnahe Nutzung'
    ],
    applicationAreas: [
      'Sofas, Sessel & Polstergarnituren im Wohnbereich',
      'Bürostühle, Konferenzräume & Kanzleimöbel',
      'Teppichböden & textile Beläge in Gewerbe & Wohnraum'
    ],
    faqs: [
      {
        question: 'Wie lange dauert es, bis Teppiche oder Polster wieder trocken sind?',
        answer: 'Dank leistungsstarker Absaugung beträgt die Trocknungszeit in der Regel nur ca. 4 bis 8 Stunden – abhängig von Belüftung und Raumtemperatur.'
      },
      {
        question: 'Können auch hartnäckige Flecken wie Kaffee oder Rotwein entfernt werden?',
        answer: 'Mit unserer gezielten Detachur (Spezialfleckenvorbehandlung) lassen sich die allermeisten Alltagsflecken materialsicher und rückstandslos entfernen.'
      }
    ]
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
  }
];
