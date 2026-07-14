"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section } from "@/components/ui/Section";

type Item = { title: string; Icon: any };
type Props = {
  eyebrow: string;
  h2: string;
  subLine: string;
  items: Item[];
};

export function CapSolutions({ eyebrow, h2, subLine, items }: Props) {
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
    <Section variant="mist" size="default" pattern="v2" ref={ref} id="solutions" className="relative overflow-hidden border-b border-line">
      <div className="w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-12 max-w-2xl mx-auto space-y-4">
          <span className="section-eyebrow text-center">{eyebrow}</span>
          <h2 className="heading-section text-txt-strong text-center text-balance">
            {h2}
          </h2>
          <p className="section-subtitle text-txt-muted text-center max-w-[620px] mx-auto font-sans font-medium leading-relaxed">
            {subLine}
          </p>
        </div>

        {/* Grid of Solutions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-12">
          {items.map((item, idx) => {
            const Icon = item.Icon;
            return (
              <motion.div
                key={item.title}
                custom={idx}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={cardVariants as any}
                className="h-full"
              >
                <div className="card group bg-white border border-line rounded-[24px] p-6 hover:border-brand/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-start">
                  <div className="w-10 h-10 rounded-full bg-brand/5 border border-brand/10 flex items-center justify-center group-hover:bg-brand group-hover:border-brand transition-colors duration-300 mb-6 shrink-0">
                    <Icon className="w-5 h-5 text-brand group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="card-title text-txt-strong leading-snug font-sans">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
export default CapSolutions;
