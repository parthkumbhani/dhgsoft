"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FeaturedSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 25 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
  });

  return (
    <Section variant="white" size="default" pattern="v3" ref={ref} className="relative overflow-hidden border-b border-line">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column — Editorial Photo with Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative order-last lg:order-first"
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
              src="/images/capabilities/spotlight-idt.png"
              alt="DHGsoft industrial digital transformation SCADA and edge computing visualization screen"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </motion.div>

        {/* Right Column — Content */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <motion.span {...fade(0)} className="section-eyebrow">
            Featured Capability
          </motion.span>

          <motion.h2
            {...fade(0.1)}
            className="heading-section text-txt-strong text-balance"
          >
            Industrial Digital Transformation
          </motion.h2>

          <motion.p
            {...fade(0.15)}
            className="text-body-md text-brand font-semibold font-sans"
          >
            Where every capability converges into measurable transformation.
          </motion.p>

          <motion.p
            {...fade(0.22)}
            className="text-body-md text-txt-muted max-w-[560px] font-sans font-medium leading-relaxed"
          >
            Industrial Digital Transformation is where all our capabilities converge — automation, data, AI, IIoT, cloud, and cybersecurity working as a single connected platform. From strategy through commissioning through managed operations, our engineering-first approach delivers reliability, scalability, and measurable business outcomes.
          </motion.p>

          {/* Feature list */}
          <motion.div
            {...fade(0.28)}
            className="space-y-3 pt-2"
          >
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-brand" />
              </div>
              <span className="text-body-sm text-txt-strong font-sans font-semibold">
                Full lifecycle delivery — strategy to managed operations
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-brand" />
              </div>
              <span className="text-body-sm text-txt-strong font-sans font-semibold">
                Engineering-first approach with industry-domain expertise
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-brand" />
              </div>
              <span className="text-body-sm text-txt-strong font-sans font-semibold">
                Certified partnerships with leading industrial technology vendors
              </span>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div {...fade(0.34)} className="pt-4">
            <Link
              href="/capabilities/industrial-digital-transformation"
              className={cn(
                buttonVariants({ variant: "primary", size: "lg" }),
                "h-12 px-8 flex items-center justify-center gap-2 group cursor-pointer text-white font-bold rounded-xl bg-gradient-to-r from-brand to-brand-deep hover:-translate-y-[2px] transition-all duration-300 shadow-md shadow-brand/10"
              )}
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

      </div>
    </Section>
  );
}
export default FeaturedSpotlight;
