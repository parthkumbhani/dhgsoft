"use client";

import React from "react";
import { BenefitsGrid } from "../shared/BenefitsGrid";

const caseOutcomes = [
  "Reduced Downtime",
  "Increased Production Efficiency",
  "Improved Asset Reliability",
  "Faster Decision-Making",
  "Enhanced Operational Visibility",
  "Lower Maintenance Costs",
  "Secure Industrial Infrastructure",
  "Sustainable Operational Growth",
];

export function Outcomes() {
  return (
    <BenefitsGrid
      eyebrow="BUSINESS OUTCOMES"
      h2="Results We Deliver"
      items={caseOutcomes}
      pattern="v4"
    />
  );
}
