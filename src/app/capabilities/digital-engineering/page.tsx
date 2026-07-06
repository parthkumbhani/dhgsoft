// src/app/capabilities/digital-engineering/page.tsx
import React from "react";
import CapabilityPage from "@/components/capabilities/CapabilityPage";
import { CAPABILITIES_DATA } from "@/lib/capabilities";

export default function DigitalEngineeringPage() {
  const data = CAPABILITIES_DATA["digital-engineering"];
  return <CapabilityPage data={data} />;
}
