// src/app/capabilities/iiot/page.tsx
import React from "react";
import CapabilityPage from "@/components/capabilities/CapabilityPage";
import { CAPABILITIES_DATA } from "@/lib/capabilities";

export default function IiotPage() {
  const data = CAPABILITIES_DATA["iiot"];
  return <CapabilityPage data={data} />;
}
