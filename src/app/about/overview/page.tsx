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
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/65 to-ink/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/40 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 w-full max-w-site mx-auto px-gutter md:px-gutter-md">
            <nav className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-xs mb-7">
              <Link href="/about" className="hover:text-brand-hot transition-colors">About</Link>
              <span className="opacity-50">/</span>
              <span className="text-white font-medium">Overview</span>
            </nav>
            <div className="text-brand-hot text-[11px] font-extrabold uppercase tracking-widest">Overview</div>
            <h1 className="text-white mt-5 max-w-[900px] font-extrabold tracking-tight leading-[1.05] text-headline-xl">
              Engineering Excellence for a Connected Industrial Future
            </h1>
            <p className="text-slate-300 text-body-md mt-6 max-w-[760px] leading-relaxed font-medium">
              Digital transformation is changing the way industries design, manufacture, operate, and innovate. As industrial environments become more connected and data-driven, organizations require engineering partners capable of integrating operational technology, enterprise systems, and intelligent digital solutions.
            </p>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        
        {/* ============ SPLIT IMAGE LEFT ============ */}
        <section className="relative overflow-hidden bg-mesh-glow-light bg-dot-matrix min-h-[85vh] md:min-h-[90vh] flex items-center py-16 md:py-24">
          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-5">
                <div className="relative rounded-[32px] overflow-hidden ring-1 ring-brand/10 shadow-2xl aspect-[4/5] hover:scale-[1.02] transition-transform duration-500">
                  <Image src="/images/about/overview-story.jpg" alt="Our Story photography" fill className="object-cover" sizes="(min-width:1024px) 35vw, 100vw" />
                </div>
              </div>
              <div className="lg:col-span-7 text-left space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div className="text-brand text-[11px] font-extrabold uppercase tracking-widest">Our Story</div>
                </div>
                
                <h3 className="text-txt-strong mt-2 tracking-tight font-extrabold leading-[1.1] text-3xl md:text-4xl lg:text-5xl" style={{ fontSize: 'clamp(2.25rem, 1.75rem + 1.2vw, 3rem)' }}>Connecting operations, data, enterprise systems, and intelligent technologies</h3>
                <p className="text-txt-strong text-body-md mt-6 leading-relaxed font-normal">Every industrial organization generates vast amounts of operational data every second. Yet for many businesses, valuable information remains isolated across machines, control systems, enterprise applications, and operational teams.</p>
                <p className="text-body-sm text-txt-muted mt-5 leading-relaxed">DHGsoft was founded with a simple vision: to transform disconnected industrial environments into intelligent, connected enterprises.</p>
<p className="text-body-sm text-txt-muted mt-5 leading-relaxed">Our journey began with a commitment to engineering excellence and a belief that successful digital transformation requires more than implementing new technologies. It requires understanding industrial operations, solving complex engineering challenges, and delivering solutions that create measurable business value.</p>
<p className="text-body-sm text-txt-muted mt-5 leading-relaxed">Over the years, we have expanded our expertise across industrial automation, OT/IT integration, cloud technologies, artificial intelligence, industrial data platforms, cybersecurity, and enterprise applications. This integrated approach allows us to deliver solutions that not only modernize operations but also prepare organizations for the future of connected industry.</p>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ GRID SECTION ============ */}
        <section className="relative overflow-hidden bg-mesh-glow-light bg-tech-grid min-h-[85vh] md:min-h-[90vh] flex items-center py-16 md:py-24">
          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            <div className="text-center max-w-[720px] mx-auto mb-14">
              <div className="text-brand text-[11px] font-extrabold uppercase tracking-widest">DHGsoft at a Glance</div>
              <div className="w-16 h-[3px] bg-brand rounded-full mt-5 mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="card bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px]">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <h4 className="text-txt-strong font-bold text-lg md:text-xl leading-snug">Industrial Digital Transformation Partner</h4>
                <p className="text-body-sm text-txt-muted mt-3 leading-relaxed">Helping organizations build intelligent operations where machines, systems, and people work together through connected ecosystems.</p>
              </div>

              <div className="card bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px]">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <Wrench className="w-6 h-6" />
                </div>
                <h4 className="text-txt-strong font-bold text-lg md:text-xl leading-snug">Engineering-First Delivery Approach</h4>
                <p className="text-body-sm text-txt-muted mt-3 leading-relaxed">Ensuring precision, technical quality, and structural integrity are incorporated into every automation and data platform solution.</p>
              </div>

              <div className="card bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px]">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <h4 className="text-txt-strong font-bold text-lg md:text-xl leading-snug">End-to-End Project Lifecycle Support</h4>
                <p className="text-body-sm text-txt-muted mt-3 leading-relaxed">Supporting clients from initial operational discovery and strategy design through to commissioning and long-term optimization.</p>
              </div>

              <div className="card bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px]">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <Globe className="w-6 h-6" />
                </div>
                <h4 className="text-txt-strong font-bold text-lg md:text-xl leading-snug">Global Delivery Model</h4>
                <p className="text-body-sm text-txt-muted mt-3 leading-relaxed">Leveraging onsite and remote engineering models to provide agile, scalable, and responsive support to global industrial sites.</p>
              </div>

              <div className="card bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px]">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <Factory className="w-6 h-6" />
                </div>
                <h4 className="text-txt-strong font-bold text-lg md:text-xl leading-snug">Cross-Industry Engineering Expertise</h4>
                <p className="text-body-sm text-txt-muted mt-3 leading-relaxed">Delivering digital systems configured specifically to the regulatory, safety, and operational needs of diverse industrial sectors.</p>
              </div>

              <div className="card bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px]">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <Headphones className="w-6 h-6" />
                </div>
                <h4 className="text-txt-strong font-bold text-lg md:text-xl leading-snug">Long-Term Managed Services</h4>
                <p className="text-body-sm text-txt-muted mt-3 leading-relaxed">Providing continuous monitoring, telemetry analysis, proactive maintenance, and operational security to safeguard industrial assets.</p>
              </div>

            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ INDUSTRIES WE SERVE (Creative Split Grid Layout) ============ */}
        <section className="relative overflow-hidden bg-mesh-glow-light bg-dot-matrix py-20 md:py-28">
          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Copy & Styled Grid of Industries (lg:col-span-7) */}
              <div className="lg:col-span-7 text-left space-y-6 order-2 lg:order-1">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                    <Factory className="w-6 h-6" />
                  </div>
                  <div className="text-brand text-[11px] font-extrabold uppercase tracking-widest">Industries We Serve</div>
                </div>
                
                <h3 className="text-txt-strong mt-2 tracking-tight font-extrabold leading-[1.1]" style={{ fontSize: 'clamp(2.25rem, 1.75rem + 1.2vw, 3rem)' }}>
                  Engineering expertise tailored to your specific industry environment
                </h3>
                <p className="text-txt-strong text-body-md leading-relaxed font-normal">
                  Every industry presents unique operational challenges. Our engineering solutions are designed to address these challenges while creating connected, intelligent, and resilient operations.
                </p>

                {/* Industries Miniature Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <Link href="/industries/industrial-manufacturing" className="flex items-center gap-3 p-3 bg-white border border-line rounded-xl hover:border-brand hover:shadow-md transition-all group">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-brand/10 text-slate-600 group-hover:text-brand flex items-center justify-center transition-colors">
                      <Factory className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-txt-strong">Manufacturing</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-auto text-slate-300 group-hover:text-brand transition-colors" />
                  </Link>

                  <Link href="/industries/life-sciences" className="flex items-center gap-3 p-3 bg-white border border-line rounded-xl hover:border-brand hover:shadow-md transition-all group">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-brand/10 text-slate-600 group-hover:text-brand flex items-center justify-center transition-colors">
                      <Globe className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-txt-strong">Life Sciences</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-auto text-slate-300 group-hover:text-brand transition-colors" />
                  </Link>

                  <Link href="/industries/semiconductor" className="flex items-center gap-3 p-3 bg-white border border-line rounded-xl hover:border-brand hover:shadow-md transition-all group">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-brand/10 text-slate-600 group-hover:text-brand flex items-center justify-center transition-colors">
                      <RefreshCw className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-txt-strong">Semiconductor</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-auto text-slate-300 group-hover:text-brand transition-colors" />
                  </Link>

                  <Link href="/industries/food-beverages" className="flex items-center gap-3 p-3 bg-white border border-line rounded-xl hover:border-brand hover:shadow-md transition-all group">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-brand/10 text-slate-600 group-hover:text-brand flex items-center justify-center transition-colors">
                      <Compass className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-txt-strong">Food & Beverages</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-auto text-slate-300 group-hover:text-brand transition-colors" />
                  </Link>

                  <Link href="/industries/power-utilities" className="flex items-center gap-3 p-3 bg-white border border-line rounded-xl hover:border-brand hover:shadow-md transition-all group">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-brand/10 text-slate-600 group-hover:text-brand flex items-center justify-center transition-colors">
                      <Wrench className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-txt-strong">Power & Utilities</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-auto text-slate-300 group-hover:text-brand transition-colors" />
                  </Link>

                  <Link href="/industries/oil-gas" className="flex items-center gap-3 p-3 bg-white border border-line rounded-xl hover:border-brand hover:shadow-md transition-all group">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-brand/10 text-slate-600 group-hover:text-brand flex items-center justify-center transition-colors">
                      <Headphones className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-txt-strong">Oil & Gas</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-auto text-slate-300 group-hover:text-brand transition-colors" />
                  </Link>
                </div>
              </div>
              
              {/* Right Column: Image (lg:col-span-5) */}
              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="relative rounded-[32px] overflow-hidden ring-1 ring-brand/10 shadow-2xl aspect-[4/5] hover:scale-[1.01] transition-transform duration-500 max-h-[460px]">
                  <Image src="/images/about/overview-industries.jpg" alt="Industries We Serve photography" fill className="object-cover" sizes="(min-width:1024px) 35vw, 100vw" />
                </div>
              </div>

            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />


        {/* ============ COMMITMENT BAND ============ */}
        <section className="relative overflow-hidden bg-mesh-glow-light bg-tech-grid min-h-[50vh] flex items-center py-14 md:py-20 text-center">
          <div className="relative z-10 max-w-[1000px] mx-auto px-gutter md:px-gutter-md w-full">
            <div className="text-brand text-[11px] font-extrabold uppercase tracking-widest">Our Commitment</div>
            <h3 className="text-txt-strong mt-6 font-extrabold leading-snug tracking-tight text-3xl md:text-4xl" style={{ fontSize: 'clamp(1.75rem, 1.4rem + 1vw, 2.25rem)' }}>By connecting operational technology, enterprise systems, and intelligent digital solutions, DHGsoft helps organizations transform complexity into opportunity and innovation into measurable business value.</h3>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ CLOSING STATEMENT (Centered Cinematic Layout) ============ */}
        <section className="relative overflow-hidden text-center py-20 md:py-28 bg-mesh-glow-dark" id="closing">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/images/about/overview-closing.jpg"
              alt="DHGsoft connected industries digital transformation closing"
              fill
              className="object-cover opacity-50"
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
                Building the Future
                <br />
                <span className="text-gradient-brand">of Connected Industries</span>
              </h2>

              <p className="text-slate-300 max-w-xl leading-relaxed text-body-md font-medium text-center">
                Engineering is at the heart of everything we do. Together with our customers, partners, and engineering teams, we are shaping the future of intelligent industry.
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
