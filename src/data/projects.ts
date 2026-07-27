import { Handshake, Leaf, Timer, type LucideIcon } from "lucide-react";

export type ProjectStatus = "in-development" | "coming-soon";

export type Project = {
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  status: ProjectStatus;
  icon: LucideIcon;
  href?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "SkillPort",
    tagline: "Peer-to-Peer Micro-Mentorship & Skill Barter Platform",
    description:
      "Matches students for short, focused mentorship swaps — trade a skill you know for one you want to learn, no one-way tutoring required.",
    tags: ["React", "Spring Boot", "WebRTC"],
    status: "in-development",
    icon: Handshake,
  },
  {
    title: "EcoLog",
    tagline: "Campus & Community Carbon/Waste Impact Tracker",
    description:
      "Logs and visualizes carbon and waste impact across campus activities, turning everyday habits into data that nudges greener choices.",
    tags: ["Data Analytics", "Next.js", "Tailwind"],
    status: "in-development",
    icon: Leaf,
  },
  {
    title: "FocusFlow",
    tagline: "Synchronous Co-Working & Pomodoro Room App",
    description:
      "Shared real-time rooms with synced Pomodoro timers, so study groups and remote teams can focus together instead of alone.",
    tags: ["Real-time", "WebSockets", "Tailwind"],
    status: "coming-soon",
    icon: Timer,
  },
];
