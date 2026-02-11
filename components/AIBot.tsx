
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { FAQS, CONTACT_INFO } from '../constants';

interface AIBotProps {
  onNavigate: (path: string) => void;
}

const AIBot: React.FC<AIBotProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [hintText, setHintText] = useState('Stel uw medische vraag!');
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: 'Hoi! Ik ben uw assistent bij PRPNederland. Hoe kan ik u helpen met haarherstel of huidverjonging? Wilt u direct een afspraak inplannen?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const hints = [
    'Waar zitten jullie?',
    'Wat kost PRP?',
    'Helpen jullie bij haaruitval?',
    'Wanneer zijn jullie open?',
    'Ik wil een afspraak maken'
  ];

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  useEffect(() => {
    const hintInterval = setInterval(() => {
      if (!isOpen) {
        setHintText(hints[Math.floor(Math.random() * hints.length)]);
        setShowHint(true);
        setTimeout(() => setShowHint(false), 4000);
      }
    }, 25000);
    return () => clearInterval(hintInterval);
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const faqContext = FAQS.map(f => `V: ${f.question} A: ${f.answer}`).join('\n');
      
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: userMsg,
        config: {
          systemInstruction: `Je bent de premium AI assistent van PRPNederland. 
          
          LOCATIE & TIJDEN:
          - Je bevindt je op: Waldorpstraat 215-2, 2521 CJ Den Haag.
          - Openingstijden: Maandag t/m Vrijdag 10:00 - 17:00, Zaterdag 11:00 - 14:00.
          
          JOUW OPDRACHT:
          1. Antwoord ALTIJD kort, krachtig en vriendelijk (max 2-3 zinnen).
          2. Bij vragen over locatie/tijden: vermeld direct "Waldorpstraat te Den Haag" en de tijden.
          3. Sluit ELK bericht af met exact deze vraag: "Wilt u direct een afspraak inplannen of zal ik u helpen met de consult-planning?"
          4. Als de klant hulp wil bij boeken of een afspraak wil: Vraag STAP VOOR STAP (dus 1 voor 1!) naar:
             - Naam
             - E-mail
             - Telefoonnummer
             Zeg dat je dit doet om de boeking alvast voor te bereiden.
          5. Blijf professioneel en klantvriendelijk, gericht op het binnenhalen van de klant.

          MEDISCHE DATA:
          ${faqContext}
          
          Focus: Conversie naar een boeking.`
        }
      });

      const botText = response.text || "Excuses, ik heb een verbindingsfout. Bel ons op 085 400 84 84 voor direct antwoord.";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: "Er is een technische storing. Bel ons op 085 400 84 84 voor hulp bij uw boeking." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleBookClick = () => {
    onNavigate('/consult-boeken');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
      {showHint && !isOpen && (
        <div className="bg-white dark:bg-secondary p-3 px-5 rounded-2xl shadow-xl border border-primary/20 mb-3 animate-bounce-in max-w-[200px] relative">
          <p className="text-[11px] font-bold text-secondary dark:text-white leading-tight">{hintText}</p>
          <div className="absolute bottom-0 right-6 translate-y-1/2 w-3 h-3 bg-white dark:bg-secondary border-r border-b border-primary/20 rotate-45"></div>
        </div>
      )}

      {isOpen && (
        <div className="w-[360px] h-[550px] bg-white dark:bg-[#1a1a1a] rounded-premium shadow-2xl flex flex-col mb-4 overflow-hidden border border-gray-100 dark:border-gray-800 animate-fade-in-up">
          <div className="bg-secondary p-5 flex justify-between items-center text-white relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="flex items-center gap-3 z-10">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center border border-primary/30">
                <span className="material-symbols-outlined !text-primary">clinical_notes</span>
              </div>
              <div>
                <span className="block font-bold text-sm tracking-tight">PRP Assistent</span>
                <span className="block text-[10px] text-primary font-bold uppercase tracking-widest">Altijd Bereikbaar</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="z-10 hover:bg-white/10 p-1 rounded-full transition-colors">
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F9F9F9] dark:bg-[#121212]">
            {messages.map((m, i) => (
              <div key={i} className="space-y-2">
                <div className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-primary text-white rounded-tr-none shadow-md' : 'bg-white dark:bg-secondary text-secondary dark:text-gray-200 shadow-sm rounded-tl-none border border-gray-100 dark:border-gray-800'}`}>
                    {m.text}
                  </div>
                </div>
                {m.role === 'bot' && (
                  <div className="flex justify-start">
                    <button 
                      onClick={handleBookClick}
                      className="ml-2 mt-1 text-[11px] font-bold text-primary flex items-center gap-1 hover:underline group"
                    >
                      <span className="material-symbols-outlined !text-xs">calendar_month</span>
                      Direct naar de boekingstool
                      <span className="material-symbols-outlined !text-xs group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </button>
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-secondary p-4 rounded-2xl shadow-sm rounded-tl-none border border-gray-100 dark:border-gray-800 flex gap-1">
                  <div className="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white dark:bg-[#1a1a1a] border-t border-gray-100 dark:border-gray-800 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Typ uw vraag..."
              className="flex-1 border-none bg-bg-main dark:bg-[#121212] dark:text-white rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20"
            />
            <button 
              onClick={handleSend} 
              disabled={!input.trim() || loading}
              className="bg-secondary dark:bg-primary text-white w-12 h-12 rounded-xl flex items-center justify-center hover:bg-black dark:hover:bg-primary/80 transition-all active:scale-95 disabled:opacity-50"
            >
              <span className="material-symbols-outlined !text-white text-xl">send</span>
            </button>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 bg-white dark:bg-secondary border border-primary/20 rounded-full shadow-2xl flex items-center justify-center group hover:scale-110 transition-all relative overflow-hidden ${!isOpen ? 'animate-blink' : ''}`}
      >
        <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
        <span className="material-symbols-outlined !text-primary !text-3xl relative z-10 group-hover:rotate-12 transition-transform">clinical_notes</span>
        <span className="absolute top-3 right-3 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
      </button>
    </div>
  );
};

export default AIBot;
