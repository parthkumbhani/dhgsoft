"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <Section variant="ink" size="hero" pattern="none" className="relative overflow-hidden min-h-[80vh] flex items-center select-none">
      {/* Background Image — natural lighting, Annual Report style */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/95 to-ink/50 z-10" />
        <div 
          className="absolute inset-0 opacity-75"
          style={{ 
            backgroundImage: 'url(/images/capabilities/capabilities-hero.jpg)',
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

      {/* Content — Left Aligned, pl-[8vw] style spacing */}
      <div className="relative z-20 mx-auto w-full max-w-site px-gutter md:px-gutter-md">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-[720px] flex flex-col items-start"
        >
          {/* Eyebrow chip */}
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 backdrop-blur-xs rounded-full mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-white font-sans">
              Capabilities
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={item}
            className="heading-hero text-white text-balance"
          >
            Engineering Capabilities That Power <br />
            <span className="text-gradient-brand font-black">Intelligent Industries</span>
          </motion.h1>

          {/* Sub-line */}
          <motion.p
            variants={item}
            className="mt-6 text-body-md text-white/85 max-w-[620px] leading-relaxed font-sans font-medium"
          >
            DHGsoft combines engineering expertise, industrial technologies, and digital innovation to help organizations modernize operations, improve efficiency, and accelerate industrial transformation. Our integrated capabilities connect operational technology, enterprise systems, cloud platforms, and intelligent data to create future-ready industrial ecosystems.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap gap-4 items-center"
          >
            <Link
              href="#capabilities"
              className={cn(
                buttonVariants({ variant: "primary", size: "lg" }),
                "h-12 px-8 flex items-center justify-center gap-2 group cursor-pointer text-white font-bold rounded-xl bg-gradient-to-r from-brand to-brand-deep hover:-translate-y-[2px] transition-all duration-300 shadow-md shadow-brand/10"
              )}
            >
              <span>Explore Capabilities</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="border border-white/30 hover:border-white hover:bg-white/5 text-white rounded-xl font-bold h-12 px-8 flex items-center justify-center transition-all duration-300 hover:-translate-y-[2px]"
            >
              Talk to an Expert
            </Link>
          </motion.div>

          {/* Small stat row below CTAs */}
          <motion.div 
            variants={item}
            className="mt-10 pt-8 border-t border-white/10 w-full flex flex-wrap gap-12"
          >
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-extrabold text-brand tracking-tight">10+</span>
              <span className="text-[10px] font-bold text-white/60 uppercase tracking-wider mt-1 font-sans">Core Capabilities</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-extrabold text-brand tracking-tight">14</span>
              <span className="text-[10px] font-bold text-white/60 uppercase tracking-wider mt-1 font-sans">Industries Served</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-extrabold text-brand tracking-tight">Full Lifecycle</span>
              <span className="text-[10px] font-bold text-white/60 uppercase tracking-wider mt-1 font-sans">Delivery Model</span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </Section>
  );
}
export default Hero;
