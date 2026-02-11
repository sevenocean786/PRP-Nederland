
import { PriceItem, FAQItem, FAQCategory, NavLink } from './types';

export const CONTACT_INFO = {
  address: 'Waldorpstraat 215-2, 2521 CJ. Den Haag',
  phone: '085 400 84 84',
  email: 'info@prpbehandeling.nl',
  hours: {
    weekdays: '10:00 - 17:00',
    consults: '12:00 - 17:00',
    saturday: '11:00 - 14:00'
  }
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'PRP Behandeling', path: '/prp-behandeling' },
  { label: 'Meso Therapie', path: '/mesotherapie' },
  { label: 'Stamcel Booster', path: '/stamcel-booster' },
  { label: 'Prijzen', path: '/prijzen' },
  { label: 'Over ons', path: '/over-ons' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

export const PRICES: PriceItem[] = [
  // BEHANDELINGEN - REGENERATIEF
  {
    title: 'PRP Basis',
    price: '€299,-',
    description: 'Enkele behandeling voor haar of gezicht met 100% eigen bloed.',
    features: ['8ml zuiver plasma', 'Groeifactoren stimulatie', 'Medische intake', 'Geen hersteltijd'],
    category: 'behandeling'
  },
  {
    title: 'PRP Kuur (3x)',
    price: '€750,-',
    description: 'Het meest gekozen traject voor maximaal resultaat.',
    isFeatured: true,
    features: ['3 Volledige behandelingen', 'Optimale haardichtheid', 'Inclusief nazorgset', 'Prijswinst van €147'],
    category: 'behandeling'
  },
  {
    title: 'Stamcel Booster',
    price: '€1.499,-',
    originalPrice: '€1.799,-',
    description: 'Autologe micro-graft therapie: de meest geavanceerde regeneratieve methode.',
    features: ['Micro-graft afname', 'Gecertificeerde filtratie', 'Progenitorcel injectie', 'Inclusief nazorgset'],
    category: 'behandeling'
  },
  {
    title: 'Ammi Eyez (Donkere ogen)',
    price: '€149,-',
    note: 'Sessie van 3x voor €440,-',
    description: 'Gespecialiseerde behandeling voor de delicate huid rondom uw ogen.',
    features: ['Vermindert donkere kringen', 'Verbetert huidtextuur', 'Hydratatie van de oogzone', 'Directe frisse blik'],
    category: 'behandeling'
  },
  {
    title: 'Meso Therapie',
    price: '€175,-',
    description: 'Vitamine-cocktail injecties voor een directe huidboost.',
    features: ['Hyaluron & Vitaminen', 'Directe hydratatie', 'Subtiele verbetering', 'Korter effect dan PRP'],
    category: 'behandeling'
  },
  {
    title: 'Vampire Facebooster',
    price: '€299,-',
    note: 'Kuur van 3x voor €800,-',
    description: 'Natuurlijke huidverjonging en collageenstimulatie.',
    features: ['Diepe hydratatie', 'Vermindert rimpels', 'Gezonde glans', '100% Biologisch'],
    category: 'behandeling'
  },
  {
    title: 'Vitamine C Booster',
    price: '€129,-',
    description: 'Krachtige immuunsysteem ondersteuning en huidverheldering.',
    features: ['Medische graad Vitamine C', 'Collageen stimulatie', 'Ontgiftende werking', 'Krachtige antioxidant'],
    category: 'behandeling'
  },
  {
    title: 'B12 Intraveneus Shot',
    price: '€49,-',
    description: 'Directe energie-boost en ondersteuning van het zenuwstelsel.',
    features: ['Hoge dosering B12', 'Directe opname', 'Verbetert focus', 'Bestrijdt vermoeidheid'],
    category: 'behandeling'
  },
  // PRODUKTEN
  {
    title: 'Mixall Renegen (Vrouw)',
    price: '€69,00',
    note: '2 stuks voor €105,-',
    description: 'Lotion met 5% Minoxidil en 0.5% Finasteride.',
    features: ['Speciaal voor vrouwen', '5% Minoxidil', '0.5% Finasteride', 'Stimuleert haargroei'],
    category: 'product'
  },
  {
    title: 'Mixall Renegen (Man)',
    price: '€69,00',
    note: '2 stuks voor €105,-',
    description: 'Lotion met 10% Minoxidil en 0.5% Finasteride.',
    features: ['Speciaal voor mannen', '10% Minoxidil', '0.5% Finasteride', 'Maximale stimulatie'],
    category: 'product'
  },
  {
    title: 'Ultra B7 Vitamines',
    price: '€24,00',
    description: 'Halal en Vegan haarvitamines van Halal Medical.',
    features: ['60 Capsules', 'Volledig Halal', '100% Vegan', 'Versterkt haar & nagels'],
    category: 'product'
  }
];

export const FAQS: FAQItem[] = [
  // --- PRP BEHANDELING ---
  { category: FAQCategory.PRP, question: 'Wat is PRP precies?', answer: 'PRP staat voor Platelet Rich Plasma. Het is geconcentreerd bloedplasma met een hoge dosis bloedplaatjes.' },
  { category: FAQCategory.PRP, question: 'Is PRP veilig?', answer: 'Ja, het is 100% veilig omdat we uw eigen bloed gebruiken. Er is geen risico op allergieën.' },
  { category: FAQCategory.PRP, question: 'Doet de behandeling pijn?', answer: 'We gebruiken zeer fijne naaldjes. De meeste mensen ervaren slechts een licht prikkelend gevoel.' },
  { category: FAQCategory.PRP, question: 'Wanneer zie ik resultaat?', answer: 'Meestal ziet u na de tweede of derde behandeling (na 3-6 maanden) duidelijke verbetering.' },
  
  // --- AMMI EYEZ ---
  { category: FAQCategory.MESO, question: 'Wat is Ammi Eyez?', answer: 'Ammi Eyez is een specifieke behandeling voor de zone rondom de ogen, gericht op het verminderen van donkere kringen en fijne lijntjes door middel van hydraterende en herstellende componenten.' },

  // --- PLANNING & BETALING ---
  { category: FAQCategory.PLANNING, question: 'Waarom de 1 euro verificatie?', answer: 'Dit garandeert uw plek in de agenda en voorkomt no-shows. Het bedrag wordt verrekend bij uw behandeling.' },
  { category: FAQCategory.PLANNING, question: 'Hoe betaal ik een pakket?', answer: 'Pakketten (kuren) dienen bij de eerste afspraak direct en volledig voldaan te worden. Dit kan online of in de kliniek.' },
  { category: FAQCategory.ANNULEREN, question: 'Wat is jullie annuleringsbeleid?', answer: 'Annuleren of verzetten moet minimaal 48 uur van tevoren gebeuren, anders zijn we genoodzaakt de kosten van het consult in rekening te brengen.' }
];
