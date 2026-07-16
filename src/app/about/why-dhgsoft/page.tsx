"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Factory, Network, RefreshCw, Sliders, Target, Wrench } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

export default function AboutWhydhgsoftPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased font-sans flex flex-col selection:bg-brand selection:text-white">
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="flex-grow">
        {/* ============ 1. PREMIUM HERO (Full-bleed Background Image with Dark Gradient overlay) ============ */}
        <section className="relative min-h-screen flex items-center pt-24 pb-12 text-left overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/about/why-hero.jpg" 
              alt="Why DHGsoft banner" 
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
              <span className="text-white font-medium">Why DHGsoft</span>
            </nav>
            <div className="text-brand-hot text-label-bold uppercase tracking-[0.3em]">Why DHGsoft</div>
            <h1 className="text-white mt-5 max-w-[900px] font-black tracking-tight leading-[1.05]" style={{ fontSize: 'clamp(36px,5vw,60px)' }}>
              Why Organizations Choose DHGsoft
            </h1>
            <p className="text-slate-200 text-body-md mt-6 max-w-[760px] leading-relaxed font-semibold">
              Industrial transformation requires more than technology implementation. It requires an engineering partner capable of understanding operations, integrating complex systems, and delivering measurable business outcomes.
            </p>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        
        {/* ============ FULL WIDTH IMAGE PANEL + GRID ============ */}
        <section className="relative overflow-hidden bg-mist min-h-[85vh] md:min-h-[90vh] flex items-center py-16 md:py-24">
          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full">
            <div className="text-center max-w-[720px] mx-auto mb-10">
              <div className="text-brand text-label-bold uppercase tracking-[0.25em]">Core Strengths</div>
              <div className="w-16 h-[3px] bg-brand rounded-full mt-5 mx-auto" />
            </div>
            
            <div className="relative rounded-[32px] overflow-hidden aspect-[21/9] mb-10 shadow-xl">
              <Image src="/images/about/why-strengths.jpg" alt="Core Strengths dynamic setup" fill className="object-cover" sizes="100vw" />
              <div className="absolute inset-0 bg-ink/20" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="card bg-white border border-line rounded-2xl p-6 hover:border-brand hover:shadow-md transition-all text-left flex flex-col justify-start">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-5">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h4 className="text-txt-strong font-extrabold text-base leading-snug">End-to-End Expertise</h4>
                <p className="text-body-sm text-txt-muted mt-2 leading-relaxed">From strategy and consulting to engineering, implementation, optimization, and managed services, DHGsoft delivers complete lifecycle support under one trusted partner.</p>
              </div>

              <div className="card bg-white border border-line rounded-2xl p-6 hover:border-brand hover:shadow-md transition-all text-left flex flex-col justify-start">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-5">
                  <Factory className="w-5 h-5" />
                </div>
                <h4 className="text-txt-strong font-extrabold text-base leading-snug">Industrial Domain Knowledge</h4>
                <p className="text-body-sm text-txt-muted mt-2 leading-relaxed">Our teams understand industrial environments because engineering is at the core of everything we do. We combine operational knowledge with modern technologies to solve real challenges.</p>
              </div>

              <div className="card bg-white border border-line rounded-2xl p-6 hover:border-brand hover:shadow-md transition-all text-left flex flex-col justify-start">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-5">
                  <Network className="w-5 h-5" />
                </div>
                <h4 className="text-txt-strong font-extrabold text-base leading-snug">Connected Intelligence</h4>
                <p className="text-body-sm text-txt-muted mt-2 leading-relaxed">Operational data becomes valuable only when it supports better decision-making. We help organizations transform fragmented information into connected intelligence that improves performance.</p>
              </div>

              <div className="card bg-white border border-line rounded-2xl p-6 hover:border-brand hover:shadow-md transition-all text-left flex flex-col justify-start">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-5">
                  <Sliders className="w-5 h-5" />
                </div>
                <h4 className="text-txt-strong font-extrabold text-base leading-snug">Technology Agnostic</h4>
                <p className="text-body-sm text-txt-muted mt-2 leading-relaxed">Every customer has unique requirements. We recommend and implement technologies based on operational needs rather than vendor preferences, providing flexible and future-ready solutions.</p>
              </div>

              <div className="card bg-white border border-line rounded-2xl p-6 hover:border-brand hover:shadow-md transition-all text-left flex flex-col justify-start">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-5">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="text-txt-strong font-extrabold text-base leading-snug">Customer-Centric Delivery</h4>
                <p className="text-body-sm text-txt-muted mt-2 leading-relaxed">Every engagement begins with understanding customer objectives. We work collaboratively throughout the transformation journey, ensuring solutions deliver measurable long-term value.</p>
              </div>

              <div className="card bg-white border border-line rounded-2xl p-6 hover:border-brand hover:shadow-md transition-all text-left flex flex-col justify-start">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-5">
                  <Wrench className="w-5 h-5" />
                </div>
                <h4 className="text-txt-strong font-extrabold text-base leading-snug">Engineering-First Approach</h4>
                <p className="text-body-sm text-txt-muted mt-2 leading-relaxed">Unlike traditional IT consulting firms, DHGsoft approaches digital transformation through engineering, ensuring solutions integrate seamlessly and support safety and scalability.</p>
              </div>

            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ SPLIT IMAGE RIGHT ============ */}
        <section className="relative overflow-hidden bg-white min-h-[85vh] md:min-h-[90vh] flex items-center py-16 md:py-24">
          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-7 text-left order-2 lg:order-1 space-y-6">
                <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div className="text-brand text-label-bold uppercase tracking-[0.25em]">Why It Matters</div>
                <h3 className="text-txt-strong mt-2 tracking-tight font-black leading-tight" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}>Connecting operations, data, enterprise systems, and intelligent technologies</h3>
                <p className="text-txt-strong mt-6" style={{ fontSize: "20px", lineHeight: "1.6", fontWeight: 600 }}>Organizations choose DHGsoft because they need more than technology.</p>
                <p className="text-body-md text-txt-muted mt-5">They need a trusted engineering partner capable of connecting operations, data, enterprise systems, and intelligent technologies into one integrated ecosystem.</p>
              </div>
              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="relative rounded-[32px] overflow-hidden ring-1 ring-brand/10 shadow-2xl aspect-[4/5] hover:scale-[1.02] transition-transform duration-500">
                  <Image src="/images/about/why-matters.jpg" alt="Why It Matters photography" fill className="object-cover" sizes="(min-width:1024px) 35vw, 100vw" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />


        {/* ============ COMMITMENT BAND ============ */}
        <section className="relative overflow-hidden bg-mist min-h-[50vh] flex items-center py-14 md:py-20 text-center">
          <div className="max-w-[1000px] mx-auto px-6 md:px-12 w-full">
            <div className="text-brand text-label-bold uppercase tracking-[0.25em]">Our Commitment</div>
            <h3 className="text-txt-strong mt-6 font-black leading-snug" style={{ fontSize: 'clamp(24px, 3.5vw, 38px)' }}>We bring deep industry expertise, technology excellence, and a customer-centric delivery model to every engagement.</h3>
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
                Connected Intelligence, Trusted Partnerships
              </h2>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-[720px]">
                Engineering expertise. Connected intelligence. Trusted partnerships. These principles define why organizations continue to choose DHGsoft as their Industrial Digital Transformation partner.
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
