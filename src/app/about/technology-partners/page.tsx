"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Brain, Cloud, Cpu, Database, Factory, Settings, ShieldAlert, Sliders } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

export default function AboutTechnologypartnersPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased font-sans flex flex-col selection:bg-brand selection:text-white">
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="flex-grow">
        {/* ============ 1. PREMIUM HERO (Full-bleed Background Image with Dark Gradient overlay) ============ */}
        <section className="relative min-h-screen flex items-center pt-24 pb-12 text-left overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/about/technology-hero.jpg" 
              alt="Technology Partners banner" 
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
              <span className="text-white font-medium">Technology Partners</span>
            </nav>
            <div className="text-brand-hot text-[11px] font-extrabold uppercase tracking-widest">Technology Partners</div>
            <h1 className="text-white mt-5 max-w-[900px] font-extrabold tracking-tight leading-[1.05] text-headline-xl">
              Building the Future with Trusted Technology Leaders
            </h1>
            <p className="text-slate-300 text-body-md mt-6 max-w-[760px] leading-relaxed font-medium">
              Modern industrial transformation requires technologies that are secure, scalable, and proven. DHGsoft works with leading global technology platforms to deliver reliable engineering solutions tailored to each customer's operational requirements.
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
                    <Settings className="w-6 h-6" />
                  </div>
                  <div className="text-brand text-[11px] font-extrabold uppercase tracking-widest">Overview</div>
                </div>
                
                <h3 className="text-txt-strong mt-2 tracking-tight font-extrabold leading-[1.1] text-3xl md:text-4xl lg:text-5xl" style={{ fontSize: 'clamp(2.25rem, 1.75rem + 1.2vw, 3rem)' }}>Technology is only valuable when it delivers measurable business outcomes.</h3>
                <p className="text-txt-strong text-body-md mt-6 leading-relaxed font-normal">DHGsoft follows a technology-agnostic approach, selecting platforms based on customer objectives rather than vendor preference.</p>
                <p className="text-body-sm text-txt-muted mt-5 leading-relaxed">By collaborating with globally recognized technology providers, we help organizations implement reliable, scalable, and future-ready digital ecosystems that integrate seamlessly with existing industrial environments.</p>
              </div>
              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="relative rounded-[32px] overflow-hidden ring-1 ring-brand/10 shadow-2xl aspect-[4/5] hover:scale-[1.02] transition-transform duration-500">
                  <Image src="/images/about/technology-overview.jpg" alt="Overview photography" fill className="object-cover" sizes="(min-width:1024px) 35vw, 100vw" />
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
              <div className="text-brand text-[11px] font-extrabold uppercase tracking-widest">Platform Capabilities</div>
              <div className="w-16 h-[3px] bg-brand rounded-full mt-5 mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="card bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px]">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <Factory className="w-6 h-6" />
                </div>
                <h4 className="text-txt-strong font-bold text-lg md:text-xl leading-snug">Industrial Automation Platforms</h4>
                <p className="text-body-sm text-txt-muted mt-3 leading-relaxed">Supporting modern automation systems through leading industrial control technologies that improve operational efficiency, process reliability, and production performance.</p>
              </div>

              <div className="card bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px]">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <Cloud className="w-6 h-6" />
                </div>
                <h4 className="text-txt-strong font-bold text-lg md:text-xl leading-snug">Cloud Platforms</h4>
                <p className="text-body-sm text-txt-muted mt-3 leading-relaxed">Designing secure cloud environments that enable connected operations, scalable infrastructure, remote collaboration, and enterprise-wide digital transformation.</p>
              </div>

              <div className="card bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px]">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <Cpu className="w-6 h-6" />
                </div>
                <h4 className="text-txt-strong font-bold text-lg md:text-xl leading-snug">Enterprise Technologies</h4>
                <p className="text-body-sm text-txt-muted mt-3 leading-relaxed">Integrating business applications that connect manufacturing, engineering, maintenance, quality, and enterprise operations into one intelligent digital environment.</p>
              </div>

              <div className="card bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px]">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <Database className="w-6 h-6" />
                </div>
                <h4 className="text-txt-strong font-bold text-lg md:text-xl leading-snug">Industrial Data Platforms</h4>
                <p className="text-body-sm text-txt-muted mt-3 leading-relaxed">Transforming industrial information into connected intelligence through modern data architectures, operational analytics, historians, and enterprise reporting platforms.</p>
              </div>

              <div className="card bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px]">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <h4 className="text-txt-strong font-bold text-lg md:text-xl leading-snug">Cybersecurity Technologies</h4>
                <p className="text-body-sm text-txt-muted mt-3 leading-relaxed">Protecting industrial operations through trusted security technologies that strengthen operational resilience, reduce cyber risk, and support regulatory compliance.</p>
              </div>

              <div className="card bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px]">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <Brain className="w-6 h-6" />
                </div>
                <h4 className="text-txt-strong font-bold text-lg md:text-xl leading-snug">Artificial Intelligence Platforms</h4>
                <p className="text-body-sm text-txt-muted mt-3 leading-relaxed">Leveraging modern AI and advanced analytics platforms to transform operational data into predictive insights, intelligent automation, and better business decisions.</p>
              </div>

            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ SPLIT IMAGE LEFT ============ */}
        <section className="relative overflow-hidden bg-white min-h-[85vh] md:min-h-[90vh] flex items-center py-16 md:py-24">
          <div className="absolute top-1/4 right-[5%] w-[350px] h-[350px] bg-brand/5 rounded-full blur-[110px] pointer-events-none z-0" />
          <div className="absolute bottom-1/4 left-[5%] w-[350px] h-[350px] bg-brand-hot/5 rounded-full blur-[110px] pointer-events-none z-0" />
          
          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-5">
                <div className="relative rounded-[32px] overflow-hidden ring-1 ring-brand/10 shadow-2xl aspect-[4/5] hover:scale-[1.02] transition-transform duration-500">
                  <Image src="/images/about/technology-philosophy.jpg" alt="Our Technology Philosophy photography" fill className="object-cover" sizes="(min-width:1024px) 35vw, 100vw" />
                </div>
              </div>
              <div className="lg:col-span-7 text-left space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                    <Sliders className="w-6 h-6" />
                  </div>
                  <div className="text-brand text-[11px] font-extrabold uppercase tracking-widest">Our Technology Philosophy</div>
                </div>
                
                <h3 className="text-txt-strong mt-2 tracking-tight font-extrabold leading-[1.1] text-3xl md:text-4xl lg:text-5xl" style={{ fontSize: 'clamp(2.25rem, 1.75rem + 1.2vw, 3rem)' }}>Neutral evaluation before recommending the right solution.</h3>
                <p className="text-txt-strong text-body-md mt-6 leading-relaxed font-normal">Every customer has different operational goals.</p>
                <p className="text-body-sm text-txt-muted mt-5 leading-relaxed">Instead of promoting one technology platform, DHGsoft evaluates business requirements, engineering complexity, scalability, security, and long-term value before recommending the right solution.</p>
<p className="text-body-sm text-txt-muted mt-5 leading-relaxed">This technology-neutral approach enables organizations to build sustainable digital ecosystems without unnecessary vendor dependency.</p>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />


        {/* ============ COMMITMENT BAND ============ */}
        <section className="relative overflow-hidden bg-mist min-h-[50vh] flex items-center py-14 md:py-20 text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand/5 rounded-full blur-[100px] pointer-events-none z-0" />
          <div className="relative z-10 max-w-[1000px] mx-auto px-gutter md:px-gutter-md w-full">
            <div className="text-brand text-[11px] font-extrabold uppercase tracking-widest">Our Commitment</div>
            <h3 className="text-txt-strong mt-6 font-extrabold leading-snug tracking-tight text-3xl md:text-4xl" style={{ fontSize: 'clamp(1.75rem, 1.4rem + 1vw, 2.25rem)' }}>By combining leading hardware and software technologies, we ensure industrial reliability and enterprise readiness.</h3>
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
                Technology Should Empower Engineering, Not Limit It
              </h2>
              <p className="text-slate-300 text-body-md leading-relaxed max-w-[720px] font-medium">
                DHGsoft works with trusted global technologies to deliver connected industrial solutions that create measurable business value.
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
