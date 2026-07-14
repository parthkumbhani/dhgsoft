// src/components/about/07_PartnershipMarquee.tsx
import React from "react";
import { MapPin } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { partners, locations } from "@/lib/aboutData";

export function PartnershipMarquee() {
  return (
    <Section variant="mist" size="default" pattern="v8">
      <div className="mx-auto w-full max-w-site px-gutter md:px-gutter-md">
        
        {/* Header block */}
        <div className="text-center max-w-[720px] mx-auto text-left md:text-center">
          <span className="section-eyebrow tracking-[0.25em] text-xs">
            Core OEM & Platform Partners
          </span>
          <h2 className="text-txt-strong mt-4 font-sans font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
            Certified. Trusted. Connected.
          </h2>
          <p className="section-subtitle text-txt-muted mt-6 leading-relaxed font-sans font-medium">
            Deep partnerships with the world's leading industrial technology vendors — enabling us to deliver certified, scalable, and future-ready solutions.
          </p>
        </div>
        
        {/* Auto-scrolling marquee — CSS animation */}
        <div className="mt-14 relative overflow-hidden py-4 select-none">
          {/* Fade masks left and right */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-mist to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-mist to-transparent z-10 pointer-events-none" />
          
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {/* Duplicate the array so it loops seamlessly */}
            {[...partners, ...partners].map((partner, i) => (
              <div 
                key={i} 
                className="card flex-shrink-0 w-44 h-24 bg-white border border-line rounded-2xl flex items-center justify-center px-6 transition-all duration-300 hover:border-brand/40 hover:shadow-sm"
              >
                <span className="text-txt-strong font-sans font-extrabold text-center text-xs tracking-tight">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Locations strip below */}
        <div className="mt-20 pt-12 border-t border-line text-left">
          <div className="text-brand text-label-bold uppercase tracking-[0.2em] text-center mb-10 text-xs">
            Where We Operate
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[780px] mx-auto">
            {locations.map(loc => (
              <div 
                key={loc.city} 
                className="card flex items-start gap-4 bg-white border border-line rounded-2xl p-6 hover:border-brand transition-colors duration-300 shadow-xs"
              >
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-brand" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-txt-strong font-sans font-extrabold text-base tracking-tight">{loc.city}</div>
                  <div className="text-xs text-txt-muted mt-1.5 font-sans font-medium leading-relaxed">{loc.address}</div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-x-4 gap-y-1.5 mt-4 pt-4 border-t border-line/60">
                    <a 
                      href={`tel:${loc.phone.replace(/\s+/g, '')}`} 
                      className="text-xs text-brand font-mono font-bold hover:text-brand-deep transition-colors"
                    >
                      {loc.phone}
                    </a>
                    <span className="hidden sm:inline text-line">|</span>
                    <a 
                      href={`mailto:${loc.email}`} 
                      className="text-xs text-brand font-mono hover:text-brand-deep transition-colors truncate"
                    >
                      {loc.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default PartnershipMarquee;
