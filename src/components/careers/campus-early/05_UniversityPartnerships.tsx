'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';

const PARTNERSHIP_ITEMS = [
  "Campus Recruitment",
  "Internship Collaboration",
  "Industry Projects",
  "Faculty Development Programs",
  "Guest Lectures",
  "Technical Workshops",
  "Innovation Challenges",
  "Industrial Visits",
  "Research Collaboration",
  "Skill Development Programs"
];

export default function UniversityPartnerships() {
  return (
    <Section variant="mist" size="default" className="py-20 border-t border-line">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column — Content (~55% width) */}
          <div className="lg:col-span-7 text-left">
            {/* Eyebrow — CRIMSON not amber */}
            <div className="text-brand text-label-bold uppercase tracking-[0.2em]">
              University Partnerships
            </div>
            
            {/* H2 — clean navy text, NO rainbow gradient */}
            <h2 className="text-text-strong font-headline tracking-tight leading-tight mt-4">
              Collaborating with Academia to Build Future Talent
            </h2>
            
            {/* Sub-line */}
            <p className="text-body-md text-text-muted mt-6 max-w-[560px] leading-relaxed">
              DHGsoft works with universities, engineering colleges, and technical institutions to bridge the gap between academic education and industrial practice.
            </p>
            
            {/* Sub-heading */}
            <div className="text-brand text-label-bold uppercase tracking-[0.2em] mt-10">
              Partnership Programs
            </div>
            
            {/* 2-column checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mt-6">
              {PARTNERSHIP_ITEMS.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-brand" />
                  </div>
                  <span className="text-body-sm text-text-strong font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            {/* CTA button */}
            <div className="mt-10">
              <Link 
                href="/#contact" 
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand text-white font-semibold hover:bg-brand-deep hover:-translate-y-0.5 transition-all duration-300 shadow-md shadow-brand/10 hover:shadow-lg active:scale-98 cursor-pointer"
              >
                Partner with DHGsoft
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>
          
          {/* Right Column — Image + Floating Badge (~45% width) */}
          <div className="lg:col-span-5 relative w-full">
            
            {/* Main photo — real, content-related */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] lg:aspect-[5/6] bg-slate-50 border border-line">
              <Image
                src="/images/university-partnerships.png"
                alt="Engineering students collaborating on a research project in a university lab"
                fill
                quality={90}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-center"
              />
              {/* Subtle brand-tinted overlay for premium feel */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand/10 via-transparent to-transparent pointer-events-none" />
            </div>
            
            {/* Floating stat badge — bottom-left overlap */}
            <div className="card absolute -bottom-6 -left-6 lg:-left-8 bg-brand text-white rounded-2xl shadow-xl p-5 min-w-[160px] text-left border border-brand-hot/20">
              <div className="heading-hero text-white leading-none font-headline font-extrabold tracking-tighter">15+</div>
              <div className="text-label-bold uppercase tracking-[0.15em] text-white/85 mt-2 font-mono text-[9px]">
                University Partners
              </div>
            </div>
            
          </div>
          
        </div>
      </Container>
    </Section>
  );
}
