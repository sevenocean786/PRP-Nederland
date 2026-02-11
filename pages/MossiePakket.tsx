
import React from 'react';

const MossiePakket: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-bg-main min-h-screen">
      <section className="bg-secondary text-white py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <img src="https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&q=80&w=1600" className="w-full h-full object-cover" alt="Luxury pattern" />
        </div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-8">
          <div className="inline-block px-4 py-1 border border-primary text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-4">Exclusief Traject</div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold">Het Mossie Pakket</h1>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            De ultieme combinatie van PRP en Mesotherapie voor diegenen die geen concessies doen aan hun uitstraling.
          </p>
          <div className="text-4xl font-serif text-primary font-bold">€1.250,-</div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-premium shadow-2xl p-12 -mt-20 relative z-20">
            <h2 className="text-3xl font-serif font-bold mb-10 text-center">Wat is inbegrepen?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-xl font-bold flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">science</span>
                  Medisch Traject
                </h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex gap-3"><span>•</span> 3x Volledige PRP behandelingen</li>
                  <li className="flex gap-3"><span>•</span> 3x Microneedling sessies</li>
                  <li className="flex gap-3"><span>•</span> Uitgebreide medische bloedanalyse</li>
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-bold flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">verified_user</span>
                  Extra Service
                </h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex gap-3"><span>•</span> Luxe nazorgpakket voor thuis</li>
                  <li className="flex gap-3"><span>•</span> 24/7 bereikbaarheid specialist</li>
                  <li className="flex gap-3"><span>•</span> Tussentijdse voortgangsgesprekken</li>
                </ul>
              </div>
            </div>
            <div className="mt-16 text-center">
              <button 
                onClick={() => onNavigate('/consult-boeken')}
                className="bg-primary text-white px-12 py-5 rounded-premium text-lg font-bold shadow-xl hover:bg-primary-dark transition-all"
              >
                Vraag Mossie Consult aan
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MossiePakket;
