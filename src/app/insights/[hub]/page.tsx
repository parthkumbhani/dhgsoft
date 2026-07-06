// src/app/insights/[hub]/page.tsx
import React from "react";
import { notFound } from "next/navigation";
import HubTemplate from "@/components/insights/HubTemplate";
import { ARTICLES_DATA, CASE_STUDIES_DATA } from "@/lib/insights";

export const unstable_instant = {
  prefetch: "runtime",
  samples: [
    { params: { hub: "ai-automation" } },
    { params: { hub: "technology-ecosystem" } },
    { params: { hub: "case-studies" } }
  ]
};

interface PageProps {
  params: Promise<{
    hub: string;
  }>;
}

export async function generateStaticParams() {
  return [
    { hub: "ai-automation" },
    { hub: "technology-ecosystem" },
    { hub: "case-studies" }
  ];
}

export default async function HubRoutePage({ params }: PageProps) {
  const { hub } = await params;

  if (hub === "ai-automation" || hub === "technology-ecosystem") {
    const articles = ARTICLES_DATA.filter((art) => art.hub === hub);
    if (articles.length === 0) {
      notFound();
    }

    const featured = articles[0];
    const feedItems = articles.slice(1);
    const filters = hub === "ai-automation"
      ? ["All", "Predictive Maintenance", "Analytics", "Machine Learning", "Automation"]
      : ["All", "OT/IT", "Data Platforms", "Cloud & Edge", "Security", "Standards"];

    return (
      <HubTemplate
        hub={hub}
        title={hub === "ai-automation" ? "AI & Automation" : "Technology Ecosystem"}
        sub={hub === "ai-automation" 
          ? "Insights on how artificial intelligence and automation are reshaping industrial operations — from predictive maintenance to the autonomous factory."
          : "Perspectives on the platforms, architectures, and standards behind connected industry — OT/IT convergence, data platforms, cloud, edge, and security."}
        featured={featured}
        items={feedItems}
        filters={filters}
        type="insights"
      />
    );
  } else if (hub === "case-studies") {
    const featured = CASE_STUDIES_DATA[0];
    const feedItems = CASE_STUDIES_DATA.slice(1);
    const filters = ["All Industries", "Manufacturing", "Automotive", "Energy", "Semiconductor", "Oil & Gas"];

    return (
      <HubTemplate
        hub={hub}
        title="Enterprise Case Studies"
        sub="Real results from digital transformation across manufacturing, energy, automotive, and more."
        featured={featured}
        items={feedItems}
        filters={filters}
        type="case-studies"
      />
    );
  } else {
    notFound();
  }
}
