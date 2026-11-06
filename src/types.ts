export type RoutePath =
  | '/'
  | '/leistungen'
  | '/referenzen'
  | '/preise'
  | '/ueber-uns'
  | '/faq'
  | '/kontakt'
  | '/datenschutz'
  | '/impressum'
  | '/agb';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'glas' | 'stein' | 'sonder';
  image: string;
  iconName: string;
  benefits: string[];
  applicationAreas: string[];
  faqs: { question: string; answer: string }[];
  featured?: boolean;
}

export interface ReferenceProject {
  id: string;
  title: string;
  location: string;
  clientType: 'Privatkundschaft' | 'Gewerbekunde' | 'Wohnungsverwaltung';
  serviceType: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  reviewText?: string;
  author?: string;
  rating?: number;
  date: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  service: string;
  comment: string;
  verified: boolean;
  avatarBg: string;
}

export interface FAQItem {
  id: string;
  category: 'allgemein' | 'glas' | 'stein' | 'ablauf';
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  propertyType: 'privat' | 'gewerbe' | 'verwaltung';
  services: string[];
  message: string;
  preferredContact: 'phone' | 'whatsapp' | 'email';
  images: File[];
}

export interface PriceEstimateOption {
  id: string;
  title: string;
  description: string;
  icon: string;
}
