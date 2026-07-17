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
        <section className="relative overflow-hidden bg-white py-16 md:py-20 border-b border-line bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px]">
          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              
              {/* Left Column: Text Content */}
              <div className="lg:col-span-7 text-left order-2 lg:order-1 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand/15 text-brand flex items-center justify-center shrink-0">
                    <Heart className="w-5 h-5" />
                  </div>
                  <span className="text-brand text-xs font-bold uppercase tracking-widest">Leadership Philosophy</span>
                </div>
                
                <h3 className="text-txt-strong mt-2 tracking-tight font-extrabold leading-[1.1] text-3xl md:text-4xl lg:text-5xl" style={{ fontSize: 'clamp(2rem, 1.6rem + 1vw, 2.5rem)' }}>
                  Technology alone does not transform businesses.
                </h3>
                <p className="text-txt-muted text-body-md mt-4 leading-relaxed">
                  People, engineering expertise, collaboration, and continuous innovation create meaningful and sustainable change. Our leadership philosophy reflects a commitment to long-term partnerships, technical excellence, and measurable customer success.
                </p>

                {/* Structured Value Checklist to fill space cleanly */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-line mt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                    <div>
                      <span className="text-txt-strong font-bold text-sm block">Empowering Teams</span>
                      <span className="text-xs text-txt-muted">Fostering collaboration across engineering disciplines.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                    <div>
                      <span className="text-txt-strong font-bold text-sm block">Standard Compliance</span>
                      <span className="text-xs text-txt-muted">Upholding ISA-95 & ISA-88 integration standards.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                    <div>
                      <span className="text-txt-strong font-bold text-sm block">Value Driven</span>
                      <span className="text-xs text-txt-muted">Aligning digital strategy directly to operational goals.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                    <div>
                      <span className="text-txt-strong font-bold text-sm block">Continuous Learning</span>
                      <span className="text-xs text-txt-muted">Adapting to evolving IT/OT platforms.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="relative rounded-[24px] overflow-hidden border border-line shadow-lg aspect-[4/3] hover:scale-[1.01] transition-transform duration-500 max-h-[340px]">
                  <Image src="/images/about/leadership-philosophy.jpg" alt="Leadership Philosophy photography" fill className="object-cover" sizes="(min-width:1024px) 35vw, 100vw" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============ CEO SECTION ============ */}
        <section className="relative overflow-hidden bg-slate-50/60 py-16 md:py-20 border-b border-line bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px]">
          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              
              {/* Left Column: Photo */}
              <div className="lg:col-span-4">
                <div className="relative rounded-[24px] overflow-hidden border border-line shadow-lg aspect-[4/5] bg-gradient-to-br from-ink to-[#1a1226] max-h-[420px]">
                  <Image src="/CEO_nobg_clean.png" alt="Hitesh Patel photo" fill className="object-cover object-top hover:scale-[1.01] transition-transform duration-500" sizes="(min-width:1024px) 30vw, 100vw" />
                </div>
              </div>

              {/* Right Column: Profile Info */}
              <div className="lg:col-span-8 text-left space-y-6">
                <div className="text-brand text-xs font-bold uppercase tracking-widest">Chief Executive Officer</div>
                <h2 className="text-txt-strong mt-2 font-extrabold tracking-tight leading-[1.1] text-3xl md:text-4xl" style={{ fontSize: 'clamp(2rem, 1.6rem + 1vw, 2.5rem)' }}>
                  Hitesh Patel
                </h2>
                
                <div className="pl-6 border-l-4 border-brand bg-white p-6 rounded-r-[16px] border border-line border-l-0 shadow-sm mt-4">
                  <p className="text-txt-strong italic font-serif leading-relaxed text-base md:text-lg">
                    "Digital transformation is not about implementing technology. It is about connecting operations, data, and intelligence to create measurable business value."
                  </p>
                </div>

                <p className="text-body-sm text-txt-muted leading-relaxed">
                  Hitesh Patel leads DHGsoft with a vision of building an engineering-first organization focused on helping industrial enterprises embrace intelligent digital transformation. His leadership combines strategic thinking with practical engineering expertise, ensuring every customer engagement delivers measurable operational outcomes and long-term value.
                </p>
                
                {/* Horizontal Stat Bar */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-line mt-6 max-w-lg">
                  <div>
                    <span className="text-brand text-2xl font-black block">20+</span>
                    <span className="text-[10px] text-txt-muted font-bold uppercase tracking-wider mt-0.5 block">Years OT/IT Exp</span>
                  </div>
                  <div>
                    <span className="text-brand text-2xl font-black block">50+</span>
                    <span className="text-[10px] text-txt-muted font-bold uppercase tracking-wider mt-0.5 block">Transformations</span>
                  </div>
                  <div>
                    <span className="text-brand text-2xl font-black block">100%</span>
                    <span className="text-[10px] text-txt-muted font-bold uppercase tracking-wider mt-0.5 block">Engineering Focus</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============ EXECUTIVE LEADERSHIP ============ */}
        <section className="relative overflow-hidden bg-white py-16 md:py-20 border-b border-line bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px]">
          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            
            {/* Centered Header */}
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-brand text-xs font-bold uppercase tracking-widest block">Executive Leadership</span>
              <h3 className="text-txt-strong mt-3 tracking-tight font-extrabold text-2xl md:text-3xl">The Team Behind Our Success</h3>
              <p className="text-body-sm text-txt-muted mt-2 leading-relaxed">Our leadership team combines deep technical expertise with strategic vision, guiding DHGsoft in executing world-class solutions.</p>
              <div className="w-12 h-1 bg-brand rounded-full mt-4 mx-auto" />
            </div>

            {/* 3-Column Roles Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="group card bg-white border border-line rounded-[24px] p-6 hover:border-brand hover:shadow-lg transition-all text-left flex flex-col justify-start relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-5">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="text-txt-strong font-bold text-lg leading-snug">Chief Technology Officer</h4>
                <p className="text-body-sm text-txt-muted mt-2 leading-relaxed">Leading technology strategy, digital innovation, industrial platforms, and enterprise architecture to deliver scalable engineering solutions.</p>
              </div>

              <div className="group card bg-white border border-line rounded-[24px] p-6 hover:border-brand hover:shadow-lg transition-all text-left flex flex-col justify-start relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-5">
                  <Settings2 className="w-5 h-5" />
                </div>
                <h4 className="text-txt-strong font-bold text-lg leading-snug">Vice President – Engineering</h4>
                <p className="text-body-sm text-txt-muted mt-2 leading-relaxed">Driving engineering excellence, project delivery, solution implementation, and operational quality across industrial transformation initiatives.</p>
              </div>

              <div className="group card bg-white border border-line rounded-[24px] p-6 hover:border-brand hover:shadow-lg transition-all text-left flex flex-col justify-start relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-5">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h4 className="text-txt-strong font-bold text-lg leading-snug">Head of Delivery</h4>
                <p className="text-body-sm text-txt-muted mt-2 leading-relaxed">Ensuring successful execution of customer engagements through efficient project management, technical leadership, and continuous operational improvement.</p>
              </div>

            </div>

          </div>
        </section>

        {/* ============ LEADERSHIP PRINCIPLES ============ */}
        <section className="relative overflow-hidden bg-white py-16 md:py-20 border-b border-line bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px]">
          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            <div className="text-center max-w-[720px] mx-auto mb-10">
              <span className="text-brand text-xs font-bold uppercase tracking-widest block">Leadership Principles</span>
              <div className="w-12 h-1 bg-brand rounded-full mt-3 mx-auto" />
            </div>
            
            <div className="relative rounded-[24px] overflow-hidden aspect-[21/9] mb-10 shadow-md max-h-[280px] border border-line">
              <Image src="/images/about/leadership-principles.jpg" alt="Leadership Principles setup" fill className="object-cover" sizes="100vw" />
              <div className="absolute inset-0 bg-ink/10" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="group card bg-white border border-line rounded-xl p-5 hover:border-brand hover:shadow-md transition-all text-left flex flex-col justify-start relative overflow-hidden">
                <span className="absolute right-4 bottom-1 text-3xl font-mono font-black text-slate-100 group-hover:text-brand/10 transition-colors pointer-events-none select-none">01</span>
                <div className="w-9 h-9 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-4">
                  <Lightbulb className="w-4.5 h-4.5" />
                </div>
                <h4 className="text-txt-strong font-bold text-base leading-snug">Innovation</h4>
                <p className="text-body-sm text-txt-muted mt-1 leading-relaxed">Embracing change and leading-edge technology solutions.</p>
              </div>

              <div className="group card bg-white border border-line rounded-xl p-5 hover:border-brand hover:shadow-md transition-all text-left flex flex-col justify-start relative overflow-hidden">
                <span className="absolute right-4 bottom-1 text-3xl font-mono font-black text-slate-100 group-hover:text-brand/10 transition-colors pointer-events-none select-none">02</span>
                <div className="w-9 h-9 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-4">
                  <CheckCircle className="w-4.5 h-4.5" />
                </div>
                <h4 className="text-txt-strong font-bold text-base leading-snug">Engineering Excellence</h4>
                <p className="text-body-sm text-txt-muted mt-1 leading-relaxed">Delivering high precision and premium quality.</p>
              </div>

              <div className="group card bg-white border border-line rounded-xl p-5 hover:border-brand hover:shadow-md transition-all text-left flex flex-col justify-start relative overflow-hidden">
                <span className="absolute right-4 bottom-1 text-3xl font-mono font-black text-slate-100 group-hover:text-brand/10 transition-colors pointer-events-none select-none">03</span>
                <div className="w-9 h-9 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-4">
                  <Target className="w-4.5 h-4.5" />
                </div>
                <h4 className="text-txt-strong font-bold text-base leading-snug">Customer Success</h4>
                <p className="text-body-sm text-txt-muted mt-1 leading-relaxed">Aligning technology directly with business goals.</p>
              </div>

              <div className="group card bg-white border border-line rounded-xl p-5 hover:border-brand hover:shadow-md transition-all text-left flex flex-col justify-start relative overflow-hidden">
                <span className="absolute right-4 bottom-1 text-3xl font-mono font-black text-slate-100 group-hover:text-brand/10 transition-colors pointer-events-none select-none">04</span>
                <div className="w-9 h-9 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-4">
                  <Users className="w-4.5 h-4.5" />
                </div>
                <h4 className="text-txt-strong font-bold text-base leading-snug">Collaboration</h4>
                <p className="text-body-sm text-txt-muted mt-1 leading-relaxed">Co-innovating with clients and OEM partners.</p>
              </div>

              <div className="group card bg-white border border-line rounded-xl p-5 hover:border-brand hover:shadow-md transition-all text-left flex flex-col justify-start relative overflow-hidden">
                <span className="absolute right-4 bottom-1 text-3xl font-mono font-black text-slate-100 group-hover:text-brand/10 transition-colors pointer-events-none select-none">05</span>
                <div className="w-9 h-9 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-4">
                  <FileText className="w-4.5 h-4.5" />
                </div>
                <h4 className="text-txt-strong font-bold text-base leading-snug">Accountability</h4>
                <p className="text-body-sm text-txt-muted mt-1 leading-relaxed">Taking absolute ownership from concept to commissioning.</p>
              </div>

              <div className="group card bg-white border border-line rounded-xl p-5 hover:border-brand hover:shadow-md transition-all text-left flex flex-col justify-start relative overflow-hidden">
                <span className="absolute right-4 bottom-1 text-3xl font-mono font-black text-slate-100 group-hover:text-brand/10 transition-colors pointer-events-none select-none">06</span>
                <div className="w-9 h-9 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-4">
                  <BookOpen className="w-4.5 h-4.5" />
                </div>
                <h4 className="text-txt-strong font-bold text-base leading-snug">Continuous Learning</h4>
                <p className="text-body-sm text-txt-muted mt-1 leading-relaxed">Staying ahead of emerging OT/IT standards.</p>
              </div>

            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ COMMITMENT BAND (Horizontal Layout Row - Zero Space Gaps) ============ */}
        <section className="relative overflow-hidden bg-slate-50/60 py-12 border-b border-line bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px]">
          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12 justify-between">
              
              {/* Left Side: Category Tag */}
              <div className="lg:w-1/4 flex items-center gap-3 shrink-0">
                <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                  <Target className="w-4.5 h-4.5" />
                </div>
                <span className="text-brand text-xs font-bold uppercase tracking-widest">Our Commitment</span>
              </div>

              {/* Right Side: Simple High-Contrast Quote Block */}
              <div className="lg:w-3/4 text-left border-l-2 border-slate-300 lg:pl-8">
                <h3 className="text-txt-strong font-bold leading-snug text-lg md:text-xl lg:text-2xl">
                  "Our leaders work alongside customers, engineering teams, and technology partners to solve complex industrial challenges while creating sustainable business value."
                </h3>
              </div>

            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ CLOSING STATEMENT (Signature Centered Cinematic Layout) ============ */}
        <section className="relative overflow-hidden text-center py-20 md:py-28 bg-mesh-glow-dark" id="closing">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/images/about/about-closing.jpg"
              alt="DHGsoft vision engineering tomorrow with purpose closing"
              fill
              className="object-cover opacity-50"
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
