// src/components/about/01_EditorialCover.tsx
import React from "react";
import Image from "next/image";

export function EditorialCover() {
  return (
    <section className="relative min-h-[95vh] bg-mist overflow-hidden pt-20">
      {/* Subtle warm marble texture background */}
      <div 
        className="absolute inset-0" 
        style={{ background: 'linear-gradient(135deg, #ffffff 0%, #F4F5F7 40%, #EAEBEE 100%)' }} 
      />
      
      {/* Small photo panel — top-right, NOT full bleed */}
      <div className="absolute top-0 right-0 w-[45%] h-[70%] hidden lg:block">
        <div className="relative w-full h-full rounded-bl-[80px] overflow-hidden">
          <Image 
            src="/images/about/about-cover.jpg" 
            alt="DHGsoft engineering team"
            fill 
            className="object-cover"
            priority
          />
          {/* Warm crimson gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand/20 via-transparent to-brand-deep/40" />
        </div>
      </div>
      
      {/* MASSIVE VOLUME NUMBER — decorative, editorial */}
      <div 
        className="absolute top-8 left-8 md:top-12 md:left-16 text-brand/15 pointer-events-none select-none" 
        style={{
          fontSize: '220px', 
          fontWeight: 900, 
          lineHeight: 0.9, 
          letterSpacing: '-0.05em', 
          fontFamily: 'Georgia, serif'
        }}
      >
        01
      </div>
      
      <div className="absolute top-16 left-40 md:top-28 md:left-64 text-brand text-label-bold uppercase tracking-[0.3em] pointer-events-none">
        VOL. 01 — WHO WE ARE
      </div>
      
      {/* Main content — bottom-left */}
      <div className="absolute bottom-16 md:bottom-24 left-6 md:left-16 right-6 md:right-16 max-w-[800px] z-10 text-left">
        <div className="text-brand text-label-bold uppercase tracking-[0.3em]">
          About DHGsoft
        </div>
        
        {/* Giant editorial headline */}
        <h1 
          className="text-txt-strong mt-4" 
          style={{
            fontSize: 'clamp(48px, 7vw, 88px)', 
            fontWeight: 800, 
            letterSpacing: '-0.03em', 
            lineHeight: 0.95
          }}
        >
          Engineering<br/>
          Intelligent<br/>
          <span className="text-gradient-brand italic" style={{ fontStyle: 'italic' }}>Industrial Enterprises.</span>
        </h1>
        
        {/* Byline strip */}
        <div className="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-line max-w-[600px]">
          <div>
            <div className="text-label-bold uppercase tracking-[0.15em] text-txt-muted" style={{ fontSize: '10px' }}>Founded</div>
            <div className="text-txt-strong font-semibold mt-1 text-sm">Ahmedabad · Pune</div>
          </div>
          <div className="w-px h-10 bg-line" />
          <div>
            <div className="text-label-bold uppercase tracking-[0.15em] text-txt-muted" style={{ fontSize: '10px' }}>Focus</div>
            <div className="text-txt-strong font-semibold mt-1 text-sm">Industrial Digital Transformation</div>
          </div>
          <div className="w-px h-10 bg-line" />
          <div>
            <div className="text-label-bold uppercase tracking-[0.15em] text-txt-muted" style={{ fontSize: '10px' }}>Mission</div>
            <div className="text-txt-strong font-semibold mt-1 text-sm">Building Value for Tomorrow</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditorialCover;
