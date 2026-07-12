"use client";

import React from "react";
import { Section } from "@/components/ui/Section";

const deliverySteps = [
  {
    title: "Discover",
    body: "Understanding operational challenges and business objectives.",
  },
  {
    title: "Design",
    body: "Developing scalable digital architectures and engineering solutions.",
  },
  {
    title: "Implement",
    body: "Deploying, integrating, testing, and validating technologies.",
  },
  {
    title: "Optimize",
    body: "Continuously improving system performance through monitoring, analytics, and managed support.",
  },
];

export function DeliveryApproach() {
  return (
    <Section variant="mist" size="default" pattern="v5" className="relative overflow-hidden border-b border-line/10">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <span className="text-brand text-label-bold uppercase tracking-[0.2em] font-sans block">
          OUR DELIVERY APPROACH
        </span>
        <h2 className="text-txt-strong tracking-tight font-black leading-tight font-sans">
          Every engagement follows a structured engineering methodology.
        </h2>
      </div>

      {/* 4-Step horizontal connected flow */}
      <div className="relative mt-12 max-w-6xl mx-auto">
        {/* Horizontal connector line on desktop */}
        <div className="absolute top-[38px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#B4123F]/20 via-[#B4123F]/40 to-[#B4123F]/20 hidden md:block z-0" />
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10 text-left">
          {deliverySteps.map((step, i) => (
            <div 
              key={i} 
              className="card group bg-white border border-line rounded-2xl p-6 relative hover:border-[#B4123F]/60 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-start"
            >
              {/* Top gradient highlight on hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#B4123F] to-[#E11D5C] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Number indicator */}
              <div className="relative z-10 w-11 h-11 rounded-xl bg-gradient-to-br from-[#B4123F] to-[#E11D5C] text-white flex items-center justify-center font-bold font-sans text-md shadow-md shadow-[#B4123F]/15 shrink-0 group-hover:scale-105 transition-transform duration-300">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Text */}
              <h3 className="text-txt-strong mt-5 font-extrabold font-sans text-lg group-hover:text-[#B4123F] transition-colors duration-300">
                {step.title}
              </h3>
              
              <p className="text-body-sm text-txt-muted mt-3 leading-relaxed font-sans font-medium">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
