"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Section } from "@/components/ui/Section";

export function Overview() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 25 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay },
  });

  return (
    <Section variant="white" size="default" pattern="v1" ref={ref} className="relative overflow-hidden border-b border-line">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column — Content */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <motion.span {...fade(0)} className="section-eyebrow">
            Overview
          </motion.span>

          <motion.h2
            {...fade(0.1)}
            className="heading-section text-txt-strong text-balance max-w-[560px]"
          >
            Ecosystems, Not Isolated Technologies.
          </motion.h2>

          <motion.p
            {...fade(0.18)}
            className="text-body-md text-txt-muted max-w-[560px] font-sans font-medium leading-relaxed"
          >
            Industrial transformation requires more than individual technologies. It requires a connected ecosystem where automation, data, enterprise applications, and engineering expertise work together seamlessly.
          </motion.p>

          <motion.p
            {...fade(0.26)}
            className="text-body-md text-txt-muted max-w-[560px] font-sans font-medium leading-relaxed"
          >
            At DHGsoft, our capabilities span the entire digital transformation lifecycle, from consulting and solution architecture to implementation, optimization, and long-term managed services. We help organizations adopt innovative technologies while ensuring reliability, scalability, security, and measurable business outcomes.
          </motion.p>
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
              src="/images/capabilities/capabilities-overview.jpg"
              alt="DHGsoft industrial digital production line modern systems integration"
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
export default Overview;
