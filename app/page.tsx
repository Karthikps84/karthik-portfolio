"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  Download, MapPin, Mail, Phone, ExternalLink, Cpu, 
  BrainCircuit, Network, Layers, Target, BoxSelect, 
  Microscope, Code2, Globe, Github, Linkedin, Instagram, 
  Twitter, GraduationCap, Camera, ArrowUp
} from "lucide-react";

// --- ENHANCED DATA ---
const enhancedData = {
  hero: {
    photo: "/profile.JPG?auto=format&fit=crop&q=80&w=1000", // Update with /profile.jpg
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
    { name: "LinkedIn", url: "https://linkedin.com/in/karthikps84", icon: <Linkedin size={20} /> },
    { name: "GitHub", url: "https://github.com/karthikps84", icon: <Github size={20} /> },
    { name: "Instagram", url: "https://instagram.com/karthikps31", icon: <Instagram size={20} /> },
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
    { category: "Programming", icon: <Code2 className="w-6 h-6 text-amber-400" />, items:["Python", "C++", "C", "Bash", "SQL"] },
    { category: "Languages", icon: <Globe className="w-6 h-6 text-teal-400" />, items:["English (C2)", "German (B1)"] }
  ],
  education:[
    {
      degree: "M.Sc. Computer Science (AI & Computer Vision)",
      institution: "Technical University of Kaiserslautern, Germany",
      dates: "Oct 2022 – March 2026",
      bullets:["Relevant Coursework: Machine Learning Algorithms, Deep Learning, Image Processing, NLP, Web Mining"]
    },
    {
      degree: "B.E. Computer Science",
      institution: "Nitte Meenakshi Institute of Technology, Bangalore, India",
      dates: "Jul 2018 – Aug 2022",
      bullets: ["Relevant Coursework: Machine Learning, Artificial Intelligence"]
    }
  ],
  experience:[
    {
      company: "Merck Group KGaA",
      role: "Data Scientist Intern (Computer Vision)",
      dates: "March 2025 – Current",
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=1000",
      bullets:["Fine-tuning heavy Foundation Models (SAM2, SAM3, Mask R-CNN) on complex, high-res SEM/TEM microscopy datasets.", "Engineering synthetic data generation pipelines, successfully reducing model overfitting by 35%.", "Optimizing massive computer vision models for low-latency inference using ONNX Runtime.", "Building production-grade, containerized training workflows (Docker/PyTorch)."]
    },
    {
      company: "DFKI",
      role: "AI Research Assistant / Robotics Perception",
      dates: "July 2023 – Feb 2025",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
      bullets:["Engineered a vision-guided mobile robotic cell for automated vehicle chassis assembly and screwdriving.", "Integrated real-time process control with a Digital Twin platform, enabling highly accurate trajectory optimization.", "Developed custom camera drivers (IDS Peak SDK, OpenCV) for high-speed multi-sensor data capture.", "Pioneered light-agnostic vision pipelines (TorchAdapt), culminating in an accepted peer-reviewed publication at ICCV 2025."]
    }
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
  ]
};

// --- DYNAMIC HERO TEXTS ---
const rotatingTexts =[
  "DEBUG > SLEEP 🐛😴",
  "TRAIN > VALIDATE > DEPLOY 🚀",
  "COFFEE > C++ > COMPUTER VISION ☕",
  "PIXELS > PREDICTIONS 🖼️🤖",
  "TENSORS > STRESS 🧠"
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

const navItems =["ABOUT", "EXPERIENCE", "EDUCATION", "PROJECTS", "SKILLS"];

export default function Portfolio() {
  const [loading, setLoading] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  // Loading Screen Timer
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  },[]);

  // Rotating Text Timer
  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000); // Changes every 3 seconds
    return () => clearInterval(textInterval);
  },[]);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0f18]">
        <motion.div animate={{ scale:[1, 1.2, 1], opacity:[0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1.5 }} className="flex items-center gap-3">
          <BrainCircuit size={48} className="text-blue-500" />
          <span className="text-4xl font-black text-white tracking-tighter">KPS.</span>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-[#0a0f18] min-h-screen text-slate-200 selection:bg-blue-500/30 font-sans overflow-hidden">
      
      {/* FIXED LEFT-EDGE SOCIALS (Hidden on mobile) */}
      <div className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col gap-6 z-50">
        {enhancedData.socials.map((social, idx) => (
          <a key={idx} href={social.url} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white hover:scale-110 transition-all drop-shadow-lg">
            {social.icon}
          </a>
        ))}
        <div className="w-px h-24 bg-slate-800 mx-auto mt-4" />
      </div>

      {/* 1. DYNAMIC HERO SECTION (Kashish Reference Vibe) */}
      <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Left Text Column */}
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
            
            {/* Availability Badge */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#111827] border border-slate-800 shadow-xl">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-slate-200 text-sm font-semibold tracking-wide">Available for opportunities</span>
            </motion.div>

            {/* Main Greeting */}
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-none">
              Hey, I'm <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a8b1ff] to-[#e4a8ff] font-bold whitespace-nowrap">
                KARTHIK PALYAKERE <br /> SURESH
              </span>
            </motion.h1>

            {/* Animated Rotating Subtitle */}
            <motion.div variants={fadeInUp} className="h-10 text-xl sm:text-2xl font-mono font-bold text-slate-300 flex items-center">
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

            {/* Inline Navigation Menu */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold tracking-widest text-slate-400 pt-6">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </motion.div>

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
                <img src={enhancedData.hero.photo} alt="Karthik Profile" className="w-full h-full object-cover" />
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
      <section id="about" className="py-24 relative bg-[#0d131f] border-y border-slate-800/50 scroll-mt-24">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4 sticky top-32">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Beyond the Code.
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
      <section className="py-12 border-b border-slate-800/50 bg-[#0a0f18]">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-800">
          {enhancedData.metrics.map((m, i) => (
            <div key={i} className={`pl-8 ${i === 0 ? 'pl-0 border-l-0' : ''}`}>
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
            {enhancedData.experience.map((exp, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="group relative flex flex-col lg:flex-row gap-8 rounded-3xl bg-[#111827] border border-slate-800 p-8 transition-all hover:border-slate-600">
                <div className="lg:w-1/3 shrink-0 overflow-hidden rounded-2xl relative h-56 lg:h-auto border border-slate-700/50">
                  <img src={exp.image} alt={exp.company} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-90 transition-all duration-700" />
                </div>
                <div className="lg:w-2/3 flex flex-col justify-center">
                  <div className="text-[#a8b1ff] font-mono text-sm font-bold w-fit mb-3">{exp.dates}</div>
                  <h3 className="text-3xl font-bold text-white mb-1">{exp.role}</h3>
                  <h4 className="text-xl text-slate-400 font-medium mb-6">{exp.company}</h4>
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-4 text-slate-300 text-[1.05rem] leading-relaxed">
                        <span className="text-[#e4a8ff] mt-1 font-bold">▹</span> {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. EDUCATION SECTION */}
        <section id="education" className="space-y-12 scroll-mt-24">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-16">Education</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {enhancedData.education.map((edu, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.2 }} className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[#111827] to-[#0d131f] border border-slate-800 relative overflow-hidden">
                <GraduationCap className="text-[#a8b1ff] w-10 h-10 mb-6" />
                <div className="text-slate-400 font-mono text-sm font-bold mb-3">{edu.dates}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                <h4 className="text-lg text-slate-400 font-medium mb-6">{edu.institution}</h4>
                <div className="w-full h-px bg-slate-800 mb-6" />
                <p className="text-slate-300 text-sm leading-relaxed">{edu.bullets[0]}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 6. PROJECTS SECTION */}
        <section id="projects" className="space-y-12 scroll-mt-24">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-16">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {enhancedData.projects.map((proj, idx) => {
              let colSpan = "md:col-span-3";
              if (idx === 0) colSpan = "md:col-span-4";
              else if (idx === 1) colSpan = "md:col-span-2";

              return (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -5 }} className={`group relative rounded-3xl overflow-hidden border border-slate-800 bg-[#111827] min-h-[400px] flex flex-col justify-end ${colSpan}`}>
                  <div className="absolute inset-0">
                    <img src={proj.image} alt={proj.title} className="w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f18] via-[#0a0f18]/80 to-transparent" />
                  </div>
                  <div className="relative p-8 z-10">
                    <div className="mb-4 bg-slate-800/80 p-3 rounded-xl w-fit backdrop-blur-md border border-slate-700">{proj.icon}</div>
                    <div className="text-xs font-bold tracking-widest text-[#a8b1ff] uppercase mb-2">{proj.category}</div>
                    <h3 className="text-2xl font-bold text-white mb-4">{proj.title}</h3>
                    <ul className="space-y-2">
                      {proj.bullets.map((b, i) => (
                        <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                          <span className="text-[#e4a8ff] mt-0.5">▹</span> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* 7. SKILLS SECTION */}
        <section id="skills" className="space-y-12 scroll-mt-24">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Technical Arsenal</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enhancedData.skills.map((skillGroup, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="group p-8 rounded-3xl bg-[#111827] border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700">{skillGroup.icon}</div>
                  <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, i) => (
                    <span key={i} className="px-3 py-1.5 text-sm rounded-lg bg-[#0a0f18] border border-slate-800 text-slate-300 group-hover:text-[#a8b1ff] transition-colors">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* 8. MASSIVE "GET IN TOUCH" FOOTER */}
      <section id="contact" className="relative py-32 bg-[#0a0f18] border-t border-slate-800 overflow-hidden flex flex-col items-center text-center scroll-mt-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/10 via-[#0a0f18] to-[#0a0f18] pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-6xl sm:text-7xl md:text-8xl font-black leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 uppercase">
              Let's Talk
            </h2>
            <p className="text-xl md:text-2xl text-slate-400 mt-6 max-w-2xl mx-auto">
              I am currently looking for full-time opportunities. Whether you have a question or just want to say hi, my inbox is always open.
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
            {enhancedData.socials.map((social, idx) => (
              <a key={idx} href={social.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full border border-slate-800 text-slate-400 hover:text-white hover:border-[#a8b1ff] hover:bg-slate-900 transition-all font-medium">
                {social.icon} {social.name}
              </a>
            ))}
          </div>

          <div className="pt-24 flex flex-col items-center gap-8">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#111827] border border-slate-800 text-slate-400 hover:text-white hover:border-[#a8b1ff] transition-all font-mono text-sm tracking-widest uppercase group shadow-lg"
            >
              Back to Top <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>
            <div className="text-slate-600 text-sm font-mono tracking-widest uppercase">
              © {new Date().getFullYear()} Karthik Palyakere Suresh.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
