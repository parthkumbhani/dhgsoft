"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen, CheckCircle, Cpu, Database, Globe, Handshake, Network, ShieldAlert, Sliders, Smile, Target, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import TechEcosystem from '@/components/TechEcosystem';

export default function AboutPartnersPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased font-sans flex flex-col selection:bg-brand selection:text-white">
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="flex-grow">
        {/* ============ 1. PREMIUM HERO (Full-bleed Background Image with Dark Gradient overlay) ============ */}
        <section className="relative min-h-screen flex items-center pt-24 pb-16 text-left overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/about/partners-hero.jpg" 
              alt="Partner Ecosystem banner" 
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
              <span className="text-white font-medium">Partner Ecosystem</span>
            </nav>

            <div className="text-brand-hot text-[11px] font-extrabold uppercase tracking-widest font-mono">Partner Ecosystem</div>
            <h1 className="text-white mt-4 max-w-[900px] font-extrabold tracking-tight leading-[1.05] text-headline-xl">
              Strong Partnerships. Greater Innovation.
            </h1>
            <p className="text-slate-300 text-body-md mt-6 max-w-[760px] leading-relaxed font-medium">
              Industrial transformation is built on collaboration. At DHGsoft, we work alongside customers, technology providers, academic institutions, research organizations, and strategic partners to deliver innovative, scalable, and future-ready engineering solutions.
            </p>

            {/* Floating Hero Accent Badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                <CheckCircle className="w-4 h-4 text-brand-hot" />
                <span>Global OEM Alliances</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                <CheckCircle className="w-4 h-4 text-brand-hot" />
                <span>Certified System Integration</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                <CheckCircle className="w-4 h-4 text-brand-hot" />
                <span>ISA-95 Ecosystem</span>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        
        {/* ============ 2. OVERVIEW (Ecosystem Foundation - High Density & Zero Blank Space) ============ */}
        <section className="relative overflow-hidden bg-mesh-glow-light bg-dot-matrix py-16 md:py-24 border-b border-line">
          {/* Background Watermark Typography */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[150px] font-black text-slate-100/70 select-none pointer-events-none z-0 font-mono tracking-tighter hidden lg:block">
            ECOSYSTEM
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
                    <span className="text-brand text-xs font-bold uppercase tracking-widest font-mono">Ecosystem Foundation</span>
                  </div>
                  
                  <h3 className="text-txt-strong tracking-tight font-extrabold leading-[1.1] text-3xl md:text-4xl lg:text-5xl" style={{ fontSize: 'clamp(2rem, 1.6rem + 1vw, 2.5rem)' }}>
                    No organization transforms industrial enterprises alone.
                  </h3>
                  
                  <p className="text-body-sm text-txt-muted leading-relaxed">
                    Digital transformation requires the combined expertise of engineering professionals, technology leaders, research communities, and industrial organizations working together toward a common goal. DHGsoft brings these capabilities under one unified ecosystem.
                  </p>
                </div>

                {/* 3 High-Impact Key Metric Chips */}
                <div className="flex flex-wrap gap-2.5 pt-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-line shadow-xs text-xs font-bold text-slate-800">
                    <Zap className="w-3.5 h-3.5 text-brand" />
                    <span>50+ Global OEM Alliances</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-line shadow-xs text-xs font-bold text-slate-800">
                    <CheckCircle className="w-3.5 h-3.5 text-brand" />
                    <span>100% ISA-95 Compliance</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-line shadow-xs text-xs font-bold text-slate-800">
                    <Target className="w-3.5 h-3.5 text-brand-hot" />
                    <span>Zero Vendor Lock-in</span>
                  </div>
                </div>

                {/* 4-Card Connected Ecosystem Grid with Takeaway Pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-line/80">
                  <div className="bg-white/90 border border-line rounded-xl p-4 shadow-sm hover:border-brand/40 transition-all flex flex-col justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <span className="text-txt-strong font-bold text-xs">Turnkey OT/IT Engineering</span>
                    </div>
                    <span className="text-[11px] text-txt-muted mt-2 block">Unified SCADA, MES & ERP system architecture.</span>
                    <div className="mt-3 pt-2 border-t border-line/60 flex flex-wrap gap-1">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">PLC/SCADA</span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">MES Pipelines</span>
                    </div>
                  </div>

                  <div className="bg-white/90 border border-line rounded-xl p-4 shadow-sm hover:border-brand/40 transition-all flex flex-col justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                        <Handshake className="w-4 h-4" />
                      </div>
                      <span className="text-txt-strong font-bold text-xs">Joint OEM Co-Innovation</span>
                    </div>
                    <span className="text-[11px] text-txt-muted mt-2 block">Direct hardware & software integration labs.</span>
                    <div className="mt-3 pt-2 border-t border-line/60 flex flex-wrap gap-1">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Schneider & AVEVA</span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">AWS & Azure</span>
                    </div>
                  </div>

                  <div className="bg-white/90 border border-line rounded-xl p-4 shadow-sm hover:border-brand/40 transition-all flex flex-col justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <span className="text-txt-strong font-bold text-xs">Academic & R&D Labs</span>
                    </div>
                    <span className="text-[11px] text-txt-muted mt-2 block">Next-gen industry research & workforce upskilling.</span>
                    <div className="mt-3 pt-2 border-t border-line/60 flex flex-wrap gap-1">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">University R&D</span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Workforce Training</span>
                    </div>
                  </div>

                  <div className="bg-white/90 border border-line rounded-xl p-4 shadow-sm hover:border-brand/40 transition-all flex flex-col justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                        <Network className="w-4 h-4" />
                      </div>
                      <span className="text-txt-strong font-bold text-xs">Certified System Integration</span>
                    </div>
                    <span className="text-[11px] text-txt-muted mt-2 block">Secure OT networks compliant with ISA/IEC 62443.</span>
                    <div className="mt-3 pt-2 border-t border-line/60 flex flex-wrap gap-1">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">ISA/IEC 62443</span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Zero Trust OT</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Stacked Interactive Showcase Frame (lg:col-span-5) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                
                {/* Photo Card with Floating Badges */}
                <div className="relative rounded-[24px] overflow-hidden border border-line shadow-lg aspect-[16/11] w-full group">
                  <Image src="/images/about/partners-overview.jpg" alt="Overview photography" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(min-width:1024px) 35vw, 100vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md border border-line px-3 py-1 rounded-lg text-[10px] font-bold text-brand shadow-xs">
                    Global Tech Network
                  </div>
                  <div className="absolute bottom-3 right-3 bg-slate-900/90 text-white backdrop-blur-md border border-slate-700 px-3 py-1 rounded-lg text-[10px] font-bold shadow-xs">
                    ISA-95 Partnerships
                  </div>
                </div>

                {/* Glassmorphic Value Impact Card (Fills bottom space) */}
                <div className="bg-white border border-line rounded-[24px] p-5 shadow-md space-y-3 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-brand uppercase tracking-wider">Why OEMs Partner With DHGsoft</span>
                    <span className="px-2 py-0.5 rounded-md bg-brand/10 text-brand text-[10px] font-bold">ISA-95 Compliant</span>
                  </div>

                  <div className="space-y-2 pt-1 text-xs text-txt-strong">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-brand shrink-0" />
                      <span>Direct PLC/SCADA Protocol & API Access</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-brand shrink-0" />
                      <span>Vendor-Agnostic System Architecture Flexibility</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-brand shrink-0" />
                      <span>Joint Industrial Solution R&D & Validation</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ 3. OUR COLLABORATION MODEL (Spacious Split Layout) ============ */}
        <section className="relative overflow-hidden bg-mesh-glow-light bg-dot-matrix min-h-[85vh] md:min-h-[90vh] flex items-center py-20 md:py-28 border-b border-line">
          {/* Background Watermark Typography */}
          <div className="absolute left-0 bottom-6 text-[130px] font-black text-slate-200/50 select-none pointer-events-none z-0 font-mono tracking-tighter hidden lg:block">
            COLLABORATION
          </div>

          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              
              {/* Left Column: Stacked Interactive Showcase Frame (lg:col-span-5) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                
                {/* Photo Card with Floating Badges */}
                <div className="relative rounded-[24px] overflow-hidden border border-line shadow-lg aspect-[16/11] w-full group">
                  <Image src="/images/about/partners-model.jpg" alt="Our Collaboration Model photography" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(min-width:1024px) 35vw, 100vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md border border-line px-3 py-1 rounded-lg text-[10px] font-bold text-brand shadow-xs">
                    Co-Innovation First
                  </div>
                  <div className="absolute bottom-3 right-3 bg-slate-900/90 text-white backdrop-blur-md border border-slate-700 px-3 py-1 rounded-lg text-[10px] font-bold shadow-xs">
                    End-to-End Governance
                  </div>
                </div>

                {/* Glassmorphic Collaboration Standards Card (Fills bottom space) */}
                <div className="bg-white border border-line rounded-[24px] p-5 shadow-md space-y-3 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-brand uppercase tracking-wider">Collaboration SLA Standards</span>
                    <span className="px-2 py-0.5 rounded-md bg-brand/10 text-brand text-[10px] font-bold">ISO & ISA-95</span>
                  </div>

                  <div className="space-y-2 pt-1 text-xs text-txt-strong">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-brand shrink-0" />
                      <span>Shared IP Governance & Transparent SLA Agreements</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-brand shrink-0" />
                      <span>Dedicated Turnkey OT/IT Engineering Teams</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-brand shrink-0" />
                      <span>24/7 Joint Industrial Solution Monitoring</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Title & 3 Structured Value Panels */}
              <div className="lg:col-span-7 text-left space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand/15 text-brand flex items-center justify-center shrink-0 shadow-sm">
                    <Handshake className="w-5 h-5" />
                  </div>
                  <span className="text-brand text-xs font-bold uppercase tracking-widest font-mono">Our Collaboration Model</span>
                </div>
                
                <h3 className="text-txt-strong mt-2 tracking-tight font-extrabold leading-[1.1] text-3xl md:text-4xl lg:text-5xl" style={{ fontSize: 'clamp(2rem, 1.6rem + 1vw, 2.5rem)' }}>
                  We build partnerships based on trust, shared expertise, and long-term value.
                </h3>
                <p className="text-body-sm text-txt-muted leading-relaxed">
                  Our ecosystem combines engineering excellence with global technology platforms to deliver connected industrial solutions across diverse industries.
                </p>

                {/* 3 Structured Value Panels */}
                <div className="space-y-3 pt-2">
                  <div className="bg-white border border-line rounded-xl p-4 shadow-sm flex items-start gap-3.5 hover:border-brand/40 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-txt-strong font-bold text-sm">Trust & Transparency</h4>
                      <p className="text-xs text-txt-muted mt-1 leading-relaxed">Clear SLA agreements, open communication, and shared IP governance for all turnkey implementations.</p>
                    </div>
                  </div>

                  <div className="bg-white border border-line rounded-xl p-4 shadow-sm flex items-start gap-3.5 hover:border-brand/40 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-txt-strong font-bold text-sm">Engineering Excellence</h4>
                      <p className="text-xs text-txt-muted mt-1 leading-relaxed">Certified engineers across Schneider, AVEVA, AWS, Azure, and Databricks ecosystems.</p>
                    </div>
                  </div>

                  <div className="bg-white border border-line rounded-xl p-4 shadow-sm flex items-start gap-3.5 hover:border-brand/40 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-txt-strong font-bold text-sm">Sustainable Growth</h4>
                      <p className="text-xs text-txt-muted mt-1 leading-relaxed">Long-term enterprise technology roadmaps designed for zero-downtime scalability.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ 4. CERTIFIED PARTNER NETWORK GRID (Zero Blank Space) ============ */}
        <section className="relative overflow-hidden bg-mesh-glow-light bg-tech-grid min-h-[85vh] md:min-h-[90vh] flex items-center py-20 md:py-28 border-b border-line">
          {/* Background Watermark Typography */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[150px] font-black text-slate-100/70 select-none pointer-events-none z-0 font-mono tracking-tighter hidden lg:block">
            NETWORK
          </div>

          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            <div className="text-center max-w-[720px] mx-auto mb-14">
              <span className="text-brand text-xs font-bold uppercase tracking-widest block font-mono">Global Ecosystem</span>
              <h3 className="text-txt-strong mt-2 tracking-tight font-extrabold text-3xl md:text-4xl">Our Partner Network & Alliance Capabilities</h3>
              <p className="text-body-sm text-txt-muted mt-2 leading-relaxed">Delivering comprehensive OT/IT solutions through trusted global technology leaders and specialized integrators.</p>
              <div className="w-12 h-1 bg-brand rounded-full mt-4 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Card 01 */}
              <div className="group bg-white border border-line rounded-2xl p-6 shadow-xs hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[4px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <span className="absolute right-4 top-2 text-5xl font-mono font-black text-slate-100 group-hover:text-brand/10 transition-colors pointer-events-none select-none">01</span>
                
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-4 shadow-xs">
                    <Smile className="w-5 h-5" />
                  </div>
                  <h4 className="text-txt-strong font-bold text-lg leading-snug">Customer Partnerships</h4>
                  <p className="text-xs text-txt-muted mt-2 leading-relaxed">Built on collaboration rather than transactions. We work closely with customers through strategy, execution, and long-term support.</p>
                </div>

                <div className="pt-4 border-t border-line/80 mt-5 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">Direct Alignment</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">Long-Term Value</span>
                </div>
              </div>

              {/* Card 02 */}
              <div className="group bg-white border border-line rounded-2xl p-6 shadow-xs hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[4px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <span className="absolute right-4 top-2 text-5xl font-mono font-black text-slate-100 group-hover:text-brand/10 transition-colors pointer-events-none select-none">02</span>
                
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-4 shadow-xs">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h4 className="text-txt-strong font-bold text-lg leading-snug">Technology Collaboration</h4>
                  <p className="text-xs text-txt-muted mt-2 leading-relaxed">Collaborating with global OEM leaders to integrate automation platforms, enterprise software, cloud, and cybersecurity.</p>
                </div>

                <div className="pt-4 border-t border-line/80 mt-5 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">Schneider & AVEVA</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">SCADA Systems</span>
                </div>
              </div>

              {/* Card 03 */}
              <div className="group bg-white border border-line rounded-2xl p-6 shadow-xs hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[4px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <span className="absolute right-4 top-2 text-5xl font-mono font-black text-slate-100 group-hover:text-brand/10 transition-colors pointer-events-none select-none">03</span>
                
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-4 shadow-xs">
                    <Database className="w-5 h-5" />
                  </div>
                  <h4 className="text-txt-strong font-bold text-lg leading-snug">Cloud & Data Platforms</h4>
                  <p className="text-xs text-txt-muted mt-2 leading-relaxed">Designing cloud-native data pipelines that bring plant-floor operational analytics into cloud data warehouses.</p>
                </div>

                <div className="pt-4 border-t border-line/80 mt-5 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">AWS & Azure</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">Databricks Pipelines</span>
                </div>
              </div>

              {/* Card 04 */}
              <div className="group bg-white border border-line rounded-2xl p-6 shadow-xs hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[4px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <span className="absolute right-4 top-2 text-5xl font-mono font-black text-slate-100 group-hover:text-brand/10 transition-colors pointer-events-none select-none">04</span>
                
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-4 shadow-xs">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h4 className="text-txt-strong font-bold text-lg leading-snug">Academic & Research R&D</h4>
                  <p className="text-xs text-txt-muted mt-2 leading-relaxed">Partnering with universities and engineering institutes to foster innovation, workforce upskilling, and emerging tech research.</p>
                </div>

                <div className="pt-4 border-t border-line/80 mt-5 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">R&D Innovation</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">Workforce Upskilling</span>
                </div>
              </div>

              {/* Card 05 */}
              <div className="group bg-white border border-line rounded-2xl p-6 shadow-xs hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[4px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <span className="absolute right-4 top-2 text-5xl font-mono font-black text-slate-100 group-hover:text-brand/10 transition-colors pointer-events-none select-none">05</span>
                
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-4 shadow-xs">
                    <Network className="w-5 h-5" />
                  </div>
                  <h4 className="text-txt-strong font-bold text-lg leading-snug">System Integration Network</h4>
                  <p className="text-xs text-txt-muted mt-2 leading-relaxed">Partnering with specialized regional integrators to deliver scalable solutions connecting OT, MES, and ERP platforms.</p>
                </div>

                <div className="pt-4 border-t border-line/80 mt-5 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">Turnkey OT/IT</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">Edge-to-Cloud</span>
                </div>
              </div>

              {/* Card 06 */}
              <div className="group bg-white border border-line rounded-2xl p-6 shadow-xs hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[4px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <span className="absolute right-4 top-2 text-5xl font-mono font-black text-slate-100 group-hover:text-brand/10 transition-colors pointer-events-none select-none">06</span>
                
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-4 shadow-xs">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <h4 className="text-txt-strong font-bold text-lg leading-snug">Cybersecurity Alliances</h4>
                  <p className="text-xs text-txt-muted mt-2 leading-relaxed">Protecting OT networks through trusted cybersecurity alliances that reduce risks and ensure ISA/IEC 62443 compliance.</p>
                </div>

                <div className="pt-4 border-t border-line/80 mt-5 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">ISA/IEC 62443</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">Zero Trust OT</span>
                </div>
              </div>

            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* Partners Coverflow Slider (Same as Home Page) */}
        <TechEcosystem onContactClick={() => setIsContactOpen(true)} />

        {/* ============ 5. OUR COMMITMENT (High-Impact Showcase Panel) ============ */}
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
                  Uncompromising Quality in Ecosystem Execution
                </h3>

                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
                    <CheckCircle className="w-4 h-4 text-brand-hot shrink-0" />
                    <span className="text-xs font-semibold text-slate-200">100% Certified OEM System Architecture</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
                    <CheckCircle className="w-4 h-4 text-brand-hot shrink-0" />
                    <span className="text-xs font-semibold text-slate-200">Joint Solution Validation & Testing</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
                    <CheckCircle className="w-4 h-4 text-brand-hot shrink-0" />
                    <span className="text-xs font-semibold text-slate-200">Lifetime Technical Engineering Collaboration</span>
                  </div>
                </div>
              </div>

              {/* Right Column: High-Impact Blockquote Box */}
              <div className="lg:col-span-7">
                <div className="bg-slate-900/90 border border-slate-800 rounded-[24px] p-8 shadow-2xl relative overflow-hidden text-left">
                  <div className="absolute -right-4 -bottom-4 text-[120px] font-black text-white/5 pointer-events-none select-none font-serif leading-none">“</div>
                  <p className="text-slate-200 font-serif italic text-lg md:text-xl lg:text-2xl leading-relaxed relative z-10">
                    "Our partnerships are built to create long-term value for customers by combining engineering expertise, technology innovation, and collaborative problem-solving."
                  </p>
                  <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between relative z-10">
                    <span className="text-xs font-mono font-bold text-brand-hot uppercase tracking-wider">DHGsoft Ecosystem Standard</span>
                    <span className="text-xs text-slate-400">ISA-95 Ecosystem</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ 6. CLOSING STATEMENT ============ */}
        <section className="relative overflow-hidden text-center min-h-[85vh] md:min-h-[90vh] flex items-center py-20 md:py-28 bg-mesh-glow-dark" id="closing">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/images/about/partners-hero.jpg"
              alt="DHGsoft partners ecosystem alliance closing"
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
                Innovation Grows Stronger Through
                <br />
                <span className="text-gradient-brand">Collaboration</span>
              </h2>

              <p className="text-slate-300 max-w-xl leading-relaxed text-body-md font-medium text-center">
                Together with our customers and partners, we continue building connected, intelligent, and sustainable industrial enterprises worldwide.
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
