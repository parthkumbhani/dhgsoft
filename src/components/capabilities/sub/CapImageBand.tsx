"use client";

import React from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";

type Props = { 
  image: string; 
  imageAlt: string;
  caption?: string;
  captionEyebrow?: string;
};

export function CapImageBand({ image, imageAlt, caption, captionEyebrow }: Props) {
  return (
    <Section variant="white" size="compact" pattern="v3" className="relative overflow-hidden border-b border-line">
      <div className="w-full relative z-10">
        <div className="relative rounded-[24px] overflow-hidden shadow-xl border border-line aspect-[21/9] bg-slate-900 select-none">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover opacity-80"
            sizes="100vw"
          />
          {/* Ambient vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10" />
          
          {caption && (
            <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 max-w-[640px] z-20 text-left">
              {captionEyebrow && (
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-hot font-sans block mb-2">
                  {captionEyebrow}
                </span>
              )}
              <p className="text-white font-extrabold text-lg sm:text-xl md:text-2xl leading-snug tracking-tight font-sans">
                {caption}
              </p>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
export default CapImageBand;
