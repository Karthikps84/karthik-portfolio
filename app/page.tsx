"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Download, MapPin, Mail, Phone, ExternalLink, Cpu, 
  BrainCircuit, Network, Sparkles, Layers, ArrowRight, 
  Camera, Target, BoxSelect, Microscope, Code2, Globe,
  Github, Linkedin, Instagram, Twitter
} from "lucide-react";

// --- ENHANCED DATA ---
const enhancedData = {
  hero: {
    greeting: "Hi, I'm Karthik Palyakere Suresh",
    headline: "Architecting Next-Gen Vision & Robotics Systems.",
    sub: "Full-Stack Machine Learning & Computer Vision Engineer",
    // Replace this URL with "/profile.jpg" once you add your photo to the public folder
    photo: "/profile.JPG?auto=format&fit=crop&q=80&w=1000", 
  },
  about: {
    title: "Beyond the Code.",
    paragraphs:[
      "I am a Machine Learning Researcher and Engineer based in Mannheim, Germany, driven by the challenge of teaching machines to understand and interact with the physical world.",
      "My journey started with a deep curiosity for Artificial Intelligence and has evolved into a specialized focus on Computer Vision, Multimodal Learning, and Foundation Models. I don't just train models in a vacuum; I build end-to-end architectures—from custom hardware sensor integration (IDS cameras, ROS2) to deploying optimized algorithms (ONNX, TensorRT) on the edge.",
      "Whether it's writing a master thesis on nanoparticle segmentation or publishing peer-reviewed research at ICCV 2025 on light-agnostic perception, my goal remains the same: bridging the gap between cutting-edge academic research and robust, scalable industrial applications."
    ]
  },
  socials:[
    { name: "LinkedIn", url: "https://linkedin.com/in/karthikps84", icon: <Linkedin className="w-5 h-5" /> },
    { name: "GitHub", url: "https://github.com/karthikps84", icon: <Github className="w-5 h-5" /> },
    { name: "Instagram", url: "https://instagram.com/karthikps31", icon: <Instagram className="w-5 h-5" /> },
  ],
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
      bullets:["Published real-time light-agnostic visual perception research evaluated across Exdark, LIS, and Darkface datasets.", "Architected and benchmarked YOLOv3, RetinaNet, and RTMDet-tiny pipelines.", "Achieved 80.1 mAP50 on dark environments, proving high robustness for autonomous nighttime navigation."],
      icon: <Target className="text-rose-400" />
    },
    {
      title: "Master Thesis: Automated SEM Nanoparticle Segmentation",
      category: "Deep Learning & Microscopy",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1000",
      bullets:["Curated a heterogeneous dataset of 1,327 SEM images to benchmark YOLOv11L-Seg, Mask R-CNN, and SAM2.", "Achieved 91.3% mAP with YOLOv11L, outperforming foundational models and proving high resilience to domain shifts.", "Developed an end-to-end automated pipeline for particle size distribution and morphology analysis."],
      icon: <Microscope className="text-teal-400" />
    },
    {
      title: "IDS Multi-Camera Edge Pipeline",
      category: "Hardware Integration & Robotics",
      image: "https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&q=80&w=1000",
      bullets:["Built a robust integration using the IDS Peak SDK and OpenCV for synchronized hardware-level video streaming.", "Engineered multi-threaded image capture for industrial quality control cells."],
      icon: <Camera className="text-amber-400" />
    },
    {
      title: "Enterprise RAG Architecture",
      category: "Generative AI",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000",
      bullets:["Engineered scalable RAG pipelines using advanced embedding models and vector similarity search.", "Optimized retrieval strategies to maximize LLM answer consistency and minimize hallucinations."],
      icon: <Network className="text-purple-400" />
    }
  ],
  experience:[
    {
      company: "Merck Group KGaA",
      role: "Data Scientist Intern (Computer Vision)",
      dates: "March 2025 – Current",
      image: "https://kce.ac.in/new/wp-content/uploads/2023/08/Emerging-Trends-in-Material-Science-From-Nanotechnology-to-Advanced-Composites-scaled.jpg?auto=format&fit=crop&q=80&w=1000",
      bullets:["Fine-tuning heavy Foundation Models (SAM2, SAM3, Mask R-CNN) on complex, high-res SEM/TEM microscopy datasets.", "Engineering synthetic data generation pipelines, successfully reducing model overfitting by 35%.", "Optimizing massive computer vision models for low-latency inference using ONNX Runtime.", "Building production-grade, containerized training workflows (Docker/PyTorch)."]
    },
    {
      company: "DFKI",
      role: "AI Research Assistant / Robotics Perception",
      dates: "July 2023 – Feb 2025",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
      bullets:["Engineered a vision-guided mobile robotic cell for automated vehicle chassis assembly and screwdriving.", "Integrated real-time process control with a Digital Twin platform, enabling highly accurate trajectory optimization.", "Developed custom camera drivers (IDS Peak SDK, OpenCV) for high-speed multi-sensor data capture.", "Pioneered light-agnostic vision pipelines (TorchAdapt), culminating in an accepted peer-reviewed publication at ICCV 2025."]
    }
  ]
};

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Portfolio() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  },[]);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950">
        <motion.div animate={{ scale:[1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1.5 }} className="flex items-center gap-3">
          <BrainCircuit size={48} className="text-blue-500" />
          <span className="text-4xl font-black text-white tracking-tighter">KPS.</span>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-blue-500/30 font-sans overflow-hidden">
      
      {/* 1. DYNAMIC HERO SECTION WITH PHOTO */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-12 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-600/20 to-purple-600/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Left Text Column */}
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-8">
            <motion.div variants={fadeInUp} className="flex items-center gap-4">
              <span className="w-12 h-[2px] bg-gradient-to-r from-blue-500 to-transparent"></span>
              <span className="text-blue-400 font-mono tracking-widest uppercase text-sm font-semibold">
                {enhancedData.hero.greeting}
              </span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl sm:text-7xl font-black tracking-tighter text-white leading-[1.05]">
              Architecting <br /> Next-Gen <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                Vision Systems.
              </span>
            </motion.h1>

            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 pt-4">
              <button onClick={() => document.getElementById('contact')?.scrollIntoView()} className="px-8 py-4 rounded-full bg-white text-slate-950 font-bold hover:bg-blue-50 hover:scale-105 transition-all flex items-center gap-2 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                Let's Talk <ArrowRight size={18} />
              </button>
              <a href="/resume.pdf" download className="px-8 py-4 rounded-full bg-slate-800/80 border border-slate-700 text-white font-semibold hover:bg-slate-700 transition-all flex items-center gap-2 backdrop-blur-md group">
                Resume <Download size={18} className="group-hover:translate-y-1 transition-transform" />
              </a>
            </motion.div>

            {/* Social Links under Hero */}
            <motion.div variants={fadeInUp} className="flex items-center gap-4 pt-6">
              {enhancedData.socials.map((social, idx) => (
                <a key={idx} href={social.url} target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 hover:-translate-y-1 transition-all">
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Photo Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }} 
            animate={{ opacity: 1, scale: 1, rotate: 0 }} 
            transition={{ duration: 1, type: "spring" }}
            className="relative mx-auto w-full max-w-[500px] aspect-[4/5]"
          >
            {/* Main Photo Container */}
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden border border-slate-800 shadow-2xl z-10">
              <img src={enhancedData.hero.photo} alt="Karthik Profile" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            </div>

            {/* Floating Glassmorphism Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 md:-left-12 z-20 p-6 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 shadow-2xl flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                <Sparkles size={24} />
              </div>
              <div>
                <div className="text-2xl font-black text-white">ICCV 2025</div>
                <div className="text-sm font-medium text-slate-400">Published Researcher</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT ME SECTION */}
      <section id="about" className="py-24 relative bg-slate-900/20 border-y border-slate-800">
        <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5 sticky top-24">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              {enhancedData.about.title}
            </h2>
            <div className="w-20 h-2 bg-blue-500 rounded-full" />
          </div>
          <div className="md:col-span-7 space-y-6 text-lg md:text-xl text-slate-400 leading-relaxed font-light">
            {enhancedData.about.paragraphs.map((p, i) => (
              <motion.p key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* 3. IMPACT METRICS (Marquee Style Strip) */}
      <section className="py-12 border-b border-slate-800 bg-slate-900/50">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-800">
          {enhancedData.metrics.map((m, i) => (
            <div key={i} className={`pl-8 ${i === 0 ? 'pl-0' : ''}`}>
              <div className="text-4xl md:text-5xl font-black text-white mb-2">{m.value}</div>
              <div className="text-sm font-bold text-blue-400 uppercase tracking-wider">{m.label}</div>
              <div className="text-sm text-slate-500 mt-1">{m.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 py-24 space-y-32">
        {/* 4. THE TECHNICAL ARSENAL */}
        <section id="skills" className="space-y-12">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Technical Arsenal</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enhancedData.skills.map((skillGroup, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="group p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700">{skillGroup.icon}</div>
                  <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, i) => (
                    <span key={i} className="px-3 py-1.5 text-sm rounded-lg bg-slate-950 border border-slate-800 text-slate-300 group-hover:text-blue-300 transition-colors">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. PRODUCTION EXPERIENCE */}
        <section id="experience" className="space-y-12">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-16">Production Experience</h2>
          <div className="space-y-12">
            {enhancedData.experience.map((exp, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="group relative flex flex-col lg:flex-row gap-10 rounded-3xl bg-slate-900/40 border border-slate-800 p-8 hover:bg-slate-800/40 transition-colors">
                <div className="lg:w-1/3 shrink-0 overflow-hidden rounded-2xl relative h-64 lg:h-auto border border-slate-700/50">
                  <img src={exp.image} alt={exp.company} className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                </div>
                <div className="lg:w-2/3 flex flex-col justify-center py-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-emerald-400 font-mono text-xs font-bold w-fit mb-4">{exp.dates}</div>
                  <h3 className="text-3xl font-bold text-white mb-1">{exp.role}</h3>
                  <h4 className="text-xl text-blue-400 font-medium mb-6">{exp.company}</h4>
                  <ul className="space-y-4">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-4 text-slate-300 text-lg leading-relaxed">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2.5 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 6. FEATURED ARCHITECTURE (Bento Grid) */}
        <section id="projects" className="space-y-12">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-16">Featured Architecture</h2>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {enhancedData.projects.map((proj, idx) => {
              let colSpan = "md:col-span-3";
              if (idx === 0) colSpan = "md:col-span-4";
              else if (idx === 1) colSpan = "md:col-span-2";

              return (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -5 }} className={`group relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 min-h-[400px] flex flex-col justify-end ${colSpan}`}>
                  <div className="absolute inset-0">
                    <img src={proj.image} alt={proj.title} className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
                  </div>
                  <div className="relative p-8 z-10">
                    <div className="mb-4 bg-slate-800/80 p-3 rounded-xl w-fit backdrop-blur-md border border-slate-700">{proj.icon}</div>
                    <div className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-2">{proj.category}</div>
                    <h3 className="text-2xl font-bold text-white mb-4">{proj.title}</h3>
                    <ul className="space-y-2">
                      {proj.bullets.map((b, i) => (
                        <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                          <span className="text-blue-500 mt-0.5">▹</span> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>

      {/* 7. MASSIVE "GET IN TOUCH" FOOTER */}
      <section id="contact" className="relative py-32 bg-slate-950 border-t border-slate-800 overflow-hidden flex flex-col items-center text-center">
        {/* Background Decorative Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-12">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <h2 className="text-[12vw] sm:text-[8vw] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 uppercase">
              Let's Talk
            </h2>
            <p className="text-xl md:text-2xl text-slate-400 mt-6 max-w-2xl mx-auto">
              I am currently looking for full-time opportunities. Whether you have a question or just want to say hi, my inbox is always open.
            </p>
          </motion.div>

          <motion.a 
            href="mailto:Karthikps174@gmail.com" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-slate-950 text-xl font-bold transition-all shadow-[0_0_60px_rgba(255,255,255,0.2)] hover:shadow-[0_0_80px_rgba(255,255,255,0.4)]"
          >
            Say Hello <Mail size={24} />
          </motion.a>

          {/* Large Footer Socials */}
          <div className="pt-16 flex flex-wrap justify-center gap-6">
            {enhancedData.socials.map((social, idx) => (
              <a key={idx} href={social.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500 hover:bg-slate-900 transition-all font-medium">
                {social.icon} {social.name}
              </a>
            ))}
          </div>

          <div className="pt-24 text-slate-600 text-sm">
            © {new Date().getFullYear()} Karthik Palyakere Suresh. Designed & Built for the Future.
          </div>
        </div>
      </section>
    </div>
  );
}