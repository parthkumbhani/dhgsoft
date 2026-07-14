"use client";

import React from "react";
import { InsightsImageBand } from "@/components/insights/shared/InsightsImageBand";

export function ClosingBand() {
  return (
    <InsightsImageBand
      image="/about_hero_cinematic.png"
      imageAlt="DHGsoft engineering the future"
      caption="Technology evolves rapidly, but lasting transformation comes from informed decisions and practical engineering expertise."
      captionEyebrow="Knowledge That Powers Industrial Innovation"
    />
  );
}
export default ClosingBand;
