"use client";

import React from "react";
import { Hero } from "@/components/insights/01_Hero";
import { Introduction } from "@/components/insights/02_Introduction";
import { ImageBandOne } from "@/components/insights/02b_ImageBand";
import { CategoryGrid } from "@/components/insights/04_CategoryGrid";
import { IndustryPerspectives } from "@/components/insights/05_IndustryPerspectives";
import { FeaturedSpotlight } from "@/components/insights/05b_Spotlight";
import { CaseStudies } from "@/components/insights/06_CaseStudies";
import { NewsUpdates } from "@/components/insights/08_NewsUpdates";
import { ClosingBand } from "@/components/insights/09b_ClosingBand";
import { ClosingCta } from "@/components/insights/10_ClosingCta";

export default function InsightsPageContent() {
  return (
    <div className="w-full">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Introduction */}
      <Introduction />

      {/* 3. Image Band - "Knowledge in Motion" */}
      <ImageBandOne />

      {/* 4. Category Grid */}
      <CategoryGrid />

      {/* 5. Industry Perspectives */}
      <IndustryPerspectives />

      {/* 6. Featured Spotlight */}
      <FeaturedSpotlight />

      {/* 7. Combined Case Studies + Whitepapers */}
      <CaseStudies />

      {/* 8. Combined News + Resource Library */}
      <NewsUpdates />

      {/* 9. Image Band - Closing */}
      <ClosingBand />

      {/* 10. Final CTA */}
      <ClosingCta />
    </div>
  );
}
