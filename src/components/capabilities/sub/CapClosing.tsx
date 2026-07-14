"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section } from "@/components/ui/Section";

type Props = { text: string };

export function CapClosing({ text }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <Section variant="mist" size="compact" pattern="v8" ref={ref} className="relative overflow-hidden border-b border-line">
      <div className="relative z-10 max-w-[800px] mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-txt-strong italic font-sans font-semibold leading-relaxed text-lg sm:text-xl md:text-2xl"
        >
          &ldquo;{text}&rdquo;
        </motion.p>
      </div>
    </Section>
  );
}
export default CapClosing;
