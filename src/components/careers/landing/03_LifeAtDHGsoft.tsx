"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { culturePhotos } from "@/lib/careersData";

export function LifeAtDHGsoft() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const largePhoto = culturePhotos.find((p) => p.isLarge)!;
  const smallPhotos = culturePhotos.filter((p) => !p.isLarge);

  return (
    <Section variant="mist" size="snug" pattern="none" ref={ref} className="relative overflow-hidden border-b border-line">
      {/* Subtle Contour Grid Texture */}
      <div
        className="absolute inset-0 bg-tech-grid opacity-[0.012] pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15, 23, 42, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 w-full">
        {/* Header */}
        <div className="text-left mb-12">
          <span className="section-eyebrow">Life at DHGsoft</span>
          <h2 className="heading-section text-txt-strong mt-3 font-sans font-extrabold text-3xl md:text-4xl tracking-tight">
            Our Everyday Working Dynamics
          </h2>
          <p className="section-subtitle text-txt-muted max-w-[660px] mt-4 font-sans font-medium leading-relaxed">
            Collaborate in an environment shaped by high performance, deep engineering expertise, and continuous innovation.
          </p>
        </div>

        {/* Magazine-style Mosaic Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Large Left Tile — spans 7 cols on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="md:col-span-7 relative aspect-[4/3] rounded-[24px] overflow-hidden shadow-sm border border-line bg-slate-50 group"
          >
            <Image
              src={largePhoto.src}
              alt={largePhoto.alt}
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-[1.01]"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            {/* Top brand accent border */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand/10 group-hover:bg-brand transition-colors duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-5 left-5 right-5 text-white z-10">
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#fbc00e] font-sans">
                {largePhoto.tag}
              </span>
              <p className="text-xs font-semibold mt-1 font-sans leading-relaxed">
                {largePhoto.caption}
              </p>
            </div>
          </motion.div>

          {/* Right Column Grid for small tiles — spans 5 cols on desktop */}
          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
            {smallPhotos.slice(0, 2).map((photo, i) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative aspect-square rounded-[20px] overflow-hidden shadow-sm border border-line bg-slate-50 group"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                  <p className="text-[11px] font-semibold font-sans leading-snug">
                    {photo.caption}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Spanning full width in the right column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sm:col-span-2 relative aspect-[21/9] rounded-[20px] overflow-hidden shadow-sm border border-line bg-slate-50 group"
            >
              <Image
                src={smallPhotos[2].src}
                alt={smallPhotos[2].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                <p className="text-[11px] font-semibold font-sans leading-snug">
                  {smallPhotos[2].caption}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}
export default LifeAtDHGsoft;
