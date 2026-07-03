import ServiceCatalog from "@/components/public/ServiceCatalog";
import ProductCatalog from "@/components/public/ProductCatalog";
import BookingFlow from "@/components/public/BookingFlow";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gb-bg text-gb-text font-sans selection:bg-gb-gold selection:text-gb-bg">
      
      {/* HEADER / NAVIGATION */}
      <header className="fixed top-0 w-full z-50 bg-gb-bg/80 backdrop-blur-md border-b border-white/5 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center border border-gb-gold">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gb-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>
            </div>
            <span className="font-bold tracking-widest uppercase text-lg">
              Gold<span className="text-gb-gold">Barber</span>
            </span>
          </div>
          
          <nav className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase text-gray-400">
            <a href="#servicios" className="hover:text-gb-gold transition-colors">Servicios</a>
            <a href="#boutique" className="hover:text-gb-gold transition-colors">Boutique</a>
            <a href="#reservas" className="hover:text-gb-gold transition-colors">Reservas</a>
          </nav>
          
          <Link href="/dashboard" className="hidden md:flex text-xs border border-white/20 px-4 py-2 uppercase tracking-widest hover:border-gb-gold hover:text-gb-gold transition-all">
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

        <div className="relative z-10 text-center max-w-4xl mx-auto pt-20">
          <div className="inline-block mb-6 px-4 py-1 border border-gb-gold/30 text-gb-gold text-xs uppercase tracking-[0.3em]">
            Estudio Exclusivo
          </div>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6 leading-none">
            <span className="block text-gb-text">GOLD BARBER</span>
            <span className="block text-gb-gold italic font-serif mt-2 font-light">STUDIO</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
            Clásico. Premium. Editorial. Experimenta el nivel más alto de precisión, cuidado y estilo en cada corte.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#reservas" className="px-10 py-4 bg-gb-gold text-gb-bg font-bold uppercase tracking-[0.2em] text-sm hover:bg-white transition-colors w-full sm:w-auto">
              Agendar Cita
            </a>
            <a href="#servicios" className="px-10 py-4 border border-gb-muted text-gb-text font-bold uppercase tracking-[0.2em] text-sm hover:border-gb-gold hover:text-gb-gold transition-colors w-full sm:w-auto">
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
      <section className="py-32 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif italic text-gb-gold mb-8">No es solo un corte, es un ritual.</h2>
        <p className="text-lg md:text-2xl text-gray-400 font-light leading-relaxed tracking-wide">
          En <span className="text-white font-medium">Gold Barber Studio</span> fusionamos la tradición clásica con técnicas modernas de vanguardia. Cada detalle de nuestro espacio ha sido diseñado para ofrecerte una experiencia de relajación absoluta, donde la calidad del servicio es innegociable.
        </p>
      </section>

      {/* CATALOG SECTION (Servicios) */}
      <div id="servicios" className="pt-20">
        <ServiceCatalog />
      </div>

      {/* IMAGE BREAK */}
      <div className="w-full h-96 my-20 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-fixed opacity-30" />
        <div className="absolute inset-0 bg-gb-bg/60 mix-blend-multiply" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-widest uppercase text-white/90">
            Artesanía <span className="text-gb-gold italic font-serif lowercase">&</span> Estilo
          </h2>
        </div>
      </div>

      {/* E-COMMERCE SECTION (Productos) */}
      <div id="boutique" className="pt-20">
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
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 flex items-center justify-center border border-gb-gold">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--gb-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>
              </div>
              <span className="font-bold tracking-widest uppercase text-md">
                Gold<span className="text-gb-gold">Barber</span>
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
