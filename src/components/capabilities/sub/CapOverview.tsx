"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Section } from "@/components/ui/Section";

type Props = {
  eyebrow: string;
  h2: string;
  bodyParagraphs: string[];
  image: string;
  imageAlt: string;
};

export function CapOverview({ eyebrow, h2, bodyParagraphs, image, imageAlt }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 25 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
  });

  return (
    <Section variant="white" size="default" pattern="v1" ref={ref} className="relative overflow-hidden border-b border-line text-left">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column — Content */}
        <div className="lg:col-span-7 space-y-6">
          <motion.span {...fade(0)} className="section-eyebrow">
            {eyebrow}
          </motion.span>

          <motion.h2
            {...fade(0.1)}
            className="heading-section text-txt-strong text-balance max-w-[560px]"
          >
            {h2}
          </motion.h2>

          {bodyParagraphs.map((p, i) => (
            <motion.p
              key={i}
              {...fade(0.18 + i * 0.08)}
              className="text-body-md text-txt-muted max-w-[560px] font-sans font-medium leading-relaxed"
            >
              {p}
            </motion.p>
          ))}
        </div>

        {/* Right Column — Editorial Photo with Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative"
        >
          <div 
            className="absolute -inset-4 rounded-3xl pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(180,18,63,0.15) 0%, rgba(225,29,92,0.08) 50%, transparent 100%)',
              filter: 'blur(24px)',
            }}
          />
          <div className="relative rounded-[24px] overflow-hidden shadow-xl border border-line aspect-[4/5] bg-slate-50">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </motion.div>

      </div>
    </Section>
  );
}
export default CapOverview;
