"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, FileText } from "lucide-react";
import { Section } from "@/components/ui/Section";

import { SubPageHero } from "../shared/SubPageHero";
import { SubPageOverview } from "../shared/SubPageOverview";
import { SolutionAreas } from "./SolutionAreas";
import { Industries } from "../technology-ecosystem/Industries";
import { Outcomes } from "./Outcomes";
import { DeliveryApproach } from "./DeliveryApproach";
import { WhyDHGsoft } from "./WhyDHGsoft";
import { LookingAhead } from "./LookingAhead";
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
      <SubPageHero
        breadcrumb="Insights → Case Studies"
        eyebrow="Case Studies"
        h1={
          <span>
            Real Challenges. Proven Solutions. <span className="text-gradient-brand">Measurable Outcomes.</span>
          </span>
        }
        subLine="Discover how DHGsoft partners with industrial organizations to solve complex operational challenges through intelligent engineering, industrial automation, connected technologies, and digital transformation."
        primaryCta={{ text: "Explore Solution Areas", href: "#solution-areas" }}
        secondaryCta={{ text: "Start Your Story", href: "#contact-transformation" }}
        bgImage="/images/insights/case-studies-overview.jpg"
      />

      <SubPageOverview
        eyebrow="OVERVIEW"
        h2="Every transformation begins with a challenge."
        bodyParagraphs={[
          "Every successful transformation begins with a unique operational challenge.",
          "At DHGsoft, we work closely with customers to design practical, scalable, and future-ready solutions that deliver measurable business value. Our case studies showcase real-world engineering expertise, demonstrating how connected technologies improve productivity, operational visibility, asset reliability, and business performance.",
          "Each engagement reflects our commitment to engineering excellence, customer success, and continuous innovation.",
        ]}
        image={{
          src: "/images/insights/case-studies-overview.jpg",
          alt: "industrial engineering team collaboration project modern",
        }}
        pattern="v1"
      />

      {/* Featured Case Study Block */}
      <Section variant="mist" size="default" pattern="v3" className="relative overflow-hidden border-b border-line/10">
        <div className="text-left space-y-4">
          <span className="text-brand text-label-bold uppercase tracking-[0.2em] font-sans block">
            FEATURED CASE STUDY
          </span>
          <h2 className="text-txt-strong tracking-tight font-black leading-tight font-sans">
            Featured Case Study
          </h2>
        </div>

        {/* Featured Case Study card */}
        <div className="card mt-10 bg-white border border-line rounded-3xl p-8 md:p-12 relative overflow-hidden text-left shadow-sm">
          {/* Soft brand glow behind */}
          <div 
            className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(180,18,63,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="bg-[#B4123F]/10 text-[#B4123F] text-[10px] font-extrabold tracking-widest uppercase px-3 py-1.5 rounded-md font-mono">
                ✓ Reduced Downtime by 35%
              </span>
              <h3 className="heading-md text-txt-strong mt-4 font-sans font-bold">
                Global Automotive OEM Cuts Unplanned Downtime
              </h3>
              <p className="text-body-sm text-txt-muted leading-relaxed font-sans font-medium">
                Predictive maintenance and OT/IT integration across multiple assembly plants delivered measurable uptime gains, improving diagnostic response speed by 40%.
              </p>
              <a href="#" onClick={handleOpenContact} className="inline-flex items-center gap-2 mt-6 text-brand font-semibold hover:gap-3 transition-all cursor-pointer font-sans">
                Read Case Study
                <ArrowRight className="w-4 h-4 text-brand" />
              </a>
            </div>
            
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="w-24 h-24 rounded-full bg-[#B4123F]/10 flex items-center justify-center shrink-0">
                <FileText className="w-10 h-10 text-[#B4123F]" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <SolutionAreas />

      <Industries
        eyebrow="INDUSTRIES WE SERVE"
        h2="Our experience spans a wide range of industrial sectors:"
        subLine="From heavy industry to critical infrastructure, our ecosystem approach adapts to each sector's unique operational reality."
      />

      <Outcomes />

      <DeliveryApproach />

      {/* Customer Success Highlights (Why DHGsoft) */}
      <WhyDHGsoft />

      <LookingAhead />

      <RelatedInsights cards={relatedCards} pattern="v3" />

      <div id="contact-transformation" className="scroll-mt-20">
        <SubPageCta
          heading="Let's Build Your Success Story"
          subLine="Whether you're planning your first digital transformation initiative or expanding an existing industrial ecosystem, DHGsoft is ready to help turn complex challenges into measurable business outcomes."
          primaryCta={{ 
            text: "Start Your Transformation Journey", 
            href: "#",
            onClick: handleOpenContact,
          }}
          secondaryCta={{ text: "Explore All Insights", href: "/insights" }}
        />
      </div>
    </div>
  );
}
