// src/app/capabilities/cybersecurity/page.tsx
import React from "react";
import CapabilityPage from "@/components/capabilities/CapabilityPage";
import { CAPABILITIES_DATA } from "@/lib/capabilities";

export default function CybersecurityPage() {
  const data = CAPABILITIES_DATA["cybersecurity"];
  return <CapabilityPage data={data} />;
}
