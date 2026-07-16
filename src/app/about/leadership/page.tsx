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
            <div className="absolute inset-0 bg-gradient-to-t from-background via-ink/75 to-ink/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 w-full max-w-site mx-auto px-gutter md:px-gutter-md">
            <nav className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-xs mb-7">
              <Link href="/about" className="hover:text-brand-hot transition-colors">About</Link>
              <span className="opacity-50">/</span>
              <span className="text-white font-medium">Leadership Team</span>
            </nav>
            <div className="text-brand-hot text-label-bold uppercase tracking-[0.3em]">Leadership Team</div>
            <h1 className="text-white mt-5 max-w-[900px] font-black tracking-tight leading-[1.05]" style={{ fontSize: 'clamp(36px,5vw,60px)' }}>
              Leadership Driven by Engineering Excellence
            </h1>
            <p className="text-slate-200 text-body-md mt-6 max-w-[760px] leading-relaxed font-semibold">
              Behind every successful transformation is a team committed to innovation, strategic thinking, and engineering excellence. At DHGsoft, our leadership combines deep industrial knowledge with digital expertise to guide customers through complex transformation journeys.
            </p>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        
        {/* ============ SPLIT IMAGE RIGHT ============ */}
        <section className="relative overflow-hidden bg-white min-h-[85vh] md:min-h-[90vh] flex items-center py-16 md:py-24">
          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-7 text-left order-2 lg:order-1 space-y-6">
                <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                  <Heart className="w-6 h-6" />
                </div>
                <div className="text-brand text-label-bold uppercase tracking-[0.25em]">Leadership Philosophy</div>
                <h3 className="text-txt-strong mt-2 tracking-tight font-black leading-tight" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}>Technology alone does not transform businesses.</h3>
                <p className="text-txt-strong mt-6" style={{ fontSize: "20px", lineHeight: "1.6", fontWeight: 600 }}>People, engineering expertise, collaboration, and continuous innovation create meaningful and sustainable change.</p>
                <p className="text-body-md text-txt-muted mt-5">Our leadership philosophy reflects a commitment to long-term partnerships, technical excellence, and measurable customer success.</p>
              </div>
              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="relative rounded-[32px] overflow-hidden ring-1 ring-brand/10 shadow-2xl aspect-[4/5] hover:scale-[1.02] transition-transform duration-500">
                  <Image src="/images/about/leadership-philosophy.jpg" alt="Leadership Philosophy photography" fill className="object-cover" sizes="(min-width:1024px) 35vw, 100vw" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ CEO SECTION ============ */}
        <section className="relative overflow-hidden bg-white min-h-[85vh] md:min-h-[90vh] flex items-center py-16 md:py-24">
          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-4">
                <div className="relative rounded-[32px] overflow-hidden ring-1 ring-brand/10 shadow-2xl aspect-[4/5] bg-gradient-to-br from-ink to-[#1a1226]">
                  <Image src="/CEO_nobg_clean.png" alt="Hitesh Patel photo" fill className="object-cover object-top hover:scale-[1.02] transition-transform duration-500" sizes="(min-width:1024px) 30vw, 100vw" />
                </div>
              </div>
              <div className="lg:col-span-8 text-left space-y-6">
                <div className="text-brand text-label-bold uppercase tracking-[0.25em]">Chief Executive Officer</div>
                <h2 className="text-txt-strong mt-4 font-black" style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}>Hitesh Patel</h2>
                <div className="pl-6 border-l-[4px] border-brand mt-6">
                  <p className="text-txt-strong italic font-serif" style={{ fontSize: "24px", lineHeight: "1.5", fontWeight: 500 }}>"Digital transformation is not about implementing more technology. It is about connecting operations, engineering, and intelligence to create measurable business value."</p>
                </div>
                <p className="text-body-md text-txt-muted mt-6 leading-relaxed">Hitesh Patel leads DHGsoft with a vision of building an engineering-first organization focused on helping industrial enterprises embrace intelligent digital transformation. His leadership combines strategic thinking with practical engineering expertise, ensuring every customer engagement delivers measurable operational outcomes and long-term value.</p>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ GRID SECTION ============ */}
        <section className="relative overflow-hidden bg-mist min-h-[85vh] md:min-h-[90vh] flex items-center py-16 md:py-24">
          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full">
            <div className="text-center max-w-[720px] mx-auto mb-14">
              <div className="text-brand text-label-bold uppercase tracking-[0.25em]">Executive Leadership</div>
              <div className="w-16 h-[3px] bg-brand rounded-full mt-6 mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="card bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px]">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <Cpu className="w-6 h-6" />
                </div>
                <h4 className="text-txt-strong font-extrabold text-xl leading-snug">Chief Technology Officer</h4>
                <p className="text-body-md text-txt-muted mt-4 leading-relaxed">Leading technology strategy, digital innovation, industrial platforms, and enterprise architecture to deliver scalable engineering solutions.</p>
              </div>

              <div className="card bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px]">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <Settings2 className="w-6 h-6" />
                </div>
                <h4 className="text-txt-strong font-extrabold text-xl leading-snug">Vice President – Engineering</h4>
                <p className="text-body-md text-txt-muted mt-4 leading-relaxed">Driving engineering excellence, project delivery, solution implementation, and operational quality across industrial transformation initiatives.</p>
              </div>

              <div className="card bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px]">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h4 className="text-txt-strong font-extrabold text-xl leading-snug">Head of Delivery</h4>
                <p className="text-body-md text-txt-muted mt-4 leading-relaxed">Ensuring successful execution of customer engagements through efficient project management, technical leadership, and continuous operational improvement.</p>
              </div>

            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ FULL WIDTH IMAGE PANEL + GRID ============ */}
        <section className="relative overflow-hidden bg-mist min-h-[85vh] md:min-h-[90vh] flex items-center py-16 md:py-24">
          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full">
            <div className="text-center max-w-[720px] mx-auto mb-10">
              <div className="text-brand text-label-bold uppercase tracking-[0.25em]">Leadership Principles</div>
              <div className="w-16 h-[3px] bg-brand rounded-full mt-5 mx-auto" />
            </div>
            
            <div className="relative rounded-[32px] overflow-hidden aspect-[21/9] mb-10 shadow-xl">
              <Image src="/images/about/leadership-principles.jpg" alt="Leadership Principles dynamic setup" fill className="object-cover" sizes="100vw" />
              <div className="absolute inset-0 bg-ink/20" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="card bg-white border border-line rounded-2xl p-6 hover:border-brand hover:shadow-md transition-all text-left flex flex-col justify-start">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-5">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h4 className="text-txt-strong font-extrabold text-base leading-snug">Innovation</h4>
                <p className="text-body-sm text-txt-muted mt-2 leading-relaxed">Embracing change and leading-edge technology solutions.</p>
              </div>

              <div className="card bg-white border border-line rounded-2xl p-6 hover:border-brand hover:shadow-md transition-all text-left flex flex-col justify-start">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-5">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h4 className="text-txt-strong font-extrabold text-base leading-snug">Engineering Excellence</h4>
                <p className="text-body-sm text-txt-muted mt-2 leading-relaxed">Delivering high precision and premium quality.</p>
              </div>

              <div className="card bg-white border border-line rounded-2xl p-6 hover:border-brand hover:shadow-md transition-all text-left flex flex-col justify-start">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-5">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="text-txt-strong font-extrabold text-base leading-snug">Customer Success</h4>
                <p className="text-body-sm text-txt-muted mt-2 leading-relaxed">Aligning technology directly with business goals.</p>
              </div>

              <div className="card bg-white border border-line rounded-2xl p-6 hover:border-brand hover:shadow-md transition-all text-left flex flex-col justify-start">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-5">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-txt-strong font-extrabold text-base leading-snug">Collaboration</h4>
                <p className="text-body-sm text-txt-muted mt-2 leading-relaxed">Co-innovating with clients and OEM partners.</p>
              </div>

              <div className="card bg-white border border-line rounded-2xl p-6 hover:border-brand hover:shadow-md transition-all text-left flex flex-col justify-start">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-5">
                  <FileText className="w-5 h-5" />
                </div>
                <h4 className="text-txt-strong font-extrabold text-base leading-snug">Accountability</h4>
                <p className="text-body-sm text-txt-muted mt-2 leading-relaxed">Taking absolute ownership from concept to commissioning.</p>
              </div>

              <div className="card bg-white border border-line rounded-2xl p-6 hover:border-brand hover:shadow-md transition-all text-left flex flex-col justify-start">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-5">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="text-txt-strong font-extrabold text-base leading-snug">Continuous Learning</h4>
                <p className="text-body-sm text-txt-muted mt-2 leading-relaxed">Staying ahead of emerging OT/IT standards.</p>
              </div>

            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />


        {/* ============ COMMITMENT BAND ============ */}
        <section className="relative overflow-hidden bg-mist min-h-[50vh] flex items-center py-14 md:py-20 text-center">
          <div className="max-w-[1000px] mx-auto px-6 md:px-12 w-full">
            <div className="text-brand text-label-bold uppercase tracking-[0.25em]">Our Commitment</div>
            <h3 className="text-txt-strong mt-6 font-black leading-snug" style={{ fontSize: 'clamp(24px, 3.5vw, 38px)' }}>Our leaders work alongside customers, engineering teams, and technology partners to solve complex industrial challenges while creating sustainable business value.</h3>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ CLOSING STATEMENT (Full bleed) ============ */}
        <section className="relative min-h-[85vh] md:min-h-[90vh] bg-gradient-to-br from-ink to-[#1a1226] text-white overflow-hidden flex items-center text-left py-16 md:py-24">
          <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />
          <div className="relative z-10 max-w-site mx-auto px-gutter md:px-gutter-md w-full">
            <div className="max-w-[900px] space-y-6">
              <div className="text-brand-hot text-label-bold uppercase tracking-[0.3em]">Closing Statement</div>
              <h2 className="text-white mt-4 font-black tracking-tight leading-tight" style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
                Building the Future Together
              </h2>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-[720px]">
                Leadership is not defined by titles. It is defined by the ability to inspire innovation, build trust, and create lasting impact.
              </p>
              <div className="flex flex-wrap gap-4 pt-6">
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-brand font-semibold hover:-translate-y-0.5 hover:shadow-xl transition-all cursor-pointer text-base"
                >
                  Start a Conversation <ArrowRight className="w-4 h-4" />
                </button>
                <Link href="/about" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors text-base">
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
