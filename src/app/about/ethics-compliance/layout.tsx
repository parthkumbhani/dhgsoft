import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ethics & Compliance | DHGsoft',
  description: 'Zero-trust compliance, transparent operations, and responsible engineering.',
};

export default function EthicscomplianceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
