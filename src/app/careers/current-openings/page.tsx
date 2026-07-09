// src/app/careers/current-openings/page.tsx
"use client";
import { Section } from "@/components/ui/Section";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Briefcase, Search, MapPin, Clock, Info } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import CtaBand from "@/components/careers/CtaBand";
import { SAMPLE_JOBS } from "@/lib/careers";

export default function CurrentOpeningsPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");

  const departments = ["All", "Engineering", "Architecture", "Consulting", "Data & AI", "Cybersecurity", "Delivery"];

  const filteredJobs = SAMPLE_JOBS.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          job.blurb.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = selectedDept === "All" || job.department === selectedDept;
    return matchesSearch && matchesDept;
  });

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
              <span className="text-brand-hot">Current Openings</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-white tracking-tight leading-[1.05] max-w-4xl">
              Current Openings
            </h1>
            <p className="section-subtitle on-dark max-w-2xl">
              Explore active engineering, architecture, and consulting roles.
            </p>
          </div>
        </Section>

        {/* Job Listings Feed with Search & Filters */}
        <Section variant="mist" containerSize="wide" className=" border-b border-line relative bg-dot-matrix">
          <div className="w-full relative z-10 space-y-12">
            
            {/* Search Input Bar */}
            <div className="max-w-xl text-left space-y-2 relative">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search openings by keywords (e.g. cloud, OT)..."
                  className="w-full bg-white border border-line focus:border-brand-hot rounded-2xl pl-12 pr-6 py-4 text-sm text-text-strong placeholder-slate-400 outline-none transition-colors shadow-sm"
                />
                <Search className="absolute left-4.5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              </div>
            </div>

            {/* Department Filters Tabs */}
            <div className="flex flex-wrap gap-2.5 justify-start text-left border-b border-slate-200 pb-6">
              {departments.map((dept) => {
                const isActive = selectedDept === dept;
                return (
                  <button
                    key={dept}
                    onClick={() => setSelectedDept(dept)}
                    className={`px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider rounded-xl transition-all duration-300 shadow-sm cursor-pointer select-none active:scale-95 ${
                      isActive 
                        ? "bg-brand text-white" 
                        : "bg-white text-slate-600 border border-line hover:border-brand/40"
                    }`}
                  >
                    {dept}
                  </button>
                );
              })}
            </div>

            {/* Active Openings Grid */}
            {filteredJobs.length === 0 ? (
              <div className="bg-white border border-line rounded-2xl py-20 text-center space-y-3">
                <Briefcase className="w-12 h-12 text-slate-300 mx-auto" />
                <h4 className="text-lg font-bold text-text-strong">No Job Openings Found</h4>
                <p className="text-text-muted text-sm max-w-xs mx-auto">
                  Try adjusting your search criteria or filter tags to discover other roles.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    className="bg-white border border-line rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-brand/40 transition-all duration-300 text-left"
                  >
                    <div className="space-y-4">
                      {/* Department Tag */}
                      <div className="flex items-center justify-between">
                        <span className="bg-brand/10 text-brand text-[9px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-md font-mono">
                          {job.department}
                        </span>
                        
                        <div className="flex items-center gap-3 text-slate-400 font-mono text-[10px] font-bold">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-slate-400" />
                            <span>{job.location}</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            <span>{job.type}</span>
                          </span>
                        </div>
                      </div>

                      <h3 className="font-extrabold text-text-strong text-xl tracking-tight leading-snug">
                        {job.title}
                      </h3>
                      <p className="card-description">
                        {job.blurb}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-end">
                      <Link
                        href="/careers/submit-cv"
                        className="bg-brand hover:bg-brand-hot px-6 py-3 rounded-xl transition-all duration-300 active:scale-95 inline-flex items-center gap-1.5 section-eyebrow on-dark"
                      >
                        <span>Apply</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* ATS Disclaimer */}
            <div className="bg-slate-50 border border-line p-4 rounded-xl flex gap-3 text-left max-w-xl mx-auto">
              <Info className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
              <div className="text-[11px] text-text-muted leading-relaxed font-mono">
                * Operational Note: These are sample roles. Integrate this dynamic list block with your real corporate Applicant Tracking System (ATS) API endpoints (e.g. Greenhouse, Lever, Workday) before publishing.
              </div>
            </div>

          </div>
        </Section>

        {/* Crimson CTA band */}
        <CtaBand
          title="Don't see the right role? We're always looking for great people."
          buttonText="Submit CV"
          buttonHref="/careers/submit-cv"
        />

      </main>

      {/* Footer */}
      <Footer />

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} showToast={(msg, type) => {}} />
    </div>
  );
}
