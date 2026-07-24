"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen, Briefcase, CheckCircle, Cpu, FileText, Heart, Lightbulb, Settings2, Target, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

export default function AboutLeadershipPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased font-sans flex flex-col selection:bg-brand selection:text-white">
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="flex-grow">
        {/* ============ 1. PREMIUM HERO (Full-bleed Background Image with Dark Gradient overlay) ============ */}
        <section className="relative min-h-screen flex items-center pt-24 pb-12 text-left overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/about/leadership-hero.jpg" 
              alt="Leadership Team banner" 
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
              <span className="text-white font-medium">Leadership Team</span>
            </nav>
            <div className="text-brand-hot text-[11px] font-extrabold uppercase tracking-widest">Leadership Team</div>
            <h1 className="text-white mt-5 max-w-[900px] font-extrabold tracking-tight leading-[1.05] text-headline-xl">
              Leadership Driven by Engineering Excellence
            </h1>
            <p className="text-slate-300 text-body-md mt-6 max-w-[760px] leading-relaxed font-medium">
              Behind every successful transformation is a team committed to innovation, strategic thinking, and engineering excellence. At DHGsoft, our leadership combines deep industrial knowledge with digital expertise to guide customers through complex transformation journeys.
            </p>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        
        {/* ============ LEADERSHIP PHILOSOPHY ============ */}
        <section className="relative overflow-hidden bg-mesh-glow-light bg-tech-grid py-16 md:py-20 border-b border-line">
          {/* Background Watermark Typography */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[140px] font-black text-slate-100/70 select-none pointer-events-none z-0 font-mono tracking-tighter hidden lg:block">
            PHILOSOPHY
          </div>

          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              
              {/* Left Column: Text Content */}
              <div className="lg:col-span-7 text-left order-2 lg:order-1 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand/15 text-brand flex items-center justify-center shrink-0 shadow-sm">
                    <Heart className="w-5 h-5" />
                  </div>
                  <span className="text-brand text-xs font-bold uppercase tracking-widest font-mono">Leadership Philosophy</span>
                </div>
                
                <h3 className="text-txt-strong mt-2 tracking-tight font-extrabold leading-[1.1] text-3xl md:text-4xl lg:text-5xl" style={{ fontSize: 'clamp(2rem, 1.6rem + 1vw, 2.5rem)' }}>
                  Technology alone does not transform businesses.
                </h3>
                <p className="text-txt-muted text-body-sm leading-relaxed">
                  People, engineering expertise, collaboration, and continuous innovation create meaningful and sustainable change. Our leadership philosophy reflects a commitment to long-term partnerships, technical excellence, and measurable customer success.
                </p>

                {/* Structured Value Feature Grid - Fills all whitespace seamlessly */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-5 border-t border-line/80 mt-4">
                  <div className="bg-white/90 backdrop-blur-sm border border-line rounded-xl p-3.5 shadow-sm hover:border-brand/40 hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-txt-strong font-bold text-sm block">Empowering Teams</span>
                      <span className="text-xs text-txt-muted leading-tight block mt-0.5">Fostering collaboration across engineering disciplines.</span>
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-sm border border-line rounded-xl p-3.5 shadow-sm hover:border-brand/40 hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-txt-strong font-bold text-sm block">Standard Compliance</span>
                      <span className="text-xs text-txt-muted leading-tight block mt-0.5">Upholding ISA-95 & ISA-88 integration standards.</span>
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-sm border border-line rounded-xl p-3.5 shadow-sm hover:border-brand/40 hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-txt-strong font-bold text-sm block">Value Driven</span>
                      <span className="text-xs text-txt-muted leading-tight block mt-0.5">Aligning digital strategy directly to operational goals.</span>
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-sm border border-line rounded-xl p-3.5 shadow-sm hover:border-brand/40 hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-txt-strong font-bold text-sm block">Continuous Learning</span>
                      <span className="text-xs text-txt-muted leading-tight block mt-0.5">Adapting to evolving IT/OT platforms seamlessly.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Image with Floating Accent Badges */}
              <div className="lg:col-span-5 order-1 lg:order-2 relative">
                {/* Floating Top Accent Badge */}
                <div className="absolute -top-4 -left-3 bg-white border border-line shadow-md px-3.5 py-2 rounded-xl text-[11px] font-bold text-brand flex items-center gap-2 z-20">
                  <CheckCircle className="w-4 h-4 text-brand" />
                  <span>100% Engineering Focused</span>
                </div>

                {/* Floating Bottom Accent Badge */}
                <div className="absolute -bottom-4 -right-3 bg-slate-900 text-white shadow-md px-3.5 py-2 rounded-xl text-[11px] font-bold flex items-center gap-2 z-20 border border-slate-700">
                  <Target className="w-4 h-4 text-brand-hot" />
                  <span>ISA-95 & ISA-88 Standards</span>
                </div>

                <div className="relative rounded-[24px] overflow-hidden border border-line shadow-lg aspect-[4/3] max-h-[360px] w-full group">
                  <Image src="/images/about/leadership-philosophy.jpg" alt="Leadership Philosophy photography" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(min-width:1024px) 35vw, 100vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============ CEO SECTION ============ */}
        <section className="relative overflow-hidden bg-mist bg-dot-matrix py-16 md:py-20 border-b border-line">
          {/* Background Watermark Typography */}
          <div className="absolute left-0 bottom-6 text-[130px] font-black text-slate-200/50 select-none pointer-events-none z-0 font-mono tracking-tighter hidden lg:block">
            LEADERSHIP
          </div>

          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              
              {/* Left Column: Photo Frame with Executive Badges */}
              <div className="lg:col-span-4 flex justify-center relative">
                <div className="relative rounded-[24px] overflow-hidden border border-line shadow-xl aspect-[4/5] bg-gradient-to-br from-ink to-[#1a1226] max-h-[420px] w-full max-w-[320px] group">
                  <Image src="/CEO_nobg_clean.png" alt="Hitesh Patel photo" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" sizes="(min-width:1024px) 30vw, 100vw" />
                  
                  {/* Floating Photo Badges */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white shadow-md px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider whitespace-nowrap z-20">
                    Founder & CEO
                  </div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white border border-line text-txt-strong shadow-md px-3 py-1.5 rounded-full text-[10px] font-bold whitespace-nowrap z-20 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-brand" />
                    <span>20+ Yrs OT/IT Leadership</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Profile Info & Executive Focus Grid */}
              <div className="lg:col-span-8 text-left space-y-6">
                <div>
                  <div className="text-brand text-xs font-bold uppercase tracking-widest font-mono">Chief Executive Officer</div>
                  <h2 className="text-txt-strong mt-1 font-extrabold tracking-tight leading-[1.1] text-3xl md:text-4xl lg:text-5xl" style={{ fontSize: 'clamp(2rem, 1.6rem + 1vw, 2.5rem)' }}>
                    Hitesh Patel
                  </h2>
                </div>
                
                <div className="pl-6 border-l-4 border-brand bg-white p-5 rounded-r-[16px] border border-line border-l-0 shadow-sm">
                  <p className="text-txt-strong italic font-serif leading-relaxed text-base md:text-lg">
                    "Digital transformation is not about implementing technology. It is about connecting operations, data, and intelligence to create measurable business value."
                  </p>
                </div>

                <p className="text-body-sm text-txt-muted leading-relaxed">
                  Hitesh Patel leads DHGsoft with a vision of building an engineering-first organization focused on helping industrial enterprises embrace intelligent digital transformation. His leadership combines strategic thinking with practical engineering expertise, ensuring every customer engagement delivers measurable operational outcomes and long-term value.
                </p>

                {/* 2x2 Executive Focus Grid - Fills all space cleanly */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-line/80">
                  <div className="bg-white/80 border border-line rounded-xl p-3 shadow-xs hover:border-brand/40 transition-all flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-txt-strong font-bold text-xs block">Operational Intelligence</span>
                      <span className="text-[11px] text-txt-muted block">SCADA & MES Data Integration</span>
                    </div>
                  </div>

                  <div className="bg-white/80 border border-line rounded-xl p-3 shadow-xs hover:border-brand/40 transition-all flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                      <Settings2 className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-txt-strong font-bold text-xs block">Turnkey Engineering</span>
                      <span className="text-[11px] text-txt-muted block">End-to-End OT/IT Architecture</span>
                    </div>
                  </div>

                  <div className="bg-white/80 border border-line rounded-xl p-3 shadow-xs hover:border-brand/40 transition-all flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-txt-strong font-bold text-xs block">Partnership First</span>
                      <span className="text-[11px] text-txt-muted block">Long-Term Client Trust</span>
                    </div>
                  </div>

                  <div className="bg-white/80 border border-line rounded-xl p-3 shadow-xs hover:border-brand/40 transition-all flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                      <Target className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-txt-strong font-bold text-xs block">Standards First</span>
                      <span className="text-[11px] text-txt-muted block">ISA-95 & ISA-88 Compliance</span>
                    </div>
                  </div>
                </div>
                
                {/* Horizontal Executive Stat Bar */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-line/80 max-w-lg">
                  <div className="bg-white border border-line rounded-xl p-3 text-center shadow-xs">
                    <span className="text-brand text-2xl font-black block">20+</span>
                    <span className="text-[9px] text-txt-muted font-bold uppercase tracking-wider block mt-0.5">Years OT/IT Exp</span>
                  </div>
                  <div className="bg-white border border-line rounded-xl p-3 text-center shadow-xs">
                    <span className="text-brand text-2xl font-black block">50+</span>
                    <span className="text-[9px] text-txt-muted font-bold uppercase tracking-wider block mt-0.5">Transformations</span>
                  </div>
                  <div className="bg-white border border-line rounded-xl p-3 text-center shadow-xs">
                    <span className="text-brand text-2xl font-black block">100%</span>
                    <span className="text-[9px] text-txt-muted font-bold uppercase tracking-wider block mt-0.5">Engineering Focus</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============ EXECUTIVE LEADERSHIP ============ */}
        <section className="relative overflow-hidden bg-mesh-glow-light bg-tech-grid py-16 md:py-20 border-b border-line">
          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            
            {/* Centered Header */}
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-brand text-xs font-bold uppercase tracking-widest block font-mono">Executive Leadership</span>
              <h3 className="text-txt-strong mt-2 tracking-tight font-extrabold text-3xl md:text-4xl">The Team Behind Our Success</h3>
              <p className="text-body-sm text-txt-muted mt-2 leading-relaxed">Our leadership team combines deep technical expertise with strategic vision, guiding DHGsoft in executing world-class solutions.</p>
              <div className="w-12 h-1 bg-brand rounded-full mt-4 mx-auto" />
            </div>

            {/* 3-Column Roles Row with Rich Pills & Watermark Numbers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="group card bg-white border border-line rounded-[24px] p-6 shadow-sm hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[4px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="absolute right-4 top-2 text-6xl font-black text-slate-100 font-mono select-none pointer-events-none group-hover:text-brand/10 transition-colors">01</div>
                
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-5 shadow-xs">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h4 className="text-txt-strong font-bold text-lg md:text-xl leading-snug">Chief Technology Officer</h4>
                  <p className="text-body-sm text-txt-muted mt-2.5 leading-relaxed">Leading technology strategy, digital innovation, industrial platforms, and enterprise architecture to deliver scalable engineering solutions.</p>
                </div>

                <div className="pt-5 border-t border-line/80 mt-5 flex flex-wrap gap-1.5 relative z-10">
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">OT/IT Arch</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">Cloud Platforms</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">Edge AI</span>
                </div>
              </div>

              <div className="group card bg-white border border-line rounded-[24px] p-6 shadow-sm hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[4px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="absolute right-4 top-2 text-6xl font-black text-slate-100 font-mono select-none pointer-events-none group-hover:text-brand/10 transition-colors">02</div>
                
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-5 shadow-xs">
                    <Settings2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-txt-strong font-bold text-lg md:text-xl leading-snug">Vice President – Engineering</h4>
                  <p className="text-body-sm text-txt-muted mt-2.5 leading-relaxed">Driving engineering excellence, project delivery, solution implementation, and operational quality across industrial transformation initiatives.</p>
                </div>

                <div className="pt-5 border-t border-line/80 mt-5 flex flex-wrap gap-1.5 relative z-10">
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">SCADA / MES</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">Project Delivery</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">Quality QA</span>
                </div>
              </div>

              <div className="group card bg-white border border-line rounded-[24px] p-6 shadow-sm hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[4px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="absolute right-4 top-2 text-6xl font-black text-slate-100 font-mono select-none pointer-events-none group-hover:text-brand/10 transition-colors">03</div>
                
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-5 shadow-xs">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h4 className="text-txt-strong font-bold text-lg md:text-xl leading-snug">Head of Delivery</h4>
                  <p className="text-body-sm text-txt-muted mt-2.5 leading-relaxed">Ensuring successful execution of customer engagements through efficient project management, technical leadership, and continuous operational improvement.</p>
                </div>

                <div className="pt-5 border-t border-line/80 mt-5 flex flex-wrap gap-1.5 relative z-10">
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">Client Trust</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">SLA Excellence</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">Global Ops</span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ============ LEADERSHIP PRINCIPLES ============ */}
        <section className="relative overflow-hidden bg-mesh-glow-light bg-tech-grid py-16 md:py-20 border-b border-line">
          {/* Background Watermark Typography */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[150px] font-black text-slate-100/70 select-none pointer-events-none z-0 font-mono tracking-tighter hidden lg:block">
            PRINCIPLES
          </div>

          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            
            {/* Centered Header */}
            <div className="text-center max-w-[720px] mx-auto mb-12">
              <span className="text-brand text-xs font-bold uppercase tracking-widest block font-mono">Leadership Principles</span>
              <h3 className="text-txt-strong mt-2 tracking-tight font-extrabold text-3xl md:text-4xl">Our Core Principles</h3>
              <p className="text-body-sm text-txt-muted mt-2 leading-relaxed">Guiding every engineering decision, customer engagement, and technological innovation across DHGsoft.</p>
              <div className="w-12 h-1 bg-brand rounded-full mt-4 mx-auto" />
            </div>

            {/* 2-Column Split Feature Grid Layout - Zero Blank Space */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column: Sticky Hero Feature Showcase Card (lg:col-span-5) */}
              <div className="lg:col-span-5 flex flex-col">
                <div className="bg-white border border-line rounded-[24px] p-6 shadow-md flex flex-col justify-between h-full relative overflow-hidden group">
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/10] w-full mb-6 border border-line shadow-xs">
                    <Image src="/images/about/leadership-principles.jpg" alt="Leadership Principles setup" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(min-width:1024px) 35vw, 100vw" />
                    <div className="absolute inset-0 bg-ink/20" />
                    
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md border border-line px-3 py-1 rounded-lg text-[10px] font-bold text-brand shadow-xs">
                      6 Guiding Pillars
                    </div>
                  </div>

                  <div className="space-y-3 text-left">
                    <h4 className="text-txt-strong font-extrabold text-xl leading-snug">
                      Engineered for Precision & Accountability
                    </h4>
                    <p className="text-xs text-txt-muted leading-relaxed">
                      Our leadership principles define our operational DNA. From initial SCADA & MES architecture to cloud enterprise deployment, we uphold these standard values on every engagement.
                    </p>
                  </div>

                  <div className="pt-5 border-t border-line/80 mt-6 space-y-2">
                    <div className="flex items-center gap-2.5 text-xs text-txt-strong font-semibold">
                      <CheckCircle className="w-4 h-4 text-brand shrink-0" />
                      <span>100% Quality Execution & Zero Code Defect Goal</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-txt-strong font-semibold">
                      <CheckCircle className="w-4 h-4 text-brand shrink-0" />
                      <span>ISA-95 & ISA-88 Industry Standards Compliance</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-txt-strong font-semibold">
                      <CheckCircle className="w-4 h-4 text-brand shrink-0" />
                      <span>End-to-End Ownership & Lifetime Partnership</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: 6 High-Density Principle Cards (lg:col-span-7) */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Principle 01 */}
                <div className="group bg-white border border-line rounded-2xl p-5 shadow-xs hover:border-brand hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <span className="absolute right-4 top-2 text-4xl font-mono font-black text-slate-100 group-hover:text-brand/10 transition-colors pointer-events-none select-none">01</span>
                  
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-3 shadow-xs">
                      <Lightbulb className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="text-txt-strong font-bold text-base leading-snug">Innovation</h4>
                    <p className="text-xs text-txt-muted mt-1.5 leading-relaxed">Embracing change and leading-edge technology solutions.</p>
                  </div>

                  <div className="pt-3.5 border-t border-line/80 mt-4 flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">R&D Innovation</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Next-Gen OT/IT</span>
                  </div>
                </div>

                {/* Principle 02 */}
                <div className="group bg-white border border-line rounded-2xl p-5 shadow-xs hover:border-brand hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <span className="absolute right-4 top-2 text-4xl font-mono font-black text-slate-100 group-hover:text-brand/10 transition-colors pointer-events-none select-none">02</span>
                  
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-3 shadow-xs">
                      <CheckCircle className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="text-txt-strong font-bold text-base leading-snug">Engineering Excellence</h4>
                    <p className="text-xs text-txt-muted mt-1.5 leading-relaxed">Delivering high precision and premium quality solutions.</p>
                  </div>

                  <div className="pt-3.5 border-t border-line/80 mt-4 flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">ISA-95 Precision</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Zero-Defect Code</span>
                  </div>
                </div>

                {/* Principle 03 */}
                <div className="group bg-white border border-line rounded-2xl p-5 shadow-xs hover:border-brand hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <span className="absolute right-4 top-2 text-4xl font-mono font-black text-slate-100 group-hover:text-brand/10 transition-colors pointer-events-none select-none">03</span>
                  
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-3 shadow-xs">
                      <Target className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="text-txt-strong font-bold text-base leading-snug">Customer Success</h4>
                    <p className="text-xs text-txt-muted mt-1.5 leading-relaxed">Aligning technology directly with client business goals.</p>
                  </div>

                  <div className="pt-3.5 border-t border-line/80 mt-4 flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Measurable ROI</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Client Alignment</span>
                  </div>
                </div>

                {/* Principle 04 */}
                <div className="group bg-white border border-line rounded-2xl p-5 shadow-xs hover:border-brand hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <span className="absolute right-4 top-2 text-4xl font-mono font-black text-slate-100 group-hover:text-brand/10 transition-colors pointer-events-none select-none">04</span>
                  
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-3 shadow-xs">
                      <Users className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="text-txt-strong font-bold text-base leading-snug">Collaboration</h4>
                    <p className="text-xs text-txt-muted mt-1.5 leading-relaxed">Co-innovating with clients and OEM industry leaders.</p>
                  </div>

                  <div className="pt-3.5 border-t border-line/80 mt-4 flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">OEM Co-Innovation</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Partner Ecosystem</span>
                  </div>
                </div>

                {/* Principle 05 */}
                <div className="group bg-white border border-line rounded-2xl p-5 shadow-xs hover:border-brand hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <span className="absolute right-4 top-2 text-4xl font-mono font-black text-slate-100 group-hover:text-brand/10 transition-colors pointer-events-none select-none">05</span>
                  
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-3 shadow-xs">
                      <FileText className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="text-txt-strong font-bold text-base leading-snug">Accountability</h4>
                    <p className="text-xs text-txt-muted mt-1.5 leading-relaxed">Taking absolute ownership from concept to commissioning.</p>
                  </div>

                  <div className="pt-3.5 border-t border-line/80 mt-4 flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Turnkey Ownership</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">End-to-End SLA</span>
                  </div>
                </div>

                {/* Principle 06 */}
                <div className="group bg-white border border-line rounded-2xl p-5 shadow-xs hover:border-brand hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <span className="absolute right-4 top-2 text-4xl font-mono font-black text-slate-100 group-hover:text-brand/10 transition-colors pointer-events-none select-none">06</span>
                  
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-3 shadow-xs">
                      <BookOpen className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="text-txt-strong font-bold text-base leading-snug">Continuous Learning</h4>
                    <p className="text-xs text-txt-muted mt-1.5 leading-relaxed">Staying ahead of emerging global OT/IT standards.</p>
                  </div>

                  <div className="pt-3.5 border-t border-line/80 mt-4 flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Global Standards</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Tech Upgrades</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ COMMITMENT BAND (High-Impact Showcase Panel) ============ */}
        <section className="relative overflow-hidden bg-slate-950 text-white py-16 md:py-20 border-b border-slate-800">
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
                  <span className="text-brand-hot text-xs font-bold uppercase tracking-widest font-mono">Our Core Commitment</span>
                </div>
                
                <h3 className="text-white font-extrabold text-2xl md:text-3xl lg:text-4xl tracking-tight leading-snug">
                  Uncompromising Standards in Industrial Transformation
                </h3>

                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
                    <CheckCircle className="w-4 h-4 text-brand-hot shrink-0" />
                    <span className="text-xs font-semibold text-slate-200">100% On-Time Commissioning Execution</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
                    <CheckCircle className="w-4 h-4 text-brand-hot shrink-0" />
                    <span className="text-xs font-semibold text-slate-200">ISA-95 & ISA-88 Compliance Standards</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
                    <CheckCircle className="w-4 h-4 text-brand-hot shrink-0" />
                    <span className="text-xs font-semibold text-slate-200">Zero Unplanned Downtime Operational Goal</span>
                  </div>
                </div>
              </div>

              {/* Right Column: High-Impact Blockquote Box */}
              <div className="lg:col-span-7">
                <div className="bg-slate-900/90 border border-slate-800 rounded-[24px] p-8 shadow-2xl relative overflow-hidden text-left">
                  <div className="absolute -right-4 -bottom-4 text-[120px] font-black text-white/5 pointer-events-none select-none font-serif leading-none">“</div>
                  <p className="text-slate-200 font-serif italic text-lg md:text-xl lg:text-2xl leading-relaxed relative z-10">
                    "Our leaders work alongside customers, engineering teams, and technology partners to solve complex industrial challenges while creating sustainable business value."
                  </p>
                  <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between relative z-10">
                    <span className="text-xs font-mono font-bold text-brand-hot uppercase tracking-wider">DHGsoft Leadership Commitment</span>
                    <span className="text-xs text-slate-400">ISA-95 Architecture</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        <section className="relative overflow-hidden text-center min-h-[85vh] md:min-h-[90vh] flex items-center py-20 md:py-28 bg-mesh-glow-dark" id="closing">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/images/about/leadership-principles.jpg"
              alt="DHGsoft leadership principles closing"
              fill
              className="object-cover opacity-45"
              sizes="100vw"
            />
            {/* Dark blend overlay matching our standard style */}
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
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-hot">
                  Closing Statement
                </span>
                <div className="h-px w-8 bg-brand-hot" />
              </div>

              <h2 className="text-white text-4xl sm:text-[3.5rem] lg:text-[4.2rem] font-black tracking-tight leading-[1.05] max-w-2xl text-center">
                Building the Future
                <br />
                <span className="text-gradient-brand">Together</span>
              </h2>

              <p className="text-slate-300 max-w-xl leading-relaxed text-body-md font-medium text-center">
                Leadership is not defined by titles. It is defined by the ability to inspire innovation, build trust, and create lasting impact.
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
