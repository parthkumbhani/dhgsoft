"use client"

import React, { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ContactModal from "@/components/ContactModal"

import Hero from "@/components/careers/campus-early/01_Hero"
import JourneyStarts from "@/components/careers/campus-early/02_JourneyStarts"
import ExploreOpportunities from "@/components/careers/campus-early/03_ExploreOpportunities"
import WhyChoose from "@/components/careers/campus-early/04_WhyChoose"
import UniversityPartnerships from "@/components/careers/campus-early/05_UniversityPartnerships"
import GraduateProgram from "@/components/careers/campus-early/06_GraduateProgram"
import CampusJourney from "@/components/careers/campus-early/07_CampusJourney"
import WhatYoullGain from "@/components/careers/campus-early/08_WhatYoullGain"
import FAQ from "@/components/careers/campus-early/09_FAQ"
import FinalCta from "@/components/careers/campus-early/10_FinalCta"

export default function CampusEarlyCareersPage() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col font-sans antialiased selection:bg-[#B4123F] selection:text-white">
      {/* Header */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      {/* Main Content (10 structured sections) */}
      <main className="relative flex-grow pt-20">
        
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Journey Starts ( innovators intro ) */}
        <JourneyStarts />

        {/* Section 3: Explore Opportunities (6 cards grid) */}
        <ExploreOpportunities />

        {/* Section 4: Why Choose DHGsoft (3 reasons + tech chips) */}
        <WhyChoose />

        {/* Section 5: University Partnerships Checklist Row */}
        <UniversityPartnerships />

        {/* Section 6: Graduate Program (GET program + dynamic category tabs) */}
        <GraduateProgram />

        {/* Section 7: Campus Journey (9-step timeline flow) */}
        <CampusJourney />

        {/* Section 8: What You'll Gain (8-card dark success grid) */}
        <WhatYoullGain />

        {/* Section 9: FAQ Accordion */}
        <FAQ />

        {/* Section 10: Final closing CTA */}
        <FinalCta />

      </main>

      {/* Footer */}
      <Footer />

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        showToast={() => {}}
      />
    </div>
  )
}
