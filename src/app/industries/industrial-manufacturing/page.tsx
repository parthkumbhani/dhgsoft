import React from "react";
import IndustryPage from "@/components/industries/IndustryPage";
import { INDUSTRIES_MAP } from "@/lib/industries";

export default function Page() {
  const data = INDUSTRIES_MAP["industrial-manufacturing"];
  return <IndustryPage data={data} />;
}
