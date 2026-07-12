import { 
  Cog, GitMerge, Network, Brain, Layers, 
  Building2, Cloud, ShieldCheck 
} from 'lucide-react';

export type Category = {
  slug: string;
  title: string;
  body: string;
  Icon: React.ComponentType<{ className?: string }>;
};

export const categories: Category[] = [
  { slug: 'industrial-automation', title: 'Industrial Automation', body: 'Discover how modern automation technologies improve operational efficiency, production quality, and manufacturing performance.', Icon: Cog },
  { slug: 'ot-it-integration', title: 'OT / IT Integration', body: 'Learn how organizations connect operational technology with enterprise systems to achieve seamless data flow, visibility, and decision-making.', Icon: GitMerge },
  { slug: 'iiot', title: 'Industrial Internet of Things (IIoT)', body: 'Explore connected devices, edge computing, real-time monitoring, and intelligent industrial ecosystems.', Icon: Network },
  { slug: 'ai-analytics', title: 'Artificial Intelligence & Analytics', body: 'Understand how AI, machine learning, and predictive analytics transform industrial data into actionable business intelligence.', Icon: Brain },
  { slug: 'digital-engineering', title: 'Digital Engineering', body: 'Discover engineering methodologies that accelerate product development, process optimization, and digital innovation.', Icon: Layers },
  { slug: 'enterprise-applications', title: 'Enterprise Applications', body: 'Explore ERP, MES, CMMS, LIMS, and enterprise software strategies that support connected operations.', Icon: Building2 },
  { slug: 'cloud-infrastructure', title: 'Cloud Infrastructure', body: 'Learn how cloud technologies enable scalability, collaboration, operational flexibility, and industrial data accessibility.', Icon: Cloud },
  { slug: 'cybersecurity', title: 'Cybersecurity', body: 'Stay informed about industrial cybersecurity strategies, OT security, zero-trust architecture, compliance, and risk management.', Icon: ShieldCheck },
];

export const industries = [
  { name: 'Manufacturing',              slug: 'industrial-manufacturing' },
  { name: 'Automotive',                 slug: 'automotive' },
  { name: 'Life Sciences',              slug: 'life-sciences' },
  { name: 'Semiconductor',              slug: 'semiconductor' },
  { name: 'Food & Beverage',            slug: 'food-beverages' }, // Matches food-beverages directory
  { name: 'Chemical Processing',        slug: 'chemical-manufacturing' },
  { name: 'Utilities',                  slug: 'power-utilities' }, // Matches power-utilities directory
  { name: 'Oil & Gas',                  slug: 'oil-gas' }, // Matches oil-gas directory
  { name: 'Mining',                     slug: 'mining-metals' }, // Matches mining-metals directory
  { name: 'Water Management',           slug: 'water-wastewater' }, // Matches water-wastewater directory
  { name: 'Infrastructure',             slug: 'data-centres' }, // closest match to data-centres
];
