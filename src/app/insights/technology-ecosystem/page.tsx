// src/app/insights/technology-ecosystem/page.tsx
import React from "react";
import HubPage from "@/components/insights/HubPage";
import { ARTICLES_DATA } from "@/lib/insights";

export default function TechnologyEcosystemHubPage() {
  const articles = ARTICLES_DATA.filter((art) => art.hub === "technology-ecosystem");
  
  // Featured article is the first one
  const featured = articles[0] || {
    title: "The Modern Industrial Technology Stack, Explained",
    excerpt: "From sensors to cloud — how the layers of a connected industrial architecture fit together.",
    image: { src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80", alt: "Featured Eco article" },
    slug: "modern-industrial-tech-stack",
    readTime: "[X] min read",
    date: "[Month YYYY]"
  };

  // Other items exclude the featured article
  const feedItems = articles.slice(1);

  const filters = ["All", "OT/IT", "Data Platforms", "Cloud & Edge", "Security", "Standards"];

  return (
    <HubPage
      title="Technology Ecosystem"
      sub="Perspectives on the platforms, architectures, and standards behind connected industry — OT/IT convergence, data platforms, cloud, edge, and security."
      eyebrow="Technology Ecosystem"
      featured={featured}
      items={feedItems}
      filters={filters}
      type="insights"
    />
  );
}
