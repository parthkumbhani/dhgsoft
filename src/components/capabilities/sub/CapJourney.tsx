"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section } from "@/components/ui/Section";

type Props = {
  eyebrow: string;
  h2: string;
  subLine?: string;
  steps: string[];
};

export function CapJourney({ eyebrow, h2, subLine, steps }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" }
    })
  };

  return (
    <Section variant="white" size="default" pattern="v5" ref={ref} className="relative overflow-hidden border-b border-line">
      <div className="w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-12 max-w-2xl mx-auto space-y-4">
          <span className="section-eyebrow text-center">{eyebrow}</span>
          <h2 className="heading-section text-txt-strong text-center text-balance">
            {h2}
          </h2>
          {subLine && (
            <p className="section-subtitle text-txt-muted text-center max-w-[620px] mx-auto font-sans font-medium leading-relaxed">
              {subLine}
            </p>
          )}
        </div>

        {/* Steps Horizontal Timeline */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 relative">
          {steps.map((step, i) => (
            <motion.div
              key={step}
              custom={i}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              className="card bg-white border border-line rounded-[24px] p-6 relative flex flex-col justify-start h-full"
            >
              {/* Number circle */}
              <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center font-bold text-sm font-sans shadow-sm shrink-0">
                {i + 1}
              </div>
              
              <h3 className="card-title text-txt-strong mt-5 font-sans leading-snug">
                {step}
              </h3>

              {/* Connector line to next (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden xl:block absolute top-[40px] -right-4 w-8 h-[1px]" aria-hidden="true">
                  <div className="w-full h-full bg-line" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
export default CapJourney;
