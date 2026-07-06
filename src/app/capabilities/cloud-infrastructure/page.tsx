// src/app/capabilities/cloud-infrastructure/page.tsx
import React from "react";
import CapabilityPage from "@/components/capabilities/CapabilityPage";
import { CAPABILITIES_DATA } from "@/lib/capabilities";

export default function CloudInfrastructurePage() {
  const data = CAPABILITIES_DATA["cloud-infrastructure"];
  return <CapabilityPage data={data} />;
}
