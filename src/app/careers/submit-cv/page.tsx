// src/app/careers/submit-cv/page.tsx
"use client";
import { Section } from "@/components/ui/Section";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, ArrowRight, ClipboardCheck, PhoneCall, Users2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
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
      {/* Header */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="relative pt-20">
        
        {/* Hero */}
        <Section variant="ink" containerSize="wide" className="relative overflow-hidden border-b border-slate-900">
          <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
          <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-brand/10 blur-[120px] pointer-events-none" />
          
          <div className="w-full relative z-10 text-left space-y-6">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-1 text-slate-400 text-xs sm:text-sm font-semibold tracking-wide mb-2">
              <Link href="/careers" className="hover:text-white transition-colors">
                Careers
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-brand-hot">Submit CV</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-white tracking-tight leading-[1.05] max-w-4xl">
              Submit Your CV
            </h1>
            <p className="text-slate-300 font-medium text-base sm:text-lg leading-relaxed max-w-2xl">
              Don&apos;t see the right role? Tell us about yourself — we&apos;re always looking for great people.
            </p>
          </div>
        </Section>

        {/* CV Form section */}
        <Section variant="mist" containerSize="wide" className=" border-b border-line relative bg-dot-matrix">
          <div className="w-full relative z-10 space-y-12">
            <CvForm />
          </div>
        </Section>

        {/* What happens next */}
        <Section variant="white" containerSize="wide" className="bg-white border-b border-line relative bg-tech-grid">
          <div className="w-full relative z-10 space-y-12">
            <div className="text-center max-w-xl mx-auto space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B4123F] font-mono block">
                PROCESS
              </span>
              <h2 className="text-3xl font-black text-text-strong tracking-tight">
                What Happens Next?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="bg-slate-50 border border-line rounded-2xl p-8 space-y-4 hover:border-brand/40 transition-all duration-300">
                    <div className="h-12 w-12 rounded-xl bg-brand/5 border border-brand/10 text-brand flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-extrabold text-text-strong text-lg tracking-tight">{step.title}</h4>
                      <p className="text-text-muted text-xs sm:text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-8 text-center border-t border-slate-100 mt-12 flex flex-col items-center justify-center gap-4">
              <span className="text-text-muted text-sm font-semibold">Or review active vacancies in our listings:</span>
              <Link
                href="/careers/current-openings"
                className="bg-slate-900 hover:bg-brand text-white text-xs font-extrabold uppercase tracking-wider px-6 py-4 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>View Current Openings</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
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
