// src/app/capabilities/enterprise-applications/page.tsx
import React from "react";
import CapabilityPage from "@/components/capabilities/CapabilityPage";
import { CAPABILITIES_DATA } from "@/lib/capabilities";

export default function EnterpriseApplicationsPage() {
  const data = CAPABILITIES_DATA["enterprise-applications"];
  return <CapabilityPage data={data} />;
}
