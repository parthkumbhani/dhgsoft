"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { deliverySteps } from "@/lib/capabilitiesData";

export function HowWeDeliver() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const stepVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" }
    })
  };

  return (
    <Section variant="mist" size="default" pattern="v5" ref={ref} className="relative overflow-hidden border-b border-line">
      <div className="w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-12 max-w-2xl mx-auto space-y-4">
          <span className="section-eyebrow text-center">How We Deliver</span>
          <h2 className="heading-section text-txt-strong text-center text-balance">
            A Structured Engineering Approach
          </h2>
          <p className="section-subtitle text-txt-muted text-center max-w-[620px] mx-auto font-sans font-medium leading-relaxed">
            Every capability is delivered through a structured engineering approach.
          </p>
        </div>

        {/* 4-step horizontal timeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative mt-12">
          {deliverySteps.map((step, i) => (
            <motion.div
              key={step.id}
              custom={i}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={stepVariants}
              className="card bg-white border border-line rounded-[24px] p-6 relative flex flex-col justify-start h-full"
            >
              {/* Number badge */}
              <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center font-bold text-lg font-sans shadow-sm">
                {i + 1}
              </div>
              
              <h3 className="card-title text-txt-strong mt-5 font-sans">
                {step.title}
              </h3>
              
              <p className="card-description text-txt-muted mt-3 leading-relaxed font-sans">
                {step.body}
              </p>

              {/* Connector line to next step (desktop only, not on last) */}
              {i < deliverySteps.length - 1 && (
                <div className="hidden md:block absolute top-[44px] -right-4 w-8 h-[1px]" aria-hidden="true">
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
export default HowWeDeliver;
