"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Stat = { value: string; label: string };
type Props = {
  eyebrow: string;
  h1: string;
  emphasisWord?: string;
  subLine: string;
  heroImage: string;
  stats?: Stat[];
};

export function CapHero({ eyebrow, h1, emphasisWord, subLine, heroImage, stats }: Props) {
  const [before, after] = emphasisWord && h1.includes(emphasisWord)
    ? h1.split(emphasisWord)
    : [h1, ''];

  return (
    <section className="relative min-h-[75vh] bg-ink text-white overflow-hidden flex items-center select-none">
      {/* Full-bleed image with dark left-to-right fade */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/95 to-ink/50 z-10" />
        <div 
          className="absolute inset-0 opacity-70"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            maskImage: 'linear-gradient(to left, black 30%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to left, black 30%, transparent 100%)',
          }}
        />
      </div>

      {/* Subtle Contour grid texture */}
      <div
        className="absolute inset-0 bg-tech-grid opacity-[0.015] pointer-events-none z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Content */}
      <div className="relative z-20 w-full max-w-site mx-auto px-gutter md:px-gutter-md pt-20">
        <nav className="text-white/60 text-xs sm:text-sm font-semibold mb-6 flex items-center gap-1">
          <Link href="/capabilities" className="hover:text-white transition-colors">
            Capabilities
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-white/80 font-bold">{eyebrow}</span>
        </nav>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xs mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-brand" />
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-white font-sans">{eyebrow}</span>
        </div>

        <h1 className="heading-hero text-white mt-6 max-w-[720px] text-balance">
          {before}
          {emphasisWord && <span className="text-gradient-brand font-black">{emphasisWord}</span>}
          {after}
        </h1>

        <p className="text-body-md text-white/85 mt-6 max-w-[620px] leading-relaxed font-sans font-medium">
          {subLine}
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <Link 
            href="/contact"
            className={cn(
              buttonVariants({ variant: "primary", size: "lg" }),
              "h-12 px-8 flex items-center justify-center gap-2 group cursor-pointer text-white font-bold rounded-xl bg-gradient-to-r from-brand to-brand-deep hover:-translate-y-[2px] transition-all duration-300 shadow-md shadow-brand/10"
            )}
          >
            <span>Talk to an Expert</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link 
            href="#solutions"
            className="border border-white/30 hover:border-white hover:bg-white/5 text-white rounded-xl font-bold h-12 px-8 flex items-center justify-center transition-all duration-300 hover:-translate-y-[2px]"
          >
            Explore Solutions
          </Link>
        </div>

        {/* Quick stats row */}
        {stats && stats.length > 0 && (
          <div className="mt-12 pt-8 border-t border-white/15 flex flex-wrap gap-12">
            {stats.map(s => (
              <div key={s.label} className="flex flex-col">
                <div className="text-xl md:text-2xl font-extrabold text-brand-hot tracking-tight">
                  {s.value}
                </div>
                <div className="text-[10px] font-bold text-white/60 uppercase tracking-wider mt-1 font-sans">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
export default CapHero;
