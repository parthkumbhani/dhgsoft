"use client";
import { Section } from "@/components/ui/Section";
import CTABand from "@/components/CTABand";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import {
  ChevronRight,
  Cpu,
  Box,
  RefreshCcw,
  ShieldCheck,
  FlaskConical,
  Microscope,
  GraduationCap,
  Building2,
  ArrowRight,
  Zap,
  Globe,
  FileCode2,
} from "lucide-react";

const RESEARCH_AREAS = [
  {
    icon: Cpu,
    title: "Edge AI & Embedded Intelligence",
    description:
      "Deploying AI models at the industrial edge for real-time inference — enabling sub-millisecond decision-making directly on PLCs and embedded controllers.",
    color: "from-violet-500/10 to-violet-500/5",
    border: "border-violet-500/20",
    iconBg: "bg-violet-500/10 text-violet-400",
    tag: "AI / ML",
  },
  {
    icon: Box,
    title: "Digital Twin Architecture",
    description:
      "High-fidelity simulation environments for industrial asset optimization — mirroring physical systems to predict failures and accelerate engineering cycles.",
    color: "from-sky-500/10 to-sky-500/5",
    border: "border-sky-500/20",
    iconBg: "bg-sky-500/10 text-sky-400",
    tag: "Simulation",
  },
  {
    icon: RefreshCcw,
    title: "Autonomous Process Control",
    description:
      "Self-correcting control loops powered by reinforcement learning — systems that adapt dynamically to real-world variability without human intervention.",
    color: "from-emerald-500/10 to-emerald-500/5",
    border: "border-emerald-500/20",
    iconBg: "bg-emerald-500/10 text-emerald-400",
    tag: "Reinforcement Learning",
  },
  {
    icon: ShieldCheck,
    title: "Secure OT/IT Convergence",
    description:
      "Zero-trust network designs for critical infrastructure integration — bridging operational technology and IT networks with industrial-grade cybersecurity.",
    color: "from-rose-500/10 to-rose-500/5",
    border: "border-rose-500/20",
    iconBg: "bg-rose-500/10 text-rose-400",
    tag: "Cybersecurity",
  },
];

const FEATURED_RESEARCH = [
  {
    code: "PROJECT MERIDIAN",
    title: "Real-Time Predictive Failure Detection",
    description:
      "Using sparse neural networks deployed directly on PLCs, Project Meridian delivers predictive failure detection with millisecond latency — without cloud dependency. Tested across 14 industrial facilities.",
    icon: Microscope,
    tags: ["Sparse Neural Nets", "PLC Deployment", "Predictive Maintenance"],
    status: "Active Research",
  },
  {
    code: "PROJECT HELIOS",
    title: "Hybrid Grid Optimizer via Digital Twin",
    description:
      "A photovoltaic and battery hybrid grid optimizer using digital twin orchestration. Project Helios dynamically balances renewable energy loads, reducing grid instability events by up to 38%.",
    icon: FlaskConical,
    tags: ["Digital Twin", "Energy Optimization", "Grid Stability"],
    status: "Active Research",
  },
];

const STATS = [
  { value: "200+", label: "Active R&D Projects", icon: FileCode2 },
  { value: "15", label: "Patent Applications", icon: Zap },
  { value: "8", label: "University Partners", icon: GraduationCap },
  { value: "12+", label: "Countries Deployed", icon: Globe },
];

export default function InnovationInstitutePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans">
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="relative pt-20">
        {/* ── HERO ──────────────────────────────────────────────── */}
        <Section variant="ink" containerSize="default" className="relative overflow-hidden">
          {/* Tech grid overlay */}
          <div className="absolute inset-0 bg-tech-grid opacity-40" />
          {/* Gradient blobs */}
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#B4123F]/8 blur-[120px] pointer-events-none" />
          <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-[#E11D5C]/6 blur-[100px] pointer-events-none" />
          {/* Subtle grid lines */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950" />

          <div className="w-full relative z-10 py-28 lg:py-36">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8 font-medium tracking-wide">
              <Link href="/" className="hover:text-[#B4123F] transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-slate-300">Innovation Institute</span>
            </nav>

            {/* Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#B4123F]/15 border border-[#B4123F]/30 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B4123F] animate-pulse" />
              <span className="text-[#E11D5C] text-xs font-bold uppercase tracking-[0.18em]">
                DHG Innovation Institute
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-black tracking-tight text-white leading-[1.05] mb-6 max-w-4xl">
              Where Industrial{" "}
              <span className="bg-gradient-to-r from-[#B4123F] to-[#E11D5C] bg-clip-text text-transparent">
                Intelligence
              </span>{" "}
              Is Born
            </h1>

            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed mb-10">
              DHG Innovation Institute is DHGsoft's dedicated R&D arm — advancing the science of industrial AI, digital twin engineering, and autonomous systems to create real-world impact.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setIsContactOpen(true)}
                className="inline-flex items-center gap-2 bg-[#B4123F] hover:bg-[#E11D5C] text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-[#B4123F]/25"
              >
                Partner With Us
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#research-focus"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold px-7 py-3.5 rounded-xl border border-white/10 transition-all duration-300"
              >
                Explore Research
              </a>
            </div>
          </div>
        </Section>

        {/* ── MISSION STRIP ─────────────────────────────────────── */}
        <Section variant="white" containerSize="default" className="bg-white border-b border-slate-100">
          <div className="w-full relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-100">
              {STATS.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center py-10 px-6 gap-3 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#B4123F]/8 flex items-center justify-center text-[#B4123F] group-hover:bg-[#B4123F]/15 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider text-center">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Section>

        {/* ── RESEARCH FOCUS AREAS ──────────────────────────────── */}
        <Section variant="white" containerSize="default" id="research-focus" className=" bg-slate-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-matrix opacity-60" />
          <div className="w-full relative z-10">
            {/* Section header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#B4123F]/8 border border-[#B4123F]/20 mb-5">
                <span className="text-[#B4123F] text-xs font-bold uppercase tracking-[0.18em]">
                  Research Focus
                </span>
              </div>
              <h2 className="text-3xl lg:text-[44px] font-black text-slate-900 tracking-tight leading-tight mb-4">
                Core Research Domains
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
                Four converging disciplines that define the next era of industrial digital transformation.
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {RESEARCH_AREAS.map((area, i) => {
                const Icon = area.icon;
                return (
                  <div
                    key={i}
                    className={`relative bg-white rounded-2xl border ${area.border} p-7 group hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 overflow-hidden`}
                  >
                    {/* Bg gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}
                    />
                    <div className="relative z-10">
                      <div className={`w-12 h-12 rounded-xl ${area.iconBg} flex items-center justify-center mb-5`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3 block">
                        {area.tag}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 mb-3 leading-snug">
                        {area.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Section>

        {/* ── FEATURED RESEARCH ─────────────────────────────────── */}
        <Section variant="white" containerSize="default" className=" bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#B4123F]/4 blur-[120px] pointer-events-none" />
          <div className="w-full relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-5">
                <span className="text-slate-600 text-xs font-bold uppercase tracking-[0.18em]">
                  Featured Research
                </span>
              </div>
              <h2 className="text-3xl lg:text-[44px] font-black text-slate-900 tracking-tight leading-tight mb-4">
                Flagship R&D Projects
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
                Breakthrough initiatives that push the boundaries of what's possible in industrial intelligence.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {FEATURED_RESEARCH.map((project, i) => {
                const Icon = project.icon;
                return (
                  <div
                    key={i}
                    className="bg-slate-950 rounded-2xl p-8 lg:p-10 border border-slate-800 hover:border-[#B4123F]/40 transition-all duration-300 group relative overflow-hidden"
                  >
                    {/* Glow */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#B4123F]/6 blur-[80px] pointer-events-none" />
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-[#B4123F]/15 border border-[#B4123F]/25 flex items-center justify-center text-[#E11D5C]">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full border border-emerald-400/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          {project.status}
                        </span>
                      </div>

                      <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#B4123F] mb-2">
                        {project.code}
                      </p>
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, j) => (
                          <span
                            key={j}
                            className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Section>

        {/* ── ACADEMIC & INDUSTRY PARTNERS ─────────────────────── */}
        <Section variant="white" containerSize="default" className=" bg-slate-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-tech-grid opacity-30" />
          <div className="w-full relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#B4123F]/8 border border-[#B4123F]/20 mb-6">
              <Building2 className="w-3.5 h-3.5 text-[#B4123F]" />
              <span className="text-[#B4123F] text-xs font-bold uppercase tracking-[0.18em]">
                Academic & Industry Partners
              </span>
            </div>
            <h2 className="text-2xl lg:text-4xl font-black text-slate-900 tracking-tight mb-6">
              Built on World-Class Collaboration
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
              We collaborate with leading universities, national laboratories, and technology companies to advance the frontiers of industrial intelligence — creating a research ecosystem that bridges academia with real industrial deployment.
            </p>

            {/* Partner type icons */}
            <div className="mt-14 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              {[
                { icon: GraduationCap, label: "University Partners", count: "8" },
                { icon: Building2, label: "National Laboratories", count: "4" },
                { icon: Globe, label: "Technology Companies", count: "20+" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#B4123F]/30 hover:-translate-y-1 transition-all duration-300 shadow-sm group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#B4123F]/8 text-[#B4123F] flex items-center justify-center mx-auto mb-3 group-hover:bg-[#B4123F]/15 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-2xl font-black text-slate-900 mb-1">{item.count}</div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      {item.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Section>

        {/* CTA BAND */}
        <CTABand
          label="PARTNER WITH DHGSOFT"
          headline="Building Value"
          highlightedText="for Tomorrow."
          description="Whether you are modernizing a single production line, connecting enterprise systems to the cloud, or building a secure data foundation — DHGsoft is your engineering partner from concept to commissioning."
          primaryLabel="Start a Conversation →"
          secondaryLabel="Explore Capabilities"
          onPrimaryClick={() => setIsContactOpen(true)}
        />
      </main>

      <Footer />
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        showToast={(msg, type) => {}}
      />
    </div>
  );
}
