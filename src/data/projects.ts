export type ProjectStatus = "completed" | "in-development";
export type ProjectAccent = "mono" | "green" | "blue-purple";
export type DeviceFrame = "mobile" | "desktop";

export type ProjectScreenshot = {
  src: string;
  alt: string;
};

export type Project = {
  title: string;
  role: string;
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
    role: "Project Manager & Developer",
    tagline:
      "Android-based Mobile Platform for Longitudinal Skin Damage Analysis & Monitoring",
    description:
      "An algorithmic image-processing pipeline isolates and tracks UV-induced skin damage over time. Data is persisted locally via SQLite for private, on-device longitudinal tracking, and the platform was evaluated under ISO/IEC 25010 software quality standards.",
    stack: ["Android", "Java", "Image Processing", "SQLite", "ISO/IEC 25010"],
    status: "completed",
    accent: "mono",
    device: "mobile",
    screenshotCount: 5,
    screenshots: [
      { src: "/projects/pixelderm logo.png", alt: "PixelDerm Logo" }, 
      { src: "/projects/pixelderm-1.JPG", alt: "PixelDerm Homepage" },
      { src: "/projects/pixelderm-2.jpg", alt: "PixelDerm Pre-Capture screen" },
      { src: "/projects/pixelderm-3.jpg", alt: "PixelDerm Analysis - Image Analysis" },
      { src: "/projects/pixelderm-4.jpg", alt: "PixelDerm Analysis -Results" },
    ],
    liveUrl: "https://github.com/WillPads/pixelderm",
    span: "wide",
  },
  {
    title: "SyncSpace",
    role: "Full-stack Developer",
    tagline: "Synchronous Co-Working & Pomodoro Room App",
    description:
      "Shared real-time rooms with synced Pomodoro timers, tasks and notes, so study groups and remote teams can focus together instead of alone. Includes role-based access, a WebSocket sync engine and a quiz pipeline built from uploaded documents. Currently being prepared for deployment.",
    stack: ["Next.js", "Express", "Prisma", "SQLite", "WebSockets"],
    status: "in-development",
    accent: "blue-purple",
    device: "desktop",
    screenshotCount: 2,
    span: "normal",
  },
];
