import React from "react"
import { ArrowRight } from "lucide-react"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { JOURNEY_STEPS } from "@/lib/campusEarlyCareersData"

export default function CampusJourney() {
  return (
    <Section variant="white" className="py-20 border-t border-line">
      <Container className="text-center">
        
        {/* Header */}
        <span className="text-label-bold text-brand uppercase tracking-[0.2em] block mb-3">
          YOUR PATH
        </span>
        <h2 className="text-text-strong font-headline tracking-tight mb-4">
          Campus Journey
        </h2>
        <p className="text-body-sm text-text-muted max-w-[560px] mx-auto leading-relaxed mb-12">
          From your first campus interaction to a full-time career — here's how the journey unfolds.
        </p>

        {/* 9-Step Timeline container */}
        <div className="flex items-center gap-4 overflow-x-auto pb-6 mt-12 scrollbar-thin scrollbar-thumb-brand scrollbar-track-mist">
          
          {JOURNEY_STEPS.map((step, idx) => {
            const Icon = step.icon
            const isLast = idx === JOURNEY_STEPS.length - 1
            
            return (
              <React.Fragment key={idx}>
                {/* Timeline node */}
                <div className="flex flex-col items-center min-w-[130px] shrink-0 group">
                  <div
                    className={`w-14 h-14 rounded-full border flex items-center justify-center mb-3 transition-all duration-300 ${
                      isLast
                        ? "bg-brand border-brand text-white shadow-md shadow-brand/15 group-hover:scale-105"
                        : "border-line bg-white text-brand group-hover:border-brand/40 group-hover:scale-105"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div
                    className={`text-[11px] font-bold uppercase tracking-wider font-mono ${
                      isLast ? "text-brand" : "text-text-muted"
                    }`}
                  >
                    {step.number}
                  </div>
                  <div className="text-[11px] text-text-strong text-center mt-1 font-extrabold max-w-[110px] leading-snug tracking-tight">
                    {step.label}
                  </div>
                </div>

                {/* Connecting arrow if not last node */}
                {!isLast && (
                  <ArrowRight className="w-4 h-4 text-brand/30 flex-shrink-0 self-center mb-6" />
                )}
              </React.Fragment>
            )
          })}

        </div>

      </Container>
    </Section>
  )
}
