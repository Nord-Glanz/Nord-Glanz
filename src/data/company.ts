export const COMPANY_INFO = {
  name: 'Nord Glanz',
  legalName: 'Nord Glanz – vom Endt & Cords Gebäude- und Außenreinigung GbR',
  owner: 'Tom Cords und Mattis vom Endt',
  taxNumber: '13/289/00615',
  insurance: 'Baloise Versicherungs AG',
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
  serviceArea: 'Ganz Schleswig-Holstein & Hamburg',
  cities: [
    'Schleswig-Holstein',
    'Hamburg',
    'Barmstedt',
    'Elmshorn',
    'Pinneberg',
    'Quickborn',
    'Kaltenkirchen',
    'Henstedt-Ulzburg',
    'Norderstedt',
    'Neumünster',
    'Kiel',
    'Lübeck',
    'Itzehoe',
    'Wedel',
    'Uetersen',
    'Tornesch'
  ],
  servicesSummary: [
    'Fensterreinigung',
    'Unterhalts- & Büroreinigung',
    'Regenrinnenreinigung',
    'Glasreinigung',
    'Steinreinigung',
    'Pflasterreinigung',
    'Photovoltaikreinigung',
    'Fassadenreinigung',
    'Überdachungsreinigung',
    'Rahmenreinigung',
    'Rollladenreinigung'
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
      desc: 'Fixe Terminzusagen und sauberes Arbeiten ohne Verschmutzung des Umfelds in ganz SH & HH.'
    },
    {
      title: 'Faire & Transparente Preise',
      desc: 'Kostenlose Erstbesichtigung und unverbindliches Festpreisangebot per Vor-Ort-Termin oder Foto.'
    }
  ]
};

export const generateLocalBusinessSchema = () => {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': COMPANY_INFO.legalName,
    'url': COMPANY_INFO.website,
    'description': 'Professionelle Gebäude- und Außenreinigung mit Standort Barmstedt – im Einsatz in ganz Schleswig-Holstein und Hamburg. Spezialisiert auf Fenster, Glas, Büroreinigung, Stein, Photovoltaik und Fassaden.',
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
    'areaServed': ['Schleswig-Holstein', 'Hamburg', ...COMPANY_INFO.cities],
    'priceRange': '€€',
    'openingHours': 'Mo-Sa 07:00-19:00',
    'sameAs': [
      'https://nord-glanz.com'
    ]
  });
};
