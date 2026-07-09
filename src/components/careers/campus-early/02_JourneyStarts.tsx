import React from "react";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export default function JourneyStarts() {
  return (
    <Section variant="white" size="default">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* LEFT — content */}
          <div className="lg:col-span-7 text-left">
            
            <div className="text-brand text-label-bold uppercase tracking-[0.2em]">
              Your Journey Starts Here
            </div>
            
            <h2 className="text-txt-strong mt-4">
              The next generation of{' '}
              <span className="text-gradient-brand">industry innovators</span>{' '}
              starts here.
            </h2>
            
            <p className="text-body-md text-txt-muted mt-6 max-w-[560px]">
              At DHGsoft, we believe the next generation of innovators will shape the future of connected industries. Through internships, campus recruitment, graduate programs, and university partnerships, we provide aspiring professionals with opportunities to learn, innovate, and grow while working on real-world industrial challenges.
            </p>
            
            <p className="text-body-md text-txt-muted mt-4 max-w-[560px]">
              Whether you're looking for your first internship or your first full-time role, we'll help you build a strong foundation for a successful career.
            </p>
            
            {/* CTA — SOLID CRIMSON (no more orange gradient) */}
            <div className="mt-8">
              <a 
                href="#opportunities"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand text-white font-semibold hover:bg-brand-deep hover:-translate-y-0.5 transition-all duration-300"
              >
                Explore Opportunities
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* RIGHT — compact stats + quote composition */}
          <div className="lg:col-span-5">
            <div className="relative space-y-4">
              
              {/* Two stats side by side — 500+ removed, only 6 and 15+ */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* Stat 1: 6 Program Tracks — highlighted crimson */}
                <div className="card relative bg-brand text-white rounded-2xl p-6 shadow-xl shadow-brand/25 overflow-hidden text-left">
                  {/* Subtle decorative shape inside */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10 blur-xl pointer-events-none" />
                  
                  <div className="relative">
                    <div className="heading-hero text-white leading-none">6</div>
                    <div className="text-label-bold uppercase tracking-[0.15em] text-white/85 mt-3">
                      Program Tracks
                    </div>
                  </div>
                </div>
                
                {/* Stat 2: 15+ University Partners — clean white */}
                <div className="card relative bg-white border border-line rounded-2xl p-6 hover:border-brand transition-colors overflow-hidden text-left">
                  {/* Subtle brand tint corner */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-brand/8 blur-xl pointer-events-none" />
                  
                  <div className="relative">
                    <div className="heading-hero text-brand leading-none">15+</div>
                    <div className="text-label-bold uppercase tracking-[0.15em] text-txt-muted mt-3">
                      University Partners
                    </div>
                  </div>
                </div>
                
              </div>
              
              {/* Quote card — spans full width below the stats, decorative accent */}
              <div className="card relative bg-mist border border-line rounded-2xl p-6 overflow-hidden text-left">
                {/* Large decorative quote glyph in the background */}
                <div className="absolute -top-4 -left-2 text-[6rem] leading-none text-brand/15 font-serif pointer-events-none select-none">
                  "
                </div>
                
                <div className="relative">
                  <p className="text-body-sm italic text-txt-strong">
                    We invest in talent before the interview — through real projects, real mentors, and real opportunities that build careers, not just résumés.
                  </p>
                  <div className="flex items-center gap-3 mt-5">
                    <div className="w-8 h-[2px] bg-brand rounded-full" />
                    <div className="text-label-bold text-brand uppercase tracking-[0.2em]">
                      DHGsoft Engineering Leadership
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </Container>
    </Section>
  );
}
