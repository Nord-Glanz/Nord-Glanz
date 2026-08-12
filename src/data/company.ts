export const COMPANY_INFO = {
  name: 'Nord Glanz',
  legalName: 'Nord Glanz – vom Endt & Cords Gebäude- und Außenreinigung GbR',
  owner: 'vom Endt & Cords',
  claim: 'Glasklare Ergebnisse. Saubere Qualität.',
  location: 'Barmstedt',
  street: 'Kleine Gärtnerstraße 5',
  zipCity: '25355 Barmstedt',
  fullAddress: 'Kleine Gärtnerstraße 5, 25355 Barmstedt',
  country: 'Deutschland',
  phone: '+49 1520 9672565',
  phoneClean: '+4915209672565',
  whatsapp: '+49 1520 9672565',
  whatsappClean: '4915209672565',
  email: 'kontakt@nord-glanz.com',
  website: 'https://nord-glanz.com',
  workingHours: 'Mo – Sa: 07:00 – 19:00 Uhr',
  radiusKm: 20,
  cities: [
    'Barmstedt',
    'Elmshorn',
    'Quickborn',
    'Kaltenkirchen',
    'Henstedt-Ulzburg',
    'Pinneberg',
    'Uetersen',
    'Tornesch',
    'Hemdingen',
    'Heede',
    'Lutzhorn',
    'Bullenkuhlen',
    'Bevern',
    'Groß Offenseth-Aspern'
  ],
  servicesSummary: [
    'Fensterreinigung',
    'Glasreinigung',
    'Steinreinigung',
    'Pflasterreinigung',
    'Photovoltaikreinigung',
    'Wintergartenreinigung',
    'Fassadenreinigung',
    'Carportreinigung',
    'Rahmenreinigung',
    'Rollladenreinigung',
    'Regenrinnenreinigung',
    'Überdachungen',
    'Sonderreinigungen (Lotuseffekt)'
  ],
  usps: [
    {
      title: 'Streifenfreie Sauberkeit',
      desc: 'Professionelle Glasreinigung mit entmineralisiertem Reinstwasser ohne Chemie.'
    },
    {
      title: 'Schonung aller Oberflächen',
      desc: 'Sanfte Druck- und Bürstenverfahren zum langfristigen Werterhalt Ihrer Immobilien.'
    },
    {
      title: 'Pünktlich & Zuverlässig',
      desc: 'Fixe Terminzusages und sauberes Arbeiten ohne Verschmutzung des Umfelds.'
    },
    {
      title: 'Faire & Transparente Preise',
      desc: 'Kostenlose Erstbesichtigung im Umkreis bis 10 km oder unverbindliches Angebot per Foto.'
    }
  ]
};

export const generateLocalBusinessSchema = () => {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': COMPANY_INFO.legalName,
    'url': COMPANY_INFO.website,
    'description': 'Professionelle Gebäude- und Außenreinigung in Barmstedt und ca. 20 km Umkreis. Spezialisiert auf Fenster, Glas, Stein, Photovoltaik, Wintergärten und Fassaden.',
    'image': `${COMPANY_INFO.website}/assets/hero_house.jpg`,
    'telephone': COMPANY_INFO.phone,
    'email': COMPANY_INFO.email,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': COMPANY_INFO.street,
      'addressLocality': 'Barmstedt',
      'postalCode': '25355',
      'addressCountry': 'DE'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 53.7884,
      'longitude': 9.7719
    },
    'areaServed': COMPANY_INFO.cities,
    'priceRange': '€€',
    'openingHours': 'Mo-Sa 07:00-19:00',
    'sameAs': [
      'https://nord-glanz.com'
    ]
  });
};
