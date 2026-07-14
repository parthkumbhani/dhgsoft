"use client";

import React from "react";
import { InsightsImageBand } from "@/components/insights/shared/InsightsImageBand";

export function ImageBandOne() {
  return (
    <InsightsImageBand
      image="/smart_factory_visual.png"
      imageAlt="DHGsoft engineering knowledge in action"
      caption="Sharing engineering knowledge that turns industrial complexity into competitive advantage."
      captionEyebrow="Knowledge in Motion"
    />
  );
}
export default ImageBandOne;
