// src/lib/careers.ts

export interface CulturePillar {
  title: string;
  desc: string;
}

export interface BenefitItem {
  name: string;
  desc: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: "Engineering" | "Architecture" | "Consulting" | "Data & AI" | "Cybersecurity" | "Delivery";
  location: string;
  type: string;
  blurb: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  initials: string;
}

export const CULTURE_PILLARS: CulturePillar[] = [
  {
    title: "Engineering-First Mindset",
    desc: "We hire builders and give them real problems to solve."
  },
  {
    title: "Real Ownership",
    desc: "Own your work end to end — from idea to production."
  },
  {
    title: "OT + IT Collaboration",
    desc: "We bring operations and technology people together."
  },
  {
    title: "Continuous Learning",
    desc: "Curiosity is part of the job."
  },
  {
    title: "Impact That Matters",
    desc: "Our work keeps real industries running."
  }
];

export const BENEFITS_LIST: BenefitItem[] = [
  {
    name: "Health & Wellbeing",
    desc: "Comprehensive health coverage plans [PLACEHOLDER] supporting you and your family."
  },
  {
    name: "Learning & Development",
    desc: "Assisted certification budgets [PLACEHOLDER] and extensive engineering course libraries."
  },
  {
    name: "Flexible Work",
    desc: "Structured hybrid and remote office coordinates [PLACEHOLDER] tailored to delivery goals."
  },
  {
    name: "Competitive Compensation",
    desc: "Highly competitive basic salaries, allowances, and annual bonuses [PLACEHOLDER]."
  },
  {
    name: "Global Exposure",
    desc: "Work on international plant-floor commissions and connect with global client networks."
  },
  {
    name: "Time Off",
    desc: "Generous paid annual leave packages [PLACEHOLDER] to keep you fresh and energized."
  },
  {
    name: "Team & Culture Events",
    desc: "Regular regional hackathons, gaming tournaments, and technical project showcases."
  },
  {
    name: "Growth & Leadership",
    desc: "Clear individual path milestones from systems engineer to principal enterprise architect."
  }
];

export const SAMPLE_JOBS: JobOpening[] = [
  {
    id: "industrial-automation-engineer",
    title: "Industrial Automation Engineer",
    department: "Engineering",
    location: "[Location Placeholder]",
    type: "[Full-time]",
    blurb: "Design and deliver plant-floor automation and OT integration."
  },
  {
    id: "ot-it-integration-engineer",
    title: "OT/IT Integration Engineer",
    department: "Engineering",
    location: "[Location Placeholder]",
    type: "[Full-time]",
    blurb: "Connect control systems with enterprise and cloud platforms."
  },
  {
    id: "industrial-data-platform-engineer",
    title: "Industrial Data Platform Engineer",
    department: "Data & AI",
    location: "[Location Placeholder]",
    type: "[Full-time]",
    blurb: "Build historians, pipelines, and unified data platforms."
  },
  {
    id: "ai-ml-engineer",
    title: "AI / ML Engineer",
    department: "Data & AI",
    location: "[Location Placeholder]",
    type: "[Full-time]",
    blurb: "Develop and deploy industrial ML models (MLOps)."
  },
  {
    id: "cloud-architect",
    title: "Cloud Architect",
    department: "Architecture",
    location: "[Location Placeholder]",
    type: "[Full-time]",
    blurb: "Design secure, scalable hybrid cloud for critical operations."
  },
  {
    id: "ot-cybersecurity-specialist",
    title: "OT Cybersecurity Specialist",
    department: "Cybersecurity",
    location: "[Location Placeholder]",
    type: "[Full-time]",
    blurb: "Secure OT/IT environments with zero-trust principles."
  },
  {
    id: "solution-consultant",
    title: "Solution Consultant",
    department: "Consulting",
    location: "[Location Placeholder]",
    type: "[Full-time]",
    blurb: "Advise customers on digital transformation roadmaps."
  },
  {
    id: "delivery-project-manager",
    title: "Delivery / Project Manager",
    department: "Delivery",
    location: "[Location Placeholder]",
    type: "[Full-time]",
    blurb: "Lead onsite, offshore, and hybrid project delivery."
  }
];

export const EMPLOYEE_SPOTLIGHTS: Testimonial[] = [
  {
    name: "[Name Placeholder]",
    role: "[Principal OT/IT Systems Architect]",
    quote: "[Add a real, approved quote about working here and deploying industrial edge clusters.]",
    initials: "JD"
  },
  {
    name: "[Name Placeholder]",
    role: "[Lead AI Analytics Specialist]",
    quote: "[Add a real, approved quote about working here and training neural network models on factory metrics.]",
    initials: "AM"
  },
  {
    name: "[Name Placeholder]",
    role: "[Director of Delivery Ops]",
    quote: "[Add a real, approved quote about working here and leading high-speed bottling line commissions.]",
    initials: "SR"
  }
];

export const INTERN_TESTIMONIALS: Testimonial[] = [
  {
    name: "[Name Placeholder]",
    role: "[University / Program Year]",
    quote: "[Add a real intern quote about building Unified Namespace dashboards and receiving 1:1 mentorship.]",
    initials: "KL"
  },
  {
    name: "[Name Placeholder]",
    role: "[University / Program Year]",
    quote: "[Add a real intern quote about writing OPC UA adapters and presenting outcomes during internal hackathons.]",
    initials: "TH"
  }
];

export const INTERN_STEPS = [
  {
    phase: "Apply",
    desc: "Submit your resume online. Our recruitment coordinators review matches against real project slots [[PLACEHOLDER] Weeks]."
  },
  {
    phase: "Onboard",
    desc: "Get paired with an experienced systems engineer mentor and gain access to DHGsoft training path modules."
  },
  {
    phase: "Build on Projects",
    desc: "Design and implement features, write device gateways, and deploy live components on active client platforms."
  },
  {
    phase: "Grow",
    desc: "Present your project achievements. High-performing interns transition directly into full-time engineering tracks."
  }
];
