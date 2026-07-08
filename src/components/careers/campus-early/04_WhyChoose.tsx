import React from "react"
import { Cpu, Star } from "lucide-react"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { WHY_CHOOSE_REASONS, EMERGING_TECH_CHIPS } from "@/lib/campusEarlyCareersData"

export default function WhyChoose() {
  return (
    <Section variant="white" className="py-20 border-t border-line">
      <Container>
        
        {/* Header */}
        <div className="text-left mb-12">
          <span className="text-label-bold text-brand uppercase tracking-[0.2em] block mb-3">
            OUR ADVANTAGE
          </span>
          <h2 className="text-text-strong font-headline tracking-tight leading-none">
            Why Choose DHGsoft?
          </h2>
        </div>

        {/* Asymmetric Assembled Grid */}
        <div className="space-y-4">
          
          {/* Top Row: 3 equal cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {WHY_CHOOSE_REASONS.map((reason, idx) => {
              const Icon = reason.icon
              return (
                <div
                  key={idx}
                  className="card bg-white border border-line rounded-2xl p-6 text-left shadow-sm hover:border-brand/40 transition-all duration-350"
                >
                  <div className="w-11 h-11 rounded-full bg-brand/10 flex items-center justify-center mb-6 border border-brand-hot/5">
                    <Icon className="w-5 h-5 text-brand" />
                  </div>
                  <h3 className="text-text-strong font-headline font-bold">
                    {reason.title}
                  </h3>
                  <p className="text-body-sm text-text-muted mt-3 leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Bottom Row: Wide emerging technologies card + Small decorative card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Emerging Technologies Card (spans 2 columns) */}
            <div className="card bg-white border border-line rounded-2xl p-6 md:col-span-2 text-left shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-full bg-brand/10 flex items-center justify-center mb-6 border border-brand-hot/5">
                  <Cpu className="w-5 h-5 text-brand" />
                </div>
                <h3 className="text-text-strong font-headline font-bold mb-2">
                  Emerging Technologies
                </h3>
                <p className="text-body-sm text-text-muted leading-relaxed mb-6">
                  Gain hands-on experience with the technologies reshaping industry:
                </p>
              </div>

              {/* Tech pill chips */}
              <div className="flex flex-wrap gap-2.5">
                {EMERGING_TECH_CHIPS.map((chip, idx) => (
                  <span
                    key={idx}
                    className="bg-brand/5 border border-brand/20 text-brand text-xs font-semibold rounded-full px-4 py-2 hover:bg-brand hover:text-white transition-colors duration-250 cursor-default"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Decorative Card (spans 1 column) */}
            <div className="card bg-white border border-line rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:border-brand/35 transition-all">
              <Star className="w-12 h-12 text-brand/30 animate-pulse" />
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 font-mono mt-4">
                BUILDING THE FUTURE
              </div>
            </div>

          </div>

        </div>

      </Container>
    </Section>
  )
}
