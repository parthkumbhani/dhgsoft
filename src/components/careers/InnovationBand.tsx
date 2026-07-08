"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";

export default function InnovationBand() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });
  const shouldReduceMotion = !!useReducedMotion();

  return (
    <div 
      ref={containerRef}
      className="relative w-full min-h-[440px] lg:min-h-[520px] flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Background Image: Candid professional team collaboration */}
      <motion.div
        animate={
          shouldReduceMotion 
            ? {} 
            : { scale: isInView ? 1.02 : 1 }
        }
        transition={{ duration: 15, ease: "easeOut" }}
        className="absolute inset-0 z-0 w-full h-full"
      >
        <Image
          src="/images/careers-innovation-band.jpg"
          alt="DHGsoft digital engineering team collaborating on project specifications"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Dark gradient overlay (40% to 70% to 40% for deep contrast and text legibility) */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/70 to-ink/40 z-10" />

      {/* Grid line overlay to maintain consistent visual brand language */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none z-15" />

      {/* Centered content overlay */}
      <div className="relative z-20 w-full max-w-5xl px-6 md:px-12 text-center">
        {/* Decorative quote glyph */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.2, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          aria-hidden="true"
          className="absolute left-1/2 -top-12 -translate-x-1/2 text-[8rem] font-serif leading-none text-white select-none pointer-events-none"
        >
          &ldquo;
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-white text-2xl md:text-3xl lg:text-4xl leading-[1.35] font-medium max-w-[900px] mx-auto relative z-10"
        >
          A place where <span className="font-bold text-white underline decoration-brand decoration-2 underline-offset-4">innovation</span> meets opportunity &mdash;{" "}
          <span className="font-bold text-white">empowering</span> passionate professionals to build
          meaningful careers while creating <span className="font-bold text-white">value for tomorrow.</span>
        </motion.p>
      </div>
    </div>
  );
}
