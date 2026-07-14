"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { culturePhotos } from "@/lib/careersData";

export function TeamCulture() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const largePhoto = culturePhotos.find((p) => p.isLarge)!;
  const smallPhotos = culturePhotos.filter((p) => !p.isLarge);

  return (
    <Section variant="white" size="snug" pattern="none" ref={ref} className="relative overflow-hidden border-b border-line">
      {/* Subtle light accent background blur */}
      <div
        className="absolute top-1/3 right-10 w-[300px] h-[300px] rounded-full pointer-events-none opacity-[0.04] filter blur-[80px] z-0"
        style={{
          background: "radial-gradient(circle, #fbc00e 0%, transparent 70%)",
        }}
      />

      {/* Header */}
      <div className="text-center mb-12 relative z-10">
        <span className="section-eyebrow tracking-[0.25em]">INSIDE DHGSOFT</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-txt-strong mt-3 font-sans tracking-tight">
          Meet the Culture Behind the Work
        </h2>
        <p className="text-txt-muted text-sm max-w-[660px] mx-auto mt-4 font-sans font-medium leading-relaxed">
          A glimpse of DHGsoft — the people, projects, and moments that define how we work together.
        </p>
      </div>

      {/* Asymmetric photo grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 relative z-10">
        {/* Large tile — spans 2 cols & 2 rows */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.65 }}
          className="relative col-span-2 row-span-2 aspect-[4/3] p-[1px] rounded-[32px] bg-gradient-to-br from-line via-transparent to-brand/15 shadow-xl overflow-hidden group"
        >
          <div className="relative w-full h-full rounded-[31px] overflow-hidden bg-slate-100">
            <Image
              src={largePhoto.src}
              alt={largePhoto.alt}
              fill
              className="object-cover group-hover:scale-103 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#E10088] font-sans">
                {largePhoto.tag}
              </div>
              <div className="text-body-sm font-semibold text-white mt-1.5 font-sans leading-relaxed">
                {largePhoto.caption}
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3 smaller tiles */}
        {smallPhotos.map((photo, i) => (
          <motion.div
            key={photo.src}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
            transition={{ duration: 0.55, delay: 0.12 + i * 0.1 }}
            className="relative aspect-square p-[1px] rounded-2xl bg-gradient-to-br from-line via-transparent to-brand/15 shadow-md overflow-hidden group"
          >
            <div className="relative w-full h-full rounded-[15px] overflow-hidden bg-slate-100">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-103 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <div className="text-xs font-semibold text-white font-sans leading-snug">
                  {photo.caption}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
export default TeamCulture;
