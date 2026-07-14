"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Section } from "@/components/ui/Section";

export function WhyDHGsoft() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 25 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay },
  });

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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column — Large high-quality real workplace photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden shadow-md border border-line bg-slate-50">
            <Image
              src="/images/careers/life-at-dhgsoft.jpg"
              alt="DHGsoft specialists working in a clean professional engineering environment"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </motion.div>

        {/* Right Column — Editorial content & Quote block */}
        <div className="lg:col-span-7 space-y-6 lg:pl-4">
          <motion.span {...fade(0)} className="section-eyebrow">
            Why DHGsoft
          </motion.span>

          <motion.h2
            {...fade(0.1)}
            className="heading-section text-txt-strong text-balance"
          >
            Engineering Careers built on innovation &amp; global impact.
          </motion.h2>

          <motion.p
            {...fade(0.18)}
            className="text-body-md text-txt-muted max-w-[620px] font-sans font-medium leading-relaxed"
          >
            At DHGsoft, we partner with the world&apos;s leading industrial companies to build next-generation automation and AI platforms. Our engineering groups work on the front lines of digital transformation, bridging physical shop floors with enterprise software platforms to unlock operational intelligence.
          </motion.p>

          {/* Minimalist Editorial Quote Box */}
          <motion.div
            {...fade(0.26)}
            className="pt-6 border-t border-line mt-8 relative"
          >
            <span
              className="absolute -top-6 -left-3 text-[6rem] leading-none text-brand/5 font-serif pointer-events-none select-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <blockquote className="text-body-sm italic text-txt-strong leading-relaxed font-sans font-medium">
              We focus on building a culture where technical mastery is respected, teamwork is second nature, and continuous learning defines our career progression paths.
            </blockquote>
            <p className="text-[10px] font-bold text-brand uppercase tracking-[0.2em] mt-4 font-sans">
              DHGsoft Delivery Leadership
            </p>
          </motion.div>
        </div>

      </div>
    </Section>
  );
}
export default WhyDHGsoft;
