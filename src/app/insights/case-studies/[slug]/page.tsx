// src/app/insights/case-studies/[slug]/page.tsx
import React from "react";
import { notFound } from "next/navigation";
import CaseStudyDetail from "@/components/insights/CaseStudyDetail";
import { CASE_STUDIES_DATA } from "@/lib/insights";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return CASE_STUDIES_DATA.map((cs) => ({
    slug: cs.slug
  }));
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const currentCase = CASE_STUDIES_DATA.find((cs) => cs.slug === slug);

  if (!currentCase) {
    notFound();
  }

  // Filter sibling case studies for recommendation cards (excluding the active one)
  const relatedStudies = CASE_STUDIES_DATA.filter((cs) => cs.slug !== slug);

  return <CaseStudyDetail caseStudy={currentCase} relatedStudies={relatedStudies} />;
}
