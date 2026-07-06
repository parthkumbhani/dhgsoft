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
  
  // v2 Image properties
  heroImage: { src: string; alt: string };
  challengeImage: { src: string; alt: string };
  featureImage: { src: string; alt: string };
  inActionImages: { src: string; alt: string }[];
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
    ],
    heroImage: {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
      alt: "Futuristic smart factory overview, wide"
    },
    challengeImage: {
      src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      alt: "Engineers reviewing digital dashboards on a factory floor"
    },
    featureImage: {
      src: "https://images.unsplash.com/photo-1537462715879-360eeb61a0bc?auto=format&fit=crop&w=800&q=80",
      alt: "Manufacturing engineer reviewing operational workflows"
    },
    inActionImages: [
      {
        src: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=600&q=80",
        alt: "Modern connected factory floor with screens"
      },
      {
        src: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=600&q=80",
        alt: "Executive reviewing operations data on a tablet in a plant"
      }
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
    ],
    heroImage: {
      src: "https://images.unsplash.com/photo-1581094751156-4d7a8d56b0d9?auto=format&fit=crop&w=1200&q=80",
      alt: "Industrial network engineer working on the plant floor"
    },
    challengeImage: {
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
      alt: "Operators monitoring SCADA screens in a control room"
    },
    featureImage: {
      src: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=800&q=80",
      alt: "Control engineering review"
    },
    inActionImages: [
      {
        src: "https://images.unsplash.com/photo-1597491853412-f22291c4ddb3?auto=format&fit=crop&w=600&q=80",
        alt: "PLC control panel and wiring close-up"
      },
      {
        src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
        alt: "Server racks connected to factory equipment"
      }
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
    ],
    heroImage: {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      alt: "Industrial analytics data visualization on large screens"
    },
    challengeImage: {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      alt: "Engineer analyzing time-series data on monitors"
    },
    featureImage: {
      src: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?auto=format&fit=crop&w=800&q=80",
      alt: "Industrial dataset management diagram"
    },
    inActionImages: [
      {
        src: "https://images.unsplash.com/photo-1548345680-f5475ea5df84?auto=format&fit=crop&w=600&q=80",
        alt: "Data server hall, industrial environment"
      },
      {
        src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
        alt: "Operations analytics dashboard wall"
      }
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
    ],
    heroImage: {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      alt: "Abstract AI and industrial analytics visualization"
    },
    challengeImage: {
      src: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=800&q=80",
      alt: "Data scientist working with charts in industrial setting"
    },
    featureImage: {
      src: "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&w=800&q=80",
      alt: "Model training graphics visualization"
    },
    inActionImages: [
      {
        src: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80",
        alt: "Predictive maintenance sensor on a machine"
      },
      {
        src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
        alt: "Machine-vision camera inspecting products"
      }
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
    ],
    heroImage: {
      src: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1200&q=80",
      alt: "Connected industrial IoT sensors and devices"
    },
    challengeImage: {
      src: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
      alt: "Edge computing device mounted on factory equipment"
    },
    featureImage: {
      src: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&w=800&q=80",
      alt: "Telemetry collection interface"
    },
    inActionImages: [
      {
        src: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=600&q=80",
        alt: "Wireless sensor on industrial equipment"
      },
      {
        src: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80",
        alt: "Field technician with a tablet monitoring assets"
      }
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
    ],
    heroImage: {
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
      alt: "Software developers building industrial software solutions"
    },
    challengeImage: {
      src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
      alt: "Engineering team whiteboard planning session"
    },
    featureImage: {
      src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80",
      alt: "Dual coding monitors interface layout"
    },
    inActionImages: [
      {
        src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
        alt: "Custom software dashboard on a screen"
      },
      {
        src: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=600&q=80",
        alt: "Developer coding on dual monitors setup"
      }
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
    ],
    heroImage: {
      src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      alt: "Enterprise business software and operations overview"
    },
    challengeImage: {
      src: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=800&q=80",
      alt: "Business team using enterprise software in office"
    },
    featureImage: {
      src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
      alt: "Integrated systems layout dashboard blueprint"
    },
    inActionImages: [
      {
        src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
        alt: "Manufacturing execution system (MES) screen"
      },
      {
        src: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=600&q=80",
        alt: "Supply-chain planning dashboard interface"
      }
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
    ],
    heroImage: {
      src: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=1200&q=80",
      alt: "Hybrid cloud data center servers glowing"
    },
    challengeImage: {
      src: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=800&q=80",
      alt: "Cloud engineers working inside server room"
    },
    featureImage: {
      src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      alt: "Edge compute hardware installations"
    },
    inActionImages: [
      {
        src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
        alt: "Data center aisle with network cables layout"
      },
      {
        src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80",
        alt: "Cloud architecture screen demonstration with team"
      }
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
    ],
    heroImage: {
      src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
      alt: "Cybersecurity operations center with active terminal screens"
    },
    challengeImage: {
      src: "https://images.unsplash.com/photo-1624969862644-791f3dc98927?auto=format&fit=crop&w=800&q=80",
      alt: "Security analyst monitoring threats"
    },
    featureImage: {
      src: "https://images.unsplash.com/photo-1562813733-b31f71025d54?auto=format&fit=crop&w=800&q=80",
      alt: "Zero trust network configurations blueprint"
    },
    inActionImages: [
      {
        src: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80",
        alt: "Digital network security lock lock concept screen"
      },
      {
        src: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&w=600&q=80",
        alt: "Engineer securing an industrial control system PLC cabinet"
      }
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
    ],
    heroImage: {
      src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80",
      alt: "24/7 operations support center with monitoring walls"
    },
    challengeImage: {
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
      alt: "Support engineers monitoring dashboards as a team"
    },
    featureImage: {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      alt: "Global operations monitoring dashboard overview"
    },
    inActionImages: [
      {
        src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80",
        alt: "Global operations center with a world map"
      },
      {
        src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=600&q=80",
        alt: "Technician on a remote support headset"
      }
    ]
  }
};
