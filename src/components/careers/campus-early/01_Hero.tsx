'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play, ArrowRight } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <Section variant="white" size="default" containerSize="wide" className="pt-8 md:pt-12 pb-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* LEFT — Content */}
          <div className="lg:col-span-7 text-left">
            
            {/* Eyebrow chip */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-brand/8 border border-brand/20 mb-8 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
              <span className="text-[11px] font-extrabold uppercase tracking-widest font-sans text-brand">
                Campus & Early Careers
              </span>
            </div>
            
            {/* H1 — uses locked h1 sizing automatically */}
            <h1 className="text-text-strong font-headline tracking-tight leading-[1.05]">
              Launch Your
              <br />
              Career with{' '}
              <span className="bg-gradient-to-r from-brand via-brand-hot to-brand-accent bg-clip-text text-transparent">
                DHGsoft
              </span>
            </h1>
            
            {/* Tagline */}
            <div className="mt-6 text-brand text-label-bold uppercase tracking-[0.2em] font-mono">
              Learn Today. Lead Tomorrow. Build Value for Tomorrow.
            </div>
            
            {/* Divider */}
            <div className="h-px bg-line my-8" />
            
            {/* Body paragraph */}
            <p className="text-body-md text-text-muted max-w-[560px] leading-relaxed">
              Whether you're a student, recent graduate, or university partner, DHGsoft's Campus & Early Careers program is designed to help you develop industry-ready skills, gain real-world experience, and build a successful career in Industrial Digital Transformation.
            </p>
            
            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link 
                href="/careers/submit-cv"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand text-white font-semibold hover:bg-brand-deep transition-all duration-300 shadow-md shadow-brand/10 hover:shadow-lg active:scale-98 cursor-pointer"
              >
                Apply Now
                <Play className="w-4 h-4 fill-current text-white" />
              </Link>
              
              <Link 
                href="#opportunities"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-line text-text-strong font-semibold hover:border-brand hover:text-brand transition-all duration-300 group cursor-pointer"
              >
                Explore Opportunities
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            
            {/* Tag chips */}
            <div className="mt-8 flex flex-wrap gap-2">
              {['Students', 'Engineers', 'Innovation Lab', 'Smart Factory', 'Team Collaboration'].map(tag => (
                <span 
                  key={tag}
                  className="text-body-sm text-text-muted bg-mist border border-line rounded-full px-4 py-1.5 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* RIGHT — Real photo + floating stat cards */}
          <div className="lg:col-span-5 relative w-full pb-8 lg:pb-10">
            
            {/* Main photo — real, content-related, high quality */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[5/6] lg:aspect-[4/4.2] bg-slate-50 border border-line">
              <Image
                src="/images/campus-hero.png"
                alt="DHGsoft engineering students collaborating on industrial technology"
                fill
                quality={90}
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-center"
              />
              {/* Subtle brand-tint overlay for premium feel */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand/15 via-transparent to-transparent pointer-events-none" />
            </div>
            
            {/* Floating stat card — top left overlap */}
            <div className="card absolute -top-3 -left-3 lg:-left-6 bg-white border border-line rounded-2xl shadow-lg p-5 min-w-[140px] text-left">
              <div className="heading-hero text-brand leading-none font-headline font-extrabold tracking-tighter">500+</div>
              <div className="text-label-bold text-text-muted uppercase tracking-[0.15em] mt-2 font-mono">
                Campus Hires
              </div>
            </div>
            
            {/* Floating stat card — bottom right overlap */}
            <div className="card absolute -bottom-3 -right-3 lg:-right-6 bg-brand text-white rounded-2xl shadow-lg p-5 min-w-[140px] text-left border border-brand-hot/20">
              <div className="heading-hero text-white leading-none font-headline font-extrabold tracking-tighter">6</div>
              <div className="text-label-bold text-white/85 uppercase tracking-[0.15em] mt-2 font-mono">
                Program Tracks
              </div>
            </div>
            
          </div>
        </div>
      </Container>
    </Section>
  );
}
