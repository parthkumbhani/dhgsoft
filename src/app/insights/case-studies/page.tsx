// src/app/insights/case-studies/page.tsx
import React from "react";
import { CaseStudiesPageContent } from "@/components/insights/subpages/case-studies/CaseStudiesPageContent";

export const metadata = {
  title: "Case Studies | Insights | DHGsoft",
  description: "Discover how DHGsoft partners with industrial organizations to solve complex operational challenges and deliver measurable business outcomes.",
};

export default function CaseStudiesPage() {
  return <CaseStudiesPageContent />;
}
