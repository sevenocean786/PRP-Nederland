
import React from 'react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="bg-bg-main min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-text-dark tracking-tight">Contact</h1>
          <p className="text-lg text-secondary font-light max-w-2xl mx-auto opacity-80">
            Onze kliniek in Den Haag is uitstekend bereikbaar. Plan uw route of neem direct contact op.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-premium shadow-sm border border-gray-100 space-y-8">
              <h3 className="text-2xl font-serif font-bold mb-4">Locatie Den Haag</h3>
              
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined !text-primary">location_on</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Adres</h4>
                  <p className="text-gray-600">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined !text-primary">call</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Telefoon</h4>
                  <p className="text-gray-600">{CONTACT_INFO.phone}</p>
                  <p className="text-xs text-gray-400">Maandag t/m Vrijdag: {CONTACT_INFO.hours.weekdays}</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined !text-primary">mail</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">E-mail</h4>
                  <p className="text-gray-600">{CONTACT_INFO.email}</p>
                </div>
              </div>
            </div>

            <div className="bg-secondary rounded-premium p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <h4 className="text-xl font-serif font-bold mb-4">Bereikbaarheid</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Onze kliniek bevindt zich aan de Waldorpstraat, nabij Station Den Haag Hollands Spoor. Parkeren kan in de directe omgeving (betaald).
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 rounded-premium shadow-xl border border-gray-100">
            <h3 className="text-2xl font-serif font-bold mb-8">Stuur ons een bericht</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Naam</label>
                  <input type="text" className="w-full bg-bg-main border-none rounded-premium p-4 focus:ring-2 focus:ring-primary transition-all" placeholder="Uw naam" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">E-mail</label>
                  <input type="email" className="w-full bg-bg-main border-none rounded-premium p-4 focus:ring-2 focus:ring-primary transition-all" placeholder="uw@email.nl" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Onderwerp</label>
                <select className="w-full bg-bg-main border-none rounded-premium p-4 focus:ring-2 focus:ring-primary transition-all appearance-none">
                  <option>PRP Behandeling</option>
                  <option>Meso Therapie</option>
                  <option>Stamcel Booster</option>
                  <option>Anders</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Bericht</label>
                <textarea rows={5} className="w-full bg-bg-main border-none rounded-premium p-4 focus:ring-2 focus:ring-primary transition-all" placeholder="Hoe kunnen we u helpen?"></textarea>
              </div>
              <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-5 rounded-premium shadow-lg transition-all transform hover:-translate-y-1">
                Bericht Versturen
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
