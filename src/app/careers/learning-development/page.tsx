// src/app/careers/learning-development/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { Section } from "@/components/ui/Section";
import CtaBand from "@/components/careers/CtaBand";
import { careersImages } from "@/lib/images/careersImages";

export default function LearningDevelopmentPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const timelineSteps = [
    {
      phase: "Learn",
      title: "Foundational Knowledge",
      desc: "Acquire domain expertise through formal classroom modules, platform vendor certifications, and technical resources."
    },
    {
      phase: "Practice",
      title: "Real Commissions",
      desc: "Apply your skills on active projects under guidance. Build gateways, integrate telemetry streams, and connect edge devices."
    },
    {
      phase: "Certify",
      title: "Technical Credentials",
      desc: "Secure industry certifications in Cloud architecture, OT engineering, AI modeling, or cybersecurity protocols."
    },
    {
      phase: "Lead",
      title: "Solution ownership",
      desc: "Lead modular engineering blocks, direct junior developers, and coordinate solution design reviews with clients."
    },
    {
      phase: "Innovate",
      title: "Future Architect",
      desc: "Drive regional operations, pioneer digital twin integrations, and formulate the technology roadmaps of tomorrow."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans selection:bg-[#B4123F] selection:text-white">
      {/* Header Navigation */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="relative pt-20">
        
        {/* 1. Hero — Large Hero Photography */}
        <Section variant="ink" size="hero" pattern="none" className="relative min-h-[480px] flex items-center text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/careers/culture/training.jpg"
              alt="DHGsoft technical training and mentoring seminar session"
              fill
              className="object-cover opacity-35"
              priority
            />
            {/* White/Dark hybrid overlay for editorial contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
            <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
          </div>

          <div className="w-full relative z-10 text-left space-y-6 max-w-4xl">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-1 text-slate-400 text-xs sm:text-sm font-semibold tracking-wide">
              <Link href="/careers" className="hover:text-white transition-colors">
                Careers
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-brand-hot">Learning &amp; Development</span>
            </div>

            <h1 className="heading-hero text-white">
              Learning &amp; Development
            </h1>
            <p className="text-body-md text-slate-300 max-w-2xl font-sans font-medium leading-relaxed">
              Continuous training, certifications, and leadership growth.
            </p>
          </div>
        </Section>

        {/* 2. L&D Philosophy */}
        <Section variant="white" size="snug" pattern="none" className="relative border-b border-line">
          <div className="w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-6 text-left space-y-6">
                <span className="section-eyebrow">GROWTH &amp; CURIOSITY</span>
                <h2 className="heading-section text-txt-strong mt-3">
                  Our L&amp;D Philosophy
                </h2>
                <p className="text-body-md text-txt-muted font-sans font-medium leading-relaxed">
                  We believe great engineers never stop learning. We invest in continuous growth — technical, domain, and leadership — so our people keep getting better at solving hard problems.
                </p>
              </div>

              <div className="lg:col-span-6 relative aspect-[16/10] rounded-[24px] overflow-hidden shadow-sm border border-line bg-slate-50">
                <Image
                  src={careersImages.ldPhilosophy.src}
                  alt={careersImages.ldPhilosophy.alt}
                  fill
                  className="object-cover animate-image-scale-slow"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>

            </div>
          </div>
        </Section>

        {/* 3. Career Progression Visual (Learn -> Practice -> Certify -> Lead -> Innovate Timeline) */}
        <Section variant="mist" size="snug" pattern="none" className="relative border-b border-line">
          <div className="w-full relative z-10 space-y-16">
            {/* Header */}
            <div className="text-left max-w-xl">
              <span className="section-eyebrow">Progression</span>
              <h2 className="heading-section text-txt-strong mt-3 font-sans font-extrabold text-3xl tracking-tight leading-tight">
                Your Career Roadmap
              </h2>
              <p className="section-subtitle text-txt-muted mt-4 font-sans font-medium">
                A structured path mapping your progression from technical execution to strategic leadership.
              </p>
            </div>

            {/* Elegant horizontal timeline */}
            <div className="relative">
              {/* Connect line (desktop only) */}
              <div className="hidden lg:block absolute top-[28px] left-[8%] right-[8%] h-[1px] bg-line z-0" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
                {timelineSteps.map((step, i) => (
                  <div key={step.phase} className="space-y-4 text-left select-none">
                    {/* Circle Node */}
                    <div className="flex items-center gap-3">
                      <div className="w-[56px] h-[56px] rounded-full border border-line bg-white flex items-center justify-center font-mono font-extrabold text-sm text-brand shadow-sm">
                        {step.phase}
                      </div>
                      <div className="lg:hidden flex-grow h-[1px] bg-line" />
                    </div>

                    {/* Step Content */}
                    <div className="space-y-2">
                      <h3 className="text-sm font-extrabold text-txt-strong font-sans tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-xs text-txt-muted font-sans font-semibold leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* 4. Mentorship & Certifications editorial split */}
        <Section variant="white" size="snug" pattern="none" className="relative border-b border-line text-left">
          <div className="w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Certifications */}
            <div className="space-y-4">
              <span className="section-eyebrow">CREDENTIALS</span>
              <h3 className="text-2xl font-extrabold text-txt-strong tracking-tight font-sans">
                Certifications Support
              </h3>
              <p className="text-body-sm text-txt-muted font-sans font-semibold leading-relaxed">
                We support relevant industry certifications across cloud, automation, data, and security. Keep your technical edge sharp with sponsored training and registration coordinate budgets.
              </p>
            </div>

            {/* Mentorship */}
            <div className="space-y-4">
              <span className="section-eyebrow">GUIDANCE</span>
              <h3 className="text-2xl font-extrabold text-txt-strong tracking-tight font-sans">
                Mentorship &amp; Coaching
              </h3>
              <p className="text-body-sm text-txt-muted font-sans font-semibold leading-relaxed">
                Every engineer has access to mentors and coaches who help them grow. From architectural review councils to monthly career direction logs, you are never charting your path alone.
              </p>
            </div>
          </div>
        </Section>

        {/* 5. CTA Band */}
        <CtaBand
          title="Grow your career with DHGsoft."
          buttonText="View Openings"
          buttonHref="/careers/current-openings"
        />

      </main>

      {/* Footer */}
      <Footer />

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} showToast={() => {}} />
    </div>
  );
}

