"use client";

import React from "react";
import { InsightsOverview } from "@/components/insights/shared/InsightsOverview";

export function Introduction() {
  return (
    <InsightsOverview
      eyebrow="Introduction"
      h2="Innovation begins with knowledge."
      bodyParagraphs={[
        "At DHGsoft, we believe that meaningful industrial transformation is driven by continuous learning, engineering excellence, and practical experience. Our Insights Hub brings together the latest thinking, technical expertise, and real-world implementation knowledge from across the industrial technology landscape.",
        "Whether you're exploring Industry 4.0, Industrial AI, IIoT, cloud platforms, cybersecurity, or operational excellence, our insights are designed to help leaders, engineers, and decision-makers navigate an increasingly connected industrial world.",
      ]}
      image="/about_engineering.png" // Mapping to existing premium photo
      imageAlt="DHGsoft engineers reviewing industrial dashboards"
    />
  );
}
export default Introduction;
