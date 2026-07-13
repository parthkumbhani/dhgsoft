// src/app/careers/life-at-dhgsoft/page.tsx
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

export default function LifeAtDhgsoftPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

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
              <span className="text-brand">Life at DHGsoft</span>
            </div>

            <h1 className="heading-hero text-txt-strong">
              Life at DHGsoft
            </h1>
            <p className="text-body-md text-txt-muted max-w-2xl font-sans font-medium leading-relaxed">
              Discover our culture, benefits, and engineering mindset.
            </p>
          </div>
        </Section>

        {/* ── ALTERNATING EDITORIAL LAYOUTS ── */}

        {/* Section 1: Team Collaboration (Image Left, Text Right) */}
        <Section variant="white" size="snug" pattern="none" className="border-b border-line">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="lg:col-span-6 relative aspect-[16/10] rounded-[24px] overflow-hidden shadow-sm border border-line bg-slate-50">
              <Image
                src="/images/careers/culture/collaboration.jpg"
                alt="DHGsoft design systems team brainstorming at whiteboard"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            {/* Text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="section-eyebrow">Collaboration</span>
              <h2 className="heading-section text-txt-strong">
                Cross-Functional Engineering Syncs
              </h2>
              <p className="text-body-md text-txt-muted font-sans font-medium leading-relaxed">
                At DHGsoft, engineers don&apos;t work in isolation. Our systems designers, software developers, and industrial analysts sit in joint delivery groups. We align hardware telemetry streams with software architectures through open, collaborative reviews.
              </p>
            </div>
          </div>
        </Section>

        {/* Section 2: Industrial Site Visits & Commissioning (Image Right, Text Left) */}
        <Section variant="mist" size="snug" pattern="none" className="border-b border-line">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div className="lg:col-span-6 space-y-6 order-last lg:order-first">
              <span className="section-eyebrow">On-Site Commissioning</span>
              <h2 className="heading-section text-txt-strong">
                Bridging Physical &amp; Digital Floors
              </h2>
              <p className="text-body-md text-txt-muted font-sans font-medium leading-relaxed">
                We believe great software is verified at the edge. Our engineering groups make regular commissions to client manufacturing facilities, treatment plants, and utility substations to verify telemetry loops, security firewalls, and digital twin layouts directly on-site.
              </p>
            </div>
            {/* Image */}
            <div className="lg:col-span-6 relative aspect-[16/10] rounded-[24px] overflow-hidden shadow-sm border border-line bg-slate-50">
              <Image
                src="/images/careers/culture/engineer-factory.jpg"
                alt="DHGsoft engineer tuning system loop parameters beside PLC panel"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>
        </Section>

        {/* Section 3: Training & Knowledge Transfer (Image Left, Text Right) */}
        <Section variant="white" size="snug" pattern="none" className="border-b border-line">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="lg:col-span-6 relative aspect-[16/10] rounded-[24px] overflow-hidden shadow-sm border border-line bg-slate-50">
              <Image
                src="/images/careers/culture/training.jpg"
                alt="Senior engineering leads conducting a technical systems architecture workshop"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            {/* Text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="section-eyebrow">Continuous Learning</span>
              <h2 className="heading-section text-txt-strong">
                Structured Technical Mentorship
              </h2>
              <p className="text-body-md text-txt-muted font-sans font-medium leading-relaxed">
                Growth is built into our daily routine. Senior systems architects lead weekly whiteboarding syncs, code teardowns, and certification reviews. We provide dedicated development hours to ensure everyone maintains a sharp technical edge.
              </p>
            </div>
          </div>
        </Section>

        {/* Section 4: Milestones & Team Focus (Image Right, Text Left) */}
        <Section variant="mist" size="snug" pattern="none" className="border-b border-line">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div className="lg:col-span-6 space-y-6 order-last lg:order-first">
              <span className="section-eyebrow">Team Alignment</span>
              <h2 className="heading-section text-txt-strong">
                Celebrating Project Deliveries
              </h2>
              <p className="text-body-md text-txt-muted font-sans font-medium leading-relaxed">
                Deploying complex systems across global facilities is demanding work. We ensure our delivery groups step back to review milestones, share architecture lessons, and celebrate successful commissioning phases together.
              </p>
            </div>
            {/* Image */}
            <div className="lg:col-span-6 relative aspect-[16/10] rounded-[24px] overflow-hidden shadow-sm border border-line bg-slate-50">
              <Image
                src="/images/careers/culture/celebration.jpg"
                alt="DHGsoft delivery team reviewing project commissioning milestones"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>
        </Section>

        {/* Crimson CTA band */}
        <CtaBand
          title="Like how we work? Come build with us."
          buttonText="View Current Openings"
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

