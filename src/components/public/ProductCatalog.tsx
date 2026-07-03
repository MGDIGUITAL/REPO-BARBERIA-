"use client";

import React, { useEffect, useRef, useState } from 'react';

const PRODUCTS = [
  { id: 1, name: 'Cera Mate Gold Edition', price: '$12.990', desc: 'Fijación fuerte, acabado sin brillo.', img: '/placeholder-cera.jpg' },
  { id: 2, name: 'Aceite para Barba Premium', price: '$14.500', desc: 'Hidratación profunda con aroma a sándalo.', img: '/placeholder-aceite.jpg' },
  { id: 3, name: 'Tónico Capilar Anticaída', price: '$18.000', desc: 'Estimula el crecimiento y fortalece la raíz.', img: '/placeholder-tonico.jpg' },
  { id: 4, name: 'Polvo Texturizador', price: '$10.990', desc: 'Volumen extremo y textura instantánea.', img: '/placeholder-polvo.jpg' },
];

export default function ProductCatalog() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="flex-1">
            <h2 
              className="text-5xl md:text-7xl text-gb-gold mb-6 drop-shadow-lg transition-all duration-1000 capitalize tracking-wider" 
              style={{ 
                fontFamily: 'var(--font-gothic)',
                opacity: isVisible ? 1 : 0, 
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)' 
              }}
            >
              Productos
            </h2>
            <div 
              className="w-16 h-px bg-gradient-to-r from-gb-gold to-transparent mb-6 transition-all duration-1000"
              style={{ 
                opacity: isVisible ? 1 : 0, 
                width: isVisible ? '4rem' : '0',
                transitionDelay: '200ms'
              }}
            />
            <p 
              className="font-bold text-lg md:text-xl text-white tracking-wider max-w-lg leading-relaxed transition-all duration-1000 drop-shadow-md"
              style={{ 
                opacity: isVisible ? 1 : 0, 
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '300ms'
              }}
            >
              Extiende la experiencia del estudio. Fórmulas de nivel profesional seleccionadas personalmente por nuestros maestros barberos.
            </p>
          </div>
          <button 
            className="text-gb-gold uppercase tracking-[0.2em] text-sm hover:text-white transition-all duration-1000 border-b border-transparent hover:border-white pb-1"
            style={{ 
              opacity: isVisible ? 1 : 0, 
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '400ms'
            }}
          >
            Ver Catálogo Completo →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product, idx) => (
            <div 
              key={product.id} 
              className="group cursor-pointer flex flex-col transition-all duration-1000"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: `${500 + idx * 150}ms`
              }}
            >
              {/* Product Image Placeholder */}
              <div className="aspect-[4/5] bg-gb-muted mb-6 relative overflow-hidden flex items-center justify-center border border-white/[0.05] group-hover:border-gb-gold/30 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <span className="text-gray-600 font-serif italic text-sm">Fotografía de Producto</span>
                
                {/* Botón flotante al hacer hover */}
                <button className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20 bg-gb-gold text-gb-bg uppercase tracking-widest text-xs font-bold py-3 px-6 w-10/12 shadow-lg">
                  Añadir al Carrito
                </button>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-gb-text mb-1 group-hover:text-gb-gold transition-colors" style={{ fontFamily: 'var(--font-tall)' }}>
                {product.name}
              </h3>
              <p className="text-sm text-gray-500 font-light mb-3 flex-1">{product.desc}</p>
              <span className="text-2xl font-bold text-gb-text" style={{ fontFamily: 'var(--font-tall)' }}>
                {product.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
