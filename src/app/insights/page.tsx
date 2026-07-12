// src/app/insights/page.tsx
import React from "react";
import InsightsPageContent from "@/components/insights/InsightsPageContent";

export const metadata = {
  title: 'Insights | DHGsoft',
  description: "Engineering insights, technical knowledge, industry perspectives, and digital transformation expertise from DHGsoft's engineering leaders.",
};

export default function InsightsPage() {
  return <InsightsPageContent />;
}
