import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vision, Mission & Values | DHGsoft',
  description: 'Our vision, mission, and values define how we innovate, collaborate, and deliver engineering excellence.',
};

export default function VisionmissionvaluesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
