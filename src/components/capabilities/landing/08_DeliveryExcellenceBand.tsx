"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { deliveryStats } from "@/lib/capabilitiesData";

export function DeliveryExcellenceBand() {
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
    <Section variant="white" size="compact" pattern="v4" ref={ref} className="relative overflow-hidden border-b border-line">
      {/* TODO: Replace [XX]+ placeholder values with real numbers before production deployment. */}
      {/* Confirm the support availability metric with delivery teams. */}
      <div className="w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-10 max-w-2xl mx-auto space-y-4">
          <span className="section-eyebrow text-center">Delivery Excellence</span>
          <h2 className="heading-section text-txt-strong text-center text-balance">
            Trusted Across the Full Lifecycle
          </h2>
        </div>

        {/* 4-Metric Stat Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {deliveryStats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              custom={idx}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              className="card bg-white border border-line rounded-[24px] p-6 text-center hover:border-brand/40 hover:shadow-xs transition-all duration-300 flex flex-col justify-center items-center"
            >
              <div className="heading-hero text-brand leading-none tracking-tight">
                {stat.value}
              </div>
              <div className="text-[10px] font-bold text-txt-muted uppercase tracking-[0.15em] mt-3 font-sans">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
export default DeliveryExcellenceBand;
