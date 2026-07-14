"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

// 10 Capabilities Page Sections
import { Hero } from "@/components/capabilities/landing/01_Hero";
import { Overview } from "@/components/capabilities/landing/02_Overview";
import { CoreCapabilities } from "@/components/capabilities/landing/03_CoreCapabilities";
import { FeaturedSpotlight } from "@/components/capabilities/landing/04_FeaturedSpotlight";
import { HowWeDeliver } from "@/components/capabilities/landing/05_HowWeDeliver";
import { IndustriesSupported } from "@/components/capabilities/landing/06_IndustriesSupported";
import { WhyChoose } from "@/components/capabilities/landing/07_WhyChoose";
import { DeliveryExcellenceBand } from "@/components/capabilities/landing/08_DeliveryExcellenceBand";
import { ClosingStatement } from "@/components/capabilities/landing/09_ClosingStatement";
import { FinalCta } from "@/components/capabilities/landing/10_FinalCta";

export default function CapabilitiesPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans selection:bg-[#B4123F] selection:text-white">
      {/* Premium Sticky Navigation Menu */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      {/* Main Sections wrapped inside centered layout */}
      <main className="relative pt-20">
        {/* 1. Hero banner */}
        <Hero />

        {/* 2. Capabilities Overview */}
        <Overview />

        {/* 3. Core Capabilities Grid (10 cards) */}
        <CoreCapabilities />

        {/* 4. Flagship Spotlight: Industrial Digital Transformation */}
        <FeaturedSpotlight />

        {/* 5. 4-step Delivery Method */}
        <HowWeDeliver />

        {/* 6. Industries We Support (14 pills) */}
        <IndustriesSupported />

        {/* 7. Why Choose DHGsoft narrative + pull-quote */}
        <WhyChoose />

        {/* 8. Delivery Excellence Band (4 stat cards) */}
        <DeliveryExcellenceBand />

        {/* 9. Centered closing statement ribbon */}
        <ClosingStatement />

        {/* 10. Final Call to Action */}
        <FinalCta />
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Overlay Modal for Sales Consultation */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        showToast={() => {}}
      />
    </div>
  );
}
export { CapabilitiesPage };
