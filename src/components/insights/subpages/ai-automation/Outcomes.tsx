"use client";

import React from "react";
import { BenefitsGrid } from "../shared/BenefitsGrid";

const outcomesData = [
  "Increased Productivity",
  "Reduced Downtime",
  "Improved Quality",
  "Faster Decision-Making",
  "Lower Operational Costs",
  "Higher Equipment Reliability",
];

export function Outcomes() {
  return (
    <BenefitsGrid
      eyebrow="BUSINESS OUTCOMES"
      h2="Measurable Impact Across Operations"
      items={outcomesData}
      pattern="v4"
    />
  );
}
