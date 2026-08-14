export type ProjectStatus = "completed" | "in-development";
export type ProjectAccent = "mono" | "green" | "blue-purple";
export type DeviceFrame = "mobile" | "desktop";

export type ProjectScreenshot = {
  src: string;
  alt: string;
};

export type Project = {
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  status: ProjectStatus;
  accent: ProjectAccent;
  device: DeviceFrame;
  screenshotCount: number;
  screenshots?: ProjectScreenshot[];
  liveUrl?: string;
  span: "wide" | "normal";
};

export const projects: Project[] = [
  {
    title: "PixelDerm",
    tagline:
      "Android-based Mobile Platform for Longitudinal Skin Damage Analysis & Monitoring",
    description:
      "An algorithmic image-processing pipeline isolates and tracks UV-induced skin damage over time. Data is persisted locally via SQLite for private, on-device longitudinal tracking, and the platform was evaluated under ISO/IEC 25010 software quality standards.",
    stack: ["Android", "Java", "Image Processing", "SQLite", "ISO/IEC 25010"],
    status: "completed",
    accent: "mono",
    device: "mobile",
    screenshotCount: 3,
    screenshots: [
      { src: "/projects/pixelderm-1.JPG", alt: "PixelDerm dashboard" },
      { src: "/projects/pixelderm-2.jpg", alt: "PixelDerm capture and tips screen" },
      { src: "/projects/pixelderm-4.jpg", alt: "PixelDerm analysis results" },
    ],
    liveUrl: "https://github.com/WillPads/pixelderm",
    span: "wide",
  },
  {
    title: "SkillPort",
    tagline: "Peer-to-Peer Micro-Mentorship & Skill Barter Platform",
    description:
      "Matches students for short, focused mentorship swaps — trade a skill you know for one you want to learn, no one-way tutoring required.",
    stack: ["React", "Spring Boot", "WebRTC"],
    status: "completed",
    accent: "green",
    device: "desktop",
    screenshotCount: 2,
    liveUrl: "#",
    span: "normal",
  },
  {
    title: "SyncSpace",
    tagline: "Synchronous Co-Working & Pomodoro Room App",
    description:
      "Shared real-time rooms with synced Pomodoro timers, so study groups and remote teams can focus together instead of alone.",
    stack: ["Real-time", "WebSockets", "Tailwind"],
    status: "completed",
    accent: "blue-purple",
    device: "desktop",
    screenshotCount: 2,
    liveUrl: "#",
    span: "normal",
  },
  {
    title: "EcoLog",
    tagline: "Campus & Community Carbon/Waste Impact Tracker",
    description:
      "Logs and visualizes carbon and waste impact across campus activities, turning everyday habits into data that nudges greener choices.",
    stack: ["Data Analytics", "Next.js", "Tailwind"],
    status: "in-development",
    accent: "mono",
    device: "desktop",
    screenshotCount: 2,
    span: "wide",
  },
];
