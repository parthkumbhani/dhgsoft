// src/app/capabilities/ot-it-integration/page.tsx
import React from "react";
import CapabilityPage from "@/components/capabilities/CapabilityPage";
import { CAPABILITIES_DATA } from "@/lib/capabilities";

export default function OtItIntegrationPage() {
  const data = CAPABILITIES_DATA["ot-it-integration"];
  return <CapabilityPage data={data} />;
}
