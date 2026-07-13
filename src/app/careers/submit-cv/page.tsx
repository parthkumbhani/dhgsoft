// src/app/careers/submit-cv/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, ArrowRight, ClipboardCheck, PhoneCall, Users2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { Section } from "@/components/ui/Section";
import CvForm from "@/components/careers/CvForm";

export default function SubmitCvPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const steps = [
    {
      title: "1. CV Review",
      desc: "Our architectural engineering leads evaluate your CV profile against global client project allocations.",
      icon: ClipboardCheck
    },
    {
      title: "2. Initial Alignment",
      desc: "If there is a coordinate slot match, we schedule a short conversation to discuss technical background parameters.",
      icon: PhoneCall
    },
    {
      title: "3. Team Meet",
      desc: "Dive deep into technical problem solving sessions with our principal systems designers and delivery leads.",
      icon: Users2
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans selection:bg-[#B4123F] selection:text-white">
      {/* Header Navigation */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="relative pt-20">
        
        {/* Light Sub-Page Hero */}
        <Section variant="white" size="snug" pattern="none" className="relative min-h-[380px] flex items-center border-b border-line overflow-hidden pt-12 pb-16">
          {/* Subtle Contour Grid Texture */}
          <div
            className="absolute inset-0 bg-tech-grid opacity-[0.012] pointer-events-none z-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(15, 23, 42, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.05) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="w-full relative z-10 text-left space-y-6">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-1 text-slate-400 text-xs sm:text-sm font-semibold tracking-wide">
              <Link href="/careers" className="hover:text-txt-strong transition-colors">
                Careers
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-brand">Submit CV</span>
            </div>

            <h1 className="heading-hero text-txt-strong">
              Submit Your CV
            </h1>
            <p className="text-body-md text-txt-muted max-w-2xl font-sans font-medium leading-relaxed">
              Don&apos;t see the right role? Tell us about yourself — we&apos;re always looking for great people.
            </p>
          </div>
        </Section>

        {/* CV Form section */}
        <Section variant="mist" size="snug" pattern="none" className="relative border-b border-line">
          <div className="w-full relative z-10 space-y-12">
            <CvForm />
          </div>
        </Section>

        {/* What happens next — clean list dividers (no cards) */}
        <Section variant="white" size="snug" pattern="none" className="relative border-b border-line">
          <div className="w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 text-left space-y-3">
              <span className="section-eyebrow">PROCESS</span>
              <h2 className="heading-section text-txt-strong mt-3 font-sans font-extrabold text-3xl tracking-tight leading-tight">
                What Happens Next?
              </h2>
              <p className="text-body-md text-txt-muted font-sans font-medium leading-relaxed">
                A simple workflow of how we process speculative applications.
              </p>
            </div>

            <div className="lg:col-span-7 border-t border-line divide-y divide-line">
              {steps.map((step, idx) => (
                <div key={idx} className="py-6 first:pt-0 last:pb-0 select-none">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-start">
                    {/* Step Icon */}
                    <div className="md:col-span-2 text-brand">
                      <step.icon className="w-6 h-6" />
                    </div>
                    {/* Content */}
                    <div className="md:col-span-10 space-y-2">
                      <h4 className="font-extrabold text-txt-strong text-lg tracking-tight font-sans">
                        {step.title}
                      </h4>
                      <p className="text-xs md:text-sm text-txt-muted font-sans font-semibold leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8 text-center border-t border-line mt-12 flex flex-col items-center justify-center gap-4">
            <span className="text-txt-muted text-sm font-semibold">Or review active vacancies in our listings:</span>
            <Link
              href="/careers/current-openings"
              className="bg-slate-900 hover:bg-brand text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>View Current Openings</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </Section>

      </main>

      {/* Footer */}
      <Footer />

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} showToast={(msg, type) => {}} />
    </div>
  );
}

