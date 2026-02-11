
import React from 'react';

const OverOns: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-bg-main min-h-screen">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1 space-y-8">
              <h1 className="text-5xl font-serif font-bold">Over PRPNederland</h1>
              <p className="text-xl text-secondary font-light leading-relaxed">
                PRPNederland is ontstaan uit een passie voor regeneratieve geneeskunde. Wij geloven dat de mooiste resultaten voortkomen uit de eigen kracht van het lichaam.
              </p>
              <p className="text-gray-600">
                In onze klinieken in Amsterdam werken we uitsluitend met BIG-geregistreerde artsen en de meest geavanceerde apparatuur. Veiligheid en resultaat gaan bij ons hand in hand.
              </p>
              <div className="grid grid-cols-2 gap-8 py-4">
                <div>
                  <div className="text-4xl font-serif font-bold text-primary mb-2">10+</div>
                  <div className="text-sm font-bold uppercase tracking-widest text-gray-400">Jaren Ervaring</div>
                </div>
                <div>
                  <div className="text-4xl font-serif font-bold text-primary mb-2">5000+</div>
                  <div className="text-sm font-bold uppercase tracking-widest text-gray-400">Behandelingen</div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <img src="https://images.unsplash.com/photo-1559839734-2b71f1e3c77d?auto=format&fit=crop&q=80&w=800" className="rounded-premium shadow-2xl" alt="Medical professional" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-12">Onze Kernwaarden</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: 'shield_moon', title: 'Veiligheid', text: 'Strenge medische protocollen en BIG-artsen.' },
              { icon: 'nature', title: 'Natuurlijk', text: 'Geen lichaamsvreemde stoffen, enkel uw eigen plasma.' },
              { icon: 'favorite', title: 'Zorg', text: 'Persoonlijke begeleiding van intake tot nazorg.' },
            ].map((v, i) => (
              <div key={i} className="space-y-4">
                <span className="material-symbols-outlined !text-4xl text-primary">{v.icon}</span>
                <h3 className="text-xl font-serif font-bold">{v.title}</h3>
                <p className="text-sm text-gray-500">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OverOns;
