// src/app/careers/page.tsx
"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

// Clean Light-Theme Editorial Sections for Careers Overview (Page 1)
import { Hero }                from "@/components/careers/landing/01_Hero";
import { WhyDHGsoft }          from "@/components/careers/landing/02_WhyDHGsoft";
import { CareerOpportunities } from "@/components/careers/landing/05_CareerOpportunities";
import { FinalCta }            from "@/components/careers/landing/10_FinalCta";

export default function CareersPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans selection:bg-[#B4123F] selection:text-white">
      {/* Header Navigation */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      {/* Page Content: Clean Editorial Layout */}
      <main className="relative pt-20">
        {/* 1. Full Screen Hero */}
        <Hero />

        {/* 2. Below Hero Storytelling (Why choose DHGsoft) */}
        <WhyDHGsoft />

        {/* 3. Career Domains (Premium Editorial Navigation Panels) */}
        <CareerOpportunities />

        {/* 4. Final CTA Section */}
        <FinalCta />
      </main>

      {/* Footer */}
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
