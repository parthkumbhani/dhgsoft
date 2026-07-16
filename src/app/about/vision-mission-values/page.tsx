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
                    <Eye className="w-6 h-6" />
                  </div>
                  <div className="text-brand text-[11px] font-extrabold uppercase tracking-widest">Our Vision</div>
                </div>
                
                <h3 className="text-txt-strong mt-2 tracking-tight font-extrabold leading-[1.1] text-3xl md:text-4xl lg:text-5xl" style={{ fontSize: 'clamp(2.25rem, 1.75rem + 1.2vw, 3rem)' }}>Building the Next Generation of Intelligent Industries</h3>
                <p className="text-txt-strong text-body-md mt-6 leading-relaxed font-normal">Our vision is to become a globally trusted leader in Industrial Digital Transformation by enabling connected, intelligent, secure, and sustainable industrial enterprises.</p>
                <p className="text-body-sm text-txt-muted mt-5 leading-relaxed">We envision a future where industrial operations are seamlessly connected through engineering expertise, intelligent technologies, and data-driven decision-making. By integrating operational technology, enterprise systems, cloud platforms, and industrial intelligence, we help organizations unlock new levels of productivity, operational resilience, and long-term business value.</p>
              </div>
              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="relative rounded-[32px] overflow-hidden ring-1 ring-brand/10 shadow-2xl aspect-[4/5] hover:scale-[1.02] transition-transform duration-500">
                  <Image src="/images/about/vision-vision.jpg" alt="Our Vision photography" fill className="object-cover" sizes="(min-width:1024px) 35vw, 100vw" />
                </div>
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
                  <Image src="/images/about/vision-mission.jpg" alt="Our Mission photography" fill className="object-cover" sizes="(min-width:1024px) 35vw, 100vw" />
                </div>
              </div>
              <div className="lg:col-span-7 text-left space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                    <Target className="w-6 h-6" />
                  </div>
                  <div className="text-brand text-[11px] font-extrabold uppercase tracking-widest">Our Mission</div>
                </div>
                
                <h3 className="text-txt-strong mt-2 tracking-tight font-extrabold leading-[1.1] text-3xl md:text-4xl lg:text-5xl" style={{ fontSize: 'clamp(2.25rem, 1.75rem + 1.2vw, 3rem)' }}>Engineering Solutions That Create Lasting Impact</h3>
                <p className="text-txt-strong text-body-md mt-6 leading-relaxed font-normal">Our mission is to empower industrial organizations with innovative engineering solutions that bridge the gap between operational technology and enterprise intelligence.</p>
                <p className="text-body-sm text-txt-muted mt-5 leading-relaxed">Through digital engineering, industrial automation, cloud technologies, AI, cybersecurity, and enterprise integration, we deliver scalable solutions that improve operational performance, enhance business agility, and accelerate sustainable transformation.</p>
<p className="text-body-sm text-txt-muted mt-5 leading-relaxed">Every engagement is designed to solve real industrial challenges while preparing organizations for the future.</p>
              </div>
            </div>
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
                    <Zap className="w-6 h-6" />
                  </div>
                  <div className="text-brand text-[11px] font-extrabold uppercase tracking-widest">Our Purpose</div>
                </div>
                
                <h3 className="text-txt-strong mt-2 tracking-tight font-extrabold leading-[1.1] text-3xl md:text-4xl lg:text-5xl" style={{ fontSize: 'clamp(2.25rem, 1.75rem + 1.2vw, 3rem)' }}>Connecting Intelligence to Transform Industry</h3>
                <p className="text-txt-strong text-body-md mt-6 leading-relaxed font-normal">Technology becomes valuable only when it creates measurable business outcomes.</p>
                <p className="text-body-sm text-txt-muted mt-5 leading-relaxed">Our purpose is to connect machines, systems, people, and industrial data into one intelligent ecosystem that enables organizations to operate more efficiently, make better decisions, and continuously improve performance.</p>
<p className="text-body-sm text-txt-muted mt-5 leading-relaxed">We believe engineering is the foundation of meaningful digital transformation.</p>
              </div>
              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="relative rounded-[32px] overflow-hidden ring-1 ring-brand/10 shadow-2xl aspect-[4/5] hover:scale-[1.02] transition-transform duration-500">
                  <Image src="/images/about/vision-purpose.jpg" alt="Our Purpose photography" fill className="object-cover" sizes="(min-width:1024px) 35vw, 100vw" />
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
              <div className="text-brand text-[11px] font-extrabold uppercase tracking-widest">Our Core Values</div>
              <div className="w-16 h-[3px] bg-brand rounded-full mt-5 mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="card bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px]">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h4 className="text-txt-strong font-bold text-lg md:text-xl leading-snug">Innovation</h4>
                <p className="text-body-sm text-txt-muted mt-3 leading-relaxed">Innovation drives continuous improvement across everything we build. We embrace emerging technologies, engineering excellence, and creative problem-solving to help customers overcome complex industrial challenges.</p>
              </div>

              <div className="card bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px]">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <Smile className="w-6 h-6" />
                </div>
                <h4 className="text-txt-strong font-bold text-lg md:text-xl leading-snug">Customer Success</h4>
                <p className="text-body-sm text-txt-muted mt-3 leading-relaxed">Our customers' success defines our own. Every project is aligned with measurable business outcomes, operational improvements, and long-term value creation rather than simply delivering technology.</p>
              </div>

              <div className="card bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px]">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-txt-strong font-bold text-lg md:text-xl leading-snug">Integrity</h4>
                <p className="text-body-sm text-txt-muted mt-3 leading-relaxed">Trust is built through transparency, accountability, and ethical business practices. We believe strong customer relationships are created through honesty and delivering on our commitments.</p>
              </div>

              <div className="card bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px]">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="text-txt-strong font-bold text-lg md:text-xl leading-snug">Excellence</h4>
                <p className="text-body-sm text-txt-muted mt-3 leading-relaxed">Engineering precision is fundamental to every solution we deliver. We maintain the highest standards of quality, reliability, and technical excellence throughout the complete project lifecycle.</p>
              </div>

              <div className="card bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px]">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="text-txt-strong font-bold text-lg md:text-xl leading-snug">Collaboration</h4>
                <p className="text-body-sm text-txt-muted mt-3 leading-relaxed">Innovation happens through collaboration. We work closely with customers, technology partners, universities, research institutions, and engineering teams to build intelligent solutions.</p>
              </div>

              <div className="card bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px]">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <Leaf className="w-6 h-6" />
                </div>
                <h4 className="text-txt-strong font-bold text-lg md:text-xl leading-snug">Sustainability</h4>
                <p className="text-body-sm text-txt-muted mt-3 leading-relaxed">Engineering should improve both business performance and environmental responsibility. We help organizations optimize operations, reduce waste, improve energy efficiency, and support sustainable growth.</p>
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
            <h3 className="text-txt-strong mt-6 font-extrabold leading-snug tracking-tight text-3xl md:text-4xl" style={{ fontSize: 'clamp(1.75rem, 1.4rem + 1vw, 2.25rem)' }}>Everything we design, develop, and deliver is guided by our commitment to engineering excellence, customer success, continuous innovation, and responsible business practices.</h3>
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
                Engineering Tomorrow with Purpose
              </h2>
              <p className="text-slate-300 text-body-md leading-relaxed max-w-[720px] font-medium">
                Our vision inspires where we are going. Our mission defines how we get there. Our values guide every step of the journey. Together, they form the foundation of DHGsoft's commitment to building connected, intelligent, and future-ready industries.
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
