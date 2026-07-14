"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { categories } from "@/lib/insightsData";

const categoryImages: Record<string, string> = {
  "industrial-automation": "/about_hero_cinematic.png",
  "ot-it-integration": "/about_hero.png",
  "iiot": "/energy_visual.png",
  "ai-analytics": "/about_engineering.png",
  "digital-engineering": "/about_collaboration.png",
  "enterprise-applications": "/about_values.png",
  "cloud-infrastructure": "/office_blur.png",
  "cybersecurity": "/about_global.png"
};

const getCategoryHref = (slug: string) => {
  const map: Record<string, string> = {
    "industrial-automation": "/insights/ai-and-automation",
    "ot-it-integration": "/insights/technology-ecosystem",
    "iiot": "/insights/technology-ecosystem",
    "ai-analytics": "/insights/ai-and-automation",
    "cloud-infrastructure": "/insights/technology-ecosystem",
    "cybersecurity": "/insights/technology-ecosystem",
  };
  return map[slug] || "/insights";
};

export function CategoryGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.05, ease: "easeOut" }
    })
  };

  return (
    <Section variant="mist" size="default" pattern="v2" ref={ref} id="categories" className="scroll-mt-20 relative overflow-hidden border-b border-line">
      <Container>
        {/* Header centered */}
        <div className="text-center max-w-[720px] mx-auto space-y-4">
          <span className="section-eyebrow text-center">Categories</span>
          <h2 className="heading-section text-txt-strong text-center text-balance">Explore by Topic</h2>
          <p className="section-subtitle text-txt-muted text-center max-w-[620px] mx-auto font-sans font-medium leading-relaxed">
            Every industrial insight is grounded in a specific area of technical or operational expertise.
          </p>
        </div>
        
        {/* 8 category cards with photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {categories.map((cat, idx) => {
            const Icon = cat.Icon;
            const img = categoryImages[cat.slug] || "/about_hero.png";
            return (
              <motion.div
                key={cat.slug}
                custom={idx}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={cardVariants as any}
                className="h-full"
              >
                <Link 
                  href={getCategoryHref(cat.slug)}
                  className="card group bg-white border border-line rounded-[24px] overflow-hidden hover:border-brand/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full"
                >
                  {/* Thumbnail photo — top of card */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-50 shrink-0">
                    <Image 
                      src={img} 
                      alt={cat.title}
                      fill 
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 z-20">
                      <div className="w-9 h-9 rounded-full bg-white/95 flex items-center justify-center shadow-sm">
                        <Icon className="w-4 h-4 text-brand" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div className="space-y-2">
                      <h3 className="card-title text-txt-strong leading-snug font-sans">
                        {cat.title}
                      </h3>
                      <p className="text-body-sm text-txt-muted font-sans font-medium leading-relaxed line-clamp-3">
                        {cat.body}
                      </p>
                    </div>
                    
                    <div className="inline-flex items-center gap-1.5 mt-5 text-brand text-xs font-bold font-sans uppercase tracking-wider group-hover:text-brand-deep transition-colors shrink-0">
                      <span>Read insights</span>
                      <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
export default CategoryGrid;
