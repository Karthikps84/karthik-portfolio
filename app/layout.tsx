import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Karthik Palyakere Suresh - Computer Vision and GenAI Researcher",
  description: "Portfolio of Karthik Palyakere Suresh, Computer Vision and GenAI Researcher.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} bg-slate-950 text-slate-200 min-h-screen relative`}>
        <AnimatedBackground />
        <div className="relative z-10">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
