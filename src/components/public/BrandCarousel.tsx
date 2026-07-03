"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const BRANDS = [
  { name: "Marca 1", src: "/logos/logo_1.png" },
  { name: "Marca 2", src: "/logos/logo_2.png" },
  { name: "Marca 3", src: "/logos/logo_3.png" },
  { name: "Marca 4", src: "/logos/logo_4.png" },
  { name: "Marca 5", src: "/logos/logo_5.png" },
  { name: "Marca 6", src: "/logos/logo_6.png" },
  { name: "Marca 7", src: "/logos/logo_7.png" },
  { name: "Marca 8", src: "/logos/logo_8.png" },
  { name: "Marca 9", src: "/logos/logo_9.png" },
  { name: "Marca 10", src: "/logos/logo_10.png" },
];



export default function BrandCarousel() {
  const spotlightRef   = useRef<HTMLDivElement>(null);
  const headerRef      = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  /* Gold spotlight sweep */
  useEffect(() => {
    const el = spotlightRef.current;
    if (!el) return;
    let start: number | null = null;
    const duration = 5000;
    let raf: number;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const progress = ((ts - start) % duration) / duration;
      el.style.left = `${-20 + progress * 140}%`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  /* Scroll-triggered reveal */
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative py-24 overflow-hidden bg-[#040506]">
      {/* Gold hairlines */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #C69B45 30%, #E8C972 50%, #C69B45 70%, transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #C69B45 30%, #E8C972 50%, #C69B45 70%, transparent)" }} />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(198,155,69,0.05) 0%, transparent 70%)" }} />

      {/* Gold spotlight sweep */}
      <div ref={spotlightRef} className="absolute top-0 bottom-0 w-40 pointer-events-none" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(198,155,69,0.06) 40%, rgba(232,201,114,0.11) 50%, rgba(198,155,69,0.06) 60%, transparent 100%)", filter: "blur(10px)" }} />

      {/* ── ANIMATED SECTION HEADER ── */}
      <div ref={headerRef} className="text-center mb-16 px-6 relative z-10">
        <h2 
          className="text-5xl md:text-7xl text-gb-gold mb-6 drop-shadow-lg transition-all duration-1000 capitalize tracking-wider flex justify-center" 
          style={{ 
            fontFamily: 'var(--font-gothic)',
            opacity: visible ? 1 : 0, 
            transform: visible ? 'translateY(0)' : 'translateY(30px)' 
          }}
        >
          Marcas que usamos
        </h2>
        
        <div 
          className="w-16 h-px bg-gradient-to-r from-transparent via-gb-gold to-transparent mx-auto mb-6 transition-all duration-1000" 
          style={{ 
            opacity: visible ? 1 : 0, 
            width: visible ? '4rem' : '0',
            transitionDelay: '200ms'
          }}
        />

        <p 
          className="font-bold text-lg md:text-xl text-white tracking-wider max-w-xl mx-auto leading-relaxed transition-all duration-1000 drop-shadow-md uppercase"
          style={{ 
            opacity: visible ? 1 : 0, 
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '300ms'
          }}
        >
          Trabajamos con lo mejor del mundo
        </p>
      </div>

      {/* ── LOGO CAROUSEL — infinite scroll ── */}
      <div
        className="relative overflow-hidden py-10"
        style={{ maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)" }}
      >
        <div className="flex gap-20 w-max items-center" style={{ animation: "brand-scroll-left 40s linear infinite" }}>
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <div key={i} className="flex-shrink-0 flex items-center justify-center w-48 h-32 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110 cursor-default drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              <img src={brand.src} alt={brand.name} className="max-w-full max-h-full object-contain" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes brand-scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
