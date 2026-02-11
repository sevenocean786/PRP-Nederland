
import React, { useState } from 'react';
import { CONTACT_INFO, PRICES } from '../constants';

const Booking: React.FC = () => {
  const [step, setStep] = useState(0);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedTreatment, setSelectedTreatment] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    birthDate: ''
  });

  const days = ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag'];
  
  const getTimeSlots = (day: string) => {
    if (day === 'Dinsdag') return [];
    if (day === 'Zondag') return [];
    if (day === 'Zaterdag') return ['11:00', '11:30', '12:00', '12:30', '13:00', '13:30'];
    return ['12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'];
  };

  const handleNext = () => setStep(s => s + 1);
  const handleBack = () => setStep(s => s - 1);

  const isPhoneNumeric = (phone: string) => {
    const cleanPhone = phone.replace(/\s+/g, '').replace(/\+/g, '');
    return /^\d+$/.test(cleanPhone);
  };

  const canProgress = () => {
    if (step === 0) return !!selectedDay;
    if (step === 1) return !!selectedTime;
    if (step === 2) {
      return formData.fullName && 
             formData.email && 
             formData.phone && 
             isPhoneNumeric(formData.phone) &&
             formData.birthDate;
    }
    if (step === 3) return !!selectedTreatment;
    return false;
  };

  return (
    <div className="bg-bg-main min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-text-dark tracking-tight">Plan uw Consult</h1>
          <p className="text-secondary opacity-70">Locatie Den Haag: {CONTACT_INFO.address}</p>
        </div>

        {/* Progress Tracker */}
        <div className="flex justify-between items-center mb-12 max-w-lg mx-auto relative">
          {[0, 1, 2, 3].map((s) => (
            <div key={s} className="flex flex-col items-center z-10">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 transition-all ${
                step >= s ? 'bg-primary border-primary text-white' : 'bg-white border-gray-200 text-gray-400'
              }`}>
                {s + 1}
              </div>
            </div>
          ))}
          <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-200 -z-0"></div>
          <div className="absolute top-5 left-0 h-0.5 bg-primary transition-all duration-300 -z-0" style={{ width: `${(step / 3) * 100}%` }}></div>
        </div>

        <div className="bg-white rounded-premium p-8 md:p-12 shadow-2xl border border-gray-100 min-h-[500px] flex flex-col">
          {step === 0 && (
            <div className="animate-fade-in space-y-8 flex-grow">
              <h3 className="text-2xl font-serif font-bold text-center">Stap 1: Kies een dag</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
                {days.map(day => (
                  <button
                    key={day}
                    onClick={() => { setSelectedDay(day); setSelectedTime(null); }}
                    disabled={day === 'Dinsdag' || day === 'Zondag'}
                    className={`p-4 rounded-premium text-sm font-bold transition-all border ${
                      selectedDay === day ? 'bg-primary text-white border-primary shadow-lg' : 
                      (day === 'Dinsdag' || day === 'Zondag') ? 'bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed' :
                      'bg-white text-secondary hover:border-primary/50 border-gray-100'
                    }`}
                  >
                    {day}
                    {day === 'Dinsdag' && <div className="text-[9px] font-bold text-red-400 mt-1 uppercase">Vol</div>}
                    {day === 'Zondag' && <div className="text-[9px] font-bold text-gray-400 mt-1 uppercase">Dicht</div>}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="animate-fade-in space-y-8 flex-grow">
              <h3 className="text-2xl font-serif font-bold text-center">Stap 2: Beschikbare tijden op {selectedDay}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {selectedDay && getTimeSlots(selectedDay).map(time => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`py-4 rounded-premium text-sm font-bold transition-all border ${
                      selectedTime === time ? 'bg-secondary text-white border-secondary shadow-lg' : 'bg-bg-main text-secondary hover:bg-white border-gray-200'
                    }`}
                  >
                    {time} uur
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-in space-y-8 flex-grow">
              <h3 className="text-2xl font-serif font-bold text-center">Stap 3: Uw NAW gegevens</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Volledige Naam</label>
                  <input 
                    type="text" 
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="w-full bg-bg-main border-none rounded-premium p-4 focus:ring-2 focus:ring-primary transition-all" 
                    placeholder="Voor- en achternaam" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">E-mailadres</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-bg-main border-none rounded-premium p-4 focus:ring-2 focus:ring-primary transition-all" 
                    placeholder="uw@email.nl" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Telefoonnummer (Alleen cijfers)</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className={`w-full bg-bg-main border-none rounded-premium p-4 focus:ring-2 focus:ring-primary transition-all ${formData.phone && !isPhoneNumeric(formData.phone) ? 'ring-2 ring-red-400' : ''}`} 
                    placeholder="0612345678" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Geboortedatum</label>
                  <input 
                    type="date" 
                    value={formData.birthDate}
                    onChange={(e) => setFormData({...formData, birthDate: e.target.value})}
                    className="w-full bg-bg-main border-none rounded-premium p-4 focus:ring-2 focus:ring-primary transition-all" 
                  />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-fade-in space-y-8 flex-grow">
              <h3 className="text-2xl font-serif font-bold text-center">Stap 4: Kies uw Behandeling</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {PRICES.map(p => (
                  <button
                    key={p.title}
                    onClick={() => setSelectedTreatment(p.title)}
                    className={`p-6 rounded-premium text-left border transition-all ${
                      selectedTreatment === p.title ? 'bg-primary/5 border-primary shadow-md' : 'bg-white border-gray-100 hover:border-primary/50'
                    }`}
                  >
                    <div className="font-bold text-lg mb-1">{p.title}</div>
                    <div className="text-sm text-gray-500 line-clamp-1">{p.description}</div>
                  </button>
                ))}
                <button
                  onClick={() => setSelectedTreatment('Enkel Consult / Reservering')}
                  className={`p-6 rounded-premium text-left border transition-all ${
                    selectedTreatment === 'Enkel Consult / Reservering' ? 'bg-primary/5 border-primary shadow-md' : 'bg-white border-gray-100 hover:border-primary/50'
                  }`}
                >
                  <div className="font-bold text-lg mb-1">Enkel Consult</div>
                  <div className="text-sm text-gray-500">Alleen kennismaking en advies.</div>
                </button>
              </div>

              <div className="pt-8 border-t border-gray-50 mt-8 space-y-4">
                <div className="bg-bg-main p-6 rounded-premium border border-primary/10">
                  <h4 className="font-bold mb-2 italic text-primary">Overzicht Reservering</h4>
                  <p className="text-sm text-secondary">
                    <span className="font-bold">{formData.fullName}</span> (geb. {formData.birthDate})<br/>
                    Gekozen moment: <span className="font-bold text-primary">{selectedDay} om {selectedTime} uur</span><br/>
                    Behandeling: <span className="font-bold">{selectedTreatment || 'Nog niet gekozen'}</span>
                  </p>
                </div>
                
                <div className="flex flex-col gap-4">
                  <button 
                    disabled={!canProgress()}
                    className={`w-full py-5 rounded-premium text-lg font-bold shadow-xl transition-all transform hover:-translate-y-1 ${
                      canProgress() ? 'bg-primary text-white' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                    onClick={() => window.open('https://buy.stripe.com/test_fyc5lvb0b4WdgQ8', '_blank')}
                  >
                    Bevestig Afspraak (€1,-)
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-12 pt-8 border-t border-gray-100">
            {step > 0 ? (
              <button onClick={handleBack} className="flex items-center gap-2 text-secondary font-bold hover:text-primary transition-colors">
                <span className="material-symbols-outlined">arrow_back</span> Vorige
              </button>
            ) : <div />}
            {step < 3 && (
              <button 
                onClick={handleNext} 
                disabled={!canProgress()}
                className={`flex items-center gap-2 font-bold transition-all px-8 py-3 rounded-full ${
                  canProgress() ? 'bg-primary text-white shadow-lg' : 'bg-gray-100 text-gray-300 cursor-not-allowed'
                }`}
              >
                Volgende <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
