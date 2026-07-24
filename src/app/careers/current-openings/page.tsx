// src/app/careers/current-openings/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, ArrowRight, Briefcase, Search, MapPin, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { Section } from "@/components/ui/Section";
import CtaBand from "@/components/careers/CtaBand";
import { getJobs, JobPosition } from "@/lib/data-store";
import { employeeBenefits, hiringJourney } from "@/lib/careersData";

export default function CurrentOpeningsPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");
  const [jobs, setJobs] = useState<JobPosition[]>([]);

  useEffect(() => {
    setJobs(getJobs());
    const handleJobsUpdate = () => {
      setJobs(getJobs());
    };
    window.addEventListener("dhg_jobs_updated", handleJobsUpdate);
    return () => {
      window.removeEventListener("dhg_jobs_updated", handleJobsUpdate);
    };
  }, []);

  const departments = ["All", "Engineering", "Architecture", "Consulting", "Data & AI", "Cybersecurity", "Delivery"];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          job.blurb.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = selectedDept === "All" || job.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans selection:bg-[#B4123F] selection:text-white">
      {/* Header Navigation */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="relative pt-20">
        
        {/* 1. Hero */}
        <Section variant="white" size="snug" pattern="none" className="relative min-h-[380px] flex items-center border-b border-line overflow-hidden pt-12 pb-16">
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
              <span className="text-brand">Current Openings</span>
            </div>

            <h1 className="heading-hero text-txt-strong">
              Current Openings
            </h1>
            <p className="text-body-md text-txt-muted max-w-2xl font-sans font-medium leading-relaxed">
              Explore active engineering, architecture, and consulting roles.
            </p>
          </div>
        </Section>

        {/* 2. Search Bar & 3. Department Filters & 4. Job Listings Feed */}
        <Section variant="mist" size="snug" pattern="none" className="relative border-b border-line">
          <div className="w-full relative z-10 space-y-12">
            
            {/* Search Input Bar */}
            <div className="max-w-xl text-left space-y-2 relative">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search openings by keywords (e.g. cloud, OT)..."
                  className="w-full bg-white border border-line focus:border-brand rounded-2xl pl-12 pr-6 py-4 text-sm text-text-strong placeholder-slate-400 outline-none transition-all shadow-sm"
                />
                <Search className="absolute left-4.5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              </div>
            </div>

            {/* Department Filters Tabs */}
            <div className="flex flex-wrap gap-2.5 justify-start text-left border-b border-line pb-6">
              {departments.map((dept) => {
                const isActive = selectedDept === dept;
                return (
                  <button
                    key={dept}
                    onClick={() => setSelectedDept(dept)}
                    className={`px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider rounded-xl transition-all duration-305 shadow-sm cursor-pointer select-none active:scale-95 ${
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

            {/* Active Openings list layout */}
            {filteredJobs.length === 0 ? (
              <div className="bg-white border border-line rounded-2xl py-20 text-center space-y-3">
                <Briefcase className="w-12 h-12 text-slate-300 mx-auto" />
                <h4 className="text-lg font-bold text-text-strong">No Job Openings Found</h4>
                <p className="text-text-muted text-sm max-w-xs mx-auto">
                  Try adjusting your search criteria or filter tags to discover other roles.
                </p>
              </div>
            ) : (
              <div className="border-t border-line divide-y divide-line">
                {filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    className="flex flex-col md:flex-row md:items-center justify-between py-6 hover:px-4 transition-all duration-300 bg-white md:bg-transparent hover:bg-white border-line select-none group"
                  >
                    {/* Role info */}
                    <div className="space-y-3 max-w-3xl">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="bg-brand/5 text-brand text-[9px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-md font-mono border border-brand/10">
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

                      <h3 className="font-extrabold text-txt-strong text-xl tracking-tight leading-snug group-hover:text-brand transition-colors font-sans">
                        {job.title}
                      </h3>
                      <p className="text-xs md:text-sm text-txt-muted font-sans font-medium leading-relaxed">
                        {job.blurb}
                      </p>
                    </div>

                    {/* Apply Button */}
                    <div className="pt-4 md:pt-0 shrink-0 self-start md:self-center">
                      <Link
                        href="/careers/submit-cv"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-brand hover:shadow-md transition-all duration-300"
                      >
                        <span>Apply</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Section>

        {/* 5. Hiring Journey Process (Horizontal timeline connected by elegant thin lines) */}
        <Section variant="white" size="snug" pattern="none" className="relative border-b border-line">
          <div className="w-full relative z-10">
            {/* Header */}
            <div className="text-left mb-16">
              <span className="section-eyebrow">The Process</span>
              <h2 className="heading-section text-txt-strong mt-3 font-sans tracking-tight font-extrabold text-3xl">
                Our Hiring Journey
              </h2>
              <p className="section-subtitle text-txt-muted max-w-[620px] mt-4 font-sans font-medium">
                A transparent overview of how we align our candidates with suitable engineering teams.
              </p>
            </div>

            {/* Process Grid */}
            <div className="relative">
              {/* Line connector */}
              <div className="hidden lg:block absolute top-7 left-12 right-12 h-[1px] bg-line z-0" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
                {hiringJourney.map((step, i) => (
                  <div key={step.step} className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-full border border-line bg-white flex items-center justify-center font-mono font-extrabold text-lg text-brand shadow-sm select-none">
                        {step.step}
                      </div>
                      <div className="lg:hidden flex-grow h-[1px] bg-line" />
                    </div>

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

        {/* 6. Benefits (Elegant editorial list with dividers, no colorful icons) */}
        <Section variant="mist" size="snug" pattern="none" className="relative border-b border-line">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
            {/* Left */}
            <div className="lg:col-span-5 space-y-4">
              <span className="section-eyebrow">Benefits &amp; Perks</span>
              <h2 className="heading-section text-txt-strong mt-3 font-sans font-extrabold text-3xl tracking-tight leading-tight text-balance">
                Supporting Our Engineering Teams
              </h2>
              <p className="text-body-md text-txt-muted max-w-[420px] font-sans font-medium leading-relaxed">
                We offer comprehensive support programs designed to sustain your wellness, professional advancement, and long-term security.
              </p>
            </div>

            {/* Right */}
            <div className="lg:col-span-7 border-t border-line divide-y divide-line">
              {employeeBenefits.map((benefit, i) => (
                <div key={benefit.title} className="py-6 first:pt-6 select-none">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6">
                    <h3 className="md:col-span-4 text-sm font-extrabold text-txt-strong font-sans tracking-tight">
                      {benefit.title}
                    </h3>
                    <p className="md:col-span-8 text-xs md:text-sm text-txt-muted font-sans font-semibold leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* 7. Apply CTA Banner */}
        <CtaBand
          title="Don't see the right role? We're always looking for great people."
          buttonText="Submit CV"
          buttonHref="/careers/submit-cv"
        />

      </main>

      {/* Footer */}
      <Footer />

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} showToast={() => {}} />
    </div>
  );
}

