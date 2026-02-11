
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FAQBar from './components/FAQBar';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import Booking from './pages/Booking';
import PRP from './pages/PRP';
import Mesotherapie from './pages/Mesotherapie';
import StamcelBooster from './pages/StamcelBooster';
import Prijzen from './pages/Prijzen';
import OverOns from './pages/OverOns';
import Contact from './pages/Contact';
import Legal, { LegalType } from './pages/Legal';
import AIBot from './components/AIBot';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState('/');
  const [flash, setFlash] = useState<string | null>(null);
  const [showSecureStatus, setShowSecureStatus] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userIP, setUserIP] = useState('82.161.45.102');

  const cities = ['Amsterdam', 'Rotterdam', 'Den Haag', 'Utrecht', 'Eindhoven', 'Groningen', 'Leiden', 'Haarlem', 'Maastricht', 'Arnhem', 'Nijmegen', 'Breda'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPath]);

  useEffect(() => {
    const welcomeTimer = setTimeout(() => {
      setIsLoggedIn(true);
      setShowSecureStatus(true);
      setFlash(`Welkom terug! U bent beveiligd verbonden (IP: ${userIP})`);
      
      setTimeout(() => {
        setFlash(null);
        setShowSecureStatus(false);
      }, 20000);
    }, 1500);

    const interval = setInterval(() => {
      if (!showSecureStatus) {
        const city = cities[Math.floor(Math.random() * cities.length)];
        setFlash(`Nieuw consult geboekt in ${city}`);
        setTimeout(() => setFlash(null), 5000);
      }
    }, 60000); 

    return () => {
      clearInterval(interval);
      clearTimeout(welcomeTimer);
    };
  }, [showSecureStatus]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const renderPage = () => {
    if (currentPath.startsWith('/legal/')) {
      const type = currentPath.split('/')[2] as LegalType;
      return <Legal type={type} />;
    }

    switch (currentPath) {
      case '/': return <Home onNavigate={setCurrentPath} />;
      case '/faq': return <FAQ />;
      case '/consult-boeken': return <Booking />;
      case '/prp-behandeling': return <PRP onNavigate={setCurrentPath} />;
      case '/mesotherapie': return <Mesotherapie onNavigate={setCurrentPath} />;
      case '/stamcel-booster': return <StamcelBooster onNavigate={setCurrentPath} />;
      case '/prijzen': return <Prijzen onNavigate={setCurrentPath} />;
      case '/over-ons': return <OverOns onNavigate={setCurrentPath} />;
      case '/contact': return <Contact />;
      default: return <Home onNavigate={setCurrentPath} />;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans selection:bg-primary/20 transition-colors duration-300 ${darkMode ? 'bg-[#121212]' : 'bg-bg-main'}`}>
      <Header 
        currentPath={currentPath} 
        onNavigate={setCurrentPath} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        isLoggedIn={isLoggedIn && showSecureStatus}
      />
      
      <main className="flex-grow">
        {renderPage()}
        {currentPath !== '/faq' && !currentPath.includes('legal') && <FAQBar onNavigate={setCurrentPath} />}
      </main>

      <Footer onNavigate={setCurrentPath} />
      <AIBot onNavigate={setCurrentPath} />

      {flash && (
        <div className="fixed bottom-28 left-8 z-50 animate-bounce-in pointer-events-none">
          <div className={`backdrop-blur-sm shadow-2xl border px-6 py-4 rounded-full flex items-center gap-4 transition-all duration-500 ${showSecureStatus ? 'bg-secondary/95 border-primary/40' : 'bg-white/95 dark:bg-secondary/95 border-primary/20'}`}>
            <span className="relative flex h-3 w-3">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${showSecureStatus ? 'bg-primary' : 'bg-green-400'}`}></span>
              <span className={`relative inline-flex rounded-full h-3 w-3 ${showSecureStatus ? 'bg-primary' : 'bg-green-500'}`}></span>
            </span>
            <span className={`text-[10px] font-bold uppercase tracking-widest leading-none ${showSecureStatus ? 'text-white' : 'text-secondary dark:text-white'}`}>
              {flash}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
