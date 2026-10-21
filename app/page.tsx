"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Download, Mail, Cpu, BrainCircuit, Network, Layers, Target,
  Microscope, Code2, Globe, Github, Linkedin, Instagram,
  GraduationCap, Camera, ArrowUp, MapPin, BookOpen, Award,
  Bot, Database, Gauge, CheckCircle2, ExternalLink
} from "lucide-react";


// --- ENHANCED DATA ---
const enhancedData = {
  hero: {
    photo: "/profile.PNG",
    location: "Mannheim, Germany",
    tagline: "AI/ML Engineer — Computer Vision, Generative AI & Agentic Systems",
    proof: ["ICCV 2025 Published", "Merck Group", "DFKI", "Oracle OCI Certified"],
  },

  about: {
    title: "Beyond the Code.",
    paragraphs: [
      "I am an AI/ML Engineer and Data Scientist based in Mannheim, Germany, with 2+ years building applied machine learning, computer vision, generative AI and retrieval-based systems across research and enterprise environments.",
      "My work spans the full stack of modern AI: fine-tuning vision foundation models (SAM2, SAM3, CLIP, DINO, YOLO, Mask R-CNN), architecting multimodal Agentic RAG platforms with LangGraph and LangChain, and shipping all of it as containerized services on AWS with CI/CD and continuous evaluation.",
      "I don't train models in a vacuum. I build end-to-end architectures — from hardware sensor integration (IDS cameras, ROS2, Jetson) to quantized, TensorRT-optimized inference on the edge — and I measure them on latency, throughput, memory and prediction quality, not accuracy alone.",
      "Published at ICCV 2025 on light-agnostic real-time perception (TorchAdapt). Currently focused on semantic retrieval, knowledge grounding, context engineering, and AI agents operating over complex enterprise data.",
    ],
  },

  socials: [
    { name: "LinkedIn", url: "https://linkedin.com/in/karthikps84", icon: <Linkedin size={20} /> },
    { name: "GitHub", url: "https://github.com/karthikps84", icon: <Github size={20} /> },
    { name: "Instagram", url: "https://instagram.com/karthikps31", icon: <Instagram size={20} /> },
  ],

  metrics: [
    { label: "Inference Latency", value: "40%", desc: "Reduction on AWS pipelines at Merck" },
    { label: "Deployment Cycles", value: "50%", desc: "Faster via CI/CD automation" },
    { label: "mAP50 Boost", value: "15%", desc: "Low-light detection (TorchAdapt)" },
    { label: "Edge Inference", value: "30 FPS", desc: "4 synchronized camera streams" },
  ],

  skills: [
    { category: "Generative AI & Retrieval", icon: <BrainCircuit className="w-6 h-6 text-purple-400" />, items: ["RAG", "Agentic RAG", "Multimodal RAG", "LLMs", "Embeddings", "Vector Databases", "Semantic Retrieval", "Hybrid Search", "Context Engineering", "Prompt Engineering", "Knowledge Grounding"] },
    { category: "Agentic AI", icon: <Bot className="w-6 h-6 text-indigo-400" />, items: ["AI Agents", "Multi-Agent Systems", "LangChain", "LangGraph", "Agentic Orchestration", "Agentic Reasoning", "Reranking"] },
    { category: "Computer Vision & Multimodal", icon: <Target className="w-6 h-6 text-rose-400" />, items: ["Object Detection", "Instance Segmentation", "Semantic Segmentation", "Multimodal Learning", "CLIP", "DINO", "SAM2", "SAM3", "Mask R-CNN", "YOLO", "2D/3D Vision"] },
    { category: "ML & Deep Learning", icon: <Layers className="w-6 h-6 text-blue-400" />, items: ["PyTorch", "TensorFlow", "scikit-learn", "CNNs", "Vision Transformers", "Transfer Learning", "Model Fine-Tuning", "Model Evaluation", "Statistical Analysis"] },
    { category: "Knowledge & Semantic Systems", icon: <Database className="w-6 h-6 text-cyan-400" />, items: ["Knowledge Representation", "Semantic Modeling", "Metadata", "Knowledge Graphs", "Graph Databases", "RDF Concepts", "Ontology Fundamentals"] },
    { category: "MLOps & Cloud", icon: <Cpu className="w-6 h-6 text-emerald-400" />, items: ["Docker", "FastAPI", "AWS (EC2, S3, Lambda)", "CI/CD", "Model Monitoring", "ONNX Runtime", "TensorRT", "OpenVINO", "CUDA"] },
    { category: "Programming & Data", icon: <Code2 className="w-6 h-6 text-amber-400" />, items: ["Python", "SQL", "C++", "C", "Git", "Linux", "Bash", "ROS2", "Data Processing"] },
    { category: "Languages", icon: <Globe className="w-6 h-6 text-teal-400" />, items: ["English (C2, Fluent)", "German (B1, Actively Learning)"] },
  ],

  education: [
    {
      degree: "M.Sc. Computer Science (AI & Computer Vision Specialization)",
      institution: "Technical University of Kaiserslautern, Germany",
      dates: "Apr 2023 – Sep 2026",
      bullets: ["Relevant Coursework: Machine Learning Algorithms, Deep Learning, Image Processing, NLP, Web Mining"],
    },
    {
      degree: "B.E. Computer Science",
      institution: "Nitte Meenakshi Institute of Technology, Bangalore, India",
      dates: "Jul 2018 – Aug 2022",
      bullets: ["Relevant Coursework: Machine Learning, Artificial Intelligence"],
    },
  ],

  experience: [
    {
      company: "Merck Group KGaA, Darmstadt",
      role: "Data Scientist Intern / Werkstudent",
      dates: "March 2025 – Sep 2026",
      accent: "from-emerald-500/20 via-teal-500/10 to-transparent",
      icon: <Microscope className="w-7 h-7 text-emerald-300" />,
      bullets: [
        "Architected end-to-end, scalable ML pipelines on AWS with containerized model serving using Docker, improving inference latency by 40% for high-resolution imagery.",
        "Engineered production-ready AI workflows with CI/CD automation, reducing deployment cycles by 50% and enabling continuous model evaluation through feedback loops.",
        "Prototyped LLM-based information extraction and knowledge retrieval workflows using RAG, embeddings, vector similarity search and semantic retrieval.",
        "Fine-tuned and evaluated foundation and computer vision models including Mask R-CNN, YOLOv11, SAM2 and SAM3 for instance segmentation and image understanding.",
        "Developed synthetic data generation pipelines that improved model generalization and reduced overfitting by 35%, addressing limited labelled data challenges.",
        "Developed and evaluated machine learning and deep learning models for high-resolution SEM and TEM microscopy data, working with structured and unstructured scientific datasets.",
        "Evaluated model performance across latency, throughput, memory consumption and prediction quality, including mixed-precision inference benchmarking against FP32 baselines.",
        "Collaborated with interdisciplinary research, engineering and domain teams in agile environments, translating research problems into scalable AI solutions.",
      ],
    },
    {
      company: "DFKI – German Research Center for AI, Kaiserslautern",
      role: "Research Assistant",
      dates: "July 2023 – Feb 2025",
      accent: "from-blue-500/20 via-indigo-500/10 to-transparent",
      icon: <Network className="w-7 h-7 text-blue-300" />,
      bullets: [
        "Designed and deployed a real-time multi-sensor perception system for robotic platforms, achieving 92% detection accuracy in autonomous scenarios.",
        "Developed ROS2-based perception nodes for synchronized camera streams and object detection on Jetson embedded hardware, achieving sub-200ms inference latency.",
        "Implemented low-light and degraded-vision enhancement pipelines, improving object detection mAP50 by 15% in challenging environments.",
        "Published peer-reviewed research at ICCV 2025 demonstrating scalable, production-ready perception systems.",
        "Optimized PyTorch models for production deployment, focusing on inference performance, memory efficiency and real-time constraints in resource-limited environments.",
        "Built modular ML components and scalable data processing pipelines for structured and unstructured sensor data, ensuring robustness and reproducibility across distributed systems.",
        "Developed monitoring and logging infrastructure for deployed AI services, enabling continuous performance tracking and automated alerting.",
      ],
    },
  ],

  projects: [
    {
      title: "Enterprise Multimodal Agentic RAG Platform",
      category: "Agentic AI & Generative AI",
      impact: "Citation-verified answers with a YOLO ↔ VLM cross-check",
      stack: ["LangGraph", "LangChain", "NVIDIA NIM", "ChromaDB", "BM25 + RRF", "Reranking", "YOLO", "LangSmith"],
      links: [{ label: "Code", url: "https://github.com/Karthikps84/multimodal-rag" }],
      accent: "from-purple-600/25 via-indigo-600/10 to-transparent",
      bullets: [
        "Designed a multimodal, multi-agent RAG platform using LangGraph and LangChain to process and retrieve information from documents, images and tables.",
        "Built a Supervisor and Planner architecture with a typed shared state, parallel or sequential step execution, citation verification, and a reflection loop that retries low-confidence answers.",
        "Implemented hybrid retrieval fusing ChromaDB dense vectors with BM25 via reciprocal rank fusion, then reranking, with a pymupdf4llm to Docling OCR fallback for scanned or table-heavy PDFs.",
        "Added a vision cross-check that compares a VLM's object count against YOLO detections, plus Llama 3.1 and Nemotron VL model routing, multi-layer caching and LangSmith tracing.",
      ],
      icon: <Bot className="text-purple-300" />,
    },
    {
      title: "TorchAdapt: Light-Agnostic Perception (ICCV 2025)",
      category: "Peer-Reviewed CV Research",
      impact: "ICCV 2025 · 80.1 mAP50 on ExDark · +15% in low light",
      stack: ["PyTorch", "U-Net", "YOLOv3", "RetinaNet", "RTMDet-tiny", "DeepLabV3+"],
      links: [
        { label: "Paper", url: "https://ieeexplore.ieee.org/document/11446114/" },
        { label: "Code", url: "https://github.com/Karthikps84/Low-light-enhancement" },
      ],
      accent: "from-rose-500/25 via-pink-600/10 to-transparent",
      bullets: [
        "Published real-time light-agnostic visual perception research evaluated on Exdark, LIS and Darkface datasets.",
        "Engineered a U-Net-based enhancement pipeline integrated with RTMDet-tiny, YOLOv3 and DeepLabV3+, improving mAP50 by 15%.",
        "Benchmarked on dark-image datasets, reaching 92% accuracy through systematic optimization.",
        "Released configs and checkpoints for detection (YOLOv3, 80.1 mAP50 on ExDark), face detection (RetinaNet, 53.7 mAP50 on DarkFace) and instance segmentation (RTMDet-tiny, 61.1 mAP on LIS).",
      ],
      icon: <Target className="text-rose-300" />,
    },
    {
      title: "Real-Time Multi-Camera Perception System",
      category: "Robotics & Edge Deployment",
      impact: "4 streams · 30 FPS · sub-200ms latency",
      stack: ["ROS2", "Jetson", "DeepSORT", "PyTorch"],
      accent: "from-amber-500/25 via-orange-600/10 to-transparent",
      bullets: [
        "Built a real-time perception pipeline processing 4 camera streams at 30 FPS with object detection, DeepSORT tracking and ROS2 communication.",
        "Deployed on Jetson embedded hardware with GPU-optimized model serving and sub-200ms end-to-end latency.",
      ],
      icon: <Camera className="text-amber-300" />,
    },
    {
      title: "CLIP–DINO Hybrid Vision Transformer",
      category: "Multimodal Foundation Models",
      impact: "Zero-shot recognition served in sub-200ms",
      stack: ["CLIP", "DINO", "FastAPI", "Docker", "CI/CD"],
      accent: "from-cyan-500/25 via-sky-600/10 to-transparent",
      bullets: [
        "Developed a hybrid vision foundation model combining self-supervised (DINO) and language-aligned (CLIP) representations for zero-shot object recognition.",
        "Deployed as a containerized inference service using FastAPI and Docker with automated CI/CD, achieving sub-200ms response time.",
      ],
      icon: <Layers className="text-cyan-300" />,
    },
    {
      title: "Master Thesis: Automated SEM Nanoparticle Segmentation",
      category: "Deep Learning & Microscopy",
      impact: "91.3% mAP on 1,327 SEM images",
      stack: ["YOLOv11", "Mask R-CNN", "SAM2"],
      accent: "from-teal-500/25 via-emerald-600/10 to-transparent",
      bullets: [
        "Curated a heterogeneous dataset of 1,327 SEM images to benchmark YOLOv11L-Seg, Mask R-CNN and SAM2.",
        "Achieved 91.3% mAP with YOLOv11L, outperforming foundation models and proving resilience to domain shifts.",
        "Developed an end-to-end automated pipeline for particle size distribution and morphology analysis.",
      ],
      icon: <Microscope className="text-teal-300" />,
    },
    {
      title: "CNN Quantization and Optimization Pipeline",
      category: "Model Optimization & MLOps",
      impact: "2-3x faster inference, controlled accuracy loss",
      stack: ["PTQ", "QAT", "INT8", "FP16"],
      accent: "from-violet-500/25 via-fuchsia-600/10 to-transparent",
      bullets: [
        "Applied Post-Training Quantization (PTQ) and Quantization-Aware Training (QAT) with mixed-precision strategies (INT8/FP16).",
        "Achieved 2-3x inference speedup with controlled accuracy degradation, benchmarked against FP32 baselines.",
      ],
      icon: <Gauge className="text-violet-300" />,
    },
  ],

  publications: [
    {
      venue: "ICCV 2025",
      title: "TorchAdapt: Towards Light-Agnostic Real-Time Visual Perception",
      note: "Peer-reviewed. Real-time perception robust to arbitrary illumination conditions.",
      url: "https://ieeexplore.ieee.org/document/11446114/",
    },
    {
      venue: "IJSRD, Vol. 7, Issue 6, 2022",
      title: "Intellectual Interactive System",
      note: "Peer-reviewed journal publication.",
    },
    {
      venue: "Open Source",
      title: "Active contributor in multimodal and computer vision research",
      note: "Ongoing contributions to open multimodal and CV tooling.",
    },
  ],

  certifications: [
    { name: "Oracle Cloud Infrastructure – Generative AI Professional", year: "2025" },
    { name: "Oracle Cloud Infrastructure – Data Science Professional", year: "2025" },
  ],
};

// --- DYNAMIC HERO TEXTS ---
const rotatingTexts = [
  "AGENTIC RAG > PLAIN RAG",
  "TRAIN > EVALUATE > DEPLOY",
  "PIXELS > PREDICTIONS",
  "RETRIEVE > GROUND > ANSWER",
  "TENSORS > STRESS",
];

// --- ANIMATION VARIANTS ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const COPYRIGHT_YEAR = new Date().getFullYear();

const navItems = ["ABOUT", "EXPERIENCE", "PROJECTS", "PUBLICATIONS", "SKILLS", "EDUCATION", "CONTACT"];

// Bolds quantified results so a recruiter skimming for numbers finds them.
const METRIC_PATTERN = /(sub-200ms|\b\d+(?:[-–]\d+)?(?:,\d{3})*(?:\.\d+)?\s?(?:%|(?:x|ms|FPS)\b))/;

function Highlight({ text }: { text: string }) {
  return (
    <>
      {text.split(METRIC_PATTERN).map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="text-white font-semibold">{part}</strong>
        ) : (
          part
        )
      )}
    </>
  );
}

const VISIBLE_BULLETS = 4;

function ExperienceCard({ exp }: { exp: (typeof enhancedData.experience)[number] }) {
  const [expanded, setExpanded] = useState(false);
  const extra = exp.bullets.length - VISIBLE_BULLETS;

  return (
    <motion.article initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="group relative flex flex-col lg:flex-row gap-8 rounded-3xl bg-[#111827] border border-slate-800 p-8 transition-all hover:border-slate-600">
      <div className={`lg:w-1/4 shrink-0 rounded-2xl relative border border-slate-700/50 bg-gradient-to-br ${exp.accent} flex items-center justify-center p-8 min-h-[140px]`}>
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-700 backdrop-blur-sm">
          {exp.icon}
        </div>
      </div>
      <div className="lg:w-3/4 flex flex-col justify-center">
        <div className="text-[#a8b1ff] font-mono text-sm font-bold w-fit mb-3">{exp.dates}</div>
        <h3 className="text-3xl font-bold text-white mb-1">{exp.role}</h3>
        <h4 className="text-xl text-slate-400 font-medium mb-6">{exp.company}</h4>
        <ul className="space-y-3">
          {exp.bullets.map((bullet, i) => (
            // Extra bullets stay in the DOM (hidden) so crawlers still read them.
            <li key={i} className={`flex items-start gap-4 text-slate-300 text-[1.05rem] leading-relaxed ${!expanded && i >= VISIBLE_BULLETS ? "hidden" : ""}`}>
              <span className="text-[#e4a8ff] mt-1 font-bold" aria-hidden="true">▹</span>
              <span><Highlight text={bullet} /></span>
            </li>
          ))}
        </ul>
        {extra > 0 && (
          <button
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="mt-6 w-fit text-sm font-bold text-[#a8b1ff] hover:text-white transition-colors"
          >
            {expanded ? "Show less" : `Show ${extra} more`}
          </button>
        )}
      </div>
    </motion.article>
  );
}

// Sticky bar that appears after the hero so the resume is always one click away.
function TopBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed top-0 inset-x-0 z-40 border-b border-slate-800 bg-[#0a0f18]/85 backdrop-blur-md"
        >
          <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between gap-6">
            <a href="#home" className="text-lg font-black tracking-tighter text-white">KPS.</a>
            <nav aria-label="Primary" className="hidden md:flex gap-6 text-xs font-bold tracking-widest text-slate-400">
              {["EXPERIENCE", "PROJECTS", "PUBLICATIONS", "SKILLS", "CONTACT"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">{item}</a>
              ))}
            </nav>
            <a href="/resume.pdf" download className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-950 text-sm font-bold hover:bg-slate-200 transition-colors">
              Resume <Download size={14} />
            </a>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}

export default function Portfolio() {
  const [textIndex, setTextIndex] = useState(0);

  // Rotating Text Timer
  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000); // Changes every 3 seconds
    return () => clearInterval(textInterval);
  }, []);

  return (
    <div className="min-h-screen text-slate-200 selection:bg-blue-500/30 font-sans">
      <TopBar />

      {/* FIXED LEFT-EDGE SOCIALS (Hidden on mobile) */}
      <div className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col gap-6 z-50">
        {enhancedData.socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            aria-label={social.name}
            className="text-slate-500 hover:text-white hover:scale-110 transition-all drop-shadow-lg"
          >
            {social.icon}
          </a>
        ))}
        <div className="w-px h-24 bg-slate-800 mx-auto mt-4" />
      </div>

      {/* 1. HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center py-20">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* Left Text Column */}
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">

            {/* Availability Badge */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#111827] border border-slate-800 shadow-xl">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-slate-200 text-sm font-semibold tracking-wide">Available for Full-time opportunities</span>
            </motion.div>

            {/* Main Greeting */}
            <motion.h1 variants={fadeInUp} className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-none">
              Hey, I&apos;m <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a8b1ff] to-[#e4a8ff] font-bold sm:whitespace-nowrap">
                KARTHIK PALYAKERE <br /> SURESH
              </span>
            </motion.h1>

            {/* Role line: the keyword-dense sentence recruiters and search engines read */}
            <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-slate-300 max-w-xl leading-relaxed">
              {enhancedData.hero.tagline}. Building production RAG, multi-agent systems and
              real-time vision pipelines. Published at ICCV 2025.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex items-center gap-2 text-slate-400 text-sm font-medium">
              <MapPin size={16} className="text-[#a8b1ff]" />
              {enhancedData.hero.location}
            </motion.div>

            {/* Animated Rotating Subtitle */}
            <motion.div variants={fadeInUp} className="h-10 text-lg sm:text-xl font-mono font-bold text-slate-400 flex items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={textIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {rotatingTexts[textIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            {/* Primary calls to action, above the fold */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-2">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-950 font-bold hover:bg-slate-200 transition-colors"
              >
                Download Resume <Download size={18} />
              </a>
              <a
                href="mailto:Karthikps174@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111827] border border-slate-700 text-white font-bold hover:border-[#a8b1ff] transition-colors"
              >
                Get in Touch <Mail size={18} />
              </a>
              <a
                href="https://linkedin.com/in/karthikps84"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111827] border border-slate-700 text-white font-bold hover:border-[#a8b1ff] transition-colors"
              >
                LinkedIn <Linkedin size={18} />
              </a>
            </motion.div>

            {/* Proof strip: the credentials a recruiter looks for in the first seconds */}
            <motion.ul variants={fadeInUp} className="flex flex-wrap gap-2 pt-2">
              {enhancedData.hero.proof.map((item) => (
                <li key={item} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#111827] border border-slate-800 text-xs font-semibold text-slate-300">
                  <CheckCircle2 size={14} className="text-emerald-400" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </motion.ul>

            {/* Inline Navigation Menu */}
            <motion.nav variants={fadeInUp} aria-label="Section navigation" className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold tracking-widest text-slate-400 pt-6">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </motion.nav>

          </motion.div>

          {/* Right Photo Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className="relative mx-auto w-full max-w-[350px] sm:max-w-[450px] aspect-square flex items-center justify-center mt-10 lg:mt-0"
          >
            {/* Outer Ring / Border Mask */}
            <div className="absolute inset-0 rounded-full border-[6px] border-[#1e293b] p-2 shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <Image
                  src={enhancedData.hero.photo}
                  alt="Karthik Palyakere Suresh, AI/ML Engineer"
                  fill
                  priority
                  sizes="(max-width: 640px) 350px, 450px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0f18]/40 to-transparent" />
              </div>
            </div>

            {/* Floating Tag */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-8 -left-4 sm:-left-12 z-20 px-5 py-3 rounded-xl bg-[#111827] border border-slate-700 shadow-2xl flex items-center gap-3"
            >
              <div className="w-3 h-3 rounded-full bg-[#8b5cf6]" />
              <span className="text-white font-bold tracking-wide">AI / ML Engineer</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT ME SECTION */}
      <section id="about" className="py-24 relative bg-[#0d131f]/80 border-y border-slate-800/50 scroll-mt-24">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4 md:sticky md:top-32">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              {enhancedData.about.title}
            </h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-[#a8b1ff] to-[#e4a8ff] rounded-full" />
          </div>
          <div className="md:col-span-8 space-y-6 text-lg text-slate-400 leading-relaxed font-light">
            {enhancedData.about.paragraphs.map((p, i) => (
              <motion.p key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* 3. IMPACT METRICS */}
      <section aria-label="Impact metrics" className="py-12 border-b border-slate-800/50">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x md:divide-slate-800">
          {enhancedData.metrics.map((m) => (
            <div key={m.label} className="md:pl-8 md:first:pl-0">
              <div className="text-4xl md:text-5xl font-black text-white mb-2">{m.value}</div>
              <div className="text-sm font-bold text-[#a8b1ff] uppercase tracking-wider">{m.label}</div>
              <div className="text-sm text-slate-500 mt-1">{m.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6 py-24 space-y-32">

        {/* 4. EXPERIENCE SECTION */}
        <section id="experience" className="space-y-12 scroll-mt-24">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-16">Experience</h2>
          <div className="space-y-8">
            {enhancedData.experience.map((exp) => (
              <ExperienceCard key={exp.company} exp={exp} />
            ))}
          </div>
        </section>

        {/* 5. PROJECTS SECTION */}
        <section id="projects" className="space-y-12 scroll-mt-24">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-16">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {enhancedData.projects.map((proj, idx) => {
              // First two cards get an asymmetric 4/2 split; the rest sit on a 3/3 grid.
              let colSpan = "md:col-span-3";
              if (idx === 0) colSpan = "md:col-span-4";
              else if (idx === 1) colSpan = "md:col-span-2";

              return (
                <motion.article key={proj.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -5 }} className={`group relative rounded-3xl overflow-hidden border border-slate-800 bg-[#111827] min-h-[360px] flex flex-col justify-end ${colSpan}`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${proj.accent} opacity-80 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f18] via-[#0a0f18]/70 to-transparent" />
                  <div className="relative p-8 z-10">
                    <div className="mb-4 bg-slate-800/80 p-3 rounded-xl w-fit backdrop-blur-md border border-slate-700">{proj.icon}</div>
                    <div className="text-xs font-bold tracking-widest text-[#a8b1ff] uppercase mb-2">{proj.category}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{proj.title}</h3>
                    <p className="text-[#e4a8ff] text-sm font-semibold mb-4">{proj.impact}</p>
                    <ul className="space-y-2">
                      {proj.bullets.map((b, i) => (
                        <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                          <span className="text-[#e4a8ff] mt-0.5" aria-hidden="true">▹</span> {b}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-5">
                      {proj.stack.map((t) => (
                        <span key={t} className="px-2.5 py-1 text-xs rounded-md bg-slate-900/70 border border-slate-700 text-slate-300">{t}</span>
                      ))}
                    </div>
                    {proj.links && (
                      <div className="flex flex-wrap gap-3 mt-5">
                        {proj.links.map((l) => (
                          <a key={l.label} href={l.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 border border-slate-600 text-sm font-semibold text-white hover:bg-white hover:text-slate-950 transition-colors">
                            {l.label === "Code" ? <Github size={14} aria-hidden="true" /> : <ExternalLink size={14} aria-hidden="true" />}
                            {l.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* 6. PUBLICATIONS SECTION */}
        <section id="publications" className="space-y-12 scroll-mt-24">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-16">Publications</h2>
          <div className="space-y-4">
            {enhancedData.publications.map((pub, idx) => (
              <motion.div key={pub.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 p-6 md:p-8 rounded-3xl bg-[#111827] border border-slate-800 hover:border-slate-600 transition-colors">
                <div className="flex items-center gap-4 sm:w-64 shrink-0">
                  <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700">
                    <BookOpen className="w-5 h-5 text-[#a8b1ff]" />
                  </div>
                  <span className="font-mono text-sm font-bold text-[#a8b1ff]">{pub.venue}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {pub.url ? (
                      <a href={pub.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-[#a8b1ff] transition-colors">
                        {pub.title} <ExternalLink size={16} aria-hidden="true" />
                      </a>
                    ) : (
                      pub.title
                    )}
                  </h3>
                  <p className="text-slate-400 text-sm">{pub.note}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 7. SKILLS SECTION */}
        <section id="skills" className="space-y-12 scroll-mt-24">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Technical Arsenal</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enhancedData.skills.map((skillGroup, idx) => (
              <motion.div key={skillGroup.category} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="group p-8 rounded-3xl bg-[#111827] border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700">{skillGroup.icon}</div>
                  <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <span key={item} className="px-3 py-1.5 text-sm rounded-lg bg-[#0a0f18] border border-slate-800 text-slate-300 group-hover:text-[#a8b1ff] transition-colors">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 8. EDUCATION + CERTIFICATIONS SECTION */}
        <section id="education" className="space-y-12 scroll-mt-24">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-16">Education &amp; Certifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {enhancedData.education.map((edu, idx) => (
              <motion.div key={edu.degree} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.2 }} className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[#111827] to-[#0d131f] border border-slate-800 relative overflow-hidden">
                <GraduationCap className="text-[#a8b1ff] w-10 h-10 mb-6" />
                <div className="text-slate-400 font-mono text-sm font-bold mb-3">{edu.dates}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                <h4 className="text-lg text-slate-400 font-medium mb-6">{edu.institution}</h4>
                <div className="w-full h-px bg-slate-800 mb-6" />
                <p className="text-slate-300 text-sm leading-relaxed">{edu.bullets[0]}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {enhancedData.certifications.map((cert) => (
              <motion.div key={cert.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-5 p-6 rounded-2xl bg-[#111827] border border-slate-800 hover:border-slate-600 transition-colors">
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 shrink-0">
                  <Award className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white leading-snug">{cert.name}</h3>
                  <span className="text-sm text-slate-500 font-mono">{cert.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* 9. GET IN TOUCH FOOTER */}
      <section id="contact" className="relative py-32 border-t border-slate-800 flex flex-col items-center text-center scroll-mt-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-6xl sm:text-7xl md:text-8xl font-black leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 uppercase">
              Let&apos;s Talk
            </h2>
            <p className="text-xl md:text-2xl text-slate-400 mt-6 max-w-2xl mx-auto">
              I am currently looking for full-time AI/ML Engineer and Data Scientist roles in Germany and the EU.
              Whether you have a question or just want to say hi, my inbox is always open.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <motion.a href="mailto:Karthikps174@gmail.com" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-slate-950 text-xl font-bold transition-all shadow-xl hover:shadow-2xl">
              Say Hello <Mail size={24} />
            </motion.a>
            <motion.a href="/resume.pdf" download whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-slate-800 border border-slate-700 text-white text-xl font-bold transition-all hover:bg-slate-700">
              Resume <Download size={24} />
            </motion.a>
          </div>

          <div className="pt-16 flex flex-wrap justify-center gap-6">
            {enhancedData.socials.map((social) => (
              <a key={social.name} href={social.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full border border-slate-800 text-slate-400 hover:text-white hover:border-[#a8b1ff] hover:bg-slate-900 transition-all font-medium">
                {social.icon} {social.name}
              </a>
            ))}
          </div>

          <div className="pt-24 flex flex-col items-center gap-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#111827] border border-slate-800 text-slate-400 hover:text-white hover:border-[#a8b1ff] transition-all font-mono text-sm tracking-widest uppercase group shadow-lg"
            >
              Back to Top <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>
            <div className="text-slate-600 text-sm font-mono tracking-widest uppercase">
              © {COPYRIGHT_YEAR} Karthik Palyakere Suresh.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
