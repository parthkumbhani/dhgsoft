"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Eye, Scale, ShieldAlert, ShieldCheck, Target, UserCheck, Wrench, Zap, Award, Lock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

export default function AboutEthicscompliancePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased font-sans flex flex-col selection:bg-brand selection:text-white">
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="flex-grow">
        {/* ============ 1. PREMIUM HERO (Full-bleed Background Image & Desktop Height) ============ */}
        <section className="relative min-h-screen flex items-center pt-24 pb-16 text-left overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/about/ethics-hero.jpg" 
              alt="Ethics & Compliance banner" 
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
              <span className="text-white font-medium">Ethics & Compliance</span>
            </nav>
            
            <div className="text-brand-hot text-[11px] font-extrabold uppercase tracking-widest font-mono">Ethics & Compliance</div>
            
            <h1 className="text-white mt-4 max-w-[900px] font-extrabold tracking-tight leading-[1.05] text-headline-xl">
              Building Trust Through Integrity and Responsible Engineering
            </h1>
            
            <p className="text-slate-300 text-body-md mt-6 max-w-[760px] leading-relaxed font-medium">
              Engineering excellence begins with trust. At DHGsoft, transparency, professional compliance, information security, and governance guide every decision we make, every partnership we build, and every solution we deliver.
            </p>

            {/* Floating Hero Accent Badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                <CheckCircle className="w-4 h-4 text-brand-hot" />
                <span>ISO 37001 Anti-Bribery</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                <CheckCircle className="w-4 h-4 text-brand-hot" />
                <span>ISA/IEC 62443 Security</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                <CheckCircle className="w-4 h-4 text-brand-hot" />
                <span>Zero-Trust Governance</span>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ 2. OVERVIEW (Compliance Foundation Grid - High Density & Zero Blank Space) ============ */}
        <section className="relative overflow-hidden bg-mesh-glow-light bg-dot-matrix py-16 md:py-24 border-b border-line">
          {/* Background Watermark Typography */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[150px] font-black text-slate-100/70 select-none pointer-events-none z-0 font-mono tracking-tighter hidden lg:block">
            GOVERNANCE
          </div>

          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              
              {/* Left Column: Text, Metrics & 4-Card Grid (lg:col-span-7) */}
              <div className="lg:col-span-7 text-left flex flex-col justify-between space-y-6">
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand/15 text-brand flex items-center justify-center shrink-0 shadow-sm">
                      <Scale className="w-5 h-5" />
                    </div>
                    <span className="text-brand text-xs font-bold uppercase tracking-widest font-mono">Overview & Principles</span>
                  </div>
                  
                  <h3 className="text-txt-strong tracking-tight font-extrabold leading-[1.1] text-3xl md:text-4xl lg:text-5xl" style={{ fontSize: 'clamp(2rem, 1.6rem + 1vw, 2.5rem)' }}>
                    Organizations require engineering partners who operate with integrity.
                  </h3>
                  
                  <p className="text-body-sm text-txt-muted leading-relaxed">
                    As industries continue to embrace digital transformation, organizations require partners who do not just deliver advanced code, but also operate with absolute integrity, security, and transparency. DHGsoft is committed to maintaining the highest standards of ethical business conduct, information security, and corporate compliance across every engagement.
                  </p>
                </div>

                {/* 3 High-Impact Key Metric Chips */}
                <div className="flex flex-wrap gap-2.5 pt-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-line shadow-xs text-xs font-bold text-slate-800">
                    <Zap className="w-3.5 h-3.5 text-brand" />
                    <span>100% Audit Compliance</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-line shadow-xs text-xs font-bold text-slate-800">
                    <CheckCircle className="w-3.5 h-3.5 text-brand" />
                    <span>Zero-Trust Data Protection</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-line shadow-xs text-xs font-bold text-slate-800">
                    <Target className="w-3.5 h-3.5 text-brand-hot" />
                    <span>24/7 Security Operations</span>
                  </div>
                </div>

                {/* 4-Card Connected Ethics Grid with Takeaway Pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-line/80">
                  <div className="bg-white/90 border border-line rounded-xl p-4 shadow-sm hover:border-brand/40 transition-all flex flex-col justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                        <UserCheck className="w-4 h-4" />
                      </div>
                      <span className="text-txt-strong font-bold text-xs">Anti-Corruption & Ethics</span>
                    </div>
                    <span className="text-[11px] text-txt-muted mt-2 block">Zero tolerance for corruption, bribery, or conflicts of interest.</span>
                    <div className="mt-3 pt-2 border-t border-line/60 flex flex-wrap gap-1">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">ISO 37001</span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Transparency</span>
                    </div>
                  </div>

                  <div className="bg-white/90 border border-line rounded-xl p-4 shadow-sm hover:border-brand/40 transition-all flex flex-col justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                        <Lock className="w-4 h-4" />
                      </div>
                      <span className="text-txt-strong font-bold text-xs">Data Privacy & Security</span>
                    </div>
                    <span className="text-[11px] text-txt-muted mt-2 block">Strict information handling, NDA compliance, and access management.</span>
                    <div className="mt-3 pt-2 border-t border-line/60 flex flex-wrap gap-1">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">GDPR Ready</span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Data Isolation</span>
                    </div>
                  </div>

                  <div className="bg-white/90 border border-line rounded-xl p-4 shadow-sm hover:border-brand/40 transition-all flex flex-col justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                        <ShieldAlert className="w-4 h-4" />
                      </div>
                      <span className="text-txt-strong font-bold text-xs">Industrial OT Safety</span>
                    </div>
                    <span className="text-[11px] text-txt-muted mt-2 block">Safety interlocks, fail-safe code architecture, and risk reviews.</span>
                    <div className="mt-3 pt-2 border-t border-line/60 flex flex-wrap gap-1">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">ISA-84 Safety</span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Fail-Safe code</span>
                    </div>
                  </div>

                  <div className="bg-white/90 border border-line rounded-xl p-4 shadow-sm hover:border-brand/40 transition-all flex flex-col justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <span className="text-txt-strong font-bold text-xs">Accountability & SLA</span>
                    </div>
                    <span className="text-[11px] text-txt-muted mt-2 block">Auditable milestones, transparent delivery logs, and engineering SLAs.</span>
                    <div className="mt-3 pt-2 border-t border-line/60 flex flex-wrap gap-1">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Full Audit Trail</span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">SLA Assurance</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Stacked Interactive Showcase Frame (lg:col-span-5) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                
                {/* Photo Card with Floating Badges */}
                <div className="relative rounded-[24px] overflow-hidden border border-line shadow-lg aspect-[16/11] w-full group">
                  <Image src="/images/about/ethics-overview.jpg" alt="Ethics overview photography" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(min-width:1024px) 35vw, 100vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md border border-line px-3 py-1 rounded-lg text-[10px] font-bold text-brand shadow-xs">
                    Responsible Posture
                  </div>
                  <div className="absolute bottom-3 right-3 bg-slate-900/90 text-white backdrop-blur-md border border-slate-700 px-3 py-1 rounded-lg text-[10px] font-bold shadow-xs">
                    Governance Verified
                  </div>
                </div>

                {/* Glassmorphic Value Impact Card (Fills bottom space) */}
                <div className="bg-white border border-line rounded-[24px] p-5 shadow-md space-y-3 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-brand uppercase tracking-wider">Why Leaders Trust DHGsoft</span>
                    <span className="px-2 py-0.5 rounded-md bg-brand/10 text-brand text-[10px] font-bold font-mono">SOC2 & ISO 27001</span>
                  </div>

                  <div className="space-y-2 pt-1 text-xs text-txt-strong">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-brand shrink-0" />
                      <span>Auditable Code & Architecture Integrity Logs</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-brand shrink-0" />
                      <span>Zero-Trust Enterprise Data Separation Practices</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-brand shrink-0" />
                      <span>Strict Regulatory Standards Compliance Verification</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ 3. ETHICAL PILLARS (2-Column Split Feature Grid - Zero Blank Space) ============ */}
        <section className="relative overflow-hidden bg-mesh-glow-light bg-tech-grid py-16 md:py-24 border-b border-line">
          {/* Background Watermark Typography */}
          <div className="absolute left-0 bottom-6 text-[130px] font-black text-slate-200/50 select-none pointer-events-none z-0 font-mono tracking-tighter hidden lg:block">
            PILLARS
          </div>

          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            
            {/* Centered Header */}
            <div className="text-center max-w-[720px] mx-auto mb-12">
              <span className="text-brand text-xs font-bold uppercase tracking-widest block font-mono">Core Values</span>
              <h3 className="text-txt-strong mt-2 tracking-tight font-extrabold text-3xl md:text-4xl">Five Pillars of Corporate Governance</h3>
              <p className="text-body-sm text-txt-muted mt-2 leading-relaxed">Our code of conduct shapes how we develop automation, protect partner information, and deliver solutions.</p>
              <div className="w-12 h-1 bg-brand rounded-full mt-4 mx-auto" />
            </div>

            {/* 2-Column Split Feature Grid Layout - Zero Blank Space */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column: Sticky Hero Feature Showcase Card (lg:col-span-5) */}
              <div className="lg:col-span-5 flex flex-col">
                <div className="bg-white border border-line rounded-[24px] p-6 shadow-md flex flex-col justify-between h-full relative overflow-hidden group">
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/10] w-full mb-6 border border-line shadow-xs">
                    <Image src="/images/about/ethics-hero.jpg" alt="Ethics Principles dynamic setup" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(min-width:1024px) 35vw, 100vw" />
                    <div className="absolute inset-0 bg-ink/20" />
                    
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md border border-line px-3 py-1 rounded-lg text-[10px] font-bold text-brand shadow-xs">
                      Governance Framework
                    </div>
                  </div>

                  <div className="space-y-3 text-left">
                    <h4 className="text-txt-strong font-extrabold text-xl leading-snug">
                      Responsible Engineering Operations
                    </h4>
                    <p className="text-xs text-txt-muted leading-relaxed">
                      Ethics is not a training course—it is the foundation of our engineering architecture. We design fail-safe code pipelines and follow strict governance rules to guarantee partner trust.
                    </p>
                  </div>

                  <div className="pt-5 border-t border-line/80 mt-6 space-y-2.5">
                    <div className="flex items-center gap-2.5 text-xs text-txt-strong font-semibold">
                      <CheckCircle className="w-4 h-4 text-brand shrink-0" />
                      <span>GDPR Ready & Zero-Trust Information Protection</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-txt-strong font-semibold">
                      <CheckCircle className="w-4 h-4 text-brand shrink-0" />
                      <span>Certified ISA/IEC 62443 Security Standards</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-txt-strong font-semibold">
                      <CheckCircle className="w-4 h-4 text-brand shrink-0" />
                      <span>100% Transparancy in Project SLA Logging</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: 5 High-Density Capability Cards (lg:col-span-7) */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Card 01 */}
                <div className="group bg-white border border-line rounded-2xl p-5 shadow-xs hover:border-brand hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <span className="absolute right-4 top-2 text-4xl font-mono font-black text-slate-100 group-hover:text-brand/10 transition-colors pointer-events-none select-none">01</span>
                  
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-3 shadow-xs">
                      <UserCheck className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="text-txt-strong font-bold text-base leading-snug">Integrity</h4>
                    <p className="text-xs text-txt-muted mt-1.5 leading-relaxed">Conducting every engagement with honesty, transparency, and accountability across business decisions.</p>
                  </div>

                  <div className="pt-3.5 border-t border-line/80 mt-4 flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Honesty First</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Full Transparency</span>
                  </div>
                </div>

                {/* Card 02 */}
                <div className="group bg-white border border-line rounded-2xl p-5 shadow-xs hover:border-brand hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <span className="absolute right-4 top-2 text-4xl font-mono font-black text-slate-100 group-hover:text-brand/10 transition-colors pointer-events-none select-none">02</span>
                  
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-3 shadow-xs">
                      <ShieldCheck className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="text-txt-strong font-bold text-base leading-snug">Compliance</h4>
                    <p className="text-xs text-txt-muted mt-1.5 leading-relaxed">Aligning operations with industry regulations, engineering standards, and corporate governance guidelines.</p>
                  </div>

                  <div className="pt-3.5 border-t border-line/80 mt-4 flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Regulatory Ready</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">ISO Standards</span>
                  </div>
                </div>

                {/* Card 03 */}
                <div className="group bg-white border border-line rounded-2xl p-5 shadow-xs hover:border-brand hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <span className="absolute right-4 top-2 text-4xl font-mono font-black text-slate-100 group-hover:text-brand/10 transition-colors pointer-events-none select-none">03</span>
                  
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-3 shadow-xs">
                      <Lock className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="text-txt-strong font-bold text-base leading-snug">Information Security</h4>
                    <p className="text-xs text-txt-muted mt-1.5 leading-relaxed">Protecting customer IP with secure code, responsible data handling, and zero-trust access management.</p>
                  </div>

                  <div className="pt-3.5 border-t border-line/80 mt-4 flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">IP Protection</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Zero-Trust access</span>
                  </div>
                </div>

                {/* Card 04 */}
                <div className="group bg-white border border-line rounded-2xl p-5 shadow-xs hover:border-brand hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <span className="absolute right-4 top-2 text-4xl font-mono font-black text-slate-100 group-hover:text-brand/10 transition-colors pointer-events-none select-none">04</span>
                  
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-3 shadow-xs">
                      <Wrench className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="text-txt-strong font-bold text-base leading-snug">Responsible Engineering</h4>
                    <p className="text-xs text-txt-muted mt-1.5 leading-relaxed">Designing reliable automation systems that ensure safe plant floor ops and long-term asset scalability.</p>
                  </div>

                  <div className="pt-3.5 border-t border-line/80 mt-4 flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Safe Plant Floor</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Fail-Safe code</span>
                  </div>
                </div>

                {/* Card 05 */}
                <div className="group bg-white border border-line rounded-2xl p-5 shadow-xs hover:border-brand hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden sm:col-span-2">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <span className="absolute right-4 top-2 text-4xl font-mono font-black text-slate-100 group-hover:text-brand/10 transition-colors pointer-events-none select-none">05</span>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
                    <div className="w-9 h-9 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-3 sm:mb-0 shadow-xs">
                      <Eye className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h4 className="text-txt-strong font-bold text-base leading-snug">Transparency</h4>
                      <p className="text-xs text-txt-muted mt-1 leading-relaxed">Open project metrics, transparent delivery milestones, and collaborative design processes throughout every engagement.</p>
                    </div>
                  </div>

                  <div className="pt-3.5 border-t border-line/80 mt-4 flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Open Delivery Logs</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Joint Reviews</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ 4. RESPONSIBLE POSTURE BANNER (High-Contrast Dark Showcase) ============ */}
        <section className="relative bg-slate-950 text-white overflow-hidden py-20 md:py-28 border-b border-line">
          <div className="absolute inset-0 z-0 opacity-25">
            <Image src="/images/about/ethics-principles.jpg" alt="Responsible posture background graphic" fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
          </div>

          {/* Background Watermark Typography */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[150px] font-black text-slate-800/20 select-none pointer-events-none z-0 font-mono tracking-tighter hidden lg:block">
            RESPONSIBILITY
          </div>

          <div className="relative z-10 max-w-site mx-auto px-gutter md:px-gutter-md text-left w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Side: Quote Box */}
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-hot/15 border border-brand-hot/30 text-brand-hot text-xs font-mono font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5" />
                  <span>Security & Integrity posture</span>
                </div>
                
                <h2 className="text-white font-extrabold tracking-tight leading-snug text-2xl md:text-3xl lg:text-4xl" style={{ fontSize: 'clamp(1.75rem, 1.4rem + 1vw, 2.5rem)' }}>
                  "Our zero-trust information security guidelines and transparent project delivery frameworks ensure client security and operational safety at all times."
                </h2>
              </div>

              {/* Right Side: 3 Security Metrics Badges */}
              <div className="lg:col-span-4 space-y-3">
                <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex items-center gap-4 shadow-lg">
                  <div className="w-10 h-10 rounded-xl bg-brand/20 text-brand flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white font-mono">Zero Trust Architecture</div>
                    <div className="text-xs text-slate-400">Plant-to-Cloud Data Isolation</div>
                  </div>
                </div>

                <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex items-center gap-4 shadow-lg">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white font-mono">SOC2 Type II Ready</div>
                    <div className="text-xs text-slate-400">Strict Information Protection Compliance</div>
                  </div>
                </div>

                <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex items-center gap-4 shadow-lg">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white font-mono">100% Encrypted Pipelines</div>
                    <div className="text-xs text-slate-400">In-Transit & At-Rest Security</div>
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
                Ethics and compliance are integrated into every engineering process.
              </h3>

              <p className="text-txt-muted text-body-sm leading-relaxed max-w-[800px] mx-auto font-medium">
                They are not independent activities. From initial automation designs to client delivery agreements, we maintain complete transparency, safety, and accountability in everything we develop.
              </p>

              {/* 3 Guarantee Badges (White Glassmorphic Cards) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 text-left">
                <div className="bg-white border border-line rounded-2xl p-4 flex items-center gap-3 shadow-xs hover:border-brand/40 transition-all">
                  <CheckCircle className="w-5 h-5 text-brand shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Annual Compliance Audits</span>
                </div>
                <div className="bg-white border border-line rounded-2xl p-4 flex items-center gap-3 shadow-xs hover:border-brand/40 transition-all">
                  <CheckCircle className="w-5 h-5 text-brand shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Transparent Delivery SLA Logs</span>
                </div>
                <div className="bg-white border border-line rounded-2xl p-4 flex items-center gap-3 shadow-xs hover:border-brand/40 transition-all">
                  <CheckCircle className="w-5 h-5 text-brand shrink-0" />
                  <span className="text-xs font-bold text-slate-800">24/7 Security Operations Telemetry</span>
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
              src="/images/about/ethics-principles.jpg"
              alt="DHGsoft ethics and governance compliance closing"
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
                Trust Is Earned Through Every Decision We Make
              </h2>

              <p className="text-slate-300 text-body-md leading-relaxed max-w-[720px] mx-auto font-medium">
                DHGsoft remains committed to engineering responsibly, protecting customer interests, and delivering solutions built on integrity, quality, and accountability for generations of modern industry.
              </p>

              {/* Feature Pill Tags */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium border border-white/10">Compliance Integrity</span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium border border-white/10">Zero-Trust Protection</span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium border border-white/10">Transparant Delivery Logs</span>
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
