"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { employeeBenefits } from "@/lib/careersData";

export function EmployeeBenefits() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <Section variant="mist" size="snug" pattern="none" ref={ref} className="relative overflow-hidden border-b border-line">
      {/* Subtle Contour Grid Texture */}
      <div
        className="absolute inset-0 bg-tech-grid opacity-[0.012] pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15, 23, 42, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
        
        {/* Left Column: Heading */}
        <div className="lg:col-span-5 space-y-4">
          <span className="section-eyebrow">Benefits &amp; Perks</span>
          <h2 className="heading-section text-txt-strong mt-3 font-sans font-extrabold text-3xl md:text-4xl tracking-tight leading-tight text-balance">
            Supporting Our Engineering Teams
          </h2>
          <p className="text-body-md text-txt-muted max-w-[420px] font-sans font-medium leading-relaxed">
            We offer comprehensive support programs designed to sustain your wellness, professional advancement, and long-term security.
          </p>
        </div>

        {/* Right Column: Clean Editorial List with dividers */}
        <div className="lg:col-span-7 border-t border-line divide-y divide-line">
          {employeeBenefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="py-6 first:pt-6 select-none"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6">
                {/* Title */}
                <h3 className="md:col-span-4 text-sm font-extrabold text-txt-strong font-sans tracking-tight">
                  {benefit.title}
                </h3>
                {/* Description */}
                <p className="md:col-span-8 text-xs md:text-sm text-txt-muted font-sans font-medium leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </Section>
  );
}
export default EmployeeBenefits;
