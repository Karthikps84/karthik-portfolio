import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://karthikps.online";
const NAME = "Karthik Palyakere Suresh";
const TITLE = `${NAME} — AI/ML Engineer | Computer Vision, GenAI & Agentic Systems`;
const DESCRIPTION =
  "AI/ML Engineer and Data Scientist in Mannheim, Germany. 2+ years in computer vision, generative AI, Agentic RAG, LLMs and MLOps. PyTorch, LangGraph, SAM2, YOLO, AWS, Docker. Published at ICCV 2025.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "Karthik Palyakere Suresh",
    "AI Engineer Germany",
    "Machine Learning Engineer Mannheim",
    "Computer Vision Engineer",
    "Generative AI Engineer",
    "Agentic RAG",
    "LangGraph",
    "LangChain",
    "RAG Engineer",
    "Data Scientist Germany",
    "PyTorch",
    "MLOps",
    "ICCV 2025",
    "TorchAdapt",
  ],
  authors: [{ name: NAME, url: SITE_URL }],
  creator: NAME,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "profile",
    siteName: `${NAME} — Portfolio`,
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${NAME} — AI/ML Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

// Structured data: lets Google render a knowledge-panel style result and
// lets LinkedIn/ATS crawlers read the role, skills and employers as fields.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: NAME,
  url: SITE_URL,
  image: `${SITE_URL}/profile.PNG`,
  jobTitle: "AI/ML Engineer",
  email: "mailto:Karthikps174@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mannheim",
    addressCountry: "DE",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Technical University of Kaiserslautern",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Nitte Meenakshi Institute of Technology",
    },
  ],
  worksFor: {
    "@type": "Organization",
    name: "Merck Group KGaA",
  },
  knowsAbout: [
    "Computer Vision",
    "Generative AI",
    "Retrieval-Augmented Generation",
    "Agentic AI",
    "Multi-Agent Systems",
    "Deep Learning",
    "PyTorch",
    "MLOps",
    "LangGraph",
    "Instance Segmentation",
  ],
  knowsLanguage: ["English", "German"],
  subjectOf: {
    "@type": "ScholarlyArticle",
    name: "TorchAdapt: Towards Light-Agnostic Real-Time Visual Perception",
    url: "https://ieeexplore.ieee.org/document/11446114/",
  },
  sameAs: [
    "https://linkedin.com/in/karthikps84",
    "https://github.com/karthikps84",
    "https://instagram.com/karthikps31",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} bg-[#0a0f18] text-slate-200 min-h-screen relative`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <AnimatedBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
