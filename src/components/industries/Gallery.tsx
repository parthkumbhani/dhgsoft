// src/components/industries/Gallery.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IndustryImage } from "@/lib/industries";

interface GalleryProps {
  images: IndustryImage[];
}

export default function Gallery({ images }: GalleryProps) {
  if (!images || images.length === 0) return null;

  // Let's create a premium layout based on the number of images.
  // We assume 3 to 4 images.
  return (
    <section className="bg-white py-24 border-b border-line relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-12">
        <div className="text-left max-w-xl space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
            IN FOCUS
          </span>
          <h3 className="text-3xl sm:text-4xl font-black text-text-strong tracking-tight leading-tight">
            Operational Excellence in Detail
          </h3>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            Real environments showing the physical assets, operations control systems, and processes engineered for maximum performance.
          </p>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[240px] md:auto-rows-[280px]">
          {images.map((img, idx) => {
            // Layout styling for 4 items to form a beautiful asymmetric mosaic
            // Item 0: big highlight (spans 6 cols, 2 rows)
            // Item 1: right top (spans 6 cols, 1 row)
            // Item 2: right bottom-left (spans 3 cols, 1 row)
            // Item 3: right bottom-right (spans 3 cols, 1 row)
            let colSpan = "md:col-span-6";
            let rowSpan = "row-span-1";
            
            if (idx === 0) {
              colSpan = "md:col-span-6 lg:col-span-7";
              rowSpan = "row-span-2";
            } else if (idx === 1) {
              colSpan = "md:col-span-6 lg:col-span-5";
              rowSpan = "row-span-1";
            } else if (idx === 2) {
              colSpan = "md:col-span-3 lg:col-span-2";
              rowSpan = "row-span-1";
            } else if (idx === 3) {
              colSpan = "md:col-span-3 lg:col-span-3";
              rowSpan = "row-span-1";
            }

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative rounded-3xl overflow-hidden group border border-line ${colSpan} ${rowSpan}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Immersive overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex flex-col justify-end p-6" />
                
                {/* Caption readout on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-left opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-10">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-hot font-mono block mb-1">
                    CAPTURED REALITY
                  </span>
                  <p className="text-white font-semibold text-sm leading-snug">
                    {img.alt}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
