
export interface FAQItem {
  question: string;
  answer: string;
  category: FAQCategory;
}

export enum FAQCategory {
  ALGEMEEN = 'Algemeen',
  PRP = 'PRP Behandeling',
  MESO = 'Mesotherapie',
  STAMCEL = 'Stamceltherapie',
  NAZORG = 'Nazorg & Herstel',
  PLANNING = 'Planning & Betaling',
  CONTRA = 'Contra-indicaties',
  ANNULEREN = 'Annuleren & Verzetten'
}

export interface PriceItem {
  title: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
  category: 'behandeling' | 'product';
  note?: string;
}

export interface NavLink {
  label: string;
  path: string;
}
