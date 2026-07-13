"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Section } from "@/components/ui/Section";

export function EngineeringCulture() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 25 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
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

      <div className="relative z-10 w-full space-y-20 lg:space-y-28">
        {/* Header */}
        <div className="text-center">
          <span className="section-eyebrow">Engineering Culture</span>
          <h2 className="heading-section text-txt-strong mt-3 font-sans font-extrabold text-3xl md:text-4xl tracking-tight">
            How We Solve Industrial Challenges
          </h2>
          <p className="section-subtitle text-txt-muted max-w-[620px] mx-auto mt-4 font-sans font-medium">
            We align technical mastery with collaborative execution to solve high-impact automation puzzles.
          </p>
        </div>

        {/* Story 1 — Image Right, Text Left */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="lg:col-span-6 space-y-4">
            <motion.h3 {...fade(0)} className="text-2xl md:text-3xl font-extrabold text-txt-strong font-sans tracking-tight leading-snug">
              Uncompromising Technical Mastery
            </motion.h3>
            <motion.p {...fade(0.1)} className="text-body-md text-txt-muted font-sans font-medium leading-relaxed">
              We recruit and develop engineers who care deeply about the craft of digital execution. Whether designing real-time PLC routines, architecting IoT gateways, or deploying analytics networks on cloud systems, our team is unified by a passion for technical excellence and robust, production-ready code.
            </motion.p>
            <motion.p {...fade(0.18)} className="text-body-md text-txt-muted font-sans font-medium leading-relaxed">
              At DHGsoft, we do not bypass complexity. We build frameworks that simplify it, delivering reliable operations to client facilities across the globe.
            </motion.p>
          </div>
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="relative aspect-[16/10] rounded-[24px] overflow-hidden shadow-sm border border-line bg-slate-50">
              <Image
                src="/about_engineering.png"
                alt="DHGsoft engineering team working with smart telemetry systems"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </motion.div>
        </div>

        {/* Story 2 — Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-8">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 order-last lg:order-first"
          >
            <div className="relative aspect-[16/10] rounded-[24px] overflow-hidden shadow-sm border border-line bg-slate-50">
              <Image
                src="/about_collaboration.png"
                alt="DHGsoft delivery team reviewing automation architectures"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </motion.div>
          {/* Text */}
          <div className="lg:col-span-6 space-y-4">
            <motion.h3 {...fade(0)} className="text-2xl md:text-3xl font-extrabold text-txt-strong font-sans tracking-tight leading-snug">
              Collaborative Project Execution
            </motion.h3>
            <motion.p {...fade(0.1)} className="text-body-md text-txt-muted font-sans font-medium leading-relaxed">
              True transformation requires a deep understanding of OT infrastructure, system processes, and enterprise data models. Our projects succeed because software developers, PLC engineers, and systems architects work side-by-side. We dismantle technical silos to deliver unified engineering solutions.
            </motion.p>
            <motion.p {...fade(0.18)} className="text-body-md text-txt-muted font-sans font-medium leading-relaxed">
              Every system we deploy is the direct outcome of multidisciplinary synergy, designed to improve yield, efficiency, and sustainability.
            </motion.p>
          </div>
        </div>

      </div>
    </Section>
  );
}
export default EngineeringCulture;
