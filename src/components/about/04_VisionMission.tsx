// src/components/about/04_VisionMission.tsx
import React from "react";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { missionItems } from "@/lib/aboutData";

export function VisionMission() {
  return (
    <Section variant="white" size="default" pattern="v3">
        
        {/* Left column marker (compact) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 text-left">
          <div className="lg:col-span-4 relative">
            <div 
              className="text-brand select-none" 
              style={{
                fontSize: '160px', 
                fontWeight: 900, 
                lineHeight: 1, 
                letterSpacing: '-0.04em', 
                fontFamily: 'Georgia, serif'
              }}
            >
              03
            </div>
            <div className="text-brand text-label-bold uppercase tracking-[0.25em] mt-2">
              Chapter Three
            </div>
          </div>
          
          {/* Right — VISION as big statement */}
          <div className="lg:col-span-8 pt-4 lg:pt-8">
            <div className="text-brand text-label-bold uppercase tracking-[0.2em] text-xs">
              Our Vision
            </div>
            <h2 
              className="text-txt-strong mt-4 font-sans" 
              style={{
                fontSize: 'clamp(32px, 4vw, 52px)', 
                lineHeight: 1.15, 
                letterSpacing: '-0.02em', 
                fontWeight: 800
              }}
            >
              To become a <span className="text-gradient-brand">globally trusted industrial technology partner</span> enabling intelligent, connected, and sustainable manufacturing ecosystems.
            </h2>
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-line/60 my-12" />
        
        {/* MISSION — inline cards (not a grid) */}
        <div className="text-left">
          <div className="text-brand text-label-bold uppercase tracking-[0.2em] text-xs">
            Our Mission
          </div>
          <h3 className="text-txt-strong mt-3 font-sans font-extrabold text-xl md:text-2xl">
            Five commitments that define how we deliver.
          </h3>
          
          {/* Inline horizontal list — each mission a card that reads left-to-right */}
          <div className="mt-10 space-y-3">
            {missionItems.map((item, i) => (
              <div 
                key={item} 
                className="card flex items-center gap-6 bg-mist border border-line rounded-2xl p-5 hover:border-brand hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group cursor-default"
              >
                <div 
                  className="text-brand/35 leading-none flex-shrink-0 select-none" 
                  style={{
                    fontSize: '48px', 
                    fontWeight: 705, 
                    letterSpacing: '-0.02em', 
                    fontFamily: 'Georgia, serif'
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div 
                  className="flex-1 text-txt-strong font-sans" 
                  style={{
                    fontSize: '17px', 
                    lineHeight: 1.5, 
                    fontWeight: 700
                  }}
                >
                  {item}
                </div>
                <ArrowRight className="w-5 h-5 text-brand opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </Section>
  );
}

export default VisionMission;
