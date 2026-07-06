// src/app/insights/ai-automation/page.tsx
import React from "react";
import HubPage from "@/components/insights/HubPage";
import { ARTICLES_DATA } from "@/lib/insights";

export default function AiAutomationHubPage() {
  const articles = ARTICLES_DATA.filter((art) => art.hub === "ai-automation");
  
  // Featured article is the first one
  const featured = articles[0] || {
    title: "From Reactive to Autonomous: The Future of Industrial Maintenance",
    excerpt: "How AI is moving maintenance from scheduled and reactive to predictive and self-optimizing — and what it takes to get there.",
    image: { src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80", alt: "Featured AI article" },
    slug: "reactive-to-autonomous-maintenance",
    readTime: "[X] min read",
    date: "[Month YYYY]"
  };

  // Other items exclude the featured article
  const feedItems = articles.slice(1);

  const filters = ["All", "Predictive Maintenance", "Analytics", "Machine Learning", "Automation"];

  return (
    <HubPage
      title="AI & Automation"
      sub="Insights on how artificial intelligence and automation are reshaping industrial operations — from predictive maintenance to the autonomous factory."
      eyebrow="AI & Automation"
      featured={featured}
      items={feedItems}
      filters={filters}
      type="insights"
    />
  );
}
