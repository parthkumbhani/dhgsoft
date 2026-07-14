"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Section } from "@/components/ui/Section";

export function GlobalWorkplace() {
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

      <div className="relative z-10 w-full space-y-12">
        {/* Header */}
        <div className="text-left max-w-3xl">
          <span className="section-eyebrow">Global Reach</span>
          <h2 className="heading-section text-txt-strong mt-3 font-sans font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
            Our Connected Global Delivery Network
          </h2>
          <p className="section-subtitle text-txt-muted mt-4 font-sans font-medium leading-relaxed">
            DHGsoft operates across a unified global delivery framework. Our engineers deploy software automation solutions for manufacturing plants, data centers, and power utilities across multiple continents.
          </p>
        </div>

        {/* Panoramic Enterprise Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-[21/9] min-h-[260px] rounded-[24px] overflow-hidden shadow-sm border border-line bg-slate-50 group"
        >
          <Image
            src="/about_global.png"
            alt="DHGsoft global delivery operations and engineering center"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.01]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </Section>
  );
}
export default GlobalWorkplace;
