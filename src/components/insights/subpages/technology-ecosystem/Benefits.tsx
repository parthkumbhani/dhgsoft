"use client";

import React from "react";
import { BenefitsGrid } from "../shared/BenefitsGrid";

const benefitsData = [
  "Unified Industrial Visibility",
  "Real-Time Operational Intelligence",
  "Faster Decision-Making",
  "Improved Productivity",
  "Enhanced Asset Reliability",
  "Secure Digital Infrastructure",
  "Scalable Enterprise Architecture",
  "Lower Operational Costs",
  "Sustainable Growth",
  "Future-Ready Digital Operations",
];

export function Benefits() {
  return (
    <BenefitsGrid
      eyebrow="BUSINESS BENEFITS"
      h2="Organizations benefit from a connected ecosystem through:"
      items={benefitsData}
      pattern="v4"
    />
  );
}
