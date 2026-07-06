// src/lib/industries.ts

export interface HUDNode {
  id: string;
  x: number; // percentage
  y: number; // percentage
  label: string;
  value?: string;
  pulseSpeed?: number;
}

export interface IndustryImage {
  src: string;
  alt: string;
}

export interface IndustryData {
  slug: string;
  title: string;
  sub: string;
  landscape: string;
  challenges: string[];
  howWeHelp: string[];
  connectedAssets: string[];
  useCases: string[];
  relevantCapabilities: { name: string; href: string }[];
  outcomes: string[];
  related: { name: string; href: string }[];
  image: IndustryImage; // Cinematic Photo Hero
  overviewImage: IndustryImage; // The Landscape supporting image
  supportImage: IndustryImage; // Challenges supporting image
  gallery: IndustryImage[]; // In Focus 3-4 images
  iconName: string;
  category: string;
  hudNodes: HUDNode[];
}

export const INDUSTRIES_MAP: Record<string, IndustryData> = {
  "industrial-manufacturing": {
    slug: "industrial-manufacturing",
    title: "Industrial Manufacturing",
    category: "Smart Operations",
    sub: "Transform factories into connected, intelligent operations — with real-time visibility, predictive quality, and optimized production from line to enterprise.",
    landscape: "Manufacturers face pressure to raise output, quality, and flexibility while managing aging equipment, labor gaps, and rising costs.",
    challenges: [
      "Disconnected machines & systems",
      "Unplanned downtime",
      "Quality variability",
      "Limited real-time visibility"
    ],
    howWeHelp: [
      "Smart factory & OEE platforms",
      "Predictive maintenance setups",
      "MES/ERP operational integration",
      "Unified production data pipelines"
    ],
    connectedAssets: ["Assembly Line", "Robotic Arms", "IIoT Sensors", "MES Server", "ERP Layer", "Operator Dashboard"],
    useCases: [
      "Smart factory operations",
      "OEE improvement",
      "Predictive maintenance",
      "Digital work instructions"
    ],
    relevantCapabilities: [
      { name: "Industrial Digital Transformation", href: "/capabilities/industrial-digital-transformation" },
      { name: "Industrial Internet of Things (IIoT)", href: "/capabilities/iiot" },
      { name: "Artificial Intelligence & Analytics", href: "/capabilities/ai-analytics" },
      { name: "Enterprise Applications", href: "/capabilities/enterprise-applications" }
    ],
    outcomes: [
      "[XX]% Higher OEE",
      "[XX]% Less downtime",
      "[XX]% Better quality yield",
      "[XX]% Faster line changeovers"
    ],
    related: [
      { name: "Automotive", href: "/industries/automotive" },
      { name: "Semiconductor", href: "/industries/semiconductor" },
      { name: "Consumer Packaged Goods (CPG)", href: "/industries/consumer-packaged-goods" }
    ],
    image: {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
      alt: "smart factory robotic assembly, wide"
    },
    overviewImage: {
      src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      alt: "engineer with a tablet on a factory floor"
    },
    supportImage: {
      src: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80",
      alt: "automated production line with robots"
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1612538498456-e861df91d4d0?auto=format&fit=crop&w=600&q=80",
        alt: "CNC machine close-up"
      },
      {
        src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=600&q=80",
        alt: "factory workers collaborating"
      },
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
        alt: "industrial dashboard screen"
      },
      {
        src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80",
        alt: "parts on a conveyor"
      }
    ],
    iconName: "Factory",
    hudNodes: [
      { id: "robotic-line-1", x: 25, y: 35, label: "Cell 1 Active Status", value: "98.4%", pulseSpeed: 2 },
      { id: "hydraulic-rpm", x: 60, y: 45, label: "Line Speed Monitor", value: "1420 RPM", pulseSpeed: 2.5 },
      { id: "temp-ambient", x: 75, y: 25, label: "Ambient Tool Temp", value: "68.2°C", pulseSpeed: 3 }
    ]
  },
  "life-sciences": {
    slug: "life-sciences",
    title: "Life Sciences",
    category: "Precision Compliance",
    sub: "Digitize and connect regulated manufacturing — with batch traceability, compliance, and quality built into every step.",
    landscape: "Life sciences manufacturers must meet strict regulatory requirements while improving efficiency and speed to market.",
    challenges: [
      "Regulatory compliance (GxP)",
      "Batch record integrity",
      "Data silos",
      "Validation burden"
    ],
    howWeHelp: [
      "Electronic batch records (EBR)",
      "Compliant data platforms",
      "Track & trace serialization",
      "Validated integration architectures"
    ],
    connectedAssets: ["Cleanroom Env", "Batch Reactor", "Calibration Sensors", "EBR Engine", "Quality Management", "Audit Pipeline"],
    useCases: [
      "Regulatory compliance GxP",
      "Batch traceability",
      "EBR / MES implementation",
      "Cold-chain monitoring"
    ],
    relevantCapabilities: [
      { name: "Enterprise Applications", href: "/capabilities/enterprise-applications" },
      { name: "OT / IT Integration", href: "/capabilities/ot-it-integration" },
      { name: "Industrial Data Platforms", href: "/capabilities/industrial-data-platforms" },
      { name: "Cybersecurity", href: "/capabilities/cybersecurity" }
    ],
    outcomes: [
      "100% GxP Compliance Assurance",
      "[XX]% Faster batch release cycles",
      "Zero-dampened Data Integrity",
      "[XX]% Improved overall validation efficiency"
    ],
    related: [
      { name: "Semiconductor", href: "/industries/semiconductor" },
      { name: "Chemical Manufacturing", href: "/industries/chemical-manufacturing" },
      { name: "Food & Beverages", href: "/industries/food-beverages" }
    ],
    image: {
      src: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=1200&q=80",
      alt: "modern pharmaceutical manufacturing facility"
    },
    overviewImage: {
      src: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
      alt: "pharmaceutical bioreactor / batch processing equipment"
    },
    supportImage: {
      src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
      alt: "automated pharmaceutical packaging line"
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80",
        alt: "scientist working in a pharmaceutical laboratory"
      },
      {
        src: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=600&q=80",
        alt: "pharmaceutical cleanroom production line"
      },
      {
        src: "https://images.unsplash.com/photo-1618572181658-c5989d3d37a7?auto=format&fit=crop&w=600&q=80",
        alt: "vials / vaccine filling line"
      },
      {
        src: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=600&q=80",
        alt: "quality-control technician with a microscope"
      }
    ],
    iconName: "FlaskConical",
    hudNodes: [
      { id: "reactor-psi", x: 30, y: 40, label: "Reactor Pressure", value: "98.4%", pulseSpeed: 2 },
      { id: "cleanroom-particulate", x: 50, y: 55, label: "Air Compliance Level", value: "ISO-5 Clean", pulseSpeed: 1.8 },
      { id: "batch-stage", x: 70, y: 30, label: "Batch Phase State", value: "EBR VERIFIED", pulseSpeed: 3 }
    ]
  },
  "automotive": {
    slug: "automotive",
    title: "Automotive",
    category: "High-Volume Assembly",
    sub: "Optimize automotive manufacturing — from OEM assembly lines to supplier networks — with connected operations and real-time intelligence.",
    landscape: "Automakers face intense pressure for quality, throughput, and flexibility as they electrify and digitize.",
    challenges: [
      "Line balancing & throughput",
      "Quality & traceability",
      "Complex supplier networks",
      "Changeover speed"
    ],
    howWeHelp: [
      "Line optimization & OEE",
      "Quality & traceability systems",
      "Connected supply integrations",
      "Predictive maintenance models"
    ],
    connectedAssets: ["Welding Robots", "Chassis Carrier", "Quality Camera", "Telemetry Gateway", "Supplier API", "Inventory DB"],
    useCases: [
      "OEM assembly line optimization",
      "Traceability & recall control",
      "Predictive maintenance",
      "Digital twins"
    ],
    relevantCapabilities: [
      { name: "Artificial Intelligence & Analytics", href: "/capabilities/ai-analytics" },
      { name: "Industrial Internet of Things (IIoT)", href: "/capabilities/iiot" },
      { name: "Industrial Digital Transformation", href: "/capabilities/industrial-digital-transformation" },
      { name: "Enterprise Applications", href: "/capabilities/enterprise-applications" }
    ],
    outcomes: [
      "[XX]% Higher production throughput",
      "[XX]% Reduction in defects",
      "100% Full-component traceability",
      "[XX]% Reduction in line downtime"
    ],
    related: [
      { name: "Industrial Manufacturing", href: "/industries/industrial-manufacturing" },
      { name: "Semiconductor", href: "/industries/semiconductor" },
      { name: "Consumer Packaged Goods (CPG)", href: "/industries/consumer-packaged-goods" }
    ],
    image: {
      src: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
      alt: "car assembly line with welding robots"
    },
    overviewImage: {
      src: "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=800&q=80",
      alt: "automotive engineer inspecting a car body"
    },
    supportImage: {
      src: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
      alt: "robotic arms in car manufacturing"
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1504215680048-db15ff059678?auto=format&fit=crop&w=600&q=80",
        alt: "car chassis on the line"
      },
      {
        src: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80",
        alt: "automotive paint shop"
      },
      {
        src: "https://images.unsplash.com/photo-1558441719-ff34b0524a24?auto=format&fit=crop&w=600&q=80",
        alt: "EV battery assembly"
      },
      {
        src: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=600&q=80",
        alt: "vehicle quality inspection"
      }
    ],
    iconName: "Car",
    hudNodes: [
      { id: "welder-duty", x: 28, y: 32, label: "Robot Arm Load", value: "98.2%", pulseSpeed: 2 },
      { id: "chassis-tag", x: 55, y: 48, label: "Chassis Tracker RFID", value: "FRAME-OK", pulseSpeed: 2.2 },
      { id: "paint-ambient", x: 72, y: 22, label: "Paint Oven Temp", value: "68.4°C", pulseSpeed: 2.8 }
    ]
  },
  "semiconductor": {
    slug: "semiconductor",
    title: "Semiconductor",
    category: "Sub-Micron Precision",
    sub: "Maximize yield and precision in semiconductor manufacturing — with cleanroom monitoring, advanced analytics, and connected fab operations.",
    landscape: "Fabs demand extreme precision and yield, where tiny variations cost millions.",
    challenges: [
      "Yield optimization",
      "Cleanroom & environmental control",
      "Massive data volumes",
      "Equipment precision"
    ],
    howWeHelp: [
      "Yield analytics pipelines",
      "Cleanroom environmental monitoring",
      "Fab data platforms",
      "Predictive tool health diagnostics"
    ],
    connectedAssets: ["Wafer Stepper", "Cleanroom HVAC", "Gas Telemetry", "IoT Edge Hub", "SPC Engine", "Analytics Dashboard"],
    useCases: [
      "Yield optimization",
      "Cleanroom environmental control",
      "Advanced process control",
      "Equipment tool health"
    ],
    relevantCapabilities: [
      { name: "Artificial Intelligence & Analytics", href: "/capabilities/ai-analytics" },
      { name: "Industrial Data Platforms", href: "/capabilities/industrial-data-platforms" },
      { name: "Industrial Internet of Things (IIoT)", href: "/capabilities/iiot" },
      { name: "OT / IT Integration", href: "/capabilities/ot-it-integration" }
    ],
    outcomes: [
      "[XX]% Higher wafer yield",
      "Sub-micron Tighter Control",
      "Real-time Fab Insight",
      "Precision Equipment Uptime"
    ],
    related: [
      { name: "Life Sciences", href: "/industries/life-sciences" },
      { name: "Industrial Manufacturing", href: "/industries/industrial-manufacturing" },
      { name: "Automotive", href: "/industries/automotive" }
    ],
    image: {
      src: "https://images.unsplash.com/photo-1624701928517-44c8ac49d93c?auto=format&fit=crop&w=1200&q=80",
      alt: "semiconductor fab cleanroom with wafers"
    },
    overviewImage: {
      src: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=800&q=80",
      alt: "technician in a bunny suit in a cleanroom"
    },
    supportImage: {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      alt: "silicon wafer close-up"
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1591745038754-6903f888365f?auto=format&fit=crop&w=600&q=80",
        alt: "chip manufacturing equipment"
      },
      {
        src: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80",
        alt: "microchip macro"
      },
      {
        src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
        alt: "cleanroom corridor"
      },
      {
        src: "https://images.unsplash.com/photo-1631553127989-11c5f3b72bf8?auto=format&fit=crop&w=600&q=80",
        alt: "wafer inspection under microscope"
      }
    ],
    iconName: "Cpu",
    hudNodes: [
      { id: "stepper-vacuum", x: 22, y: 38, label: "Chamber Vacuum", value: "99.8%", pulseSpeed: 1.5 },
      { id: "wafer-scans", x: 52, y: 52, label: "Scanner Frequency", value: "50 Hz", pulseSpeed: 2.2 },
      { id: "airflow-velocity", x: 78, y: 28, label: "Laminar Flow Rate", value: "120 m³/h", pulseSpeed: 2.5 }
    ]
  },
  "food-beverages": {
    slug: "food-beverages",
    title: "Food & Beverages",
    category: "High-Speed Hygiene",
    sub: "Ensure quality, safety, and efficiency in food & beverage manufacturing — with full traceability, recipe management, and connected lines.",
    landscape: "Producers must guarantee safety and traceability while running high-speed, high-mix operations.",
    challenges: [
      "Traceability & food safety",
      "Recipe & batch management",
      "Changeovers & OEE",
      "Compliance"
    ],
    howWeHelp: [
      "End-to-end track & trace",
      "Recipe batch control engines",
      "Line performance & OEE monitoring",
      "Automated compliance logs"
    ],
    connectedAssets: ["Filling Station", "Cap Sealer", "Scale Sensors", "Recipe Database", "Traceability Core", "Live Display"],
    useCases: [
      "Traceability",
      "Recipe management",
      "Batch control",
      "Manufacturing traceability"
    ],
    relevantCapabilities: [
      { name: "Enterprise Applications", href: "/capabilities/enterprise-applications" },
      { name: "Industrial Internet of Things (IIoT)", href: "/capabilities/iiot" },
      { name: "Industrial Data Platforms", href: "/capabilities/industrial-data-platforms" },
      { name: "Artificial Intelligence & Analytics", href: "/capabilities/ai-analytics" }
    ],
    outcomes: [
      "100% Food Safety Trace",
      "1-Click Recall Traceability",
      "[XX]% Higher overall OEE",
      "Automated Compliance Auditing"
    ],
    related: [
      { name: "Life Sciences", href: "/industries/life-sciences" },
      { name: "Consumer Packaged Goods (CPG)", href: "/industries/consumer-packaged-goods" },
      { name: "Chemical Manufacturing", href: "/industries/chemical-manufacturing" }
    ],
    image: {
      src: "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?auto=format&fit=crop&w=1200&q=80",
      alt: "beverage bottling line in a factory"
    },
    overviewImage: {
      src: "https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=800&q=80",
      alt: "food production quality check"
    },
    supportImage: {
      src: "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&w=800&q=80",
      alt: "automated food packaging line"
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=600&q=80",
        alt: "bottles on a conveyor"
      },
      {
        src: "https://images.unsplash.com/photo-1582298538104-fe2e74c27f59?auto=format&fit=crop&w=600&q=80",
        alt: "food processing equipment"
      },
      {
        src: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=600&q=80",
        alt: "beverage warehouse pallets"
      },
      {
        src: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&w=600&q=80",
        alt: "canning line"
      }
    ],
    iconName: "UtensilsCrossed",
    hudNodes: [
      { id: "filler-flow", x: 26, y: 36, label: "Filler Flow Volume", value: "120 m³/h", pulseSpeed: 2 },
      { id: "cap-check", x: 58, y: 50, label: "Sealer Pressure", value: "98.6%", pulseSpeed: 2.1 },
      { id: "cip-temp", x: 74, y: 24, label: "Sanitation Fluid Temp", value: "68.5°C", pulseSpeed: 3 }
    ]
  },
  "chemical-manufacturing": {
    slug: "chemical-manufacturing",
    title: "Chemical Manufacturing",
    category: "Hazardous Process Control",
    sub: "Improve safety, reliability, and efficiency in chemical processing — with real-time telemetry, process optimization, and connected operations.",
    landscape: "Chemical plants run complex, hazardous processes where safety and reliability are paramount.",
    challenges: [
      "Process safety",
      "Asset reliability",
      "Telemetry & monitoring",
      "Energy & efficiency"
    ],
    howWeHelp: [
      "Process safety event monitoring",
      "Predictive asset maintenance",
      "Real-time pipeline telemetry",
      "Energy usage optimization models"
    ],
    connectedAssets: ["Pressure Vessel", "Control Valve", "Safety Sensor", "SCADA Node", "Historian Database", "Operator Desk"],
    useCases: [
      "Process safety monitoring",
      "Telemetry aggregation",
      "Predictive maintenance",
      "Energy management"
    ],
    relevantCapabilities: [
      { name: "Industrial Internet of Things (IIoT)", href: "/capabilities/iiot" },
      { name: "OT / IT Integration", href: "/capabilities/ot-it-integration" },
      { name: "Artificial Intelligence & Analytics", href: "/capabilities/ai-analytics" },
      { name: "Cybersecurity", href: "/capabilities/cybersecurity" }
    ],
    outcomes: [
      "Safer Incident-Free Operations",
      "[XX]% Higher asset reliability",
      "[XX]% Reduction in energy loss",
      "Real-time Closed-Loop Control"
    ],
    related: [
      { name: "Oil & Gas", href: "/industries/oil-gas" },
      { name: "Life Sciences", href: "/industries/life-sciences" },
      { name: "Water & Wastewater", href: "/industries/water-wastewater" }
    ],
    image: {
      src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
      alt: "chemical plant with reactors and pipes at dusk"
    },
    overviewImage: {
      src: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80",
      alt: "engineer at a chemical control panel"
    },
    supportImage: {
      src: "https://images.unsplash.com/photo-1527018601619-a508a2be00cd?auto=format&fit=crop&w=800&q=80",
      alt: "industrial pipes and valves"
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1581093588401-f3c22d7a161b?auto=format&fit=crop&w=600&q=80",
        alt: "chemical storage tanks"
      },
      {
        src: "https://images.unsplash.com/photo-1574782091359-37f2a1488c5a?auto=format&fit=crop&w=600&q=80",
        alt: "plant safety inspection"
      },
      {
        src: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=600&q=80",
        alt: "process control room"
      },
      {
        src: "https://images.unsplash.com/photo-1532187863486-abf9d39d66e8?auto=format&fit=crop&w=600&q=80",
        alt: "chemical lab testing"
      }
    ],
    iconName: "TestTubes",
    hudNodes: [
      { id: "vessel-psi", x: 24, y: 34, label: "Reactor Pressure", value: "98.4%", pulseSpeed: 2 },
      { id: "feed-rate", x: 62, y: 48, label: "Feedstock Flow Rate", value: "120 m³/h", pulseSpeed: 2.2 },
      { id: "gas-temp", x: 76, y: 22, label: "Ambient Stack Temp", value: "68.1°C", pulseSpeed: 2.9 }
    ]
  },
  "oil-gas": {
    slug: "oil-gas",
    title: "Oil & Gas",
    category: "Remote Infrastructure",
    sub: "Monitor, optimize, and protect oil & gas operations — from pipelines to refineries — with connected assets and real-time intelligence.",
    landscape: "Oil & gas operations span remote, high-risk assets where downtime and safety incidents are costly.",
    challenges: [
      "Pipeline & asset monitoring",
      "Remote operations",
      "Safety & integrity",
      "Aging infrastructure"
    ],
    howWeHelp: [
      "Pipeline leak & leak risk telemetry",
      "Remote operation integrations",
      "Predictive structural integrity tools",
      "SCADA network modernization"
    ],
    connectedAssets: ["Remote Wellhead", "Flow Meter", "Subsea Valve", "Satellite Uplink", "SCADA Server", "Control Center"],
    useCases: [
      "Pipeline monitoring",
      "Asset performance analytics",
      "Remote site operations",
      "Integrity management"
    ],
    relevantCapabilities: [
      { name: "Industrial Internet of Things (IIoT)", href: "/capabilities/iiot" },
      { name: "OT / IT Integration", href: "/capabilities/ot-it-integration" },
      { name: "Cybersecurity", href: "/capabilities/cybersecurity" },
      { name: "Artificial Intelligence & Analytics", href: "/capabilities/ai-analytics" }
    ],
    outcomes: [
      "100% Pipeline Visibility",
      "Incident-Free Remote Ops",
      "[XX]% Reduction in leak response times",
      "Modernized Grid Resilience"
    ],
    related: [
      { name: "Chemical Manufacturing", href: "/industries/chemical-manufacturing" },
      { name: "Power & Utilities", href: "/industries/power-utilities" },
      { name: "Mining & Metals", href: "/industries/mining-metals" }
    ],
    image: {
      src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
      alt: "oil refinery pipelines at dusk"
    },
    overviewImage: {
      src: "https://images.unsplash.com/photo-1529932260967-af9d3a9792b8?auto=format&fit=crop&w=800&q=80",
      alt: "engineer inspecting a pipeline"
    },
    supportImage: {
      src: "https://images.unsplash.com/photo-1569420786523-cb879f972b21?auto=format&fit=crop&w=800&q=80",
      alt: "offshore oil platform"
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80",
        alt: "gas processing plant"
      },
      {
        src: "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?auto=format&fit=crop&w=600&q=80",
        alt: "pipeline valves"
      },
      {
        src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
        alt: "oil & gas control room"
      },
      {
        src: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=600&q=80",
        alt: "refinery storage tanks"
      }
    ],
    iconName: "Fuel",
    hudNodes: [
      { id: "pipe-flow", x: 28, y: 38, label: "Crude Flow Velocity", value: "120 m³/h", pulseSpeed: 2.2 },
      { id: "valve-backpressure", x: 60, y: 52, label: "Valve Feedback Loop", value: "98.5%", pulseSpeed: 2 },
      { id: "wellhead-temp", x: 74, y: 28, label: "Wellhead Head Temp", value: "68.2°C", pulseSpeed: 3 }
    ]
  },
  "power-utilities": {
    slug: "power-utilities",
    title: "Power & Utilities",
    category: "Grid Modernization",
    sub: "Modernize energy operations — from generation to grid — with smart grid management, real-time monitoring, and renewable integration.",
    landscape: "Utilities are modernizing grids, integrating renewables, and balancing reliability with sustainability.",
    challenges: [
      "Grid monitoring & reliability",
      "Renewable integration",
      "Aging infrastructure",
      "Demand management"
    ],
    howWeHelp: [
      "Smart grid & SCADA platforms",
      "Renewable & DER energy integration",
      "Predictive grid maintenance analytics",
      "Energy load forecasting tools"
    ],
    connectedAssets: ["Wind Turbine", "Substation Relay", "Smart Meter", "DER Gateway", "Grid Dispatcher", "Operations Room"],
    useCases: [
      "Smart grid management",
      "Substation automation",
      "Renewable telemetry",
      "Outage prevention"
    ],
    relevantCapabilities: [
      { name: "Industrial Internet of Things (IIoT)", href: "/capabilities/iiot" },
      { name: "OT / IT Integration", href: "/capabilities/ot-it-integration" },
      { name: "Artificial Intelligence & Analytics", href: "/capabilities/ai-analytics" },
      { name: "Cybersecurity", href: "/capabilities/cybersecurity" }
    ],
    outcomes: [
      "99.999% Grid Reliability",
      "Seamless DER Integration",
      "[XX]% Operational Efficiency",
      "Grid Outage Resilience"
    ],
    related: [
      { name: "Oil & Gas", href: "/industries/oil-gas" },
      { name: "Water & Wastewater", href: "/industries/water-wastewater" },
      { name: "Data Centres", href: "/industries/data-centres" }
    ],
    image: {
      src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
      alt: "electrical substation with transmission towers"
    },
    overviewImage: {
      src: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
      alt: "engineer at a grid control center"
    },
    supportImage: {
      src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
      alt: "wind and solar with power lines"
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80",
        alt: "power lines at sunset"
      },
      {
        src: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&w=600&q=80",
        alt: "substation transformer"
      },
      {
        src: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&w=600&q=80",
        alt: "renewable energy farm"
      },
      {
        src: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?auto=format&fit=crop&w=600&q=80",
        alt: "smart grid technology"
      }
    ],
    iconName: "Zap",
    hudNodes: [
      { id: "grid-frequency", x: 22, y: 32, label: "Grid Frequency Stabilizer", value: "50 Hz", pulseSpeed: 2 },
      { id: "transformer-load", x: 58, y: 44, label: "Substation Load Factor", value: "98.4%", pulseSpeed: 2.2 },
      { id: "terminal-temp", x: 72, y: 26, label: "Conductor Heat Monitor", value: "68.6°C", pulseSpeed: 2.8 }
    ]
  },
  "mining-metals": {
    slug: "mining-metals",
    title: "Mining & Metals",
    category: "Pit-to-Port Orchestration",
    sub: "Increase safety, productivity, and efficiency in mining & metals — with fleet automation, asset monitoring, and connected supply chains.",
    landscape: "Mining operates in harsh, remote environments where safety, uptime, and efficiency drive value.",
    challenges: [
      "Fleet & equipment management",
      "Safety in remote sites",
      "Supply chain visibility",
      "Asset uptime"
    ],
    howWeHelp: [
      "Fleet automation telemetry core",
      "Predictive machinery diagnostics",
      "Pit-to-port supply visibility",
      "Remote site environmental sensors"
    ],
    connectedAssets: ["Haul Truck", "Autonomous Drill", "Crusher Unit", "LTE Tower", "Mine Planning", "Remote Console"],
    useCases: [
      "Fleet automation",
      "Supply chain integration",
      "Asset monitoring",
      "Remote operations"
    ],
    relevantCapabilities: [
      { name: "Industrial Internet of Things (IIoT)", href: "/capabilities/iiot" },
      { name: "Artificial Intelligence & Analytics", href: "/capabilities/ai-analytics" },
      { name: "OT / IT Integration", href: "/capabilities/ot-it-integration" },
      { name: "Managed Services", href: "/capabilities/managed-services" }
    ],
    outcomes: [
      "Safer Remote Operations",
      "[XX]% Higher productivity yield",
      "[XX]% Machine uptime increase",
      "End-to-End Supply Visibility"
    ],
    related: [
      { name: "Oil & Gas", href: "/industries/oil-gas" },
      { name: "Chemical Manufacturing", href: "/industries/chemical-manufacturing" },
      { name: "Power & Utilities", href: "/industries/power-utilities" }
    ],
    image: {
      src: "https://images.unsplash.com/photo-1601597111158-2fceff270190?auto=format&fit=crop&w=1200&q=80",
      alt: "open-pit mine with haul trucks"
    },
    overviewImage: {
      src: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80",
      alt: "mining engineer with equipment"
    },
    supportImage: {
      src: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&w=800&q=80",
      alt: "mining excavator"
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80",
        alt: "haul truck loading ore"
      },
      {
        src: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=600&q=80",
        alt: "ore conveyor"
      },
      {
        src: "https://images.unsplash.com/photo-1513828729020-0ac833df5f93?auto=format&fit=crop&w=600&q=80",
        alt: "steel mill metals"
      },
      {
        src: "https://images.unsplash.com/photo-1618042164219-62c820f10723?auto=format&fit=crop&w=600&q=80",
        alt: "mine control room"
      }
    ],
    iconName: "Mountain",
    hudNodes: [
      { id: "shovel-engine", x: 26, y: 36, label: "Shovel Engine speed", value: "1420 RPM", pulseSpeed: 2.5 },
      { id: "haulage-oee", x: 62, y: 48, label: "Fleet Availability", value: "98.2%", pulseSpeed: 2.1 },
      { id: "shaft-humidity", x: 76, y: 22, label: "Ventilation Airflow", value: "120 m³/h", pulseSpeed: 3 }
    ]
  },
  "water-wastewater": {
    slug: "water-wastewater",
    title: "Water & Wastewater",
    category: "Flow & Quality Safety",
    sub: "Optimize water and wastewater operations — with flow analytics, treatment monitoring, and connected distribution networks.",
    landscape: "Water utilities must ensure quality and availability while managing aging infrastructure and tight budgets.",
    challenges: [
      "Flow & quality monitoring",
      "Treatment optimization",
      "Leak & loss detection",
      "Regulatory compliance"
    ],
    howWeHelp: [
      "Flow rate & quality analytics",
      "Treatment telemetry control",
      "Distribution leak detection algorithms",
      "SCADA network updates"
    ],
    connectedAssets: ["Aeration Tank", "High-Flow Pump", "pH Sensor", "RTU Node", "SCADA Platform", "Quality DB"],
    useCases: [
      "Flow analytics",
      "Treatment monitoring",
      "Distribution telemetry",
      "Quality compliance"
    ],
    relevantCapabilities: [
      { name: "Industrial Internet of Things (IIoT)", href: "/capabilities/iiot" },
      { name: "OT / IT Integration", href: "/capabilities/ot-it-integration" },
      { name: "Artificial Intelligence & Analytics", href: "/capabilities/ai-analytics" },
      { name: "Industrial Data Platforms", href: "/capabilities/industrial-data-platforms" }
    ],
    outcomes: [
      "Assured Water Quality",
      "[XX]% Operational energy savings",
      "[XX]% Loss reduction",
      "100% Water Safety Compliance"
    ],
    related: [
      { name: "Power & Utilities", href: "/industries/power-utilities" },
      { name: "Chemical Manufacturing", href: "/industries/chemical-manufacturing" },
      { name: "Oil & Gas", href: "/industries/oil-gas" }
    ],
    image: {
      src: "https://images.unsplash.com/photo-1584267326134-639a0ff99764?auto=format&fit=crop&w=1200&q=80",
      alt: "water treatment plant aeration tanks, aerial"
    },
    overviewImage: {
      src: "https://images.unsplash.com/photo-1581092334842-7c3ac3a49000?auto=format&fit=crop&w=800&q=80",
      alt: "operator monitoring water treatment"
    },
    supportImage: {
      src: "https://images.unsplash.com/photo-1615228690186-107b3858cb5a?auto=format&fit=crop&w=800&q=80",
      alt: "large pumping station pipes"
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1574515598835-1f9e2b17a1f5?auto=format&fit=crop&w=600&q=80",
        alt: "clarifier tanks"
      },
      {
        src: "https://images.unsplash.com/photo-1581092520779-ee22621dd758?auto=format&fit=crop&w=600&q=80",
        alt: "water quality lab"
      },
      {
        src: "https://images.unsplash.com/photo-1621905230232-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
        alt: "distribution pipes"
      },
      {
        src: "https://images.unsplash.com/photo-1603831872111-e22621dd758c?auto=format&fit=crop&w=600&q=80",
        alt: "wastewater facility"
      }
    ],
    iconName: "Droplets",
    hudNodes: [
      { id: "effluent-flow", x: 28, y: 38, label: "Effluent Discharge", value: "120 m³/h", pulseSpeed: 2.2 },
      { id: "valve-automation", x: 60, y: 52, label: "Pump Cycle Efficiency", value: "98.4%", pulseSpeed: 2 },
      { id: "water-temp", x: 74, y: 28, label: "Influent Basin Temp", value: "68.2°C", pulseSpeed: 3 }
    ]
  },
  "consumer-packaged-goods": {
    slug: "consumer-packaged-goods",
    title: "Consumer Packaged Goods (CPG)",
    category: "High-Mix Packaging",
    sub: "Maximize speed, quality, and flexibility in CPG manufacturing — with connected high-speed lines and real-time performance intelligence.",
    landscape: "CPG makers run high-speed, high-volume lines with constant pressure on cost, quality, and changeovers.",
    challenges: [
      "Line speed & OEE",
      "Quality & waste",
      "Frequent changeovers",
      "Demand variability"
    ],
    howWeHelp: [
      "High-speed line monitoring & OEE",
      "Quality inspection & waste control",
      "Dynamic changeover automation tools",
      "Supply chain connectivity"
    ],
    connectedAssets: ["High-Speed Conveyor", "Label Printer", "Checkweigher", "OEE Log", "Warehouse ERP", "Supervisory Desk"],
    useCases: [
      "High-speed packaging lines",
      "Line OEE tracking",
      "Quality visual inspection",
      "Line changeover automation"
    ],
    relevantCapabilities: [
      { name: "Industrial Internet of Things (IIoT)", href: "/capabilities/iiot" },
      { name: "Artificial Intelligence & Analytics", href: "/capabilities/ai-analytics" },
      { name: "Enterprise Applications", href: "/capabilities/enterprise-applications" },
      { name: "Industrial Digital Transformation", href: "/capabilities/industrial-digital-transformation" }
    ],
    outcomes: [
      "[XX]% Higher line speed",
      "[XX]% Less scrap waste",
      "[XX]% Improvement in product quality",
      "Agile multi-sku line setup"
    ],
    related: [
      { name: "Food & Beverages", href: "/industries/food-beverages" },
      { name: "Industrial Manufacturing", href: "/industries/industrial-manufacturing" },
      { name: "Automotive", href: "/industries/automotive" }
    ],
    image: {
      src: "https://images.unsplash.com/photo-1581092268258-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
      alt: "high-speed packaging line conveyor"
    },
    overviewImage: {
      src: "https://images.unsplash.com/photo-1581092920556-c77dce18193b?auto=format&fit=crop&w=800&q=80",
      alt: "worker monitoring a packaging line"
    },
    supportImage: {
      src: "https://images.unsplash.com/photo-1581092190560-c77dce18193b?auto=format&fit=crop&w=800&q=80",
      alt: "automated packaging robots"
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1581092160555-c77dce18193b?auto=format&fit=crop&w=600&q=80",
        alt: "products on a conveyor"
      },
      {
        src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
        alt: "distribution warehouse boxes"
      },
      {
        src: "https://images.unsplash.com/photo-1581092825842-ee22621dd758?auto=format&fit=crop&w=600&q=80",
        alt: "labeling machine"
      },
      {
        src: "https://images.unsplash.com/photo-1581092920492-ee22621dd758?auto=format&fit=crop&w=600&q=80",
        alt: "palletizing robot"
      }
    ],
    iconName: "PackageOpen",
    hudNodes: [
      { id: "packer-motor", x: 26, y: 36, label: "Packer Drive Speed", value: "1420 RPM", pulseSpeed: 2.5 },
      { id: "line-sync", x: 58, y: 50, label: "Conveyor Synchronization", value: "98.6%", pulseSpeed: 2.1 },
      { id: "ambient-sealer", x: 74, y: 24, label: "Glue Station Temp", value: "68.4°C", pulseSpeed: 3 }
    ]
  },
  "data-centres": {
    slug: "data-centres",
    title: "Data Centres",
    category: "Infrastructure Resilience",
    sub: "Keep data centres efficient, reliable, and resilient — with intelligent power, cooling, and infrastructure monitoring.",
    landscape: "Data centres face soaring demand and energy costs, where uptime and efficiency are mission-critical.",
    challenges: [
      "Power & cooling efficiency",
      "Uptime & reliability",
      "Capacity & scaling",
      "Sustainability"
    ],
    howWeHelp: [
      "DCIM integration platforms",
      "Power & cooling AI analytics",
      "Predictive power generator tests",
      "Energy utilization dashboard frameworks"
    ],
    connectedAssets: ["Server Rack", "Chilled Loop", "UPS Battery Bank", "IPMI Sensors", "DCIM Server", "NOC Control"],
    useCases: [
      "Power management",
      "Cooling optimization",
      "Infrastructure monitoring",
      "Capacity planning"
    ],
    relevantCapabilities: [
      { name: "Industrial Internet of Things (IIoT)", href: "/capabilities/iiot" },
      { name: "Cloud & Infrastructure", href: "/capabilities/cloud-infrastructure" },
      { name: "Artificial Intelligence & Analytics", href: "/capabilities/ai-analytics" },
      { name: "Managed Services", href: "/capabilities/managed-services" }
    ],
    outcomes: [
      "99.999% Guaranteed Uptime",
      "[XX]% Cooling PUE reduction",
      "Dynamic capacity provisioning",
      "Green computing metrics"
    ],
    related: [
      { name: "Power & Utilities", href: "/industries/power-utilities" },
      { name: "Industrial Manufacturing", href: "/industries/industrial-manufacturing" },
      { name: "Engineering, Procurement & Construction (EPC)", href: "/industries/epc" }
    ],
    image: {
      src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
      alt: "data center server hall, glowing"
    },
    overviewImage: {
      src: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80",
      alt: "technician in a data center aisle"
    },
    supportImage: {
      src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      alt: "data center cooling infrastructure"
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
        alt: "server racks with blue lights"
      },
      {
        src: "https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&w=600&q=80",
        alt: "network cabling"
      },
      {
        src: "https://images.unsplash.com/photo-1598257006456-0f777247c2af?auto=format&fit=crop&w=600&q=80",
        alt: "UPS / power room"
      },
      {
        src: "https://images.unsplash.com/photo-1597733336333-e076c223a692?auto=format&fit=crop&w=600&q=80",
        alt: "data center corridor"
      }
    ],
    iconName: "ServerCog",
    hudNodes: [
      { id: "rack-efficiency", x: 22, y: 32, label: "Server PUE Factor", value: "98.4%", pulseSpeed: 2 },
      { id: "loop-chiller", x: 58, y: 44, label: "Coolant Loop Flow", value: "120 m³/h", pulseSpeed: 2.2 },
      { id: "ups-status", x: 72, y: 26, label: "Battery Unit Temp", value: "68.3°C", pulseSpeed: 2.8 }
    ]
  },
  "epc": {
    slug: "epc",
    title: "Engineering, Procurement & Construction (EPC)",
    category: "Capital Execution",
    sub: "Deliver complex projects on time and on budget — with digital twins, connected project data, and intelligent execution.",
    landscape: "EPC firms manage massive, complex projects where delays and rework are costly.",
    challenges: [
      "Project visibility & control",
      "Digital twin & handover",
      "Procurement & supply",
      "Safety & quality"
    ],
    howWeHelp: [
      "Digital twins engineering",
      "Connected project dashboards",
      "Automated procurement systems",
      "Site safety telemetry layers"
    ],
    connectedAssets: ["Construction Yard", "Tower Crane", "BIM model", "Project Database", "Supply Chain API", "Handover Log"],
    useCases: [
      "Digital twins",
      "Project execution control",
      "Asset lifecycle handover",
      "Progress monitoring telemetry"
    ],
    relevantCapabilities: [
      { name: "Digital Engineering Services", href: "/capabilities/digital-engineering" },
      { name: "Industrial Data Platforms", href: "/capabilities/industrial-data-platforms" },
      { name: "Enterprise Applications", href: "/capabilities/enterprise-applications" },
      { name: "Cloud & Infrastructure", href: "/capabilities/cloud-infrastructure" }
    ],
    outcomes: [
      "On-Time Project Handover",
      "[XX]% Cost-overrun reduction",
      "Zero-Rework Commisioning",
      "Asset Blueprint Integrity"
    ],
    related: [
      { name: "Oil & Gas", href: "/industries/oil-gas" },
      { name: "Power & Utilities", href: "/industries/power-utilities" },
      { name: "Data Centres", href: "/industries/data-centres" }
    ],
    image: {
      src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
      alt: "large construction site with cranes"
    },
    overviewImage: {
      src: "https://images.unsplash.com/photo-1504308000-80022131f5a1?auto=format&fit=crop&w=800&q=80",
      alt: "engineers reviewing plans on site"
    },
    supportImage: {
      src: "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?auto=format&fit=crop&w=800&q=80",
      alt: "industrial construction structure"
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1490134700000-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
        alt: "crane lifting a load"
      },
      {
        src: "https://images.unsplash.com/photo-1531826210000-bd8dd3c8310d?auto=format&fit=crop&w=600&q=80",
        alt: "digital twin / BIM on a screen"
      },
      {
        src: "https://images.unsplash.com/photo-1513694203835-bd8dd3c8310d?auto=format&fit=crop&w=600&q=80",
        alt: "construction workers on site"
      },
      {
        src: "https://images.unsplash.com/photo-1486406146926-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
        alt: "infrastructure project aerial"
      }
    ],
    iconName: "HardHat",
    hudNodes: [
      { id: "bim-precision", x: 26, y: 36, label: "BIM Alignment Ratio", value: "98.5%", pulseSpeed: 2 },
      { id: "site-crane", x: 58, y: 50, label: "Crane Rotational Speed", value: "1420 RPM", pulseSpeed: 2.1 },
      { id: "supply-temp", x: 74, y: 24, label: "Ambient Concrete Temp", value: "68.2°C", pulseSpeed: 3 }
    ]
  },
  "agriculture": {
    slug: "agriculture",
    title: "Agriculture",
    category: "Precision Farming",
    sub: "Grow more with less — precision farming, connected equipment, and resource optimization for sustainable agriculture.",
    landscape: "Agriculture is digitizing to boost yields and sustainability amid climate and resource pressures.",
    challenges: [
      "Resource efficiency (water, inputs)",
      "Yield optimization",
      "Equipment & field connectivity",
      "Sustainability"
    ],
    howWeHelp: [
      "Precision farming analytics",
      "Field equipment & IoT integration",
      "Water irrigation optimization tools",
      "Yield monitoring platforms"
    ],
    connectedAssets: ["Crop Fields", "Soil Probe", "Irrigation Pipe", "Drone Uplink", "GIS Server", "Farmer Dashboard"],
    useCases: [
      "Precision farming analytics",
      "Resource irrigation monitoring",
      "Connected farm machinery",
      "Yield analytics prediction"
    ],
    relevantCapabilities: [
      { name: "Industrial Internet of Things (IIoT)", href: "/capabilities/iiot" },
      { name: "Artificial Intelligence & Analytics", href: "/capabilities/ai-analytics" },
      { name: "Industrial Data Platforms", href: "/capabilities/industrial-data-platforms" },
      { name: "Cloud & Infrastructure", href: "/capabilities/cloud-infrastructure" }
    ],
    outcomes: [
      "[XX]% Higher crop yield",
      "[XX]% Water resource efficiency",
      "Carbon Footprint Traceability",
      "100% Crop Growth Visibility"
    ],
    related: [
      { name: "Food & Beverages", href: "/industries/food-beverages" },
      { name: "Water & Wastewater Management", href: "/industries/water-wastewater" },
      { name: "Consumer Packaged Goods (CPG)", href: "/industries/consumer-packaged-goods" }
    ],
    image: {
      src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80",
      alt: "agricultural drone over a crop field"
    },
    overviewImage: {
      src: "https://images.unsplash.com/photo-1593113598338-8a8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      alt: "farmer with a tablet in a field"
    },
    supportImage: {
      src: "https://images.unsplash.com/photo-1595180400000-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      alt: "smart irrigation system"
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80",
        alt: "tractor precision farming"
      },
      {
        src: "https://images.unsplash.com/photo-1597916800000-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
        alt: "soil sensor in a field"
      },
      {
        src: "https://images.unsplash.com/photo-1530834000000-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
        alt: "greenhouse technology"
      },
      {
        src: "https://images.unsplash.com/photo-1506306800000-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
        alt: "crop field aerial"
      }
    ],
    iconName: "Sprout",
    hudNodes: [
      { id: "soil-humidity", x: 28, y: 38, label: "Soil Moisture Factor", value: "98.4%", pulseSpeed: 2.2 },
      { id: "pump-flowrate", x: 60, y: 52, label: "Irrigation Flow Velocity", value: "120 m³/h", pulseSpeed: 2 },
      { id: "drone-windspeed", x: 74, y: 28, label: "Field Ambient Temp", value: "68.2°C", pulseSpeed: 3 }
    ]
  }
};
