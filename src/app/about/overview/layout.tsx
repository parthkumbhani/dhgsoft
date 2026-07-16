import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Overview | DHGsoft',
  description: 'Engineering Excellence for a Connected Industrial Future — the DHGsoft story, capabilities, engineering approach, and the industries we serve.',
};

export default function OverviewLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
