
import React, { useState, useMemo } from 'react';
import { FAQS } from '../constants';
import { FAQCategory } from '../types';

const FAQ: React.FC = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<FAQCategory | 'All'>('All');

  const filteredFaqs = useMemo(() => {
    return FAQS.filter(f => {
      const matchesSearch = f.question.toLowerCase().includes(search.toLowerCase()) || 
                            f.answer.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === 'All' || f.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <div className="bg-bg-main min-h-screen">
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-text-dark tracking-tight">Veelgestelde Vragen</h1>
          <p className="text-lg text-secondary font-light max-w-2xl mx-auto opacity-80">
            Antwoorden op al uw vragen over onze regeneratieve behandelingen en werkwijze.
          </p>
          <div className="relative max-w-2xl mx-auto">
            <span className="material-symbols-outlined absolute left-6 top-1/2 -translate-y-1/2 !text-primary text-2xl">search</span>
            <input 
              type="text" 
              placeholder="Waar bent u naar op zoek?"
              className="w-full h-16 pl-16 pr-8 rounded-full border-none bg-bg-main text-text-dark placeholder-gray-400 focus:ring-2 focus:ring-primary shadow-sm transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col lg:flex-row gap-12">
        <aside className="lg:w-64 shrink-0">
          <div className="sticky top-28 space-y-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">Categorieën</h3>
              <nav className="flex flex-col gap-2">
                <button 
                  onClick={() => setActiveCategory('All')}
                  className={`text-left px-5 py-3 rounded-premium text-sm font-medium transition-all ${activeCategory === 'All' ? 'bg-primary text-white shadow-lg' : 'hover:bg-white text-secondary'}`}
                >
                  Alles tonen
                </button>
                {Object.values(FAQCategory).map((cat) => (
                  <button 
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-left px-5 py-3 rounded-premium text-sm font-medium transition-all ${activeCategory === cat ? 'bg-primary text-white shadow-lg' : 'hover:bg-white text-secondary'}`}
                  >
                    {cat}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </aside>

        <main className="flex-1 space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-premium border border-gray-100 overflow-hidden shadow-sm transition-all hover:shadow-md">
                <summary className="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-serif font-bold text-text-dark">
                  <span>{faq.question}</span>
                  <span className="material-symbols-outlined !text-primary group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="px-6 pb-8 text-secondary leading-relaxed opacity-80 prose prose-premium">
                  {faq.answer}
                </div>
              </details>
            ))
          ) : (
            <div className="text-center py-20 bg-white rounded-premium border border-dashed border-gray-200">
              <span className="material-symbols-outlined !text-5xl mb-4 opacity-20">sentiment_neutral</span>
              <p className="text-secondary italic">Geen resultaten gevonden voor uw zoekopdracht.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default FAQ;
