import {
  Briefcase,
  Cpu,
  Users,
  Rocket,
  Lightbulb,
  Award,
  Compass,
  Network,
  GraduationCap,
  Wrench,
  FileText,
  FlaskConical,
  Landmark,
  Code2,
  UserCheck,
  Globe,
  Calendar,
  FileUp,
  ClipboardList,
  MessageSquare,
  CheckCircle2,
  Star
} from "lucide-react"

// Section 3: Opportunities
export interface OpportunityCard {
  title: string
  desc: string
  icon: any
}

export const OPPORTUNITIES: OpportunityCard[] = [
  {
    title: "Internship Program",
    desc: "Gain practical experience by working on live industrial automation, AI, IIoT, cloud, and digital engineering projects under the guidance of experienced mentors.",
    icon: Briefcase
  },
  {
    title: "Campus Recruitment",
    desc: "Begin your professional journey through our campus hiring initiatives designed for engineering and technology graduates.",
    icon: GraduationCap
  },
  {
    title: "Graduate Engineer Trainee (GET)",
    desc: "A structured program that helps fresh graduates transition from academic learning to professional engineering through training, mentorship, and project experience.",
    icon: Users
  },
  {
    title: "Industrial Training",
    desc: "Industry-oriented training programs designed to provide practical exposure to modern engineering tools, industrial software, and digital technologies.",
    icon: Wrench
  },
  {
    title: "Final Year Projects",
    desc: "Collaborate with DHGsoft engineers on innovative academic projects aligned with real industrial use cases and emerging technologies.",
    icon: FileText
  },
  {
    title: "Research & Innovation",
    desc: "Partner with our engineering teams to explore new technologies, develop innovative solutions, and contribute to industrial research initiatives.",
    icon: FlaskConical
  }
]

// Section 4: Why Choose
export interface WhyChooseCard {
  title: string
  desc: string
  icon: any
}

export const WHY_CHOOSE_REASONS: WhyChooseCard[] = [
  {
    title: "Industry-Focused Learning",
    desc: "Learn technologies used by leading manufacturing and industrial organizations worldwide.",
    icon: Landmark
  },
  {
    title: "Real Projects",
    desc: "Work on live customer projects that create measurable business value — not sandbox exercises.",
    icon: Code2
  },
  {
    title: "Expert Mentorship",
    desc: "Receive continuous guidance from experienced engineers and technology specialists with decades of industrial expertise.",
    icon: UserCheck
  }
]

export const EMERGING_TECH_CHIPS = [
  "Industrial Automation",
  "Artificial Intelligence",
  "Industrial IoT",
  "Cloud Computing",
  "Data Engineering",
  "Enterprise Applications",
  "Cybersecurity"
]

// Section 5: Partnerships Lists
export const PARTNERSHIPS_LEFT = [
  "Campus Recruitment",
  "Internship Collaboration",
  "Industry Projects",
  "Faculty Development Programs",
  "Guest Lectures"
]

export const PARTNERSHIPS_RIGHT = [
  "Technical Workshops",
  "Innovation Challenges",
  "Industrial Visits",
  "Research Collaboration",
  "Skill Development Programs"
]

// Section 6: Graduate Program Tracks
export interface TabContent {
  id: string
  title: string
  desc: string
  chips: string[]
}

export const PROGRAM_TRACKS: TabContent[] = [
  {
    id: "automation",
    title: "Industrial Automation",
    desc: "Master the core of industrial control systems used in manufacturing plants worldwide.",
    chips: ["PLC Programming", "SCADA Systems", "DCS Architecture", "Industrial Networking"]
  },
  {
    id: "data-ai",
    title: "Data & AI",
    desc: "Build intelligent systems that transform raw industrial data into actionable insights.",
    chips: ["Artificial Intelligence", "Machine Learning", "Data Analytics", "Business Intelligence"]
  },
  {
    id: "digital-eng",
    title: "Digital Engineering",
    desc: "Connect physical assets to digital systems and drive smart factory transformations.",
    chips: ["Industrial IoT", "OT/IT Integration", "Digital Transformation", "Industrial Data Platforms"]
  },
  {
    id: "enterprise-tech",
    title: "Enterprise Technologies",
    desc: "Integrate enterprise-grade systems that power global industrial operations.",
    chips: ["SAP", "MES", "ERP Integration", "Cloud", "Cybersecurity"]
  }
]

// Section 7: Campus Journey Timeline Steps
export interface JourneyStep {
  number: string
  label: string
  icon: any
}

export const JOURNEY_STEPS: JourneyStep[] = [
  { number: "01", label: "Connect with DHGsoft", icon: Globe },
  { number: "02", label: "Campus Events", icon: Calendar },
  { number: "03", label: "Apply", icon: FileUp },
  { number: "04", label: "Assessment", icon: ClipboardList },
  { number: "05", label: "Interview", icon: MessageSquare },
  { number: "06", label: "Selection", icon: CheckCircle2 },
  { number: "07", label: "Internship / GET", icon: Briefcase },
  { number: "08", label: "Mentorship", icon: Users },
  { number: "09", label: "Career at DHGsoft", icon: Star }
]

// Section 8: What You'll Gain
export interface GainCard {
  title: string
  desc: string
}

export const GAIN_CARDS: GainCard[] = [
  {
    title: "Industry Experience",
    desc: "Hands-on work with real industrial systems and live customer environments."
  },
  {
    title: "Technical Skills",
    desc: "Deep expertise in automation, AI, IoT, cloud, and enterprise technologies."
  },
  {
    title: "Professional Mentorship",
    desc: "Direct access to senior engineers with decades of domain expertise."
  },
  {
    title: "Live Projects",
    desc: "Contribute to active projects that create measurable value for global clients."
  },
  {
    title: "Innovation Exposure",
    desc: "Engage with cutting-edge R&D and emerging industrial technology initiatives."
  },
  {
    title: "Industry Certification",
    desc: "Earn recognized completion certificates for internships and training programs."
  },
  {
    title: "Career Guidance",
    desc: "Structured career planning support and professional development coaching."
  },
  {
    title: "Networking Opportunities",
    desc: "Build lasting connections with engineers, leaders, and industry professionals."
  }
]

// Section 9: FAQ Items
export interface FAQItem {
  q: string
  a: string
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    q: "Who can apply?",
    a: "Engineering, Computer Science, IT, Electronics, Data Science, AI, Mechanical, Electrical, Instrumentation, and other relevant students or graduates. We welcome applications from students at any stage of their degree as well as recent graduates within 2 years of completion."
  },
  {
    q: "Are internships paid?",
    a: "Yes, DHGsoft internships are paid programs with structured stipends based on the role, duration, and technical scope of the assignment."
  },
  {
    q: "Will I receive a certificate?",
    a: "Yes, all successful interns and program participants receive an official certificate of completion recognizing their contribution and skills acquired."
  },
  {
    q: "Can internships lead to full-time employment?",
    a: "Yes, high-performing interns and Graduate Engineer Trainees are frequently offered full-time roles at DHGsoft based on performance, business needs, and career fit."
  }
]
