"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section } from "@/components/ui/Section";

export function WhyChoose() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 25 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay },
  });

  return (
    <Section variant="mist" size="default" pattern="v6" ref={ref} className="relative overflow-hidden border-b border-line">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column — Content */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <motion.span {...fade(0)} className="section-eyebrow">
            Why Choose DHGsoft
          </motion.span>

          <motion.h2
            {...fade(0.1)}
            className="heading-section text-txt-strong text-balance"
          >
            Engineering-First. Ecosystem-Ready.
          </motion.h2>

          <motion.p
            {...fade(0.18)}
            className="text-body-md text-txt-muted max-w-[560px] font-sans font-medium leading-relaxed"
          >
            Our engineering-first approach combines industrial expertise with modern digital technologies to deliver practical, scalable, and future-ready solutions.
          </motion.p>

          <motion.p
            {...fade(0.26)}
            className="text-body-md text-txt-muted max-w-[560px] font-sans font-medium leading-relaxed"
          >
            Rather than implementing isolated technologies, we create connected ecosystems that improve operational visibility, enhance decision-making, strengthen cybersecurity, and accelerate business performance.
          </motion.p>
        </div>

        {/* Right Column — Pull-Quote Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative"
        >
          <div className="card bg-white border border-line rounded-[24px] p-8 relative overflow-hidden shadow-xs">
            {/* Elegant Quotation Mark */}
            <span
              className="absolute -top-6 -left-3 text-[7rem] leading-none text-brand/5 font-serif pointer-events-none select-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <div className="relative z-10 space-y-6">
              <blockquote className="text-body-sm italic text-txt-strong leading-relaxed font-sans font-semibold">
                Rather than implementing isolated technologies, we create connected ecosystems that continue delivering value long after implementation.
              </blockquote>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-[2px] bg-brand rounded-full shrink-0" />
                <p className="text-[10px] font-bold text-brand uppercase tracking-[0.2em] font-sans">
                  DHGsoft Engineering Philosophy
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </Section>
  );
}
export default WhyChoose;
