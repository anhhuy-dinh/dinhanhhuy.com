import type { Education, Experience, SkillGroup } from "@/types";

// ─── EDIT HERE: Bio paragraph ─────────────────────────────────────────────────
export const bio = {
  intro:
    "I'm a PhD student in Engineering Science at CU Denver, working at the InsCy Lab under Asst. Prof. Nam Bui. My research focuses on embedded AI for healthcare applications, developing novel wearable devices that bring real-time clinical intelligence to the edge — where sensing, inference, and the human body meet.",
};

// ─── EDIT HERE: Quick facts sidebar ──────────────────────────────────────────
export const quickFacts = [
  { label: "Based in",  value: "Denver, CO, USA" },
  { label: "Role",      value: "PhD Student in Electrical Engineering" },
  { label: "Languages", value: "Vietnamese, English" },
  { label: "Interests", value: "Photography, Sketching, Cooking" },
  { label: "Email",     value: "anh-huy.2.dinh@ucdenver.edu" },
  { label: "Website",   value: "dinhanhhuy.com" },
];

// ─── EDIT HERE: Education ─────────────────────────────────────────────────────
export const education: Education[] = [
  {
    degree: "PhD, Engineering Science",
    school: "University of Colorado Denver, USA",
    period: "08/2024 — Present",
    detail: [
      "Advisor: Asst. Prof. Nam Bui",
    ],
    logo: "/images/ucd.png",
  },
  {
    degree: "B.S., Mathematics and Computer Science (Honor Program)",
    school: "Ho Chi Minh City University of Science, Vietnam",
    period: "09/2018 — 11/2022",
    detail: [
      "Advisor: Assoc. Prof. Binh Nguyen",
      "GPA: 9.21/10.0 (ranked 5th/800)",
    ],
    logo: "/images/hcmus.png",
  },
];

// ─── EDIT HERE: Work experience ──────────────────────────────────────────────
export const experience: Experience[] = [
  {
    role: "Research Assistant",
    company: "InsCy Lab · University of Colorado Denver, USA",
    period: "08/2024 — Present",
    type: "Research",
    detail:
      "Working on embedded AI projects for wearable devices, including EEG signal processing and current stimulation for taste perception classification, development of a novel low-friction glasses-free volumetric display, and research into new sensing mechanisms for exoskeleton systems.",
    tech: ["EEG", "PyTorch", "Deep Learning", "C/C++", "Magnetic Levitation", "3D Display"],
  },
  {
    role: "Teaching Assistant",
    company: "Department of Electrical Engineering · University of Colorado Denver, USA",
    period: "08/2024 — Present",
    type: "Academic",
    detail:
      "TA for Machine Vision Systems, IoT & Cyber-Physical Systems, Engineering Probability, and Circuit Design and Fabrication.",
    tech: ["Machine Vision", "IoT", "Cyber-Physical Systems", "Circuit Design"],
  },
  {
    role: "Research Assistant Intern (Remote)",
    company: "InsCy Lab · University of Colorado Denver, USA",
    period: "07/2023 — 08/2024",
    type: "Research",
    detail:
      "Developed a novel 3D video conferencing system for immersive, glasses-free multi-participant meetings. Proposed a low-cost 3D volumetric display solution using a levitated and rapidly rotating LED matrix driven by magnetic levitation.",
    tech: ["3D Vision", "Computer Vision", "LED Matrix", "Python", "C/C++"],
  },
  {
    role: "Research Assistant Intern",
    company: "AISIA Research Lab · Ho Chi Minh City University of Science, Vietnam",
    period: "06/2021 — 01/2024",
    type: "Research",
    detail:
      "Collected and organized the OOKPIK dataset of out-of-context image-caption triplets for cheapfake detection (545 images, 1090 captions). Proposed a baseline model for the MMSys'21 grand challenge. Released the OOKPIK paper at MMM 2024.",
    tech: ["Python", "PyTorch", "Multimodal AI", "NLP", "Dataset Collection"],
  },
  {
    role: "Undergraduate Thesis Student",
    company: "AISIA Research Lab · Ho Chi Minh City University of Science, Vietnam",
    period: "03/2021 — 09/2022",
    type: "Research",
    detail:
      "Researched object detection models (CNN, YOLO) for drone detection in video data. Combined YOLOv4 with Seq-NMS post-processing and ByteTrack object tracking. Published at SoMeT 2022. Thesis scored 9.7/10.0.",
    tech: ["YOLOv4", "ByteTrack", "OpenCV", "Python", "Object Detection"],
  },
];

// ─── EDIT HERE: Tech stack ────────────────────────────────────────────────────
// icon: devicons URL pattern → https://cdn.jsdelivr.net/gh/devicons/devicon/icons/{name}/{name}-original.svg
// icon: null → shows a dot placeholder
export const skillsGrouped: SkillGroup[] = [
  {
    group: "Embedded & Hardware",
    items: [
      { name: "Embedded C/C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Arduino",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
      { name: "Jetson Nano",    icon: null },
      { name: "Raspberry Pi",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" },
      { name: "EEG/EMG/EKG",   icon: null },
      { name: "OpenBCI",        icon: null },
      { name: "Brainwave",      icon: null },
      { name: "SolidWorks",     icon: null },
      { name: "Altium",         icon: null },
      { name: "Capture CIS",    icon: null },
    ],
  },
  {
    group: "AI & Machine Learning",
    items: [
      { name: "Python",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "PyTorch",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "TensorFlow",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
      { name: "RAG / LLM",    icon: null },
      { name: "Signal Processing", icon: null },
    ],
  },
  {
    group: "Web & Full Stack",
    items: [
      { name: "React",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Android", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
    ],
  },
  {
    group: "DevOps & Cloud",
    items: [
      { name: "Docker",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Git",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Linux",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "JupyterLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
    ],
  },
  {
    group: "Research",
    items: [
      { name: "LaTeX", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg" },
      { name: "MATLAB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg" },
    ],
  },
];
