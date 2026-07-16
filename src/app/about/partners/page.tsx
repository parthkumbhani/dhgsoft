"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen, Cpu, Globe, Handshake, Network, Smile } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

export default function AboutPartnersPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased font-sans flex flex-col selection:bg-brand selection:text-white">
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="flex-grow">
        {/* ============ 1. PREMIUM HERO (Full-bleed Background Image with Dark Gradient overlay) ============ */}
        <section className="relative min-h-screen flex items-center pt-24 pb-12 text-left overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/about/partners-hero.jpg" 
              alt="Partner Ecosystem banner" 
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
              <span className="text-white font-medium">Partner Ecosystem</span>
            </nav>
            <div className="text-brand-hot text-label-bold uppercase tracking-[0.3em]">Partner Ecosystem</div>
            <h1 className="text-white mt-5 max-w-[900px] font-black tracking-tight leading-[1.05]" style={{ fontSize: 'clamp(36px,5vw,60px)' }}>
              Strong Partnerships. Greater Innovation.
            </h1>
            <p className="text-slate-200 text-body-md mt-6 max-w-[760px] leading-relaxed font-semibold">
              Industrial transformation is built on collaboration. At DHGsoft, we work alongside customers, technology providers, academic institutions, research organizations, and strategic partners to deliver innovative, scalable, and future-ready engineering solutions.
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
                  <Globe className="w-6 h-6" />
                </div>
                <div className="text-brand text-label-bold uppercase tracking-[0.25em]">Overview</div>
                <h3 className="text-txt-strong mt-2 tracking-tight font-black leading-tight" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}>No organization transforms industries alone.</h3>
                <p className="text-txt-strong mt-6" style={{ fontSize: "20px", lineHeight: "1.6", fontWeight: 600 }}>Digital transformation requires the combined expertise of engineering professionals, technology leaders, research communities, and industrial organizations working together toward a common goal.</p>
                <p className="text-body-md text-txt-muted mt-5">DHGsoft believes long-term partnerships create stronger solutions, faster innovation, and sustainable business growth.</p>
<p className="text-body-md text-txt-muted mt-5">Our Partner Ecosystem enables us to deliver integrated technologies, accelerate implementation, and continuously expand our engineering capabilities while creating greater value for our customers.</p>
              </div>
              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="relative rounded-[32px] overflow-hidden ring-1 ring-brand/10 shadow-2xl aspect-[4/5] hover:scale-[1.02] transition-transform duration-500">
                  <Image src="/images/about/partners-overview.jpg" alt="Overview photography" fill className="object-cover" sizes="(min-width:1024px) 35vw, 100vw" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ SPLIT IMAGE LEFT ============ */}
        <section className="relative overflow-hidden bg-white min-h-[85vh] md:min-h-[90vh] flex items-center py-16 md:py-24">
          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-5">
                <div className="relative rounded-[32px] overflow-hidden ring-1 ring-brand/10 shadow-2xl aspect-[4/5] hover:scale-[1.02] transition-transform duration-500">
                  <Image src="/images/about/partners-model.jpg" alt="Our Collaboration Model photography" fill className="object-cover" sizes="(min-width:1024px) 35vw, 100vw" />
                </div>
              </div>
              <div className="lg:col-span-7 text-left space-y-6">
                <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                  <Handshake className="w-6 h-6" />
                </div>
                <div className="text-brand text-label-bold uppercase tracking-[0.25em]">Our Collaboration Model</div>
                <h3 className="text-txt-strong mt-2 tracking-tight font-black leading-tight" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}>We build partnerships based on trust, shared expertise, and long-term collaboration.</h3>
                <p className="text-txt-strong mt-6" style={{ fontSize: "20px", lineHeight: "1.6", fontWeight: 600 }}>Our ecosystem combines engineering excellence with global technology platforms to deliver connected industrial solutions across diverse industries.</p>
                <p className="text-body-md text-txt-muted mt-5">Every partnership is focused on solving real operational challenges while preparing organizations for the future of intelligent industry.</p>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ GRID SECTION ============ */}
        <section className="relative overflow-hidden bg-mist min-h-[85vh] md:min-h-[90vh] flex items-center py-16 md:py-24">
          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full">
            <div className="text-center max-w-[720px] mx-auto mb-14">
              <div className="text-brand text-label-bold uppercase tracking-[0.25em]">Our Partner Network</div>
              <div className="w-16 h-[3px] bg-brand rounded-full mt-6 mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="card bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px]">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <Smile className="w-6 h-6" />
                </div>
                <h4 className="text-txt-strong font-extrabold text-xl leading-snug">Customer Partnerships</h4>
                <p className="text-body-md text-txt-muted mt-4 leading-relaxed">Every customer relationship is built on collaboration rather than transactions. We work closely with customers throughout strategy, implementation, and support to ensure operational value.</p>
              </div>

              <div className="card bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px]">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <Cpu className="w-6 h-6" />
                </div>
                <h4 className="text-txt-strong font-extrabold text-xl leading-snug">Technology Collaboration</h4>
                <p className="text-body-md text-txt-muted mt-4 leading-relaxed">DHGsoft collaborates with leading technology providers to integrate automation platforms, enterprise systems, cloud infrastructure, cybersecurity, and advanced analytics.</p>
              </div>

              <div className="card bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px]">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h4 className="text-txt-strong font-extrabold text-xl leading-snug">Academic & Research Collaboration</h4>
                <p className="text-body-md text-txt-muted mt-4 leading-relaxed">We actively encourage collaboration with universities, engineering institutions, and research organizations to support innovation, workforce development, and emerging technologies.</p>
              </div>

              <div className="card bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px]">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <Network className="w-6 h-6" />
                </div>
                <h4 className="text-txt-strong font-extrabold text-xl leading-snug">System Integration Network</h4>
                <p className="text-body-md text-txt-muted mt-4 leading-relaxed">DHGsoft partners with specialized integrators to deliver scalable solutions that connect operational technology, enterprise systems, and cloud platforms.</p>
              </div>

            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />


        {/* ============ COMMITMENT BAND ============ */}
        <section className="relative overflow-hidden bg-mist min-h-[50vh] flex items-center py-14 md:py-20 text-center">
          <div className="max-w-[1000px] mx-auto px-6 md:px-12 w-full">
            <div className="text-brand text-label-bold uppercase tracking-[0.25em]">Our Commitment</div>
            <h3 className="text-txt-strong mt-6 font-black leading-snug" style={{ fontSize: 'clamp(24px, 3.5vw, 38px)' }}>Our partnerships are built to create long-term value for customers by combining engineering expertise, technology innovation, and collaborative problem-solving.</h3>
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
                Innovation Grows Stronger Through Collaboration
              </h2>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-[720px]">
                Together with our customers and partners, we continue building connected, intelligent, and sustainable industrial enterprises.
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
