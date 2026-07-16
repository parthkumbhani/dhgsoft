import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why DHGsoft | DHGsoft',
  description: 'Discover why global industrial enterprises partner with DHGsoft for digitalization.',
};

export default function WhydhgsoftLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
