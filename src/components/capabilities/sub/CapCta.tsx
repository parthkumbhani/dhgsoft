"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = { title: string };

export function CapCta({ title }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative overflow-hidden py-20 md:py-28 select-none">
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

      <div className="relative z-10 max-w-site mx-auto px-gutter md:px-gutter-md text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 border border-white/25 backdrop-blur-xs rounded-full mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-white font-sans">
            Ready to Transform
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="heading-hero text-white mt-6 max-w-[820px] mx-auto text-center font-extrabold leading-[1.1] tracking-tight font-sans"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="text-body-md text-white/85 mt-6 max-w-[620px] mx-auto leading-relaxed font-sans font-medium"
        >
          Let&apos;s discuss how DHGsoft&apos;s capabilities can accelerate your digital transformation journey with proven engineering excellence.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
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
            href="/capabilities"
            className="border border-white/30 hover:border-white hover:bg-white/5 text-white rounded-xl font-bold h-12 px-8 flex items-center justify-center transition-all duration-300 hover:-translate-y-[2px]"
          >
            Explore All Capabilities
          </Link>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/60 mt-12 font-sans"
        >
          Building Value for Tomorrow.
        </motion.p>
      </div>
    </section>
  );
}
export default CapCta;
