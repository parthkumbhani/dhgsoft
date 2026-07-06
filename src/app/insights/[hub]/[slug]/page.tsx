// src/app/insights/[hub]/[slug]/page.tsx
import React from "react";
import { notFound } from "next/navigation";
import ArticleDetail from "@/components/insights/ArticleDetail";
import CaseStudyDetail from "@/components/insights/CaseStudyDetail";
import { ARTICLES_DATA, CASE_STUDIES_DATA } from "@/lib/insights";

export const unstable_instant = {
  prefetch: "runtime",
  samples: [
    { params: { hub: "ai-automation", slug: "reactive-to-autonomous-maintenance" } },
    { params: { hub: "technology-ecosystem", slug: "modern-industrial-tech-stack" } },
    { params: { hub: "case-studies", slug: "automotive-oem-downtime" } }
  ]
};

interface PageProps {
  params: Promise<{
    hub: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const articleParams = ARTICLES_DATA.map((art) => ({
    hub: art.hub,
    slug: art.slug
  }));

  const caseStudyParams = CASE_STUDIES_DATA.map((study) => ({
    hub: "case-studies",
    slug: study.slug
  }));

  return [...articleParams, ...caseStudyParams];
}

export default async function DetailRoutePage({ params }: PageProps) {
  const { hub, slug } = await params;

  if (hub === "case-studies") {
    const currentCase = CASE_STUDIES_DATA.find((cs) => cs.slug === slug);
    if (!currentCase) {
      notFound();
    }

    const relatedStudies = CASE_STUDIES_DATA.filter((cs) => cs.slug !== slug);
    return <CaseStudyDetail caseStudy={currentCase} relatedStudies={relatedStudies} />;
  } else if (hub === "ai-automation" || hub === "technology-ecosystem") {
    const currentArticle = ARTICLES_DATA.find((art) => art.slug === slug);
    if (!currentArticle || currentArticle.hub !== hub) {
      notFound();
    }

    const relatedArticles = ARTICLES_DATA.filter(
      (art) => art.hub === hub && art.slug !== slug
    );
    return <ArticleDetail article={currentArticle} relatedArticles={relatedArticles} />;
  } else {
    notFound();
  }
}
