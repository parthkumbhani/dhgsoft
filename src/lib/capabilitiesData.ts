import { Cog, GitMerge, Database, Brain, Network, Layers, Building2, Cloud, ShieldCheck, Headphones } from 'lucide-react';

export type Capability = {
  slug: string;
  number: string;
  title: string;
  body: string;
  focusAreas: string[];
  Icon: React.ComponentType<{ className?: string }>;
};

export const capabilities: Capability[] = [
  {
    slug: 'industrial-automation',
    number: '01',
    title: 'Industrial Automation',
    body: 'Designing and implementing intelligent automation solutions that improve operational efficiency, production quality, and process reliability.',
    focusAreas: ['PLC Programming', 'SCADA Systems', 'DCS Integration', 'HMI Development', 'Robotics Integration', 'Process Automation'],
    Icon: Cog,
  },
  {
    slug: 'ot-it-integration',
    number: '02',
    title: 'OT / IT Integration',
    body: 'Connecting operational technology with enterprise applications to create a unified flow of information across industrial operations.',
    focusAreas: ['OPC-UA', 'MQTT', 'Industrial Ethernet', 'Edge Gateways', 'API Integration', 'Enterprise Connectivity'],
    Icon: GitMerge,
  },
  {
    slug: 'industrial-data-platforms',
    number: '03',
    title: 'Industrial Data Platforms',
    body: 'Transforming industrial data into structured, scalable, and actionable information.',
    focusAreas: ['Industrial Historians', 'Data Lakes', 'Real-Time Data Streaming', 'Data Integration', 'Data Governance', 'Industrial Dashboards'],
    Icon: Database,
  },
  {
    slug: 'ai-analytics',
    number: '04',
    title: 'Artificial Intelligence & Analytics',
    body: 'Leveraging AI and advanced analytics to improve operational intelligence and business decision-making.',
    focusAreas: ['Machine Learning', 'Predictive Analytics', 'Computer Vision', 'Digital Twins', 'Intelligent Reporting', 'Operational Intelligence'],
    Icon: Brain,
  },
  {
    slug: 'iiot',
    number: '05',
    title: 'Industrial Internet of Things (IIoT)',
    body: 'Connecting machines, sensors, and industrial assets to enable real-time visibility and intelligent operations.',
    focusAreas: ['Smart Sensors', 'Edge Devices', 'Remote Monitoring', 'Industrial Connectivity', 'Asset Tracking', 'Device Management'],
    Icon: Network,
  },
  {
    slug: 'digital-engineering',
    number: '06',
    title: 'Digital Engineering',
    body: 'Accelerating innovation through digital design, engineering, simulation, and system integration.',
    focusAreas: ['Engineering Design', 'Digital Workflows', 'Simulation', 'System Architecture', 'Engineering Documentation', 'Process Optimization'],
    Icon: Layers,
  },
  {
    slug: 'enterprise-applications',
    number: '07',
    title: 'Enterprise Applications',
    body: 'Integrating business applications that support connected operations and enterprise-wide collaboration.',
    focusAreas: ['ERP', 'MES', 'LIMS', 'CMMS', 'CRM', 'Enterprise Integration'],
    Icon: Building2,
  },
  {
    slug: 'cloud-infrastructure',
    number: '08',
    title: 'Cloud Infrastructure',
    body: 'Building secure and scalable cloud environments that support industrial innovation.',
    focusAreas: ['Microsoft Azure', 'Amazon Web Services (AWS)', 'Hybrid Cloud', 'Cloud Migration', 'Cloud Monitoring', 'Infrastructure Management'],
    Icon: Cloud,
  },
  {
    slug: 'cybersecurity',
    number: '09',
    title: 'Cybersecurity',
    body: 'Protecting industrial environments through modern cybersecurity strategies and secure engineering practices.',
    focusAreas: ['OT Security', 'Zero Trust Architecture', 'Network Segmentation', 'Identity Management', 'Threat Monitoring', 'Compliance'],
    Icon: ShieldCheck,
  },
  {
    slug: 'managed-services',
    number: '10',
    title: 'Managed Services',
    body: 'Providing continuous operational support to ensure performance, reliability, and long-term value.',
    focusAreas: ['Remote Monitoring', 'Performance Optimization', 'Preventive Maintenance', 'System Health Checks', 'Technical Support', 'Continuous Improvement'],
    Icon: Headphones,
  },
];

export const deliverySteps = [
  { id: 1, title: 'Discover',  body: 'Understanding operational challenges and business objectives.' },
  { id: 2, title: 'Design',    body: 'Developing scalable architectures and engineering solutions.' },
  { id: 3, title: 'Build',     body: 'Implementation, integration, testing, and deployment.' },
  { id: 4, title: 'Optimize',  body: 'Continuous monitoring, improvement, and managed support.' },
];

export const industries = [
  { name: 'Industrial Manufacturing',    slug: 'industrial-manufacturing' },
  { name: 'Automotive',                   slug: 'automotive' },
  { name: 'Life Sciences',                slug: 'life-sciences' },
  { name: 'Semiconductor',                slug: 'semiconductor' },
  { name: 'Chemical Manufacturing',       slug: 'chemical-manufacturing' },
  { name: 'Food & Beverage',              slug: 'food-and-beverages' },
  { name: 'Oil & Gas',                    slug: 'oil-and-gas' },
  { name: 'Power & Utilities',            slug: 'power-and-utilities' },
  { name: 'Mining & Metals',              slug: 'mining-and-metals' },
  { name: 'Water & Wastewater',           slug: 'water-and-wastewater-management' },
  { name: 'Consumer Packaged Goods',      slug: 'consumer-packaged-goods' },
  { name: 'Data Centres',                 slug: 'data-centres' },
  { name: 'EPC',                          slug: 'epc' },
  { name: 'Agriculture',                  slug: 'agriculture' },
];

export const deliveryStats = [
  { value: '[XX]+',    label: 'Global Projects' },
  { value: '[XX]+',    label: 'Certified Partnerships' },
  { value: '[XX]/7',   label: 'Support Availability' },
  { value: '[XX]+',    label: 'Years of Experience' },
];
