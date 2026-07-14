// src/components/about/05_ValuesManifesto.tsx
import React from "react";
import { Section } from "@/components/ui/Section";
import { values } from "@/lib/aboutData";

export function ValuesManifesto() {
  return (
    <Section variant="mist" size="default" pattern="v6">
      <div className="mx-auto w-full max-w-site px-gutter md:px-gutter-md">
        <div className="max-w-[1100px] mx-auto">
          
          {/* Chapter marker */}
          <div className="text-center mb-16">
            <div 
              className="text-brand inline-block select-none" 
              style={{
                fontSize: '160px', 
                fontWeight: 900, 
                lineHeight: 1, 
                letterSpacing: '-0.04em', 
                fontFamily: 'Georgia, serif'
              }}
            >
              04
            </div>
            <div className="text-brand text-label-bold uppercase tracking-[0.25em] mt-2">
              Chapter Four — Values Manifesto
            </div>
            <div className="w-16 h-[3px] bg-brand rounded-full mt-6 mx-auto" />
          </div>
          
          {/* Values as bold typography wall */}
          <div className="text-center space-y-6">
            {values.map((value) => (
              <div key={value.name} className="group cursor-default block">
                <h3 
                  className="text-txt-strong group-hover:text-brand transition-colors duration-300 font-sans"
                  style={{
                    fontSize: 'clamp(32px, 4.5vw, 68px)',
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.05,
                  }}
                >
                  {value.name}
                  <span className="text-brand/30 mx-3 select-none" style={{ fontStyle: 'italic', fontFamily: 'Georgia, serif' }}>·</span>
                  <span className="text-brand-hot italic font-serif" style={{ fontStyle: 'italic', fontFamily: 'Georgia, serif' }}>{value.italic}</span>
                </h3>
                
                {/* Micro-description below (always visible on mobile, hover-focused transition on desktop) */}
                <p className="text-xs text-txt-muted max-w-[560px] mx-auto mt-2.5 opacity-75 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-sans font-semibold leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Signature line at bottom */}
          <div className="flex items-center justify-center gap-4 mt-16 pt-8 border-t border-line">
            <div className="w-12 h-[2px] bg-brand shrink-0" />
            <div className="text-label-bold uppercase tracking-[0.25em] text-brand text-xs">
              Six Values. One Standard.
            </div>
            <div className="w-12 h-[2px] bg-brand shrink-0" />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default ValuesManifesto;
