"use client";

import React from "react";
import { InsightsHero } from "../../shared/InsightsHero";
import { InsightsOverview } from "../../shared/InsightsOverview";
import { InsightsImageBand } from "../../shared/InsightsImageBand";
import { SolutionAreas } from "./SolutionAreas";
import { Outcomes } from "./Outcomes";
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
    eyebrow: "Technology Ecosystem",
    title: "Technology Ecosystem",
    body: "Connected industrial ecosystems that unify OT, IT, cloud, and data.",
    link: "/insights/technology-ecosystem",
  },
  {
    eyebrow: "Insights Hub",
    title: "Insights Hub",
    body: "Browse all engineering perspectives, industry trends, and technical resources.",
    link: "/insights",
  },
];

export function CaseStudiesPageContent() {
  const handleOpenContact = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-contact-modal"));
  };

  return (
    <div className="w-full">
      {/* 1. Hero (Cinematic + Stats) */}
      <InsightsHero
        breadcrumb="Insights → Case Studies"
        eyebrow="Case Studies"
        h1="Real Challenges. Proven Solutions. Measurable Outcomes."
        emphasisWord="Measurable Outcomes"
        subLine="Discover how DHGsoft partners with industrial organizations to solve complex operational challenges through intelligent engineering, industrial automation, connected technologies, and digital transformation."
        heroImage="/about_collaboration.png" // Mapping to existing premium photo
        primaryCta={{ label: "Explore Solution Areas", href: "#solution-areas" }}
        secondaryCta={{ label: "Start Your Story", href: "#", onClick: handleOpenContact }}
        stats={[
          { value: "8", label: "Solution Areas" },
          { value: "14", label: "Industries Served" },
          { value: "Measurable", label: "Outcomes" },
        ]}
      />

      {/* 2. Overview (2-col with photo) */}
      <InsightsOverview
        eyebrow="Overview"
        h2="Every transformation begins with a challenge."
        bodyParagraphs={[
          "Every successful transformation begins with a unique operational challenge.",
          "At DHGsoft, we work closely with customers to design practical, scalable, and future-ready solutions that deliver measurable business value. Our case studies showcase real-world engineering expertise, demonstrating how connected technologies improve productivity, operational visibility, asset reliability, and business performance.",
          "Each engagement reflects our commitment to engineering excellence, customer success, and continuous innovation.",
        ]}
        image="/about_engineering.png" // Mapping to existing premium photo
        imageAlt="industrial engineering team collaboration project modern"
      />

      {/* 3. Image Band */}
      <InsightsImageBand
        image="/smart_factory_visual.png" // Mapping to existing premium photo
        imageAlt="industrial project delivery engineers site modern"
        caption="Turning complex operational challenges into measurable business outcomes."
        captionEyebrow="Delivered With Engineering Excellence"
      />

      {/* 4. Solution Areas Grid */}
      <SolutionAreas />

      {/* 5. Business Outcomes */}
      <Outcomes />

      {/* 6. Journey / Approach Timeline */}
      <InsightsJourney
        eyebrow="Delivery Approach"
        h2="Every engagement follows a structured engineering methodology."
        subLine="We align from initial operational assessment to long-term digital deployment and analytics support."
        steps={["Discover", "Design", "Implement", "Optimize"]}
      />

      {/* 7. Related Insights */}
      <RelatedInsights cards={relatedCards} pattern="v3" />

      {/* 8. Final CTA (crimson gradient) */}
      <div id="contact-transformation" className="w-full">
        <InsightsCta title="Let's Build Your Success Story" />
      </div>
    </div>
  );
}
export default CaseStudiesPageContent;
