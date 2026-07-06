// src/lib/insights.ts

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: { src: string; alt: string };
  readTime: string;
  date: string;
  hub: "ai-automation" | "technology-ecosystem";
  body?: string[];
}

export interface CaseStudy {
  slug: string;
  industry: string;
  client: string;
  title: string;
  excerpt: string;
  image: { src: string; alt: string };
  resultsPreview: string;
  kpis: { value: string; label: string }[];
  challenge: string[];
  solution: string[];
  results: string[];
  capabilitiesApplied: { name: string; href: string }[];
  quote: { text: string; author: string };
}

export const ARTICLES_DATA: Article[] = [
  // Hub: AI & Automation
  {
    slug: "reactive-to-autonomous-maintenance",
    title: "From Reactive to Autonomous: The Future of Industrial Maintenance",
    excerpt: "How AI is moving maintenance from scheduled and reactive to predictive and self-optimizing — and what it takes to get there.",
    category: "Predictive Maintenance",
    image: {
      src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
      alt: "A modern control room with live digital intelligence graphs"
    },
    readTime: "[X] min read",
    date: "[Month YYYY]",
    hub: "ai-automation",
    body: [
      "The transition from reactive to autonomous maintenance represents a fundamental shift in how modern industrial facilities manage asset lifecycle and operational uptime. Historically, maintenance schedules were dictated either by calendar-based intervals or, more costly, by unexpected mechanical failures. In high-throughput manufacturing plants, even a single hour of unplanned downtime can translate to hundreds of thousands of dollars in lost productivity. By leveraging real-time telemetry, IoT sensors, and machine learning models, companies can now anticipate machine degradation before it triggers a line stoppage.",
      "At the core of autonomous maintenance is the concept of closed-loop self-optimization. Modern sensors log physical parameters such as vibration frequencies, temperature profiles, and motor current draw directly from heavy robotic joints. These continuous streams are analyzed at the edge and in the cloud by deep neural networks trained to identify micro-anomalies that precede failure. When a deviation is recognized, the system does not simply flag a warning; it initiates localized adjustment commands to reduce motor strain or coordinates with scheduling engines to route preventative maintenance crews during natural changeover windows.",
      "However, scaling industrial AI from pilot tests to full plant-floor operations requires overcoming significant organizational and technical integration challenges. Legacy operational technology (OT) often operates on proprietary protocols that are disconnected from enterprise IT systems. Bridging this OT/IT divide demands secure, interoperable data architectures—such as Unified Namespaces—that democratize sensor telemetry for machine learning models. DHGsoft’s predictive maintenance implementations focus on establishing this secure foundation first, ensuring that AI-driven insights translate directly to measurable reductions in unplanned downtime."
    ]
  },
  {
    slug: "turning-industrial-data-to-decisions",
    title: "Turning Industrial Data into Decisions with AI",
    excerpt: "Why raw data isn't insight — and how AI closes the gap between signals and action on the plant floor.",
    category: "Analytics",
    image: {
      src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      alt: "Digital intelligence data code overlays on computer"
    },
    readTime: "[X] min read",
    date: "[Month YYYY]",
    hub: "ai-automation"
  },
  {
    slug: "rise-of-autonomous-factory",
    title: "The Rise of the Autonomous Factory",
    excerpt: "What \"autonomous\" really means in manufacturing, and the practical steps toward self-optimizing operations.",
    category: "Automation",
    image: {
      src: "https://images.unsplash.com/photo-1565034946487-077786996e27?auto=format&fit=crop&w=800&q=80",
      alt: "Semiconductor circuits representing autonomous routing"
    },
    readTime: "[X] min read",
    date: "[Month YYYY]",
    hub: "ai-automation"
  },
  {
    slug: "machine-vision-quality-scale",
    title: "Machine Vision and Quality at Scale",
    excerpt: "Using computer vision to catch defects faster, earlier, and more consistently than manual inspection.",
    category: "Machine Learning",
    image: {
      src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      alt: "Robotic arm sorting elements using vision analytics"
    },
    readTime: "[X] min read",
    date: "[Month YYYY]",
    hub: "ai-automation"
  },
  {
    slug: "mlops-plant-floor",
    title: "MLOps for the Plant Floor",
    excerpt: "Deploying and maintaining machine-learning models in industrial environments — reliably and at scale.",
    category: "Machine Learning",
    image: {
      src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      alt: "Clean network server hardware wiring"
    },
    readTime: "[X] min read",
    date: "[Month YYYY]",
    hub: "ai-automation"
  },
  {
    slug: "predictive-vs-prescriptive-forecasting",
    title: "Predictive vs Prescriptive: Beyond Forecasting Failure",
    excerpt: "The difference between predicting a problem and knowing exactly what to do about it.",
    category: "Predictive Maintenance",
    image: {
      src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
      alt: "Global network telemetry interface background"
    },
    readTime: "[X] min read",
    date: "[Month YYYY]",
    hub: "ai-automation"
  },
  {
    slug: "where-to-start-industrial-ai",
    title: "Where to Start with Industrial AI",
    excerpt: "A practical framework for choosing high-value AI use cases in industry.",
    category: "Analytics",
    image: {
      src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
      alt: "Premium laptop data metrics screen display"
    },
    readTime: "[X] min read",
    date: "[Month YYYY]",
    hub: "ai-automation"
  },

  // Hub: Technology Ecosystem
  {
    slug: "modern-industrial-tech-stack",
    title: "The Modern Industrial Technology Stack, Explained",
    excerpt: "From sensors to cloud — how the layers of a connected industrial architecture fit together.",
    category: "OT/IT",
    image: {
      src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      alt: "Product design team studying operational architectures"
    },
    readTime: "[X] min read",
    date: "[Month YYYY]",
    hub: "technology-ecosystem",
    body: [
      "The modern industrial technology stack is undergoing a rapid evolution, driven by the convergence of operational technology (OT) on the plant floor and information technology (IT) in the cloud. Traditionally, industrial architectures followed the rigid Purdue Model, where data moved slowly through isolated layers from physical machinery up to ERP systems. This hierarchical structure, while secure, created data silos that limited real-time visibility. Today, modern architectures are transitioning to decentralized, event-driven networks that allow sensor data to be published once and consumed by any authorized application instantly.",
      "A key enabler of this modern stack is the Unified Namespace (UNS). By serving as a centralized data broker, the UNS establishes a single, real-time source of truth for the entire enterprise. Whether it is a temperature sensor on a conveyor belt, a PLC controlling a robotic arm, or an MES tracking batch progress, all nodes publish their state to a structured, hierarchical topic namespace. This allows business intelligence platforms, predictive maintenance models, and plant managers to access the exact same data without building complex point-to-point integrations.",
      "Choosing where to run these industrial workloads is a critical decision in system design. While the cloud offers unlimited storage and massive computational power for training machine learning models, edge computing is essential for latency-sensitive applications like machine vision quality control and real-time safety shutoffs. A hybrid approach—where edge nodes process raw signals at sub-second speeds and forward aggregated telemetry to the cloud for long-term analysis—ensures both local resilience and enterprise-wide optimization. By building on open standards like MQTT Sparkplug B and OPC UA, DHGsoft designs secure, scalable architectures that support the next generation of connected industrial operations."
    ]
  },
  {
    slug: "why-uns-reshaping-data",
    title: "Why the Unified Namespace Is Reshaping Industrial Data",
    excerpt: "How a UNS turns scattered plant data into a single, real-time source of truth.",
    category: "Data Platforms",
    image: {
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      alt: "Unified Namespace software configuration dashboard"
    },
    readTime: "[X] min read",
    date: "[Month YYYY]",
    hub: "technology-ecosystem"
  },
  {
    slug: "ot-it-convergence-bridge",
    title: "OT/IT Convergence: Bridging Two Worlds",
    excerpt: "The organizational and technical realities of connecting operations and IT — and how to do it well.",
    category: "OT/IT",
    image: {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
      alt: "Operational technology developers planning network convergence"
    },
    readTime: "[X] min read",
    date: "[Month YYYY]",
    hub: "technology-ecosystem"
  },
  {
    slug: "choosing-industrial-data-platform",
    title: "Choosing an Industrial Data Platform",
    excerpt: "The criteria that matter when selecting a platform for industrial-scale data and analytics.",
    category: "Data Platforms",
    image: {
      src: "https://images.unsplash.com/photo-1542744173-8e0ee26cf221?auto=format&fit=crop&w=800&q=80",
      alt: "System architects selecting data models"
    },
    readTime: "[X] min read",
    date: "[Month YYYY]",
    hub: "technology-ecosystem"
  },
  {
    slug: "edge-vs-cloud-workloads",
    title: "Edge vs Cloud: Where Should Industrial Workloads Run?",
    excerpt: "A practical guide to splitting workloads between edge and cloud for latency, cost, and resilience.",
    category: "Cloud & Edge",
    image: {
      src: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80",
      alt: "Telemetry and computing nodes at the industrial edge"
    },
    readTime: "[X] min read",
    date: "[Month YYYY]",
    hub: "technology-ecosystem"
  },
  {
    slug: "building-secure-industrial-architecture",
    title: "Building a Secure Industrial Architecture",
    excerpt: "Applying zero-trust and defense-in-depth principles to connected operations.",
    category: "Security",
    image: {
      src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      alt: "Security protocols and firewall indicators on screen"
    },
    readTime: "[X] min read",
    date: "[Month YYYY]",
    hub: "technology-ecosystem"
  },
  {
    slug: "standards-shape-interoperability",
    title: "Standards That Shape Industrial Interoperability",
    excerpt: "The open standards making it easier to connect systems across the plant floor.",
    category: "Standards",
    image: {
      src: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
      alt: "Regulatory databases and interface documentation layout"
    },
    readTime: "[X] min read",
    date: "[Month YYYY]",
    hub: "technology-ecosystem"
  }
];

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    slug: "automotive-oem-downtime",
    industry: "Automotive",
    client: "A global automotive manufacturer [replace with real, approved name]",
    title: "Global Automotive OEM Cuts Unplanned Downtime",
    excerpt: "Predictive maintenance and OT/IT integration across multiple assembly plants delivered measurable uptime gains.",
    image: {
      src: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?auto=format&fit=crop&w=1200&q=80",
      alt: "Heavy automotive assembly line with robotic arms"
    },
    resultsPreview: "[XX]% less downtime · [XX]% faster response",
    kpis: [
      { value: "[XX]%", label: "Unplanned Downtime" },
      { value: "[XX]%", label: "OEE Increase" },
      { value: "[XX]%", label: "Faster Issue Response" }
    ],
    challenge: [
      "The client was experiencing costly unplanned downtime across its primary chassis assembly lines due to mechanical wear in heavy robotic joints.",
      "Crucial quality indicators and telemetry values were locked in localized PLC hardware, preventing engineers from compiling cross-facility predictions."
    ],
    solution: [
      "DHGsoft deployed an edge-to-cloud predictive maintenance system linked directly to raw machinery metrics. We integrated the PLC telemetry loops using secure OT/IT gateway bridges.",
      "The system logs motor current parameters and mechanical tolerances to a centralized machine-learning engine that predicts tool breakdown windows in advance."
    ],
    results: [
      "The facility achieved a [XX]% reduction in unplanned line downtime within six months of deployment.",
      "Response times for preventative maintenance teams improved by [XX]% through direct mobile notification routing."
    ],
    capabilitiesApplied: [
      { name: "Industrial Internet of Things (IIoT)", href: "/capabilities/iiot" },
      { name: "Artificial Intelligence & Analytics", href: "/capabilities/ai-analytics" },
      { name: "OT / IT Integration", href: "/capabilities/ot-it-integration" },
      { name: "Enterprise Applications", href: "/capabilities/enterprise-applications" }
    ],
    quote: {
      text: "[Add a real, approved client quote here regarding the predictive maintenance assembly project.]",
      author: "[Name, Title, Company]"
    }
  },
  {
    slug: "semiconductor-fab-yield",
    industry: "Semiconductor",
    client: "A leading semiconductor fabrication company [replace with real, approved name]",
    title: "Semiconductor Fab Lifts Yield with Advanced Analytics",
    excerpt: "Yield analytics and cleanroom monitoring at scale to optimize silicon substrate production cycles.",
    image: {
      src: "https://images.unsplash.com/photo-1620987278429-ca1858fdb878?auto=format&fit=crop&w=1200&q=80",
      alt: "Semiconductor cleanroom technician conducting inspection"
    },
    resultsPreview: "[XX]% yield increase · [XX]% scrap reduction",
    kpis: [
      { value: "[XX]%", label: "Wafer Yield Increase" },
      { value: "[XX]%", label: "Scrap Rate Reduction" },
      { value: "[XX]%", label: "Root Cause Resolution" }
    ],
    challenge: [
      "Microscopic wafer contamination and environmental pressure fluctuations were causing unpredictable batch scrap rates in cleanrooms.",
      "Manual process inspections were slow, meaning defects were often detected too late to prevent scrapping whole silicon wafers."
    ],
    solution: [
      "We implemented high-precision environmental sensors tracking micro-particulate flow rates and absolute cleanroom pressures.",
      "The sensors feed a unified industrial data platform loaded with deep learning model networks that evaluate production quality anomalies in real time."
    ],
    results: [
      "The fabrication facility documented a [XX]% overall increase in final wafer yields.",
      "Cleanroom inspection latency was minimized, and scrap rates decreased by [XX]% due to automated inline pressure corrections."
    ],
    capabilitiesApplied: [
      { name: "Industrial Data Platforms", href: "/capabilities/industrial-data-platforms" },
      { name: "Artificial Intelligence & Analytics", href: "/capabilities/ai-analytics" },
      { name: "Industrial Internet of Things (IIoT)", href: "/capabilities/iiot" }
    ],
    quote: {
      text: "[Add a real, approved client quote here regarding the cleanroom quality analytics setup.]",
      author: "[Name, Title, Company]"
    }
  },
  {
    slug: "energy-utility-grid",
    industry: "Power & Utilities",
    client: "A regional energy distribution utility [replace with real, approved name]",
    title: "Energy Utility Modernizes Grid Operations",
    excerpt: "Smart-grid monitoring and SCADA modernization to secure transmission lines and grid networks.",
    image: {
      src: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80",
      alt: "Electricity grid utility transformer infrastructure"
    },
    resultsPreview: "[XX]% reliability increase · [XX]% outage reduction",
    kpis: [
      { value: "[XX]%", label: "Grid Service Uptime" },
      { value: "[XX]%", label: "Outage Duration Cut" },
      { value: "[XX]%", label: "DER Load Balance" }
    ],
    challenge: [
      "The utility needed to coordinate distributed energy resources (DERs) like solar and wind with legacy substation equipment while keeping grid loads stabilized.",
      "Legacy SCADA telemetry lacked the latency parameters needed to prevent cascade line overloads during wind spikes."
    ],
    solution: [
      "DHGsoft modernization teams upgraded the substation automation framework, deploying secure edge telemetry units supporting standard grid protocols.",
      "We connected these SCADA interfaces to a real-time smart grid management platform that automates load balancing calculations."
    ],
    results: [
      "Substation reliability improved, achieving [XX]% grid service reliability.",
      "Grid line outage duration dropped by [XX]% due to automated diagnostic feedback algorithms."
    ],
    capabilitiesApplied: [
      { name: "OT / IT Integration", href: "/capabilities/ot-it-integration" },
      { name: "Industrial Internet of Things (IIoT)", href: "/capabilities/iiot" },
      { name: "Cybersecurity", href: "/capabilities/cybersecurity" }
    ],
    quote: {
      text: "[Add a real, approved client quote here regarding substation telemetry automation.]",
      author: "[Name, Title, Company]"
    }
  },
  {
    slug: "food-beverages-traceability",
    industry: "Food & Beverages",
    client: "A global multi-brand beverage packager [replace with real, approved name]",
    title: "F&B Leader Achieves Full Traceability",
    excerpt: "End-to-end track-and-trace tracking across high-speed packaging lines.",
    image: {
      src: "https://images.unsplash.com/photo-1605371924599-2c03b5bac530?auto=format&fit=crop&w=1200&q=80",
      alt: "High speed bottling conveyor processing line"
    },
    resultsPreview: "[XX]% recall trace speed · [XX]% OEE increase",
    kpis: [
      { value: "[XX]%", label: "Recall Search Acceleration" },
      { value: "[XX]%", label: "Line Performance (OEE)" },
      { value: "[XX]%", label: "Compliance Accuracy" }
    ],
    challenge: [
      "The client required batch tracing from raw ingredient delivery to final supermarket pallets to meet updated international safety regulations.",
      "High-speed line shifts made manual batch printing logs error-prone and created compliance bottlenecks."
    ],
    solution: [
      "We implemented barcode scanners, scale telemetry interfaces, and recipe database systems on the bottling lines.",
      "DHGsoft connected these packaging components to a unified tracking ledger that records recipe parameters dynamically."
    ],
    results: [
      "Recall trace queries that previously took days are now executed in under [XX] minutes.",
      "Packaging line OEE improved by [XX]% by reducing paper-based compliance logs."
    ],
    capabilitiesApplied: [
      { name: "Enterprise Applications", href: "/capabilities/enterprise-applications" },
      { name: "Industrial Data Platforms", href: "/capabilities/industrial-data-platforms" },
      { name: "Industrial Internet of Things (IIoT)", href: "/capabilities/iiot" }
    ],
    quote: {
      text: "[Add a real, approved client quote here regarding bottling line track-and-trace systems.]",
      author: "[Name, Title, Company]"
    }
  },
  {
    slug: "oil-gas-telemetry",
    industry: "Oil & Gas",
    client: "A multinational pipeline infrastructure operator [replace with real, approved name]",
    title: "Operator Gains Real-Time Pipeline Visibility",
    excerpt: "IIoT monitoring and pipeline security across remote midstream assets.",
    image: {
      src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
      alt: "Midstream pipeline valves and pressure equipment"
    },
    resultsPreview: "[XX]% visibility increase · [XX]% safety compliance",
    kpis: [
      { value: "[XX]%", label: "Remote Asset Visibility" },
      { value: "[XX]%", label: "Telemetry Response Time" },
      { value: "[XX]%", label: "Leak Diagnostic Speed" }
    ],
    challenge: [
      "The company managed thousands of miles of pipelines in desert environments where leak diagnostics relied on manual flyovers.",
      "Telemetry updates from remote RTUs took minutes to resolve, creating potential safety window risks."
    ],
    solution: [
      "DHGsoft engineers modernized the pipeline RTU nodes, implementing satellite edge gateways and MQTT-based messaging protocols.",
      "This provides a real-time data stream mapping pipeline pressure differentials to a central operations NOC."
    ],
    results: [
      "Asset visibility rose to [XX]%, providing total grid coverage.",
      "Telemetry response times fell to sub-second levels, enabling prompt leak warning detections."
    ],
    capabilitiesApplied: [
      { name: "Industrial Internet of Things (IIoT)", href: "/capabilities/iiot" },
      { name: "OT / IT Integration", href: "/capabilities/ot-it-integration" },
      { name: "Cybersecurity", href: "/capabilities/cybersecurity" }
    ],
    quote: {
      text: "[Add a real, approved client quote here regarding remote telemetry infrastructure.]",
      author: "[Name, Title, Company]"
    }
  },
  {
    slug: "connected-factory-oee",
    industry: "Industrial Manufacturing",
    client: "A high-precision equipment manufacturer [replace with real, approved name]",
    title: "Manufacturer Boosts OEE with a Connected Factory",
    excerpt: "Unified plant data and real-time dashboards to optimize floor production performance.",
    image: {
      src: "https://images.unsplash.com/photo-1590986424791-2355385d044a?auto=format&fit=crop&w=1200&q=80",
      alt: "Smart factory floor featuring assembly lines"
    },
    resultsPreview: "[XX]% OEE increase · [XX]% inventory turn improvements",
    kpis: [
      { value: "[XX]%", label: "OEE Performance Gain" },
      { value: "[XX]%", label: "Inventory Turns" },
      { value: "[XX]%", label: "Setup Cycle Reduction" }
    ],
    challenge: [
      "The plant was running separate inventory databases and production floor schedules, causing machine schedule mismatches and parts delays.",
      "OEE metrics were computed at the end of each week, meaning shift supervisors could not correct line bottlenecks immediately."
    ],
    solution: [
      "DHGsoft built a connected factory platform integrating MES and ERP databases in real time.",
      "We installed interactive floor displays that show live OEE rates and machine cycle queues for line operators."
    ],
    results: [
      "Overall plant OEE increased by [XX]% through real-time feedback loops.",
      "Inventory turns improved by [XX]% by linking supply chains directly to actual machine schedules."
    ],
    capabilitiesApplied: [
      { name: "Industrial Digital Transformation", href: "/capabilities/industrial-digital-transformation" },
      { name: "Enterprise Applications", href: "/capabilities/enterprise-applications" },
      { name: "Industrial Internet of Things (IIoT)", href: "/capabilities/iiot" }
    ],
    quote: {
      text: "[Add a real, approved client quote here regarding the connected factory OEE platform.]",
      author: "[Name, Title, Company]"
    }
  }
];
