// src/lib/careersData.ts
import { Cpu, Target, GraduationCap, Users, Globe } from "lucide-react";

export interface WhyJoinReason {
  id: number;
  title: string;
  description: string;
  iconName: string;
  isPlaceholder?: boolean;
}

export const whyJoinReasons: WhyJoinReason[] = [
  {
    id: 1,
    title: "Future Technologies",
    description: "Work with Industry 4.0, Artificial Intelligence, Industrial IoT, Cloud, and Digital Engineering to deliver next-generation industrial solutions.",
    iconName: "Cpu"
  },
  {
    id: 2,
    title: "Meaningful Impact",
    description: "Solve real-world industrial challenges and help customers improve productivity, efficiency, sustainability, and operational excellence.",
    iconName: "Target"
  },
  {
    id: 3,
    title: "Learning & Career Growth",
    description: "Accelerate your professional journey through continuous learning, technical certifications, mentorship, and diverse project experiences.",
    iconName: "GraduationCap"
  },
  {
    id: 4,
    title: "Collaborative & Inclusive Culture",
    description: "Be part of a supportive workplace where teamwork, innovation, integrity, and mutual respect inspire everyone to succeed together.",
    iconName: "Users"
  },
  {
    id: 5,
    title: "Global Opportunities",
    description: "Collaborate with global customers, technology partners, and multidisciplinary teams while contributing to projects that create value for tomorrow.",
    iconName: "Globe"
  }
];

export interface StatItem {
  value: string;
  label: string;
}

export const statItems: StatItem[] = [
  { value: "[XX]+", label: "Engineers globally" },
  { value: "[XX]", label: "Industries served" },
  { value: "[XX]+", label: "Technologies mastered" },
  { value: "[XX]", label: "Countries with team presence" }
];

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  initials: string;
}

export const testimonial: Testimonial = {
  quote: "Joining DHGsoft has provided me with opportunities to work on challenging industrial automation and digital transformation projects. The collaborative culture, continuous learning, and exposure to new technologies have helped me strengthen my technical expertise and grow professionally.",
  author: "Devendra Brahmbhatt",
  role: "System Engineer",
  initials: "DB"
};
