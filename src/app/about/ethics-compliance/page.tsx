"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Eye, Scale, ShieldAlert, ShieldCheck, UserCheck, Wrench } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

export default function AboutEthicscompliancePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased font-sans flex flex-col selection:bg-brand selection:text-white">
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="flex-grow">
        {/* ============ 1. PREMIUM HERO (Full-bleed Background Image with Dark Gradient overlay) ============ */}
        <section className="relative min-h-screen flex items-center pt-24 pb-12 text-left overflow-hidden">
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
            <div className="text-brand-hot text-[11px] font-extrabold uppercase tracking-widest">Ethics & Compliance</div>
            <h1 className="text-white mt-5 max-w-[900px] font-extrabold tracking-tight leading-[1.05] text-headline-xl">
              Building Trust Through Integrity and Responsible Engineering
            </h1>
            <p className="text-slate-300 text-body-md mt-6 max-w-[760px] leading-relaxed font-medium">
              Engineering excellence begins with trust. At DHGsoft, ethics, transparency, compliance, and accountability guide every decision we make, every partnership we build, and every solution we deliver.
            </p>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        
        {/* ============ SPLIT IMAGE RIGHT ============ */}
        <section className="relative overflow-hidden bg-white min-h-[85vh] md:min-h-[90vh] flex items-center py-16 md:py-24">
          <div className="absolute top-1/4 left-[5%] w-[350px] h-[350px] bg-brand/5 rounded-full blur-[110px] pointer-events-none z-0" />
          <div className="absolute bottom-1/4 right-[5%] w-[350px] h-[350px] bg-brand-hot/5 rounded-full blur-[110px] pointer-events-none z-0" />
          
          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-7 text-left order-2 lg:order-1 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                    <Scale className="w-6 h-6" />
                  </div>
                  <div className="text-brand text-[11px] font-extrabold uppercase tracking-widest">Overview</div>
                </div>
                
                <h3 className="text-txt-strong mt-2 tracking-tight font-extrabold leading-[1.1] text-3xl md:text-4xl lg:text-5xl" style={{ fontSize: 'clamp(2.25rem, 1.75rem + 1.2vw, 3rem)' }}>Organizations require engineering partners who operate with integrity.</h3>
                <p className="text-txt-strong text-body-md mt-6 leading-relaxed font-normal">As industries continue to embrace digital transformation, organizations require engineering partners who not only deliver innovative technology but also operate with integrity, responsibility, and transparency.</p>
                <p className="text-body-sm text-txt-muted mt-5 leading-relaxed">DHGsoft is committed to maintaining the highest standards of ethical business conduct, regulatory compliance, information security, and professional accountability. We believe long-term partnerships are built through honesty, responsible engineering, and a culture of continuous improvement.</p>
<p className="text-body-sm text-txt-muted mt-5 leading-relaxed">Every employee, partner, and stakeholder is expected to uphold these principles while contributing to the success of our customers and the industries we serve.</p>
              </div>
              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="relative rounded-[32px] overflow-hidden ring-1 ring-brand/10 shadow-2xl aspect-[4/5] hover:scale-[1.02] transition-transform duration-500">
                  <Image src="/images/about/ethics-overview.jpg" alt="Overview photography" fill className="object-cover" sizes="(min-width:1024px) 35vw, 100vw" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ GRID SECTION ============ */}
        <section className="relative overflow-hidden bg-mist min-h-[85vh] md:min-h-[90vh] flex items-center py-16 md:py-24">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-brand/5 rounded-full blur-[130px] pointer-events-none z-0" />
          
          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            <div className="text-center max-w-[720px] mx-auto mb-14">
              <div className="text-brand text-[11px] font-extrabold uppercase tracking-widest">Our Ethical Principles</div>
              <div className="w-16 h-[3px] bg-brand rounded-full mt-5 mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="card bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px]">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h4 className="text-txt-strong font-bold text-lg md:text-xl leading-snug">Integrity</h4>
                <p className="text-body-sm text-txt-muted mt-3 leading-relaxed">We conduct every engagement with honesty, transparency, and accountability. Our commitment to ethical business practices strengthens the trust placed in us by customers, partners, and employees.</p>
              </div>

              <div className="card bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px]">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-txt-strong font-bold text-lg md:text-xl leading-snug">Compliance</h4>
                <p className="text-body-sm text-txt-muted mt-3 leading-relaxed">We align our operations with industry regulations, engineering standards, contractual obligations, and corporate governance practices to ensure responsible project delivery.</p>
              </div>

              <div className="card bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px]">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <h4 className="text-txt-strong font-bold text-lg md:text-xl leading-snug">Information Security</h4>
                <p className="text-body-sm text-txt-muted mt-3 leading-relaxed">Protecting customer information is fundamental to every solution we develop. Our engineering practices emphasize secure architectures, responsible data handling, access management, and continuous risk assessment to safeguard operational and enterprise information.</p>
              </div>

              <div className="card bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px]">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <Wrench className="w-6 h-6" />
                </div>
                <h4 className="text-txt-strong font-bold text-lg md:text-xl leading-snug">Responsible Engineering</h4>
                <p className="text-body-sm text-txt-muted mt-3 leading-relaxed">Every engineering decision considers safety, reliability, scalability, and long-term operational impact. We design solutions that support sustainable industrial growth while maintaining engineering quality and operational integrity.</p>
              </div>

              <div className="card bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px]">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <Eye className="w-6 h-6" />
                </div>
                <h4 className="text-txt-strong font-bold text-lg md:text-xl leading-snug">Transparency</h4>
                <p className="text-body-sm text-txt-muted mt-3 leading-relaxed">Open communication builds stronger partnerships. We maintain clear project governance, transparent reporting, measurable deliverables, and collaborative decision-making throughout every customer engagement.</p>
              </div>

            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ FULL BLEED IMAGE BANNER ============ */}
        <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0 z-0">
            <Image src="/images/about/ethics-principles.jpg" alt="Responsible Engineering Posture graphic" fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/75 to-transparent" />
          </div>
          <div className="relative z-10 max-w-site mx-auto px-gutter md:px-gutter-md text-left w-full">
            <div className="max-w-[720px] space-y-6">
              <div className="text-brand-hot text-[11px] font-extrabold uppercase tracking-widest">Responsible Engineering Posture</div>
              <p className="text-white mt-6 leading-relaxed font-extrabold" style={{ fontSize: 'clamp(1.75rem, 1.4rem + 1vw, 2.25rem)' }}>Our zero-trust information security guidelines and transparent project delivery frameworks ensure client security and operational safety at all times.</p>
            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />


        {/* ============ COMMITMENT BAND ============ */}
        <section className="relative overflow-hidden bg-mist min-h-[50vh] flex items-center py-14 md:py-20 text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand/5 rounded-full blur-[100px] pointer-events-none z-0" />
          <div className="relative z-10 max-w-[1000px] mx-auto px-gutter md:px-gutter-md w-full">
            <div className="text-brand text-[11px] font-extrabold uppercase tracking-widest">Our Commitment</div>
            <h3 className="text-txt-strong mt-6 font-extrabold leading-snug tracking-tight text-3xl md:text-4xl" style={{ fontSize: 'clamp(1.75rem, 1.4rem + 1vw, 2.25rem)' }}>Ethics and compliance are not independent activities. They are integrated into every engineering process, every customer interaction, and every technology solution we deliver.</h3>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ CLOSING STATEMENT (Full bleed) ============ */}
        <section className="relative min-h-[85vh] md:min-h-[90vh] bg-gradient-to-br from-ink to-[#1a1226] text-white overflow-hidden flex items-center text-left py-16 md:py-24">
          <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />
          <div className="relative z-10 max-w-site mx-auto px-gutter md:px-gutter-md w-full">
            <div className="max-w-[900px] space-y-6">
              <div className="text-brand-hot text-[11px] font-extrabold uppercase tracking-widest">Closing Statement</div>
              <h2 className="text-white mt-4 font-black tracking-tight leading-tight text-headline-xl">
                Trust Is Earned Through Every Decision We Make
              </h2>
              <p className="text-slate-300 text-body-md leading-relaxed max-w-[720px] font-medium">
                DHGsoft remains committed to engineering responsibly, protecting customer interests, and delivering solutions built on integrity, quality, and accountability.
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
