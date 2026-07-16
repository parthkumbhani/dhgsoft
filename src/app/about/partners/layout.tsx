import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partner Ecosystem | DHGsoft',
  description: 'Collaborating with customers, technology leaders, and academic partners.',
};

export default function PartnersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
