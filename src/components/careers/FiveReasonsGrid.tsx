"use client";

import React, { useRef } from "react";
import { Cpu, Target, GraduationCap, Users, Globe } from "lucide-react";
import { whyJoinReasons } from "@/lib/careersData";
import { Section } from "@/components/ui/Section";
import { motion, useInView } from "framer-motion";

// Map lucide components
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cpu,
  Target,
  GraduationCap,
  Users,
  Globe
};

export default function FiveReasonsGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <Section 
      ref={containerRef}
      variant="mist" 
      size="default" 
      containerSize="wide" 
      className="bg-mist relative overflow-hidden select-none border-y border-line"
    >
      {/* Subtle Dot matrix backgrounds */}
      <div className="absolute left-6 top-1/4 w-20 h-20 bg-dot-matrix opacity-25 pointer-events-none" />
      <div className="absolute right-6 bottom-1/4 w-20 h-20 bg-dot-matrix opacity-25 pointer-events-none" />

      {/* Header Block */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-16">
        <div className="lg:col-span-7 text-left space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand font-mono block">
            Why join DHGsoft?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-txt-strong tracking-tight">
            5 reasons to build your <br />
            <span className="text-gradient-brand">career at DHGsoft</span>
          </h2>
        </div>
        <div className="lg:col-span-5 text-left lg:text-right font-light">
          <p className="text-txt-muted text-base md:text-lg leading-relaxed max-w-[420px] lg:ml-auto">
            Build your career with innovation, collaboration, and continuous learning while creating intelligent solutions that shape the future of connected industries.
          </p>
        </div>
      </div>

      {/* 5-Card Grid Column list layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {whyJoinReasons.map((reason, index) => {
          const Icon = iconMap[reason.iconName] || Cpu;
          return (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
              className="group relative rounded-2xl bg-white border border-line p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[260px] text-left"
            >
              {/* Thin top gradient accent stripe */}
              <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-brand via-brand-hot to-brand-accent" />

              <div className="space-y-6">
                {/* Header Row */}
                <div className="flex justify-between items-start">
                  {/* Icon wrap rounded chip */}
                  <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 text-brand">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">0{index + 1}</span>
                </div>

                {/* Card Title */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-txt-strong group-hover:text-brand transition-colors relative inline-block">
                    {reason.title}
                    {/* Short custom underline */}
                    <span className="absolute bottom-[-4px] left-0 w-8 h-0.5 bg-gradient-to-r from-brand to-brand-accent opacity-70" />
                  </h3>
                  <p className="text-txt-muted text-sm leading-relaxed pt-1.5 font-light">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
