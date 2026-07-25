"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Brain, CheckCircle, Cloud, Cpu, Database, Factory, Settings, ShieldAlert, Sliders, Target, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import dynamic from 'next/dynamic';
const TechEcosystem = dynamic(() => import('@/components/TechEcosystem'), { ssr: false });

export default function AboutTechnologypartnersPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased font-sans flex flex-col selection:bg-brand selection:text-white">
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="flex-grow">
        {/* ============ 1. PREMIUM HERO (Full-bleed Background Image with Dark Gradient overlay) ============ */}
        <section className="relative min-h-screen flex items-center pt-24 pb-16 text-left overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/about/technology-hero.jpg" 
              alt="Technology Partners banner" 
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
              <span className="text-white font-medium">Technology Partners</span>
            </nav>
            <div className="text-brand-hot text-[11px] font-extrabold uppercase tracking-widest font-mono">Technology Partners</div>
            <h1 className="text-white mt-4 max-w-[900px] font-extrabold tracking-tight leading-[1.05] text-headline-xl">
              Building the Future with Trusted Technology Leaders
            </h1>
            <p className="text-slate-300 text-body-md mt-6 max-w-[760px] leading-relaxed font-medium">
              Modern industrial transformation requires technologies that are secure, scalable, and proven. DHGsoft works with leading global technology platforms to deliver reliable engineering solutions tailored to each customer's operational requirements.
            </p>

            {/* Floating Hero Accent Badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                <CheckCircle className="w-4 h-4 text-brand-hot" />
                <span>Vendor-Agnostic Philosophy</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                <CheckCircle className="w-4 h-4 text-brand-hot" />
                <span>ISA-95/88 Compliance</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                <CheckCircle className="w-4 h-4 text-brand-hot" />
                <span>Multi-Cloud Architecture</span>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        
        {/* ============ 2. OVERVIEW (Technology Foundation Grid - High Density & Zero Blank Space) ============ */}
        <section className="relative overflow-hidden bg-mesh-glow-light bg-dot-matrix py-16 md:py-24 border-b border-line">
          {/* Background Watermark Typography */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[150px] font-black text-slate-100/70 select-none pointer-events-none z-0 font-mono tracking-tighter hidden lg:block">
            PLATFORMS
          </div>

          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              
              {/* Left Column: Text, Metrics & 4-Card Grid (lg:col-span-7) */}
              <div className="lg:col-span-7 text-left flex flex-col justify-between space-y-6">
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand/15 text-brand flex items-center justify-center shrink-0 shadow-sm">
                      <Settings className="w-5 h-5" />
                    </div>
                    <span className="text-brand text-xs font-bold uppercase tracking-widest font-mono">Platform Integration</span>
                  </div>
                  
                  <h3 className="text-txt-strong tracking-tight font-extrabold leading-[1.1] text-3xl md:text-4xl lg:text-5xl" style={{ fontSize: 'clamp(2rem, 1.6rem + 1vw, 2.5rem)' }}>
                    Technology is valuable when it delivers business outcomes.
                  </h3>
                  
                  <p className="text-body-sm text-txt-muted leading-relaxed">
                    DHGsoft follows a technology-agnostic approach, selecting platforms based on customer objectives rather than vendor preference. By collaborating with globally recognized technology providers, we help organizations implement reliable, scalable ecosystems.
                  </p>
                </div>

                {/* 3 High-Impact Key Metric Chips */}
                <div className="flex flex-wrap gap-2.5 pt-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-line shadow-xs text-xs font-bold text-slate-800">
                    <Zap className="w-3.5 h-3.5 text-brand" />
                    <span>Vendor-Agnostic Choice</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-line shadow-xs text-xs font-bold text-slate-800">
                    <CheckCircle className="w-3.5 h-3.5 text-brand" />
                    <span>100% Interoperable Protocols</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-line shadow-xs text-xs font-bold text-slate-800">
                    <Target className="w-3.5 h-3.5 text-brand-hot" />
                    <span>Multi-Cloud Scalability</span>
                  </div>
                </div>

                {/* 4-Card Connected Ecosystem Grid with Takeaway Pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-line/80">
                  <div className="bg-white/90 border border-line rounded-xl p-4 shadow-sm hover:border-brand/40 transition-all flex flex-col justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                        <Factory className="w-4 h-4" />
                      </div>
                      <span className="text-txt-strong font-bold text-xs">Industrial Automation</span>
                    </div>
                    <span className="text-[11px] text-txt-muted mt-2 block">Control platforms improving process reliability and yield.</span>
                    <div className="mt-3 pt-2 border-t border-line/60 flex flex-wrap gap-1">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Schneider & Siemens</span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Rockwell Automation</span>
                    </div>
                  </div>

                  <div className="bg-white/90 border border-line rounded-xl p-4 shadow-sm hover:border-brand/40 transition-all flex flex-col justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                        <Cloud className="w-4 h-4" />
                      </div>
                      <span className="text-txt-strong font-bold text-xs">Enterprise Cloud</span>
                    </div>
                    <span className="text-[11px] text-txt-muted mt-2 block">Secure cloud environments enabling connected remote ops.</span>
                    <div className="mt-3 pt-2 border-t border-line/60 flex flex-wrap gap-1">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">AWS & Azure</span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Google Cloud</span>
                    </div>
                  </div>

                  <div className="bg-white/90 border border-line rounded-xl p-4 shadow-sm hover:border-brand/40 transition-all flex flex-col justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                        <Database className="w-4 h-4" />
                      </div>
                      <span className="text-txt-strong font-bold text-xs">Industrial Historians</span>
                    </div>
                    <span className="text-[11px] text-txt-muted mt-2 block">High-speed historians & cloud data lakehouse pipelines.</span>
                    <div className="mt-3 pt-2 border-t border-line/60 flex flex-wrap gap-1">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">AVEVA PI System</span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Databricks</span>
                    </div>
                  </div>

                  <div className="bg-white/90 border border-line rounded-xl p-4 shadow-sm hover:border-brand/40 transition-all flex flex-col justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                        <ShieldAlert className="w-4 h-4" />
                      </div>
                      <span className="text-txt-strong font-bold text-xs">OT Security Platforms</span>
                    </div>
                    <span className="text-[11px] text-txt-muted mt-2 block">Protecting OT networks with ISA/IEC 62443 compliance.</span>
                    <div className="mt-3 pt-2 border-t border-line/60 flex flex-wrap gap-1">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">ISA/IEC 62443</span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Zero Trust</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Stacked Interactive Showcase Frame (lg:col-span-5) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                
                {/* Photo Card with Floating Badges */}
                <div className="relative rounded-[24px] overflow-hidden border border-line shadow-lg aspect-[16/11] w-full group">
                  <Image src="/images/about/technology-overview.jpg" alt="Overview photography" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(min-width:1024px) 35vw, 100vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md border border-line px-3 py-1 rounded-lg text-[10px] font-bold text-brand shadow-xs">
                    Proven Tech Stacks
                  </div>
                  <div className="absolute bottom-3 right-3 bg-slate-900/90 text-white backdrop-blur-md border border-slate-700 px-3 py-1 rounded-lg text-[10px] font-bold shadow-xs">
                    Vendor-Neutral Choice
                  </div>
                </div>

                {/* Glassmorphic Value Impact Card (Fills bottom space) */}
                <div className="bg-white border border-line rounded-[24px] p-5 shadow-md space-y-3 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-brand uppercase tracking-wider">Our Platform Principles</span>
                    <span className="px-2 py-0.5 rounded-md bg-brand/10 text-brand text-[10px] font-bold">ISA-95 Architecture</span>
                  </div>

                  <div className="space-y-2 pt-1 text-xs text-txt-strong">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-brand shrink-0" />
                      <span>Objective Hardware & Software Requirements Analysis</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-brand shrink-0" />
                      <span>Open-Standards Interoperability (OPC UA, MQTT, REST)</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-brand shrink-0" />
                      <span>Modular Edge-to-Cloud Future-Proof Scalability</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ 3. PLATFORM CAPABILITIES (2-Column Split Feature Grid - Zero Blank Space) ============ */}
        <section className="relative overflow-hidden bg-mesh-glow-light bg-tech-grid py-16 md:py-24 border-b border-line">
          {/* Background Watermark Typography */}
          <div className="absolute left-0 bottom-6 text-[130px] font-black text-slate-200/50 select-none pointer-events-none z-0 font-mono tracking-tighter hidden lg:block">
            CAPABILITIES
          </div>

          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            
            {/* Centered Header */}
            <div className="text-center max-w-[720px] mx-auto mb-12">
              <span className="text-brand text-xs font-bold uppercase tracking-widest block font-mono">Platform Capabilities</span>
              <h3 className="text-txt-strong mt-2 tracking-tight font-extrabold text-3xl md:text-4xl">Multi-Technology Integration Spectrum</h3>
              <p className="text-body-sm text-txt-muted mt-2 leading-relaxed">Our domain expertise spans across six core technology layers of the industrial enterprise.</p>
              <div className="w-12 h-1 bg-brand rounded-full mt-4 mx-auto" />
            </div>

            {/* 2-Column Split Feature Grid Layout - Zero Blank Space */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column: Sticky Hero Feature Showcase Card (lg:col-span-5) */}
              <div className="lg:col-span-5 flex flex-col">
                <div className="bg-white border border-line rounded-[24px] p-6 shadow-md flex flex-col justify-between h-full relative overflow-hidden group">
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/10] w-full mb-6 border border-line shadow-xs">
                    <Image src="/images/about/technology-hero.jpg" alt="Platform Capabilities dynamic setup" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(min-width:1024px) 35vw, 100vw" />
                    <div className="absolute inset-0 bg-ink/20" />
                    
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md border border-line px-3 py-1 rounded-lg text-[10px] font-bold text-brand shadow-xs">
                      6 Integration Layers
                    </div>
                  </div>

                  <div className="space-y-3 text-left">
                    <h4 className="text-txt-strong font-extrabold text-xl leading-snug">
                      Full-Stack Industrial Technology Architecture
                    </h4>
                    <p className="text-xs text-txt-muted leading-relaxed">
                      We connect plant-floor control systems with enterprise cloud platforms, enabling seamless data flow, real-time telemetry, and advanced predictive analytics across the industrial stack.
                    </p>
                  </div>

                  <div className="pt-5 border-t border-line/80 mt-6 space-y-2.5">
                    <div className="flex items-center gap-2.5 text-xs text-txt-strong font-semibold">
                      <CheckCircle className="w-4 h-4 text-brand shrink-0" />
                      <span>Open Protocol Interoperability (OPC UA, MQTT)</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-txt-strong font-semibold">
                      <CheckCircle className="w-4 h-4 text-brand shrink-0" />
                      <span>ISA/IEC 62443 Certified OT Cyber Security</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-txt-strong font-semibold">
                      <CheckCircle className="w-4 h-4 text-brand shrink-0" />
                      <span>Multi-Vendor Agnostic Cloud Architecture</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: 6 High-Density Capability Cards (lg:col-span-7) */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Card 01 */}
                <div className="group bg-white border border-line rounded-2xl p-5 shadow-xs hover:border-brand hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <span className="absolute right-4 top-2 text-4xl font-mono font-black text-slate-100 group-hover:text-brand/10 transition-colors pointer-events-none select-none">01</span>
                  
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-3 shadow-xs">
                      <Factory className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="text-txt-strong font-bold text-base leading-snug">Industrial Automation</h4>
                    <p className="text-xs text-txt-muted mt-1.5 leading-relaxed">Control platforms improving process reliability, safety, and production yield.</p>
                  </div>

                  <div className="pt-3.5 border-t border-line/80 mt-4 flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">PLCs & SCADA</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">DCS Systems</span>
                  </div>
                </div>

                {/* Card 02 */}
                <div className="group bg-white border border-line rounded-2xl p-5 shadow-xs hover:border-brand hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <span className="absolute right-4 top-2 text-4xl font-mono font-black text-slate-100 group-hover:text-brand/10 transition-colors pointer-events-none select-none">02</span>
                  
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-3 shadow-xs">
                      <Cloud className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="text-txt-strong font-bold text-base leading-snug">Cloud & Hybrid Platforms</h4>
                    <p className="text-xs text-txt-muted mt-1.5 leading-relaxed">Secure cloud environments enabling connected remote ops and scalability.</p>
                  </div>

                  <div className="pt-3.5 border-t border-line/80 mt-4 flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">AWS / Azure / GCP</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Hybrid Edge</span>
                  </div>
                </div>

                {/* Card 03 */}
                <div className="group bg-white border border-line rounded-2xl p-5 shadow-xs hover:border-brand hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <span className="absolute right-4 top-2 text-4xl font-mono font-black text-slate-100 group-hover:text-brand/10 transition-colors pointer-events-none select-none">03</span>
                  
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-3 shadow-xs">
                      <Cpu className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="text-txt-strong font-bold text-base leading-snug">Enterprise MES & ERP</h4>
                    <p className="text-xs text-txt-muted mt-1.5 leading-relaxed">Connecting shop-floor operations with enterprise ERP, MES, and quality systems.</p>
                  </div>

                  <div className="pt-3.5 border-t border-line/80 mt-4 flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">ISA-95 MES</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">SAP & Oracle ERP</span>
                  </div>
                </div>

                {/* Card 04 */}
                <div className="group bg-white border border-line rounded-2xl p-5 shadow-xs hover:border-brand hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <span className="absolute right-4 top-2 text-4xl font-mono font-black text-slate-100 group-hover:text-brand/10 transition-colors pointer-events-none select-none">04</span>
                  
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-3 shadow-xs">
                      <Database className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="text-txt-strong font-bold text-base leading-snug">Industrial Data Historians</h4>
                    <p className="text-xs text-txt-muted mt-1.5 leading-relaxed">Transforming raw sensor telemetry into high-speed historians & cloud data lakehouses.</p>
                  </div>

                  <div className="pt-3.5 border-t border-line/80 mt-4 flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">AVEVA PI System</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Databricks</span>
                  </div>
                </div>

                {/* Card 05 */}
                <div className="group bg-white border border-line rounded-2xl p-5 shadow-xs hover:border-brand hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <span className="absolute right-4 top-2 text-4xl font-mono font-black text-slate-100 group-hover:text-brand/10 transition-colors pointer-events-none select-none">05</span>
                  
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-3 shadow-xs">
                      <ShieldAlert className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="text-txt-strong font-bold text-base leading-snug">Cybersecurity & Resilience</h4>
                    <p className="text-xs text-txt-muted mt-1.5 leading-relaxed">Protecting OT networks with trusted security technologies ensuring ISA/IEC 62443.</p>
                  </div>

                  <div className="pt-3.5 border-t border-line/80 mt-4 flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">ISA/IEC 62443</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Zero Trust OT</span>
                  </div>
                </div>

                {/* Card 06 */}
                <div className="group bg-white border border-line rounded-2xl p-5 shadow-xs hover:border-brand hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <span className="absolute right-4 top-2 text-4xl font-mono font-black text-slate-100 group-hover:text-brand/10 transition-colors pointer-events-none select-none">06</span>
                  
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-3 shadow-xs">
                      <Brain className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="text-txt-strong font-bold text-base leading-snug">Industrial AI & Analytics</h4>
                    <p className="text-xs text-txt-muted mt-1.5 leading-relaxed">Transforming operational data into predictive quality and autonomous maintenance.</p>
                  </div>

                  <div className="pt-3.5 border-t border-line/80 mt-4 flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Predictive Ops</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Edge ML Models</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ 4. OUR PHILOSOPHY (High Density & Zero Blank Space) ============ */}
        <section className="relative overflow-hidden bg-mesh-glow-light bg-dot-matrix py-16 md:py-24 border-b border-line">
          {/* Background Watermark Typography */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[150px] font-black text-slate-100/70 select-none pointer-events-none z-0 font-mono tracking-tighter hidden lg:block">
            PHILOSOPHY
          </div>

          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              
              {/* Left Column: Stacked Interactive Showcase Frame (lg:col-span-5) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                
                {/* Photo Card with Floating Badges */}
                <div className="relative rounded-[24px] overflow-hidden border border-line shadow-lg aspect-[16/11] w-full group">
                  <Image src="/images/about/technology-philosophy.jpg" alt="Our Technology Philosophy photography" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(min-width:1024px) 35vw, 100vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md border border-line px-3 py-1 rounded-lg text-[10px] font-bold text-brand shadow-xs">
                    Neutral Evaluation
                  </div>
                  <div className="absolute bottom-3 right-3 bg-slate-900/90 text-white backdrop-blur-md border border-slate-700 px-3 py-1 rounded-lg text-[10px] font-bold shadow-xs">
                    Zero Vendor Lock-in
                  </div>
                </div>

                {/* Glassmorphic Evaluation Standards Card (Fills bottom space) */}
                <div className="bg-white border border-line rounded-[24px] p-5 shadow-md space-y-3 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-brand uppercase tracking-wider">Evaluation Standards</span>
                    <span className="px-2 py-0.5 rounded-md bg-brand/10 text-brand text-[10px] font-bold font-mono">OPC UA & MQTT</span>
                  </div>

                  <div className="space-y-2 pt-1 text-xs text-txt-strong">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-brand shrink-0" />
                      <span>Objective Hardware & Bandwidth Capability Analysis</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-brand shrink-0" />
                      <span>Open-Standards Data Pipeline Interoperability</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-brand shrink-0" />
                      <span>Modular Edge-to-Cloud Long-Term Scalability</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Title & 3 Structured Value Panels */}
              <div className="lg:col-span-7 text-left space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand/15 text-brand flex items-center justify-center shrink-0 shadow-sm">
                    <Sliders className="w-5 h-5" />
                  </div>
                  <span className="text-brand text-xs font-bold uppercase tracking-widest font-mono">Our Technology Philosophy</span>
                </div>
                
                <h3 className="text-txt-strong mt-2 tracking-tight font-extrabold leading-[1.1] text-3xl md:text-4xl lg:text-5xl" style={{ fontSize: 'clamp(2rem, 1.6rem + 1vw, 2.5rem)' }}>
                  Neutral evaluation before recommending the right solution.
                </h3>
                <p className="text-body-sm text-txt-muted leading-relaxed">
                  Instead of promoting one vendor platform, DHGsoft evaluates business requirements, engineering complexity, scalability, and long-term value before recommending the right solution.
                </p>

                {/* 3 Structured Value Panels */}
                <div className="space-y-3 pt-2">
                  <div className="bg-white border border-line rounded-xl p-4 shadow-sm flex items-start gap-3.5 hover:border-brand/40 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-txt-strong font-bold text-sm">Objective Requirements Analysis</h4>
                      <p className="text-xs text-txt-muted mt-1 leading-relaxed">Evaluating plant legacy hardware, bandwidth, and security protocols before selecting tech stacks.</p>
                    </div>
                  </div>

                  <div className="bg-white border border-line rounded-xl p-4 shadow-sm flex items-start gap-3.5 hover:border-brand/40 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-txt-strong font-bold text-sm">Open-Standards Interoperability</h4>
                      <p className="text-xs text-txt-muted mt-1 leading-relaxed">Enforcing OPC UA, MQTT, and ISA-95 standards so data flows seamlessly without lock-in.</p>
                    </div>
                  </div>

                  <div className="bg-white border border-line rounded-xl p-4 shadow-sm flex items-start gap-3.5 hover:border-brand/40 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-txt-strong font-bold text-sm">Future-Proof Scalability</h4>
                      <p className="text-xs text-txt-muted mt-1 leading-relaxed">Architecting modular systems that expand as plant capacities grow over a 10-20 year horizon.</p>
                    </div>
                  </div>
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
                  Uncompromising Reliability & Enterprise Readiness
                </h3>

                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
                    <CheckCircle className="w-4 h-4 text-brand-hot shrink-0" />
                    <span className="text-xs font-semibold text-slate-200">100% Multi-Vendor System Interoperability</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
                    <CheckCircle className="w-4 h-4 text-brand-hot shrink-0" />
                    <span className="text-xs font-semibold text-slate-200">ISA/IEC 62443 Certified Cyber Resilience</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
                    <CheckCircle className="w-4 h-4 text-brand-hot shrink-0" />
                    <span className="text-xs font-semibold text-slate-200">Long-Term Scalable Architecture Governance</span>
                  </div>
                </div>
              </div>

              {/* Right Column: High-Impact Blockquote Box */}
              <div className="lg:col-span-7">
                <div className="bg-slate-900/90 border border-slate-800 rounded-[24px] p-8 shadow-2xl relative overflow-hidden text-left">
                  <div className="absolute -right-4 -bottom-4 text-[120px] font-black text-white/5 pointer-events-none select-none font-serif leading-none">“</div>
                  <p className="text-slate-200 font-serif italic text-lg md:text-xl lg:text-2xl leading-relaxed relative z-10">
                    "By combining leading hardware and software technologies with vendor-agnostic engineering, we ensure industrial reliability and enterprise readiness for every client."
                  </p>
                  <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between relative z-10">
                    <span className="text-xs font-mono font-bold text-brand-hot uppercase tracking-wider">DHGsoft Technology Commitment</span>
                    <span className="text-xs text-slate-400">ISA-95 Architecture</span>
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
              src="/images/about/technology-hero.jpg"
              alt="DHGsoft industrial technology platform closing"
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
                Technology Should Empower Engineering,
                <br />
                <span className="text-gradient-brand">Not Limit It</span>
              </h2>

              <p className="text-slate-300 max-w-xl leading-relaxed text-body-md font-medium text-center">
                DHGsoft works with trusted global technologies to deliver connected industrial solutions that create measurable business value.
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
