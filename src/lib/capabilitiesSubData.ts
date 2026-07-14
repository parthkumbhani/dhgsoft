import {
  Cog, Sparkles, Factory, Network, Gauge, TrendingUp, Building2, Database,
  GitMerge, Zap, Cable, Router, Server, Cpu, Cloud, ShieldCheck, Headphones,
  Brain, Eye, Layers, Activity, LineChart, Wrench, Code2, FileCode, Layout,
  BarChart3, Settings, RefreshCw, Lock, Key, ScanEye, Bell, FileCheck,
  ClipboardCheck, HardDrive, RadioTower, CheckCircle2, Award
} from 'lucide-react';

export type CapabilityPage = {
  slug: string;
  eyebrow: string;
  hero: {
    h1: string;
    emphasisWord?: string;
    subLine: string;
    heroImage: string;
    stats: { value: string; label: string }[];
  };
  overview: {
    eyebrow: string;
    h2: string;
    bodyParagraphs: string[];
    image: string;
  };
  solutions: {
    eyebrow: string;
    h2: string;
    subLine: string;
    items: { title: string; Icon: any }[];
  };
  imageBand: {
    image: string;
    caption: string;
    captionEyebrow: string;
  };
  benefits: {
    eyebrow: string;
    h2: string;
    items: string[];
  };
  journey: {
    eyebrow: string;
    h2: string;
    subLine?: string;
    steps: string[];
  };
  closing: string;
  ctaTitle: string;
};

export const capabilityPages: CapabilityPage[] = [
  // ============================================
  // 1. INDUSTRIAL DIGITAL TRANSFORMATION
  // ============================================
  {
    slug: 'industrial-digital-transformation',
    eyebrow: 'Industrial Digital Transformation',
    hero: {
      h1: 'Transforming Industries Through Connected Digital Innovation',
      emphasisWord: 'Digital Innovation',
      subLine: 'Empowering industrial enterprises to modernize operations, integrate intelligent technologies, and accelerate sustainable digital transformation across the entire value chain.',
      heroImage: '/about_hero_cinematic.png',
      stats: [
        { value: 'Full Lifecycle', label: 'Delivery' },
        { value: 'End-to-End', label: 'Strategy' },
        { value: 'Connected', label: 'Ecosystems' },
      ],
    },
    overview: {
      eyebrow: 'Overview',
      h2: 'From Traditional Operations to Intelligent Enterprises.',
      bodyParagraphs: [
        'Industrial organizations are navigating a new era where digital technologies play a critical role in operational excellence, productivity, and long-term competitiveness.',
        'At DHGsoft, we help organizations transition from traditional operational environments to intelligent, connected, and data-driven enterprises. Our Industrial Digital Transformation services combine engineering expertise with advanced digital technologies to improve efficiency, enhance visibility, and support continuous innovation.',
        'From strategic consulting to implementation and long-term optimization, we guide organizations through every stage of their digital transformation journey.',
      ],
      image: '/about_engineering.png',
    },
    solutions: {
      eyebrow: 'What We Deliver',
      h2: 'End-to-End Digital Transformation Solutions',
      subLine: 'Every solution is engineered to fit into a connected, intelligent industrial ecosystem.',
      items: [
        { title: 'Digital Transformation Strategy',  Icon: TrendingUp },
        { title: 'Smart Manufacturing',              Icon: Factory },
        { title: 'Connected Operations',             Icon: Network },
        { title: 'Digital Factory Enablement',       Icon: Cog },
        { title: 'Operational Excellence',           Icon: Gauge },
        { title: 'Process Optimization',             Icon: Sparkles },
        { title: 'Enterprise Modernization',         Icon: Building2 },
        { title: 'Data-Driven Decision Making',      Icon: Database },
      ],
    },
    imageBand: {
      image: '/smart_factory_visual.png',
      caption: 'Helping enterprises reimagine operations for a connected, intelligent, and future-ready world.',
      captionEyebrow: 'DHGsoft In Action',
    },
    benefits: {
      eyebrow: 'Business Benefits',
      h2: 'Measurable Impact Across Operations',
      items: [
        'Increased Productivity',
        'Improved Operational Visibility',
        'Better Decision-Making',
        'Reduced Downtime',
        'Higher Operational Efficiency',
        'Sustainable Growth',
      ],
    },
    journey: {
      eyebrow: 'Our Approach',
      h2: 'A Structured Digital Transformation Journey',
      steps: ['Discover', 'Design', 'Transform', 'Optimize'],
    },
    closing: 'Helping organizations build connected, intelligent, and future-ready industrial enterprises.',
    ctaTitle: 'Ready to Begin Your Digital Transformation?',
  },

  // ============================================
  // 2. OT / IT INTEGRATION
  // ============================================
  {
    slug: 'ot-it-integration',
    eyebrow: 'OT / IT Integration',
    hero: {
      h1: 'Connecting Operational Technology with Enterprise Intelligence',
      emphasisWord: 'Enterprise Intelligence',
      subLine: 'Bridge the gap between shop-floor operations and enterprise systems through secure, scalable, and intelligent integration solutions.',
      heroImage: '/about_hero.png',
      stats: [
        { value: 'Secure', label: 'Architecture' },
        { value: 'Real-Time', label: 'Data Flow' },
        { value: 'Unified', label: 'Operations' },
      ],
    },
    overview: {
      eyebrow: 'Overview',
      h2: 'Where Shop-Floor Meets Enterprise.',
      bodyParagraphs: [
        'Operational Technology and Information Technology have traditionally operated as separate environments. Modern industrial organizations require these systems to work together seamlessly.',
        'DHGsoft enables secure integration between industrial control systems and enterprise platforms, creating a unified environment where operational data flows efficiently across the organization.',
        'This connected architecture improves visibility, collaboration, operational efficiency, and business decision-making.',
      ],
      image: '/office_blur.png',
    },
    solutions: {
      eyebrow: 'Integration Areas',
      h2: 'Comprehensive OT / IT Integration Capabilities',
      subLine: 'From shop-floor protocols to enterprise APIs — we connect every layer.',
      items: [
        { title: 'PLC Integration',            Icon: Cpu },
        { title: 'SCADA Integration',          Icon: Layout },
        { title: 'DCS Connectivity',           Icon: Cable },
        { title: 'OPC-UA',                     Icon: GitMerge },
        { title: 'MQTT',                       Icon: Router },
        { title: 'Industrial Ethernet',        Icon: Network },
        { title: 'ERP Integration',            Icon: Building2 },
        { title: 'MES Integration',            Icon: Factory },
        { title: 'API Development',            Icon: Code2 },
        { title: 'Enterprise Connectivity',    Icon: Server },
      ],
    },
    imageBand: {
      image: '/about_collaboration.png',
      caption: 'Unifying industrial operations with enterprise intelligence — securely, at scale.',
      captionEyebrow: 'Connected Enterprise',
    },
    benefits: {
      eyebrow: 'Business Outcomes',
      h2: 'Real Value from Connected Operations',
      items: [
        'Unified Operations',
        'Real-Time Data Flow',
        'Increased Visibility',
        'Faster Decision Making',
        'Secure Connectivity',
        'Improved Productivity',
      ],
    },
    journey: {
      eyebrow: 'Integration Methodology',
      h2: 'A Proven Integration Methodology',
      steps: ['Assess', 'Connect', 'Integrate', 'Monitor', 'Optimize'],
    },
    closing: 'Creating seamless communication between industrial operations and enterprise systems.',
    ctaTitle: 'Ready to Unify Your Industrial and Enterprise Systems?',
  },

  // ============================================
  // 3. INDUSTRIAL DATA PLATFORMS
  // ============================================
  {
    slug: 'industrial-data-platforms',
    eyebrow: 'Industrial Data Platforms',
    hero: {
      h1: 'Turning Industrial Data into Actionable Intelligence',
      emphasisWord: 'Actionable Intelligence',
      subLine: 'Designing scalable industrial data platforms that collect, organize, analyze, and transform operational data into meaningful business insights.',
      heroImage: '/smart_factory_visual.png',
      stats: [
        { value: 'Real-Time', label: 'Streaming' },
        { value: 'Single', label: 'Source of Truth' },
        { value: 'Scalable', label: 'Platforms' },
      ],
    },
    overview: {
      eyebrow: 'Overview',
      h2: 'From Raw Data to Business Value.',
      bodyParagraphs: [
        'Industrial facilities generate enormous volumes of operational data every second. The true value lies not in collecting data, but in making it accessible, reliable, and actionable.',
        'DHGsoft develops modern industrial data platforms that unify information from machines, control systems, enterprise applications, and cloud environments into a single source of truth.',
        'These platforms enable organizations to improve operational visibility, support predictive analytics, and make informed business decisions.',
      ],
      image: '/about_global.png',
    },
    solutions: {
      eyebrow: 'Platform Capabilities',
      h2: 'Complete Industrial Data Platform Capabilities',
      subLine: 'Purpose-built for the scale, speed, and structure of industrial data.',
      items: [
        { title: 'Industrial Historians',        Icon: Database },
        { title: 'Data Lakes',                   Icon: HardDrive },
        { title: 'Real-Time Data Streaming',     Icon: RadioTower },
        { title: 'Data Integration',             Icon: GitMerge },
        { title: 'ETL Pipelines',                Icon: RefreshCw },
        { title: 'Dashboard Development',        Icon: Layout },
        { title: 'Industrial Reporting',         Icon: BarChart3 },
        { title: 'Data Governance',              Icon: ShieldCheck },
        { title: 'KPI Monitoring',               Icon: Gauge },
        { title: 'Enterprise Analytics',         Icon: LineChart },
      ],
    },
    imageBand: {
      image: '/energy_visual.png',
      caption: 'Turning industrial operations into a unified source of truth — accessible, reliable, actionable.',
      captionEyebrow: 'Data In Motion',
    },
    benefits: {
      eyebrow: 'Business Benefits',
      h2: 'Real Business Value from Industrial Data',
      items: [
        'Single Source of Truth',
        'Improved Reporting',
        'Real-Time Visibility',
        'Better Analytics',
        'Data-Driven Decisions',
        'Operational Intelligence',
      ],
    },
    journey: {
      eyebrow: 'Data Journey',
      h2: 'The Industrial Data Lifecycle',
      steps: ['Collect', 'Connect', 'Store', 'Analyze', 'Visualize', 'Optimize'],
    },
    closing: 'Helping industries unlock the full value of operational data through intelligent digital platforms.',
    ctaTitle: 'Ready to Build Your Industrial Data Platform?',
  },

  // ============================================
  // 4. ARTIFICIAL INTELLIGENCE & ANALYTICS
  // ============================================
  {
    slug: 'ai-analytics',
    eyebrow: 'Artificial Intelligence & Analytics',
    hero: {
      h1: 'Transforming Industrial Data into Intelligent Decisions',
      emphasisWord: 'Intelligent Decisions',
      subLine: 'Leverage Artificial Intelligence, Machine Learning, and advanced analytics to predict outcomes, optimize operations, improve asset performance, and accelerate data-driven decision-making across industrial enterprises.',
      heroImage: '/about_engineering.png',
      stats: [
        { value: 'Predictive', label: 'Insights' },
        { value: 'AI-Powered', label: 'Operations' },
        { value: 'Real-Time', label: 'Intelligence' },
      ],
    },
    overview: {
      eyebrow: 'Overview',
      h2: 'Where Data Becomes Intelligence.',
      bodyParagraphs: [
        'Industrial organizations generate vast amounts of operational data every day. Artificial Intelligence transforms this data into meaningful intelligence by identifying patterns, predicting failures, and enabling faster business decisions.',
        'DHGsoft combines engineering expertise with AI technologies to develop intelligent industrial solutions that improve operational performance, enhance quality, reduce downtime, and increase productivity.',
        'From predictive maintenance to computer vision and operational intelligence, our AI solutions enable organizations to unlock the full value of industrial data.',
      ],
      image: '/about_hero_cinematic.png',
    },
    solutions: {
      eyebrow: 'Our AI Capabilities',
      h2: 'AI Solutions Built for Industrial Enterprises',
      subLine: 'From predictive maintenance to generative AI — engineered for real industrial impact.',
      items: [
        { title: 'Machine Learning',           Icon: Brain },
        { title: 'Predictive Analytics',       Icon: TrendingUp },
        { title: 'Computer Vision',            Icon: Eye },
        { title: 'Generative AI',              Icon: Sparkles },
        { title: 'Digital Twins',              Icon: Layers },
        { title: 'Industrial Intelligence',    Icon: LineChart },
        { title: 'Process Optimization',       Icon: Gauge },
        { title: 'Operational Dashboards',     Icon: Layout },
        { title: 'AI-Powered Reporting',       Icon: FileCheck },
        { title: 'Decision Support Systems',   Icon: ScanEye },
      ],
    },
    imageBand: {
      image: '/about_values.png',
      caption: 'From raw operational data to intelligent decisions — accelerating industrial performance.',
      captionEyebrow: 'AI In Industry',
    },
    benefits: {
      eyebrow: 'Business Benefits',
      h2: 'Measurable AI Impact',
      items: [
        'Predict Equipment Failures',
        'Improve Product Quality',
        'Reduce Operational Costs',
        'Increase Production Efficiency',
        'Faster Decision Making',
        'Better Resource Utilization',
      ],
    },
    journey: {
      eyebrow: 'AI Lifecycle',
      h2: 'The Industrial AI Lifecycle',
      steps: ['Collect Data', 'Prepare Data', 'Train Models', 'Deploy AI', 'Monitor', 'Optimize'],
    },
    closing: 'Helping industries make smarter decisions through intelligent automation and advanced analytics.',
    ctaTitle: 'Ready to Leverage Industrial AI & Analytics?',
  },

  // ============================================
  // 5. INDUSTRIAL INTERNET OF THINGS (IIOT)
  // ============================================
  {
    slug: 'iiot',
    eyebrow: 'Industrial Internet of Things (IIoT)',
    hero: {
      h1: 'Connecting Every Asset. Every Process. Every Decision.',
      emphasisWord: 'Every Process',
      subLine: 'Enable intelligent industrial operations through connected devices, smart sensors, edge computing, and real-time industrial communication.',
      heroImage: '/energy_visual.png',
      stats: [
        { value: 'Connected', label: 'Assets' },
        { value: 'Edge', label: 'Computing' },
        { value: 'Real-Time', label: 'Telemetry' },
      ],
    },
    overview: {
      eyebrow: 'Overview',
      h2: 'Continuous Operational Visibility.',
      bodyParagraphs: [
        'The Industrial Internet of Things connects physical assets with digital intelligence, creating continuous visibility across industrial operations.',
        'DHGsoft designs IIoT ecosystems that collect, monitor, and analyze operational data from machines, sensors, and industrial equipment to improve productivity, asset reliability, and operational efficiency.',
        'Our IIoT solutions create a connected industrial environment where information flows securely from the shop floor to enterprise systems and cloud platforms.',
      ],
      image: '/about_engineering.png',
    },
    solutions: {
      eyebrow: 'IIoT Solutions',
      h2: 'Intelligent Industrial IoT Solutions',
      subLine: 'Scale asset connectivity, device management, and edge telemetry.',
      items: [
        { title: 'Smart Sensors',            Icon: Network },
        { title: 'Industrial Gateways',       Icon: Router },
        { title: 'OPC-UA',                     Icon: GitMerge },
        { title: 'MQTT',                       Icon: Router },
        { title: 'Edge Computing',             Icon: Cpu },
        { title: 'Remote Monitoring',          Icon: RadioTower },
        { title: 'Industrial Connectivity',    Icon: Cable },
        { title: 'Device Management',          Icon: Settings },
        { title: 'Real-Time Alerts',           Icon: Bell },
        { title: 'Asset Tracking',             Icon: Activity },
      ],
    },
    imageBand: {
      image: '/about_hero.png',
      caption: 'Creating connected industrial ecosystems that enable smarter operations and continuous innovation.',
      captionEyebrow: 'IIoT Framework',
    },
    benefits: {
      eyebrow: 'Business Benefits',
      h2: 'Unlocking Value from IIoT Connectivity',
      items: [
        'Real-Time Monitoring',
        'Predictive Maintenance',
        'Improved Asset Visibility',
        'Faster Response',
        'Better Operational Control',
        'Connected Manufacturing',
      ],
    },
    journey: {
      eyebrow: 'Connected Ecosystem',
      h2: 'The Connected IIoT Pipeline',
      steps: ['Industrial Assets', 'Sensors', 'Edge Devices', 'Industrial Network', 'Cloud Platform', 'Enterprise Applications', 'Business Intelligence'],
    },
    closing: 'Creating connected industrial ecosystems that enable smarter operations and continuous innovation.',
    ctaTitle: 'Ready to Build Your Connected IIoT Ecosystem?',
  },

  // ============================================
  // 6. DIGITAL ENGINEERING SERVICES
  // ============================================
  {
    slug: 'digital-engineering',
    eyebrow: 'Digital Engineering Services',
    hero: {
      h1: 'Engineering Innovation Through Digital Excellence',
      emphasisWord: 'Digital Excellence',
      subLine: 'Accelerate engineering innovation with integrated digital design, software engineering, industrial integration, and intelligent technology solutions.',
      heroImage: '/about_collaboration.png',
      stats: [
        { value: 'Engineered', label: 'Solutions' },
        { value: 'Custom', label: 'APIs' },
        { value: 'Integrated', label: 'Frameworks' },
      ],
    },
    overview: {
      eyebrow: 'Overview',
      h2: 'Engineering-First Operational Innovation.',
      bodyParagraphs: [
        'Digital Engineering combines traditional engineering knowledge with modern software, automation, and digital technologies to improve the design, implementation, and optimization of industrial systems.',
        'DHGsoft delivers engineering solutions that support the complete project lifecycle, enabling organizations to reduce complexity, improve collaboration, and accelerate innovation.',
        'Our engineering-first approach ensures every solution is scalable, reliable, and aligned with long-term business objectives.',
      ],
      image: '/office_blur.png',
    },
    solutions: {
      eyebrow: 'Engineering Services',
      h2: 'Complete Digital Engineering Services',
      subLine: 'Custom industrial software, architecture design, and simulation.',
      items: [
        { title: 'Industrial Software Development', Icon: Code2 },
        { title: 'Custom Application Development',  Icon: Layout },
        { title: 'Digital Product Engineering',       Icon: Settings },
        { title: 'Engineering Design',               Icon: Layers },
        { title: 'System Integration',               Icon: GitMerge },
        { title: 'API Development',                  Icon: FileCode },
        { title: 'Industrial Dashboards',            Icon: BarChart3 },
        { title: 'Engineering Simulation',           Icon: Activity },
        { title: 'Architecture Design',              Icon: Server },
        { title: 'Technical Consulting',             Icon: Headphones },
      ],
    },
    imageBand: {
      image: '/smart_factory_visual.png',
      caption: 'Connecting technology, innovation, and industrial excellence for future-ready operations.',
      captionEyebrow: 'Digital Engineering',
    },
    benefits: {
      eyebrow: 'Business Benefits',
      h2: 'Proven Value from Digital Engineering',
      items: [
        'Faster Project Delivery',
        'Improved Engineering Quality',
        'Better Collaboration',
        'Scalable Architecture',
        'Increased Innovation',
        'Long-Term Maintainability',
      ],
    },
    journey: {
      eyebrow: 'Engineering Workflow',
      h2: 'Structured Engineering Process',
      steps: ['Plan', 'Design', 'Develop', 'Integrate', 'Validate', 'Deploy', 'Support'],
    },
    closing: 'Building intelligent engineering solutions that connect technology, innovation, and industrial excellence.',
    ctaTitle: 'Ready to Partner for Digital Engineering Services?',
  },

  // ============================================
  // 7. ENTERPRISE APPLICATIONS
  // ============================================
  {
    slug: 'enterprise-applications',
    eyebrow: 'Enterprise Applications',
    hero: {
      h1: 'Connecting Enterprise Systems for Smarter Operations',
      emphasisWord: 'Smarter Operations',
      subLine: 'Integrate enterprise applications with industrial operations to improve collaboration, streamline business processes, and enable real-time decision-making across the organization.',
      heroImage: '/about_global.png',
      stats: [
        { value: 'Unified', label: 'Workflows' },
        { value: 'Full', label: 'Traceability' },
        { value: 'Synchronized', label: 'Operations' },
      ],
    },
    overview: {
      eyebrow: 'Overview',
      h2: 'Connected Business Applications.',
      bodyParagraphs: [
        'Modern enterprises rely on connected business applications to manage operations efficiently. However, the true value of enterprise software is realized when it integrates seamlessly with industrial systems and operational data.',
        'DHGsoft helps organizations implement, integrate, and optimize enterprise applications that connect engineering, manufacturing, supply chain, maintenance, quality, and business operations into one unified digital ecosystem.',
        'Our solutions improve visibility, eliminate information silos, and create a connected enterprise ready for continuous innovation.',
      ],
      image: '/about_collaboration.png',
    },
    solutions: {
      eyebrow: 'Enterprise Solutions',
      h2: 'Integrated Business Applications',
      subLine: 'Unify MES, ERP, PLM, and business intelligence systems.',
      items: [
        { title: 'Enterprise Resource Planning (ERP)',  Icon: Building2 },
        { title: 'Manufacturing Execution Systems (MES)', Icon: Factory },
        { title: 'Laboratory Information Management (LIMS)', Icon: ClipboardCheck },
        { title: 'Maintenance Management (CMMS)', Icon: Wrench },
        { title: 'Customer Relationship Management (CRM)', Icon: Headphones },
        { title: 'Product Lifecycle Management (PLM)',  Icon: Layers },
        { title: 'Supply Chain Integration',            Icon: Network },
        { title: 'Business Intelligence Platforms',     Icon: BarChart3 },
        { title: 'Workflow Automation',                 Icon: RefreshCw },
        { title: 'Enterprise Reporting',                Icon: FileCheck },
      ],
    },
    imageBand: {
      image: '/about_values.png',
      caption: 'Bridging the gap between corporate planning and manufacturing execution.',
      captionEyebrow: 'Enterprise Sync',
    },
    benefits: {
      eyebrow: 'Business Benefits',
      h2: 'Operational Transparency & Productivity',
      items: [
        'Connected Business Operations',
        'Improved Collaboration',
        'Faster Business Decisions',
        'Operational Transparency',
        'Standardized Processes',
        'Increased Productivity',
      ],
    },
    journey: {
      eyebrow: 'Enterprise Integration Journey',
      h2: 'The Integration Process',
      steps: ['Business Requirements', 'Application Design', 'System Integration', 'Data Synchronization', 'Deployment', 'Continuous Optimization'],
    },
    closing: 'Connecting enterprise applications with industrial intelligence to create smarter, faster, and more efficient organizations.',
    ctaTitle: 'Ready to Connect Your Enterprise Applications?',
  },

  // ============================================
  // 8. CLOUD & INFRASTRUCTURE
  // ============================================
  {
    slug: 'cloud-infrastructure',
    eyebrow: 'Cloud & Infrastructure',
    hero: {
      h1: 'Building Secure, Scalable, and Connected Digital Infrastructure',
      emphasisWord: 'Digital Infrastructure',
      subLine: 'Design and modernize cloud infrastructure that enables industrial organizations to scale operations, improve resilience, and accelerate digital transformation.',
      heroImage: '/about_hero.png',
      stats: [
        { value: 'Scalable', label: 'Uptime' },
        { value: 'Hybrid', label: 'Architecture' },
        { value: 'Zero', label: 'Data Loss' },
      ],
    },
    overview: {
      eyebrow: 'Overview',
      h2: 'Resilient Modern Cloud Architecture.',
      bodyParagraphs: [
        'Cloud technologies are transforming how industrial organizations manage applications, data, and operations. A modern cloud infrastructure provides the flexibility, scalability, and resilience needed to support connected industrial ecosystems.',
        'DHGsoft designs cloud architectures that integrate industrial operations with enterprise platforms while maintaining security, performance, and business continuity.',
        'Whether deploying cloud-native applications or hybrid environments, we help organizations create reliable digital foundations for future growth.',
      ],
      image: '/office_blur.png',
    },
    solutions: {
      eyebrow: 'Cloud Capabilities',
      h2: 'Scalable Cloud & Infrastructure Solutions',
      subLine: 'Modern cloud-native, on-prem, and hybrid industrial networks.',
      items: [
        { title: 'Microsoft Azure',              Icon: Cloud },
        { title: 'Amazon Web Services (AWS)',    Icon: Server },
        { title: 'Hybrid Cloud',                 Icon: Layers },
        { title: 'Cloud Migration',              Icon: RefreshCw },
        { title: 'Infrastructure Modernization', Icon: Settings },
        { title: 'Virtualization',              Icon: HardDrive },
        { title: 'Backup & Disaster Recovery',   Icon: ShieldCheck },
        { title: 'Cloud Monitoring',             Icon: Activity },
        { title: 'Infrastructure Automation',    Icon: Code2 },
        { title: 'Performance Optimization',     Icon: Gauge },
      ],
    },
    imageBand: {
      image: '/about_engineering.png',
      caption: 'Modernizing digital infrastructure to run critical industrial workloads securely in the cloud.',
      captionEyebrow: 'Digital Infrastructure',
    },
    benefits: {
      eyebrow: 'Business Benefits',
      h2: 'Scalability, Resilience & Availability',
      items: [
        'Scalable Infrastructure',
        'Reduced Operational Costs',
        'Faster Deployment',
        'High Availability',
        'Business Continuity',
        'Secure Remote Access',
      ],
    },
    journey: {
      eyebrow: 'Cloud Transformation Journey',
      h2: 'The Infrastructure Migration Path',
      steps: ['Assess', 'Design', 'Migrate', 'Deploy', 'Secure', 'Optimize'],
    },
    closing: 'Creating cloud environments that empower industrial organizations to innovate with confidence and scale for the future.',
    ctaTitle: 'Ready to Modernize Your Cloud Infrastructure?',
  },

  // ============================================
  // 9. CYBERSECURITY
  // ============================================
  {
    slug: 'cybersecurity',
    eyebrow: 'Cybersecurity',
    hero: {
      h1: 'Protecting Industrial Operations Through Secure Digital Engineering',
      emphasisWord: 'Digital Engineering',
      subLine: 'Strengthen cybersecurity across industrial environments with modern security strategies that protect operational technology, enterprise systems, and critical infrastructure.',
      heroImage: '/office_blur.png',
      stats: [
        { value: 'Zero Trust', label: 'Defense' },
        { value: 'OT Security', label: 'Shielding' },
        { value: 'Threat', label: 'Detection' },
      ],
    },
    overview: {
      eyebrow: 'Overview',
      h2: 'Secure Operations & Risk Management.',
      bodyParagraphs: [
        'As industrial systems become increasingly connected, cybersecurity becomes an essential component of digital transformation.',
        'DHGsoft helps organizations secure industrial environments by protecting operational technology, enterprise applications, cloud infrastructure, and industrial data from evolving cyber threats.',
        'Our cybersecurity approach focuses on proactive risk management, continuous monitoring, secure architecture, and compliance with industry standards.',
      ],
      image: '/about_hero_cinematic.png',
    },
    solutions: {
      eyebrow: 'Security Capabilities',
      h2: 'Zero-Trust Industrial Cybersecurity',
      subLine: 'Protect active OT networks, sensors, and database boundaries.',
      items: [
        { title: 'OT Security',                  Icon: Lock },
        { title: 'Industrial Network Security',  Icon: ShieldCheck },
        { title: 'Zero Trust Architecture',      Icon: Key },
        { title: 'Identity & Access Management', Icon: Key },
        { title: 'Threat Detection',             Icon: ScanEye },
        { title: 'Vulnerability Assessment',     Icon: ClipboardCheck },
        { title: 'Security Monitoring',          Icon: Bell },
        { title: 'Compliance Management',        Icon: FileCheck },
        { title: 'Incident Response',            Icon: ShieldCheck },
        { title: 'Security Governance',          Icon: Building2 },
      ],
    },
    imageBand: {
      image: '/about_global.png',
      caption: 'Defending connected machinery and industrial networks from cyber security risks.',
      captionEyebrow: 'OT Cybersecurity',
    },
    benefits: {
      eyebrow: 'Business Benefits',
      h2: 'Resilience, Uptime & Protected Assets',
      items: [
        'Reduced Cyber Risk',
        'Secure Industrial Operations',
        'Regulatory Compliance',
        'Business Continuity',
        'Data Protection',
        'Increased Operational Resilience',
      ],
    },
    journey: {
      eyebrow: 'Security Framework',
      h2: 'Our Security Framework Lifecycle',
      steps: ['Identify', 'Protect', 'Detect', 'Respond', 'Recover', 'Improve'],
    },
    closing: 'Helping industries build resilient and secure digital environments through trusted cybersecurity solutions.',
    ctaTitle: 'Ready to Secure Your Industrial Operations?',
  },

  // ============================================
  // 10. MANAGED SERVICES
  // ============================================
  {
    slug: 'managed-services',
    eyebrow: 'Managed Services',
    hero: {
      h1: 'Continuous Support for Continuous Performance',
      emphasisWord: 'Continuous Performance',
      subLine: 'Ensure long-term operational excellence through proactive monitoring, expert support, and continuous optimization of industrial and enterprise systems.',
      heroImage: '/about_global.png',
      stats: [
        { value: '24x7x365', label: 'Monitoring' },
        { value: 'Active', label: 'SLA Support' },
        { value: 'Uptime', label: 'Optimization' },
      ],
    },
    overview: {
      eyebrow: 'Overview',
      h2: 'Maximize Availability & Lower Maintenance.',
      bodyParagraphs: [
        'Digital transformation does not end with implementation. Long-term success requires continuous monitoring, maintenance, optimization, and expert support.',
        'DHGsoft provides managed services that help organizations maximize system availability, improve performance, reduce operational risks, and extend the value of technology investments.',
        'Our engineering teams work alongside customers to ensure every solution continues delivering measurable business outcomes.',
      ],
      image: '/about_collaboration.png',
    },
    solutions: {
      eyebrow: 'Managed Service Offerings',
      h2: 'Complete Support & Optimization Services',
      subLine: '24/7 technical support, infrastructure maintenance, and software updates.',
      items: [
        { title: '24×7 Monitoring',            Icon: Activity },
        { title: 'Remote Support',              Icon: Headphones },
        { title: 'Preventive Maintenance',      Icon: Wrench },
        { title: 'Performance Optimization',    Icon: Gauge },
        { title: 'Infrastructure Management',   Icon: Server },
        { title: 'System Health Checks',        Icon: ClipboardCheck },
        { title: 'Incident Management',         Icon: Bell },
        { title: 'Software Updates',            Icon: RefreshCw },
        { title: 'Backup & Recovery',           Icon: ShieldCheck },
        { title: 'Continuous Improvement',      Icon: TrendingUp },
      ],
    },
    imageBand: {
      image: '/energy_visual.png',
      caption: 'Continuous support and performance optimization for critical industrial applications worldwide.',
      captionEyebrow: 'Active Support',
    },
    benefits: {
      eyebrow: 'Business Benefits',
      h2: 'Lower Cost, Reliability & Maximum Availability',
      items: [
        'Maximum System Availability',
        'Reduced Downtime',
        'Lower Maintenance Costs',
        'Faster Issue Resolution',
        'Improved Reliability',
        'Long-Term Operational Value',
      ],
    },
    journey: {
      eyebrow: 'Support Lifecycle',
      h2: 'Proactive Support Lifecycle',
      steps: ['Monitor', 'Analyze', 'Maintain', 'Optimize', 'Support', 'Improve'],
    },
    closing: 'Delivering proactive managed services that keep industrial operations secure, reliable, and continuously improving.',
    ctaTitle: 'Ready to Optimize Your System Performance?',
  }
];
