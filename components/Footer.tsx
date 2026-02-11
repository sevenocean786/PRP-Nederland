
import React from 'react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  const openLegal = (type: string) => {
    window.open(`/legal/${type}`, '_blank');
  };

  return (
    <footer className="bg-secondary text-white pt-20 pb-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined !text-primary text-2xl">biotech</span>
              <h2 className="text-xl font-serif font-bold italic text-primary">PRPNederland</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Specialist in regeneratieve esthetiek. Natuurlijke resultaten door 100% lichaamseigen materiaal. BIG-geregistreerde artsen.
            </p>
            <div className="flex gap-4">
              <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-primary transition-colors">
                <span className="material-symbols-outlined !text-white">alternate_email</span>
              </a>
              <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">
                <span className="material-symbols-outlined !text-white">call</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-white/90">Wettelijke Info</h4>
            <ul className="space-y-4 text-xs text-gray-400 uppercase tracking-widest font-bold">
              <li><button onClick={() => openLegal('privacy')} className="hover:text-primary transition-colors text-left">Privacy (AVG / GDPR)</button></li>
              <li><button onClick={() => openLegal('geschillen')} className="hover:text-primary transition-colors text-left">Geschillenregeling</button></li>
              <li><button onClick={() => openLegal('kwaliteit')} className="hover:text-primary transition-colors text-left">Kwaliteitssysteem</button></li>
              <li><button onClick={() => openLegal('consent')} className="hover:text-primary transition-colors text-left">Informed Consent</button></li>
              <li><button onClick={() => openLegal('voorwaarden')} className="hover:text-primary transition-colors text-left">Algemene Voorwaarden</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Behandelingen</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><button onClick={() => onNavigate('/prp-behandeling')} className="hover:text-primary transition-colors">PRP Behandeling</button></li>
              <li><button onClick={() => onNavigate('/mesotherapie')} className="hover:text-primary transition-colors">Mesotherapie</button></li>
              <li><button onClick={() => onNavigate('/stamcel-booster')} className="hover:text-primary transition-colors">Stamcel Booster</button></li>
              <li><button onClick={() => onNavigate('/prijzen')} className="hover:text-primary transition-colors">Tarieven Overzicht</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Locatie Den Haag</h4>
            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined !text-primary text-lg">location_on</span>
                <span>{CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined !text-primary text-lg">call</span>
                <span>{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined !text-primary text-lg">schedule</span>
                <span>Ma - Vr: {CONTACT_INFO.hours.weekdays}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-gray-500">
          <p>© 2024 PRPNederland. Medisch gecertificeerde kliniek.</p>
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><span className="material-symbols-outlined !text-[10px] text-green-500">verified</span> BIG-geregistreerde Artsen</span>
            <span>Wkkgz Gecertificeerd</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
