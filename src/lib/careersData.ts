// src/lib/careersData.ts

export interface CareerDomain {
  title: string;
  desc: string;
  slug: string;
}

export interface BenefitItem {
  title: string;
  desc: string;
}

export interface JourneyStep {
  step: string;
  title: string;
  desc: string;
}

export const careerDomains: CareerDomain[] = [
  {
    title: "Industrial Automation",
    desc: "Design and implement advanced PLC, SCADA, and DCS control systems to orchestrate modern smart manufacturing ecosystems.",
    slug: "industrial-automation"
  },
  {
    title: "Software Engineering",
    desc: "Develop scalable microservices, backend platforms, and edge connectors built with modern languages and frameworks.",
    slug: "software-engineering"
  },
  {
    title: "AI & Machine Learning",
    desc: "Create production-ready predictive models, vision analytics, and intelligent systems to transform raw industrial telemetry.",
    slug: "ai-machine-learning"
  },
  {
    title: "Cloud & DevOps",
    desc: "Build highly resilient, scalable, and secure cloud environments leveraging cutting-edge containerization and infrastructure-as-code.",
    slug: "cloud-devops"
  },
  {
    title: "Cybersecurity",
    desc: "Protect mission-critical OT/IT networks through secure architecture design, threat modeling, and advanced security monitoring.",
    slug: "cybersecurity"
  },
  {
    title: "Industrial IoT",
    desc: "Architect seamless hardware-to-software telemetry pipelines utilizing modern IoT protocols and secure edge compute gateways.",
    slug: "industrial-iot"
  },
  {
    title: "Enterprise Applications",
    desc: "Integrate ERP, MES, and PLM platforms to streamline workflows and deliver cross-functional operational visibility.",
    slug: "enterprise-applications"
  },
  {
    title: "Digital Engineering",
    desc: "Create comprehensive digital twins, asset simulations, and interactive spatial models of physical operations.",
    slug: "digital-engineering"
  },
  {
    title: "Project Management",
    desc: "Lead complex, large-scale engineering delivery and digital transformation initiatives across global locations.",
    slug: "project-management"
  },
  {
    title: "Business Development",
    desc: "Partner with industrial clients and global technology organizations to co-create transformative digital roadmaps.",
    slug: "business-development"
  }
];

export const employeeBenefits: BenefitItem[] = [
  {
    title: "Comprehensive Health & Wellness",
    desc: "Premium medical, dental, and vision coverage for you and your family, along with mental health support programs."
  },
  {
    title: "Continuous Learning & Certifications",
    desc: "Sponsorship for professional credentials, technical courses, academic partnerships, and structured career mentorship."
  },
  {
    title: "Flexible Hybrid Work Arrangements",
    desc: "Balance your professional and personal life with remote options built around roles, deliverables, and team dynamics."
  },
  {
    title: "Financial Planning & Wellness",
    desc: "Competitive retirement savings programs, insurance benefits, and performance-based incentive recognition."
  },
  {
    title: "Global Collaboration Opportunities",
    desc: "Work on international projects and collaborate with multi-disciplinary global delivery teams across regions."
  },
  {
    title: "Time Off & Holiday Benefits",
    desc: "Generous vacation policies, volunteer time off, and parental leave benefits to support you at every life stage."
  }
];

export const hiringJourney: JourneyStep[] = [
  {
    step: "01",
    title: "Application",
    desc: "Submit your professional CV and showcase your engineering accomplishments."
  },
  {
    step: "02",
    title: "Technical Review",
    desc: "Our senior engineering leads review your technical capabilities and focus areas."
  },
  {
    step: "03",
    title: "Interview",
    desc: "An in-depth technical discussion about process engineering, architecture, and coding."
  },
  {
    step: "04",
    title: "Final Discussion",
    desc: "Align on culture fit, career aspirations, and team collaboration frameworks."
  },
  {
    step: "05",
    title: "Offer",
    desc: "Receive a formal proposal outlining your compensation and growth pathway."
  },
  {
    step: "06",
    title: "Welcome",
    desc: "Onboard with your team, receive tools, and start building value for tomorrow."
  }
];

export interface CulturePhoto {
  src: string;
  alt: string;
  tag?: string;
  caption: string;
  isLarge?: boolean;
}

export const culturePhotos: CulturePhoto[] = [
  {
    src: "/images/careers/culture/collaboration.jpg",
    alt: "Diverse team of engineers collaborating at a whiteboard in a modern open-plan office",
    tag: "Team Collaboration",
    caption: "Cross-functional teams solving industrial challenges together.",
    isLarge: true,
  },
  {
    src: "/images/careers/culture/engineer-factory.jpg",
    alt: "Young engineer working on a laptop beside a PLC cabinet on an industrial factory floor",
    caption: "Hands-on with real customer environments.",
  },
  {
    src: "/images/careers/culture/training.jpg",
    alt: "Technical training workshop with diverse engineering professionals in a modern classroom",
    caption: "Continuous learning is part of the job.",
  },
  {
    src: "/images/careers/culture/celebration.jpg",
    alt: "Team of professionals celebrating a successful project milestone in a modern office",
    caption: "We celebrate wins together.",
  },
];

