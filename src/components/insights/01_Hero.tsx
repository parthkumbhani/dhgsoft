"use client";

import React from "react";
import { InsightsHero } from "@/components/insights/shared/InsightsHero";

export function Hero() {
  return (
    <InsightsHero
      breadcrumb={null}
      eyebrow="Insights Hub"
      h1="Engineering Insights That Drive Industrial Transformation"
      emphasisWord="Industrial Transformation"
      subLine="Explore expert perspectives, technical knowledge, industry trends, customer success stories, and digital engineering insights that help organizations accelerate industrial transformation and build connected, intelligent enterprises."
      heroImage="/about_hero_cinematic.png" // Mapping to existing premium photo
      primaryCta={{ label: "Browse Insights →", href: "#categories" }}
      secondaryCta={{ label: "Subscribe to Newsletter", href: "#newsletter" }}
      stats={[
        { value: "8", label: "Insight Categories" },
        { value: "14", label: "Industries Covered" },
        { value: "Weekly", label: "New Perspectives" },
      ]}
    />
  );
}
export default Hero;
