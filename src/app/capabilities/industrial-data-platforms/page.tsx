// src/app/capabilities/industrial-data-platforms/page.tsx
import React from "react";
import CapabilityPage from "@/components/capabilities/CapabilityPage";
import { CAPABILITIES_DATA } from "@/lib/capabilities";

export default function IndustrialDataPlatformsPage() {
  const data = CAPABILITIES_DATA["industrial-data-platforms"];
  return <CapabilityPage data={data} />;
}
