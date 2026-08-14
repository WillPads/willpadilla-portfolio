import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Will Padilla — Portfolio",
  description:
    "Software Engineer and Computer Science student at FEU Tech.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${spaceMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-mono">{children}</body>
    </html>
  );
}
