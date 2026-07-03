"use client";

import React, { useState } from 'react';
// Generador de los 16 bloques del Plan Maestro (10:00 a 17:30)
const TIME_BLOCKS = [
  "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30"
];

export default function BookingFlow() {
  const [selectedDate, setSelectedDate] = useState<number | null>(18); // Default selected date for mockup

  const renderCalendar = () => {
    const days = [];
    const emptySlots = 3; // Mock offset
    for(let i=0; i<emptySlots; i++) days.push(<div key={`empty-${i}`} className="text-center p-2 text-transparent">0</div>);
    for(let i=1; i<=31; i++) {
      const isPast = i < 15;
      const isSelected = selectedDate === i;
      const isAvailable = !isPast;
      
      days.push(
        <button 
          key={i} 
          onClick={() => isAvailable && setSelectedDate(i)}
          disabled={!isAvailable}
          className={`text-center p-2 text-sm transition-all duration-300 rounded-sm ${
            isSelected ? 'bg-gb-gold text-black font-bold shadow-[0_0_10px_rgba(212,175,55,0.4)]' 
            : isAvailable ? 'text-gray-300 hover:bg-gb-gold/20 hover:text-gb-gold cursor-pointer' 
            : 'text-gray-700 cursor-not-allowed opacity-50'
          }`}
        >
          {i}
        </button>
      );
    }
    return days;
  };

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto w-full">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest text-gb-text mb-4">
          Reserva tu <span className="text-gb-gold italic font-serif lowercase">Cita</span>
        </h2>
        <div className="w-12 h-[1px] bg-gb-gold mx-auto mb-6"></div>
        <p className="text-gray-400 font-light tracking-wide">
          Selecciona un servicio, encuentra un bloque disponible y asegura tu espacio.
        </p>
      </div>

      <div className="bg-[#0e0f11] border border-gb-muted p-8 md:p-12 shadow-2xl">
        
        {/* PASO 1: Servicio y Profesional */}
        <div className="mb-12">
          <h3 className="text-gb-gold uppercase tracking-[0.2em] text-sm mb-6 flex items-center gap-4">
            <span className="w-6 h-6 rounded-full border border-gb-gold flex items-center justify-center text-xs">1</span>
            Servicio y Profesional
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <select className="bg-transparent border border-gb-muted text-gb-text p-4 w-full focus:border-gb-gold focus:outline-none appearance-none cursor-pointer">
              <option className="bg-black">Selecciona un Servicio...</option>
              <option className="bg-black">Corte de Cabello VIP ($25.000)</option>
              <option className="bg-black">Servicio Completo ($35.000)</option>
              <option className="bg-black">Platinado global decoloración blanco extremo ($100.000)</option>
            </select>
            <select className="bg-transparent border border-gb-muted text-gb-text p-4 w-full focus:border-gb-gold focus:outline-none appearance-none cursor-pointer">
              <option className="bg-black">Cualquier Profesional</option>
              <option className="bg-black">Dilah Sanhueza</option>
            </select>
          </div>
        </div>

        {/* PASO 2: Fecha y Hora */}
        <div className="mb-12">
          <h3 className="text-gb-gold uppercase tracking-[0.2em] text-sm mb-6 flex items-center gap-4">
            <span className="w-6 h-6 rounded-full border border-gb-gold flex items-center justify-center text-xs">2</span>
            Fecha y Hora (16 Bloques)
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 border border-gb-muted p-6 bg-black/40">
              <div className="flex justify-between items-center mb-6">
                <button className="text-gb-gold hover:text-white transition-colors p-1">&larr;</button>
                <div className="text-white font-bold tracking-[0.2em] uppercase text-sm">Julio 2026</div>
                <button className="text-gb-gold hover:text-white transition-colors p-1">&rarr;</button>
              </div>
              <div className="grid grid-cols-7 gap-1 mb-4 border-b border-white/5 pb-2">
                {["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"].map(d => (
                  <div key={d} className="text-center text-[10px] text-gb-gold/60 uppercase tracking-widest">{d}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1 gap-y-2">
                {renderCalendar()}
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="grid grid-cols-4 gap-3">
                {TIME_BLOCKS.map((time, idx) => (
                  <button 
                    key={idx} 
                    className={`p-3 border text-sm text-center transition-all ${
                      idx === 2 || idx === 7 
                        ? 'border-red-900/30 text-red-900/50 cursor-not-allowed bg-red-900/5 line-through' // Simulación de ocupados
                        : 'border-gb-muted text-gb-text hover:border-gb-gold hover:text-gb-gold'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-4 font-light">
                * Los servicios largos ocuparán múltiples bloques automáticamente.
              </p>
            </div>
          </div>
        </div>

        {/* PASO 3: Datos del Cliente */}
        <div className="mb-12">
          <h3 className="text-gb-gold uppercase tracking-[0.2em] text-sm mb-6 flex items-center gap-4">
            <span className="w-6 h-6 rounded-full border border-gb-gold flex items-center justify-center text-xs">3</span>
            Tus Datos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input 
              type="text" 
              placeholder="Nombre Completo" 
              className="bg-transparent border border-gb-muted text-gb-text p-4 w-full focus:border-gb-gold focus:outline-none"
            />
            <input 
              type="tel" 
              placeholder="Teléfono (WhatsApp)" 
              className="bg-transparent border border-gb-muted text-gb-text p-4 w-full focus:border-gb-gold focus:outline-none"
            />
            <input 
              type="email" 
              placeholder="Correo Electrónico" 
              className="bg-transparent border border-gb-muted text-gb-text p-4 w-full md:col-span-2 focus:border-gb-gold focus:outline-none"
            />
          </div>
        </div>

        {/* RESUMEN Y PAGO */}
        <div className="border-t border-gb-muted pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="text-gray-400 font-light text-sm mb-1">Total a Pagar</div>
            <div className="text-3xl font-bold text-gb-text">$0</div>
            <p className="text-xs text-gray-500 mt-2">Serás redirigido a Mercado Pago Checkout Pro.</p>
          </div>
          <button className="w-full md:w-auto px-10 py-5 bg-gb-gold text-gb-bg font-bold uppercase tracking-widest hover:bg-white transition-colors">
            Proceder al Pago
          </button>
        </div>

      </div>
    </section>
  );
}
