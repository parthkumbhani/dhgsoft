"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Section } from "@/components/ui/Section";

export function LearningDevelopment() {
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column — Editorial Story */}
        <div className="lg:col-span-6 space-y-6">
          <span className="section-eyebrow">Professional Growth</span>
          
          <h2 className="heading-section text-txt-strong mt-3 font-sans font-extrabold text-3xl md:text-4xl tracking-tight leading-tight text-balance">
            Continuous Learning &amp; Mentorship
          </h2>
          
          <p className="text-body-md text-txt-muted max-w-[520px] font-sans font-medium leading-relaxed">
            The acceleration of smart manufacturing systems and cloud technologies requires continuous skill progression. We partner directly with leading industrial and software platforms to certify our engineering groups in core disciplines.
          </p>

          <p className="text-body-md text-txt-muted max-w-[520px] font-sans font-medium leading-relaxed">
            From formal technical training workshops and mentoring pathways with senior architects to certifications in process integration and cybersecurity, we ensure our professionals maintain deep domain expertise.
          </p>

          <div className="pt-6 border-t border-line mt-6 flex flex-wrap gap-x-12 gap-y-4">
            <div>
              <div className="text-2xl font-extrabold text-brand font-sans">100%</div>
              <div className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mt-1 font-sans">
                Certification Support
              </div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-brand font-sans">1-on-1</div>
              <div className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mt-1 font-sans">
                Technical Mentorship
              </div>
            </div>
          </div>
        </div>

        {/* Right Column — Large high-quality real workplace photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6"
        >
          <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden shadow-sm border border-line bg-slate-50">
            <Image
              src="/images/careers/culture/training.jpg"
              alt="DHGsoft technical training and mentoring seminar"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </motion.div>

      </div>
    </Section>
  );
}
export default LearningDevelopment;
