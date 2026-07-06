"use client";
import { Section } from "@/components/ui/Section";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import {
  ChevronRight,
  TrendingUp,
  RefreshCcw,
  Globe,
  BarChart3,
  FileText,
  Shield,
  Download,
  Users,
  CheckCircle2,
  ArrowRight,
  Mail,
  AlertCircle,
  Building,
  Leaf,
} from "lucide-react";

const THESIS_PILLARS = [
  {
    icon: TrendingUp,
    title: "Market Leadership",
    description:
      "Positioned at the intersection of Industry 4.0, AI, and critical infrastructure modernization — a market projected to exceed $500B by 2030.",
    points: [
      "First-mover advantage in industrial AI",
      "Recognized by Gartner & Forrester",
      "Deep vertical expertise across 8 sectors",
    ],
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
  {
    icon: RefreshCcw,
    title: "Recurring Revenue Model",
    description:
      "Long-term enterprise contracts with Fortune 500 manufacturers and utilities provide predictable, high-margin recurring revenue streams.",
    points: [
      "Multi-year SLA contracts",
      "Platform subscription + services",
      "High switching cost moats",
    ],
    color: "text-sky-400",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description:
      "Operations across 12+ countries with 500+ enterprise clients, supported by a globally distributed delivery and support infrastructure.",
    points: [
      "12+ countries of operation",
      "500+ enterprise clients",
      "Regional CoEs in 4 continents",
    ],
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
];

const FINANCIAL_METRICS = [
  { label: "Revenue Growth YoY", value: "[Update]", icon: TrendingUp, note: "Pending update" },
  { label: "Enterprise Contracts", value: "[Update]", icon: FileText, note: "Pending update" },
  { label: "Countries Served", value: "12+", icon: Globe, note: "As of 2025" },
  { label: "Year Founded", value: "2012", icon: Building, note: "Over a decade of delivery" },
];

const REPORTS = [
  {
    icon: BarChart3,
    title: "Annual Report",
    desc: "Comprehensive overview of financial performance, strategic milestones, and forward outlook.",
    tag: "FY 2024",
    color: "text-[#B4123F]",
    bg: "bg-[#B4123F]/8",
  },
  {
    icon: FileText,
    title: "Quarterly Updates",
    desc: "Detailed quarterly business updates, revenue metrics, and pipeline highlights.",
    tag: "Q1 2025",
    color: "text-sky-600",
    bg: "bg-sky-500/8",
  },
  {
    icon: Leaf,
    title: "ESG Report",
    href: "/about/sustainability-esg",
    desc: "Environmental, social, and governance commitments and progress benchmarks.",
    tag: "ESG 2024",
    color: "text-emerald-600",
    bg: "bg-emerald-500/8",
  },
];

export default function InvestorsPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans">
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="relative pt-20">
        {/* ── HERO ──────────────────────────────────────────────── */}
        <Section variant="ink" containerSize="default" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-tech-grid opacity-40" />
          <div className="absolute -top-40 left-1/4 w-[700px] h-[700px] rounded-full bg-[#B4123F]/7 blur-[130px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#E11D5C]/5 blur-[100px] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950" />

          <div className="w-full relative z-10 py-28 lg:py-36">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8 font-medium">
              <Link href="/" className="hover:text-[#B4123F] transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-slate-300">Investor Relations</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#B4123F]/15 border border-[#B4123F]/30 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B4123F] animate-pulse" />
              <span className="text-[#E11D5C] text-xs font-bold uppercase tracking-[0.18em]">
                Investor Relations
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-black tracking-tight text-white leading-[1.05] mb-6 max-w-4xl">
              Building Long-Term Value Through{" "}
              <span className="bg-gradient-to-r from-[#B4123F] to-[#E11D5C] bg-clip-text text-transparent">
                Industrial Digital Transformation
              </span>
            </h1>

            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed mb-10">
              DHGsoft delivers sustainable, compounding value at the forefront of Industry 4.0 — combining enterprise AI, operational technology, and global delivery scale.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#investment-thesis"
                className="inline-flex items-center gap-2 bg-[#B4123F] hover:bg-[#E11D5C] text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-[#B4123F]/25 text-sm"
              >
                Investment Thesis
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#reports"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold px-7 py-3.5 rounded-xl border border-white/10 transition-all duration-300 text-sm"
              >
                Reports & Filings
              </a>
            </div>
          </div>
        </Section>

        {/* ── INVESTMENT THESIS ─────────────────────────────────── */}
        <Section variant="white" containerSize="default" id="investment-thesis" className=" bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-matrix opacity-50" />
          <div className="w-full relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#B4123F]/8 border border-[#B4123F]/20 mb-5">
                <span className="text-[#B4123F] text-xs font-bold uppercase tracking-[0.18em]">
                  Why DHGsoft
                </span>
              </div>
              <h2 className="text-3xl lg:text-[44px] font-black text-slate-900 tracking-tight leading-tight mb-4">
                The Investment Thesis
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
                Three structural advantages that underpin DHGsoft's position as a long-term industrial technology leader.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {THESIS_PILLARS.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={i}
                    className={`bg-slate-950 rounded-2xl p-8 border ${pillar.border} hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/2 to-transparent" />
                    <div className="relative z-10">
                      <div className={`w-12 h-12 rounded-xl ${pillar.bg} ${pillar.color} flex items-center justify-center mb-6`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className={`text-xl font-bold mb-3 ${pillar.color}`}>{pillar.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-6">{pillar.description}</p>
                      <ul className="space-y-2.5">
                        {pillar.points.map((pt, j) => (
                          <li key={j} className="flex items-start gap-2.5 text-slate-300 text-sm">
                            <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${pillar.color}`} />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Section>

        {/* ── FINANCIAL HIGHLIGHTS ──────────────────────────────── */}
        <Section variant="white" containerSize="default" className="bg-slate-50 border-y border-slate-100">
          <div className="w-full relative z-10">
            <div className="py-6 border-b border-slate-200 mb-0">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400 text-center">
                Financial Highlights
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-200">
              {FINANCIAL_METRICS.map((m, i) => {
                const Icon = m.icon;
                return (
                  <div key={i} className="flex flex-col items-center py-12 px-6 gap-3 group">
                    <div className="w-11 h-11 rounded-xl bg-[#B4123F]/8 text-[#B4123F] flex items-center justify-center group-hover:bg-[#B4123F]/15 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                      {m.value}
                    </div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider text-center">{m.label}</div>
                    <div className="text-[10px] text-slate-400 italic">{m.note}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </Section>

        {/* ── GOVERNANCE ────────────────────────────────────────── */}
        <Section variant="white" containerSize="default" className=" bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[#B4123F]/4 blur-[100px] pointer-events-none" />
          <div className="w-full relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-5">
                <Shield className="w-3.5 h-3.5 text-slate-600" />
                <span className="text-slate-600 text-xs font-bold uppercase tracking-[0.18em]">
                  Corporate Governance
                </span>
              </div>
              <h2 className="text-3xl lg:text-[44px] font-black text-slate-900 tracking-tight leading-tight mb-4">
                Governance & Oversight
              </h2>
              <p className="text-slate-500 max-w-lg mx-auto text-base leading-relaxed">
                DHGsoft operates under rigorous governance frameworks designed for institutional investor confidence.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: Users,
                  title: "Board of Directors",
                  desc: "Our board comprises seasoned executives from industrial, technology, and financial sectors, ensuring strategic oversight and fiduciary integrity.",
                  tag: "Composition Placeholder",
                  bg: "bg-slate-950",
                  border: "border-slate-800",
                },
                {
                  icon: Shield,
                  title: "Audit & Compliance",
                  desc: "An independent audit committee oversees financial reporting, internal controls, and regulatory compliance across all operating jurisdictions.",
                  tag: "Details Placeholder",
                  bg: "bg-slate-950",
                  border: "border-slate-800",
                },
              ].map((gov, i) => {
                const Icon = gov.icon;
                return (
                  <div
                    key={i}
                    className={`${gov.bg} ${gov.border} border rounded-2xl p-8 hover:border-[#B4123F]/40 transition-all duration-300 group`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#B4123F]/15 text-[#E11D5C] flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 block">
                      {gov.tag}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-3">{gov.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{gov.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Section>

        {/* ── REPORTS & FILINGS ─────────────────────────────────── */}
        <Section variant="white" containerSize="default" id="reports" className=" bg-slate-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-tech-grid opacity-30" />
          <div className="w-full relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#B4123F]/8 border border-[#B4123F]/20 mb-5">
                <span className="text-[#B4123F] text-xs font-bold uppercase tracking-[0.18em]">
                  Filings
                </span>
              </div>
              <h2 className="text-3xl lg:text-[44px] font-black text-slate-900 tracking-tight leading-tight mb-4">
                Reports & Filings
              </h2>
              <p className="text-slate-500 max-w-lg mx-auto text-base leading-relaxed">
                Access our latest financial reports, quarterly updates, and ESG disclosures.
              </p>
            </div>

            <div className="w-full relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {REPORTS.map((report, i) => {
                const Icon = report.icon;
                const CardWrapper = report.href ? Link : "div";
                const cardProps = report.href ? { href: report.href } : {};
                return (
                  <CardWrapper
                    key={i}
                    {...(cardProps as any)}
                    className="bg-white rounded-2xl border border-slate-200 p-7 hover:border-[#B4123F]/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group cursor-pointer block"
                  >
                    <div className={`w-12 h-12 rounded-xl ${report.bg} ${report.color} flex items-center justify-center mb-5`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${report.color} mb-2 block`}>
                      {report.tag}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mb-3">{report.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-6">{report.desc}</p>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 group-hover:text-[#B4123F] transition-colors">
                      <Download className="w-3.5 h-3.5" />
                      {report.href ? "View Report" : "Download (Placeholder)"}
                    </div>
                  </CardWrapper>
                );
              })}
            </div>
          </div>
        </Section>

        {/* ── CONTACT IR ────────────────────────────────────────── */}
        <Section variant="white" containerSize="default" className=" bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-matrix opacity-40" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#B4123F]/4 blur-[120px] pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-5">
                <Mail className="w-3.5 h-3.5 text-slate-600" />
                <span className="text-slate-600 text-xs font-bold uppercase tracking-[0.18em]">
                  IR Contact
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
                Contact Investor Relations
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Reach out to our IR team for questions about financial performance, corporate strategy, or upcoming events.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 lg:p-10">
              {/* Demo note */}
              <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-8">
                <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                <p className="text-xs text-amber-700 leading-relaxed">
                  This is a demo contact block. Connect to your IR platform or CRM before publishing.
                </p>
              </div>

              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInput}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#B4123F] focus:ring-2 focus:ring-[#B4123F]/15 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInput}
                      placeholder="jane@fund.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#B4123F] focus:ring-2 focus:ring-[#B4123F]/15 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInput}
                    rows={5}
                    placeholder="I'd like to learn more about..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#B4123F] focus:ring-2 focus:ring-[#B4123F]/15 transition-all resize-none"
                  />
                </div>
                <button
                  type="button"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#B4123F] hover:bg-[#E11D5C] text-white font-semibold py-3.5 rounded-xl transition-all duration-300 text-sm"
                >
                  Send Message
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Disclosure */}
            <div className="mt-10 pt-8 border-t border-slate-100">
              <p className="text-xs text-slate-400 leading-relaxed text-center">
                <strong className="text-slate-500">Disclosure Notice:</strong> Forward-looking statements are subject to risk and uncertainty. This page is for informational purposes only and does not constitute an offer to buy or sell securities. DHGsoft makes no representations or warranties regarding the completeness or accuracy of information presented herein.
              </p>
            </div>
          </div>
        </Section>
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
