import React from 'react';

const SERVICES = [
  { name: 'Corte de Cabello VIP', duration: '50 min', price: '$25.000', desc: 'Servicio premium.', category: 'Cortes' },
  { name: 'Servicio Completo', duration: '1 h 10 min', price: '$35.000', desc: 'Corte + barba + lavado de cabello y productos.', category: 'Cortes' },
  { name: 'Corte de Cabello + Barba', duration: '1 h', price: '$26.990', desc: 'Cortes y barbas.', category: 'Cortes' },
  { name: 'Corte de Cabello', duration: '50 min', price: '$18.000', desc: 'Cortes y barbas.', category: 'Cortes' },
  { name: 'Recorte', duration: '20 min', price: '$12.000', desc: 'Servicio con condición especial.', category: 'Cortes' },
  
  { name: 'Barba Completa', duration: '30 min', price: '$15.000', desc: 'Barba.', category: 'Barba' },
  { name: 'Barba Simple', duration: '20 min', price: '$10.000', desc: 'Condiciones informativas.', category: 'Barba' },
  { name: 'Perfilado de cejas', duration: '10 min', price: '$2.000', desc: 'Servicio facial.', category: 'Rostro' },
  { name: 'Promo corte + mascarilla puntos negros + cejas', duration: '40 min', price: '$20.000', desc: 'Promoción.', category: 'Promociones' },

  { name: 'Platinado global decoloración blanco extremo', duration: '3 h 20 min', price: '$100.000', desc: 'Servicio químico integral.', category: 'Colorimetría', deposit: 'Abono 50%' },
  { name: 'Mechas platinadas', duration: '3 h 20 min', price: '$80.000', desc: 'Iluminación.', category: 'Colorimetría', deposit: 'Abono 50%' },
  
  { name: 'Ondulación o rizado completo + barba premium + cejas + corte', duration: '2 h 30 min', price: '$99.990', desc: 'Pack completo.', category: 'Ondulaciones' },
  { name: 'Ondulación zona superior, posterior y laterales tipo mullet / taper fade / motaper', duration: '2 h', price: '$85.990', desc: 'Textura localizada.', category: 'Ondulaciones' },
  { name: 'Ondulación permanente', duration: '2 h', price: '$69.990', desc: 'Ondulación estándar.', category: 'Ondulaciones' },
  { name: 'Ondulación perm o rulos (solo base), sin corte', duration: '1 h 40 min', price: '$59.990', desc: 'Mantenimiento o base.', category: 'Ondulaciones' },
];

export default function ServiceCatalog() {
  // Agrupar servicios por categoría
  const groupedServices = SERVICES.reduce((acc, service) => {
    if (!acc[service.category]) acc[service.category] = [];
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, typeof SERVICES>);

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto w-full">
      <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest text-gb-text mb-4">
          Nuestros <span className="text-gb-gold italic font-serif lowercase">Servicios</span>
        </h2>
        <div className="w-12 h-[1px] bg-gb-gold mb-6"></div>
        <p className="text-gray-400 font-light tracking-wide max-w-lg">
          Elige la experiencia que deseas. Precisión técnica y productos de primera categoría.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
        {Object.entries(groupedServices).map(([category, items]) => (
          <div key={category} className="space-y-8">
            <h3 className="text-xl text-gb-gold font-serif uppercase tracking-[0.2em] border-b border-gb-muted pb-4">
              {category}
            </h3>
            
            <div className="flex flex-col gap-6">
              {items.map((item, idx) => (
                <div key={idx} className="group relative">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="text-lg font-medium text-gb-text tracking-wide group-hover:text-gb-gold transition-colors">
                      {item.name}
                    </h4>
                    <div className="flex-1 border-b border-dotted border-gb-muted mx-4 relative top-[-6px]"></div>
                    <span className="text-lg font-bold text-gb-text">{item.price}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-500 font-light">
                    <span>{item.desc}</span>
                    <span className="whitespace-nowrap ml-4">{item.duration}</span>
                  </div>
                  
                  {item.deposit && (
                    <div className="mt-2 inline-block px-2 py-1 border border-gb-gold/30 text-gb-gold text-[10px] uppercase tracking-wider">
                      Requiere {item.deposit}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
