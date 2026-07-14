// src/app/about/page.tsx
"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

// Modular Chapter Components
import { EditorialCover } from "@/components/about/01_EditorialCover";
import { ChapterWhoWeAre } from "@/components/about/02_ChapterWhoWeAre";
import { ChapterWhyWeExist } from "@/components/about/03_ChapterWhyWeExist";
import { VisionMission } from "@/components/about/04_VisionMission";
import { ValuesManifesto } from "@/components/about/05_ValuesManifesto";
import { StrategicTimeline } from "@/components/about/06_StrategicTimeline";
import { PartnershipMarquee } from "@/components/about/07_PartnershipMarquee";
import { SignatureClosing } from "@/components/about/08_SignatureClosing";

export default function AboutPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans selection:bg-[#B4123F] selection:text-white">
      {/* Navigation Header */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      {/* Main Assembly — Vertical Scroll Chapters */}
      <main className="relative">
        {/* VOL 01: Cover */}
        <EditorialCover />

        {/* 01: Who We Are */}
        <ChapterWhoWeAre />

        {/* 02: Why We Exist */}
        <ChapterWhyWeExist />

        {/* 03: Vision & Mission */}
        <VisionMission />

        {/* 04: Values Manifesto */}
        <ValuesManifesto />

        {/* 05: Strategic Timeline */}
        <StrategicTimeline />

        {/* 06: Partnership Marquee */}
        <PartnershipMarquee />

        {/* 07: Signature Closing */}
        <SignatureClosing />
      </main>

      {/* Shared Footer */}
      <Footer />

      {/* Contact Interaction Overlay */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        showToast={() => {}}
      />
    </div>
  );
}
