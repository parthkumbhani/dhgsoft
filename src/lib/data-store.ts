// src/lib/data-store.ts

// ── 1. NEWS SCHEMAS & INITIAL DATA ──────────────────────────────────────────
export interface PressRelease {
  id: string;
  title: string;
  date: string;
  category: "Cybersecurity" | "Partnerships" | "Recognition" | "Innovation" | "General";
  blurb: string;
  content?: string;
  isFeatured?: boolean;
}

const INITIAL_NEWS: PressRelease[] = [
  {
    id: "iso-27001-certification",
    title: "DHGsoft Achieves ISO 27001 Certification",
    date: "May 2025",
    category: "Cybersecurity",
    blurb: "DHGsoft receives ISO/IEC 27001:2022 certification across all global delivery centers, reinforcing its commitment to information security and enterprise-grade data protection.",
    content: "DHGsoft, a global leader in Industrial Digital Transformation and systems integration, has officially achieved the ISO/IEC 27001:2022 certification. This milestone validates our comprehensive information security management system (ISMS) across all administrative, development, and support hubs. By adhering to these strict security controls, DHGsoft ensures that client industrial source code, plant database structures, and operations data remain fully protected against digital threats.",
    isFeatured: false
  },
  {
    id: "semiconductor-fab-partnership",
    title: "New Partnership with Leading Semiconductor Fab",
    date: "April 2025",
    category: "Partnerships",
    blurb: "DHGsoft partners with a Tier-1 semiconductor manufacturer to deploy its Industrial AI Platform across three front-end fabrication facilities, targeting a 22% OEE improvement.",
    content: "We are proud to announce a multi-year engineering alliance with an international semiconductor fabricator. Under this contract, DHGsoft will install its connected edge computing framework and unified namespace architecture across three primary cleanroom facilities. The project aims to enable real-time environmental monitoring and predictive wafer yield analytics to prevent substrate scrap losses.",
    isFeatured: false
  },
  {
    id: "top-50-industrial-tech",
    title: "DHGsoft Named in Top 50 Industrial Tech Companies 2025",
    date: "March 2025",
    category: "Recognition",
    blurb: "For the second consecutive year, DHGsoft has been recognized among the top 50 most innovative industrial technology companies by industry research firm IDC.",
    content: "Industry analyst group IDC has listed DHGsoft in its annual index of the Top 50 Industrial Technology Innovators. The selection criteria focused on real-world impact, plant deployment success rates, and the robustness of DHGsoft's custom SCADA and MES integration modules.",
    isFeatured: false
  },
  {
    id: "digital-twin-coe",
    title: "DHGsoft Launches Digital Twin Center of Excellence",
    date: "February 2025",
    category: "Innovation",
    blurb: "A dedicated Digital Twin CoE opens in Pune, India — housing 200+ engineers and researchers advancing high-fidelity simulation capabilities for industrial clients globally.",
    content: "To support the growing demand for high-fidelity process simulations, DHGsoft has launched its new Digital Twin Center of Excellence in Pune. This center brings together expert control engineers, data modeling specialists, and software developers to build real-time replica models of process loops, allowing plants to dry-run configuration changes before going live on the floor.",
    isFeatured: false
  },
  {
    id: "european-expansion",
    title: "DHGsoft Expands Industrial AI Platform to European Markets",
    date: "June 2025",
    category: "Innovation",
    blurb: "DHGsoft announces the expansion of its Industrial AI Platform to major European manufacturing hubs, partnering with 3 Tier-1 automotive suppliers.",
    content: "DHGsoft is expanding its regional footprint with new support infrastructure across Germany and France. By teaming up with European automotive suppliers, we will deploy edge predictive diagnostics on automated chassis assembly conveyor lines to optimize motor lifecycle efficiency.",
    isFeatured: true
  }
];

// ── 2. CAREERS SCHEMAS & INITIAL DATA ────────────────────────────────────────
export interface JobPosition {
  id: string;
  title: string;
  department: "Engineering" | "Architecture" | "Consulting" | "Data & AI" | "Cybersecurity" | "Delivery";
  location: string;
  type: string; // e.g. "Full-time", "Contract"
  blurb: string;
  description?: string;
  requirements?: string;
}

const INITIAL_JOBS: JobPosition[] = [
  {
    id: "industrial-automation-engineer",
    title: "Industrial Automation Engineer",
    department: "Engineering",
    location: "Ahmedabad, India",
    type: "Full-time",
    blurb: "Design and deliver plant-floor automation, PLC configurations, and OT integration architectures.",
    description: "We are seeking a Control Systems Engineer to design, code, and test automation system configurations for process plants.",
    requirements: "3+ years of experience with Siemens TIA Portal or Rockwell Studio 5000; understanding of ISA-88/ISA-95 standards."
  },
  {
    id: "ot-it-integration-engineer",
    title: "OT/IT Integration Engineer",
    department: "Engineering",
    location: "Pune, India",
    type: "Full-time",
    blurb: "Connect control networks with enterprise database systems and secure cloud platforms.",
    description: "Bridging the gap between factory floors and IT databases. You will develop OPC UA telemetry adapters and database pipelines.",
    requirements: "Experience with MQTT brokers, Unified Namespace concepts, Kepware, Python, or C# coding."
  },
  {
    id: "industrial-data-platform-engineer",
    title: "Industrial Data Platform Engineer",
    department: "Data & AI",
    location: "Remote / Hybrid",
    type: "Full-time",
    blurb: "Build data historians, SCADA telemetry pipelines, and unified data systems.",
    description: "Designing real-time databases and telemetry ingestion layers to feed our predictive analytical algorithms.",
    requirements: "Experience with timeseries databases (e.g. InfluxDB, Aveva Historian) and Apache Kafka."
  },
  {
    id: "ot-cybersecurity-specialist",
    title: "OT Cybersecurity Specialist",
    department: "Cybersecurity",
    location: "Ahmedabad, India",
    type: "Full-time",
    blurb: "Secure factory networks and OT environments using zero-trust zoning models.",
    description: "Safeguard critical plant networks by performing vulnerability scans, configuring firewall settings, and designing DMZs.",
    requirements: "Certifications in GICSP, CISSP, or GRID; experience with industrial firewalls (Fortinet, Moxa)."
  }
];

// ── 3. PARTNERS SCHEMAS & INITIAL DATA ───────────────────────────────────────
export interface EcosystemPartner {
  id: string;
  name: string;
  category: "Automation" | "Cloud" | "Network & Safety" | "Hardware";
  logoUrl?: string;
  capabilityTitle?: string;
  description: string;
  websiteUrl?: string;
}

const INITIAL_PARTNERS: EcosystemPartner[] = [
  {
    id: "schneider-electric",
    name: "Schneider Electric",
    category: "Automation",
    logoUrl: "/logos/schneider-electric.svg",
    capabilityTitle: "Industrial Automation",
    description: "Deploy smart factory systems with high PLC and SCADA integration.",
    websiteUrl: "https://se.com"
  },
  {
    id: "aveva",
    name: "AVEVA",
    category: "Automation",
    logoUrl: "/logos/aveva.svg",
    capabilityTitle: "Digital Twin & Industrial Software",
    description: "Real-time engineering visualization and SCADA intelligence.",
    websiteUrl: "https://aveva.com"
  },
  {
    id: "aws",
    name: "AWS",
    category: "Cloud",
    logoUrl: "/logos/aws.svg",
    capabilityTitle: "Industrial Cloud & AI Infrastructure",
    description: "Industrial cloud platforms, high-capacity IoT pipelines, and generative AI.",
    websiteUrl: "https://aws.amazon.com"
  },
  {
    id: "databricks",
    name: "Databricks",
    category: "Cloud",
    logoUrl: "/logos/databricks.svg",
    capabilityTitle: "Industrial Data Intelligence",
    description: "Unified analytics lakehouse for processing manufacturing telemetry.",
    websiteUrl: "https://databricks.com"
  },
  {
    id: "azure",
    name: "Microsoft Azure",
    category: "Cloud",
    logoUrl: "/logos/microsoft-azure.svg",
    capabilityTitle: "Enterprise Cloud Platform",
    description: "Resilient enterprise hybrid cloud infrastructure and secure IoT.",
    websiteUrl: "https://azure.microsoft.com"
  },
  {
    id: "phoenix-contact",
    name: "Phoenix Contact",
    category: "Hardware",
    logoUrl: "/logos/phoenix-contact.svg",
    capabilityTitle: "Industrial Connectivity",
    description: "Deploy surge protection, industrial ethernet switches, and terminal blocks.",
    websiteUrl: "https://phoenixcontact.com"
  }
];

// ── 4. DATA HELPER FUNCTIONS ─────────────────────────────────────────────────
const isBrowser = typeof window !== 'undefined';

// --- NEWS DESK ACTIONS ---
export function getNews(): PressRelease[] {
  if (!isBrowser) return INITIAL_NEWS;
  const stored = localStorage.getItem("dhg_news_releases");
  if (!stored) {
    localStorage.setItem("dhg_news_releases", JSON.stringify(INITIAL_NEWS));
    return INITIAL_NEWS;
  }
  try {
    return JSON.parse(stored);
  } catch (e) {
    return INITIAL_NEWS;
  }
}

export function saveNews(newsList: PressRelease[]): void {
  if (!isBrowser) return;
  localStorage.setItem("dhg_news_releases", JSON.stringify(newsList));
}

// --- CAREERS ACTIONS ---
export function getJobs(): JobPosition[] {
  if (!isBrowser) return INITIAL_JOBS;
  const stored = localStorage.getItem("dhg_job_positions");
  if (!stored) {
    localStorage.setItem("dhg_job_positions", JSON.stringify(INITIAL_JOBS));
    return INITIAL_JOBS;
  }
  try {
    return JSON.parse(stored);
  } catch (e) {
    return INITIAL_JOBS;
  }
}

export function saveJobs(jobsList: JobPosition[]): void {
  if (!isBrowser) return;
  localStorage.setItem("dhg_job_positions", JSON.stringify(jobsList));
}

// --- PARTNERS ACTIONS ---
export function getPartners(): EcosystemPartner[] {
  if (!isBrowser) return INITIAL_PARTNERS;
  const stored = localStorage.getItem("dhg_ecosystem_partners");
  if (!stored) {
    localStorage.setItem("dhg_ecosystem_partners", JSON.stringify(INITIAL_PARTNERS));
    return INITIAL_PARTNERS;
  }
  try {
    const parsed = JSON.parse(stored) as EcosystemPartner[];
    const ids = parsed.map(p => p.id);
    const expectedIds = ["schneider-electric", "aveva", "aws", "databricks", "azure", "phoenix-contact"];
    
    // Strict migration check: ensure all 6 default partners are present and have their logos
    const needsMigration = 
      expectedIds.some(id => !ids.includes(id)) || 
      parsed.some(p => expectedIds.includes(p.id) && !p.logoUrl);

    if (needsMigration) {
      localStorage.setItem("dhg_ecosystem_partners", JSON.stringify(INITIAL_PARTNERS));
      return INITIAL_PARTNERS;
    }
    return parsed;
  } catch (e) {
    return INITIAL_PARTNERS;
  }
}

export function savePartners(partnersList: EcosystemPartner[]): void {
  if (!isBrowser) return;
  localStorage.setItem("dhg_ecosystem_partners", JSON.stringify(partnersList));
}
