"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Globe, Leaf, ShieldCheck, Target, Users, Wrench, Zap, Cpu, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

export default function AboutSustainabilityesgPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased font-sans flex flex-col selection:bg-brand selection:text-white">
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="flex-grow">
        {/* ============ 1. PREMIUM HERO (Full-bleed Background Image with Dark Gradient overlay & Desktop Height) ============ */}
        <section className="relative min-h-screen flex items-center pt-24 pb-16 text-left overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/about/sustainability-hero.jpg" 
              alt="Sustainability & ESG banner" 
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
              <span className="text-white font-medium">Sustainability & ESG</span>
            </nav>
            
            <div className="text-brand-hot text-[11px] font-extrabold uppercase tracking-widest font-mono">Sustainability & ESG</div>
            
            <h1 className="text-white mt-4 max-w-[900px] font-extrabold tracking-tight leading-[1.05] text-headline-xl">
              Engineering a More Sustainable Industrial Future
            </h1>
            
            <p className="text-slate-300 text-body-md mt-6 max-w-[760px] leading-relaxed font-medium">
              Sustainability is no longer an optional initiative—it is an essential part of modern industrial engineering. DHGsoft empowers organizations to optimize energy utilization, minimize emissions, and achieve long-term resilience through intelligent digital transformation.
            </p>

            {/* Floating Hero Accent Badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                <CheckCircle className="w-4 h-4 text-brand-hot" />
                <span>Net-Zero Industrial Ops</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                <CheckCircle className="w-4 h-4 text-brand-hot" />
                <span>ISO 50001 Energy Standards</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                <CheckCircle className="w-4 h-4 text-brand-hot" />
                <span>Circular Manufacturing</span>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ 2. OVERVIEW (Sustainable Engineering Foundation Grid - High Density & Zero Blank Space) ============ */}
        <section className="relative overflow-hidden bg-mesh-glow-light bg-dot-matrix py-16 md:py-24 border-b border-line">
          {/* Background Watermark Typography */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[150px] font-black text-slate-100/70 select-none pointer-events-none z-0 font-mono tracking-tighter hidden lg:block">
            SUSTAINABILITY
          </div>

          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              
              {/* Left Column: Text, Metrics & 4-Card Grid (lg:col-span-7) */}
              <div className="lg:col-span-7 text-left flex flex-col justify-between space-y-6">
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand/15 text-brand flex items-center justify-center shrink-0 shadow-sm">
                      <Globe className="w-5 h-5" />
                    </div>
                    <span className="text-brand text-xs font-bold uppercase tracking-widest font-mono">Overview & Strategy</span>
                  </div>
                  
                  <h3 className="text-txt-strong tracking-tight font-extrabold leading-[1.1] text-3xl md:text-4xl lg:text-5xl" style={{ fontSize: 'clamp(2rem, 1.6rem + 1vw, 2.5rem)' }}>
                    Expectations are rising to reduce environmental impact.
                  </h3>
                  
                  <p className="text-body-sm text-txt-muted leading-relaxed">
                    Industrial organizations face increasing expectations from regulators, investors, and communities to improve efficiency, reduce carbon footprints, and operate responsibly. Through engineering innovation, intelligent automation, and data-driven decision-making, DHGsoft helps customers achieve operational excellence while advancing ESG goals.
                  </p>
                </div>

                {/* 3 High-Impact Key Metric Chips */}
                <div className="flex flex-wrap gap-2.5 pt-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-line shadow-xs text-xs font-bold text-slate-800">
                    <Zap className="w-3.5 h-3.5 text-brand" />
                    <span>30% Energy Efficiency Lift</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-line shadow-xs text-xs font-bold text-slate-800">
                    <CheckCircle className="w-3.5 h-3.5 text-brand" />
                    <span>100% ESG Governance Standards</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-line shadow-xs text-xs font-bold text-slate-800">
                    <Target className="w-3.5 h-3.5 text-brand-hot" />
                    <span>Zero Scrap & Resource Waste</span>
                  </div>
                </div>

                {/* 4-Card Connected Sustainability Focus Grid with Takeaway Pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-line/80">
                  <div className="bg-white/90 border border-line rounded-xl p-4 shadow-sm hover:border-brand/40 transition-all flex flex-col justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                        <Leaf className="w-4 h-4" />
                      </div>
                      <span className="text-txt-strong font-bold text-xs">Energy Optimization</span>
                    </div>
                    <span className="text-[11px] text-txt-muted mt-2 block">Intelligent power monitoring & HVAC control automation.</span>
                    <div className="mt-3 pt-2 border-t border-line/60 flex flex-wrap gap-1">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">ISO 50001</span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Peak Shaving</span>
                    </div>
                  </div>

                  <div className="bg-white/90 border border-line rounded-xl p-4 shadow-sm hover:border-brand/40 transition-all flex flex-col justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <span className="text-txt-strong font-bold text-xs">Resource Conservation</span>
                    </div>
                    <span className="text-[11px] text-txt-muted mt-2 block">Closed-loop water treatment and raw material tracking.</span>
                    <div className="mt-3 pt-2 border-t border-line/60 flex flex-wrap gap-1">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Water Recycling</span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Material Loops</span>
                    </div>
                  </div>

                  <div className="bg-white/90 border border-line rounded-xl p-4 shadow-sm hover:border-brand/40 transition-all flex flex-col justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                        <Users className="w-4 h-4" />
                      </div>
                      <span className="text-txt-strong font-bold text-xs">Workforce Safety</span>
                    </div>
                    <span className="text-[11px] text-txt-muted mt-2 block">Ergonomic shop-floor automation and zero-harm workplace safety.</span>
                    <div className="mt-3 pt-2 border-t border-line/60 flex flex-wrap gap-1">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Zero-Harm OT</span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Safety Interlocks</span>
                    </div>
                  </div>

                  <div className="bg-white/90 border border-line rounded-xl p-4 shadow-sm hover:border-brand/40 transition-all flex flex-col justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <span className="text-txt-strong font-bold text-xs">Transparent Governance</span>
                    </div>
                    <span className="text-[11px] text-txt-muted mt-2 block">Auditable ESG reporting telemetry & regulatory compliance.</span>
                    <div className="mt-3 pt-2 border-t border-line/60 flex flex-wrap gap-1">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">ESG Telemetry</span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Audit Trails</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Stacked Interactive Showcase Frame (lg:col-span-5) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                
                {/* Photo Card with Floating Badges */}
                <div className="relative rounded-[24px] overflow-hidden border border-line shadow-lg aspect-[16/11] w-full group">
                  <Image src="/images/about/sustainability-overview.jpg" alt="Sustainability overview photography" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(min-width:1024px) 35vw, 100vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md border border-line px-3 py-1 rounded-lg text-[10px] font-bold text-brand shadow-xs">
                    Green OT Engineering
                  </div>
                  <div className="absolute bottom-3 right-3 bg-slate-900/90 text-white backdrop-blur-md border border-slate-700 px-3 py-1 rounded-lg text-[10px] font-bold shadow-xs">
                    Decarbonization First
                  </div>
                </div>

                {/* Glassmorphic Value Impact Card (Fills bottom space) */}
                <div className="bg-white border border-line rounded-[24px] p-5 shadow-md space-y-3 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-brand uppercase tracking-wider">Our ESG Principles</span>
                    <span className="px-2 py-0.5 rounded-md bg-brand/10 text-brand text-[10px] font-bold font-mono">GHG Scope 1-3</span>
                  </div>

                  <div className="space-y-2 pt-1 text-xs text-txt-strong">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-brand shrink-0" />
                      <span>Data-Driven Energy & Emissions Monitoring</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-brand shrink-0" />
                      <span>Resource-Efficient Machine & Process Automation</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-brand shrink-0" />
                      <span>Ethical Governance & Inclusive Workforce Standards</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ 3. OUR ESG PILLARS (4-Card High Density Grid - Zero Blank Space) ============ */}
        <section className="relative overflow-hidden bg-mesh-glow-light bg-tech-grid py-16 md:py-24 border-b border-line">
          {/* Background Watermark Typography */}
          <div className="absolute left-0 bottom-6 text-[130px] font-black text-slate-200/50 select-none pointer-events-none z-0 font-mono tracking-tighter hidden lg:block">
            ESG PILLARS
          </div>

          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            
            {/* Centered Header */}
            <div className="text-center max-w-[720px] mx-auto mb-14">
              <span className="text-brand text-xs font-bold uppercase tracking-widest block font-mono">Core Framework</span>
              <h3 className="text-txt-strong mt-2 tracking-tight font-extrabold text-3xl md:text-4xl">Four Pillars of Sustainable Engineering</h3>
              <p className="text-body-sm text-txt-muted mt-2 leading-relaxed">Integrating environmental stewardship, social responsibility, governance, and green engineering across every project.</p>
              <div className="w-12 h-1 bg-brand rounded-full mt-4 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 01 */}
              <div className="group bg-white border border-line rounded-2xl p-6 shadow-xs hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[4px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <span className="absolute right-4 top-2 text-5xl font-mono font-black text-slate-100 group-hover:text-brand/10 transition-colors pointer-events-none select-none">01</span>
                
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-4 shadow-xs">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <h4 className="text-txt-strong font-bold text-lg leading-snug">Environmental Responsibility</h4>
                  <p className="text-xs text-txt-muted mt-2 leading-relaxed">Digital technologies enable plants to run efficiently while reducing carbon footprint, energy waste, and operational emissions.</p>
                </div>

                <div className="pt-4 border-t border-line/80 mt-5 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">Energy Audit</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">Carbon Tracking</span>
                </div>
              </div>

              {/* Card 02 */}
              <div className="group bg-white border border-line rounded-2xl p-6 shadow-xs hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[4px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <span className="absolute right-4 top-2 text-5xl font-mono font-black text-slate-100 group-hover:text-brand/10 transition-colors pointer-events-none select-none">02</span>
                
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-4 shadow-xs">
                    <Users className="w-5 h-5" />
                  </div>
                  <h4 className="text-txt-strong font-bold text-lg leading-snug">Social Responsibility</h4>
                  <p className="text-xs text-txt-muted mt-2 leading-relaxed">Promoting workforce safety, continuous technical training, diversity, and inclusive engineering innovation across teams.</p>
                </div>

                <div className="pt-4 border-t border-line/80 mt-5 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">Zero Harm OT</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">Workforce Safety</span>
                </div>
              </div>

              {/* Card 03 */}
              <div className="group bg-white border border-line rounded-2xl p-6 shadow-xs hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[4px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <span className="absolute right-4 top-2 text-5xl font-mono font-black text-slate-100 group-hover:text-brand/10 transition-colors pointer-events-none select-none">03</span>
                
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-4 shadow-xs">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="text-txt-strong font-bold text-lg leading-snug">Corporate Governance</h4>
                  <p className="text-xs text-txt-muted mt-2 leading-relaxed">Upholding strict business ethics, transparent data decision-making, and customer-focused compliance standards.</p>
                </div>

                <div className="pt-4 border-t border-line/80 mt-5 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">Ethical Standards</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">Audit Compliance</span>
                </div>
              </div>

              {/* Card 04 */}
              <div className="group bg-white border border-line rounded-2xl p-6 shadow-xs hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[4px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <span className="absolute right-4 top-2 text-5xl font-mono font-black text-slate-100 group-hover:text-brand/10 transition-colors pointer-events-none select-none">04</span>
                
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-4 shadow-xs">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <h4 className="text-txt-strong font-bold text-lg leading-snug">Sustainable Engineering</h4>
                  <p className="text-xs text-txt-muted mt-2 leading-relaxed">Designing long-life industrial systems that optimize material usage, extend asset lifespan, and lower total lifecycle waste.</p>
                </div>

                <div className="pt-4 border-t border-line/80 mt-5 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">Asset Lifespan</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">Zero Scrap</span>
                </div>
              </div>

            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ 4. FULL-BLEED DECARBONIZATION SHOWCASE BANNER (High-Contrast Dark Showcase) ============ */}
        <section className="relative bg-slate-950 text-white overflow-hidden py-20 md:py-28 border-b border-line">
          <div className="absolute inset-0 z-0 opacity-25">
            <Image src="/images/about/sustainability-esg.jpg" alt="Sustainable Future background graphic" fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
          </div>

          {/* Background Watermark Typography */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[150px] font-black text-slate-800/20 select-none pointer-events-none z-0 font-mono tracking-tighter hidden lg:block">
            DECARBONIZE
          </div>

          <div className="relative z-10 max-w-site mx-auto px-gutter md:px-gutter-md text-left w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Side: Quote Box */}
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-hot/15 border border-brand-hot/30 text-brand-hot text-xs font-mono font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5" />
                  <span>Decarbonization Vision</span>
                </div>
                
                <h2 className="text-white font-extrabold tracking-tight leading-snug text-2xl md:text-3xl lg:text-4xl" style={{ fontSize: 'clamp(1.75rem, 1.4rem + 1vw, 2.5rem)' }}>
                  "We believe engineering is not just about automation—it is about building processes that are resource-efficient, low-carbon, and highly resilient for the next century of industry."
                </h2>
              </div>

              {/* Right Side: 3 Impact Metrics Badges */}
              <div className="lg:col-span-4 space-y-3">
                <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex items-center gap-4 shadow-lg">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white font-mono">-25% CO2 Emissions</div>
                    <div className="text-xs text-slate-400">Average Industrial Plant Reduction</div>
                  </div>
                </div>

                <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex items-center gap-4 shadow-lg">
                  <div className="w-10 h-10 rounded-xl bg-brand/20 text-brand flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white font-mono">100% ISO 50001</div>
                    <div className="text-xs text-slate-400">Energy Management Compliance</div>
                  </div>
                </div>

                <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex items-center gap-4 shadow-lg">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white font-mono">Zero Waste to Landfill</div>
                    <div className="text-xs text-slate-400">Circular Industrial Materials</div>
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
                <span>Our Engineering Commitment</span>
              </div>

              <h3 className="text-txt-strong tracking-tight font-extrabold leading-snug text-3xl md:text-4xl lg:text-5xl" style={{ fontSize: 'clamp(2rem, 1.5rem + 1.2vw, 2.75rem)' }}>
                Sustainability is integrated into every stage of our engineering lifecycle.
              </h3>

              <p className="text-txt-muted text-body-sm leading-relaxed max-w-[800px] mx-auto font-medium">
                From initial solution architecture and technology selection to plant implementation and continuous optimization, DHGsoft strives to create long-term value for customers while supporting responsible industrial growth.
              </p>

              {/* 3 Guarantee Badges (White Glassmorphic Cards) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 text-left">
                <div className="bg-white border border-line rounded-2xl p-4 flex items-center gap-3 shadow-xs hover:border-brand/40 transition-all">
                  <CheckCircle className="w-5 h-5 text-brand shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Integrated ISO 50001 Energy Audits</span>
                </div>
                <div className="bg-white border border-line rounded-2xl p-4 flex items-center gap-3 shadow-xs hover:border-brand/40 transition-all">
                  <CheckCircle className="w-5 h-5 text-brand shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Zero-Harm OT Safety Governance</span>
                </div>
                <div className="bg-white border border-line rounded-2xl p-4 flex items-center gap-3 shadow-xs hover:border-brand/40 transition-all">
                  <CheckCircle className="w-5 h-5 text-brand shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Auditable Scope 1-3 ESG Metrics</span>
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
              src="/images/about/sustainability-hero.jpg"
              alt="DHGsoft sustainability ESG closing"
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
                Engineering Today for a More Sustainable Tomorrow
              </h2>

              <p className="text-slate-300 text-body-md leading-relaxed max-w-[720px] mx-auto font-medium">
                The future of industry depends on balancing operational productivity with environmental responsibility. DHGsoft remains dedicated to developing engineering solutions that support sustainable operations and connected industrial ecosystems.
              </p>

              {/* Feature Pill Tags */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium border border-white/10">Energy Stewardship</span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium border border-white/10">Zero Emissions</span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium border border-white/10">Workforce Empowerment</span>
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
