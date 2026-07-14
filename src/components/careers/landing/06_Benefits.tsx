"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { benefits } from "@/lib/careersData";

// TODO: Confirm exact benefits with HR before publishing.

export function Benefits() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <Section variant="mist" size="snug" pattern="v4" ref={ref} className="relative overflow-hidden border-b border-line">
      {/* Blueprint Grid Background */}
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
          <span className="section-eyebrow tracking-[0.25em]">BENEFITS & PERKS</span>
          <h2 className="heading-section text-txt-strong mt-3 font-sans font-extrabold text-3xl md:text-4xl tracking-tight">
            Everything You Need to Do Your Best Work
          </h2>
          <p className="section-subtitle text-txt-muted max-w-[660px] mx-auto mt-4 font-sans font-medium leading-relaxed">
            We invest in our people through comprehensive benefits, learning opportunities, and support at every stage of your career.
          </p>
        </div>

        {/* 8-card grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="card bg-white border border-line rounded-2xl p-6 hover:border-brand hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-center group relative overflow-hidden flex flex-col items-center"
            >
              {/* Inner glowing top accent border */}
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-brand/10 group-hover:bg-brand transition-colors duration-300" />

              <div className="w-12 h-12 rounded-full bg-brand/5 flex items-center justify-center border border-brand/10 mb-4 group-hover:bg-brand group-hover:border-brand group-hover:shadow-md group-hover:shadow-brand/10 transition-all duration-300">
                <benefit.Icon className="w-5 h-5 text-brand group-hover:text-white transition-colors duration-300" />
              </div>

              <h4 className="card-title text-txt-strong text-sm leading-snug font-sans font-bold mb-2">
                {benefit.title}
              </h4>
              <p className="text-xs text-txt-muted leading-relaxed font-sans font-medium flex-grow">
                {benefit.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
export default Benefits;
