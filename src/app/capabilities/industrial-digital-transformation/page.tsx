// src/app/capabilities/industrial-digital-transformation/page.tsx
import React from "react";
import CapabilityPage from "@/components/capabilities/CapabilityPage";
import { CAPABILITIES_DATA } from "@/lib/capabilities";

export default function IndustrialDigitalTransformationPage() {
  const data = CAPABILITIES_DATA["industrial-digital-transformation"];
  return <CapabilityPage data={data} />;
}
