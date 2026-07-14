"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export function NewsUpdates() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <Section variant="white" size="default" pattern="v6" ref={ref} className="relative overflow-hidden border-b border-line text-left">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* News & Updates Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="card relative overflow-hidden rounded-[24px] min-h-[360px] group border border-line"
          >
            <Image 
              src="/about_values.png" // Mapping to existing premium photo
              alt="DHGsoft news and announcements"
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent z-10" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
              <span className="text-brand-hot text-[10px] font-extrabold uppercase tracking-widest block mb-2 font-sans">
                News & Updates
              </span>
              <h3 className="text-white font-extrabold text-xl sm:text-2xl leading-tight font-sans">
                Latest from DHGsoft
              </h3>
              <p className="text-body-sm text-white/80 mt-3 max-w-[420px] font-sans font-medium leading-relaxed">
                Stay informed about DHGsoft&apos;s latest announcements, partnerships, technology initiatives, engineering achievements, product innovations, and company developments.
              </p>
              <a 
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-xl bg-white text-brand font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all w-fit cursor-pointer text-xs uppercase tracking-wider font-sans"
              >
                <span>Follow on LinkedIn</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
          
          {/* Resource Library Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="card relative overflow-hidden rounded-[24px] min-h-[360px] group border border-line"
          >
            <Image 
              src="/about_global.png" // Mapping to existing premium photo
              alt="DHGsoft resource library"
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent z-10" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
              <span className="text-brand-hot text-[10px] font-extrabold uppercase tracking-widest block mb-2 font-sans">
                Resource Library
              </span>
              <h3 className="text-white font-extrabold text-xl sm:text-2xl leading-tight font-sans">
                A Growing Knowledge Base
              </h3>
              <p className="text-body-sm text-white/80 mt-3 max-w-[420px] font-sans font-medium leading-relaxed">
                Explore a growing collection of technical guides, implementation frameworks, engineering documents, webinars, presentations, and educational resources designed to support your digital transformation journey.
              </p>
              <Link 
                href="#newsletter"
                className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-xl bg-white text-brand font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all w-fit cursor-pointer text-xs uppercase tracking-wider font-sans"
              >
                <span>Browse Library</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
          
        </div>
      </Container>
    </Section>
  );
}
export default NewsUpdates;
