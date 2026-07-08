import React from "react"
import { CheckCircle2 } from "lucide-react"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { GAIN_CARDS } from "@/lib/campusEarlyCareersData"

export default function WhatYoullGain() {
  return (
    <Section variant="ink" size="default" className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Background radial highlight & technical grid overlay */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand/10 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-15 pointer-events-none" />

      <Container className="text-center">
        
        {/* Header */}
        <span className="text-label-bold text-brand-accent uppercase tracking-[0.2em] block mb-3">
          STUDENT SUCCESS
        </span>
        <h2 className="text-white font-headline tracking-tight mb-4">
          What You'll Gain
        </h2>
        <p className="text-body-sm text-white/70 max-w-[560px] mx-auto leading-relaxed mb-16">
          Every DHGsoft campus program is designed to deliver tangible, career-defining outcomes.
        </p>

        {/* 8-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {GAIN_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="card bg-slate-900/40 border border-white/10 rounded-2xl p-6 hover:border-brand/70 hover:bg-slate-900/70 transition-all duration-300 flex flex-col justify-start"
            >
              <div className="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center mb-5 border border-brand-hot/5">
                <CheckCircle2 className="w-5 h-5 text-brand" />
              </div>
              <h3 className="text-white font-headline font-bold">
                {card.title}
              </h3>
              <p className="text-body-sm text-white/70 mt-2.5 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </Container>
    </Section>
  )
}
