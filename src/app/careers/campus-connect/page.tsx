// src/app/careers/campus-connect/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, BookOpen, GraduationCap, School, ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import CtaBand from "@/components/careers/CtaBand";
import { careersImages } from "@/lib/images/careersImages";

export default function CampusConnectPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"students" | "universities">("students");

  const studentCards = [
    { title: "Graduate Roles", desc: "Start your career as an associate systems developer or edge specialist." },
    { title: "Internships", desc: "Hands-on projects with dedicated technical mentor reviews." },
    { title: "Campus Events & Hackathons", desc: "Compete in solving live telemetry and machine learning problems." },
    { title: "Mentorship", desc: "1:1 guidance from systems architects with years of experience." }
  ];

  const universityCards = [
    { title: "Research Collaboration", desc: "Collaborate on next-generation edge computing, digital twins, and industrial IoT." },
    { title: "Guest Lectures & Workshops", desc: "DHGsoft principal developers host sessions on OT/IT convergence." },
    { title: "Internship Pipelines", desc: "Structured talent pipelines that place top engineering students directly into projects." },
    { title: "Recruitment Events", desc: "Join our pipeline days, campus interviews, and career panel seminars." }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans selection:bg-[#B4123F] selection:text-white">
      {/* Header */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="relative pt-20">
        
        {/* Hero */}
        <section className="relative min-h-[460px] flex items-center bg-slate-950 text-white py-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={careersImages.campusHero.src}
              alt={careersImages.campusHero.alt}
              fill
              className="object-cover opacity-35"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
            <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
          </div>

          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] relative z-10 text-left space-y-6 max-w-4xl">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-1 text-slate-400 text-xs sm:text-sm font-semibold tracking-wide">
              <Link href="/careers" className="hover:text-white transition-colors">
                Careers
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-brand-hot">Campus Connect</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-white tracking-tight leading-[1.05]">
              Campus Connect
            </h1>
            <p className="text-slate-350 font-medium text-base sm:text-lg leading-relaxed max-w-2xl text-slate-300">
              Opportunities for recent graduates & university partners.
            </p>
          </div>
        </section>

        {/* Tab Toggle Navigation */}
        <section className="bg-white pt-16 pb-8 border-b border-line relative bg-tech-grid select-none">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-8">
            <div className="flex justify-center border-b border-slate-200">
              <div className="flex gap-8 -mb-px">
                <button
                  onClick={() => setActiveTab("students")}
                  className={`pb-4 text-sm sm:text-base font-extrabold uppercase tracking-wider transition-colors duration-300 cursor-pointer ${
                    activeTab === "students"
                      ? "text-brand border-b-2 border-brand"
                      : "text-slate-500 hover:text-brand"
                  }`}
                >
                  For Students & Graduates
                </button>
                <button
                  onClick={() => setActiveTab("universities")}
                  className={`pb-4 text-sm sm:text-base font-extrabold uppercase tracking-wider transition-colors duration-300 cursor-pointer ${
                    activeTab === "universities"
                      ? "text-brand border-b-2 border-brand"
                      : "text-slate-500 hover:text-brand"
                  }`}
                >
                  For Universities
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Audience content */}
        <section className="bg-mist py-16 md:py-24 border-b border-line relative bg-dot-matrix">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px]">
            {activeTab === "students" ? (
              <div className="space-y-12 text-left">
                <div className="max-w-3xl space-y-4">
                  <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B4123F] font-mono block">
                    EARLY CAREER
                  </span>
                  <h2 className="text-3xl font-black text-text-strong tracking-tight">
                    Start Your Engineering Journey
                  </h2>
                  <p className="text-text-strong font-medium text-base sm:text-lg leading-relaxed">
                    Graduate roles, internships, and early-career programs designed to launch your career in industrial digital transformation.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {studentCards.map((card, i) => (
                    <div key={i} className="bg-white border border-line rounded-2xl p-8 space-y-3 hover:border-brand/40 transition-all duration-300">
                      <h4 className="font-extrabold text-text-strong text-lg tracking-tight">{card.title}</h4>
                      <p className="text-text-muted text-xs sm:text-sm leading-relaxed">{card.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-12 text-left">
                <div className="max-w-3xl space-y-4">
                  <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B4123F] font-mono block">
                    ACADEMIC ALLIANCES
                  </span>
                  <h2 className="text-3xl font-black text-text-strong tracking-tight">
                    Partnering on R&amp;D
                  </h2>
                  <p className="text-text-strong font-medium text-base sm:text-lg leading-relaxed">
                    We partner with universities on research, guest lectures, curriculum input, and recruitment.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {universityCards.map((card, i) => (
                    <div key={i} className="bg-white border border-line rounded-2xl p-8 space-y-3 hover:border-brand/40 transition-all duration-300">
                      <h4 className="font-extrabold text-text-strong text-lg tracking-tight">{card.title}</h4>
                      <p className="text-text-muted text-xs sm:text-sm leading-relaxed">{card.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Campus Engagement highlights band */}
        <section className="bg-slate-900 border-b border-slate-800 py-16 text-white text-center relative overflow-hidden select-none">
          <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] relative z-10 space-y-4 max-w-3xl">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-hot font-mono block">
              ENGAGEMENT
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
              Our Campus Engagement
            </h2>
            <p className="text-slate-350 text-sm sm:text-base leading-relaxed text-slate-300">
              From hackathons to lectures, we connect with the next generation of engineers.
            </p>
          </div>
        </section>

        {/* Academic Partnerships Link blocks */}
        <section className="bg-white py-16 md:py-24 border-b border-line relative bg-tech-grid text-left">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B4123F] font-mono block">
                PARTNER ECOSYSTEM
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-text-strong tracking-tight">
                Academic Partnerships
              </h2>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed max-w-2xl">
                Supporting research, innovation, internships, and workforce development with universities and engineering institutions.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-end">
              <Link
                href="/about/partners"
                className="bg-white border border-line hover:border-brand/40 text-brand text-xs font-extrabold uppercase tracking-wider px-6 py-4 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Partner Ecosystem</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

          </div>
        </section>

        {/* How to Connect actions */}
        <section className="bg-mist py-16 md:py-24 border-b border-line relative bg-dot-matrix">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-12">
            <div className="text-left space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B4123F] font-mono block">
                CONNECT
              </span>
              <h2 className="text-3xl font-black text-text-strong tracking-tight">
                How to Connect
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
              {/* Box 1 */}
              <div className="bg-white border border-line rounded-2xl p-8 flex flex-col justify-between hover:border-brand/40 transition-all duration-300 shadow-sm">
                <div className="space-y-4">
                  <GraduationCap className="w-8 h-8 text-brand" />
                  <h3 className="font-extrabold text-text-strong text-xl tracking-tight">For Students</h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Ready to build real systems? Submit your CV to our talent database or review early-career internship requirements.
                  </p>
                </div>
                <div className="pt-8 mt-8 border-t border-slate-100 flex justify-end">
                  <Link
                    href="/careers/current-openings"
                    className="bg-brand hover:bg-brand-hot text-white text-xs font-extrabold uppercase tracking-wider px-6 py-3 rounded-xl transition-all duration-300 inline-flex items-center gap-1.5"
                  >
                    <span>View Opportunities</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Box 2 */}
              <div className="bg-white border border-line rounded-2xl p-8 flex flex-col justify-between hover:border-brand/40 transition-all duration-300 shadow-sm">
                <div className="space-y-4">
                  <School className="w-8 h-8 text-brand-hot" />
                  <h3 className="font-extrabold text-text-strong text-xl tracking-tight">For Universities</h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Collaborate with us on engineering curricula, arrange workshops, or request guest speakers for your department.
                  </p>
                </div>
                <div className="pt-8 mt-8 border-t border-slate-100 flex justify-end">
                  <button
                    onClick={() => setIsContactOpen(true)}
                    className="bg-slate-900 hover:bg-brand-hot text-white text-xs font-extrabold uppercase tracking-wider px-6 py-3 rounded-xl transition-all duration-300 inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Partner With Us</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Crimson CTA band */}
        <CtaBand
          title="Let's build the next generation of industrial engineers."
          buttonText="Get in Touch"
          buttonHref="#" // Anchor trigger or modal
        />

      </main>

      {/* Footer */}
      <Footer />

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} showToast={(msg, type) => {}} />
    </div>
  );
}
