"use client";

import Image from "next/image";

const BRANDS = [
  { name: "BaByliss PRO",     src: "/brand-babyliss.png"      },
  { name: "Wahl",             src: "/brand-wahl.png"           },
  { name: "Andis",            src: "/brand-andis.png"          },
  { name: "Reuzel",           src: "/brand-reuzel.png"         },
  { name: "American Crew",    src: "/brand-american-crew.png"  },
  { name: "Oster",            src: "/brand-oster.png"          },
  { name: "Layrite",          src: "/brand-layrite.png"        },
  { name: "Schwarzkopf PRO",  src: "/brand-schwarzkopf.png"   },
];

export default function BrandCarousel() {
  return (
    <section className="relative py-20 border-t border-b border-white/5 bg-[#050607] overflow-hidden">
      {/* Section header */}
      <div className="text-center mb-14 px-6">
        <p className="text-[10px] uppercase tracking-[0.4em] text-gb-gold mb-3">
          ✦ Marcas que usamos ✦
        </p>
        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-gb-text">
          Trabajamos con lo <span className="text-gb-gold italic font-serif lowercase font-light">mejor</span> del mundo
        </h2>
        <div className="w-10 h-[1px] bg-gb-gold mx-auto mt-5" />
      </div>

      {/* Carousel track wrapper — clips overflow and adds edge fades */}
      <div
        className="relative w-full"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      >
        {/* Scrolling track — duplicated for seamless loop */}
        <div
          className="flex gap-10 w-max"
          style={{ animation: "brand-scroll 32s linear infinite" }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.animationPlayState = "paused")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.animationPlayState = "running")
          }
        >
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <div
              key={i}
              className="group flex-shrink-0 flex flex-col items-center justify-center
                         w-44 h-28 bg-gb-surface border border-white/5
                         rounded-sm cursor-pointer
                         hover:border-gb-gold/40 transition-all duration-500
                         relative overflow-hidden"
            >
              {/* Gold shimmer on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(198,155,69,0.06) 0%, transparent 70%)",
                }}
              />

              <Image
                src={brand.src}
                alt={brand.name}
                width={128}
                height={64}
                className="object-contain w-32 h-16
                           grayscale brightness-75
                           group-hover:grayscale-0 group-hover:brightness-110
                           transition-all duration-500"
              />
              <span
                className="text-[9px] uppercase tracking-[0.25em] text-gray-600
                           group-hover:text-gb-gold/70 transition-colors duration-500 mt-2"
              >
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Inline keyframe — injected via style tag */}
      <style>{`
        @keyframes brand-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
