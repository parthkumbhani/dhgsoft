// src/app/capabilities/ai-analytics/page.tsx
import React from "react";
import CapabilityPage from "@/components/capabilities/CapabilityPage";
import { CAPABILITIES_DATA } from "@/lib/capabilities";

export default function AiAnalyticsPage() {
  const data = CAPABILITIES_DATA["ai-analytics"];
  return <CapabilityPage data={data} />;
}
