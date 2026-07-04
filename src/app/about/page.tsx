// src/app/about/page.tsx
"use client";

import React, { useState } from "react";
import ContactModal from "@/components/ContactModal";

// Modular Section Components
import Header from "@/components/about/Header";
import Hero from "@/components/about/Hero";
import CompanyOverview from "@/components/about/CompanyOverview";
import WhatWeDo from "@/components/about/WhatWeDo";
import Industries from "@/components/about/Industries";
import WhyDHGsoft from "@/components/about/WhyDHGsoft";
import VisionMission from "@/components/about/VisionMission";
import Purpose from "@/components/about/Purpose";
import CoreValues from "@/components/about/CoreValues";
import Leadership from "@/components/about/Leadership";
import ConnectingIntelligence from "@/components/about/ConnectingIntelligence";
import Differentiators from "@/components/about/Differentiators";
import PartnerEcosystem from "@/components/about/PartnerEcosystem";
import CorporateResponsibility from "@/components/about/CorporateResponsibility";
import Recognition from "@/components/about/Recognition";
import GlobalPresence from "@/components/about/GlobalPresence";
import LookingAheadCTA from "@/components/about/LookingAheadCTA";
import Footer from "@/components/about/Footer";

export default function AboutPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const triggerContactModal = () => {
    setIsContactOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans selection:bg-[#B4123F] selection:text-white">
      {/* 1) Sticky Header */}
      <Header onContactClick={triggerContactModal} />

      {/* Main content elements */}
      <main className="relative">
        
        {/* 2) Hero */}
        <Hero />

        {/* 3) Company Overview */}
        <CompanyOverview />

        {/* 4) What We Do */}
        <WhatWeDo />

        {/* 5) Industries We Serve */}
        <Industries />

        {/* 6) Why DHGsoft */}
        <WhyDHGsoft />

        {/* 7) Vision & Mission */}
        <VisionMission />

        {/* 8) Our Purpose */}
        <Purpose />

        {/* 9) Our Core Values */}
        <CoreValues />

        {/* 10) Leadership */}
        <Leadership />

        {/* 11) Connecting Intelligence */}
        <ConnectingIntelligence />

        {/* 12) What Makes Us Different */}
        <Differentiators />

        {/* 13) Partner Ecosystem */}
        <PartnerEcosystem />

        {/* 14) Corporate Responsibility */}
        <CorporateResponsibility />

        {/* 15) Recognition */}
        <Recognition />

        {/* 16) Global Presence */}
        <GlobalPresence />

        {/* 17) Looking Ahead & CTA */}
        <LookingAheadCTA onContactClick={triggerContactModal} />

      </main>

      {/* 18) Footer */}
      <Footer />

      {/* Contact modal handler */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        showToast={(msg, type) => {}}
      />
    </div>
  );
}
