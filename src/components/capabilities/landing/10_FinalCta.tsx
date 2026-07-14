"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FinalCta() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <Section ref={ref} variant="ink" size="hero" pattern="none" className="relative overflow-hidden border-t border-line">
      {/* Background — rich crimson gradient overlay + corner glows */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ background: 'linear-gradient(135deg, #B4123F 0%, #9E1039 50%, #A10E38 100%)' }} 
      />
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none z-1"
        style={{ 
          background: 'radial-gradient(circle at 20% 20%, rgba(245,179,1,0.25) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(225,29,92,0.25) 0%, transparent 50%)' 
        }}
      />
      
      {/* Subtle Contour grid texture */}
      <div
        className="absolute inset-0 bg-tech-grid opacity-[0.03] pointer-events-none z-1"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-site px-gutter md:px-gutter-md flex flex-col items-center text-center">
        {/* Eyebrow chip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 border border-white/25 backdrop-blur-xs rounded-full mb-8"
        >
          {/* Amber status-pill dot */}
          <span className="w-1.5 h-1.5 rounded-full bg-[#F5B301] animate-pulse" />
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-white font-sans">
            Start Your Transformation
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="heading-hero text-white text-center leading-[1.1] tracking-tight font-sans font-extrabold max-w-3xl"
        >
          Ready to Transform Your Industrial Operations?
        </motion.h2>

        {/* Sub-line */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="text-body-md text-white/85 max-w-[680px] mx-auto mt-6 font-sans font-semibold leading-relaxed"
        >
          Let&apos;s discuss how DHGsoft&apos;s capabilities can accelerate your digital transformation journey with proven engineering excellence and industrial expertise.
        </motion.p>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-8"
        >
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-12 px-8 flex items-center justify-center gap-2 group cursor-pointer font-bold rounded-xl border-white text-white hover:bg-white hover:text-brand transition-all duration-300 shadow-sm"
            )}
          >
            <span>Talk to an Expert</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact#schedule"
            className="border border-white/30 hover:border-white hover:bg-white/5 text-white rounded-xl font-bold h-12 px-8 flex items-center justify-center transition-all duration-300 hover:-translate-y-[2px]"
          >
            Schedule Consultation
          </Link>
        </motion.div>

        {/* Footer Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/60 mt-12 font-sans"
        >
          Building Value for Tomorrow.
        </motion.p>
      </div>
    </Section>
  );
}
export default FinalCta;
