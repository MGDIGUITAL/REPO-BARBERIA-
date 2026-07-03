"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

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

// Split into two rows for visual depth
const ROW_A = BRANDS.slice(0, 4);
const ROW_B = BRANDS.slice(4, 8);

export default function BrandCarousel() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  // Animate the gold spotlight sweeping left→right on a loop
  useEffect(() => {
    const el = spotlightRef.current;
    if (!el) return;
    let start: number | null = null;
    const duration = 4000; // ms per sweep
    const raf = requestAnimationFrame(function tick(ts) {
      if (!start) start = ts;
      const progress = ((ts - start) % duration) / duration;
      // Goes from -20% to 120% of width
      el.style.left = `${-20 + progress * 140}%`;
      requestAnimationFrame(tick);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="relative py-24 overflow-hidden bg-[#040506]">
      {/* Top gold hairline */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #C69B45 30%, #E8C972 50%, #C69B45 70%, transparent)",
        }}
      />
      {/* Bottom gold hairline */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #C69B45 30%, #E8C972 50%, #C69B45 70%, transparent)",
        }}
      />

      {/* Ambient background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(198,155,69,0.04) 0%, transparent 70%)",
        }}
      />

      {/* ── GOLD SPOTLIGHT SWEEP (signature element) ── */}
      <div
        ref={spotlightRef}
        className="absolute top-0 bottom-0 w-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(198,155,69,0.07) 40%, rgba(232,201,114,0.12) 50%, rgba(198,155,69,0.07) 60%, transparent 100%)",
          filter: "blur(8px)",
        }}
      />

      {/* Section header */}
      <div className="text-center mb-16 px-6 relative z-10">
        <p className="text-[10px] uppercase tracking-[0.5em] text-gb-gold/70 mb-4">
          ✦ Marcas que usamos ✦
        </p>
        <h2
          className="text-2xl md:text-3xl font-bold uppercase tracking-[0.15em] text-white"
        >
          Trabajamos con lo{" "}
          <span
            className="italic font-light lowercase"
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#C69B45",
            }}
          >
            mejor
          </span>{" "}
          del mundo
        </h2>
        {/* Animated gold pulse divider */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <div
            className="h-px w-16"
            style={{
              background: "linear-gradient(90deg, transparent, #C69B45)",
              animation: "shimmer-gold 3s ease-in-out infinite",
              backgroundSize: "200% 100%",
            }}
          />
          <div className="w-1 h-1 rounded-full bg-gb-gold" />
          <div
            className="h-px w-16"
            style={{
              background: "linear-gradient(90deg, #C69B45, transparent)",
              animation: "shimmer-gold 3s ease-in-out infinite reverse",
              backgroundSize: "200% 100%",
            }}
          />
        </div>
      </div>

      {/* ── ROW A — scrolls left ── */}
      <div
        className="relative mb-5 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <div
          className="flex gap-6 w-max"
          style={{ animation: "brand-scroll-left 28s linear infinite" }}
        >
          {[...ROW_A, ...ROW_A, ...ROW_A].map((brand, i) => (
            <BrandCard key={`a-${i}`} brand={brand} />
          ))}
        </div>
      </div>

      {/* ── ROW B — scrolls right (slower) ── */}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <div
          className="flex gap-6 w-max"
          style={{ animation: "brand-scroll-right 36s linear infinite" }}
        >
          {[...ROW_B, ...ROW_B, ...ROW_B].map((brand, i) => (
            <BrandCard key={`b-${i}`} brand={brand} />
          ))}
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes brand-scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes brand-scroll-right {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}

/* ── Individual brand card ── */
function BrandCard({ brand }: { brand: { name: string; src: string } }) {
  return (
    <div
      className="
        group flex-shrink-0
        flex flex-col items-center justify-center gap-3
        w-52 h-32
        border border-white/8
        relative overflow-hidden cursor-default
        transition-all duration-500 ease-out
        hover:-translate-y-1
      "
      style={{ background: "rgba(255,255,255,0.02)" }}
    >
      {/* Card gold border glow on hover */}
      <div
        className="
          absolute inset-0 opacity-0 group-hover:opacity-100
          transition-opacity duration-500
          pointer-events-none
        "
        style={{
          boxShadow: "inset 0 0 0 1px rgba(198,155,69,0.5), 0 8px 32px rgba(198,155,69,0.12)",
        }}
      />

      {/* Corner accents */}
      <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/10 group-hover:border-gb-gold/50 transition-colors duration-500" />
      <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/10 group-hover:border-gb-gold/50 transition-colors duration-500" />
      <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/10 group-hover:border-gb-gold/50 transition-colors duration-500" />
      <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/10 group-hover:border-gb-gold/50 transition-colors duration-500" />

      {/* Logo — full brightness, white, large */}
      <Image
        src={brand.src}
        alt={brand.name}
        width={160}
        height={60}
        className="
          object-contain w-40 h-14
          brightness-90 group-hover:brightness-125
          transition-all duration-500
        "
      />

      {/* Brand name label */}
      <span
        className="
          text-[9px] uppercase tracking-[0.3em]
          text-white/30 group-hover:text-gb-gold/80
          transition-colors duration-500
        "
      >
        {brand.name}
      </span>
    </div>
  );
}
