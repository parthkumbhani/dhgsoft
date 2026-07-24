"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Award, CheckCircle, FileText, Lightbulb, MapPin, ShieldCheck, Smile, Target, Wrench, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

export default function AboutRecognitionPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased font-sans flex flex-col selection:bg-brand selection:text-white">
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="flex-grow">
        {/* ============ 1. PREMIUM HERO (Full-bleed Background Image with Dark Gradient & Desktop Height) ============ */}
        <section className="relative min-h-screen flex items-center pt-24 pb-16 text-left overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/about/recognition-hero.jpg" 
              alt="Recognition banner" 
              fill 
              priority 
              className="object-cover" 
              sizes="100vw" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/65 to-ink/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/40 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 w-full max-w-site mx-auto px-gutter md:px-gutter-md">
            <nav className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-xs mb-7">
              <Link href="/about" className="hover:text-brand-hot transition-colors">About</Link>
              <span className="opacity-50">/</span>
              <span className="text-white font-medium">Recognition</span>
            </nav>
            
            <div className="text-brand-hot text-[11px] font-extrabold uppercase tracking-widest font-mono">Recognition</div>
            
            <h1 className="text-white mt-4 max-w-[900px] font-extrabold tracking-tight leading-[1.05] text-headline-xl">
              Excellence Measured by Customer Success
            </h1>
            
            <p className="text-slate-300 text-body-md mt-6 max-w-[760px] leading-relaxed font-medium">
              DHGsoft's recognition is not defined only by trophies or logos. It is reflected in successful plant turnarounds, trusted engineering alliances, and sustainable business outcomes.
            </p>

            {/* Floating Hero Accent Badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                <CheckCircle className="w-4 h-4 text-brand-hot" />
                <span>Customer Success First</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                <CheckCircle className="w-4 h-4 text-brand-hot" />
                <span>300+ Digital Deployments</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                <CheckCircle className="w-4 h-4 text-brand-hot" />
                <span>99.2% Client Retention</span>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ 2. OVERVIEW (Recognition Foundation Grid - High Density & Zero Blank Space) ============ */}
        <section className="relative overflow-hidden bg-mesh-glow-light bg-dot-matrix py-16 md:py-24 border-b border-line">
          {/* Background Watermark Typography */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[150px] font-black text-slate-100/70 select-none pointer-events-none z-0 font-mono tracking-tighter hidden lg:block">
            EXCELLENCE
          </div>

          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              
              {/* Left Column: Text, Metrics & 4-Card Grid (lg:col-span-7) */}
              <div className="lg:col-span-7 text-left flex flex-col justify-between space-y-6">
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand/15 text-brand flex items-center justify-center shrink-0 shadow-sm">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-brand text-xs font-bold uppercase tracking-widest font-mono">Overview & Impact</span>
                  </div>
                  
                  <h3 className="text-txt-strong tracking-tight font-extrabold leading-[1.1] text-3xl md:text-4xl lg:text-5xl" style={{ fontSize: 'clamp(2rem, 1.6rem + 1vw, 2.5rem)' }}>
                    Our greatest achievement is the success of our customers.
                  </h3>
                  
                  <p className="text-body-sm text-txt-muted leading-relaxed">
                    DHGsoft measures accomplishments by our ability to keep critical industrial infrastructures running smoothly. Every completed project, operational improvement, and long-term partnership reflects our commitment to digital engineering excellence and transparent project delivery.
                  </p>
                </div>

                {/* 3 High-Impact Key Metric Chips */}
                <div className="flex flex-wrap gap-2.5 pt-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-line shadow-xs text-xs font-bold text-slate-800">
                    <Zap className="w-3.5 h-3.5 text-brand" />
                    <span>5+ Core Industry Standards</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-line shadow-xs text-xs font-bold text-slate-800">
                    <CheckCircle className="w-3.5 h-3.5 text-brand" />
                    <span>99% CSAT Rating</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-line shadow-xs text-xs font-bold text-slate-800">
                    <Target className="w-3.5 h-3.5 text-brand-hot" />
                    <span>Top System Integrator</span>
                  </div>
                </div>

                {/* 4-Card Connected Grid with Takeaway Pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-line/80">
                  <div className="bg-white/90 border border-line rounded-xl p-4 shadow-sm hover:border-brand/40 transition-all flex flex-col justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                        <Smile className="w-4 h-4" />
                      </div>
                      <span className="text-txt-strong font-bold text-xs">Automotive Operations</span>
                    </div>
                    <span className="text-[11px] text-txt-muted mt-2 block">Improving throughput and assembly line efficiency.</span>
                    <div className="mt-3 pt-2 border-t border-line/60 flex flex-wrap gap-1">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">OEE Lift</span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">ASRS Integration</span>
                    </div>
                  </div>

                  <div className="bg-white/90 border border-line rounded-xl p-4 shadow-sm hover:border-brand/40 transition-all flex flex-col justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                        <Wrench className="w-4 h-4" />
                      </div>
                      <span className="text-txt-strong font-bold text-xs">Life Sciences ESG</span>
                    </div>
                    <span className="text-[11px] text-txt-muted mt-2 block">Optimizing cleanroom metrics and water recycling.</span>
                    <div className="mt-3 pt-2 border-t border-line/60 flex flex-wrap gap-1">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">FDA 21 CFR</span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">BMS Control</span>
                    </div>
                  </div>

                  <div className="bg-white/90 border border-line rounded-xl p-4 shadow-sm hover:border-brand/40 transition-all flex flex-col justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                        <Lightbulb className="w-4 h-4" />
                      </div>
                      <span className="text-txt-strong font-bold text-xs">Water & Utilities</span>
                      </div>
                    <span className="text-[11px] text-txt-muted mt-2 block">Ensuring system safety and reliable telemetry.</span>
                    <div className="mt-3 pt-2 border-t border-line/60 flex flex-wrap gap-1">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">DNP3 telemetry</span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">SCADA Network</span>
                    </div>
                  </div>

                  <div className="bg-white/90 border border-line rounded-xl p-4 shadow-sm hover:border-brand/40 transition-all flex flex-col justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                        <Award className="w-4 h-4" />
                      </div>
                      <span className="text-txt-strong font-bold text-xs">Chemical Control</span>
                    </div>
                    <span className="text-[11px] text-txt-muted mt-2 block">Tuning PID loops and process control networks.</span>
                    <div className="mt-3 pt-2 border-t border-line/60 flex flex-wrap gap-1">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">ISA-88 Batch</span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">PID Tuning</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Stacked Interactive Showcase Frame (lg:col-span-5) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                
                {/* Photo Card with Floating Badges */}
                <div className="relative rounded-[24px] overflow-hidden border border-line shadow-lg aspect-[16/11] w-full group">
                  <Image src="/images/about/recognition-accomplishments.jpg" alt="Recognition overview photography" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(min-width:1024px) 35vw, 100vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md border border-line px-3 py-1 rounded-lg text-[10px] font-bold text-brand shadow-xs">
                    CSAT Excellence
                  </div>
                  <div className="absolute bottom-3 right-3 bg-slate-900/90 text-white backdrop-blur-md border border-slate-700 px-3 py-1 rounded-lg text-[10px] font-bold shadow-xs">
                    Industry Leader
                  </div>
                </div>

                {/* Glassmorphic Value Impact Card (Fills bottom space) */}
                <div className="bg-white border border-line rounded-[24px] p-5 shadow-md space-y-3 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-brand uppercase tracking-wider">Why Industry Leaders Recognize DHGsoft</span>
                    <span className="px-2 py-0.5 rounded-md bg-brand/10 text-brand text-[10px] font-bold font-mono">ISA Certified</span>
                  </div>

                  <div className="space-y-2 pt-1 text-xs text-txt-strong">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-brand shrink-0" />
                      <span>Consistent Plant-Floor Automation Execution</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-brand shrink-0" />
                      <span>End-to-End Enterprise Integration Performance</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-brand shrink-0" />
                      <span>Certified Lifecycle Safety & Engineering Posture</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ 3. KEY ACCOMPLISHMENTS (2-Column Split Feature Grid - Zero Blank Space) ============ */}
        <section className="relative overflow-hidden bg-mesh-glow-light bg-tech-grid py-16 md:py-24 border-b border-line">
          {/* Background Watermark Typography */}
          <div className="absolute left-0 bottom-6 text-[130px] font-black text-slate-200/50 select-none pointer-events-none z-0 font-mono tracking-tighter hidden lg:block">
            ACCOMPLISH
          </div>

          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            
            {/* Centered Header */}
            <div className="text-center max-w-[720px] mx-auto mb-12">
              <span className="text-brand text-xs font-bold uppercase tracking-widest block font-mono">Accomplishments</span>
              <h3 className="text-txt-strong mt-2 tracking-tight font-extrabold text-3xl md:text-4xl">Pillars of Recognition</h3>
              <p className="text-body-sm text-txt-muted mt-2 leading-relaxed">How we measure our engineering success and customer satisfaction benchmarks.</p>
              <div className="w-12 h-1 bg-brand rounded-full mt-4 mx-auto" />
            </div>

            {/* 2-Column Split Feature Grid Layout - Zero Blank Space */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column: Sticky Hero Feature Showcase Card (lg:col-span-5) */}
              <div className="lg:col-span-5 flex flex-col">
                <div className="bg-white border border-line rounded-[24px] p-6 shadow-md flex flex-col justify-between h-full relative overflow-hidden group">
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/10] w-full mb-6 border border-line shadow-xs">
                    <Image src="/images/about/recognition-hero.jpg" alt="Recognition principles setup" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(min-width:1024px) 35vw, 100vw" />
                    <div className="absolute inset-0 bg-ink/20" />
                    
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md border border-line px-3 py-1 rounded-lg text-[10px] font-bold text-brand shadow-xs">
                      Excellence Standards
                    </div>
                  </div>

                  <div className="space-y-3 text-left">
                    <h4 className="text-txt-strong font-extrabold text-xl leading-snug">
                      Proven Digital Transformation Delivery
                    </h4>
                    <p className="text-xs text-txt-muted leading-relaxed">
                      We design plant-floor networks, database integration endpoints, and process loops to run efficiently. We measure engineering success through strict quality checklists and partner CSAT review workflows.
                    </p>
                  </div>

                  <div className="pt-5 border-t border-line/80 mt-6 space-y-2.5">
                    <div className="flex items-center gap-2.5 text-xs text-txt-strong font-semibold">
                      <CheckCircle className="w-4 h-4 text-brand shrink-0" />
                      <span>Certified Professional Control System Technicians</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-txt-strong font-semibold">
                      <CheckCircle className="w-4 h-4 text-brand shrink-0" />
                      <span>Over 300+ Automated Deployments Globally</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-txt-strong font-semibold">
                      <CheckCircle className="w-4 h-4 text-brand shrink-0" />
                      <span>100% Milestone and SLA Verification Systems</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: 3 High-Density Capability Cards (lg:col-span-7) */}
              <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
                
                {/* Card 01 */}
                <div className="group bg-white border border-line rounded-2xl p-6 shadow-xs hover:border-brand hover:shadow-xl transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <span className="absolute right-4 top-2 text-4xl font-mono font-black text-slate-100 group-hover:text-brand/10 transition-colors pointer-events-none select-none">01</span>
                  
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-3 shadow-xs">
                      <Smile className="w-5 h-5" />
                    </div>
                    <h4 className="text-txt-strong font-bold text-base leading-snug">Customer Success Benchmark</h4>
                    <p className="text-xs text-txt-muted mt-1.5 leading-relaxed">Every automated deployment represents a shared success milestone. We deliver practical SCADA, PLC, and MES architectures that directly improve plant throughput.</p>
                  </div>

                  <div className="pt-3.5 border-t border-line/80 mt-4 flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">OEE Lift</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">99% CSAT Rating</span>
                  </div>
                </div>

                {/* Card 02 */}
                <div className="group bg-white border border-line rounded-2xl p-6 shadow-xs hover:border-brand hover:shadow-xl transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <span className="absolute right-4 top-2 text-4xl font-mono font-black text-slate-100 group-hover:text-brand/10 transition-colors pointer-events-none select-none">02</span>
                  
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-3 shadow-xs">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <h4 className="text-txt-strong font-bold text-base leading-snug">Engineering Quality Standards</h4>
                    <p className="text-xs text-txt-muted mt-1.5 leading-relaxed">Consistent execution is our recognition standard. From digital engineering and SCADA automation to database integrations, we deliver quality code templates.</p>
                  </div>

                  <div className="pt-3.5 border-t border-line/80 mt-4 flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Clean Code</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Certified Execution</span>
                  </div>
                </div>

                {/* Card 03 */}
                <div className="group bg-white border border-line rounded-2xl p-6 shadow-xs hover:border-brand hover:shadow-xl transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <span className="absolute right-4 top-2 text-4xl font-mono font-black text-slate-100 group-hover:text-brand/10 transition-colors pointer-events-none select-none">03</span>
                  
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-3 shadow-xs">
                      <Lightbulb className="w-5 h-5" />
                    </div>
                    <h4 className="text-txt-strong font-bold text-base leading-snug">Continuous Innovation Cycles</h4>
                    <p className="text-xs text-txt-muted mt-1.5 leading-relaxed">Technology is constantly changing. We invest in developer training, edge technology testing, and SCADA laboratory equipment to deliver top-tier platforms.</p>
                  </div>

                  <div className="pt-3.5 border-t border-line/80 mt-4 flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Edge ML Labs</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">SCADA Lab R&D</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ 4. FUTURE MILESTONES (2-Column Split Feature Grid - Zero Blank Space) ============ */}
        <section className="relative overflow-hidden bg-mesh-glow-light bg-tech-grid py-16 md:py-24 border-b border-line">
          {/* Background Watermark Typography */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[150px] font-black text-slate-100/70 select-none pointer-events-none z-0 font-mono tracking-tighter hidden lg:block">
            MILESTONES
          </div>

          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            
            {/* Centered Header */}
            <div className="text-center max-w-[720px] mx-auto mb-12">
              <span className="text-brand text-xs font-bold uppercase tracking-widest block font-mono">Future Targets</span>
              <h3 className="text-txt-strong mt-2 tracking-tight font-extrabold text-3xl md:text-4xl">Future Recognition Milestones</h3>
              <p className="text-body-sm text-txt-muted mt-2 leading-relaxed">DHGsoft targets key operational, certification, and case study milestones to prove engineering resilience.</p>
              <div className="w-12 h-1 bg-brand rounded-full mt-4 mx-auto" />
            </div>

            {/* 2-Column Split Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column: Milestones Photo Card with Glassmorphic Overlay (lg:col-span-5) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                <div className="relative rounded-[24px] overflow-hidden border border-line shadow-lg aspect-[16/11] w-full group">
                  <Image src="/images/about/recognition-milestones.jpg" alt="Recognition milestones banner" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(min-width:1024px) 35vw, 100vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md border border-line px-3 py-1 rounded-lg text-[10px] font-bold text-brand shadow-xs">
                    Scalable Operations
                  </div>
                  <div className="absolute bottom-3 right-3 bg-slate-900/90 text-white backdrop-blur-md border border-slate-700 px-3 py-1 rounded-lg text-[10px] font-bold shadow-xs">
                    Engineering Growth
                  </div>
                </div>

                {/* Glassmorphic Description Card */}
                <div className="bg-white border border-line rounded-[24px] p-5 shadow-md space-y-3 text-left">
                  <span className="text-xs font-mono font-bold text-brand uppercase tracking-wider block">Strategic Focus Area</span>
                  <p className="text-xs text-txt-muted leading-relaxed">
                    By expanding our technician network and partnering with international OEM leaders, DHGsoft accelerates plant-floor digital integrations with zero downtime risks.
                  </p>
                </div>
              </div>

              {/* Right Column: 4 Capability Cards (lg:col-span-7) */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Card 01 */}
                <div className="group bg-white border border-line rounded-2xl p-5 shadow-xs hover:border-brand hover:shadow-xl transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-3 shadow-xs">
                      <FileText className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="text-txt-strong font-bold text-base leading-snug">Customer Success Stories</h4>
                    <p className="text-xs text-txt-muted mt-1.5 leading-relaxed">Showcasing real operational gains and quantitative case study results across plant integrations.</p>
                  </div>

                  <div className="pt-3.5 border-t border-line/80 mt-4 flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">OEE Analytics</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">SCADA Studies</span>
                  </div>
                </div>

                {/* Card 02 */}
                <div className="group bg-white border border-line rounded-2xl p-5 shadow-xs hover:border-brand hover:shadow-xl transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-3 shadow-xs">
                      <Award className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="text-txt-strong font-bold text-base leading-snug">Industry Leadership</h4>
                    <p className="text-xs text-txt-muted mt-1.5 leading-relaxed">Validating our code frameworks, batch templates, and system integration competencies globally.</p>
                  </div>

                  <div className="pt-3.5 border-t border-line/80 mt-4 flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">OEM Endorsement</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Industry Awards</span>
                  </div>
                </div>

                {/* Card 03 */}
                <div className="group bg-white border border-line rounded-2xl p-5 shadow-xs hover:border-brand hover:shadow-xl transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-3 shadow-xs">
                      <ShieldCheck className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="text-txt-strong font-bold text-base leading-snug">Engineering Credentials</h4>
                    <p className="text-xs text-txt-muted mt-1.5 leading-relaxed">Expanding our certified network of ISA system integrators and functional safety credentials.</p>
                  </div>

                  <div className="pt-3.5 border-t border-line/80 mt-4 flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">ISA-95 Certified</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Safety Integrator</span>
                  </div>
                </div>

                {/* Card 04 */}
                <div className="group bg-white border border-line rounded-2xl p-5 shadow-xs hover:border-brand hover:shadow-xl transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-3 shadow-xs">
                      <MapPin className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="text-txt-strong font-bold text-base leading-snug">Strategic Expansion</h4>
                    <p className="text-xs text-txt-muted mt-1.5 leading-relaxed">Expanding our technical delivery centers to support regional manufacturing hubs.</p>
                  </div>

                  <div className="pt-3.5 border-t border-line/80 mt-4 flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Global Delivery</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Local Hubs</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ 5. OUR COMMITMENT (Clean Executive Light Theme) ============ */}
        <section className="relative overflow-hidden bg-mesh-glow-light bg-dot-matrix py-16 md:py-24 border-b border-line">
          {/* Background Watermark Typography */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[180px] font-black text-slate-200/60 select-none pointer-events-none z-0 font-mono tracking-tighter hidden lg:block">
            COMMITMENT
          </div>

          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            <div className="max-w-[960px] mx-auto text-center space-y-8">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-mono font-bold uppercase tracking-widest">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Our Corporate Commitment</span>
              </div>

              <h3 className="text-txt-strong tracking-tight font-extrabold leading-snug text-3xl md:text-4xl lg:text-5xl" style={{ fontSize: 'clamp(2rem, 1.5rem + 1.2vw, 2.75rem)' }}>
                Recognition is not our destination—excellence is our standard.
              </h3>

              <p className="text-txt-muted text-body-sm leading-relaxed max-w-[800px] mx-auto font-medium">
                Continuous improvement, verified SLA delivery logs, software code reviews, and customer satisfaction remain the true metrics of DHGsoft's industrial partnership success.
              </p>

              {/* 3 Guarantee Badges (White Glassmorphic Cards) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 text-left">
                <div className="bg-white border border-line rounded-2xl p-4 flex items-center gap-3 shadow-xs hover:border-brand/40 transition-all">
                  <CheckCircle className="w-5 h-5 text-brand shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Annual ISO Quality Audits</span>
                </div>
                <div className="bg-white border border-line rounded-2xl p-4 flex items-center gap-3 shadow-xs hover:border-brand/40 transition-all">
                  <CheckCircle className="w-5 h-5 text-brand shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Transparent Delivery Records</span>
                </div>
                <div className="bg-white border border-line rounded-2xl p-4 flex items-center gap-3 shadow-xs hover:border-brand/40 transition-all">
                  <CheckCircle className="w-5 h-5 text-brand shrink-0" />
                  <span className="text-xs font-bold text-slate-800">100% Engineering SLA Compliance</span>
                </div>
              </div>

            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ 6. CLOSING STATEMENT (Cinematic Glow & Dual CTA Buttons) ============ */}
        <section className="relative overflow-hidden text-center min-h-[85vh] md:min-h-[90vh] flex items-center py-20 md:py-28 bg-mesh-glow-dark text-white" id="closing">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/images/about/recognition-accomplishments.jpg"
              alt="DHGsoft recognition achievements closing"
              fill
              className="object-cover opacity-40"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full opacity-[0.20]"
              style={{
                background: 'radial-gradient(circle, rgb(180 18 63) 0%, transparent 70%)',
                filter: 'blur(100px)',
              }}
            />
          </div>
          <div className="relative z-10 max-w-site mx-auto px-gutter md:px-gutter-md w-full">
            <div className="max-w-[840px] mx-auto space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-hot/15 border border-brand-hot/30 text-brand-hot text-xs font-mono font-bold uppercase tracking-widest mx-auto">
                <span>Closing Statement</span>
              </div>

              <h2 className="text-white mt-4 font-black tracking-tight leading-tight text-headline-xl">
                Every Achievement Begins with a Customer Challenge
              </h2>

              <p className="text-slate-300 text-body-md leading-relaxed max-w-[720px] mx-auto font-medium">
                Together with our customers, technology partners, and digital engineering teams, DHGsoft continues developing solutions that drive measurable automation value.
              </p>

              {/* Feature Pill Tags */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium border border-white/10">CSAT Excellence</span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium border border-white/10">ISO Verified</span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium border border-white/10">Enterprise Scale</span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-brand font-semibold hover:-translate-y-0.5 hover:shadow-xl transition-all cursor-pointer text-base"
                >
                  Start a Conversation <ArrowRight className="w-4 h-4" />
                </button>
                <Link href="/about" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors text-base">
                  Back to About Overview
                </Link>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        showToast={() => {}}
      />
    </div>
  );
}
