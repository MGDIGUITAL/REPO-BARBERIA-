import ServiceCatalog from "@/components/public/ServiceCatalog";
import ProductCatalog from "@/components/public/ProductCatalog";
import BookingFlow from "@/components/public/BookingFlow";
import BrandCarousel from "@/components/public/BrandCarousel";
import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gb-bg text-gb-text font-sans selection:bg-gb-gold selection:text-gb-bg">
      
      {/* HEADER / NAVIGATION */}
      <header className="fixed top-0 w-full z-50 bg-transparent transition-all pt-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo image replacing text */}
          <a href="#" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Gold Barber Studio"
              width={64}
              height={64}
              className="logo-glow rounded-full object-contain drop-shadow-lg"
              priority
            />
          </a>
          
          <nav className="hidden md:flex gap-12 items-center text-white/90">
            <a href="#servicios" className="text-3xl hover:text-gb-gold transition-colors drop-shadow-lg" style={{ fontFamily: 'var(--font-gothic)' }}>Servicios</a>
            <a href="#productos" className="text-3xl hover:text-gb-gold transition-colors drop-shadow-lg" style={{ fontFamily: 'var(--font-gothic)' }}>Productos</a>
            <a href="#reservas" className="text-3xl hover:text-gb-gold transition-colors drop-shadow-lg" style={{ fontFamily: 'var(--font-gothic)' }}>Reservas</a>
          </nav>
          
          <Link href="/dashboard" className="hidden md:flex text-sm px-5 py-2 uppercase tracking-[0.2em] hover:text-gb-gold transition-all drop-shadow-md font-light text-white/70">
            Ingreso Staff
          </Link>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-[100svh] flex items-center justify-center px-4 overflow-hidden">
        {/* Background Video with Overlay */}
        <div className="absolute inset-0 z-0 bg-black">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            style={{ filter: 'grayscale(30%) contrast(1.1)' }}
          >
            <source src="https://res.cloudinary.com/ddqx435i5/video/upload/q_auto,f_auto/Dise%C3%B1o_sin_t%C3%ADtulo_zqeq4q.mp4" type="video/mp4" />
            <source src="https://res.cloudinary.com/ddqx435i5/video/upload/q_auto,f_webm/Dise%C3%B1o_sin_t%C3%ADtulo_zqeq4q.webm" type="video/webm" />
          </video>
          {/* Cinematic dark overlay */}
          <div className="absolute inset-0 bg-black/40" />
          {/* Gradient fade to page color */}
          <div className="absolute inset-0 bg-gradient-to-b from-gb-bg/70 via-transparent to-gb-bg" />
          {/* Subtle vignette effect */}
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)' }} />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto pt-20 flex flex-col items-center">
          {/* LOGO — large, centered, floating */}
          <div
            style={{
              animation: 'float-up 5s ease-in-out infinite',
            }}
            className="mb-10"
          >
            <Image
              src="/logo.png"
              alt="Gold Barber Studio Logo"
              width={260}
              height={260}
              className="logo-glow rounded-full object-contain mx-auto"
              priority
            />
          </div>

          {/* Massive Gothic headline with letter-by-letter reveal (Word-wrapped to prevent breaking mid-word) */}
          <h1 className="flex flex-wrap justify-center gap-x-4 md:gap-x-6 overflow-hidden mb-2 px-2">
            {"Gold Barber".split(" ").map((word, wordIdx) => (
              <span key={wordIdx} className="flex whitespace-nowrap">
                {word.split("").map((char, charIdx) => {
                  const globalIdx = wordIdx * 5 + charIdx;
                  return (
                    <span
                      key={charIdx}
                      className="font-gothic text-[14vw] sm:text-[10vw] md:text-[9vw] lg:text-[8.5vw] text-gold-gradient leading-none tracking-tight inline-block drop-shadow-2xl"
                      style={{
                        animation: 'text-reveal-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                        animationDelay: `${globalIdx * 0.08}s`,
                        opacity: 0,
                        transform: 'translateY(120%)'
                      }}
                    >
                      {char}
                    </span>
                  );
                })}
              </span>
            ))}
          </h1>

          {/* Subtitle in Tipo Pro (Gothic) as requested */}
          <div className="overflow-hidden mb-10 mt-2">
            <span 
              className="block font-gothic text-4xl md:text-6xl text-gb-gold drop-shadow-xl"
              style={{
                animation: 'text-reveal-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                animationDelay: '0.8s',
                opacity: 0,
                transform: 'translateY(120%)'
              }}
            >
              Studio
            </span>
          </div>

          {/* Paragraph animated letter-by-letter */}
          <div className="flex flex-wrap justify-center mb-12 max-w-3xl mx-auto text-white font-bold text-lg md:text-2xl tracking-wider leading-relaxed">
            {"Estudio Privado de Barbería Profesional.".split(" ").map((word, wordIdx, wordsArray) => {
              const wordOffset = wordIdx * 6; 
              return (
                <span key={wordIdx} className={`inline-block whitespace-nowrap ${wordIdx !== wordsArray.length - 1 ? 'mr-2' : ''}`}>
                  {word.split("").map((char, charIdx) => (
                    <span 
                      key={charIdx} 
                      className="inline-block drop-shadow-md"
                      style={{
                        animation: 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                        animationDelay: `${1.0 + ((wordOffset + charIdx) * 0.03)}s`,
                        opacity: 0,
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              );
            })}
          </div>
          
          {/* Buttons animated fade-in */}
          <div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full"
            style={{
              animation: 'fade-in-up 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
              animationDelay: '1.5s',
              opacity: 0,
            }}
          >
            <a href="#reservas" className="px-10 py-4 bg-gb-gold text-gb-bg font-bold uppercase tracking-[0.2em] text-sm hover:bg-white transition-colors w-full sm:w-auto text-center">
              Agendar Cita
            </a>
            <a href="#servicios" className="px-10 py-4 border border-gb-muted text-gb-text font-bold uppercase tracking-[0.2em] text-sm hover:border-gb-gold hover:text-gb-gold transition-colors w-full sm:w-auto text-center">
              Ver Servicios
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-pulse">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gb-gold">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gb-gold to-transparent"></div>
        </div>
      </section>

      {/* ABOUT BLOCK */}
      <section className="relative w-full py-40 flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/ddqx435i5/image/upload/v1783082837/6ae626e3-c881-4b7f-a391-11024e49d7e4_k8tvfw.png')] bg-cover bg-center bg-fixed opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040506] via-transparent to-[#040506]" />
        <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />
        
        <div className="relative z-10 px-6 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl text-gb-gold font-bold tracking-wider mb-10 drop-shadow-lg">
            No es solo un corte, es un ritual.
          </h2>
          <p className="text-lg md:text-2xl text-white font-bold leading-relaxed tracking-wider drop-shadow-md max-w-4xl mx-auto">
            En Gold Barber Studio fusionamos la tradición clásica con técnicas modernas de vanguardia. Cada detalle de nuestro espacio ha sido diseñado para ofrecerte una experiencia de relajación absoluta, donde la calidad del servicio es innegociable.
          </p>
        </div>
      </section>

      {/* CATALOG SECTION (Servicios) */}
      <div id="servicios" className="pt-20">
        <ServiceCatalog />
      </div>

      {/* IMAGE BREAK */}
      <div className="w-full h-[500px] relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-fixed opacity-40" />
        <div className="absolute inset-0 bg-gb-bg/50 mix-blend-multiply" />
        
        {/* Dark gradients on top and bottom to blend smoothly with adjacent black sections */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#040506] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#040506] to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-5xl md:text-7xl text-white/90 tracking-wide flex flex-col md:flex-row items-center gap-4 justify-center" style={{ fontFamily: 'var(--font-tall)' }}>
            <span className="uppercase tracking-widest font-bold">Estilo</span>
            <span className="text-gb-gold text-6xl md:text-8xl lowercase drop-shadow-lg -mt-4 md:-mt-2 pr-4" style={{ fontFamily: 'var(--font-script)' }}>
              & experiencia
            </span>
          </h2>
        </div>
      </div>

      {/* BRAND CAROUSEL */}
      <BrandCarousel />

      {/* E-COMMERCE SECTION (Productos) */}
      <div id="productos" className="pt-20">
        <ProductCatalog />
      </div>

      {/* BOOKING FLOW SECTION (Reservas) */}
      <div id="reservas" className="pt-20 bg-gradient-to-b from-transparent to-[#050607]">
        <BookingFlow />
      </div>
      
      {/* PREMIUM FOOTER */}
      <footer className="pt-24 pb-12 border-t border-white/5 bg-[#050607]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.png"
                alt="Gold Barber Studio"
                width={48}
                height={48}
                className="logo-glow rounded-full object-contain"
              />
              <span className="font-gothic text-lg text-gb-gold" style={{ fontFamily: 'var(--font-gothic)' }}>
                Gold Barber
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-light">
              Elevando el estándar del grooming masculino. Diseñado para quienes no comprometen su imagen.
            </p>
          </div>
          
          <div>
            <h4 className="text-white tracking-[0.2em] uppercase text-xs font-bold mb-6">Horarios</h4>
            <ul className="space-y-3 text-gray-500 text-sm font-light">
              <li className="flex justify-between max-w-xs"><span>Lunes - Viernes</span> <span>09:00 - 20:00</span></li>
              <li className="flex justify-between max-w-xs"><span>Sábados</span> <span>10:00 - 18:00</span></li>
              <li className="flex justify-between max-w-xs text-gb-gold"><span>Domingos</span> <span>Cerrado</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white tracking-[0.2em] uppercase text-xs font-bold mb-6">Contacto</h4>
            <ul className="space-y-3 text-gray-500 text-sm font-light">
              <li>Av. Providencia 1234, Local 50</li>
              <li>Santiago, Chile</li>
              <li className="pt-4"><a href="mailto:hola@goldbarber.com" className="text-gb-gold hover:text-white transition-colors">hola@goldbarber.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs tracking-wider">
            &copy; 2026 GOLD BARBER STUDIO. TODOS LOS DERECHOS RESERVADOS.
          </p>
          <p className="text-gray-600 text-xs tracking-wider flex items-center gap-2">
            POWERED BY <span className="text-[#FF5A2B] font-bold">PRO BARBERSHOP SYSTEM</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
