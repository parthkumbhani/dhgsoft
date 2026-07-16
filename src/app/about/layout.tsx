import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | DHGsoft',
  description: 'DHGsoft is a global Industrial Digital Transformation company helping organizations connect operations, data, applications, and people.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
