
import React, { useMemo } from 'react';
import { PRICES } from '../constants';

const Home: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  const reviews = [
    { name: 'S. van der Meer', city: 'Amsterdam', text: 'Eindelijk volume terug bij mijn haargrens na de PRP kuur. Zeer professioneel.' },
    { name: 'E. Janssen', city: 'Utrecht', text: 'De glow na de Meso Therapie is fantastisch. Geen pijn gehad.' },
    { name: 'M. de Boer', city: 'Den Haag', text: 'Geweldige kliniek op de Waldorpstraat. Erg blij met mijn Stamcel Booster resultaat.' },
    { name: 'J. Bakker', city: 'Rotterdam', text: 'PRP heeft mijn haaruitval echt afgeremd. De artsen zijn erg deskundig.' },
    { name: 'K. de Wit', city: 'Haarlem', text: 'Vriendelijke begeleiding en een heel eerlijk advies over wat mogelijk is.' }
  ];

  // Pick 3 random highlights from the PRICES list to make the site feel fresh on every refresh
  const featuredHighlights = useMemo(() => {
    return [...PRICES]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative w-full py-20 lg:py-32 bg-white dark:bg-[#121212] overflow-hidden transition-colors">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8 text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full">
              Specialist in Den Haag & Amsterdam
            </div>
            <h1 className="text-5xl lg:text-8xl font-serif font-bold text-text-dark dark:text-white leading-[1.1] tracking-tighter">
              Uw <span className="text-primary italic">Eigen Bloed</span>,<br/>Onze Kracht.
            </h1>
            <p className="text-xl text-secondary dark:text-gray-400 font-light max-w-xl">
              De meest effectieve methode voor natuurlijk haarherstel en huidverjonging. Veilig, 100% biologisch en uitgevoerd door ervaren BIG-artsen.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => onNavigate('/consult-boeken')}
                className="bg-secondary dark:bg-primary text-white px-10 py-5 rounded-premium font-bold shadow-2xl hover:bg-black dark:hover:bg-primary/80 transition-all transform hover:-translate-y-1"
              >
                Gratis consult plannen
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
            {/* BIG-Artsen Ballon/Badge */}
            <div className="absolute -top-6 -left-6 z-20 animate-bounce">
              <div className="bg-white dark:bg-secondary p-4 rounded-full shadow-2xl border-2 border-primary flex flex-col items-center justify-center w-24 h-24 text-center">
                <span className="material-symbols-outlined !text-primary !text-2xl">verified_user</span>
                <span className="text-[10px] font-bold uppercase tracking-tighter leading-none mt-1 dark:text-white">BIG-Artsen</span>
              </div>
            </div>
            
            <div className="w-full aspect-[4/5] bg-bg-main dark:bg-gray-800 rounded-premium overflow-hidden shadow-2xl border-8 border-white dark:border-gray-900 transition-all">
              <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200" alt="Clinic Interior" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 3 Blocks: PRP, Meso, Stamcel side by side */}
      <section className="py-24 bg-bg-main dark:bg-[#1a1a1a] transition-colors">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-serif font-bold dark:text-white">Onze Specialismen</h2>
            <p className="text-secondary dark:text-gray-500 opacity-60">Drie krachtige wegen naar natuurlijk herstel.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* PRP Block */}
            <div className="group bg-white dark:bg-secondary rounded-premium overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-transparent hover:border-primary/10 cursor-pointer flex flex-col h-full" onClick={() => onNavigate('/prp-behandeling')}>
              <div className="h-56 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="PRP" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="relative inline-block self-start mb-4">
                  <h3 className="text-2xl font-serif font-bold dark:text-white transition-colors group-hover:text-primary">PRP Behandeling</h3>
                  <span className="absolute -bottom-1 left-0 h-[2px] bg-primary w-0 group-hover:w-full transition-all duration-500"></span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-8 flex-grow">Natuurlijk haarherstel met uw eigen bloedplaatjes. De veiligste methode om haaruitval te stoppen en dichtheid te verhogen.</p>
                <div className="flex items-center text-primary font-bold uppercase tracking-widest text-[10px] gap-2 mt-auto">
                  Bekijk PRP <span className="material-symbols-outlined !text-sm group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </div>
              </div>
            </div>

            {/* Meso Block */}
            <div className="group bg-white dark:bg-secondary rounded-premium overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-transparent hover:border-primary/10 cursor-pointer flex flex-col h-full" onClick={() => onNavigate('/mesotherapie')}>
              <div className="h-56 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Meso" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="relative inline-block self-start mb-4">
                  <h3 className="text-2xl font-serif font-bold dark:text-white transition-colors group-hover:text-primary">Meso Therapie</h3>
                  <span className="absolute -bottom-1 left-0 h-[2px] bg-primary w-0 group-hover:w-full transition-all duration-500"></span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-8 flex-grow">Krachtige vitamine-boost voor een stralende en gezonde huid. Onze cocktails voeden de huid exact waar dat nodig is.</p>
                <div className="flex items-center text-primary font-bold uppercase tracking-widest text-[10px] gap-2 mt-auto">
                  Bekijk Meso <span className="material-symbols-outlined !text-sm group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </div>
              </div>
            </div>

            {/* Stamcel Block */}
            <div className="group bg-white dark:bg-secondary rounded-premium overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-transparent hover:border-primary/10 cursor-pointer flex flex-col h-full" onClick={() => onNavigate('/stamcel-booster')}>
              <div className="h-56 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Stamcel" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="relative inline-block self-start mb-4">
                  <h3 className="text-2xl font-serif font-bold dark:text-white transition-colors group-hover:text-primary">Stamcel Booster</h3>
                  <span className="absolute -bottom-1 left-0 h-[2px] bg-primary w-0 group-hover:w-full transition-all duration-500"></span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-8 flex-grow">Onze meest geavanceerde regeneratieve behandeling met micro-grafts voor maximale stimulatie op cellulair niveau.</p>
                <div className="flex items-center text-primary font-bold uppercase tracking-widest text-[10px] gap-2 mt-auto">
                  Bekijk Stamcel <span className="material-symbols-outlined !text-sm group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Blocks: Highlighted Products / Services */}
      <section className="py-24 bg-white dark:bg-[#121212] transition-colors">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-serif font-bold dark:text-white">Expert Highlights</h2>
            <p className="text-secondary dark:text-gray-500 opacity-60">Ontdek onze meest gevraagde behandelingen en producten.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredHighlights.map((p, i) => (
              <div key={i} className="bg-bg-main dark:bg-secondary/40 p-8 rounded-premium border border-gray-100 dark:border-gray-800 transition-all hover:border-primary/30 group relative flex flex-col">
                <div className="mb-6 flex justify-between items-start">
                  <div className="relative">
                    <h3 className="text-xl font-bold dark:text-white leading-tight pr-4 group-hover:text-primary transition-colors">{p.title}</h3>
                    <span className="absolute -bottom-1 left-0 h-[2px] bg-primary w-0 group-hover:w-full transition-all duration-500"></span>
                  </div>
                  <span className="text-primary font-bold text-lg whitespace-nowrap">{p.price}</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 leading-relaxed line-clamp-2">{p.description}</p>
                <button 
                  onClick={() => onNavigate('/prijzen')}
                  className="w-full mt-auto bg-white dark:bg-secondary py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  {p.category === 'product' ? 'Nu Bestellen' : 'Bekijk Tarieven'} <span className="material-symbols-outlined !text-sm">{p.category === 'product' ? 'shopping_cart' : 'info'}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consult CTA Section */}
      <section className="py-24 bg-bg-main dark:bg-[#1a1a1a]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-secondary dark:bg-primary p-12 rounded-premium text-white flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[100px] group-hover:scale-110 transition-transform"></div>
            <div className="space-y-4 max-w-lg relative z-10">
              <h2 className="text-4xl font-serif font-bold italic">Klaar voor de volgende stap?</h2>
              <p className="text-gray-400 dark:text-white/80">Boek nu uw gratis consult en ontdek wat PRP of de Stamcel Booster voor u kan betekenen. Wij vragen slechts €1 verificatie.</p>
            </div>
            <button 
              onClick={() => onNavigate('/consult-boeken')}
              className="bg-primary dark:bg-white dark:text-primary text-white px-12 py-5 rounded-premium text-lg font-bold shadow-xl hover:-translate-y-1 transition-all shrink-0 relative z-10"
            >
              Nu Consult Boeken
            </button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-white dark:bg-[#121212] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-16 dark:text-white">Beoordelingen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <div key={i} className="text-left bg-bg-main dark:bg-secondary p-8 rounded-premium relative shadow-sm hover:shadow-md transition-all group border border-transparent hover:border-primary/10">
                <span className="material-symbols-outlined absolute top-4 right-4 text-primary opacity-20 !text-5xl group-hover:scale-110 transition-transform">format_quote</span>
                <div className="flex text-primary mb-4">
                  {[1,2,3,4,5].map(s => <span key={s} className="material-symbols-outlined !text-sm">star</span>)}
                </div>
                <p className="text-sm italic text-secondary dark:text-gray-300 mb-6 leading-relaxed">"{r.text}"</p>
                <div className="mt-auto">
                  <div className="font-bold text-sm dark:text-white">{r.name}</div>
                  <div className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-widest">{r.city}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
