import React from "react"
import Link from "next/link"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { OPPORTUNITIES } from "@/lib/campusEarlyCareersData"

export default function ExploreOpportunities() {
  return (
    <Section variant="mist" id="opportunities" className="py-20 border-t border-line">
      <Container>
        
        {/* Header row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
          <div className="lg:col-span-7 text-left">
            <span className="mb-3 section-eyebrow">
              WHAT WE OFFER
            </span>
            <h2 className="text-text-strong font-headline tracking-tight leading-none">
              Explore Opportunities
            </h2>
          </div>
          <div className="lg:col-span-5 text-left lg:text-right flex lg:justify-end">
            <p className="max-w-[420px] section-subtitle">
              Six distinct pathways designed to match your stage of learning and career ambitions.
            </p>
          </div>
        </div>
 
        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OPPORTUNITIES.map((opp, idx) => {
            const Icon = opp.icon
            return (
              <div
                key={idx}
                className="card bg-white border border-line rounded-2xl p-6 hover:border-brand hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left shadow-sm"
              >
                <div>
                  <div className="w-11 h-11 rounded-full bg-brand/10 flex items-center justify-center mb-6 border border-brand-hot/5">
                    <Icon className="w-5 h-5 text-brand" />
                  </div>
                  <h4 className="text-text-strong font-headline font-bold">
                    {opp.title}
                  </h4>
                  <p className="mt-3 card-description">
                    {opp.desc}
                  </p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-line/40">
                  <Link
                    href="/careers/submit-cv"
                    className="inline-flex items-center gap-1.5 text-brand hover:text-brand-hot text-xs font-bold uppercase tracking-wider font-mono hover:gap-2.5 transition-all"
                  >
                    Learn More <span className="text-[10px]">➔</span>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

      </Container>
    </Section>
  )
}
