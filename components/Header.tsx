
import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  isLoggedIn: boolean;
}

const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate, darkMode, setDarkMode, isLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (path: string) => {
    onNavigate(path);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 dark:bg-[#121212]/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavigate('/')}
          >
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined !text-primary !text-2xl">biotech</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-text-dark dark:text-white text-xl font-serif font-bold tracking-tight">PRPNederland</h1>
              <span className="text-[9px] uppercase font-bold tracking-tighter text-primary/60">Regeneratieve Esthetiek</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavigate(link.path)}
                className={`text-sm font-semibold transition-colors hover:text-primary relative group ${
                  currentPath === link.path ? 'text-primary' : 'text-secondary/70 dark:text-gray-400'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 ${currentPath === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
            ))}
            
            <div className="h-6 w-[1px] bg-gray-200 dark:bg-gray-800 mx-2"></div>
            
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              title={darkMode ? "Licht modus" : "Donker modus"}
            >
              <span className="material-symbols-outlined !text-secondary dark:!text-gray-400">
                {darkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>

            <button 
              onClick={() => handleNavigate('/consult-boeken')}
              className="bg-secondary dark:bg-primary hover:bg-black dark:hover:bg-primary/80 text-white px-6 py-2.5 rounded-premium text-sm font-bold shadow-lg transition-all active:scale-95"
            >
              Gratis consult
            </button>
          </nav>

          <div className="lg:hidden flex items-center gap-4">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <span className="material-symbols-outlined !text-secondary dark:!text-gray-400">
                {darkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-secondary dark:text-white p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden bg-white dark:bg-[#1a1a1a] border-b border-gray-100 dark:border-gray-800 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="py-4 px-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.path}
              onClick={() => handleNavigate(link.path)}
              className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                currentPath === link.path ? 'bg-primary/10 text-primary' : 'text-secondary dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4 border-t border-gray-50 dark:border-gray-800 mt-2">
            <button 
              onClick={() => handleNavigate('/consult-boeken')}
              className="block w-full bg-secondary dark:bg-primary text-white text-center py-4 rounded-premium font-bold shadow-lg"
            >
              Gratis consult boeken
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
