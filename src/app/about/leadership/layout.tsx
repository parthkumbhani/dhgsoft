import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leadership Team | DHGsoft',
  description: 'Meet the DHGsoft executives and systems architects driving digital transformation.',
};

export default function LeadershipLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
