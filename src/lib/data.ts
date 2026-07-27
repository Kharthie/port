import { SiAngular, SiReact, SiTypescript, SiJavascript, SiTailwindcss, SiNodedotjs, SiExpress, SiPython, SiFastapi, SiMongodb, SiPostgresql, SiDocker, SiJenkins, SiArgo } from "react-icons/si";
import { Cloud, Server } from "lucide-react";

export const personalInfo = {
  name: "Kharthie Ramakrishnan",
  title: "Full Stack Developer | AI Engineer",
  experience: "4+ Years",
  location: "Tamil Nadu, India",
  email: "kharthieramakrishnan@gmail.com",
  phone: "6382550646",
  linkedin: "https://www.linkedin.com/in/kharthie-ramakrishnan-developer/",
  github: "https://github.com/kharthie"
};

export const skills = {
  frontend: [
    { name: "Angular", icon: SiAngular, level: 90 },
    { name: "React", icon: SiReact, level: 85 },
    { name: "TypeScript", icon: SiTypescript, level: 85 },
    { name: "JavaScript", icon: SiJavascript, level: 90 },
    { name: "Tailwind", icon: SiTailwindcss, level: 80 }
  ],
  backend: [
    { name: "Node.js", icon: SiNodedotjs, level: 85 },
    { name: "Express.js", icon: SiExpress, level: 85 },
    { name: "Python", icon: SiPython, level: 80 },
    { name: "FastAPI", icon: SiFastapi, level: 75 }
  ],
  databases: [
    { name: "MongoDB", icon: SiMongodb, level: 80 },
    { name: "PostgreSQL", icon: SiPostgresql, level: 75 }
  ],
  cloud: [
    { name: "AWS", icon: Cloud, level: 80 },
    { name: "Azure", icon: Server, level: 75 },
    { name: "Docker", icon: SiDocker, level: 85 }
  ],
  devops: [
    { name: "Jenkins", icon: SiJenkins, level: 70 },
    { name: "ArgoCD", icon: SiArgo, level: 65 },
    { name: "Azure DevOps", icon: Server, level: 75 }
  ],
  ai: [
    { name: "GPT-4o", level: 90 },
    { name: "Gemini", level: 85 },
    { name: "LangChain", level: 80 },
    { name: "LangGraph", level: 75 },
    { name: "Vector Databases", level: 80 }
  ]
};

export const projects = [
  {
    title: "AWS Cloud Landing Zone Generator",
    duration: "01/2025 - 05/2025",
    description: "AI-powered cloud infrastructure automation platform that generates Terraform modules for AWS services using GPT-4o, LangChain, and LangGraph.",
    tech: ["Angular", "Node.js", "Python", "FastAPI", "AWS", "Terraform", "GPT-4o"],
    demo: "#",
    github: "#"
  },
  {
    title: "AI Unit Test Case Generator",
    duration: "07/2024 - 12/2024",
    description: "LLM-powered platform that analyzes codebases and automatically generates unit test cases from uploaded ZIP files.",
    tech: ["Angular", "Node.js", "FastAPI", "AWS", "OpenAI"],
    demo: "#",
    github: "#"
  },
  {
    title: "AI American Football Chatbot",
    duration: "01/2024 - 06/2024",
    description: "RAG-based chatbot supporting natural language querying over football datasets using GPT-4o and Gemini.",
    tech: ["Angular", "Node.js", "MongoDB", "Vector Database", "LangChain"],
    demo: "#",
    github: "#"
  },
  {
    title: "Telehealth Virtual Healthcare Platform",
    duration: "06/2022 - 12/2023",
    description: "HIPAA-compliant healthcare platform supporting appointment booking, live consultations, accessibility features, and Azure integrations.",
    tech: ["React", "Node.js", "Azure", "Blob Storage"],
    demo: "#",
    github: "#"
  },
  {
    title: "Vehicle Tracking Platform",
    duration: "06/2025 - 12/2025",
    description: "GPS-based vehicle and shipment tracking system with real-time monitoring and analytics.",
    tech: ["Angular", "Node.js", "PostgreSQL"],
    demo: "#",
    github: "#"
  },
  {
    title: "Low Code Platform Builder",
    duration: "01/2026 - Present",
    description: "Dynamic application builder platform enabling drag-and-drop module creation and workflow management.",
    tech: ["Angular", "Node.js", "PostgreSQL"],
    demo: "#",
    github: "#"
  }
];

export const experience = [
  {
    company: "Techcedence Infosystems",
    role: "Full Stack Developer",
    period: "2025–Present",
    description: "Building Low Code Platform and Vehicle Tracking System."
  },
  {
    company: "Genworx AI",
    role: "Full Stack Developer",
    period: "2024–2025",
    description: "Developed AI Products, Cloud Automation, and LLM Applications."
  },
  {
    company: "Mediguru Global Solutions",
    role: "Software Developer",
    period: "2022–2023",
    description: "Created Healthcare Platform and Telehealth Solutions."
  }
];

export const certifications = [
  {
    title: "Guvi Pvt Ltd: MERN Stack Development",
    credentialUrl: "https://www.guvi.in/verify-certificate?id=4566O31R815k364CgQ"
  },
  {
    title: "Google Cloud: Large Language Models",
    credentialUrl: "https://www.skills.google/public_profiles/bd7d8b32-6571-4499-853f-df0fa863465e/badges/10294849?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
  },
  {
    title: "Google Cloud: Generative AI fundamentals",
    credentialUrl: "https://www.skills.google/public_profiles/bd7d8b32-6571-4499-853f-df0fa863465e/badges/10287268"
  },
  {
    title: "Google Cloud: Responsible AI",
    credentialUrl: "https://www.skills.google/public_profiles/bd7d8b32-6571-4499-853f-df0fa863465e/badges/10418073?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
  },
  {
    title: "Google Cloud: Image Generation with AI",
    credentialUrl: "https://www.skills.google/public_profiles/bd7d8b32-6571-4499-853f-df0fa863465e/badges/10462355?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
  },
  {
    title: "Google Cloud: Applying AI Principles with AI Cloud",
    credentialUrl: "https://www.skills.google/public_profiles/bd7d8b32-6571-4499-853f-df0fa863465e/badges/16589066?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
  },
  {
    title: "Microsoft Learn: Introduction to generative AI and agents",
    credentialUrl: "https://learn.microsoft.com/en-us/users/kharthier-7224/achievements/h2mqaxd8?ref=https%3A%2F%2Fwww.linkedin.com%2F"
  },
  {
    title: "Microsoft Learn: Introduction to AI concepts",
    credentialUrl: "https://learn.microsoft.com/en-us/users/kharthier-7224/achievements/4cuu46qk?ref=https%3A%2F%2Fwww.linkedin.com%2F"
  },
  {
    title: "Claude Code in Action",
    credentialUrl: "https://verify.skilljar.com/c/rpt756voiiqi"
  }
];
