
import React from 'react';
import { PRICES } from '../constants';
import { PriceItem } from '../types';

const Prijzen: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  const treatments = PRICES.filter(p => p.category === 'behandeling');
  const products = PRICES.filter(p => p.category === 'product');

  const renderPriceCard = (item: PriceItem, i: number) => (
    <div key={i} className={`group bg-white dark:bg-secondary p-8 rounded-premium shadow-sm border flex flex-col transition-all hover:shadow-2xl ${item.isFeatured ? 'border-primary ring-2 ring-primary/20 scale-[1.02] z-10' : 'border-gray-100 dark:border-gray-800'}`}>
      {item.isFeatured && <div className="bg-primary text-white text-[10px] font-bold uppercase py-1 px-3 rounded-full self-start mb-4 shadow-md">Meest gekozen</div>}
      <div className="relative inline-block self-start mb-2">
        <h3 className="text-xl font-serif font-bold dark:text-white transition-colors group-hover:text-primary">{item.title}</h3>
        <span className="absolute -bottom-1 left-0 h-[2px] bg-primary w-0 group-hover:w-full transition-all duration-500"></span>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed line-clamp-2">{item.description}</p>
      
      <div className="mb-8">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-serif font-bold text-text-dark dark:text-white">{item.price}</span>
          {item.originalPrice && (
            <span className="text-lg text-gray-400 line-through font-serif">{item.originalPrice}</span>
          )}
        </div>
        {item.note && <div className="text-[11px] font-bold text-primary italic mt-1">{item.note}</div>}
      </div>

      <ul className="space-y-4 mb-10 flex-grow">
        {item.features.map((f, j) => (
          <li key={j} className="text-sm flex gap-2 items-start">
            <span className="material-symbols-outlined text-primary text-sm shrink-0 mt-0.5">check</span>
            <span className="text-gray-600 dark:text-gray-300">{f}</span>
          </li>
        ))}
      </ul>

      <button 
        onClick={() => onNavigate('/consult-boeken')}
        className={`w-full py-4 rounded-premium font-bold transition-all shadow-md active:scale-95 ${item.isFeatured ? 'bg-primary text-white hover:bg-primary/80' : 'bg-secondary dark:bg-primary/20 text-white dark:text-primary hover:bg-black dark:hover:bg-primary/30'}`}
      >
        Bestellen / Boeken
      </button>
    </div>
  );

  return (
    <div className="bg-bg-main dark:bg-[#121212] min-h-screen py-24 transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        {/* Behandelingen Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-bold uppercase tracking-widest mb-2">Klinische Expertise</div>
          <h1 className="text-5xl font-serif font-bold tracking-tight dark:text-white">Onze Behandelingen</h1>
          <p className="text-xl text-secondary dark:text-gray-400 font-light max-w-2xl mx-auto">Gespecialiseerde regeneratieve en vitaliserende zorg door BIG-artsen.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {treatments.map((item, i) => renderPriceCard(item, i))}
        </div>

        {/* Produkten Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-1 bg-secondary text-white rounded-full text-[10px] font-bold uppercase tracking-widest mb-2">Thuisverzorging</div>
          <h2 className="text-4xl font-serif font-bold tracking-tight dark:text-white">Medische Producten</h2>
          <p className="text-xl text-secondary dark:text-gray-400 font-light max-w-2xl mx-auto">Hoogwaardige nazorg om uw klinische resultaten te maximaliseren.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item, i) => renderPriceCard(item, i))}
        </div>

        {/* Footer info box */}
        <div className="mt-32 bg-secondary dark:bg-primary p-12 rounded-premium text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 max-w-xl">
            <h3 className="text-3xl font-serif font-bold mb-4 italic">Vragen over betaling?</h3>
            <p className="text-gray-400 dark:text-white/80 leading-relaxed">Pakketten dienen bij de eerste afspraak direct voldaan te worden. Wij bieden echter de mogelijkheid voor betaling in termijnen voor onze Stamcel Booster en volledige kuren. Neem contact op voor de voorwaarden.</p>
          </div>
          <div className="relative z-10 flex flex-wrap gap-4 shrink-0">
            <button 
              onClick={() => onNavigate('/contact')}
              className="bg-primary dark:bg-white dark:text-primary hover:bg-primary/80 dark:hover:bg-white/90 text-white px-8 py-4 rounded-premium font-bold transition-all shadow-xl"
            >
              Contact Specialist
            </button>
            <button 
              onClick={() => onNavigate('/faq')}
              className="border-2 border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-premium font-bold transition-all"
            >
              Bekijk FAQ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prijzen;
