// src/components/about/03_ChapterWhyWeExist.tsx
import React from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";

export function ChapterWhyWeExist() {
  return (
    <Section variant="ink" size="default" pattern="none" className="relative overflow-hidden">
      {/* Two soft corner glows for dark theme decoration */}
      <div 
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ 
          background: 'radial-gradient(circle, rgba(225,29,92,0.15) 0%, transparent 70%)', 
          filter: 'blur(80px)' 
        }} 
      />
      <div 
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ 
          background: 'radial-gradient(circle, rgba(180,18,63,0.12) 0%, transparent 70%)', 
          filter: 'blur(90px)' 
        }} 
      />
      
      <div className="mx-auto w-full max-w-site px-gutter md:px-gutter-md">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-left">
          
          {/* Left column — smaller, contextual */}
          <div className="lg:col-span-4">
            <div 
              className="text-brand-hot select-none" 
              style={{
                fontSize: '160px', 
                fontWeight: 900, 
                lineHeight: 1, 
                letterSpacing: '-0.04em', 
                fontFamily: 'Georgia, serif'
              }}
            >
              02
            </div>
            <div className="text-brand-hot text-label-bold uppercase tracking-[0.25em] mt-2">
              Chapter Two
            </div>
            <div className="mt-6">
              <div className="text-white/60 font-semibold uppercase tracking-[0.15em]" style={{ fontSize: '11px' }}>
                Why We Exist
              </div>
              <div className="w-16 h-[3px] bg-brand-hot rounded-full mt-3" />
            </div>
            
            {/* Small photo */}
            <div className="mt-10 rounded-2xl overflow-hidden aspect-[4/5] ring-1 ring-white/10 relative w-full">
              <Image 
                src="/images/about/about-purpose.jpg" 
                alt="DHGsoft purpose"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 30vw"
              />
            </div>
          </div>
          
          {/* Right column — MASSIVE pull-quote */}
          <div className="lg:col-span-8 relative pt-4 lg:pt-20">
            <div 
              className="text-brand-hot font-serif pointer-events-none select-none absolute -top-4 -left-4 lg:top-8"
              style={{ fontSize: '180px', lineHeight: 0.8, opacity: 0.15, fontFamily: 'Georgia, serif' }}
            >
              &ldquo;
            </div>
            
            <div className="relative pt-6">
              <p 
                className="text-white italic font-sans" 
                style={{ 
                  fontSize: 'clamp(28px, 3.2vw, 44px)', 
                  lineHeight: 1.25, 
                  fontWeight: 400, 
                  letterSpacing: '-0.01em',
                  fontStyle: 'italic'
                }}
              >
                To transform industries through <span className="text-gradient-brand not-italic font-semibold" style={{ fontStyle: 'normal' }}>engineering intelligence</span>, connected technology, and continuous innovation — building value for tomorrow, today.
              </p>
              
              <div className="flex items-center gap-4 mt-10 pt-6 border-t border-white/15">
                <div className="w-12 h-[2px] bg-brand-hot shrink-0" />
                <div className="text-label-bold uppercase tracking-[0.25em] text-brand-hot text-xs">
                  DHGsoft Purpose
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default ChapterWhyWeExist;
