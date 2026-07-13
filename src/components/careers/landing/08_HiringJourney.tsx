"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { hiringJourney } from "@/lib/careersData";

export function HiringJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <Section variant="white" size="snug" pattern="none" ref={ref} className="relative overflow-hidden border-b border-line">
      {/* Subtle Contour Grid Texture */}
      <div
        className="absolute inset-0 bg-tech-grid opacity-[0.012] pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15, 23, 42, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 w-full">
        {/* Header */}
        <div className="text-left mb-16">
          <span className="section-eyebrow">The Process</span>
          <h2 className="heading-section text-txt-strong mt-3 font-sans font-extrabold text-3xl md:text-4xl tracking-tight">
            Our Hiring Journey
          </h2>
          <p className="section-subtitle text-txt-muted max-w-[620px] mt-4 font-sans font-medium">
            A transparent overview of how we align our candidates with suitable engineering teams.
          </p>
        </div>

        {/* Horizontal Process Grid */}
        <div className="relative">
          {/* Horizontal connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-[1px] bg-line z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
            {hiringJourney.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="space-y-4"
              >
                {/* Step indicator node */}
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-full border border-line bg-white flex items-center justify-center font-mono font-extrabold text-lg text-brand shadow-sm select-none">
                    {step.step}
                  </div>
                  {/* Small line connector for mobile stacks */}
                  <div className="lg:hidden flex-grow h-[1px] bg-line" />
                </div>

                {/* Text content */}
                <div className="space-y-2">
                  <h3 className="text-sm font-extrabold text-txt-strong font-sans tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-txt-muted font-sans font-semibold leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
export default HiringJourney;
