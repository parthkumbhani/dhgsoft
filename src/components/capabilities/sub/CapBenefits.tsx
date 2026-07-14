"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/Section";

type Props = {
  eyebrow: string;
  h2: string;
  benefits: string[];
};

export function CapBenefits({ eyebrow, h2, benefits }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.05, ease: "easeOut" }
    })
  };

  return (
    <Section variant="mist" size="default" pattern="v4" ref={ref} className="relative overflow-hidden border-b border-line">
      <div className="w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-12 max-w-2xl mx-auto space-y-4">
          <span className="section-eyebrow text-center">{eyebrow}</span>
          <h2 className="heading-section text-txt-strong text-center text-balance">
            {h2}
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {benefits.map((b, idx) => (
            <motion.div
              key={b}
              custom={idx}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants as any}
              className="h-full"
            >
              <div className="card flex items-start gap-4 bg-white border border-line rounded-[24px] p-6 hover:border-brand/40 hover:shadow-xs transition-all duration-300 h-full">
                <div className="w-6 h-6 rounded-full bg-brand/5 border border-brand/10 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-brand" />
                </div>
                <h3 className="card-title text-txt-strong leading-relaxed font-sans font-semibold">
                  {b}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
export default CapBenefits;
