"use client";

import React from "react";
import { SubPageHero } from "../shared/SubPageHero";
import { SubPageOverview } from "../shared/SubPageOverview";
import { Section } from "@/components/ui/Section";
import { CoreTechnologies } from "./CoreTechnologies";
import { ArchitectureFlow } from "./ArchitectureFlow";
import { Benefits } from "./Benefits";
import { Industries } from "./Industries";
import { WhyDHGsoft } from "./WhyDHGsoft";
import { RelatedInsights } from "../shared/RelatedInsights";
import { SubPageCta } from "../shared/SubPageCta";

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
      <SubPageHero
        breadcrumb="Insights → Technology Ecosystem"
        eyebrow="Technology Ecosystem"
        h1={
          <span>
            Building Connected <span className="text-gradient-brand">Industrial Ecosystems</span>
          </span>
        }
        subLine="Explore how DHGsoft integrates industrial technologies, enterprise platforms, cloud infrastructure, and intelligent applications into one connected digital ecosystem."
        primaryCta={{ text: "Explore Core Domains", href: "#core-domains" }}
        secondaryCta={{ text: "Talk to an Expert", href: "#contact-architect" }}
        bgImage="/images/insights/tech-ecosystem-overview.jpg"
      />

      <SubPageOverview
        eyebrow="OVERVIEW"
        h2="Ecosystems, Not Silos"
        bodyParagraphs={[
          "Modern industrial enterprises rely on connected technologies rather than isolated systems.",
          "DHGsoft designs and integrates complete industrial ecosystems where Operational Technology (OT), Information Technology (IT), cloud platforms, enterprise applications, Industrial IoT, cybersecurity, and advanced analytics work together seamlessly.",
          "Our ecosystem approach creates greater visibility, interoperability, scalability, and operational resilience.",
        ]}
        image={{
          src: "/images/insights/tech-ecosystem-overview.jpg",
          alt: "industrial control room networked systems modern facility",
        }}
        pattern="v1"
      />

      {/* Section 3: The Connected Ecosystem */}
      <Section variant="mist" size="compact" pattern="v3" className="relative overflow-hidden border-b border-line/10">
        <div className="max-w-[800px] mx-auto text-center space-y-6 flex flex-col items-center">
          <span className="text-brand text-label-bold uppercase tracking-[0.2em] font-sans block">
            THE CONNECTED ECOSYSTEM
          </span>
          <h2 className="text-txt-strong tracking-tight font-black leading-tight font-sans">
            Every successful digital transformation begins with connectivity.
          </h2>
          <p className="text-body-md text-txt-muted max-w-[720px] mx-auto leading-relaxed font-sans font-medium">
            Our ecosystem approach integrates people, machines, applications, and operational intelligence into one seamless platform that enables real-time collaboration and informed decision-making.
          </p>
        </div>
      </Section>

      <CoreTechnologies />

      <ArchitectureFlow />

      <Benefits />

      <Industries />

      <WhyDHGsoft />

      <RelatedInsights cards={relatedCards} pattern="v8" />

      <div id="contact-architect" className="scroll-mt-20">
        <SubPageCta
          heading="Connect Every Layer of Your Industrial Intelligence"
          subLine="Explore how DHGsoft designs and integrates connected industrial ecosystems that scale with your operations and adapt with your future."
          primaryCta={{ 
            text: "Talk to an Architect", 
            href: "#",
            onClick: handleOpenContact,
          }}
          secondaryCta={{ text: "Explore All Insights", href: "/insights" }}
        />
      </div>
    </div>
  );
}
