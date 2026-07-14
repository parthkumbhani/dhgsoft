"use client";

import React, { useRef, useState, useEffect } from "react";
import { Section } from "@/components/ui/Section";
import { statItems } from "@/lib/careersData";
import { motion, useInView } from "framer-motion";

export default function StatsStrip() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <Section 
      ref={containerRef}
      variant="white" 
      size="default" 
      containerSize="wide"
      className="bg-white border-b border-slate-100 select-none py-14 md:py-16"
    >
      <div className="w-full space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {statItems.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              className="space-y-2 text-center lg:text-left"
            >
              {/* Number Value */}
              <div className="text-4xl md:text-5xl font-extrabold text-gradient-brand tracking-tight">
                {stat.value}
              </div>
              {/* Label */}
              <div className="md:text-sm section-eyebrow">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Verification Admin notice */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.45 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-[10px] md:text-xs text-slate-400 font-mono text-center tracking-wide"
        >
          * Numbers are placeholders &mdash; replace with verified figures before publishing.
        </motion.p>
      </div>
    </Section>
  );
}
