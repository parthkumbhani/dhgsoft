// src/components/about/06_StrategicTimeline.tsx
import React from "react";
import { Section } from "@/components/ui/Section";
import { strategicObjectives } from "@/lib/aboutData";

export function StrategicTimeline() {
  return (
    <Section variant="white" size="default" pattern="v4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          
          {/* Left — sticky intro */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 mb-10 lg:mb-0">
            <div>
              <div className="text-brand text-label-bold uppercase tracking-[0.25em] text-xs">
                Strategic Objectives
              </div>
              <h2 className="text-txt-strong mt-4 font-sans font-extrabold text-3xl leading-tight">
                Building Value for Tomorrow.
              </h2>
              {/* Flag item for founders review */}
              <p className="text-body-sm text-txt-muted mt-6 max-w-[340px] leading-relaxed font-sans font-medium">
                Our long-term commitments to customers, technology, and the industries we serve. <br/>
                <span className="text-[10px] text-brand/60 uppercase tracking-widest font-mono block mt-3">* REVIEW WITH LEADERSHIP</span>
              </p>
            </div>
          </div>
          
          {/* Right — vertical decorated timeline */}
          <div className="lg:col-span-8 relative pl-4 sm:pl-8">
            {/* Vertical connector line */}
            <div className="absolute left-[30px] top-6 bottom-6 w-[2.5px] bg-gradient-to-b from-brand via-brand-hot to-brand-accent/30" />
            
            <div className="space-y-8 relative">
              {strategicObjectives.map((obj, i) => (
                <div key={obj.title} className="flex items-start gap-6 relative">
                  
                  {/* Circle marker on the line */}
                  <div className="relative flex-shrink-0 z-10">
                    <div className="w-12 h-12 rounded-full bg-white border-[3.5px] border-brand flex items-center justify-center shadow-xs">
                      <span className="text-brand font-mono" style={{ fontSize: '13.5px', fontWeight: 800 }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content card */}
                  <div className="card flex-1 bg-white border border-line rounded-2xl p-6 hover:border-brand hover:shadow-md transition-all duration-300">
                    <h4 className="text-txt-strong font-sans font-extrabold text-base tracking-tight leading-snug">
                      {obj.title}
                    </h4>
                    <p className="text-xs text-txt-muted mt-3 font-sans font-semibold leading-relaxed">
                      {obj.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
  );
}

export default StrategicTimeline;
