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
    { name: "Angular", icon: SiAngular, level: 80 },
    { name: "React", icon: SiReact, level: 75 },
    { name: "TypeScript", icon: SiTypescript, level: 75 },
    { name: "JavaScript", icon: SiJavascript, level: 80 },
    { name: "Tailwind", icon: SiTailwindcss, level: 80 }
  ],
  backend: [
    { name: "Node.js", icon: SiNodedotjs, level: 80 },
    { name: "Express.js", icon: SiExpress, level: 80 },
    { name: "Python", icon: SiPython, level: 80 },
    { name: "FastAPI", icon: SiFastapi, level: 75 }
  ],
  databases: [
    { name: "MongoDB", icon: SiMongodb, level: 75 },
    { name: "PostgreSQL", icon: SiPostgresql, level: 75 }
  ],
  cloud: [
    { name: "Microsoft Azure", icon: Server, level: 80 },
    { name: "AWS", icon: Cloud, level: 70 },
    // { name: "Docker", icon: SiDocker, level: 85 }
  ],
  // devops: [
  //   { name: "Jenkins", icon: SiJenkins, level: 70 },
  //   { name: "ArgoCD", icon: SiArgo, level: 65 },
  //   { name: "Azure DevOps", icon: Server, level: 75 }
  // ],
  ai: [
    { name: "GPT-4o", level: 90 },
    { name: "Gemini", level: 85 },
    { name: "LangChain", level: 80 },
    { name: "Postgres PG Vector Databases", level: 80 }
  ]
};

export const projects = [
  {
    title: "LCP - Low Code Platform",
    // duration: "06/2025 - 07/2026",
    description: "Full-stack low code platform for configurable business workflows, AI-generated application components, and LLM-powered automation using GPT-4o and multi-agent workflows.",
    tech: ["Angular", "Node.js", "Express", "PostgreSQL", "OpenAI", "GPT-4o", "LLMs"],
    demo: "#",
    github: "#"
  },
  {
    title: "Vehicle Tracking Application",
    // duration: "06/2025 - 12/2025",
    description: "GPS tracking and shipment management platform with live vehicle monitoring, route history, logistics summaries, anomaly detection, and AI-powered recommendations.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Azure AI Foundry", "Google Maps API"],
    demo: "#",
    github: "#"
  },
  {
    title: "AWS Cloud Landing Zone Chatbot",
    // duration: "01/2025 - 05/2025",
    description: "AI-powered chatbot that generates Terraform modules for AWS services from natural-language prompts and supports AI workflow optimization with OpenAI, GPT-4o, and LangChain.",
    tech: ["React", "Node.js", "Python", "MongoDB", "SQL", "AWS", "Terraform", "GPT-4o", "LangChain"],
    demo: "#",
    github: "#"
  },
  {
    title: "AI Unit Test Case Generator",
    // duration: "07/2024 - 12/2024",
    description: "LLM-powered VS Code extension and chatbot app that analyzes uploaded ZIP files, detects programming languages, and generates unit test cases using GPT-4o.",
    tech: ["Angular", "Node.js", "Express", "Python", "FastAPI", "Azure Blob Storage", "OpenAI", "LangChain"],
    demo: "#",
    github: "#"
  },
  {
    title: "AI American Football Chatbot",
    // duration: "01/2024 - 06/2024",
    description: "RAG-based chatbot for football statistics with CSV ingestion, embeddings, vector search, natural-language-to-database queries, validation, and grounded responses.",
    tech: ["Angular", "Node.js", "Python", "FastAPI", "MongoDB", "Vector Database", "GPT-4o", "text-embedding-ada-002"],
    demo: "#",
    github: "#"
  },
  {
    title: "Virtual Doctor-Patient Consultation Platform",
    // duration: "06/2022 - 12/2024",
    description: "HIPAA-compliant TeleHealth platform with appointment scheduling, secure doctor-patient consultations, Dolby virtual meetings, live captions, transcription, and secure Azure storage.",
    tech: ["React", "Node.js", "Express", "Microsoft Azure", "Dolby", "Azure Cognitive Services", "Azure Blob Storage"],
    demo: "#",
    github: "#"
  }
];

export const experience = [
  {
    company: "Techcedence Infosystems Private Limited",
    role: "Full Stack Developer",
    period: "Jun 2025 - Jul 2026",
    description: "Developed full-stack enterprise web apps and AI-powered workflow automation products.",
    projects: [
      {
        name: "LCP - Low Code Platform",
        highlights: [
          "Built a low code platform using Angular, Node.js, Express, PostgreSQL, and OpenAI GPT-4o.",
          "Developed LLM-powered applications and multi-agent AI workflows for business automation and intelligent decision-making.",
          "Designed scalable REST APIs and PostgreSQL schemas for configurable workflows and AI-generated application components."
        ]
      },
      {
        name: "Vehicle Tracking Application",
        highlights: [
          "Built a GPS tracking and shipment management app using React, Node.js, Express, PostgreSQL, and Azure AI Foundry.",
          "Integrated foundation models for natural language queries, shipment summaries, anomaly detection, and logistics recommendations.",
          "Integrated Google Maps APIs for live vehicle monitoring, route tracking, historical movement review, and telemetry analytics."
        ]
      }
    ]
  },
  {
    company: "Genworx.ai",
    role: "Full Stack Developer",
    period: "Jan 2025 - May 2025",
    description: "Developed AI-driven cloud automation products and REST APIs for generative AI applications.",
    projects: [
      {
        name: "AWS Cloud Landing Zone Chatbot App",
        highlights: [
          "Developed RESTful APIs using React, Python, and Node.js for AI-driven applications.",
          "Worked with LLMs, prompt engineering, and AI workflow optimization.",
          "Built an OpenAI GPT-4o and LangChain chatbot to generate Terraform modules for AWS VPC, IAM, and EC2 from natural-language prompts."
        ]
      }
    ]
  },
  {
    company: "Mediguru Global Solutions Pvt Ltd",
    role: "Software Developer",
    period: "Jun 2022 - Dec 2024",
    description: "Built healthcare, testing automation, and AI chatbot products. Mediguru was later rebranded as GenWorx.",
    projects: [
      {
        name: "Virtual Doctor-Patient Consultation Platform",
        highlights: [
          "Designed and developed a HIPAA-compliant TeleHealth platform using React, Node.js, Express, and Microsoft Azure.",
          "Implemented secure doctor-patient interactions, appointment scheduling, and Dolby-powered virtual consultations.",
          "Integrated Azure Cognitive Services for live captions and speech transcription, plus Azure Blob Storage for secure healthcare data."
        ]
      },
      {
        name: "Unit Test Case Generator",
        highlights: [
          "Designed an LLM-powered VS Code extension and chatbot app using Angular, Node.js, Express, Python FastAPI, and Azure Blob Storage.",
          "Built ZIP file analysis to detect programming languages and generate unit test cases using OpenAI GPT-4o.",
          "Integrated LangChain for prompt orchestration, model inference, AI service management, and GitHub Actions-based CI/CD automation."
        ]
      },
      {
        name: "AI-based American Football Chatbot",
        highlights: [
          "Developed an AI-powered chatbot using Angular, Node.js, and Python FastAPI.",
          "Implemented CSV ingestion, embedding generation, MongoDB storage, and vector database retrieval for RAG.",
          "Built GPT-4o and text-embedding-ada-002 powered natural-language querying with response validation and grounding logic."
        ]
      }
    ]
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
