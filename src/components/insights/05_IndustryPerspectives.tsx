"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { industries } from "@/lib/insightsData";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function IndustryPerspectives() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 25 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay },
  });

  return (
    <Section variant="white" size="default" pattern="v4" ref={ref} className="relative overflow-hidden border-b border-line text-left">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          
          {/* Left Column — Editorial Photo */}
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
                src="/about_global.png" // Mapping to existing premium photo
                alt="DHGsoft industry expertise across sectors"
                fill
                className="object-cover"
                sizes="(min-width:1024px) 40vw, 100vw"
              />
            </div>
          </motion.div>
          
          {/* Right Column — Content + Chips */}
          <div className="lg:col-span-7 space-y-6">
            <motion.span {...fade(0)} className="section-eyebrow">
              Industry Perspectives
            </motion.span>
            <motion.h2 {...fade(0.1)} className="heading-section text-txt-strong text-balance max-w-[520px]">
              Every industry faces unique operational challenges.
            </motion.h2>
            <motion.p {...fade(0.16)} className="text-body-md text-txt-muted max-w-[540px] font-sans font-medium leading-relaxed">
              Our engineering experts share insights tailored to manufacturing, automotive, life sciences, semiconductor, food & beverage, chemical processing, utilities, oil & gas, mining, water management, and infrastructure sectors.
            </motion.p>
            
            {/* 11 Industry Chips */}
            <motion.div {...fade(0.24)} className="flex flex-wrap gap-2 pt-2">
              {industries.map((ind) => (
                <Link 
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="text-body-sm text-txt-strong bg-white border border-line rounded-full px-4 py-2 hover:border-brand/40 hover:text-brand hover:bg-brand/5 transition-colors font-sans font-semibold shadow-xs"
                >
                  {ind.name}
                </Link>
              ))}
            </motion.div>
            
            <motion.div {...fade(0.3)} className="pt-4">
              <Link 
                href="/industries"
                className={cn(
                  buttonVariants({ variant: "primary", size: "lg" }),
                  "h-12 px-8 flex items-center justify-center gap-2 group cursor-pointer text-white font-bold rounded-xl bg-gradient-to-r from-brand to-brand-deep hover:-translate-y-[2px] transition-all duration-300 shadow-md shadow-brand/10 w-fit"
                )}
              >
                <span>Browse All Industries</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
export default IndustryPerspectives;
