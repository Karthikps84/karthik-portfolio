"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Download, MapPin, Mail, Phone, ExternalLink, Cpu, 
  BrainCircuit, Network, Sparkles, Layers, ArrowRight, 
  Camera, Target, BoxSelect, Microscope, Code2, Globe 
} from "lucide-react";

// ENHANCED DATA WITH THESIS & CATEGORICAL SKILLS
const enhancedData = {
  hero: {
    greeting: "Hi, I'm Karthik Palyakere Suresh",
    headline: "Architecting Next-Gen Vision & Robotics Systems.",
    sub: "Full-Stack Machine Learning & Computer Vision Engineer",
    summary: "Bridging the gap between cutting-edge AI research and scalable hardware deployment. Specializing in Foundation Models, Real-time Edge Perception, and Full-Stack MLOps. Proven track record of deploying robust systems for autonomous robotics and publishing at top-tier venues.",
  },
  metrics:[
    { label: "Vision Inference", value: "30 FPS", desc: "Real-time edge multi-sensor" },
    { label: "mAP50 Boost", value: "15%", desc: "In low-light (TorchAdapt)" },
    { label: "Thesis mAP", value: "91.3%", desc: "YOLOv11L on SEM dataset" },
    { label: "Automation Acc.", value: "92%", desc: "Robotic perception control" },
  ],
  skills:[
    { category: "Computer Vision", icon: <Target className="w-6 h-6 text-rose-400" />, items:["Object Detection", "Instance Segmentation", "Semantic Segmentation", "Image Classification", "Low-light Vision", "2D/3D Vision"] },
    { category: "GenAI & Multimodal", icon: <BrainCircuit className="w-6 h-6 text-purple-400" />, items:["LLMs", "RAG", "Embeddings", "Vector Databases", "Prompt Engineering", "Synthetic Data", "SAM2", "CLIP"] },
    { category: "Frameworks & Tools", icon: <Layers className="w-6 h-6 text-blue-400" />, items:["PyTorch", "TensorFlow", "Hugging Face", "OpenCV", "Detectron2", "NumPy"] },
    { category: "Deployment & MLOps", icon: <Cpu className="w-6 h-6 text-emerald-400" />, items:["ONNX Runtime", "TensorRT", "Docker", "FastAPI", "ROS2", "AWS MLOps", "CI/CD"] },
    { category: "Programming", icon: <Code2 className="w-6 h-6 text-amber-400" />, items: ["Python", "C++", "C", "Bash", "SQL"] },
    { category: "Languages", icon: <Globe className="w-6 h-6 text-teal-400" />, items: ["English (C2)", "German (B1)"] }
  ],
  projects:[
    {
      title: "TorchAdapt: Light-Agnostic Perception (ICCV 2025)",
      category: "Core CV Research & Open Source",
      image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1000",
      bullets:[
        "Published real-time light-agnostic visual perception research evaluated across Exdark, LIS, and Darkface datasets.",
        "Architected and benchmarked YOLOv3, RetinaNet, and RTMDet-tiny pipelines.",
        "Achieved 80.1 mAP50 on dark environments, proving high robustness for autonomous nighttime navigation."
      ],
      icon: <Target className="text-rose-400" />
    },
    {
      title: "Master Thesis: Automated SEM Nanoparticle Segmentation",
      category: "Deep Learning & Microscopy",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1000",
      bullets:[
        "Curated a heterogeneous dataset of 1,327 SEM images to benchmark YOLOv11L-Seg, Mask R-CNN, and SAM2.",
        "Achieved 91.3% mAP with YOLOv11L, outperforming foundational models and proving high resilience to domain shifts.",
        "Developed an end-to-end automated pipeline for particle size distribution and morphology analysis."
      ],
      icon: <Microscope className="text-teal-400" />
    },
    {
      title: "IDS Multi-Camera Edge Pipeline",
      category: "Hardware Integration & Robotics",
      image: "https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&q=80&w=1000",
      bullets:[
        "Built a robust integration using the IDS Peak SDK and OpenCV for synchronized hardware-level video streaming.",
        "Engineered multi-threaded image capture for industrial quality control cells."
      ],
      icon: <Camera className="text-amber-400" />
    },
    {
      title: "Custom COCO Annotation Engine",
      category: "MLOps & Data Engineering",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      bullets:[
        "Developed a GUI-based data labeling tool supporting complex bounding boxes and direct COCO-format JSON exports.",
        "Implemented interactive zooming to drastically accelerate internal data engineering workflows."
      ],
      icon: <BoxSelect className="text-blue-400" />
    },
    {
      title: "Enterprise RAG Architecture",
      category: "Generative AI",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000",
      bullets:[
        "Engineered scalable RAG pipelines using advanced embedding models and vector similarity search.",
        "Optimized retrieval strategies to maximize LLM answer consistency and minimize hallucinations."
      ],
      icon: <Network className="text-purple-400" />
    },
    {
      title: "CLIP-DINO Hybrid Foundation Model",
      category: "Multimodal AI",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
      bullets:[
        "Combined zero-shot vision-language capabilities with self-supervised feature extraction.",
        "Containerized and deployed as a high-throughput microservice via FastAPI and Docker."
      ],
      icon: <BrainCircuit className="text-emerald-400" />
    }
  ],
  experience:[
    {
      company: "DFKI (Deutsches Forschungszentrum für Künstliche Intelligenz)",
      role: "AI Research Assistant / Robotics Perception",
      dates: "July 2023 – Feb 2025",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
      bullets:[
        "Engineered a vision-guided mobile robotic cell for automated vehicle chassis assembly and screwdriving.",
        "Integrated real-time process control with a Digital Twin platform, enabling highly accurate trajectory optimization.",
        "Developed custom camera drivers (IDS Peak SDK, OpenCV) for high-speed multi-sensor data capture.",
        "Pioneered light-agnostic vision pipelines (TorchAdapt), culminating in an accepted peer-reviewed publication at ICCV 2025."
      ]
    },
    {
      company: "Merck Group KGaA",
      role: "Data Scientist Intern (Computer Vision)",
      dates: "March 2025 – Current",
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=1000",
      bullets:[
        "Fine-tuning heavy Foundation Models (SAM2, SAM3, Mask R-CNN) on complex, high-res SEM/TEM microscopy datasets.",
        "Engineering synthetic data generation pipelines, successfully reducing model overfitting by 35%.",
        "Optimizing massive computer vision models for low-latency inference using ONNX Runtime.",
        "Building production-grade, containerized training workflows (Docker/PyTorch)."
      ]
    }
  ]
};

export default function Portfolio() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  },[]);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950">
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1.5 }} className="flex items-center gap-3">
          <BrainCircuit size={48} className="text-blue-500" />
          <span className="text-4xl font-black text-white tracking-tighter">KPS.</span>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-20 sm:py-32 flex flex-col gap-32 relative z-10 selection:bg-blue-500/30">
      
      {/* 1. HERO SECTION (UPDATED WITH NAME & DYNAMIC ANIMATIONS) */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
        className="grid lg:grid-cols-2 gap-12 items-center"
      >
        <div className="space-y-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <span className="w-12 h-[2px] bg-gradient-to-r from-blue-500 to-transparent"></span>
            <span className="text-blue-400 font-mono tracking-widest uppercase text-sm font-semibold">
              {enhancedData.hero.greeting}
            </span>
          </motion.div>

          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Architecting Next-Gen <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              Vision & Robotics
            </span> Systems.
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl font-light">
            {enhancedData.hero.summary}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button onClick={() => document.getElementById('projects')?.scrollIntoView()} className="px-8 py-4 rounded-xl bg-white text-slate-950 font-bold hover:bg-blue-50 hover:scale-105 transition-all flex items-center gap-2 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
              Explore Architecture <ArrowRight size={18} />
            </button>
            <a href="/resume.pdf" download className="px-8 py-4 rounded-xl bg-slate-800/80 border border-slate-700 text-white font-semibold hover:bg-slate-700 hover:border-slate-500 transition-all flex items-center gap-2 backdrop-blur-md">
              Download Resume <Download size={18} />
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400 pt-6 font-mono">
            <span className="flex items-center gap-2"><MapPin size={16} className="text-blue-400"/> Mannheim, DE</span>
            <span className="flex items-center gap-2"><Mail size={16} className="text-blue-400"/> Karthikps174@gmail.com</span>
            <span className="flex items-center gap-2"><Phone size={16} className="text-blue-400"/> +49 1746301323</span>
          </div>
        </div>
        
        {/* Dynamic Metric Grid */}
        <div className="hidden lg:flex justify-end relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-[120px] rounded-full" />
          <div className="grid grid-cols-2 gap-4 w-full max-w-md relative z-10">
            {enhancedData.metrics.map((m, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -8, scale: 1.03 }} 
                transition={{ type: "spring", stiffness: 300 }}
                className="group p-6 rounded-2xl bg-slate-900/60 border border-slate-700/50 backdrop-blur-xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="text-4xl font-black text-white mb-2">{m.value}</div>
                  <div className="text-sm font-semibold text-blue-400 mb-1">{m.label}</div>
                  <div className="text-xs text-slate-500">{m.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 2. TECHNICAL ARSENAL (NEW CATEGORICAL SKILLS MATRIX) */}
      <section id="skills" className="space-y-12 pt-10">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">The Technical Arsenal</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">From bare-metal hardware integration to deploying quantized generative models on the edge.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enhancedData.skills.map((skillGroup, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-slate-600 transition-colors overflow-hidden"
            >
              {/* Subtle hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700">
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, i) => (
                    <span key={i} className="px-3 py-1.5 text-sm rounded-lg bg-slate-950 border border-slate-800 text-slate-300 group-hover:border-slate-700 transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. EXPERIENCE AS DEPLOYMENT LOGS */}
      <section id="experience" className="space-y-12 pt-10">
        <h2 className="text-3xl md:text-5xl font-bold">Production Experience</h2>
        <div className="space-y-8">
          {enhancedData.experience.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative flex flex-col lg:flex-row gap-8 rounded-3xl bg-slate-900/40 border border-slate-800 p-6 md:p-8 hover:bg-slate-800/40 transition-colors"
            >
              <div className="lg:w-1/3 shrink-0 overflow-hidden rounded-2xl relative h-64 lg:h-auto">
                <img src={exp.image} alt={exp.company} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 border border-white/10 rounded-2xl" />
              </div>
              <div className="lg:w-2/3 flex flex-col justify-center py-4">
                <div className="text-emerald-400 font-mono text-sm mb-2">{exp.dates}</div>
                <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                <h4 className="text-lg text-slate-400 font-medium mb-6">{exp.company}</h4>
                <ul className="space-y-4">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. BENTO BOX PROJECTS (Includes Thesis) */}
      <section id="projects" className="space-y-12 pt-10">
        <div className="flex items-center gap-4">
          <Layers className="text-purple-400 w-8 h-8" />
          <h2 className="text-3xl md:text-5xl font-bold">Featured Architecture & Research</h2>
        </div>
        
        {/* Dynamic Masonry/Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {enhancedData.projects.map((proj, idx) => {
            // Stunning grid layout logic:
            // 0: 4 cols (TorchAdapt)
            // 1: 2 cols (Master Thesis - tall)
            // 2, 3: 3 cols each (Tools)
            // 4, 5: 3 cols each (GenAI / Models)
            let colSpan = "md:col-span-3";
            if (idx === 0) colSpan = "md:col-span-4";
            else if (idx === 1) colSpan = "md:col-span-2";

            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.4 }}
                className={`group relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 ${colSpan}`}
              >
                <div className="absolute inset-0">
                  <img src={proj.image} alt={proj.title} className="w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-slate-900/20" />
                </div>
                <div className="relative p-8 h-full flex flex-col justify-end min-h-[380px]">
                  <div className="mb-4 bg-slate-800/60 p-3 rounded-xl w-fit backdrop-blur-md border border-slate-700/50 shadow-lg">
                    {proj.icon}
                  </div>
                  <div className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-2">{proj.category}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{proj.title}</h3>
                  <ul className="space-y-3">
                    {proj.bullets.map((b, i) => (
                      <li key={i} className="text-slate-300 text-sm flex items-start gap-2 leading-relaxed">
                        <span className="text-blue-500 mt-1 font-bold">▹</span> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* FOOTER CALL TO ACTION */}
      <section className="pb-20 pt-10">
        <div className="rounded-3xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 p-12 text-center relative overflow-hidden backdrop-blur-xl">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50" />
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Let's build the future of AI.</h2>
            <p className="text-lg text-slate-300">Currently exploring full-time opportunities in applied Machine Learning, Edge CV, and Robotics engineering.</p>
            <a href="mailto:Karthikps174@gmail.com" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-500 text-white font-bold hover:bg-blue-400 transition-all hover:scale-105 shadow-[0_0_30px_rgba(59,130,246,0.4)] mt-4">
              Contact Me <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}