
import React from 'react';

const StamcelBooster: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-bg-main min-h-screen">
      {/* High-End Hero Section */}
      <section className="bg-secondary text-white py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1600" className="w-full h-full object-cover" alt="Regenerative tech" />
        </div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-10">
          <div className="inline-block px-5 py-1.5 border border-primary text-primary rounded-full text-xs font-bold uppercase tracking-[0.3em] mb-4">Regeneratieve Haartherapie</div>
          <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tight">Stamcel Booster</h1>
          <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
            Innovatieve <span className="text-white font-medium">Autologe Micro-Graft Stamceltherapie</span>. Wij benutten de meest geavanceerde technieken uit de regeneratieve geneeskunde om uw natuurlijke haargroei van binnenuit te activeren.
          </p>
          <div className="flex flex-col items-center gap-2">
            <div className="text-5xl font-serif text-primary font-bold">€1.499,-</div>
            <div className="text-sm text-gray-500 line-through opacity-60">Normaal €1.799,-</div>
          </div>
        </div>
      </section>

      {/* Concept & Science */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl font-serif font-bold leading-tight">Lichaamseigen <span className="text-primary italic">Micro-Grafts</span></h2>
              <p className="text-lg text-secondary opacity-80 leading-relaxed">
                Bij PRPNederland introduceren wij een geavanceerde behandeling waarbij lichaamseigen micro-grafts worden gebruikt om de haarzakjes te stimuleren. Tijdens deze procedure worden drie zeer kleine huidbiopten uit de hoofdhuid afgenomen.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {[
                  { title: 'Progenitorcellen', desc: 'Activeert slapende follikels.' },
                  { title: 'Groeifactoren', desc: 'Versnelt celvernieuwing.' },
                  { title: 'Regeneratie', desc: 'Herstel op cellulair niveau.' },
                  { title: 'Biocompatibel', desc: '100% lichaamseigen materiaal.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="material-symbols-outlined text-primary">verified</span>
                    <div>
                      <h4 className="font-bold text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <div className="relative">
                <div className="absolute -inset-4 border border-primary/20 rounded-premium"></div>
                <img src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800" className="rounded-premium shadow-2xl relative z-10" alt="Laboratory equipment" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Step Process */}
      <section className="py-24 bg-bg-main overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif font-bold mb-4">Het Behandelproces</h2>
            <p className="text-secondary opacity-60">Uiterste precisie in 6 medisch gecontroleerde stappen.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Medische Intake', desc: 'Grondige analyse van uw haaruitval en medische geschiktheid door onze arts.' },
              { num: '02', title: 'Lokale Verdoving', desc: 'De afnameplek wordt plaatselijk verdoofd voor een volledig pijnloze procedure.' },
              { num: '03', title: 'Micro-graft Afname', desc: 'Drie uiterst kleine punch-biopten (±2–3 mm) worden afgenomen uit de achterzijde van het hoofd.' },
              { num: '04', title: 'Mechanische Verwerking', desc: 'Het weefsel wordt in een gecertificeerde medische machine gefilterd tot een rijke suspensie.' },
              { num: '05', title: 'Injectie', desc: 'De vloeistof met stamcel-achtige componenten wordt gericht in de hoofdhuid geïnjecteerd.' },
              { num: '06', title: 'Nazorg', desc: 'U ontvangt een nazorgplan en kunt direct uw dagelijkse activiteiten hervatten.' }
            ].map((step, i) => (
              <div key={i} className="bg-white p-10 rounded-premium shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
                <div className="text-primary font-serif italic text-4xl mb-6 opacity-30 group-hover:opacity-100 transition-opacity">{step.num}</div>
                <h4 className="text-xl font-bold mb-4">{step.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-12">
          <h2 className="text-3xl font-serif font-bold italic text-primary">Is deze behandeling voor u geschikt?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
            <div className="space-y-4">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <span className="material-symbols-outlined text-green-500">check_circle</span>
                Ideaal bij:
              </h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>• Beginstadium van erfelijke haaruitval</li>
                <li>• Diffuse haarverdunning</li>
                <li>• Ondersteuning na een haartransplantatie</li>
                <li>• Wens voor 100% natuurlijke regeneratie</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <span className="material-symbols-outlined text-red-400">cancel</span>
                Niet geschikt bij:
              </h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>• Volledig kale gebieden zonder actieve haarzakjes</li>
                <li>• Littekenweefsel op de hoofdhuid</li>
                <li>• Actieve ontstekingen aan de hoofdhuid</li>
              </ul>
            </div>
          </div>
          <div className="pt-10">
            <button 
              onClick={() => onNavigate('/consult-boeken')}
              className="bg-secondary text-white px-12 py-5 rounded-premium text-lg font-bold shadow-2xl hover:bg-black transition-all"
            >
              Vraag uw Medisch Consult aan
            </button>
            <p className="mt-6 text-xs text-gray-400 italic">Eén van de weinige klinieken in Nederland die deze geavanceerde micro-graft techniek toepast.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StamcelBooster;
