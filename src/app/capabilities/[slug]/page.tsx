// src/app/capabilities/[slug]/page.tsx
import React from "react";
import { notFound } from "next/navigation";
import CapabilityTemplate from "@/components/capabilities/CapabilityTemplate";
import { CAPABILITIES_DATA } from "@/lib/capabilities";

export const dynamicParams = false;

interface CapabilityPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(CAPABILITIES_DATA).map((slug) => ({
    slug
  }));
}

export default async function DynamicCapabilityPage({ params }: CapabilityPageProps) {
  const { slug } = await params;
  const data = CAPABILITIES_DATA[slug];

  if (!data) {
    notFound();
  }

  return <CapabilityTemplate data={data} />;
}
