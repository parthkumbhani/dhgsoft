"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section } from "@/components/ui/Section";

export default function TestimonialBand() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  return (
    <Section 
      ref={containerRef}
      variant="white" 
      size="default" 
      containerSize="wide"
      className="relative overflow-visible py-16 md:py-24"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="w-full bg-gradient-to-r from-brand via-brand-hot to-brand-accent rounded-3xl p-8 md:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden"
      >
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />

        {/* Section Header Row (2-column layout) */}
        <div className="w-full border-b border-white/20 pb-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 relative z-10">
          <div className="text-left space-y-2">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70 block font-mono">
              Employee testimonials
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Hear from our people
            </h2>
          </div>
          <div className="text-left md:text-right">
            <p className="text-sm md:text-base text-white/85 font-light max-w-xs md:ml-auto">
              Explore why people joined DHGsoft&mdash;and what keeps them here.
            </p>
          </div>
        </div>

        {/* Quote and Profile Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Quote Block (Left) */}
          <div className="lg:col-span-8 text-left space-y-6 relative">
            {/* Massive background quote marks */}
            <div className="absolute -left-4 -top-8 text-[6rem] font-serif text-white/25 select-none pointer-events-none leading-none">
              &ldquo;
            </div>

            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-medium text-white/95 relative z-10 pl-6">
              Joining DHGsoft has provided me with opportunities to work on challenging industrial automation and digital transformation projects. The <span className="font-extrabold text-white underline decoration-brand-accent decoration-2 underline-offset-4">collaborative culture</span>, <span className="font-extrabold text-white">continuous learning</span>, and <span className="font-extrabold text-white">exposure to new technologies</span> have helped me <span className="font-extrabold text-white">strengthen my technical expertise</span> and <span className="font-extrabold text-white">grow professionally</span>.
            </p>
            <div className="pt-2 pl-6">
              <p className="font-bold text-lg md:text-xl">Devendra Brahmbhatt</p>
              <p className="text-xs md:text-sm text-white/80 font-mono mt-0.5">System Engineer, DHGsoft</p>
            </div>
          </div>

          {/* Portrait Placeholder Monogram (Right) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center space-y-4">
            <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shadow-2xl backdrop-blur-sm">
              {/* Inner gradient glowing profile circle */}
              <div className="absolute inset-2.5 rounded-full bg-gradient-to-br from-white/10 to-white/15 flex items-center justify-center">
                <span className="text-4xl md:text-5xl font-black text-white font-mono select-none">
                  DB
                </span>
              </div>
              {/* Initials description tab */}
              <div className="absolute -bottom-1 bg-white text-brand text-[9px] font-extrabold uppercase px-2.5 py-0.5 rounded-full shadow-md tracking-wider">
                System Eng
              </div>
            </div>

            <div className="text-center space-y-1">
              <span className="text-[10px] text-white/60 font-mono block">
                [Placeholder &mdash; replace with real approved employee photo]
              </span>
            </div>
          </div>

        </div>

      </motion.div>
    </Section>
  );
}
