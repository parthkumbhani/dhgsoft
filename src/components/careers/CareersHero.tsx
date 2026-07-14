"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CareersHeroProps {
  onContactClick?: () => void;
}

export default function CareersHero({ onContactClick }: CareersHeroProps) {
  const shouldReduceMotion = !!useReducedMotion();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Framer Motion variants for staggered fade-up animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative w-full min-h-[640px] lg:min-h-[750px] overflow-hidden flex items-center bg-[#0A0E1A] select-none">
      
      {/* Background image — full bleed with slow Ken Burns breathing animation */}
      <motion.div 
        animate={
          isClient && shouldReduceMotion 
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

      {/* Dark gradient overlay — deep navy/slate-950 to transparent behind text */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent z-10" />
      
      {/* Subtle dark fade from top for premium cinematic feel */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/60 to-transparent pointer-events-none z-10" />
      
      {/* Soft crimson brand glow accent bottom-right */}
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-brand/15 blur-[120px] pointer-events-none z-10" />

      {/* Grid overlay for subtle high-tech engineering structure */}
      <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none z-10" />

      {/* Content — sits above overlays, left-aligned */}
      <div className="relative z-20 mx-auto w-full max-w-site px-gutter md:px-gutter-md pt-28 pb-16">
        <motion.div 
          variants={containerVariants}
          initial={isClient && shouldReduceMotion ? "visible" : "hidden"}
          animate="visible"
          className="max-w-3xl text-left space-y-6 flex flex-col items-start"
        >
            {/* Eyebrow chip */}
            <motion.div 
              variants={itemVariants as any} 
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
              <span className="section-eyebrow on-dark">
                Build Your Career
              </span>
            </motion.div>
            
            {/* H1 — Large anchor with tightened line-height */}
            <motion.h1 
              variants={itemVariants as any}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.25rem] font-extrabold leading-[0.95] tracking-tight text-white font-sans"
            >
              <span className="block">Build</span>
              <span className="block">the Future of</span>
              <span className="block text-gradient-brand">
                Connected Industries
              </span>
            </motion.h1>
            
            {/* Supporting paragraph */}
            <motion.p 
              variants={itemVariants as any}
              className="lg:text-[16px] max-w-[560px] section-subtitle on-dark"
            >
              Join a team that&apos;s transforming industrial enterprises through Automation, AI, Data, Cloud, and Digital Engineering. At DHGsoft, you&apos;ll work on cutting-edge technologies, collaborate with industry experts, and help shape the future of connected industries across the globe.
            </motion.p>
            
            {/* CTAs */}
            <motion.div 
              variants={itemVariants as any}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              <Link 
                href="/careers/current-openings"
                className={cn(
                  buttonVariants({ variant: "primary", size: "lg" }),
                  "rounded-full px-7 py-3.5 text-xs uppercase tracking-wider group"
                )}
              >
                Explore Vacancies
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              {onContactClick ? (
                <button 
                  onClick={onContactClick}
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-white/40 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/10 hover:border-white transition-all duration-300 active:scale-95 cursor-pointer"
                >
                  Contact Us
                </button>
              ) : (
                <Link
                  href="/about#contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-white/40 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/10 hover:border-white transition-all duration-300 active:scale-95 cursor-pointer"
                >
                  Contact Us
                </Link>
              )}
            </motion.div>
            
        </motion.div>
      </div>
      
    </section>
  );
}
export { CareersHero };
