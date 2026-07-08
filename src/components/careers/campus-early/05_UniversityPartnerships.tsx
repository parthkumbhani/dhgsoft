import React from "react"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/button"
import { PARTNERSHIPS_LEFT, PARTNERSHIPS_RIGHT } from "@/lib/campusEarlyCareersData"

export default function UniversityPartnerships() {
  return (
    <Section variant="ink" size="default" className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Background gradients and blueprint grid overlay */}
      <div className="absolute -bottom-10 left-1/4 w-[400px] h-[400px] bg-brand/10 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-15 pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (55% width on desktop) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-label-bold text-brand-accent uppercase tracking-[0.2em] block">
              UNIVERSITY PARTNERSHIPS
            </span>
            
            <h2 className="text-white font-headline tracking-tight leading-tight">
              Collaborating with<br />
              <span className="bg-gradient-to-r from-brand via-brand-hot to-brand-accent bg-clip-text text-transparent">
                Academia
              </span>{" "}
              to Build{" "}
              <span className="bg-gradient-to-r from-brand via-brand-hot to-brand-accent bg-clip-text text-transparent">
                Future Talent
              </span>
            </h2>

            <p className="text-body-md text-white/75 leading-relaxed max-w-[560px]">
              DHGsoft works with universities, engineering colleges, and technical institutions to bridge the gap between academic education and industrial practice.
            </p>

            {/* Sub-heading */}
            <div className="text-brand-accent text-xs font-bold uppercase tracking-[0.2em] font-mono pt-4">
              PARTNERSHIP PROGRAMS
            </div>

            {/* 2-column checklist of 10 items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5 pt-2">
              
              {/* Left checklist */}
              <div className="space-y-3.5">
                {PARTNERSHIPS_LEFT.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand" />
                    </div>
                    <span className="text-body-sm text-white/90 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* Right checklist */}
              <div className="space-y-3.5">
                {PARTNERSHIPS_RIGHT.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand" />
                    </div>
                    <span className="text-body-sm text-white/90 font-medium">{item}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Link href="/#contact">
                <Button variant="outline" size="lg" className="rounded-full text-white border-white/30 hover:bg-white/10 hover:border-white font-bold transition-all">
                  Partner with DHGsoft
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column (45% width on desktop) — photo card + overlaid stats badge */}
          <div className="lg:col-span-5 w-full flex items-center justify-center">
            <div className="relative w-full h-[380px] sm:h-[420px] rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-slate-900">
              <Image
                src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=700&q=80"
                alt="University students working in technology engineering laboratory"
                fill
                sizes="(max-w-1024px) 100vw, 40vw"
                style={{ objectFit: "cover" }}
                className="opacity-75"
                quality={90}
              />
              
              {/* Crimson Stats Badge overlay */}
              <div className="card bg-brand text-white rounded-2xl p-4 absolute bottom-4 left-4 border border-brand-hot/20 flex items-center gap-3 shadow-md">
                <div className="heading-md font-extrabold text-2xl leading-none font-headline tracking-tighter">
                  15+
                </div>
                <div className="text-[9px] font-bold uppercase tracking-widest text-white/85 font-mono leading-tight">
                  UNIVERSITY<br />PARTNERS
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  )
}
