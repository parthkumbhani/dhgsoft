"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FeaturedSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 25 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay },
  });

  return (
    <Section variant="mist" size="default" pattern="v5" ref={ref} className="relative overflow-hidden border-b border-line text-left">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          
          {/* Left Column — Content */}
          <div className="lg:col-span-7 space-y-6">
            <motion.span {...fade(0)} className="section-eyebrow">
              Featured Insight
            </motion.span>
            
            <motion.h2 {...fade(0.1)} className="heading-section text-txt-strong text-balance max-w-[560px]">
              Building the Connected Industrial Enterprise
            </motion.h2>
            
            <motion.p {...fade(0.14)} className="text-body-md text-brand font-bold font-sans">
              Where every capability converges into measurable transformation.
            </motion.p>
            
            <motion.p {...fade(0.18)} className="text-body-md text-txt-muted max-w-[540px] font-sans font-medium leading-relaxed">
              Industrial transformation is no longer about individual technologies — it&apos;s about connected ecosystems where automation, IIoT, AI, cloud, and cybersecurity work together as one platform. Our engineering-first perspective on what it takes to build that ecosystem.
            </motion.p>
            
            {/* Feature List */}
            <motion.div {...fade(0.24)} className="space-y-3 pt-2">
              {[
                'Ecosystem-thinking over point solutions',
                'Engineering-first architecture and delivery',
                'Long-term value from connected operations',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-body-md text-txt-strong font-sans font-semibold leading-none">{item}</span>
                </div>
              ))}
            </motion.div>
            
            <motion.div {...fade(0.3)} className="pt-4">
              <Link 
                href="/insights/technology-ecosystem"
                className={cn(
                  buttonVariants({ variant: "primary", size: "lg" }),
                  "h-12 px-8 flex items-center justify-center gap-2 group cursor-pointer text-white font-bold rounded-xl bg-gradient-to-r from-brand to-brand-deep hover:-translate-y-[2px] transition-all duration-300 shadow-md shadow-brand/10 w-fit"
                )}
              >
                <span>Read the Perspective</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
          
          {/* Right Column — Editorial Photo */}
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
                src="/smart_factory_visual.png" // Mapping to existing premium photo
                alt="Connected industrial enterprise architecture"
                fill
                className="object-cover"
                sizes="(min-width:1024px) 45vw, 100vw"
              />
            </div>
          </motion.div>
          
        </div>
      </Container>
    </Section>
  );
}
export default FeaturedSpotlight;
