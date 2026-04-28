import type { Project } from "@/types";

// ─── EDIT HERE: Your projects ────────────────────────────────────────────────
// badge: "open" (green) | "patent" (yellow) | "prop" (red)
// img:   use "/images/your-file.jpg" for local, or a full URL
// link:  set to null to hide the "View Details" button
const projects: Project[] = [
  /* hidden – uncomment to restore
  {
    title: "TasteSensing",
    badge: "open",
    tag: "Research",
    collab: null,
    status: "Active Research",
    statusColor: "#4ade80",
    img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80",
    desc: "Bioimpedance measurement platform using MAX30001GEVKIT with real-time Python data pipeline and CSV logging.",
    detail: "Developing a real-time bioimpedance (BioZ) measurement system using the MAX30001GEVKIT evaluation board paired with MAX32630FTHR MCU. Built a custom Python serial reader for live data visualization and logging. Overcame challenges in packet parsing, init command sequencing, and serial communication stability.",
    tech: ["BioZ", "MAX30001", "Python", "Serial Comm", "Embedded C"],
    link: null,
  },
  {
    title: "IonSpiro",
    badge: "patent",
    tag: "Clinical",
    collab: "Collaboration with Dr. Nam Bui (PI) · University of Colorado Denver",
    status: "COMIRB Approved",
    statusColor: "#fbbf24",
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80",
    desc: "Novel NAI-based spirometer — COMIRB approved (IRB 26-0702). Embedded firmware + full clinical protocol.",
    detail: "Developing a novel non-contact spirometer using NAI-based sensing architecture for clinical-grade pulmonary flow quantification without mechanical calibration. Full IRB protocol 26-0702 submitted and approved by COMIRB. Includes consent forms, recruitment flyer, and embedded firmware.",
    tech: ["Embedded C/C++", "Bio-Sensors", "Hardware", "COMIRB", "Clinical Protocol"],
    link: null,
  },
  {
    title: "docana",
    badge: "prop",
    tag: "Production",
    collab: "Deployed at Ideta (Septeo)",
    status: "Live in Production",
    statusColor: "#60a5fa",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
    desc: "RAG application on Azure for multi-tenant document Q&A with Mistral AI and PostgreSQL backend.",
    detail: "Production RAG application serving multiple enterprise tenants on Azure. Built custom document ingestion pipeline, vector search with PostgreSQL pgvector, and Flask API backend. Integrated Mistral AI for generation. Maintained alongside Angular frontend and Node.js backend (ideta-platoon-back).",
    tech: ["RAG", "Azure", "Python", "Flask", "PostgreSQL", "Mistral AI"],
    link: null,
  },
  {
    title: "TS-SEFFNet",
    badge: "open",
    tag: "AI Model",
    collab: "EEG / BCI Research Lab · CU Denver",
    status: "Published",
    statusColor: "#a78bfa",
    img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
    desc: "Dual-modality EEG + IR neural architecture for taste perception classification in BCI research.",
    detail: "Designed TS-SEFFNet, a dual-modality neural architecture combining EEG and infrared signals for taste perception classification. Developed block flowchart visualizations for the model. Targeted at brain-computer interface applications in dietary tracking and sensory neuroscience research.",
    tech: ["EEG", "PyTorch", "Deep Learning", "BCI", "IR Sensing", "Signal Processing"],
    link: null,
  },
  {
    title: "tracuu",
    badge: "prop",
    tag: "Product",
    collab: null,
    status: "Proprietary",
    statusColor: "#f87171",
    img: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&q=80",
    desc: "Multi-tenant chat-with-documents platform — Next.js, FastAPI, and custom RAG stack.",
    detail: "Built from scratch without LangChain. Custom RAG pipeline with multi-tenant document isolation, vector search, and streaming responses. Next.js frontend with FastAPI backend. Designed for organizations needing private document Q&A with full data ownership.",
    tech: ["Next.js", "FastAPI", "Python", "RAG", "Vector Search", "TypeScript"],
    link: null,
  },
  {
    title: "ML Lab Environment",
    badge: "open",
    tag: "Teaching",
    collab: "ELEC3520 · 26 Students",
    status: "Deployed",
    statusColor: "#4ade80",
    img: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=800&q=80",
    desc: "Docker-based ML/DL lab for 26 students with GPU access, JupyterLab, and Tailscale VPN remote access.",
    detail: "Designed and deployed a containerized ML/DL lab environment for 26 students in ELEC3520. Each student gets isolated JupyterLab with GPU passthrough via CUDA. Tailscale VPN enables secure remote access. Pre-configured for PyTorch, TensorFlow, and scikit-learn.",
    tech: ["Docker", "CUDA", "JupyterLab", "Tailscale", "PyTorch", "TensorFlow"],
    link: null,
  },
  */
];

export default projects;
