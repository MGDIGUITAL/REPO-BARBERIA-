import React from 'react';

const PRODUCTS = [
  { id: 1, name: 'Cera Mate Gold Edition', price: '$12.990', desc: 'Fijación fuerte, acabado sin brillo.', img: '/placeholder-cera.jpg' },
  { id: 2, name: 'Aceite para Barba Premium', price: '$14.500', desc: 'Hidratación profunda con aroma a sándalo.', img: '/placeholder-aceite.jpg' },
  { id: 3, name: 'Tónico Capilar Anticaída', price: '$18.000', desc: 'Estimula el crecimiento y fortalece la raíz.', img: '/placeholder-tonico.jpg' },
  { id: 4, name: 'Polvo Texturizador', price: '$10.990', desc: 'Volumen extremo y textura instantánea.', img: '/placeholder-polvo.jpg' },
];

export default function ProductCatalog() {
  return (
    <section className="py-24 px-6 bg-black border-t border-gb-muted">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl text-gb-text mb-4 tracking-wide flex flex-col items-start gap-1" style={{ fontFamily: 'var(--font-tall)' }}>
              <span className="uppercase tracking-widest font-bold">Boutique</span>
              <span className="text-gb-gold text-5xl md:text-7xl lowercase drop-shadow-md -mt-4 pr-4" style={{ fontFamily: 'var(--font-script)' }}>
                premium
              </span>
            </h2>
            <div className="w-12 h-[1px] bg-gb-gold mb-6"></div>
            <p className="text-gray-400 font-light tracking-wide max-w-md">
              Lleva la experiencia del estudio a tu casa. Productos de nivel profesional seleccionados por nuestros expertos.
            </p>
          </div>
          <button className="text-gb-gold uppercase tracking-[0.2em] text-sm hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">
            Ver Catálogo Completo →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group cursor-pointer flex flex-col">
              {/* Product Image Placeholder */}
              <div className="aspect-[4/5] bg-gb-muted mb-6 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <span className="text-gray-600 font-serif italic">Fotografía de Producto</span>
                
                {/* Botón flotante al hacer hover */}
                <button className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20 bg-gb-gold text-gb-bg uppercase tracking-widest text-xs font-bold py-3 px-6 w-10/12">
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
