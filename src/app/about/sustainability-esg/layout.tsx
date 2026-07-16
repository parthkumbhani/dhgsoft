import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sustainability & ESG | DHGsoft',
  description: 'Responsible engineering and digital solutions for cleaner operations.',
};

export default function SustainabilityesgLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
