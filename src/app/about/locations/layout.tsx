import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Global Presence | DHGsoft',
  description: 'Our flexible global delivery model and office locations.',
};

export default function LocationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
