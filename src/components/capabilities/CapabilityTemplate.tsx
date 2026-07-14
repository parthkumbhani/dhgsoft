"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { CapabilityData } from "@/lib/capabilities";
import { capabilityPages } from "@/lib/capabilitiesSubData";

// Import 8 modular Cap sub-components
import { CapHero } from "./sub/CapHero";
import { CapOverview } from "./sub/CapOverview";
import { CapSolutions } from "./sub/CapSolutions";
import { CapImageBand } from "./sub/CapImageBand";
import { CapBenefits } from "./sub/CapBenefits";
import { CapJourney } from "./sub/CapJourney";
import { CapClosing } from "./sub/CapClosing";
import { CapCta } from "./sub/CapCta";

interface CapabilityTemplateProps {
  data: CapabilityData;
}

export default function CapabilityTemplate({ data }: CapabilityTemplateProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Find the detailed verbatim page content corresponding to this slug
  const pageContent = capabilityPages.find((p) => p.slug === data.slug) || capabilityPages[0];

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans selection:bg-[#B4123F] selection:text-white">
      {/* Sticky Header Navigation */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="relative pt-20">
        {/* 1. CapHero Section */}
        <CapHero
          eyebrow={pageContent.eyebrow}
          h1={pageContent.hero.h1}
          emphasisWord={pageContent.hero.emphasisWord}
          subLine={pageContent.hero.subLine}
          heroImage={pageContent.hero.heroImage}
          stats={pageContent.hero.stats}
        />

        {/* 2. CapOverview Section */}
        <CapOverview
          eyebrow={pageContent.overview.eyebrow}
          h2={pageContent.overview.h2}
          bodyParagraphs={pageContent.overview.bodyParagraphs}
          image={pageContent.overview.image}
          imageAlt={pageContent.title}
        />

        {/* 3. CapSolutions Section */}
        <CapSolutions
          eyebrow={pageContent.solutions.eyebrow}
          h2={pageContent.solutions.h2}
          subLine={pageContent.solutions.subLine}
          items={pageContent.solutions.items}
        />

        {/* 4. CapImageBand Section */}
        <CapImageBand
          image={pageContent.imageBand.image}
          imageAlt={pageContent.title + " Visual Band"}
          caption={pageContent.imageBand.caption}
          captionEyebrow={pageContent.imageBand.captionEyebrow}
        />

        {/* 5. CapBenefits Section */}
        <CapBenefits
          eyebrow={pageContent.benefits.eyebrow}
          h2={pageContent.benefits.h2}
          benefits={pageContent.benefits.items}
        />

        {/* 6. CapJourney Section */}
        <CapJourney
          eyebrow={pageContent.journey.eyebrow}
          h2={pageContent.journey.h2}
          subLine={pageContent.journey.subLine}
          steps={pageContent.journey.steps}
        />

        {/* 7. CapClosing Section */}
        <CapClosing text={pageContent.closing} />

        {/* 8. CapCta Section */}
        <CapCta title={pageContent.ctaTitle} />
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Sales Lead Overlay Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        showToast={() => {}}
      />
    </div>
  );
}
export { CapabilityTemplate };
