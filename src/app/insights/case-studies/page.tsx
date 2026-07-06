// src/app/insights/case-studies/page.tsx
import React from "react";
import HubPage from "@/components/insights/HubPage";
import { CASE_STUDIES_DATA } from "@/lib/insights";

export default function CaseStudiesHubPage() {
  // Featured case study is the first one (Automotive OEM)
  const featured = CASE_STUDIES_DATA[0] || {
    title: "Global Automotive OEM Cuts Unplanned Downtime",
    excerpt: "Predictive maintenance and OT/IT integration across multiple plants delivered measurable uptime gains.",
    image: { src: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?auto=format&fit=crop&w=1200&q=80", alt: "Featured Case Study" },
    slug: "automotive-oem-downtime",
    resultsPreview: "[XX]% less downtime",
    industry: "Automotive"
  };

  // Other feed items exclude the featured case study
  const feedItems = CASE_STUDIES_DATA.slice(1);

  const filters = ["All Industries", "Manufacturing", "Automotive", "Energy", "Semiconductor", "Oil & Gas"];

  return (
    <HubPage
      title="Enterprise Case Studies"
      sub="Real results from digital transformation across manufacturing, energy, automotive, and more. See how connected, intelligent operations move the business."
      eyebrow="Case Studies"
      featured={featured}
      items={feedItems}
      filters={filters}
      type="case-studies"
    />
  );
}
