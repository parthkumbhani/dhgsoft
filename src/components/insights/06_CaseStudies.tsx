"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export function CaseStudies() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 25 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay },
  });

  return (
    <Section variant="white" size="default" pattern="v7" ref={ref} className="relative overflow-hidden border-b border-line text-left">
      <Container>
        <div className="text-center max-w-[720px] mx-auto space-y-4">
          <motion.span {...fade(0)} className="section-eyebrow text-center">
            Deep Dives
          </motion.span>
          <motion.h2 {...fade(0.08)} className="heading-section text-txt-strong text-center text-balance">
            Practical Knowledge, Documented
          </motion.h2>
          <motion.p {...fade(0.16)} className="section-subtitle text-txt-muted text-center max-w-[620px] mx-auto font-sans font-medium leading-relaxed">
            Case studies and whitepapers built for engineers, transformation leaders, and operational decision-makers.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          
          {/* Case Studies Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="card relative overflow-hidden rounded-[24px] min-h-[360px] group border border-line"
          >
            <Image 
              src="/about_collaboration.png" // Mapping to existing premium photo
              alt="DHGsoft case studies"
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent z-10" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
              <span className="text-brand-hot text-[10px] font-extrabold uppercase tracking-widest block mb-2 font-sans">
                Case Studies
              </span>
              <h3 className="text-white font-extrabold text-xl sm:text-2xl leading-tight font-sans">
                Real Challenges. Proven Solutions.
              </h3>
              <p className="text-body-sm text-white/80 mt-3 max-w-[420px] font-sans font-medium leading-relaxed">
                See how organizations solve complex engineering challenges through intelligent automation, industrial connectivity, digital platforms, and operational intelligence.
              </p>
              <Link 
                href="/insights/case-studies"
                className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-xl bg-white text-brand font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all w-fit cursor-pointer text-xs uppercase tracking-wider font-sans"
              >
                <span>Explore Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
          
          {/* Whitepapers Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="card relative overflow-hidden rounded-[24px] min-h-[360px] group border border-line"
          >
            <Image 
              src="/about_engineering.png" // Mapping to existing premium photo
              alt="DHGsoft whitepapers"
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent z-10" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
              <span className="text-brand-hot text-[10px] font-extrabold uppercase tracking-widest block mb-2 font-sans">
                Whitepapers
              </span>
              <h3 className="text-white font-extrabold text-xl sm:text-2xl leading-tight font-sans">
                In-Depth Technical Resources
              </h3>
              <p className="text-body-sm text-white/80 mt-3 max-w-[420px] font-sans font-medium leading-relaxed">
                Access in-depth technical resources covering industrial architecture, digital transformation strategies, emerging technologies, cybersecurity frameworks, and engineering best practices.
              </p>
              <Link 
                href="#newsletter"
                className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-xl bg-white text-brand font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all w-fit cursor-pointer text-xs uppercase tracking-wider font-sans"
              >
                <span>Request Access</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
          
        </div>
      </Container>
    </Section>
  );
}
export default CaseStudies;
