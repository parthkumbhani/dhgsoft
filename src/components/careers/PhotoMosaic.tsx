// src/components/careers/PhotoMosaic.tsx
"use client";

import React from "react";
import Image from "next/image";
import { careersImages } from "@/lib/images/careersImages";

export default function PhotoMosaic() {
  const images = careersImages.mosaic;

  return (
    <section className="bg-white py-16 md:py-24 border-b border-line relative overflow-hidden bg-tech-grid select-none">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-12">
        <div className="text-left max-w-xl space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B4123F] font-mono block">
            LIFE IN PICTURES
          </span>
          <h2 className="text-3xl font-black text-text-strong tracking-tight">
            Our Collaboration Spaces
          </h2>
          <p className="text-text-muted text-sm leading-relaxed">
            Take a look inside our digital twins labs, systems rooms, and agile spaces where our engineers design global industrial operations.
          </p>
        </div>

        {/* Masonry-like Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 min-h-[600px]">
          {/* Card 1: Large left */}
          <div className="md:col-span-8 relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-sm group border border-line">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white text-xs font-bold font-mono tracking-wide">{images[0].alt}</span>
            </div>
          </div>

          {/* Card 2: Small right */}
          <div className="md:col-span-4 relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-sm group border border-line">
            <Image
              src={images[1].src}
              alt={images[1].alt}
              fill
              className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white text-xs font-bold font-mono tracking-wide">{images[1].alt}</span>
            </div>
          </div>

          {/* Card 3: Small left */}
          <div className="md:col-span-4 relative h-[300px] md:h-[350px] rounded-3xl overflow-hidden shadow-sm group border border-line">
            <Image
              src={images[2].src}
              alt={images[2].alt}
              fill
              className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white text-xs font-bold font-mono tracking-wide">{images[2].alt}</span>
            </div>
          </div>

          {/* Card 4: Small middle */}
          <div className="md:col-span-4 relative h-[300px] md:h-[350px] rounded-3xl overflow-hidden shadow-sm group border border-line">
            <Image
              src={images[3].src}
              alt={images[3].alt}
              fill
              className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white text-xs font-bold font-mono tracking-wide">{images[3].alt}</span>
            </div>
          </div>

          {/* Card 5: Small right */}
          <div className="md:col-span-4 relative h-[300px] md:h-[350px] rounded-3xl overflow-hidden shadow-sm group border border-line">
            <Image
              src={images[4].src}
              alt={images[4].alt}
              fill
              className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white text-xs font-bold font-mono tracking-wide">{images[4].alt}</span>
            </div>
          </div>

          {/* Card 6: Large bottom */}
          <div className="md:col-span-12 relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-sm group border border-line">
            <Image
              src={images[5].src}
              alt={images[5].alt}
              fill
              className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white text-xs font-bold font-mono tracking-wide">{images[5].alt}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
