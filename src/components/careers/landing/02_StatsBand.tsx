"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { stats } from "@/lib/careersData";

// TODO: Replace [XX]+ placeholder values in careersData.ts with real numbers before publishing.

export function StatsBand() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <Section variant="mist" size="snug" pattern="v3" ref={ref} className="border-b border-line relative overflow-hidden">
      {/* Blueprint grid texture */}
      <div
        className="absolute inset-0 bg-tech-grid opacity-[0.015] pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15, 23, 42, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-eyebrow tracking-[0.25em]">
            AT A GLANCE
          </span>
          <h2 className="heading-section text-txt-strong mt-3 font-sans font-extrabold text-3xl md:text-4xl tracking-tight">
            Where Talent Meets Purpose
          </h2>
          <p className="section-subtitle text-txt-muted max-w-[520px] mx-auto mt-4 font-sans font-medium">
            A quick look at the DHGsoft team at scale.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card bg-white border border-line rounded-2xl p-6 text-center hover:border-brand transition-all duration-300 hover:shadow-md group relative overflow-hidden"
            >
              {/* Inner glowing top border */}
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-brand/10 group-hover:bg-brand transition-colors duration-300" />

              {/* Glowing stat numbers */}
              <div className="heading-hero font-extrabold leading-none text-brand select-none font-sans group-hover:scale-103 transition-transform duration-350">
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-[10px] font-bold text-txt-muted uppercase tracking-[0.2em] mt-4 font-sans">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
export default StatsBand;
