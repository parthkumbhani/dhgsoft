"use client";

import React from "react";
import { InsightsHero } from "../../shared/InsightsHero";
import { InsightsOverview } from "../../shared/InsightsOverview";
import { InsightsImageBand } from "../../shared/InsightsImageBand";
import { FocusAreas } from "./FocusAreas";
import { Outcomes } from "./Outcomes";
import { InsightsJourney } from "../../shared/InsightsJourney";
import { RelatedInsights } from "../shared/RelatedInsights";
import { InsightsCta } from "../../shared/InsightsCta";

const relatedCards = [
  {
    eyebrow: "Technology Ecosystem",
    title: "Technology Ecosystem",
    body: "Connected industrial ecosystems that unify OT, IT, cloud, and data.",
    link: "/insights/technology-ecosystem",
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

export function AiAutomationPageContent() {
  const handleOpenContact = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-contact-modal"));
  };

  return (
    <div className="w-full">
      {/* 1. Hero (Cinematic + Stats) */}
      <InsightsHero
        breadcrumb="Insights → AI & Automation"
        eyebrow="AI & Automation"
        h1="Accelerating Industry Through Intelligent Automation"
        emphasisWord="Intelligent Automation"
        subLine="Discover how Artificial Intelligence, Machine Learning, Industrial Automation, and advanced analytics are transforming industrial operations into intelligent, autonomous, and data-driven ecosystems."
        heroImage="/about_hero.png" // Mapping to existing premium photo
        primaryCta={{ label: "Explore Focus Areas", href: "#focus-areas" }}
        secondaryCta={{ label: "Talk to an Expert", href: "#", onClick: handleOpenContact }}
        stats={[
          { value: "6", label: "Focus Areas" },
          { value: "Real-Time", label: "Intelligence" },
          { value: "Predictive", label: "Insights" },
        ]}
      />

      {/* 2. Overview (2-col with photo) */}
      <InsightsOverview
        eyebrow="Overview"
        h2="Where Intelligence Meets Industry."
        bodyParagraphs={[
          "Artificial Intelligence is reshaping the future of industrial operations. From predictive maintenance and intelligent quality inspection to autonomous decision-making and operational optimization, AI enables organizations to improve efficiency, reduce downtime, and unlock new levels of productivity.",
          "At DHGsoft, we combine industrial expertise with modern AI technologies to help organizations transform raw operational data into actionable intelligence.",
        ]}
        image="/about_engineering.png" // Mapping to existing premium photo
        imageAlt="industrial AI control room analytics screens engineer"
      />

      {/* 3. Image Band */}
      <InsightsImageBand
        image="/smart_factory_visual.png" // Mapping to existing premium photo
        imageAlt="ai machine learning industrial predictive analytics"
        caption="Turning industrial data into intelligent decisions — at every layer of operations."
        captionEyebrow="AI In Industry"
      />

      {/* 4. Focus Areas Grid */}
      <FocusAreas />

      {/* 5. Business Outcomes */}
      <Outcomes />

      {/* 6. Journey / Approach Timeline */}
      <InsightsJourney
        eyebrow="AI Lifecycle"
        h2="Our Strategic Delivery Approach"
        subLine="From ingestion to continuous production feedback, we guide your team through each critical step of the AI lifecycle."
        steps={["Collect Data", "Prepare Data", "Train Models", "Deploy AI", "Monitor", "Optimize"]}
      />

      {/* 7. Related Insights */}
      <RelatedInsights cards={relatedCards} pattern="v8" />

      {/* 8. Final CTA (crimson gradient) */}
      <div id="contact-expert" className="w-full">
        <InsightsCta title="Ready to Bring Intelligence to Your Operations?" />
      </div>
    </div>
  );
}
export default AiAutomationPageContent;
