"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Cpu, Factory, Network, RefreshCw, Sliders, Target, Wrench, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

export default function AboutWhydhgsoftPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased font-sans flex flex-col selection:bg-brand selection:text-white">
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="flex-grow">
        {/* ============ 1. PREMIUM HERO (Full Screen Desktop Height) ============ */}
        <section className="relative min-h-screen flex items-center pt-24 pb-16 text-left overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/about/why-hero.jpg" 
              alt="Why DHGsoft banner" 
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
              <span className="text-white font-medium">Why DHGsoft</span>
            </nav>

            <div className="text-brand-hot text-[11px] font-extrabold uppercase tracking-widest font-mono">Why DHGsoft</div>
            <h1 className="text-white mt-4 max-w-[900px] font-extrabold tracking-tight leading-[1.05] text-headline-xl">
              Why Organizations Choose DHGsoft
            </h1>
            <p className="text-slate-300 text-body-md mt-6 max-w-[760px] leading-relaxed font-medium">
              Industrial transformation requires more than technology implementation. It requires an engineering partner capable of understanding operations, integrating complex systems, and delivering measurable business outcomes.
            </p>

            {/* Floating Hero Accent Badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                <CheckCircle className="w-4 h-4 text-brand-hot" />
                <span>Engineering-First Transformation</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                <CheckCircle className="w-4 h-4 text-brand-hot" />
                <span>Vendor-Agnostic Integration</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                <CheckCircle className="w-4 h-4 text-brand-hot" />
                <span>ISA-95 & ISA-88 Standards</span>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ 2. CORE STRENGTHS (2-Column Split Feature Grid - Zero Blank Space) ============ */}
        <section className="relative overflow-hidden bg-mesh-glow-light bg-tech-grid py-16 md:py-24 border-b border-line">
          {/* Background Watermark Typography */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[150px] font-black text-slate-100/70 select-none pointer-events-none z-0 font-mono tracking-tighter hidden lg:block">
            STRENGTHS
          </div>

          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            
            {/* Centered Header */}
            <div className="text-center max-w-[720px] mx-auto mb-12">
              <span className="text-brand text-xs font-bold uppercase tracking-widest block font-mono">Core Strengths</span>
              <h3 className="text-txt-strong mt-2 tracking-tight font-extrabold text-3xl md:text-4xl">Engineered for Industrial Scale</h3>
              <p className="text-body-sm text-txt-muted mt-2 leading-relaxed">Our core competencies combine deep operational domain knowledge with cutting-edge digital integration capabilities.</p>
              <div className="w-12 h-1 bg-brand rounded-full mt-4 mx-auto" />
            </div>

            {/* 2-Column Split Feature Grid Layout - Zero Blank Space */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column: Sticky Hero Feature Showcase Card (lg:col-span-5) */}
              <div className="lg:col-span-5 flex flex-col">
                <div className="bg-white border border-line rounded-[24px] p-6 shadow-md flex flex-col justify-between h-full relative overflow-hidden group">
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/10] w-full mb-6 border border-line shadow-xs">
                    <Image src="/images/about/why-strengths.jpg" alt="Core Strengths dynamic setup" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(min-width:1024px) 35vw, 100vw" />
                    <div className="absolute inset-0 bg-ink/20" />
                    
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md border border-line px-3 py-1 rounded-lg text-[10px] font-bold text-brand shadow-xs">
                      6 Core Competencies
                    </div>
                  </div>

                  <div className="space-y-3 text-left">
                    <h4 className="text-txt-strong font-extrabold text-xl leading-snug">
                      End-to-End Lifecycle Execution
                    </h4>
                    <p className="text-xs text-txt-muted leading-relaxed">
                      We combine deep plant-floor operational knowledge with modern enterprise IT systems, enabling industrial leaders to achieve connected intelligence across their global facilities.
                    </p>
                  </div>

                  <div className="pt-5 border-t border-line/80 mt-6 space-y-2.5">
                    <div className="flex items-center gap-2.5 text-xs text-txt-strong font-semibold">
                      <CheckCircle className="w-4 h-4 text-brand shrink-0" />
                      <span>100% Turnkey Engineering & Strategy Support</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-txt-strong font-semibold">
                      <CheckCircle className="w-4 h-4 text-brand shrink-0" />
                      <span>Multi-Vendor Agnostic SCADA/MES Architecture</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-txt-strong font-semibold">
                      <CheckCircle className="w-4 h-4 text-brand shrink-0" />
                      <span>Zero Unplanned Downtime Operational Goal</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: 6 High-Density Strength Cards (lg:col-span-7) */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Strength 01 */}
                <div className="group bg-white border border-line rounded-2xl p-5 shadow-xs hover:border-brand hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <span className="absolute right-4 top-2 text-4xl font-mono font-black text-slate-100 group-hover:text-brand/10 transition-colors pointer-events-none select-none">01</span>
                  
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-3 shadow-xs">
                      <RefreshCw className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="text-txt-strong font-bold text-base leading-snug">End-to-End Expertise</h4>
                    <p className="text-xs text-txt-muted mt-1.5 leading-relaxed">From strategy and consulting to engineering, implementation, optimization, and managed services.</p>
                  </div>

                  <div className="pt-3.5 border-t border-line/80 mt-4 flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Strategy to Ops</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Full Lifecycle</span>
                  </div>
                </div>

                {/* Strength 02 */}
                <div className="group bg-white border border-line rounded-2xl p-5 shadow-xs hover:border-brand hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <span className="absolute right-4 top-2 text-4xl font-mono font-black text-slate-100 group-hover:text-brand/10 transition-colors pointer-events-none select-none">02</span>
                  
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-3 shadow-xs">
                      <Factory className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="text-txt-strong font-bold text-base leading-snug">Industrial Domain Knowledge</h4>
                    <p className="text-xs text-txt-muted mt-1.5 leading-relaxed">Our teams understand complex plant environments, combining operational knowledge with modern IT/OT technologies.</p>
                  </div>

                  <div className="pt-3.5 border-t border-line/80 mt-4 flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">OT/IT Systems</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Shop Floor to Cloud</span>
                  </div>
                </div>

                {/* Strength 03 */}
                <div className="group bg-white border border-line rounded-2xl p-5 shadow-xs hover:border-brand hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <span className="absolute right-4 top-2 text-4xl font-mono font-black text-slate-100 group-hover:text-brand/10 transition-colors pointer-events-none select-none">03</span>
                  
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-3 shadow-xs">
                      <Network className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="text-txt-strong font-bold text-base leading-snug">Connected Intelligence</h4>
                    <p className="text-xs text-txt-muted mt-1.5 leading-relaxed">We transform fragmented operational data into connected intelligence that supports real-time decision-making.</p>
                  </div>

                  <div className="pt-3.5 border-t border-line/80 mt-4 flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">SCADA Analytics</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Real-Time MES</span>
                  </div>
                </div>

                {/* Strength 04 */}
                <div className="group bg-white border border-line rounded-2xl p-5 shadow-xs hover:border-brand hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <span className="absolute right-4 top-2 text-4xl font-mono font-black text-slate-100 group-hover:text-brand/10 transition-colors pointer-events-none select-none">04</span>
                  
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-3 shadow-xs">
                      <Sliders className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="text-txt-strong font-bold text-base leading-snug">Technology Agnostic</h4>
                    <p className="text-xs text-txt-muted mt-1.5 leading-relaxed">We recommend and implement architectures based on your operational needs rather than vendor lock-in.</p>
                  </div>

                  <div className="pt-3.5 border-t border-line/80 mt-4 flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Multi-Vendor SCADA</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Future-Ready Arch</span>
                  </div>
                </div>

                {/* Strength 05 */}
                <div className="group bg-white border border-line rounded-2xl p-5 shadow-xs hover:border-brand hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <span className="absolute right-4 top-2 text-4xl font-mono font-black text-slate-100 group-hover:text-brand/10 transition-colors pointer-events-none select-none">05</span>
                  
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-3 shadow-xs">
                      <Target className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="text-txt-strong font-bold text-base leading-snug">Customer-Centric Delivery</h4>
                    <p className="text-xs text-txt-muted mt-1.5 leading-relaxed">Every engagement begins with understanding your strategic goals, ensuring solutions deliver measurable ROI.</p>
                  </div>

                  <div className="pt-3.5 border-t border-line/80 mt-4 flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Measurable ROI</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Client Alignment</span>
                  </div>
                </div>

                {/* Strength 06 */}
                <div className="group bg-white border border-line rounded-2xl p-5 shadow-xs hover:border-brand hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <span className="absolute right-4 top-2 text-4xl font-mono font-black text-slate-100 group-hover:text-brand/10 transition-colors pointer-events-none select-none">06</span>
                  
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-3 shadow-xs">
                      <Wrench className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="text-txt-strong font-bold text-base leading-snug">Engineering-First Approach</h4>
                    <p className="text-xs text-txt-muted mt-1.5 leading-relaxed">Unlike traditional IT firms, DHGsoft approaches digital transformation through engineering rigor, safety, and scalability.</p>
                  </div>

                  <div className="pt-3.5 border-t border-line/80 mt-4 flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Zero-Defect Code</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">ISA-95 Standards</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ 3. WHY IT MATTERS (Spacious Tall Section) ============ */}
        <section className="relative overflow-hidden bg-mesh-glow-light bg-dot-matrix min-h-[85vh] md:min-h-[90vh] flex items-center py-20 md:py-28 border-b border-line">
          {/* Background Watermark Typography */}
          <div className="absolute left-0 bottom-6 text-[130px] font-black text-slate-200/50 select-none pointer-events-none z-0 font-mono tracking-tighter hidden lg:block">
            INTEGRATION
          </div>

          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              
              {/* Left Column: Text & 4-Card Ecosystem Grid */}
              <div className="lg:col-span-7 text-left order-2 lg:order-1 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand/15 text-brand flex items-center justify-center shrink-0 shadow-sm">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span className="text-brand text-xs font-bold uppercase tracking-widest font-mono">Why It Matters</span>
                </div>
                
                <h3 className="text-txt-strong mt-2 tracking-tight font-extrabold leading-[1.1] text-3xl md:text-4xl lg:text-5xl" style={{ fontSize: 'clamp(2rem, 1.6rem + 1vw, 2.5rem)' }}>
                  Connecting operations, data, enterprise systems, and intelligent technologies
                </h3>
                <p className="text-body-sm text-txt-muted leading-relaxed">
                  Organizations choose DHGsoft because they need more than software. They need a trusted engineering partner capable of connecting operations, plant-floor SCADA, enterprise systems, and AI analytics into one integrated ecosystem.
                </p>

                {/* 4-Card Connected Ecosystem Grid - Fills all space cleanly */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-line/80">
                  <div className="bg-white/90 border border-line rounded-xl p-3.5 shadow-sm hover:border-brand/40 transition-all flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-txt-strong font-bold text-xs block">Shop-Floor SCADA</span>
                      <span className="text-[11px] text-txt-muted block">PLC & Field Instrumentation</span>
                    </div>
                  </div>

                  <div className="bg-white/90 border border-line rounded-xl p-3.5 shadow-sm hover:border-brand/40 transition-all flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                      <Network className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-txt-strong font-bold text-xs block">Enterprise MES & ERP</span>
                      <span className="text-[11px] text-txt-muted block">Seamless Data Pipelines</span>
                    </div>
                  </div>

                  <div className="bg-white/90 border border-line rounded-xl p-3.5 shadow-sm hover:border-brand/40 transition-all flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                      <Sliders className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-txt-strong font-bold text-xs block">Industrial Security</span>
                      <span className="text-[11px] text-txt-muted block">ISA/IEC 62443 Compliance</span>
                    </div>
                  </div>

                  <div className="bg-white/90 border border-line rounded-xl p-3.5 shadow-sm hover:border-brand/40 transition-all flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-txt-strong font-bold text-xs block">Edge-to-Cloud AI</span>
                      <span className="text-[11px] text-txt-muted block">Predictive Analytics</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Photo Frame with Floating Badges */}
              <div className="lg:col-span-5 order-1 lg:order-2 relative">
                {/* Floating Top Badge */}
                <div className="absolute -top-4 -left-3 bg-white border border-line shadow-md px-3.5 py-2 rounded-xl text-[11px] font-bold text-brand flex items-center gap-2 z-20">
                  <CheckCircle className="w-4 h-4 text-brand" />
                  <span>100% System Integration</span>
                </div>

                {/* Floating Bottom Badge */}
                <div className="absolute -bottom-4 -right-3 bg-slate-900 text-white shadow-md px-3.5 py-2 rounded-xl text-[11px] font-bold flex items-center gap-2 z-20 border border-slate-700">
                  <Target className="w-4 h-4 text-brand-hot" />
                  <span>ISA-95 Architecture</span>
                </div>

                <div className="relative rounded-[24px] overflow-hidden border border-line shadow-lg aspect-[4/5] max-h-[420px] w-full group">
                  <Image src="/images/about/why-matters.jpg" alt="Why It Matters photography" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(min-width:1024px) 35vw, 100vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ 4. COMMITMENT BAND (High-Impact Showcase Panel - Spacious Height) ============ */}
        <section className="relative overflow-hidden bg-slate-950 text-white min-h-[55vh] md:min-h-[65vh] flex items-center py-20 md:py-28 border-b border-slate-800">
          <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
          <div 
            className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] rounded-full opacity-20 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgb(180 18 63) 0%, transparent 70%)',
              filter: 'blur(90px)',
            }}
          />

          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Title & 3 Guarantee Badges */}
              <div className="lg:col-span-5 text-left space-y-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-brand/20 text-brand-hot flex items-center justify-center shrink-0 border border-brand/30">
                    <Target className="w-4 h-4" />
                  </div>
                  <span className="text-brand-hot text-xs font-bold uppercase tracking-widest font-mono">Our Commitment</span>
                </div>
                
                <h3 className="text-white font-extrabold text-2xl md:text-3xl lg:text-4xl tracking-tight leading-snug">
                  Uncompromising Excellence in Industrial Execution
                </h3>

                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
                    <CheckCircle className="w-4 h-4 text-brand-hot shrink-0" />
                    <span className="text-xs font-semibold text-slate-200">100% On-Time Turnkey Commissioning</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
                    <CheckCircle className="w-4 h-4 text-brand-hot shrink-0" />
                    <span className="text-xs font-semibold text-slate-200">Zero Unplanned Downtime Operational Goal</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
                    <CheckCircle className="w-4 h-4 text-brand-hot shrink-0" />
                    <span className="text-xs font-semibold text-slate-200">Lifetime Technical Engineering Support</span>
                  </div>
                </div>
              </div>

              {/* Right Column: High-Impact Blockquote Box */}
              <div className="lg:col-span-7">
                <div className="bg-slate-900/90 border border-slate-800 rounded-[24px] p-8 shadow-2xl relative overflow-hidden text-left">
                  <div className="absolute -right-4 -bottom-4 text-[120px] font-black text-white/5 pointer-events-none select-none font-serif leading-none">“</div>
                  <p className="text-slate-200 font-serif italic text-lg md:text-xl lg:text-2xl leading-relaxed relative z-10">
                    "We bring deep industry expertise, technology excellence, and a customer-centric delivery model to every engagement."
                  </p>
                  <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between relative z-10">
                    <span className="text-xs font-mono font-bold text-brand-hot uppercase tracking-wider">DHGsoft Value Guarantee</span>
                    <span className="text-xs text-slate-400">ISA-95 Ecosystem</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ 5. CLOSING STATEMENT (Spacious Tall Section) ============ */}
        <section className="relative overflow-hidden text-center min-h-[85vh] md:min-h-[90vh] flex items-center py-20 md:py-28 bg-mesh-glow-dark" id="closing">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/images/about/why-hero.jpg"
              alt="DHGsoft industrial factory facilities closing"
              fill
              className="object-cover opacity-45"
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

          <div className="relative z-10 max-w-site mx-auto px-gutter md:px-gutter-md w-full flex flex-col items-center">
            <div className="max-w-3xl space-y-6 flex flex-col items-center">
              
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-brand-hot" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-hot font-mono">
                  Closing Statement
                </span>
                <div className="h-px w-8 bg-brand-hot" />
              </div>

              <h2 className="text-white text-4xl sm:text-[3.5rem] lg:text-[4.2rem] font-black tracking-tight leading-[1.05] max-w-2xl text-center">
                Connected Intelligence,
                <br />
                <span className="text-gradient-brand">Trusted Partnerships</span>
              </h2>

              <p className="text-slate-300 max-w-xl leading-relaxed text-body-md font-medium text-center">
                Engineering expertise. Connected intelligence. Trusted partnerships. These principles define why organizations continue to choose DHGsoft as their Industrial Digital Transformation partner.
              </p>

              <div className="pt-4 flex flex-wrap gap-4 items-center justify-center w-full">
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand text-white font-semibold hover:bg-brand-deep hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/25 transition-all duration-300 cursor-pointer text-base"
                >
                  Start a Conversation
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-300 text-base"
                >
                  Back to About
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
