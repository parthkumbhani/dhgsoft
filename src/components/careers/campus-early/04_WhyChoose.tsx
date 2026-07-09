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
          <span className="mb-3 section-eyebrow">
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
                  <h3 className="text-text-strong font-headline">
                    {reason.title}
                  </h3>
                  <p className="mt-3 card-description">
                    {reason.desc}
                  </p>
                </div>
              )
            })}
          </div>
 
          {/* Bottom row — SINGLE full-width Emerging Technologies card */}
          <div className="mt-4">
            <div className="card bg-white border border-line rounded-2xl p-6 md:p-8 hover:border-brand hover:shadow-md transition-all text-left">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-5 h-5 text-brand" />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h4 className="text-txt-strong">Emerging Technologies</h4>
                  <p className="text-body-sm text-txt-muted mt-2">
                    Gain hands-on experience with the technologies reshaping industry:
                  </p>
                  
                  {/* Chips — spread across the full width now */}
                  <div className="flex flex-wrap gap-2.5 mt-5">
                    {[
                      'Industrial Automation',
                      'Artificial Intelligence',
                      'Industrial IoT',
                      'Cloud Computing',
                      'Data Engineering',
                      'Enterprise Applications',
                      'Cybersecurity',
                    ].map(tech => (
                      <span 
                        key={tech}
                        className="bg-brand/8 border border-brand/20 text-brand text-body-sm rounded-full px-4 py-2 hover:bg-brand hover:text-white hover:border-brand transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
              </div>
            </div>
          </div>

        </div>

      </Container>
    </Section>
  )
}
