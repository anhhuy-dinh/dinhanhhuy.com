import type { Publication } from "@/types";

// ─── EDIT HERE: Publications & Talks ─────────────────────────────────────────
// status options: "Published" | "Under Review" | "In Preparation" | "Guest Lecture" | "Presentation"
const publications: Publication[] = [
  {
    title: "MAGVIS: A Maglev-based Volumetric Platform for Immersive Telepresence System",
    authors: "Huy Dinh, Tuan Tran, Prativa Oli, Youngwook Son, Luis Carlos Gutierrez, Kevin Diaz, S. M. H. Hosseini, Xia Zhou, Sangtae Ha, Nam Bui",
    venue: "The 32nd Annual International Conference on Mobile Computing and Networking (MobiCom 2026)",
    venueShort: "ACM MobiCom 2026",
    year: "2026",
    status: "Under Review",
    statusColor: "#fbbf24",
    abstract:
      "We present MAGVIS, a maglev-based volumetric display platform that enables immersive, glasses-free 3D telepresence for multiple participants. The system uses a rapidly rotating LED matrix driven by magnetic levitation to generate real-time volumetric imagery, providing a realistic sense of co-presence without specialized eyewear.",
    links: [],
  },
  {
    title: "EchoVision: Hybrid NPU-CPU Deployment of EfficientViT-SAM and YOLO for Real-Time Assistive Navigation",
    authors: "Su Ho Lim, Artemis Shaw, Huy Dinh, Nikolaus Correll, Nam Bui",
    venue: "The International Workshop on Mobile Computing with Efficient Foundation Models (EIFCOM 2026), co-located with ACM MobiSys 2026",
    venueShort: "ACM MobiSys 2026 (Workshop)",
    year: "2026",
    status: "Accepted",
    statusColor: "#4ade80",
    abstract:
      "EchoVision proposes a hybrid NPU-CPU deployment strategy combining EfficientViT-SAM and YOLO for real-time assistive navigation on mobile devices. By splitting workloads across the neural processing unit and CPU, the system achieves low-latency scene understanding suitable for visually impaired users in dynamic environments.",
    links: [],
  },
  {
    title: "OOKPIK - A Collection of Out-of-Context Image-Caption Pairs",
    authors: "Kha-Luan Pham, Minh-Khoi Nguyen-Nhat, Anh-Huy Dinh, Quang-Tri Le, Manh-Thien Nguyen, Anh-Duy Tran, Minh-Triet Tran, Duc-Tien Dang-Nguyen",
    venue: "The 30th International Conference on Multimedia Modeling (MMM 2024)",
    venueShort: "MMM 2024",
    year: "2024",
    status: "Published",
    statusColor: "#4ade80",
    abstract:
      "We introduce OOKPIK, a dataset of out-of-context image-caption pairs for cheapfake detection research. The dataset comprises 545 images and 1090 real captions organized as triplets {image, caption1, caption2}, with a baseline model proposed for the MMSys'21 grand challenge on detecting out-of-context media.",
    links: [
      { label: "View Paper", href: "https://doi.org/10.1007/978-3-031-53302-0_10" },
    ],
  },
  {
    title: "Drone Detection Using Deep Neural Networks",
    authors: "Hoang Pham, Anh-Huy Dinh, Phat Thai, Trung Nguyen, Binh Nguyen",
    venue: "The 21st International Conference on Intelligent Software Methodologies, Tools, and Techniques (SoMeT 2022)",
    venueShort: "SoMeT 2022",
    year: "2022",
    status: "Published",
    statusColor: "#4ade80",
    abstract:
      "We present a drone detection system combining YOLOv4 with Seq-NMS post-processing and ByteTrack object tracking to improve detection performance in video data. The approach demonstrates strong real-time detection capability on a curated drone video dataset.",
    links: [
      { label: "View Paper", href: "https://doi.org/10.3233/FAIA220280" },
    ],
  },
];

export default publications;
