import React from "react";
import { notFound } from "next/navigation";
import IndustryTemplate from "@/components/industries/IndustryTemplate";
import { INDUSTRIES_MAP } from "@/lib/industries";

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(INDUSTRIES_MAP).map((slug) => ({
    slug
  }));
}

export async function generateMetadata({ params }: IndustryPageProps) {
  const { slug } = await params;
  const data = INDUSTRIES_MAP[slug];
  
  if (!data) {
    return {
      title: "Industry Not Found | DHG Soft",
      description: "The requested industry page could not be found."
    };
  }

  return {
    title: `${data.title} | DHG Soft`,
    description: data.sub || `Learn how DHG Soft supports the ${data.title} sector with connected software systems and operations platforms.`
  };
}

export default async function DynamicIndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const data = INDUSTRIES_MAP[slug];

  if (!data) {
    notFound();
  }

  return <IndustryTemplate data={data} />;
}
