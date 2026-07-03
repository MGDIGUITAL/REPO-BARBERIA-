"use client";

import React, { useEffect, useRef, useState } from 'react';

const SERVICES = [
  { name: 'Corte de Cabello VIP', duration: '50 min', price: '$25.000', desc: 'Servicio premium. Precisión absoluta.', category: 'Cortes' },
  { name: 'Servicio Completo', duration: '1 h 10 min', price: '$35.000', desc: 'Corte + barba + lavado de cabello y productos.', category: 'Cortes' },
  { name: 'Corte de Cabello + Barba', duration: '1 h', price: '$26.990', desc: 'Cortes y barbas.', category: 'Cortes' },
  { name: 'Corte de Cabello', duration: '50 min', price: '$18.000', desc: 'Cortes y barbas.', category: 'Cortes' },
  { name: 'Recorte', duration: '20 min', price: '$12.000', desc: 'Servicio con condición especial.', category: 'Cortes' },
  
  { name: 'Barba Completa', duration: '30 min', price: '$15.000', desc: 'Perfilado y toalla caliente.', category: 'Barba' },
  { name: 'Barba Simple', duration: '20 min', price: '$10.000', desc: 'Condiciones informativas.', category: 'Barba' },
  
  { name: 'Perfilado de cejas', duration: '10 min', price: '$2.000', desc: 'Servicio facial.', category: 'Rostro' },
  { name: 'Promo corte + mascarilla + cejas', duration: '40 min', price: '$20.000', desc: 'Promoción.', category: 'Promociones' },

  { name: 'Platinado global extremo', duration: '3 h 20 min', price: '$100.000', desc: 'Servicio químico integral.', category: 'Colorimetría', deposit: 'Abono 50%' },
  { name: 'Mechas platinadas', duration: '3 h 20 min', price: '$80.000', desc: 'Iluminación.', category: 'Colorimetría', deposit: 'Abono 50%' },
  
  { name: 'Ondulación o rizado completo', duration: '2 h 30 min', price: '$99.990', desc: 'Ondulaciones + barba premium + cejas + corte.', category: 'Ondulaciones' },
  { name: 'Ondulación localizada (Mullet/Fade)', duration: '2 h', price: '$85.990', desc: 'Textura localizada.', category: 'Ondulaciones' },
  { name: 'Ondulación permanente', duration: '2 h', price: '$69.990', desc: 'Ondulación estándar.', category: 'Ondulaciones' },
  { name: 'Ondulación (solo base)', duration: '1 h 40 min', price: '$59.990', desc: 'Mantenimiento o base.', category: 'Ondulaciones' },
];

export default function ServiceCatalog() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for scroll reveal
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const groupedServices = SERVICES.reduce((acc, service) => {
    if (!acc[service.category]) acc[service.category] = [];
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, typeof SERVICES>);

  return (
    <section ref={sectionRef} className="relative py-32 px-6">
      {/* ── PREMIUM PARALLAX VIDEO BACKGROUND ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="sticky top-0 w-full h-[100svh] overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            style={{ filter: 'grayscale(60%) contrast(1.2)' }}
          >
            <source src="https://res.cloudinary.com/ddqx435i5/video/upload/v1783079630/Barber_trimming_client_s_beard_202607030734_qrs6hk.mp4" type="video/mp4" />
          </video>
          {/* Dark gradient fades to blend seamlessly with the rest of the site */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#040506] via-transparent to-[#040506]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#040506]/90 via-[#040506]/40 to-[#040506]/90" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* HEADER */}
        <div className="mb-20 flex flex-col items-center text-center">
          <span 
            className="text-[10px] uppercase tracking-[0.5em] text-gb-gold/70 mb-4 transition-all duration-1000"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)' }}
          >
            ✦ El Menú ✦
          </span>
          <h2 
            className="text-4xl md:text-6xl text-white mb-6 tracking-wide flex flex-col md:flex-row items-center gap-2 md:gap-6 justify-center transition-all duration-1000" 
            style={{ 
              fontFamily: 'var(--font-tall)',
              opacity: isVisible ? 1 : 0, 
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '100ms'
            }}
          >
            <span className="uppercase tracking-widest font-bold">Nuestros</span>
            <span className="text-gb-gold text-5xl md:text-7xl lowercase drop-shadow-md -mt-2 md:mt-1 pr-4" style={{ fontFamily: 'var(--font-script)' }}>
              servicios
            </span>
          </h2>
          <div 
            className="w-16 h-px bg-gradient-to-r from-transparent via-gb-gold to-transparent mb-6 transition-all duration-1000" 
            style={{ 
              opacity: isVisible ? 1 : 0, 
              width: isVisible ? '4rem' : '0',
              transitionDelay: '300ms'
            }}
          />
          <p 
            className="font-serif text-lg md:text-xl text-gray-300/90 italic tracking-wider max-w-xl mx-auto leading-relaxed transition-all duration-1000"
            style={{ 
              opacity: isVisible ? 1 : 0, 
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '400ms'
            }}
          >
            "Donde la técnica clásica encuentra la sofisticación moderna. Un ritual diseñado exclusivamente para los más exigentes."
          </p>
        </div>

        {/* CATALOG GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {Object.entries(groupedServices).map(([category, items], catIdx) => (
            <div 
              key={category} 
              className="space-y-6 transition-all duration-1000 delay-100"
              style={{ 
                opacity: isVisible ? 1 : 0, 
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${catIdx * 150}ms`
              }}
            >
              {/* Category Title */}
              <div className="flex items-center gap-4 border-b border-white/5 pb-4 mb-6">
                <span className="text-gb-gold">✦</span>
                <h3 className="text-4xl text-gb-gold tracking-wide pr-4" style={{ fontFamily: 'var(--font-script)' }}>
                  {category}
                </h3>
              </div>
              
              <div className="flex flex-col gap-4">
                {items.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="group relative p-5 rounded-lg border border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.03] hover:border-gb-gold/30 transition-all duration-500 overflow-hidden cursor-default"
                  >
                    {/* Hover ambient glow inside card */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gb-gold/0 via-gb-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-1 gap-4">
                        <h4 className="text-xl md:text-2xl font-bold text-white tracking-wide group-hover:text-gb-gold transition-colors duration-300" style={{ fontFamily: 'var(--font-tall)' }}>
                          {item.name}
                        </h4>
                        
                        {/* Animated Price */}
                        <div className="relative whitespace-nowrap">
                          <span 
                            className="text-2xl md:text-3xl font-bold tracking-wider relative z-10"
                            style={{ 
                              fontFamily: 'var(--font-tall)',
                              background: "linear-gradient(to right, #ffffff, #e0e0e0)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent"
                            }}
                          >
                            {item.price}
                          </span>
                          {/* Price hover glow */}
                          <div className="absolute inset-0 bg-gb-gold/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-end mt-3 text-sm text-gray-500 font-light">
                        <p className="pr-4 leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
                          {item.desc}
                        </p>
                        <span className="whitespace-nowrap uppercase tracking-widest text-[10px] text-gb-gold/70 border border-gb-gold/20 px-2 py-1 rounded-sm">
                          {item.duration}
                        </span>
                      </div>
                      
                      {item.deposit && (
                        <div className="mt-4 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-red-900/80 animate-pulse" />
                          <span className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">
                            Requiere {item.deposit}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
