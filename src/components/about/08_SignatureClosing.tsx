// src/components/about/08_SignatureClosing.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ContactModal from "@/components/ContactModal";

export function SignatureClosing() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section className="relative min-h-[70vh] overflow-hidden flex items-center py-20 text-left">
      {/* Full-bleed dramatic photo */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/about/about-closing.jpg" 
          alt="DHGsoft engineering the future"
          fill 
          className="object-cover"
          sizes="100vw"
        />
        {/* Deep dark overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-ink/95 via-ink/75 to-ink/90" />
        {/* Subtle crimson wash */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/30 via-transparent to-transparent" />
      </div>
      
      <div className="mx-auto w-full max-w-site px-gutter md:px-gutter-md relative z-10">
        <div className="max-w-[900px]">
          <div className="text-brand-hot text-label-bold uppercase tracking-[0.3em] text-xs">
            Signature
          </div>
          
          <h2 
            className="text-white mt-6 font-sans" 
            style={{
              fontSize: 'clamp(40px, 5.5vw, 72px)', 
              fontWeight: 800, 
              letterSpacing: '-0.02em', 
              lineHeight: 1.05
            }}
          >
            Building Value<br/>
            <span className="text-gradient-brand italic" style={{ fontStyle: 'italic' }}>for Tomorrow.</span>
          </h2>
          
          <p className="text-white/80 mt-8 max-w-[560px] leading-relaxed font-sans font-medium" style={{ fontSize: '18px' }}>
            Whether you're modernizing a plant, connecting operations to the cloud, or reimagining a factory floor — DHGsoft is your engineering-first partner from concept to commissioning.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-10">
            <button 
              onClick={() => setIsContactOpen(true)}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-brand font-sans font-bold hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 cursor-pointer text-sm"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link 
              href="/capabilities"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/40 text-white font-sans font-bold hover:bg-white/10 transition-all duration-300 text-sm hover:-translate-y-0.5"
            >
              Explore Capabilities
            </Link>
          </div>
          
          {/* Handwritten-style signature bottom */}
          <div className="mt-14 pt-8 border-t border-white/20 flex items-center gap-4">
            <div className="w-12 h-[2px] bg-brand-hot shrink-0" />
            <div>
              <div className="text-brand-hot text-label-bold uppercase tracking-[0.25em]" style={{ fontSize: '11px' }}>
                DHGsoft
              </div>
              <div className="text-white/85 mt-1 text-xs font-sans font-medium">
                Engineering Intelligent Industrial Enterprises
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact modal popup */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
        showToast={() => {}}
      />
    </section>
  );
}

export default SignatureClosing;
