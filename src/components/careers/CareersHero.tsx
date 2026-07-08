"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function CareersHero() {
  const shouldReduceMotion = !!useReducedMotion();

  return (
    <section className="relative w-full min-h-[640px] lg:min-h-[720px] overflow-hidden flex items-center bg-[#0A0E1A] select-none">
      
      {/* Background image — full bleed with slow Ken Burns breathing animation */}
      <motion.div 
        animate={
          shouldReduceMotion 
            ? {} 
            : { scale: [1.02, 1, 1.02] }
        }
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/careers-hero.jpg"
          alt="DHGsoft engineers working in a modern smart factory facility"
          fill
          quality={95}
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Dark gradient overlay — stronger on the left for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/40 z-10" />
      
      {/* Subtle dark fade from top for premium cinematic feel */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/60 to-transparent pointer-events-none z-10" />
      
      {/* Soft crimson brand glow accent bottom-right */}
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-brand/15 blur-[120px] pointer-events-none z-10" />

      {/* Grid overlay for subtle high-tech engineering structure */}
      <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none z-10" />

      {/* Content — sits above overlays, left-aligned */}
      <div className="relative z-20 mx-auto w-full max-w-site px-gutter md:px-gutter-md pt-24 pb-16 flex items-center">
        <motion.div 
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="max-w-[720px] text-left space-y-6"
        >
          {/* Eyebrow chip */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white font-mono">
              Build Your Career
            </span>
          </div>
          
          {/* H1 — 3 lines with gradient matching layout specifications */}
          <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold leading-[1.02] tracking-tight text-white font-sans">
            <span className="block">Build</span>
            <span className="block">the Future of</span>
            <span className="block text-gradient-brand">
              Connected Industries
            </span>
          </h1>
          
          {/* Supporting paragraph */}
          <p className="text-white/85 text-base md:text-lg leading-relaxed max-w-[520px] font-light">
            Join a team that&apos;s transforming industrial enterprises through Automation, AI, Data, Cloud, and Digital Engineering. At DHGsoft, you&apos;ll work on cutting-edge technologies, collaborate with industry experts, and help shape the future of connected industries across the globe.
          </p>
          
          {/* CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link 
              href="/careers/current-openings"
              className={cn(
                buttonVariants({ variant: "onDark", size: "lg" }),
                "rounded-full px-7 py-3.5 text-xs uppercase tracking-wider group"
              )}
            >
              Explore Vacancies
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link 
              href="/careers/life-at-dhgsoft"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-white/50 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/10 hover:border-white transition-all duration-300 active:scale-95 cursor-pointer"
            >
              Life at DHGsoft
            </Link>
          </div>
          
        </motion.div>
      </div>
      
    </section>
  );
}
export { CareersHero };
