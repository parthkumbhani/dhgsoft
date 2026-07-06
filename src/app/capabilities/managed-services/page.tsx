// src/app/capabilities/managed-services/page.tsx
import React from "react";
import CapabilityPage from "@/components/capabilities/CapabilityPage";
import { CAPABILITIES_DATA } from "@/lib/capabilities";

export default function ManagedServicesPage() {
  const data = CAPABILITIES_DATA["managed-services"];
  return <CapabilityPage data={data} />;
}
