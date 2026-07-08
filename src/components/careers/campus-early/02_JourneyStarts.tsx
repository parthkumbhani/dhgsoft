import React from "react"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/button"

export default function JourneyStarts() {
  return (
    <Section variant="white" className="py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (55% width on desktop) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-label-bold text-brand uppercase tracking-[0.2em] block">
              YOUR JOURNEY STARTS HERE
            </span>
            
            <h2 className="text-text-strong font-headline tracking-tight leading-tight">
              The next generation of{" "}
              <span className="bg-gradient-to-r from-brand via-brand-hot to-brand-accent bg-clip-text text-transparent">
                industry innovators
              </span>{" "}
              starts here.
            </h2>

            <div className="text-body-md text-text-muted max-w-[560px] space-y-5 leading-relaxed">
              <p>
                At DHGsoft, we believe the next generation of innovators will shape the future of connected industries. Through internships, campus recruitment, graduate programs, and university partnerships, we provide aspiring professionals with opportunities to learn, innovate, and grow while working on real-world industrial challenges.
              </p>
              <p>
                Whether you're looking for your first internship or your first full-time role, we'll help you build a strong foundation for a successful career.
              </p>
            </div>

            <div className="pt-2">
              <a href="#opportunities">
                <Button variant="primary" size="lg" className="rounded-full">
                  Explore Opportunities →
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column (45% width on desktop) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 2x2 Grid of Stat Cards */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* Card 1 */}
              <div className="card bg-white border border-line rounded-2xl p-6 text-left flex flex-col justify-between shadow-sm">
                <div className="heading-hero font-extrabold text-brand leading-none font-headline tracking-tighter">
                  500+
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-text-muted font-mono mt-4 leading-tight">
                  STUDENTS TRAINED
                </div>
              </div>

              {/* Card 2 */}
              <div className="card bg-white border border-line rounded-2xl p-6 text-left flex flex-col justify-between shadow-sm">
                <div className="heading-hero font-extrabold text-brand leading-none font-headline tracking-tighter">
                  6
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-text-muted font-mono mt-4 leading-tight">
                  PROGRAM TRACKS
                </div>
              </div>

              {/* Card 3 */}
              <div className="card bg-white border border-line rounded-2xl p-6 text-left flex flex-col justify-between shadow-sm">
                <div className="heading-hero font-extrabold text-brand leading-none font-headline tracking-tighter">
                  15+
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-text-muted font-mono mt-4 leading-tight">
                  UNIVERSITY PARTNERS
                </div>
              </div>

              {/* Card 4 (Decorative Brand Mark) */}
              <div className="card bg-white border border-line rounded-2xl p-6 flex items-center justify-center shadow-sm">
                <div className="flex items-center text-lg font-bold tracking-tight select-none">
                  <span className="text-brand">dhg</span>
                  <span className="text-slate-400">Soft</span>
                </div>
              </div>

            </div>

            {/* Quote Box */}
            <div className="card bg-mist border border-line rounded-2xl p-6 text-left shadow-sm">
              <p className="text-body-sm italic text-text-strong leading-relaxed">
                "We invest in talent before the interview — through real projects, real mentors, and real opportunities that build careers, not just résumés."
              </p>
              <div className="text-label-bold text-brand uppercase tracking-[0.2em] mt-4 font-mono">
                DHGSOFT ENGINEERING LEADERSHIP
              </div>
            </div>

          </div>

        </div>
      </Container>
    </Section>
  )
}
