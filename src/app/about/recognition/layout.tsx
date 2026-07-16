import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recognition | DHGsoft',
  description: 'Our milestones and customer success awards.',
};

export default function RecognitionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
