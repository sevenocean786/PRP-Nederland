
import React from 'react';

const FAQBar: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  return (
    <div 
      onClick={() => onNavigate('/faq')}
      className="bg-primary/5 py-4 border-y border-primary/10 cursor-pointer group hover:bg-primary/10 transition-all"
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined !text-primary">help_outline</span>
          <span className="text-xs sm:text-sm font-medium text-secondary">
            Heb je vragen over de behandeling of tarieven? Bekijk onze <span className="font-bold">Veelgestelde Vragen (FAQ)</span>.
          </span>
        </div>
        <span className="material-symbols-outlined !text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
      </div>
    </div>
  );
};

export default FAQBar;
