import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technology Partners | DHGsoft',
  description: 'Our technology-neutral approach leveraging global hardware and software platforms.',
};

export default function TechnologypartnersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
