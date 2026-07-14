"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section } from "@/components/ui/Section";

export function ClosingStatement() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay },
  });

  return (
    <Section variant="mist" size="default" pattern="v8" ref={ref} className="relative overflow-hidden border-b border-line">
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center space-y-6">
        <motion.span {...fade(0)} className="section-eyebrow text-center">
          Closing Statement
        </motion.span>

        <motion.h2
          {...fade(0.1)}
          className="heading-section text-txt-strong text-center text-balance"
        >
          Building Capabilities That Create Lasting Value
        </motion.h2>

        <motion.p
          {...fade(0.18)}
          className="text-body-md text-txt-muted text-center font-sans font-medium leading-relaxed"
        >
          Technology continues to evolve, but successful transformation depends on strong engineering foundations, intelligent integration, and trusted partnerships.
        </motion.p>

        <motion.p
          {...fade(0.26)}
          className="text-body-md text-txt-muted text-center font-sans font-medium leading-relaxed"
        >
          DHGsoft delivers the capabilities organizations need to innovate with confidence, operate efficiently, and prepare for the future of connected industries.
        </motion.p>
      </div>
    </Section>
  );
}
export default ClosingStatement;
