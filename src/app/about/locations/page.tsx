"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock, Cpu, Globe, Network, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

export default function AboutLocationsPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased font-sans flex flex-col selection:bg-brand selection:text-white">
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="flex-grow">
        {/* ============ 1. PREMIUM HERO (Full-bleed Background Image with Dark Gradient overlay) ============ */}
        <section className="relative min-h-screen flex items-center pt-24 pb-12 text-left overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/about/locations-hero.jpg" 
              alt="Global Presence banner" 
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
              <span className="text-white font-medium">Global Presence</span>
            </nav>
            <div className="text-brand-hot text-[11px] font-extrabold uppercase tracking-widest">Global Presence</div>
            <h1 className="text-white mt-5 max-w-[900px] font-extrabold tracking-tight leading-[1.05] text-headline-xl">
              Delivering Engineering Excellence Across Global Industries
            </h1>
            <p className="text-slate-300 text-body-md mt-6 max-w-[760px] leading-relaxed font-medium">
              Industrial transformation knows no boundaries. DHGsoft supports organizations through a flexible global delivery model that combines local expertise with international engineering capabilities.
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
                    <Globe className="w-6 h-6" />
                  </div>
                  <div className="text-brand text-[11px] font-extrabold uppercase tracking-widest">Overview</div>
                </div>
                
                <h3 className="text-txt-strong mt-2 tracking-tight font-extrabold leading-[1.1] text-3xl md:text-4xl lg:text-5xl" style={{ fontSize: 'clamp(2.25rem, 1.75rem + 1.2vw, 3rem)' }}>Delivering engineering expertise wherever operations exist.</h3>
                <p className="text-txt-strong text-body-md mt-6 leading-relaxed font-normal">Modern industrial organizations require partners capable of delivering engineering expertise wherever operations exist.</p>
                <p className="text-body-sm text-txt-muted mt-5 leading-relaxed">DHGsoft combines onsite collaboration, offshore engineering, remote services, and continuous operational support to help customers accelerate digital transformation while maintaining consistency, quality, and responsiveness.</p>
<p className="text-body-sm text-txt-muted mt-5 leading-relaxed">Our flexible delivery approach enables organizations to scale projects efficiently while accessing specialized engineering expertise across multiple technologies and industries.</p>
              </div>
              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="relative rounded-[32px] overflow-hidden ring-1 ring-brand/10 shadow-2xl aspect-[4/5] hover:scale-[1.02] transition-transform duration-500">
                  <Image src="/images/about/locations-delivery.jpg" alt="Overview photography" fill className="object-cover" sizes="(min-width:1024px) 35vw, 100vw" />
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
              <div className="text-brand text-[11px] font-extrabold uppercase tracking-widest">Global Delivery Model</div>
              <div className="w-16 h-[3px] bg-brand rounded-full mt-5 mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="card bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px]">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="text-txt-strong font-bold text-lg md:text-xl leading-snug">Onsite Engineering</h4>
                <p className="text-body-sm text-txt-muted mt-3 leading-relaxed">Working directly with customer teams to support implementation, commissioning, consulting, and project execution.</p>
              </div>

              <div className="card bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px]">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <Cpu className="w-6 h-6" />
                </div>
                <h4 className="text-txt-strong font-bold text-lg md:text-xl leading-snug">Offshore Engineering</h4>
                <p className="text-body-sm text-txt-muted mt-3 leading-relaxed">Providing dedicated engineering resources that improve scalability, reduce project timelines, and support continuous development.</p>
              </div>

              <div className="card bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px]">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <Network className="w-6 h-6" />
                </div>
                <h4 className="text-txt-strong font-bold text-lg md:text-xl leading-snug">Remote Operations</h4>
                <p className="text-body-sm text-txt-muted mt-3 leading-relaxed">Delivering secure remote engineering services, monitoring, diagnostics, optimization, and technical assistance through connected digital platforms.</p>
              </div>

              <div className="card bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px]">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <Clock className="w-6 h-6" />
                </div>
                <h4 className="text-txt-strong font-bold text-lg md:text-xl leading-snug">24x7 Support</h4>
                <p className="text-body-sm text-txt-muted mt-3 leading-relaxed">Ensuring continuous operational reliability through proactive monitoring, issue resolution, and managed engineering services.</p>
              </div>

            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ FULL BLEED IMAGE BANNER ============ */}
        <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0 z-0">
            <Image src="/images/about/locations-offices.jpg" alt="International Offices graphic" fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/75 to-transparent" />
          </div>
          <div className="relative z-10 max-w-site mx-auto px-gutter md:px-gutter-md text-left w-full">
            <div className="max-w-[720px] space-y-6">
              <div className="text-brand-hot text-[11px] font-extrabold uppercase tracking-widest">International Offices</div>
              <p className="text-white mt-6 leading-relaxed font-extrabold" style={{ fontSize: 'clamp(1.75rem, 1.4rem + 1vw, 2.25rem)' }}>With major delivery centers in India (Ahmedabad & Pune) and international partner collaborations, we support global operations with agility and high technical capability.</p>
            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ CHIPS SECTION ============ */}
        <section className="relative overflow-hidden bg-white min-h-[85vh] md:min-h-[90vh] flex items-center py-16 md:py-24">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-brand/5 rounded-full blur-[100px] pointer-events-none z-0" />
          
          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            <div className="text-center max-w-[720px] mx-auto mb-12">
              <div className="text-brand text-[11px] font-extrabold uppercase tracking-widest">Industries We Support</div>
              <div className="w-16 h-[3px] bg-brand rounded-full mt-5 mx-auto" />
            </div>
            <div className="flex flex-wrap justify-center gap-3.5 max-w-[1000px] mx-auto">
              <span className="text-body-sm text-txt-strong bg-mist border border-line rounded-full px-5 py-2.5 font-semibold hover:border-brand hover:text-brand transition-colors cursor-default select-none shrink-0">Industrial Manufacturing</span><span className="text-body-sm text-txt-strong bg-mist border border-line rounded-full px-5 py-2.5 font-semibold hover:border-brand hover:text-brand transition-colors cursor-default select-none shrink-0">Automotive</span><span className="text-body-sm text-txt-strong bg-mist border border-line rounded-full px-5 py-2.5 font-semibold hover:border-brand hover:text-brand transition-colors cursor-default select-none shrink-0">Semiconductor</span><span className="text-body-sm text-txt-strong bg-mist border border-line rounded-full px-5 py-2.5 font-semibold hover:border-brand hover:text-brand transition-colors cursor-default select-none shrink-0">Life Sciences</span><span className="text-body-sm text-txt-strong bg-mist border border-line rounded-full px-5 py-2.5 font-semibold hover:border-brand hover:text-brand transition-colors cursor-default select-none shrink-0">Chemical Manufacturing</span><span className="text-body-sm text-txt-strong bg-mist border border-line rounded-full px-5 py-2.5 font-semibold hover:border-brand hover:text-brand transition-colors cursor-default select-none shrink-0">Food & Beverage</span><span className="text-body-sm text-txt-strong bg-mist border border-line rounded-full px-5 py-2.5 font-semibold hover:border-brand hover:text-brand transition-colors cursor-default select-none shrink-0">Oil & Gas</span><span className="text-body-sm text-txt-strong bg-mist border border-line rounded-full px-5 py-2.5 font-semibold hover:border-brand hover:text-brand transition-colors cursor-default select-none shrink-0">Power & Utilities</span><span className="text-body-sm text-txt-strong bg-mist border border-line rounded-full px-5 py-2.5 font-semibold hover:border-brand hover:text-brand transition-colors cursor-default select-none shrink-0">Mining & Metals</span><span className="text-body-sm text-txt-strong bg-mist border border-line rounded-full px-5 py-2.5 font-semibold hover:border-brand hover:text-brand transition-colors cursor-default select-none shrink-0">Water & Wastewater</span><span className="text-body-sm text-txt-strong bg-mist border border-line rounded-full px-5 py-2.5 font-semibold hover:border-brand hover:text-brand transition-colors cursor-default select-none shrink-0">Consumer Packaged Goods</span><span className="text-body-sm text-txt-strong bg-mist border border-line rounded-full px-5 py-2.5 font-semibold hover:border-brand hover:text-brand transition-colors cursor-default select-none shrink-0">Data Centres</span><span className="text-body-sm text-txt-strong bg-mist border border-line rounded-full px-5 py-2.5 font-semibold hover:border-brand hover:text-brand transition-colors cursor-default select-none shrink-0">EPC</span><span className="text-body-sm text-txt-strong bg-mist border border-line rounded-full px-5 py-2.5 font-semibold hover:border-brand hover:text-brand transition-colors cursor-default select-none shrink-0">Agriculture</span>
            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />


        {/* ============ COMMITMENT BAND ============ */}
        <section className="relative overflow-hidden bg-mist min-h-[50vh] flex items-center py-14 md:py-20 text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand/5 rounded-full blur-[100px] pointer-events-none z-0" />
          <div className="relative z-10 max-w-[1000px] mx-auto px-gutter md:px-gutter-md w-full">
            <div className="text-brand text-[11px] font-extrabold uppercase tracking-widest">Our Commitment</div>
            <h3 className="text-txt-strong mt-6 font-extrabold leading-snug tracking-tight text-3xl md:text-4xl" style={{ fontSize: 'clamp(1.75rem, 1.4rem + 1vw, 2.25rem)' }}>Digital transformation succeeds through collaboration. DHGsoft works closely with customers, technology providers, and academic partners.</h3>
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
                Engineering Beyond Borders
              </h2>
              <p className="text-slate-300 text-body-md leading-relaxed max-w-[720px] font-medium">
                Wherever our customers operate, DHGsoft is committed to delivering trusted engineering expertise, connected intelligence, and future-ready digital transformation solutions.
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
