
import React from 'react';

const Mesotherapie: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-bg-main min-h-screen">
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 order-2 lg:order-1">
              <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?auto=format&fit=crop&q=80&w=800" className="rounded-premium shadow-2xl" alt="Skin care" />
            </div>
            <div className="flex-1 order-1 lg:order-2 space-y-8">
              <h1 className="text-5xl font-serif font-bold">Mesotherapie</h1>
              <p className="text-xl text-secondary font-light">
                Voed uw huid van binnenuit met onze op maat gemaakte vitamine-cocktails. Voor een direct zichtbare glow en diepe hydratatie.
              </p>
              <ul className="space-y-4">
                {['Directe hydratatie', 'Verbetert huidtextuur', 'Vervaagt fijne lijntjes', 'Natuurlijk resultaat'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    <span className="font-medium text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => onNavigate('/consult-boeken')}
                className="bg-secondary text-white px-10 py-4 rounded-premium font-bold hover:bg-black transition-all"
              >
                Behandeling boeken
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mesotherapie;
