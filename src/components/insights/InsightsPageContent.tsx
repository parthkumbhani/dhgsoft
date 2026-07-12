"use client";

import React from "react";
import { Hero } from "@/components/insights/01_Hero";
import { Introduction } from "@/components/insights/02_Introduction";
import { FeaturedInsights } from "@/components/insights/03_FeaturedInsights";
import { CategoryGrid } from "@/components/insights/04_CategoryGrid";
import { IndustryPerspectives } from "@/components/insights/05_IndustryPerspectives";
import { CaseStudies } from "@/components/insights/06_CaseStudies";
import { Whitepapers } from "@/components/insights/07_Whitepapers";
import { NewsUpdates } from "@/components/insights/08_NewsUpdates";
import { ResourceLibrary } from "@/components/insights/09_ResourceLibrary";
import { ClosingCta } from "@/components/insights/10_ClosingCta";

export default function InsightsPageContent() {
  return (
    <div className="w-full">
      <Hero />
      <Introduction />
      <FeaturedInsights />
      <CategoryGrid />
      <IndustryPerspectives />
      <CaseStudies />
      <Whitepapers />
      <NewsUpdates />
      <ResourceLibrary />
      <ClosingCta />
    </div>
  );
}

