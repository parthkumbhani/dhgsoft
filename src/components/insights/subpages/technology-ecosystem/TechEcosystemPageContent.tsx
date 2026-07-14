"use client";

import React from "react";
import { InsightsHero } from "../../shared/InsightsHero";
import { InsightsOverview } from "../../shared/InsightsOverview";
import { InsightsImageBand } from "../../shared/InsightsImageBand";
import { CoreTechnologies } from "./CoreTechnologies";
import { Benefits } from "./Benefits";
import { InsightsJourney } from "../../shared/InsightsJourney";
import { RelatedInsights } from "../shared/RelatedInsights";
import { InsightsCta } from "../../shared/InsightsCta";

const relatedCards = [
  {
    eyebrow: "AI & Automation",
    title: "AI & Automation",
    body: "Discover how Artificial Intelligence, Machine Learning, and predictive analytics are transforming industrial operations.",
    link: "/insights/ai-and-automation",
  },
  {
    eyebrow: "Enterprise Case Studies",
    title: "Enterprise Case Studies",
    body: "Real transformation stories with measurable business outcomes.",
    link: "/insights/case-studies",
  },
  {
    eyebrow: "Insights Hub",
    title: "Insights Hub",
    body: "Browse all engineering perspectives, industry trends, and technical resources.",
    link: "/insights",
  },
];

export function TechEcosystemPageContent() {
  const handleOpenContact = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-contact-modal"));
  };

  return (
    <div className="w-full">
      {/* 1. Hero (Cinematic + Stats) */}
      <InsightsHero
        breadcrumb="Insights → Technology Ecosystem"
        eyebrow="Technology Ecosystem"
        h1="Building Connected Industrial Ecosystems"
        emphasisWord="Connected Industrial Ecosystems"
        subLine="Connecting industrial operations, enterprise applications, cloud platforms, and intelligent data to create scalable, secure, and future-ready digital enterprises."
        heroImage="/about_values.png" // Mapping to existing premium photo
        primaryCta={{ label: "Explore Core Domains", href: "#core-domains" }}
        secondaryCta={{ label: "Talk to an Expert", href: "#", onClick: handleOpenContact }}
        stats={[
          { value: "8", label: "Core Domains" },
          { value: "6", label: "Architecture Layers" },
          { value: "14", label: "Industries Served" },
        ]}
      />

      {/* 2. Overview (2-col with photo) */}
      <InsightsOverview
        eyebrow="Overview"
        h2="Ecosystems, Not Silos."
        bodyParagraphs={[
          "Modern industrial enterprises are no longer built on isolated technologies. They thrive through connected ecosystems where operational technology, enterprise systems, industrial data, and intelligent applications work together as one unified environment.",
          "DHGsoft designs and integrates complete industrial technology ecosystems that enable organizations to improve operational visibility, streamline processes, strengthen cybersecurity, and accelerate digital transformation.",
          "By connecting every layer of industrial operations, we help businesses create intelligent environments that are scalable, resilient, and prepared for future innovation.",
        ]}
        image="/about_global.png" // Mapping to existing premium photo
        imageAlt="industrial network integration servers data flow modern"
      />

      {/* 3. Image Band */}
      <InsightsImageBand
        image="/smart_factory_visual.png" // Mapping to existing premium photo
        imageAlt="connected factory ecosystem workers digital modern"
        caption="Every successful digital transformation begins with connectivity."
        captionEyebrow="Connected Ecosystem"
      />

      {/* 4. Core Domains Grid */}
      <CoreTechnologies />

      {/* 5. Business Benefits */}
      <Benefits />

      {/* 6. Journey / Architecture Timeline */}
      <InsightsJourney
        eyebrow="Ecosystem Architecture"
        h2="DHGsoft connects every layer of industrial operations"
        subLine="From field instruments on the shop floor to enterprise applications in the cloud, we design and integrate unified operational stacks."
        steps={["Operational Layer", "Connectivity Layer", "Data Layer", "Intelligence Layer", "Enterprise Layer", "Cloud & Security"]}
      />

      {/* 7. Related Insights */}
      <RelatedInsights cards={relatedCards} pattern="v8" />

      {/* 8. Final CTA (crimson gradient) */}
      <div id="contact-architect" className="w-full">
        <InsightsCta title="Connect Every Layer of Your Industrial Intelligence" />
      </div>
    </div>
  );
}
export default TechEcosystemPageContent;
