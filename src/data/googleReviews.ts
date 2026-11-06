export interface GoogleReview {
  id: string;
  author: string;
  avatarLetter: string;
  avatarBg: string;
  rating: number;
  timeAgo: string;
  reviewCountText?: string; // e.g. "Local Guide · 17 Rezensionen", "4 Rezensionen"
  isLocalGuide?: boolean;
  priceLevel?: string; // e.g. "50–100 €"
  priceType?: string; // e.g. "Angemessener Preis"
  isNew?: boolean;
  comment: string;
  serviceMentioned?: string;
  photosCount?: number;
  likesCount?: number;
}

export const REAL_GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: 'google-rev-1',
    author: 'Jana Fiebig',
    avatarLetter: 'J',
    avatarBg: 'bg-emerald-600',
    rating: 5,
    timeAgo: 'vor 2 Wochen',
    reviewCountText: 'Local Guide · 17 Rezensionen',
    isLocalGuide: true,
    isNew: true,
    priceType: 'Angemessener Preis',
    priceLevel: '50–100 €',
    serviceMentioned: 'Fenster- und Rahmenreinigung',
    comment:
      'Die Beiden waren diesen Monat das erste Mal zur Fenster- und Rahmenreinigung bei mir und ich bin sehr zufrieden. Sehr freundlich, schnell und saubere Arbeit! Preis/Leistung passt. Auf jeden Fall zu empfehlen.'
  },
  {
    id: 'google-rev-2',
    author: 'Melanie Wiezorrek',
    avatarLetter: 'M',
    avatarBg: 'bg-indigo-600',
    rating: 5,
    timeAgo: 'vor 3 Monaten',
    reviewCountText: '4 Rezensionen',
    comment:
      'Einfach top! Pünktlich, professionell und super gründlich. Sie sind total nett und locker in der Kommunikation. Man merkt einfach, dass sie ihren Job gerne machen. Vielen Dank für den tollen Service - wir buchen Euch definitiv wieder.'
  },
  {
    id: 'google-rev-3',
    author: 'Holger Grothkass',
    avatarLetter: 'H',
    avatarBg: 'bg-blue-600',
    rating: 5,
    timeAgo: 'vor 3 Monaten',
    reviewCountText: '7 Rezensionen',
    serviceMentioned: 'Terrassendach-Reinigung',
    comment:
      'Schnelle und zeitnahe Terminvereinbarung zur Reinigung meines Terrassendaches. Die beiden waren pünktlich da und haben tolle Arbeit geleistet. Ich werde bei der nächsten Reinigung das tolle Team wieder buchen.'
  },
  {
    id: 'google-rev-4',
    author: 'Gero Fritz',
    avatarLetter: 'G',
    avatarBg: 'bg-amber-600',
    rating: 5,
    timeAgo: 'vor 5 Monaten',
    reviewCountText: '8 Rezensionen · 5 Fotos',
    photosCount: 5,
    likesCount: 1,
    serviceMentioned: 'Hausreinigung',
    comment:
      'Wir brauchten Unterstützung bei der Reinigung eines Hauses. Die beiden Männer konnten spontan helfen. Tolle Arbeit!!'
  },
  {
    id: 'google-rev-5',
    author: 'Sabine Leppak',
    avatarLetter: 'S',
    avatarBg: 'bg-rose-600',
    rating: 5,
    timeAgo: 'vor 8 Monaten',
    reviewCountText: 'Local Guide · 26 Rezensionen · 2 Fotos',
    isLocalGuide: true,
    photosCount: 2,
    comment:
      'So tolle Arbeit und super gründlich. Besser geht es gar nicht 👍 Klasse Team die Beiden 🫶 auf jeden Fall zu empfehlen'
  },
  {
    id: 'google-rev-6',
    author: 'David Richter',
    avatarLetter: 'D',
    avatarBg: 'bg-teal-600',
    rating: 5,
    timeAgo: 'vor 9 Monaten',
    reviewCountText: '6 Rezensionen · 5 Fotos',
    photosCount: 5,
    comment:
      'Danke für die schnelle und saubere Arbeit. Sehr freundliche, kompetente und zuverlässige Jungs.'
  },
  {
    id: 'google-rev-7',
    author: 'emily',
    avatarLetter: 'E',
    avatarBg: 'bg-purple-600',
    rating: 5,
    timeAgo: 'vor 10 Monaten',
    reviewCountText: '1 Rezension',
    serviceMentioned: 'Fensterreinigung',
    comment:
      'Effiziente Arbeit! Konnte noch nie so gut durch meine Fenster schauen. Würde die beiden immer wieder buchen. Besser hätte ich es nicht hinbekommen'
  },
  {
    id: 'google-rev-8',
    author: 'Kjell Mahncke',
    avatarLetter: 'K',
    avatarBg: 'bg-cyan-600',
    rating: 5,
    timeAgo: 'vor 10 Monaten',
    reviewCountText: '4 Rezensionen',
    serviceMentioned: 'Terrassendach-Reinigung',
    comment:
      'Die Jungs haben mein Terrassendach gereinigt. Super service und nette Kommunikation. Wirklich 1a!'
  },
  {
    id: 'google-rev-9',
    author: 'Lasse Schmid',
    avatarLetter: 'L',
    avatarBg: 'bg-slate-700',
    rating: 5,
    timeAgo: 'vor 10 Monaten',
    reviewCountText: '2 Rezensionen',
    serviceMentioned: 'Fensterreinigung',
    comment:
      'Fenster sahen gut aus und die Jungs waren schnell fertig! Top!'
  },
  {
    id: 'google-rev-10',
    author: 'Jonas Noack',
    avatarLetter: 'J',
    avatarBg: 'bg-sky-600',
    rating: 5,
    timeAgo: 'vor 10 Monaten',
    reviewCountText: '1 Rezension',
    comment:
      'Top Ergebnis! Sehr professionell, schnell, sauber und höflich. Ich kann die Jungs nur empfehlen.🤗'
  },
  {
    id: 'google-rev-11',
    author: 'Florian Klöckl',
    avatarLetter: 'F',
    avatarBg: 'bg-violet-600',
    rating: 5,
    timeAgo: 'vor 2 Monaten',
    reviewCountText: 'Local Guide · 78 Rezensionen',
    isLocalGuide: true,
    comment: 'Sehr zuverlässige und professionelle Reinigung! 5 von 5 Sternen.'
  },
  {
    id: 'google-rev-12',
    author: 'Luigi Wwpp',
    avatarLetter: 'L',
    avatarBg: 'bg-emerald-700',
    rating: 5,
    timeAgo: 'vor 10 Monaten',
    reviewCountText: 'Google Bewertung',
    comment: 'Super zufrieden, pünktlich und top sauber gearbeitet. Gerne wieder!'
  }
];

export const GOOGLE_REVIEWS_SUMMARY = {
  rating: '5,0',
  totalCount: 12,
  badgeText: '5.0 Sterne auf Google',
  profileName: 'Nord Glanz – Fenster- & Gebäudereinigung'
};
