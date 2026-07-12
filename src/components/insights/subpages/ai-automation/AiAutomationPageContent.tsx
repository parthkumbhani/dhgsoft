"use client";

import React from "react";
import { SubPageHero } from "../shared/SubPageHero";
import { SubPageOverview } from "../shared/SubPageOverview";
import { FocusAreas } from "./FocusAreas";
import { Outcomes } from "./Outcomes";
import { RelatedInsights } from "../shared/RelatedInsights";
import { SubPageCta } from "../shared/SubPageCta";

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
      <SubPageHero
        breadcrumb="Insights → AI & Automation"
        eyebrow="AI & Automation"
        h1={
          <span>
            Accelerating Industry Through <span className="text-gradient-brand">Intelligent Automation</span>
          </span>
        }
        subLine="Discover how Artificial Intelligence, Machine Learning, Industrial Automation, and advanced analytics are transforming industrial operations into intelligent, autonomous, and data-driven ecosystems."
        primaryCta={{ text: "Explore Focus Areas", href: "#focus-areas" }}
        secondaryCta={{ text: "Talk to an Expert", href: "#contact-expert" }}
        bgImage="/images/insights/ai-automation-overview.jpg"
      />

      <SubPageOverview
        eyebrow="OVERVIEW"
        h2="Where Intelligence Meets Industry"
        bodyParagraphs={[
          "Artificial Intelligence is reshaping the future of industrial operations. From predictive maintenance and intelligent quality inspection to autonomous decision-making and operational optimization, AI enables organizations to improve efficiency, reduce downtime, and unlock new levels of productivity.",
          "At DHGsoft, we combine industrial expertise with modern AI technologies to help organizations transform raw operational data into actionable intelligence.",
        ]}
        image={{
          src: "/images/insights/ai-automation-overview.jpg",
          alt: "industrial AI control room analytics screens engineer",
        }}
        pattern="v1"
      />

      <FocusAreas />

      <Outcomes />

      <RelatedInsights cards={relatedCards} pattern="v8" />

      <div id="contact-expert" className="scroll-mt-20">
        <SubPageCta
          heading="Ready to Bring Intelligence to Your Operations?"
          subLine="Let's discuss how AI and intelligent automation can accelerate your industrial transformation with practical, measurable outcomes."
          primaryCta={{ 
            text: "Talk to an AI Expert", 
            href: "#",
            onClick: handleOpenContact,
          }}
          secondaryCta={{ text: "Explore All Insights", href: "/insights" }}
        />
      </div>
    </div>
  );
}
