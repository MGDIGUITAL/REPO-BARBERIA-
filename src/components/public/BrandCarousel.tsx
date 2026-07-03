"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const BRANDS = [
  { name: "BaByliss PRO",    src: "/brand-babyliss.png"     },
  { name: "Wahl",            src: "/brand-wahl.png"          },
  { name: "Andis",           src: "/brand-andis.png"         },
  { name: "Reuzel",          src: "/brand-reuzel.png"        },
  { name: "American Crew",   src: "/brand-american-crew.png" },
  { name: "Oster",           src: "/brand-oster.png"         },
  { name: "Layrite",         src: "/brand-layrite.png"       },
  { name: "Schwarzkopf",     src: "/brand-schwarzkopf.png"  },
];

const ROW_A = BRANDS.slice(0, 4);
const ROW_B = BRANDS.slice(4, 8);

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
      <div ref={headerRef} className="text-center mb-20 px-6 relative z-10">

        {/* Eyebrow — letter-spacing animation */}
        <p
          className="text-[10px] uppercase text-gb-gold/60 mb-8 transition-all duration-1000 ease-out"
          style={{
            letterSpacing: visible ? "0.55em" : "0.1em",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(8px)",
          }}
        >
          ✦ &nbsp; Marcas que usamos &nbsp; ✦
        </p>

        {/* Main headline — word-by-word reveal */}
        <h2 className="overflow-hidden leading-none mb-4">
          {/* Line 1: TRABAJAMOS CON LO */}
          <div className="flex flex-wrap justify-center items-baseline gap-x-4 md:gap-x-5 mb-1">
            {["TRABAJAMOS", "CON", "LO"].map((word, i) => (
              <span key={word} className="overflow-hidden inline-block">
                <span
                  className="inline-block text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-[0.08em] text-white transition-all duration-700 ease-out"
                  style={{
                    transitionDelay: `${i * 120}ms`,
                    transform: visible ? "translateY(0)" : "translateY(110%)",
                    opacity: visible ? 1 : 0,
                  }}
                >
                  {word}
                </span>
              </span>
            ))}
          </div>

          {/* Line 2: "mejor" — oversized italic gold with glow */}
          <div className="overflow-hidden flex justify-center">
            <span
              className="inline-block transition-all duration-900 ease-out"
              style={{
                transitionDelay: "360ms",
                transform: visible ? "translateY(0) scale(1)" : "translateY(110%) scale(0.9)",
                opacity: visible ? 1 : 0,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(4rem, 12vw, 9rem)",
                  fontStyle: "italic",
                  fontWeight: 300,
                  lineHeight: 0.95,
                  letterSpacing: "-0.01em",
                  background: "linear-gradient(135deg, #8B6914 0%, #C69B45 35%, #E8C972 55%, #C69B45 75%, #8B6914 100%)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: visible ? "gold-shimmer-title 4s ease-in-out infinite" : "none",
                  filter: "drop-shadow(0 0 30px rgba(198,155,69,0.35))",
                  display: "inline-block",
                }}
              >
                mejor
              </span>
            </span>
          </div>

          {/* Line 3: DEL MUNDO */}
          <div className="flex justify-center gap-x-4 md:gap-x-5 mt-1">
            {["DEL", "MUNDO"].map((word, i) => (
              <span key={word} className="overflow-hidden inline-block">
                <span
                  className="inline-block text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-[0.08em] text-white transition-all duration-700 ease-out"
                  style={{
                    transitionDelay: `${480 + i * 120}ms`,
                    transform: visible ? "translateY(0)" : "translateY(110%)",
                    opacity: visible ? 1 : 0,
                  }}
                >
                  {word}
                </span>
              </span>
            ))}
          </div>
        </h2>

        {/* Animated divider — draws in after headline */}
        <div
          className="flex items-center justify-center gap-4 mt-10 transition-all duration-1000 ease-out"
          style={{
            transitionDelay: "720ms",
            opacity: visible ? 1 : 0,
            transform: visible ? "scaleX(1)" : "scaleX(0)",
          }}
        >
          <div className="h-px flex-1 max-w-[120px]" style={{ background: "linear-gradient(90deg, transparent, #C69B45)" }} />
          <div className="flex gap-1.5">
            <span className="w-1 h-1 bg-gb-gold/40 rounded-full" />
            <span className="w-1.5 h-1.5 bg-gb-gold rounded-full" />
            <span className="w-1 h-1 bg-gb-gold/40 rounded-full" />
          </div>
          <div className="h-px flex-1 max-w-[120px]" style={{ background: "linear-gradient(90deg, #C69B45, transparent)" }} />
        </div>
      </div>

      {/* ── ROW A — scrolls left ── */}
      <div
        className="relative mb-5 overflow-hidden"
        style={{ maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)" }}
      >
        <div className="flex gap-6 w-max" style={{ animation: "brand-scroll-left 28s linear infinite" }}>
          {[...ROW_A, ...ROW_A, ...ROW_A].map((brand, i) => (
            <BrandCard key={`a-${i}`} brand={brand} />
          ))}
        </div>
      </div>

      {/* ── ROW B — scrolls right ── */}
      <div
        className="relative overflow-hidden"
        style={{ maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)" }}
      >
        <div className="flex gap-6 w-max" style={{ animation: "brand-scroll-right 36s linear infinite" }}>
          {[...ROW_B, ...ROW_B, ...ROW_B].map((brand, i) => (
            <BrandCard key={`b-${i}`} brand={brand} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes brand-scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes brand-scroll-right {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        @keyframes gold-shimmer-title {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>
    </section>
  );
}

/* ── Individual brand card ── */
function BrandCard({ brand }: { brand: { name: string; src: string } }) {
  return (
    <div
      className="group flex-shrink-0 flex flex-col items-center justify-center gap-3 w-52 h-32 border border-white/[0.06] relative overflow-hidden cursor-default transition-all duration-500 ease-out hover:-translate-y-1"
      style={{ background: "rgba(255,255,255,0.02)" }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: "inset 0 0 0 1px rgba(198,155,69,0.45), 0 8px 32px rgba(198,155,69,0.10)" }} />
      <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/10 group-hover:border-gb-gold/50 transition-colors duration-500" />
      <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/10 group-hover:border-gb-gold/50 transition-colors duration-500" />
      <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/10 group-hover:border-gb-gold/50 transition-colors duration-500" />
      <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/10 group-hover:border-gb-gold/50 transition-colors duration-500" />
      <Image src={brand.src} alt={brand.name} width={160} height={60} className="object-contain w-40 h-14 brightness-90 group-hover:brightness-125 transition-all duration-500" />
      <span className="text-[9px] uppercase tracking-[0.3em] text-white/30 group-hover:text-gb-gold/80 transition-colors duration-500">{brand.name}</span>
    </div>
  );
}
