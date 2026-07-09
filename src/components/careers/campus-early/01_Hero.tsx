'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play, ArrowRight } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';

export default function Hero() {
  return (
    <Section variant="white" size="default" containerSize="wide" className="relative overflow-hidden">
      
      {/* Ambient decorative background — subtle brand shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-left soft blob */}
        <div 
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{
            background: 'radial-gradient(circle, rgb(180 18 63) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Bottom-right soft blob */}
        <div 
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{
            background: 'radial-gradient(circle, rgb(225 29 92) 0%, transparent 70%)',
            filter: 'blur(70px)',
          }}
        />
        
        {/* Flowing SVG curves — subtle decorative lines */}
        <svg 
          className="absolute inset-0 w-full h-full" 
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="hero-curve-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(180 18 63)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgb(180 18 63)" stopOpacity="0.12" />
              <stop offset="100%" stopColor="rgb(180 18 63)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path 
            d="M -100,200 Q 400,120 800,220 T 1540,180" 
            fill="none" 
            stroke="url(#hero-curve-1)" 
            strokeWidth="2"
          />
          <path 
            d="M -100,600 Q 400,540 800,600 T 1540,580" 
            fill="none" 
            stroke="url(#hero-curve-1)" 
            strokeWidth="1.5"
          />
        </svg>
      </div>
      
      <Container>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* LEFT — Content */}
          <div className="lg:col-span-7 text-left">
            
            {/* Eyebrow chip with pulsing dot */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand/8 border border-brand/20 mb-8">
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inset-0 rounded-full bg-brand animate-ping opacity-60" />
                <span className="relative rounded-full bg-brand w-1.5 h-1.5" />
              </span>
              <span className="text-label-bold text-brand uppercase tracking-[0.2em]">
                Campus & Early Careers
              </span>
            </div>
            
            {/* H1 — all crimson gradient, no amber */}
            <h1 className="text-txt-strong">
              Launch Your
              <br />
              Career with{' '}
              <span className="text-gradient-brand">DHGsoft</span>
            </h1>
            
            {/* Tagline */}
            <div className="mt-6 text-brand text-label-bold uppercase tracking-[0.2em]">
              Learn Today. Lead Tomorrow. Build Value for Tomorrow.
            </div>
            
            {/* Divider with brand accent */}
            <div className="relative my-8">
              <div className="h-px bg-line" />
              <div className="absolute left-0 top-0 h-px w-24 bg-gradient-to-r from-brand to-brand-hot" />
            </div>
            
            {/* Body */}
            <p className="text-body-md text-txt-muted max-w-[560px]">
              Whether you're a student, recent graduate, or university partner, DHGsoft's Campus & Early Careers program is designed to help you develop industry-ready skills, gain real-world experience, and build a successful career in Industrial Digital Transformation.
            </p>
            
            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link 
                href="/careers/submit-cv"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand text-white font-semibold hover:bg-brand-deep hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/25 transition-all duration-300"
              >
                Apply Now
                <Play className="w-4 h-4 fill-current text-white" />
              </Link>
              
              <Link 
                href="#opportunities"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-line text-txt-strong font-semibold hover:border-brand hover:text-brand transition-all duration-300 group"
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
                  className="text-body-sm text-txt-muted bg-mist border border-line rounded-full px-4 py-1.5 hover:border-brand hover:text-brand transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* RIGHT — Image with layered premium treatment */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              
              {/* Layered offset accent block behind image */}
              <div 
                className="absolute -inset-4 rounded-3xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(180,18,63,0.15) 0%, rgba(225,29,92,0.08) 50%, transparent 100%)',
                  filter: 'blur(20px)',
                }}
              />
              
              {/* Corner accent shape - top left */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-l-2 border-t-2 border-brand rounded-tl-2xl pointer-events-none" />
              
              {/* Corner accent shape - bottom right */}
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-r-2 border-b-2 border-brand rounded-br-2xl pointer-events-none" />
              
              {/* Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[5/6] lg:aspect-[4/4.2] ring-1 ring-brand/10">
                <Image
                  src="/images/campus-hero.jpg"
                  alt="DHGsoft engineering students collaborating on industrial technology"
                  fill
                  quality={90}
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-center"
                />
                {/* Subtle brand tint overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand/5 via-transparent to-transparent pointer-events-none" />
              </div>
              
            </div>
          </div>
          
        </div>
      </Container>
    </Section>
  );
}
