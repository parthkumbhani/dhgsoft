// src/lib/capabilities.ts

export interface CapabilityData {
  slug: string;
  category: string;
  title: string;
  sub: string;
  challenge: string;
  solution: string;
  keyCapabilities: string[];
  steps: { num: string; title: string; desc: string }[];
  signatureKey: string;
  outcomes: string[];
  industries: string[];
  related: { name: string; href: string }[];
}

export const CAPABILITIES_DATA: Record<string, CapabilityData> = {
  "industrial-digital-transformation": {
    slug: "industrial-digital-transformation",
    category: "DIGITAL TRANSFORMATION",
    title: "Industrial Digital Transformation",
    sub: "Modernize your entire operation — from plant floor to enterprise — into a connected, intelligent, and future-ready digital ecosystem.",
    challenge: "Most industrial organizations run on disconnected systems, aging infrastructure, and data trapped in silos — making it hard to improve, scale, or compete.",
    solution: "DHGsoft delivers enterprise-wide digital transformation that connects OT and IT, modernizes core systems, and builds a foundation for real-time intelligence and continuous improvement.",
    keyCapabilities: [
      "Digital maturity assessment & roadmap",
      "OT/IT & enterprise system modernization",
      "Connected operations architecture",
      "Industrial data & analytics foundation",
      "Cloud & edge enablement",
      "Change management & adoption"
    ],
    steps: [
      { num: "01", title: "Assess", desc: "Understand current maturity, constraints, and operation." },
      { num: "02", title: "Strategize", desc: "Design a secure blueprint roadmap across OT and IT." },
      { num: "03", title: "Modernize", desc: "Build core systems, pipelines, and integrations." },
      { num: "04", title: "Scale", desc: "Deploy across operations and sites with change management." }
    ],
    signatureKey: "industrial-digital-transformation",
    outcomes: ["Faster decisions", "Lower operating cost", "Improved reliability", "A scalable digital foundation"],
    industries: ["Industrial Manufacturing", "Automotive", "Life Sciences", "Oil & Gas", "Power & Utilities"],
    related: [
      { name: "OT / IT Integration", href: "/capabilities/ot-it-integration" },
      { name: "Industrial Data Platforms", href: "/capabilities/industrial-data-platforms" },
      { name: "Cloud & Infrastructure", href: "/capabilities/cloud-infrastructure" }
    ]
  },
  "ot-it-integration": {
    slug: "ot-it-integration",
    category: "DIGITAL TRANSFORMATION",
    title: "OT / IT Integration",
    sub: "Connect operational technology and enterprise IT so data flows securely from the plant floor to business systems — and back.",
    challenge: "OT and IT speak different languages, run on different priorities, and rarely connect — leaving operations blind and enterprises guessing.",
    solution: "We engineer secure, reliable integration between control systems and enterprise applications, creating a single, trusted flow of operational data.",
    keyCapabilities: [
      "OT/IT architecture & middleware",
      "SCADA/PLC to enterprise integration",
      "Unified Namespace (UNS) design",
      "Edge-to-cloud connectivity",
      "Secure network segmentation",
      "Real-time data contextualization"
    ],
    steps: [
      { num: "01", title: "Map", desc: "Discover asset footprints, historians, and systems." },
      { num: "02", title: "Connect", desc: "Integrate control nodes using Unified Namespaces." },
      { num: "03", title: "Secure", desc: "Establish network segmentation and edge gates." },
      { num: "04", title: "Contextualize", desc: "Expose clean metrics data to enterprise layers." }
    ],
    signatureKey: "ot-it-integration",
    outcomes: ["End-to-end visibility", "Faster response", "Reduced downtime", "Secure data flow"],
    industries: ["Industrial Manufacturing", "Semiconductor", "Chemical Manufacturing", "Food & Beverages", "Water & Wastewater Management"],
    related: [
      { name: "Industrial Data Platforms", href: "/capabilities/industrial-data-platforms" },
      { name: "Industrial Internet of Things (IIoT)", href: "/capabilities/iiot" },
      { name: "Cybersecurity", href: "/capabilities/cybersecurity" }
    ]
  },
  "industrial-data-platforms": {
    slug: "industrial-data-platforms",
    category: "DIGITAL TRANSFORMATION",
    title: "Industrial Data Platforms",
    sub: "Collect, contextualize, and unify data from every asset and system into an industrial data platform built for analytics and AI.",
    challenge: "Industrial data is high-volume, high-speed, and scattered across historians, sensors, and systems — impossible to use without the right foundation.",
    solution: "We design and implement industrial data platforms — historians, unified namespaces, and data pipelines — that make operational data clean, contextual, and ready for intelligence.",
    keyCapabilities: [
      "Industrial data architecture",
      "Historian & time-series management",
      "Unified Namespace & data modeling",
      "Real-time & batch pipelines",
      "Data governance & quality",
      "Analytics & AI enablement"
    ],
    steps: [
      { num: "01", title: "Collect", desc: "Ingest time-series telemetry from historians and sensors." },
      { num: "02", title: "Contextualize", desc: "Align streams with ISA-95 model structures." },
      { num: "03", title: "Unify", desc: "Store consolidated datasets in reliable pipelines." },
      { num: "04", title: "Activate", desc: "Expose clean database sources to BI and AI platforms." }
    ],
    signatureKey: "industrial-data-platforms",
    outcomes: ["Trusted data", "Faster analytics", "A scalable foundation", "AI-ready operations"],
    industries: ["Industrial Manufacturing", "Oil & Gas", "Power & Utilities", "Semiconductor", "Consumer Packaged Goods"],
    related: [
      { name: "Artificial Intelligence & Analytics", href: "/capabilities/ai-analytics" },
      { name: "OT / IT Integration", href: "/capabilities/ot-it-integration" },
      { name: "Cloud & Infrastructure", href: "/capabilities/cloud-infrastructure" }
    ]
  },
  "ai-analytics": {
    slug: "ai-analytics",
    category: "AI & INTELLIGENCE",
    title: "Artificial Intelligence & Analytics",
    sub: "Turn industrial data into predictions, insights, and action — from predictive maintenance to yield and quality optimization.",
    challenge: "Operations generate more data than teams can analyze — and problems are often found after they've already cost time, money, or safety.",
    solution: "DHGsoft applies AI and advanced analytics to industrial data to predict failures, optimize processes, and surface insights that improve performance every day.",
    keyCapabilities: [
      "Predictive & prescriptive maintenance",
      "Process & yield optimization",
      "Quality & anomaly detection",
      "Energy & efficiency analytics",
      "Operational dashboards & KPIs",
      "ML model deployment (MLOps)"
    ],
    steps: [
      { num: "01", title: "Ingest", desc: "Load clean operations data from time-series platforms." },
      { num: "02", title: "Model", desc: "Train machine learning predictors on specific run profiles." },
      { num: "03", title: "Predict", desc: "Detect anomaly deviations before breakdowns occur." },
      { num: "04", title: "Act", desc: "Deliver prescriptive actions to operators in real time." }
    ],
    signatureKey: "ai-analytics",
    outcomes: ["Less unplanned downtime", "Higher yield", "Better quality", "Lower cost"],
    industries: ["Industrial Manufacturing", "Semiconductor", "Automotive", "Chemical Manufacturing", "Power & Utilities"],
    related: [
      { name: "Industrial Data Platforms", href: "/capabilities/industrial-data-platforms" },
      { name: "Industrial Internet of Things (IIoT)", href: "/capabilities/iiot" },
      { name: "Digital Engineering Services", href: "/capabilities/digital-engineering" }
    ]
  },
  "iiot": {
    slug: "iiot",
    category: "AI & INTELLIGENCE",
    title: "Industrial Internet of Things (IIoT)",
    sub: "Connect, monitor, and manage industrial assets at scale with edge computing and real-time device telemetry.",
    challenge: "Critical assets are often unmonitored or disconnected — and sending all data to the cloud is slow, costly, and impractical.",
    solution: "We build IIoT solutions with intelligent edge computing that connect assets, process data where it's created, and stream the right insights to the cloud.",
    keyCapabilities: [
      "Asset connectivity & sensorization",
      "Edge computing & analytics",
      "Device telemetry & monitoring",
      "Edge-to-cloud streaming",
      "Remote asset management",
      "Digital twin enablement"
    ],
    steps: [
      { num: "01", title: "Connect", desc: "Link machine logic nodes to edge hardware sensors." },
      { num: "02", title: "Sense", desc: "Log vibration, heat, and process pressure telemetry." },
      { num: "03", title: "Process at the Edge", desc: "Filter and analyze high-frequency signals locally." },
      { num: "04", title: "Stream", desc: "Upload condensed diagnostics metrics securely to cloud." }
    ],
    signatureKey: "iiot",
    outcomes: ["Real-time visibility", "Faster response", "Lower bandwidth cost", "Remote control"],
    industries: ["Industrial Manufacturing", "Oil & Gas", "Water & Wastewater Management", "Mining & Metals", "Power & Utilities"],
    related: [
      { name: "Industrial Data Platforms", href: "/capabilities/industrial-data-platforms" },
      { name: "Artificial Intelligence & Analytics", href: "/capabilities/ai-analytics" },
      { name: "Cloud & Infrastructure", href: "/capabilities/cloud-infrastructure" }
    ]
  },
  "digital-engineering": {
    slug: "digital-engineering",
    category: "DIGITAL ENGINEERING",
    title: "Digital Engineering Services",
    sub: "Custom software, integrations, and digital solutions engineered specifically for industrial environments.",
    challenge: "Off-the-shelf software rarely fits the realities of industrial operations — and generic developers don't understand the plant floor.",
    solution: "DHGsoft builds custom industrial software and integrations — from applications to APIs — engineered by teams who understand both code and operations.",
    keyCapabilities: [
      "Custom industrial application development",
      "System & API integration",
      "Legacy modernization",
      "Industrial UI/UX & dashboards",
      "DevOps & continuous delivery",
      "Solution architecture & consulting"
    ],
    steps: [
      { num: "01", title: "Discover", desc: "Determine business workflows and mechanical bounds." },
      { num: "02", title: "Design", desc: "Architect custom application schemas and API endpoints." },
      { num: "03", title: "Build", desc: "Code production packages with secure industrial guidelines." },
      { num: "04", title: "Deliver", desc: "Deploy application tools with continuous delivery." }
    ],
    signatureKey: "digital-engineering",
    outcomes: ["Fit-for-purpose solutions", "Faster delivery", "Lower maintenance", "Future-ready code"],
    industries: ["Industrial Manufacturing", "Automotive", "Life Sciences", "Data Centres", "EPC", "Agriculture"],
    related: [
      { name: "Enterprise Applications", href: "/capabilities/enterprise-applications" },
      { name: "OT / IT Integration", href: "/capabilities/ot-it-integration" },
      { name: "Industrial Data Platforms", href: "/capabilities/industrial-data-platforms" }
    ]
  },
  "enterprise-applications": {
    slug: "enterprise-applications",
    category: "DIGITAL ENGINEERING",
    title: "Enterprise Applications",
    sub: "Implement and integrate ERP, MES, and PLM systems that connect enterprise planning with plant-floor execution.",
    challenge: "Enterprise systems and plant operations often run disconnected — creating blind spots between what's planned and what's produced.",
    solution: "We implement and integrate enterprise applications — ERP, MES, PLM — and connect them to operations for a single, synchronized view from order to output.",
    keyCapabilities: [
      "ERP implementation & integration",
      "MES / MOM deployment",
      "PLM implementation",
      "Enterprise-to-plant integration",
      "Application modernization",
      "Managed application support"
    ],
    steps: [
      { num: "01", title: "Assess", desc: "Evaluate existing ERP structures and manufacturing logic." },
      { num: "02", title: "Configure", desc: "Tailor system profiles to match specific factory metrics." },
      { num: "03", title: "Integrate", desc: "Connect shop-floor MES workflows with top-floor ERP nodes." },
      { num: "04", title: "Optimize", desc: "Audit data synchronization to improve production efficiency." }
    ],
    signatureKey: "enterprise-applications",
    outcomes: ["Synchronized operations", "Better planning", "Full traceability", "Greater efficiency"],
    industries: ["Industrial Manufacturing", "Automotive", "Life Sciences", "Semiconductor", "Consumer Packaged Goods"],
    related: [
      { name: "Digital Engineering Services", href: "/capabilities/digital-engineering" },
      { name: "OT / IT Integration", href: "/capabilities/ot-it-integration" },
      { name: "Cloud & Infrastructure", href: "/capabilities/cloud-infrastructure" }
    ]
  },
  "cloud-infrastructure": {
    slug: "cloud-infrastructure",
    category: "CLOUD & INFRASTRUCTURE",
    title: "Cloud & Infrastructure",
    sub: "Secure, scalable hybrid cloud and infrastructure engineered for mission-critical industrial operations.",
    challenge: "Industrial workloads need the scale of the cloud without sacrificing the reliability, latency, and security that critical operations demand.",
    solution: "We design and manage hybrid cloud and infrastructure — combining cloud scale with edge and on-prem reliability — built for industrial uptime and security.",
    keyCapabilities: [
      "Hybrid & multi-cloud architecture",
      "Cloud migration & modernization",
      "Edge & on-prem infrastructure",
      "Industrial workload optimization",
      "Infrastructure as Code & automation",
      "Cloud cost & performance management"
    ],
    steps: [
      { num: "01", title: "Assess", desc: "Audit compute requirements, local latency, and safety constraints." },
      { num: "02", title: "Architect", desc: "Design hybrid layouts across on-prem nodes and cloud clouds." },
      { num: "03", title: "Migrate", desc: "Move core workloads using infrastructure-as-code automation." },
      { num: "04", title: "Operate", desc: "Monitor system uptime, latency benchmarks, and hosting costs." }
    ],
    signatureKey: "cloud-infrastructure",
    outcomes: ["Scalability", "Reliability", "Security", "Cost efficiency"],
    industries: ["Data Centres", "Industrial Manufacturing", "Power & Utilities", "Water & Wastewater Management"],
    related: [
      { name: "Cybersecurity", href: "/capabilities/cybersecurity" },
      { name: "Industrial Data Platforms", href: "/capabilities/industrial-data-platforms" },
      { name: "Managed Services", href: "/capabilities/managed-services" }
    ]
  },
  "cybersecurity": {
    slug: "cybersecurity",
    category: "CLOUD & INFRASTRUCTURE",
    title: "Cybersecurity",
    sub: "Protect operations, data, and people with zero-trust cybersecurity engineered for OT and IT environments.",
    challenge: "Connected operations create new attack surfaces — and a single breach can halt production, endanger safety, or compromise critical infrastructure.",
    solution: "DHGsoft secures industrial environments with zero-trust architecture, OT/IT segmentation, and continuous monitoring — protecting operations end to end.",
    keyCapabilities: [
      "OT/IT security assessment",
      "Zero-trust architecture",
      "Network segmentation & monitoring",
      "Threat detection & response",
      "Secure remote access",
      "Security standards alignment"
    ],
    steps: [
      { num: "01", title: "Assess", desc: "Audit active network entries and verify compliance postures." },
      { num: "02", title: "Protect", desc: "Configure boundary segmentation and zero-trust permissions." },
      { num: "03", title: "Detect", desc: "Monitor data flows for anomaly signals or intrusion triggers." },
      { num: "04", title: "Respond", desc: "Execute automated threat isolation and patch security corridors." }
    ],
    signatureKey: "cybersecurity",
    outcomes: ["Reduced risk", "Protected uptime", "Secure data", "Compliance readiness"],
    industries: ["Power & Utilities", "Oil & Gas", "Water & Wastewater Management", "Industrial Manufacturing", "Data Centres"],
    related: [
      { name: "OT / IT Integration", href: "/capabilities/ot-it-integration" },
      { name: "Cloud & Infrastructure", href: "/capabilities/cloud-infrastructure" },
      { name: "Managed Services", href: "/capabilities/managed-services" }
    ]
  },
  "managed-services": {
    slug: "managed-services",
    category: "CLOUD & INFRASTRUCTURE",
    title: "Managed Services",
    sub: "Keep your digital operations running with 24/7/365 monitoring, support, and continuous optimization.",
    challenge: "Digital systems don't stop after go-live — they need constant monitoring, support, and improvement that internal teams can't always sustain.",
    solution: "DHGsoft provides managed services — round-the-clock monitoring, support, and optimization — so your operations stay reliable, secure, and continuously improving.",
    keyCapabilities: [
      "24/7/365 monitoring & support",
      "Application & infrastructure management",
      "OT/IT operations support",
      "Performance & optimization",
      "Incident & problem management",
      "Continuous improvement"
    ],
    steps: [
      { num: "01", title: "Onboard", desc: "Audit software packages, access rights, and SLA parameters." },
      { num: "02", title: "Monitor", desc: "Log active processes and track threshold alerts." },
      { num: "03", title: "Support", desc: "Resolve incoming service calls across remote time zones." },
      { num: "04", title: "Optimize", desc: "Apply updates, secure systems, and improve latency metrics." }
    ],
    signatureKey: "managed-services",
    outcomes: ["Maximized uptime", "Faster resolution", "Lower cost", "Continuous improvement"],
    industries: ["Industrial Manufacturing", "Power & Utilities", "Water & Wastewater Management", "Mining & Metals", "Automotive"],
    related: [
      { name: "Cloud & Infrastructure", href: "/capabilities/cloud-infrastructure" },
      { name: "Cybersecurity", href: "/capabilities/cybersecurity" },
      { name: "Industrial Data Platforms", href: "/capabilities/industrial-data-platforms" }
    ]
  }
};
