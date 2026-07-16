"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen, Compass, Factory, Globe, Headphones, RefreshCw, Wrench } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

export default function AboutOverviewPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased font-sans flex flex-col selection:bg-brand selection:text-white">
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="flex-grow">
        {/* ============ 1. PREMIUM HERO (Full-bleed Background Image with Dark Gradient overlay) ============ */}
        <section className="relative min-h-screen flex items-center pt-24 pb-12 text-left overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/about/overview-hero.jpg" 
              alt="Overview banner" 
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
              <span className="text-white font-medium">Overview</span>
            </nav>
            <div className="text-brand-hot text-label-bold uppercase tracking-[0.3em]">Overview</div>
            <h1 className="text-white mt-5 max-w-[900px] font-black tracking-tight leading-[1.05]" style={{ fontSize: 'clamp(36px,5vw,60px)' }}>
              Engineering Excellence for a Connected Industrial Future
            </h1>
            <p className="text-slate-200 text-body-md mt-6 max-w-[760px] leading-relaxed font-semibold">
              Digital transformation is changing the way industries design, manufacture, operate, and innovate. As industrial environments become more connected and data-driven, organizations require engineering partners capable of integrating operational technology, enterprise systems, and intelligent digital solutions.
            </p>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        
        {/* ============ SPLIT IMAGE LEFT ============ */}
        <section className="relative overflow-hidden bg-white min-h-[85vh] md:min-h-[90vh] flex items-center py-16 md:py-24">
          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-5">
                <div className="relative rounded-[32px] overflow-hidden ring-1 ring-brand/10 shadow-2xl aspect-[4/5] hover:scale-[1.02] transition-transform duration-500">
                  <Image src="/images/about/overview-story.jpg" alt="Our Story photography" fill className="object-cover" sizes="(min-width:1024px) 35vw, 100vw" />
                </div>
              </div>
              <div className="lg:col-span-7 text-left space-y-6">
                <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div className="text-brand text-label-bold uppercase tracking-[0.25em]">Our Story</div>
                <h3 className="text-txt-strong mt-2 tracking-tight font-black leading-tight" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}>Connecting operations, data, enterprise systems, and intelligent technologies</h3>
                <p className="text-txt-strong mt-6" style={{ fontSize: "20px", lineHeight: "1.6", fontWeight: 600 }}>Every industrial organization generates vast amounts of operational data every second. Yet for many businesses, valuable information remains isolated across machines, control systems, enterprise applications, and operational teams.</p>
                <p className="text-body-md text-txt-muted mt-5">DHGsoft was founded with a simple vision: to transform disconnected industrial environments into intelligent, connected enterprises.</p>
<p className="text-body-md text-txt-muted mt-5">Our journey began with a commitment to engineering excellence and a belief that successful digital transformation requires more than implementing new technologies. It requires understanding industrial operations, solving complex engineering challenges, and delivering solutions that create measurable business value.</p>
<p className="text-body-md text-txt-muted mt-5">Over the years, we have expanded our expertise across industrial automation, OT/IT integration, cloud technologies, artificial intelligence, industrial data platforms, cybersecurity, and enterprise applications. This integrated approach allows us to deliver solutions that not only modernize operations but also prepare organizations for the future of connected industry.</p>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ GRID SECTION ============ */}
        <section className="relative overflow-hidden bg-mist min-h-[85vh] md:min-h-[90vh] flex items-center py-16 md:py-24">
          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full">
            <div className="text-center max-w-[720px] mx-auto mb-14">
              <div className="text-brand text-label-bold uppercase tracking-[0.25em]">DHGsoft at a Glance</div>
              <div className="w-16 h-[3px] bg-brand rounded-full mt-6 mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="card bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px]">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <h4 className="text-txt-strong font-extrabold text-xl leading-snug">Industrial Digital Transformation Partner</h4>
                <p className="text-body-md text-txt-muted mt-4 leading-relaxed">Helping organizations build intelligent operations where machines, systems, and people work together through connected ecosystems.</p>
              </div>

              <div className="card bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px]">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <Wrench className="w-6 h-6" />
                </div>
                <h4 className="text-txt-strong font-extrabold text-xl leading-snug">Engineering-First Delivery Approach</h4>
                <p className="text-body-md text-txt-muted mt-4 leading-relaxed">Ensuring precision, technical quality, and structural integrity are incorporated into every automation and data platform solution.</p>
              </div>

              <div className="card bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px]">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <h4 className="text-txt-strong font-extrabold text-xl leading-snug">End-to-End Project Lifecycle Support</h4>
                <p className="text-body-md text-txt-muted mt-4 leading-relaxed">Supporting clients from initial operational discovery and strategy design through to commissioning and long-term optimization.</p>
              </div>

              <div className="card bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px]">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <Globe className="w-6 h-6" />
                </div>
                <h4 className="text-txt-strong font-extrabold text-xl leading-snug">Global Delivery Model</h4>
                <p className="text-body-md text-txt-muted mt-4 leading-relaxed">Leveraging onsite and remote engineering models to provide agile, scalable, and responsive support to global industrial sites.</p>
              </div>

              <div className="card bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px]">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <Factory className="w-6 h-6" />
                </div>
                <h4 className="text-txt-strong font-extrabold text-xl leading-snug">Cross-Industry Engineering Expertise</h4>
                <p className="text-body-md text-txt-muted mt-4 leading-relaxed">Delivering digital systems configured specifically to the regulatory, safety, and operational needs of diverse industrial sectors.</p>
              </div>

              <div className="card bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px]">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <Headphones className="w-6 h-6" />
                </div>
                <h4 className="text-txt-strong font-extrabold text-xl leading-snug">Long-Term Managed Services</h4>
                <p className="text-body-md text-txt-muted mt-4 leading-relaxed">Providing continuous monitoring, telemetry analysis, proactive maintenance, and operational security to safeguard industrial assets.</p>
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
                  <Factory className="w-6 h-6" />
                </div>
                <div className="text-brand text-label-bold uppercase tracking-[0.25em]">Industries We Serve</div>
                <h3 className="text-txt-strong mt-2 tracking-tight font-black leading-tight" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}>Engineering expertise tailored to your specific industry environment</h3>
                <p className="text-txt-strong mt-6" style={{ fontSize: "20px", lineHeight: "1.6", fontWeight: 600 }}>Every industry presents unique operational challenges. Our engineering solutions are designed to address these challenges while creating connected, intelligent, and resilient operations.</p>
                <p className="text-body-md text-txt-muted mt-5">Our engineering expertise supports organizations across a wide range of industrial sectors, providing digital solutions that optimize resources, improve efficiency, and support sustainable growth.</p>
              </div>
              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="relative rounded-[32px] overflow-hidden ring-1 ring-brand/10 shadow-2xl aspect-[4/5] hover:scale-[1.02] transition-transform duration-500">
                  <Image src="/images/about/overview-industries.jpg" alt="Industries We Serve photography" fill className="object-cover" sizes="(min-width:1024px) 35vw, 100vw" />
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
            <h3 className="text-txt-strong mt-6 font-black leading-snug" style={{ fontSize: 'clamp(24px, 3.5vw, 38px)' }}>By connecting operational technology, enterprise systems, and intelligent digital solutions, DHGsoft helps organizations transform complexity into opportunity and innovation into measurable business value.</h3>
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
                Building the Future of Connected Industries
              </h2>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-[720px]">
                Engineering is at the heart of everything we do. Together with our customers, partners, and engineering teams, we are shaping the future of intelligent industry.
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
