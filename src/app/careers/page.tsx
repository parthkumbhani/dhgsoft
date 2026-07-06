// src/app/careers/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Cpu, Layers, BookOpen, Users, Compass, Laptop, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import StatStrip from "@/components/careers/StatStrip";
import CtaBand from "@/components/careers/CtaBand";
import { careersImages } from "@/lib/images/careersImages";

export default function CareersLandingPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const whyCards = [
    {
      title: "Real Impact",
      desc: "Work on systems that run real industries.",
      icon: Cpu
    },
    {
      title: "Elite Engineering",
      desc: "Solve hard OT/IT problems with great people.",
      icon: Laptop
    },
    {
      title: "Continuous Growth",
      desc: "Learn, certify, and lead.",
      icon: Award
    },
    {
      title: "Global Exposure",
      desc: "Deliver for customers worldwide.",
      icon: Compass
    }
  ];

  const exploreHubs = [
    {
      name: "Life at DHGsoft",
      desc: "Discover our culture, benefits, and engineering mindset.",
      href: "/careers/life-at-dhgsoft"
    },
    {
      name: "Current Openings",
      desc: "Explore active engineering, architecture, and consulting roles.",
      href: "/careers/current-openings"
    },
    {
      name: "Internship Program",
      desc: "Start your journey with real-world OT/IT projects.",
      href: "/careers/internship-program"
    },
    {
      name: "Campus Connect",
      desc: "Opportunities for recent graduates & university partners.",
      href: "/careers/campus-connect"
    },
    {
      name: "Learning & Development",
      desc: "Continuous training, certifications, and leadership growth.",
      href: "/careers/learning-development"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans selection:bg-[#B4123F] selection:text-white">
      {/* Header */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="relative pt-20">
        
        {/* People-first Hero */}
        <section className="relative min-h-[460px] flex items-center bg-slate-950 text-white py-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={careersImages.landingHero.src}
              alt={careersImages.landingHero.alt}
              fill
              className="object-cover opacity-35"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
            <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
          </div>

          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] relative z-10 text-left space-y-6 max-w-4xl">
            <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-brand-hot font-mono block">
              CAREERS
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-white tracking-tight leading-[1.05]">
              Build the Future of Connected Industry
            </h1>
            <p className="text-slate-350 font-medium text-base sm:text-lg leading-relaxed max-w-2xl text-slate-300">
              Join our team of elite digital engineers, cloud architects, and digital twins experts.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/careers/current-openings"
                className="bg-brand hover:bg-brand-hot text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all duration-300 shadow-md active:scale-95 text-center uppercase tracking-wide"
              >
                View Openings
              </Link>
              <Link
                href="/careers/submit-cv"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all duration-300 active:scale-95 text-center uppercase tracking-wide"
              >
                Submit CV
              </Link>
            </div>
          </div>
        </section>

        {/* Why DHGsoft Section */}
        <section className="bg-white py-16 md:py-24 border-b border-line relative bg-tech-grid select-none">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-12">
            <div className="text-left space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B4123F] font-mono block">
                WHY DHGSOFT
              </span>
              <h2 className="text-3xl font-black text-text-strong tracking-tight">
                Engineering at Industrial Scale
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div key={i} className="bg-slate-50 border border-line rounded-2xl p-6 text-left space-y-4 hover:border-brand/35 hover:shadow-md transition-all duration-300">
                    <div className="h-10 w-10 bg-brand/5 border border-brand/10 text-brand rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-extrabold text-text-strong text-lg tracking-tight">
                        {card.title}
                      </h3>
                      <p className="text-text-muted text-xs sm:text-sm leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <StatStrip />

        {/* Explore Hubs Directory */}
        <section className="bg-mist py-16 md:py-24 border-b border-line relative bg-dot-matrix">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-12">
            <div className="text-left space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B4123F] font-mono block">
                EXPLORE CAREERS
              </span>
              <h2 className="text-3xl font-black text-text-strong tracking-tight">
                Select Your Pathway
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {exploreHubs.map((hub, i) => (
                <Link
                  key={i}
                  href={hub.href}
                  className="group flex flex-col justify-between bg-white border border-line rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-brand/40 hover:-translate-y-1.5 transition-all duration-300 text-left h-full"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand/5 text-brand border border-brand/10 font-mono text-sm font-extrabold">
                      0{i + 1}
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-extrabold text-text-strong text-xl tracking-tight leading-snug group-hover:text-brand transition-colors">
                        {hub.name}
                      </h3>
                      <p className="text-text-muted text-xs sm:text-sm leading-relaxed">
                        {hub.desc}
                      </p>
                    </div>
                  </div>
                  <div className="pt-8 border-t border-slate-100 mt-8 flex items-center justify-between text-brand font-extrabold text-xs tracking-wider uppercase">
                    <span>Enter Hub</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Crimson CTA band */}
        <CtaBand />

      </main>

      {/* Footer */}
      <Footer />

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} showToast={(msg, type) => {}} />
    </div>
  );
}
