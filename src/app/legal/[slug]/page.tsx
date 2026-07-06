import React from 'react';
import { notFound } from 'next/navigation';
import { LEGAL_PAGES } from '@/lib/legal';
import LegalTemplate from '@/components/legal/LegalTemplate';

// Enforce instant static shell validation at build/dev time
export const unstable_instant = {
  prefetch: 'runtime',
  samples: [
    { params: { slug: 'legal-disclaimer' } }
  ]
};

export function generateStaticParams() {
  return LEGAL_PAGES.map((page) => ({
    slug: page.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function LegalPage({ params }: PageProps) {
  const { slug } = await params;
  const page = LEGAL_PAGES.find((p) => p.slug === slug);

  if (!page) {
    notFound();
  }

  return <LegalTemplate page={page} />;
}
