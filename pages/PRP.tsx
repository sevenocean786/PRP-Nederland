
import React, { useState } from 'react';
import { FAQS } from '../constants';
import { FAQCategory } from '../types';

const PRP: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  const prpFaqs = FAQS.filter(f => f.category === FAQCategory.PRP).slice(0, 8);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const hashtags = [
    "#PRPNederland", "#PRPBehandeling", "#Haaruitval", "#Haarverdunning", "#Haargroei",
    "#PlateletRichPlasma", "#NatuurlijkeHaargroei", "#HaarHerstel", "#HaarTherapie",
    "#Haartransplantatie", "#PRPHaar", "#HoofdhuidBehandeling", "#MannenHaar",
    "#VrouwenHaar", "#Alopecia", "#AntiHaaruitval", "#HaarVerzorging",
    "#GezondHaar", "#MedischeHaargroei", "#HairRejuvenation"
  ];

  return (
    <div className="bg-bg-main min-h-screen">
      {/* High-End Hero Section */}
      <section className="bg-secondary text-white py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1579154235828-40198282c91c?auto=format&fit=crop&q=80&w=1600" 
            className="w-full h-full object-cover" 
            alt="Scientific background" 
          />
        </div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-10">
          <div className="inline-block px-5 py-1.5 border border-primary text-primary rounded-full text-xs font-bold uppercase tracking-[0.3em] mb-4">
            Platelet Rich Plasma Therapie
          </div>
          <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tight">PRP Behandeling</h1>
          <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
            Natuurlijke regeneratie door de kracht van uw <span className="text-white font-medium">eigen bloedplaatjes</span>. Een 100% biologische oplossing voor haarherstel en huidverjonging.
          </p>
          <div className="flex flex-col items-center gap-2">
            <div className="text-5xl font-serif text-primary font-bold text-shadow-sm">v.a. €299,-</div>
            <div className="text-[10px] text-gray-500 uppercase tracking-widest">Veilig • Effectief • Medisch</div>
          </div>
        </div>
      </section>

      {/* Science & Concept Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl font-serif font-bold leading-tight">De Wetenschap van <span className="text-primary italic">Regeneratie</span></h2>
              <p className="text-lg text-secondary opacity-80 leading-relaxed">
                Platelet Rich Plasma (PRP) maakt gebruik van een hoge concentratie bloedplaatjes uit uw eigen bloed. Deze plaatjes bevatten essentiële groeifactoren die de natuurlijke genezing van weefsel stimuleren en de haargroei direct bij de bron activeren.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {[
                  { title: 'Haarzakjes', desc: 'Stimuleert de bloedtoevoer naar de follikels.' },
                  { title: 'Huidherstel', desc: 'Verhoogt collageen- en elastineproductie.' },
                  { title: 'Autoloog', desc: 'Geen kans op allergische reacties.' },
                  { title: 'Resultaat', desc: 'Zichtbaar dikker en gezonder haar.' }
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
                <img 
                  src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800" 
                  className="rounded-premium shadow-2xl relative z-10" 
                  alt="Medical lab work" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Areas */}
      <section className="py-24 bg-bg-main">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold">Toepassingsgebieden</h2>
            <p className="text-secondary opacity-60">Gespecialiseerde oplossingen voor haar en huid.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: 'content_cut', 
                title: 'PRP voor Haar', 
                desc: 'Voedt de hoofdhuid met geconcentreerde groeifactoren, waardoor slapende haarzakjes weer tot leven komen en haaruitval zichtbaar vermindert.',
                color: 'border-primary'
              },
              { 
                icon: 'face', 
                title: 'Vampire Facial', 
                desc: 'Diepe collageenstimulatie door microneedling met uw eigen plasma. Voor een ongekende glow en strakkere huidcontouren.',
                color: 'border-secondary'
              },
              { 
                icon: 'back_hand', 
                title: 'Handverjonging', 
                desc: 'Herstel het volume en de textuur van de huid op de handrug. Rimpels vervagen en de huid krijgt haar vitale uitstraling terug.',
                color: 'border-primary'
              }
            ].map((t, i) => (
              <div key={i} className={`bg-white p-10 rounded-premium shadow-xl border-t-4 ${t.color} hover:-translate-y-2 transition-all duration-500 group`}>
                <div className="w-16 h-16 bg-bg-main rounded-full flex items-center justify-center mb-8 group-hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined !text-3xl">{t.icon}</span>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">{t.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif font-bold mb-4">Het Behandelproces</h2>
            <p className="text-secondary opacity-60">Een veilige, klinische ervaring in 5 overzichtelijke stappen.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { num: '01', title: 'Consult', desc: 'Medische analyse van uw situatie en wensen door onze BIG-arts.' },
              { num: '02', title: 'Afname', desc: 'Een kleine hoeveelheid bloed wordt afgenomen zoals bij de huisarts.' },
              { num: '03', title: 'Activatie', desc: 'Met een medische centrifuge scheiden we het rijke plasma.' },
              { num: '04', title: 'Behandeling', desc: 'Het geactiveerde plasma wordt gericht in de huid geïnjecteerd.' },
              { num: '05', title: 'Nazorg', desc: 'Directe terugkeer naar uw dagelijkse bezigheden met nazorgadvies.' }
            ].map((step, i) => (
              <div key={i} className="bg-bg-main p-8 rounded-premium border border-gray-100 hover:bg-white hover:shadow-2xl transition-all group">
                <div className="text-primary font-serif italic text-4xl mb-6 opacity-30 group-hover:opacity-100 transition-opacity">{step.num}</div>
                <h4 className="text-lg font-bold mb-3">{step.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Meest gestelde vragen</h2>
          <div className="space-y-4">
            {prpFaqs.map((faq, i) => (
              <div 
                key={i} 
                className={`bg-bg-main rounded-premium border border-gray-100 overflow-hidden shadow-sm transition-all ${openFaqIndex === i ? 'ring-1 ring-primary/20 bg-white' : ''}`}
              >
                <button 
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  className="w-full flex cursor-pointer items-center justify-between p-5 font-bold text-sm text-text-dark text-left"
                >
                  <span>{faq.question}</span>
                  <span className={`material-symbols-outlined !text-primary transition-transform text-sm ${openFaqIndex === i ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-5 pb-5 text-gray-500 text-xs leading-relaxed border-t border-gray-50 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button onClick={() => onNavigate('/faq')} className="text-primary font-bold text-sm hover:underline uppercase tracking-widest">
              Bekijk het volledige FAQ overzicht →
            </button>
          </div>
        </div>
      </section>

      {/* Premium CTA */}
      <section className="py-20 bg-secondary text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-4xl mx-auto px-4 space-y-8 relative z-10">
          <h2 className="text-4xl font-serif font-bold">Klaar voor een natuurlijk resultaat?</h2>
          <p className="text-gray-400">Onze kliniek in Den Haag staat voor u klaar met medische expertise en persoonlijke zorg.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => onNavigate('/consult-boeken')}
              className="bg-primary text-white px-12 py-5 rounded-premium font-bold shadow-2xl hover:bg-primary-dark transition-all transform hover:-translate-y-1"
            >
              Gratis Consult Inplannen
            </button>
            <button 
              onClick={() => onNavigate('/prijzen')}
              className="border-2 border-white/20 text-white px-12 py-5 rounded-premium font-bold hover:bg-white/10 transition-all"
            >
              Bekijk alle Tarieven
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PRP;
