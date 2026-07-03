"use client";
import Image from "next/image";

export default function ExperienceBreak() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#040506]">
      {/* Massive Background Type for Depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.02] select-none flex justify-center">
        <span 
          className="font-black text-[22vw] leading-none whitespace-nowrap text-white uppercase"
          style={{ fontFamily: 'var(--font-gothic)' }}
        >
          EXPERIENCIA
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
        {/* Left Col: Asymmetrical Editorial Imagery */}
        <div className="lg:col-span-6 relative h-[500px] lg:h-[700px] w-full group">
          
          {/* Main Image Container (overflow hidden for zoom) */}
          <div className="absolute inset-0 overflow-hidden border border-white/5">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center grayscale contrast-125 transition-all duration-[1.5s] group-hover:grayscale-0 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-[1.5s]" />
          </div>
           
          {/* Floating Accent Image */}
          <div className="absolute -bottom-8 lg:-bottom-16 -right-4 lg:-right-16 w-48 lg:w-72 h-64 lg:h-96 border border-gb-gold/30 bg-[url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center shadow-2xl grayscale transition-all duration-[1.5s] ease-out group-hover:grayscale-0 group-hover:-translate-y-6 group-hover:-translate-x-2 z-20" />
           
          {/* Gold Accent Line */}
          <div className="absolute -top-10 -left-px lg:-left-6 w-px h-40 bg-gradient-to-b from-gb-gold to-transparent" />
        </div>

        {/* Right Col: Typography & Content */}
        <div className="lg:col-span-5 lg:col-start-8 flex flex-col justify-center">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-gb-gold" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-gb-gold/80">La Experiencia Gold</span>
          </div>

          {/* Main Title */}
          <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-widest text-white leading-tight mb-6 relative">
            Estilo <br/>
            <span className="flex items-center gap-4 lg:gap-6 mt-1">
              <span className="text-3xl md:text-5xl font-light text-white/40">y</span>
              <span 
                className="italic lowercase font-light text-gb-gold drop-shadow-lg"
                style={{ 
                  fontFamily: "var(--font-cormorant)", 
                  fontSize: "clamp(3.5rem, 8vw, 6.5rem)", 
                  lineHeight: 0.9,
                  background: "linear-gradient(135deg, #8B6914 0%, #C69B45 35%, #E8C972 55%, #C69B45 75%, #8B6914 100%)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "gold-shimmer-title 5s ease-in-out infinite"
                }}
              >
                experiencia
              </span>
            </span>
          </h2>

          <p className="text-gray-400 font-light text-lg leading-relaxed max-w-md mb-12">
            No vendemos cortes, diseñamos identidades. Cada visita es una inmersión en el arte tradicional de la barbería, ejecutada con precisión contemporánea y un servicio impecable que redefine el estándar.
          </p>

          {/* CTA Action */}
          <a href="#reservas" className="group w-fit flex items-center gap-6 cursor-pointer">
            <span className="text-xs uppercase tracking-[0.2em] text-white group-hover:text-gb-gold transition-colors duration-500">
              Reserva tu momento
            </span>
            <div className="w-12 h-12 rounded-full border border-gb-gold/30 flex items-center justify-center group-hover:border-gb-gold group-hover:bg-gb-gold/10 transition-all duration-500 relative overflow-hidden">
              <svg className="relative z-10 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-500" viewBox="0 0 24 24" fill="none" stroke="#C69B45" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
