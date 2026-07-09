"use client";
import { Section } from "@/components/ui/Section";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import {
  ChevronRight,
  Newspaper,
  Star,
  Shield,
  Handshake,
  Trophy,
  Lightbulb,
  ImageIcon,
  UserCircle,
  Palette,
  Mail,
  ArrowRight,
  AlertCircle,
  Calendar,
  Tag,
} from "lucide-react";

const PRESS_RELEASES = [
  {
    title: "DHGsoft Achieves ISO 27001 Certification",
    date: "May 2025",
    category: "Cybersecurity",
    icon: Shield,
    color: "text-emerald-400",
    iconBg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
    blurb:
      "DHGsoft receives ISO/IEC 27001:2022 certification across all global delivery centers, reinforcing its commitment to information security and enterprise-grade data protection.",
  },
  {
    title: "New Partnership with Leading Semiconductor Fab",
    date: "April 2025",
    category: "Partnerships",
    icon: Handshake,
    color: "text-sky-400",
    iconBg: "bg-sky-400/10",
    border: "border-sky-400/20",
    blurb:
      "DHGsoft partners with a Tier-1 semiconductor manufacturer to deploy its Industrial AI Platform across three front-end fabrication facilities, targeting a 22% OEE improvement.",
  },
  {
    title: "DHGsoft Named in Top 50 Industrial Tech Companies 2025",
    date: "March 2025",
    category: "Recognition",
    href: "/about/recognition",
    icon: Trophy,
    color: "text-amber-400",
    iconBg: "bg-amber-400/10",
    border: "border-amber-400/20",
    blurb:
      "For the second consecutive year, DHGsoft has been recognized among the top 50 most innovative industrial technology companies by industry research firm IDC.",
  },
  {
    title: "DHGsoft Launches Digital Twin Center of Excellence",
    date: "February 2025",
    category: "Innovation",
    icon: Lightbulb,
    color: "text-violet-400",
    iconBg: "bg-violet-400/10",
    border: "border-violet-400/20",
    blurb:
      "A dedicated Digital Twin CoE opens in Pune, India — housing 200+ engineers and researchers advancing high-fidelity simulation capabilities for industrial clients globally.",
  },
];

const MEDIA_RESOURCES = [
  {
    icon: Palette,
    title: "Brand Assets",
    desc: "Official logos, color palettes, typography guidelines, and usage rules for media use.",
    action: "Download Kit",
    color: "text-[#B4123F]",
    iconBg: "bg-[#B4123F]/8",
    border: "border-[#B4123F]/20",
  },
  {
    icon: UserCircle,
    title: "Executive Bios",
    desc: "Official biographies and headshots of DHGsoft's leadership and C-suite executives.",
    action: "Download Bios",
    color: "text-sky-600",
    iconBg: "bg-sky-500/8",
    border: "border-sky-500/20",
  },
  {
    icon: ImageIcon,
    title: "High-Res Images",
    desc: "Approved photography from our facilities, events, and product demonstrations.",
    action: "Download Images",
    color: "text-emerald-600",
    iconBg: "bg-emerald-500/8",
    border: "border-emerald-500/20",
  },
];

export default function NewsroomPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans">
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="relative pt-20">
        {/* ── HERO ──────────────────────────────────────────────── */}
        <Section variant="ink" containerSize="default" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-tech-grid opacity-40" />
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#B4123F]/8 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-[#E11D5C]/5 blur-[100px] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950" />

          <div className="w-full relative z-10 py-28 lg:py-36">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8 font-medium">
              <Link href="/" className="hover:text-[#B4123F] transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-slate-300">Newsroom</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#B4123F]/15 border border-[#B4123F]/30 mb-6">
              <Newspaper className="w-3.5 h-3.5 text-[#E11D5C]" />
              <span className="text-[#E11D5C] text-xs font-bold uppercase tracking-[0.18em]">
                Newsroom
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-black tracking-tight text-white leading-[1.05] mb-6 max-w-3xl">
              News, Press &{" "}
              <span className="bg-gradient-to-r from-[#B4123F] to-[#E11D5C] bg-clip-text text-transparent">
                Media
              </span>
            </h1>

            <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
              Latest news, press releases, and media resources from DHGsoft — the global leader in Industrial Digital Transformation.
            </p>
          </div>
        </Section>

        {/* ── FEATURED STORY ────────────────────────────────────── */}
        <Section variant="ink" containerSize="default" className=" relative overflow-hidden">
          <div className="absolute inset-0 bg-tech-grid opacity-20" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B4123F]/40 to-transparent" />
          <div className="w-full relative z-10">
            <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-[#B4123F]/40 transition-all duration-300 p-8 lg:p-12 relative overflow-hidden group">
              {/* Glow */}
              <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#B4123F]/8 blur-[100px] pointer-events-none" />
              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="inline-flex items-center gap-1.5 bg-[#B4123F] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                    <Star className="w-3 h-3" />
                    Featured
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-white/10 text-white/70 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/10">
                    <Tag className="w-3 h-3" />
                    Press Release
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-slate-400 text-xs">
                    <Calendar className="w-3.5 h-3.5" />
                    June 2025
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8">
                    <h2 className="text-2xl lg:text-4xl font-black text-white leading-tight mb-5">
                      DHGsoft Expands Industrial AI Platform to European Markets
                    </h2>
                    <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-2xl">
                      DHGsoft announces the expansion of its Industrial AI Platform to major European manufacturing hubs, partnering with 3 Tier-1 automotive suppliers. The expansion is expected to bring AI-enabled predictive maintenance and digital twin capabilities to over 40 production lines across Germany, France, and the Netherlands.
                    </p>
                    <button className="inline-flex items-center gap-2 bg-[#B4123F] hover:bg-[#E11D5C] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5 text-sm shadow-lg shadow-[#B4123F]/25">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Visual accent */}
                  <div className="lg:col-span-4 flex items-center justify-center">
                    <div className="relative w-48 h-48">
                      <div className="absolute inset-0 rounded-full bg-[#B4123F]/10 border border-[#B4123F]/20 animate-pulse" />
                      <div className="absolute inset-4 rounded-full bg-[#B4123F]/15 border border-[#B4123F]/25" />
                      <div className="absolute inset-8 rounded-full bg-[#B4123F]/20 border border-[#B4123F]/30 flex items-center justify-center">
                        <Newspaper className="w-10 h-10 text-[#E11D5C]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* ── PRESS RELEASES ────────────────────────────────────── */}
        <Section variant="white" containerSize="default" className=" bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-matrix opacity-50" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#B4123F]/4 blur-[120px] pointer-events-none" />
          <div className="w-full relative z-10">
            <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#B4123F]/8 border border-[#B4123F]/20 mb-5">
                  <span className="text-[#B4123F] text-xs font-bold uppercase tracking-[0.18em]">
                    Press Releases
                  </span>
                </div>
                <h2 className="text-3xl lg:text-[44px] font-black text-slate-900 tracking-tight leading-tight">
                  Latest Announcements
                </h2>
              </div>
              <button className="inline-flex items-center gap-2 text-sm font-semibold text-[#B4123F] hover:text-[#E11D5C] transition-colors">
                View All
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PRESS_RELEASES.map((pr, i) => {
                const Icon = pr.icon;
                const CardEl = pr.href ? Link : "div";
                const cardProps = pr.href ? { href: pr.href } : {};
                return (
                  <CardEl
                    key={i}
                    {...(cardProps as any)}
                    className={`bg-white rounded-2xl border ${pr.border} p-7 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group cursor-pointer block relative overflow-hidden`}
                  >
                    {/* Top accent line */}
                    <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent ${pr.color.replace("text-", "via-")} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <div className="flex items-start gap-5">
                      <div className={`w-12 h-12 rounded-xl ${pr.iconBg} flex items-center justify-center shrink-0`}>
                        <Icon className={`w-5 h-5 ${pr.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-3 flex-wrap">
                          <span className={`text-[10px] font-bold uppercase tracking-widest ${pr.color}`}>
                            {pr.category}
                          </span>
                          <span className="text-[10px] text-slate-400 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {pr.date}
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-slate-900 mb-3 leading-snug group-hover:text-[#B4123F] transition-colors">
                          {pr.title}
                        </h4>
                        <p className="text-sm text-slate-500 leading-relaxed">{pr.blurb}</p>
                        <div className={`flex items-center gap-1.5 mt-4 text-xs font-semibold ${pr.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                          Read More
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  </CardEl>
                );
              })}
            </div>
          </div>
        </Section>

        {/* ── MEDIA RESOURCES ───────────────────────────────────── */}
        <Section variant="white" containerSize="default" className=" bg-slate-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-tech-grid opacity-30" />
          <div className="w-full relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200 border border-slate-300 mb-5">
                <span className="text-slate-600 text-xs font-bold uppercase tracking-[0.18em]">
                  Media Kit
                </span>
              </div>
              <h2 className="text-3xl lg:text-[44px] font-black text-slate-900 tracking-tight leading-tight mb-4">
                Media Resources
              </h2>
              <p className="text-slate-500 max-w-lg mx-auto text-base leading-relaxed">
                Everything journalists and content creators need to cover DHGsoft accurately and compellingly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {MEDIA_RESOURCES.map((res, i) => {
                const Icon = res.icon;
                return (
                  <div
                    key={i}
                    className={`bg-white rounded-2xl border ${res.border} p-7 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group cursor-pointer text-center`}
                  >
                    <div className={`w-14 h-14 rounded-2xl ${res.iconBg} ${res.color} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 mb-3">{res.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed mb-6">{res.desc}</p>
                    <button className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${res.color} hover:opacity-80 transition-opacity`}>
                      {res.action}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </Section>

        {/* ── MEDIA CONTACT ─────────────────────────────────────── */}
        <Section variant="white" containerSize="default" className=" bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-matrix opacity-40" />
          <div className="relative z-10 max-w-2xl mx-auto px-6 lg:px-12">
            <div className="bg-slate-950 rounded-2xl border border-slate-800 hover:border-[#B4123F]/40 transition-all duration-300 p-8 lg:p-10 text-center relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#B4123F]/8 blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#B4123F]/15 text-[#E11D5C] flex items-center justify-center mx-auto mb-5">
                  <Mail className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Media Contact</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm mx-auto">
                  For press inquiries, interview requests, and editorial access, contact our communications team.
                </p>
                <a
                  href="mailto:media@dhgsoft.com"
                  className="inline-flex items-center gap-2 bg-[#B4123F] hover:bg-[#E11D5C] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5 text-sm shadow-lg shadow-[#B4123F]/25 mb-4"
                >
                  <Mail className="w-4 h-4" />
                  media@dhgsoft.com
                </a>
                <p className="text-xs text-slate-600 italic">[Placeholder — update with verified press contact]</p>
              </div>
            </div>
          </div>
        </Section>

        {/* ── DEMO DISCLAIMER ───────────────────────────────────── */}
        <Section variant="white" containerSize="default" className=" bg-amber-50 border-t border-amber-200">
          <div className="w-full relative z-10">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
              <p className="text-xs text-amber-700 leading-relaxed">
                <strong>Note:</strong> These are sample press releases for demonstration purposes only. All company names, partnership details, certifications, and milestones referenced on this page are fictional and intended solely to illustrate page structure. Replace with real, approved content from your communications team before publishing.
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
