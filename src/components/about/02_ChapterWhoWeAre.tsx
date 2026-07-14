// src/components/about/02_ChapterWhoWeAre.tsx
import React from "react";
import { Section } from "@/components/ui/Section";

export function ChapterWhoWeAre() {
  const expertiseItems = [
    'Industrial Automation & Digitalization',
    'AI-Based Operational Intelligence',
    'Smart Manufacturing & Industry 4.0',
    'Electrical & Instrumentation Engineering',
    'Industrial Networking & IIoT',
    'EPC & Project Execution',
    'End-to-End Plant Integration',
    'Industrial Product Supply & Services',
  ];

  return (
    <Section variant="white" size="default" pattern="v1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start text-left">
          
          {/* Left column — HUGE numbered marker */}
          <div className="lg:col-span-3 relative">
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
              01
            </div>
            <div className="text-brand text-label-bold uppercase tracking-[0.25em] mt-2">
              Chapter One
            </div>
            <div className="mt-6">
              <div className="text-txt-muted font-semibold uppercase tracking-[0.15em]" style={{ fontSize: '11px' }}>
                Who We Are
              </div>
              <div className="w-16 h-[3px] bg-brand rounded-full mt-3" />
            </div>
          </div>
          
          {/* Right column — content */}
          <div className="lg:col-span-9 pt-4 lg:pt-8">
            <h2 className="text-txt-strong max-w-[720px] font-sans font-extrabold text-2xl md:text-3xl leading-tight tracking-tight">
              A technology-driven industrial transformation company delivering advanced engineering, automation, Industry 4.0, and digital manufacturing solutions.
            </h2>
            
            <p className="text-body-md text-txt-muted mt-8 max-w-[680px]">
              DHGsoft is a technology-driven industrial transformation company delivering advanced engineering, automation, Industry 4.0, and digital manufacturing solutions for modern industrial enterprises.
            </p>
            
            <p className="text-body-md text-txt-muted mt-5 max-w-[680px]">
              We help organizations modernize operations by integrating engineering excellence, industrial automation, IIoT connectivity, AI-driven analytics, and enterprise intelligence into a unified smart manufacturing ecosystem.
            </p>
            
            {/* 8 expertise tags in a clean line */}
            <div className="mt-10 pt-8 border-t border-line/70">
              <div className="text-label-bold uppercase tracking-[0.15em] text-brand mb-4">
                Our Expertise
              </div>
              <div className="flex flex-wrap gap-2.5">
                {expertiseItems.map(item => (
                  <span 
                    key={item} 
                    className="text-xs text-txt-strong bg-mist border border-line rounded-full px-4 py-2 hover:border-brand hover:text-brand transition-colors font-sans font-semibold cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Signature line */}
            <div className="mt-10 flex items-center gap-4">
              <div className="w-12 h-[2px] bg-brand shrink-0" />
              <div className="text-label-bold uppercase tracking-[0.25em] text-brand text-xs">
                One Company. Complete Solutions. From Concept to Commissioning.
              </div>
            </div>
          </div>
        </div>
      </Section>
  );
}

export default ChapterWhoWeAre;
