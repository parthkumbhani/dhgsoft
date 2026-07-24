"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Award, Eye, Leaf, Lightbulb, ShieldCheck, Smile, Target, Users, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

export default function AboutVisionmissionvaluesPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'vision' | 'mission' | 'purpose'>('vision');

  return (
    <div className="min-h-screen bg-background text-foreground antialiased font-sans flex flex-col selection:bg-brand selection:text-white">
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="flex-grow">
        {/* ============ 1. PREMIUM HERO (Full-bleed Background Image with Dark Gradient overlay) ============ */}
        <section className="relative min-h-screen flex items-center pt-24 pb-12 text-left overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/about/vision-hero.jpg" 
              alt="Vision, Mission & Values banner" 
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
              <span className="text-white font-medium">Vision, Mission & Values</span>
            </nav>
            <div className="text-brand-hot text-[11px] font-extrabold uppercase tracking-widest">Vision, Mission & Values</div>
            <h1 className="text-white mt-5 max-w-[900px] font-extrabold tracking-tight leading-[1.05] text-headline-xl">
              Driving the Future of Connected Industries
            </h1>
            <p className="text-slate-300 text-body-md mt-6 max-w-[760px] leading-relaxed font-medium">
              Every transformation begins with a clear purpose. At DHGsoft, our vision, mission, and values define how we innovate, collaborate, and deliver engineering excellence across every industrial engagement.
            </p>
          </div>

          {/* Bouncing scroll mouse visual indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-[9px] font-mono font-bold uppercase tracking-[0.25em] z-10 select-none pointer-events-none">
            <span className="w-5 h-8 rounded-full border border-white/20 flex justify-center p-1 relative">
              <span className="w-1.5 h-1.5 bg-brand rounded-full animate-bounce absolute top-1.5" />
            </span>
            <span>Scroll Down</span>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        
        {/* ============ VISION, MISSION & PURPOSE (Simple & Creative Card Deck) ============ */}
        <section className="relative overflow-hidden bg-mesh-glow-light bg-tech-grid py-16 md:py-24 border-y border-line">
          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            
            {/* Header info */}
            <div className="text-center max-w-[720px] mx-auto mb-12 space-y-2">
              <span className="text-brand text-[10px] font-extrabold uppercase tracking-widest font-mono">Our Foundation</span>
              <h2 className="text-txt-strong text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-none">
                Vision, Mission & Purpose
              </h2>
            </div>

            {/* Symmetrical 3-Card Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-site mx-auto">
              
              {/* Card 1: Our Vision */}
              <div className="relative bg-white border border-line rounded-[24px] p-8 shadow-sm hover:shadow-xl hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left min-h-[300px] overflow-hidden group">
                {/* Background Large Number Watermark */}
                <div className="absolute right-6 top-0 text-[130px] font-black text-slate-50 select-none pointer-events-none z-0 font-mono transition-colors group-hover:text-slate-100/70">01</div>
                
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-extrabold text-brand uppercase tracking-wider">01 / Vision</span>
                    <div className="w-8 h-8 rounded-lg bg-brand/5 text-brand flex items-center justify-center">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-txt-strong font-black text-xl md:text-2xl tracking-tight">Our Vision</h3>
                  <p className="text-body-sm text-txt-muted leading-relaxed max-w-[85%]">
                    Building the next generation of connected, intelligent, secure, and sustainable industrial enterprises globally.
                  </p>
                </div>

                <div className="space-y-2 pt-6 border-t border-line mt-6 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                    <span className="text-[11px] font-bold text-txt-strong">Connected Industrial Operations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                    <span className="text-[11px] font-bold text-txt-strong">Operational Technology & Cloud Integration</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Our Mission */}
              <div className="relative bg-white border border-line rounded-[24px] p-8 shadow-sm hover:shadow-xl hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left min-h-[300px] overflow-hidden group">
                {/* Background Large Number Watermark */}
                <div className="absolute right-6 top-0 text-[130px] font-black text-slate-50 select-none pointer-events-none z-0 font-mono transition-colors group-hover:text-slate-100/70">02</div>
                
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-extrabold text-brand uppercase tracking-wider">02 / Mission</span>
                    <div className="w-8 h-8 rounded-lg bg-brand/5 text-brand flex items-center justify-center">
                      <Target className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-txt-strong font-black text-xl md:text-2xl tracking-tight">Our Mission</h3>
                  <p className="text-body-sm text-txt-muted leading-relaxed max-w-[85%]">
                    Empowering organizations with innovative engineering solutions that bridge the gap between operational technology and enterprise intelligence.
                  </p>
                </div>

                <div className="space-y-2 pt-6 border-t border-line mt-6 font-mono relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-brand">01</span>
                    <span className="text-[11px] font-sans font-bold text-txt-strong">Bridging OT Automation & Cloud</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-brand">02</span>
                    <span className="text-[11px] font-sans font-bold text-txt-strong">Technical Integrity & Delivery</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Our Purpose */}
              <div className="relative bg-white border border-line rounded-[24px] p-8 shadow-sm hover:shadow-xl hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left min-h-[300px] overflow-hidden group">
                {/* Background Large Number Watermark */}
                <div className="absolute right-6 top-0 text-[130px] font-black text-slate-50 select-none pointer-events-none z-0 font-mono transition-colors group-hover:text-slate-100/70">03</div>
                
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-extrabold text-brand uppercase tracking-wider">03 / Purpose</span>
                    <div className="w-8 h-8 rounded-lg bg-brand/5 text-brand flex items-center justify-center">
                      <Zap className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-txt-strong font-black text-xl md:text-2xl tracking-tight">Our Purpose</h3>
                  <p className="text-body-sm text-txt-muted leading-relaxed max-w-[85%]">
                    Connecting machines, systems, and data into one ecosystem to transform operational data into actionable business intelligence.
                  </p>
                </div>

                <div className="border-l-2 border-brand bg-slate-50 p-4 rounded-r-xl mt-6 relative z-10">
                  <p className="text-[10px] text-txt-strong italic font-medium leading-relaxed">
                    "Transforming complex operational data into actionable intelligence."
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ============ GRID SECTION ============ */}
        <section className="relative overflow-hidden bg-mesh-glow-light bg-tech-grid min-h-[85vh] md:min-h-[90vh] flex items-center py-16 md:py-24">
          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            <div className="text-center max-w-[720px] mx-auto mb-14">
              <div className="text-brand text-[11px] font-extrabold uppercase tracking-widest">Our Core Values</div>
              <div className="w-16 h-[3px] bg-brand rounded-full mt-5 mx-auto" />
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="card relative bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px] overflow-hidden group">
                <div className="absolute right-6 top-2 text-[85px] font-black text-slate-50 select-none pointer-events-none z-0 font-mono transition-colors group-hover:text-slate-100/70 uppercase">INNO</div>
                <div className="relative z-10 w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h4 className="relative z-10 text-txt-strong font-bold text-lg md:text-xl leading-snug">Innovation</h4>
                <p className="relative z-10 text-body-sm text-txt-muted mt-3 leading-relaxed">Innovation drives continuous improvement across everything we build. We embrace emerging technologies, engineering excellence, and creative problem-solving to help customers overcome complex industrial challenges.</p>
              </div>

              <div className="card relative bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px] overflow-hidden group">
                <div className="absolute right-6 top-2 text-[85px] font-black text-slate-50 select-none pointer-events-none z-0 font-mono transition-colors group-hover:text-slate-100/70 uppercase">CUST</div>
                <div className="relative z-10 w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <Smile className="w-6 h-6" />
                </div>
                <h4 className="relative z-10 text-txt-strong font-bold text-lg md:text-xl leading-snug">Customer Success</h4>
                <p className="relative z-10 text-body-sm text-txt-muted mt-3 leading-relaxed">Our customers' success defines our own. Every project is aligned with measurable business outcomes, operational improvements, and long-term value creation rather than simply delivering technology.</p>
              </div>

              <div className="card relative bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px] overflow-hidden group">
                <div className="absolute right-6 top-2 text-[85px] font-black text-slate-50 select-none pointer-events-none z-0 font-mono transition-colors group-hover:text-slate-100/70 uppercase">INTE</div>
                <div className="relative z-10 w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="relative z-10 text-txt-strong font-bold text-lg md:text-xl leading-snug">Integrity</h4>
                <p className="relative z-10 text-body-sm text-txt-muted mt-3 leading-relaxed">Trust is built through transparency, accountability, and ethical business practices. We believe strong customer relationships are created through honesty and delivering on our commitments.</p>
              </div>

              <div className="card relative bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px] overflow-hidden group">
                <div className="absolute right-6 top-2 text-[85px] font-black text-slate-50 select-none pointer-events-none z-0 font-mono transition-colors group-hover:text-slate-100/70 uppercase">EXCE</div>
                <div className="relative z-10 w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="relative z-10 text-txt-strong font-bold text-lg md:text-xl leading-snug">Excellence</h4>
                <p className="relative z-10 text-body-sm text-txt-muted mt-3 leading-relaxed">Engineering precision is fundamental to every solution we deliver. We maintain the highest standards of quality, reliability, and technical excellence throughout the complete project lifecycle.</p>
              </div>

              <div className="card relative bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px] overflow-hidden group">
                <div className="absolute right-6 top-2 text-[85px] font-black text-slate-50 select-none pointer-events-none z-0 font-mono transition-colors group-hover:text-slate-100/70 uppercase">COLL</div>
                <div className="relative z-10 w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="relative z-10 text-txt-strong font-bold text-lg md:text-xl leading-snug">Collaboration</h4>
                <p className="relative z-10 text-body-sm text-txt-muted mt-3 leading-relaxed">Innovation happens through collaboration. We work closely with customers, technology partners, universities, research institutions, and engineering teams to build intelligent solutions.</p>
              </div>

              <div className="card relative bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px] overflow-hidden group">
                <div className="absolute right-6 top-2 text-[85px] font-black text-slate-50 select-none pointer-events-none z-0 font-mono transition-colors group-hover:text-slate-100/70 uppercase">SUST</div>
                <div className="relative z-10 w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <Leaf className="w-6 h-6" />
                </div>
                <h4 className="relative z-10 text-txt-strong font-bold text-lg md:text-xl leading-snug">Sustainability</h4>
                <p className="relative z-10 text-body-sm text-txt-muted mt-3 leading-relaxed">Engineering should improve both business performance and environmental responsibility. We help organizations optimize operations, reduce waste, improve energy efficiency, and support sustainable growth.</p>
              </div>

            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />


        {/* ============ COMMITMENT BAND (Cinematic 2-Column Showcase) ============ */}
        <section className="relative overflow-hidden bg-mist bg-tech-grid min-h-[50vh] flex items-center py-16 border-y border-line">
          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Side: Statement (lg:col-span-7) */}
              <div className="lg:col-span-7 text-left space-y-4">
                <span className="text-brand text-[10px] font-extrabold uppercase tracking-widest font-mono">Our Commitment</span>
                <h3 className="text-txt-strong font-black leading-tight tracking-tight text-3xl md:text-4xl">
                  Everything we design, develop, and deliver is guided by our commitment to engineering excellence, customer success, and responsible business practices.
                </h3>
              </div>

              {/* Right Side: Simple Creative KPI Matrix (lg:col-span-5) */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="bg-white border border-line rounded-2xl p-5 text-left space-y-1 shadow-sm hover:shadow-md hover:border-brand/40 transition-all duration-300">
                  <span className="text-2xl font-black text-brand tracking-tight">100%</span>
                  <span className="text-xs font-bold text-txt-strong block">Quality Compliance</span>
                  <p className="text-[10px] text-txt-muted leading-relaxed">Adhering strictly to global engineering standards.</p>
                </div>
                <div className="bg-white border border-line rounded-2xl p-5 text-left space-y-1 shadow-sm hover:shadow-md hover:border-brand/40 transition-all duration-300">
                  <span className="text-2xl font-black text-brand tracking-tight">Zero</span>
                  <span className="text-xs font-bold text-txt-strong block">Compromise Safety</span>
                  <p className="text-[10px] text-txt-muted leading-relaxed">Fail-safe systems designed for industrial environments.</p>
                </div>
                <div className="bg-white border border-line rounded-2xl p-5 text-left space-y-1 shadow-sm hover:shadow-md hover:border-brand/40 transition-all duration-300">
                  <span className="text-2xl font-black text-brand tracking-tight">ISO-Ready</span>
                  <span className="text-xs font-bold text-txt-strong block">Proven Lifecycles</span>
                  <p className="text-[10px] text-txt-muted leading-relaxed">Robust project architecture from discovery to delivery.</p>
                </div>
                <div className="bg-white border border-line rounded-2xl p-5 text-left space-y-1 shadow-sm hover:shadow-md hover:border-brand/40 transition-all duration-300">
                  <span className="text-2xl font-black text-brand tracking-tight">24/7</span>
                  <span className="text-xs font-bold text-txt-strong block">System Monitoring</span>
                  <p className="text-[10px] text-txt-muted leading-relaxed">Continuous support and real-time operations safeguards.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="relative overflow-hidden text-center min-h-[85vh] md:min-h-[90vh] flex items-center py-20 md:py-28 bg-mesh-glow-dark" id="closing">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/images/about/vision-purpose.jpg"
              alt="DHGsoft vision engineering tomorrow with purpose closing"
              fill
              className="object-cover opacity-45"
              sizes="100vw"
            />
            {/* Extremely light vertical gradient to blend with the footer at the bottom, transparent at the top */}
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
                Engineering Tomorrow
                <br />
                <span className="text-gradient-brand">with Purpose</span>
              </h2>

              <p className="text-slate-300 max-w-xl leading-relaxed text-body-md font-medium text-center">
                Our vision inspires where we are going. Our mission defines how we get there. Our values guide every step of the journey. Together, they form the foundation of DHGsoft's commitment to building connected, intelligent, and future-ready industries.
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
