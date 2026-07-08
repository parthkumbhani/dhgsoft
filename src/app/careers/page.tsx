// src/app/careers/page.tsx
"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

// Sub-components matching the CEO reference design exactly with upgraded styles
import CareersHero from "@/components/careers/CareersHero";
import InnovationBand from "@/components/careers/InnovationBand";
import WhyJoinSplit from "@/components/careers/WhyJoinSplit";
import FiveReasonsGrid from "@/components/careers/FiveReasonsGrid";
import TestimonialBand from "@/components/careers/TestimonialBand";
import JourneyCta from "@/components/careers/JourneyCta";
import CampusCard from "@/components/careers/CampusCard";

export default function CareersLandingPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans selection:bg-[#B4123F] selection:text-white">
      {/* Premium Navigation Menu */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      {/* Main flow sections assembled matching the exact CEO reference PDF order */}
      <main className="relative pt-20">
        
        {/* Section 1: Hero */}
        <CareersHero />

        {/* Section 2: Innovation Meets Opportunity Photo Band */}
        <InnovationBand />

        {/* Section 3: Why Join DHGsoft (Split Column) */}
        <WhyJoinSplit />

        {/* Section 4: 5 Reasons Grid */}
        <FiveReasonsGrid />

        {/* Section 5: Employee Testimonial Gradient Band */}
        <TestimonialBand />

        {/* Section 7: Journey CTA Card */}
        <JourneyCta />

        {/* Section 8: Campus & Early Careers Bottom Card */}
        <CampusCard />

      </main>

      {/* Footer */}
      <Footer />

      {/* Contact consultation Overlay Modal */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
        showToast={() => {}} 
      />
    </div>
  );
}
