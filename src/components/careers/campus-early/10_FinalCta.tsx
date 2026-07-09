import React from "react"
import Link from "next/link"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/button"

export default function FinalCta() {
  return (
    <Section variant="ink" size="hero" className="relative py-24 bg-slate-950 text-white text-center overflow-hidden">
      {/* Background gradients and blueprint grid overlay */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand/10 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-15 pointer-events-none" />

      <Container className="flex flex-col items-center">
        
        {/* Applications Open pill badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white mb-6 select-none shadow-sm">
          <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] font-mono">
            APPLICATIONS OPEN
          </span>
        </div>

        {/* Heading */}
        <h2 className="heading-hero font-extrabold tracking-tight text-white max-w-3xl leading-[1.05] font-headline">
          Ready to Start Your<br />
          <span className="bg-gradient-to-r from-brand via-brand-hot to-brand-accent bg-clip-text text-transparent">
            Professional Journey?
          </span>
        </h2>

        {/* Body */}
        <p className="text-body-md text-white/80 max-w-[640px] mx-auto mt-6 leading-relaxed">
          Build practical skills, work on innovative technologies, and become part of a team that's transforming industries through digital engineering and intelligent solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center pt-8">
          <Link href="/careers/submit-cv">
            <Button variant="primary" size="lg" className="rounded-full px-8 py-3">
              Apply Now →
            </Button>
          </Link>
          <Link 
            href="/#contact" 
            className="inline-flex items-center justify-center gap-2 h-12 rounded-full border border-white/30 text-white hover:bg-white/10 hover:border-white font-bold px-8 text-base transition-all duration-300 bg-transparent cursor-pointer"
          >
            ✉ Contact Campus Relations
          </Link>
        </div>

        {/* Footer tagline */}
        <div className="text-body-sm text-white/60 mt-12 font-medium tracking-wide uppercase font-sans">
          From Campus to Career — Building the Next Generation of Industry Leaders.
        </div>

      </Container>
    </Section>
  )
}
