"use client";

import React, { useRef } from "react";
import { Cpu, Target, GraduationCap, Users, Rocket } from "lucide-react";
import { whyJoinReasons } from "@/lib/careersData";
import { Section } from "@/components/ui/Section";
import { motion, useInView, useReducedMotion } from "framer-motion";

// Map lucide components
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cpu,
  Target,
  GraduationCap,
  Users,
  Rocket
};

export default function FiveReasonsGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const shouldReduceMotion = !!useReducedMotion();

  return (
    <Section 
      ref={containerRef}
      variant="mist" 
      size="default" 
      containerSize="wide" 
      className="bg-gradient-to-b from-slate-50 to-slate-100/60 relative overflow-hidden select-none border-y border-line py-20 md:py-24"
    >
      {/* Subtle Dot matrix backgrounds */}
      <div className="absolute left-6 top-1/4 w-20 h-20 bg-dot-matrix opacity-[0.15] pointer-events-none" />
      <div className="absolute right-6 bottom-1/4 w-20 h-20 bg-dot-matrix opacity-[0.15] pointer-events-none" />

      {/* Header Block */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20">
        <div className="lg:col-span-7 text-left space-y-3">
          <span className="section-eyebrow">
            Why join DHGsoft?
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-txt-strong tracking-tight font-sans">
            5 reasons to build your <br />
            <span className="text-gradient-brand">career at DHGsoft</span>
          </h2>
        </div>
        <div className="lg:col-span-5 text-left lg:text-right font-light">
          <p className="max-w-[460px] lg:ml-auto section-subtitle">
            Build your career with innovation, collaboration, and continuous learning while creating intelligent solutions that shape the future of connected industries.
          </p>
        </div>
      </div>
 
      {/* 5-Card Grid Column layout (1 column mobile, 2 tablet, 3 small desktop, 5 desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 xl:gap-6 w-full items-stretch">
        {whyJoinReasons.map((reason, index) => {
          // Replace Globe icon with Rocket for Growth/Global Opportunities
          const iconKey = reason.iconName === "Globe" ? "Rocket" : reason.iconName;
          const Icon = iconMap[iconKey] || Cpu;
          
          return (
            <motion.div
              key={reason.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" as const }}
              className="w-full flex h-full"
            >
              <div className="group relative w-full rounded-2xl bg-white border border-line p-5 md:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[270px] text-left">
                {/* Thin top gradient accent stripe */}
                <div className="absolute top-0 inset-x-0 h-[4px] bg-gradient-to-r from-brand to-brand-hot" />
 
                <div className="space-y-5">
                  {/* Header Row */}
                  <div className="flex justify-between items-start">
                    {/* Icon wrap rounded chip with glowing background accent */}
                    <div className="w-12 h-12 rounded-xl bg-brand/5 border border-brand/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 text-brand">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-300">0{index + 1}</span>
                  </div>
 
                  {/* Card Title & Description */}
                  <div className="space-y-2.5">
                    <h4 className="text-lg font-bold text-txt-strong group-hover:text-brand transition-colors relative inline-block">
                      {reason.title}
                      {/* Short custom underline */}
                      <span className="absolute bottom-[-6px] left-0 w-8 h-[3px] bg-gradient-to-r from-brand to-brand-hot opacity-85 rounded-full" />
                    </h4>
                    <p className="pt-1.5 card-description">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
