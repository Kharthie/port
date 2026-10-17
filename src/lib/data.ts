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
    { name: "Angular", icon: SiAngular, level: 75 },
    { name: "React", icon: SiReact, level: 70 },
    { name: "TypeScript", icon: SiTypescript, level: 75 },
    { name: "JavaScript", icon: SiJavascript, level: 70 },
    { name: "Tailwind", icon: SiTailwindcss, level: 85 }
  ],
  backend: [
    { name: "Node.js", icon: SiNodedotjs, level: 75 },
    { name: "Express.js", icon: SiExpress, level: 80 },
    { name: "Python", icon: SiPython, level: 75 },
    { name: "FastAPI", icon: SiFastapi, level: 75 }
  ],
  databases: [
    { name: "MongoDB", icon: SiMongodb, level: 75 },
    { name: "PostgreSQL", icon: SiPostgresql, level: 75 },
    { name: "Vector Databases", level: 80 }
  ],
  cloud: [
    { name: "AWS", icon: Cloud, level: 70 },
    { name: "Azure", icon: Server, level: 85 },
    // { name: "Docker", icon: SiDocker, level: 85 }
  ],
  // devops: [
  //   { name: "Jenkins", icon: SiJenkins, level: 70 },
  //   { name: "ArgoCD", icon: SiArgo, level: 65 },
  //   { name: "Azure DevOps", icon: Server, level: 75 }
  // ],
  ai: [
    { name: "GPT-4o", level: 80 },
    { name: "Gemini", level: 85 },
    { name: "LangChain", level: 75 },
  ]
};

export const projects = [
  {
    title: "LCP - Low Code Platform",
    duration: "06/2025 - 07/2026",
    description: "Full-stack low code platform for configurable business workflows, AI-generated application components, and LLM-powered automation using GPT-4o and multi-agent workflows.",
    tech: ["Angular", "Node.js", "Express", "PostgreSQL", "OpenAI", "GPT-4o", "LLMs"],
    demo: "#",
    github: "#"
  },
  {
    title: "Vehicle Tracking Application",
    duration: "06/2025 - 12/2025",
    description: "GPS tracking and shipment management platform with live vehicle monitoring, route history, logistics summaries, anomaly detection, and AI-powered recommendations.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Azure AI Foundry", "Google Maps API"],
    demo: "#",
    github: "#"
  },
  {
    title: "AWS Cloud Landing Zone Chatbot",
    duration: "01/2025 - 05/2025",
    description: "AI-powered chatbot that generates Terraform modules for AWS services from natural-language prompts and supports AI workflow optimization with OpenAI, GPT-4o, and LangChain.",
    tech: ["React", "Node.js", "Python", "MongoDB", "SQL", "AWS", "Terraform", "GPT-4o", "LangChain"],
    demo: "#",
    github: "#"
  },
  {
    title: "AI Unit Test Case Generator",
    duration: "07/2024 - 12/2024",
    description: "LLM-powered VS Code extension and chatbot app that analyzes uploaded ZIP files, detects programming languages, and generates unit test cases using GPT-4o.",
    tech: ["Angular", "Node.js", "Express", "Python", "FastAPI", "Azure Blob Storage", "OpenAI", "LangChain"],
    demo: "#",
    github: "#"
  },
  {
    title: "AI American Football Chatbot",
    duration: "01/2024 - 06/2024",
    description: "RAG-based chatbot for football statistics with CSV ingestion, embeddings, vector search, natural-language-to-database queries, validation, and grounded responses.",
    tech: ["Angular", "Node.js", "Python", "FastAPI", "MongoDB", "Vector Database", "GPT-4o", "text-embedding-ada-002"],
    demo: "#",
    github: "#"
  },
  {
    title: "Virtual Doctor-Patient Consultation Platform",
    duration: "06/2022 - 12/2024",
    description: "HIPAA-compliant TeleHealth platform with appointment scheduling, secure doctor-patient consultations, Dolby virtual meetings, live captions, transcription, and secure Azure storage.",
    tech: ["React", "Node.js", "Express", "Microsoft Azure", "Dolby", "Azure Cognitive Services", "Azure Blob Storage"],
    demo: "#",
    github: "#"
  }
];

export const experience = [
  {
    company: "Techcedence Infosystems Private Limited",
    role: "Software Engineer",
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
    role: "Software Engineer",
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
    role: "Software Engineer",
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

export interface Certification {
  id: string;
  title: string;
  fullTitle?: string;
  issuer: "Google Cloud" | "Microsoft Learn" | "Anthropic" | "GUVI";
  issuerKey: "google" | "microsoft" | "anthropic" | "guvi";
  category: "Generative AI" | "AI Agents & MCP" | "Cloud & Infrastructure" | "Full Stack Development";
  credentialId: string;
  credentialUrl: string;
  issueDate?: string;
  skills: string[];
  description: string;
}

export const certifications: Certification[] = [
  {
    id: "anthropic-claude-code",
    title: "Anthropic: Claude Code in Action",
    fullTitle: "Claude Code in Action",
    issuer: "Anthropic",
    issuerKey: "anthropic",
    category: "AI Agents & MCP",
    credentialId: "rpt756voiiqi",
    credentialUrl: "https://verify.skilljar.com/c/rpt756voiiqi",
    skills: ["Claude Code", "Agentic Coding", "Developer Workflows", "Autonomous CLI"],
    description: "Official credential in Anthropic's agentic engineering environment, terminal-driven AI pair programming, and automated refactoring."
  },
  {
    id: "anthropic-mcp-advanced",
    title: "Anthropic: Model Context Protocol: Advanced Topics",
    fullTitle: "Model Context Protocol: Advanced Topics",
    issuer: "Anthropic",
    issuerKey: "anthropic",
    category: "AI Agents & MCP",
    credentialId: "5hjgqit79qrz",
    credentialUrl: "https://verify.skilljar.com/c/5hjgqit79qrz",
    skills: ["Model Context Protocol", "MCP Tool Servers", "Multi-Agent Security", "Dynamic Protocols"],
    description: "Advanced protocol architecture, production MCP servers, secure client-agent boundaries, and multi-tool orchestration."
  },
  {
    id: "anthropic-mcp-intro",
    title: "Anthropic: Introduction to Model Context Protocol",
    fullTitle: "Introduction to Model Context Protocol (MCP)",
    issuer: "Anthropic",
    issuerKey: "anthropic",
    category: "AI Agents & MCP",
    credentialId: "24uuukhufsjs",
    credentialUrl: "https://verify.skilljar.com/c/24uuukhufsjs",
    skills: ["MCP Specification", "Context Management", "Tool Calling", "Claude Ecosystem"],
    description: "Foundational architecture connecting language models to real-time client tools, live databases, and developer environments."
  },
  {
    id: "google-llm",
    title: "Google Cloud: Large Language Models",
    fullTitle: "Large Language Models (LLMs)",
    issuer: "Google Cloud",
    issuerKey: "google",
    category: "Generative AI",
    credentialId: "10294849",
    credentialUrl: "https://www.skills.google/public_profiles/bd7d8b32-6571-4499-853f-df0fa863465e/badges/10294849?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    skills: ["Large Language Models", "Vertex AI", "Prompt Tuning", "Transformer Architecture"],
    description: "In-depth understanding of LLM mechanics, prompt design strategies, Vertex AI model garden, and generative app development."
  },
  {
    id: "google-genai-fundamentals",
    title: "Google Cloud: Generative AI fundamentals",
    fullTitle: "Generative AI Fundamentals",
    issuer: "Google Cloud",
    issuerKey: "google",
    category: "Generative AI",
    credentialId: "10287268",
    credentialUrl: "https://www.skills.google/public_profiles/bd7d8b32-6571-4499-853f-df0fa863465e/badges/10287268",
    skills: ["Generative AI", "Deep Learning", "Attention Mechanisms", "Foundation Models"],
    description: "Foundational mastery of generative AI concepts, foundation models, Google Cloud AI studio, and production applications."
  },
  {
    id: "google-responsible-ai",
    title: "Google Cloud: Responsible AI",
    fullTitle: "Responsible AI & Ethics",
    issuer: "Google Cloud",
    issuerKey: "google",
    category: "Generative AI",
    credentialId: "10418073",
    credentialUrl: "https://www.skills.google/public_profiles/bd7d8b32-6571-4499-853f-df0fa863465e/badges/10418073?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    skills: ["Responsible AI", "Model Bias Mitigation", "Safety Standards", "AI Governance"],
    description: "Operationalizing Google's 7 AI Principles, fairness metrics, safety filters, transparency, and responsible AI system design."
  },
  {
    id: "google-image-gen",
    title: "Google Cloud: Image Generation with AI",
    fullTitle: "Image Generation with AI",
    issuer: "Google Cloud",
    issuerKey: "google",
    category: "Generative AI",
    credentialId: "10462355",
    credentialUrl: "https://www.skills.google/public_profiles/bd7d8b32-6571-4499-853f-df0fa863465e/badges/10462355?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    skills: ["Diffusion Models", "Imagen", "Latent Space", "Generative Vision"],
    description: "Theory and application of latent diffusion models, conditioning, image-to-image synthesis, and Google Cloud Imagen."
  },
  {
    id: "google-ai-principles",
    title: "Google Cloud: Applying AI Principles with AI Cloud",
    fullTitle: "Applying AI Principles with Google Cloud",
    issuer: "Google Cloud",
    issuerKey: "google",
    category: "Cloud & Infrastructure",
    credentialId: "16589066",
    credentialUrl: "https://www.skills.google/public_profiles/bd7d8b32-6571-4499-853f-df0fa863465e/badges/16589066?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    skills: ["Enterprise Cloud AI", "Compliance & Privacy", "Model Monitoring", "Cloud Governance"],
    description: "Implementing ethical frameworks and operational safeguards across enterprise deployments on Google Cloud."
  },
  {
    id: "ms-genai-agents",
    title: "Microsoft: Introduction to generative AI and agents",
    fullTitle: "Introduction to Generative AI & Agents",
    issuer: "Microsoft Learn",
    issuerKey: "microsoft",
    category: "AI Agents & MCP",
    credentialId: "h2mqaxd8",
    credentialUrl: "https://learn.microsoft.com/en-us/users/kharthier-7224/achievements/h2mqaxd8?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    skills: ["AI Agents", "Autonomous Systems", "Azure OpenAI", "Agentic Workflows"],
    description: "Building autonomous agents, agentic planning loops, memory integration, and tool invocation using Azure OpenAI Service."
  },
  {
    id: "ms-foundry-chat-app",
    title: "Microsoft: Develop a generative AI chat app with Microsoft Foundry",
    fullTitle: "Develop a Generative AI Chat App with Microsoft Foundry",
    issuer: "Microsoft Learn",
    issuerKey: "microsoft",
    category: "Generative AI",
    credentialId: "k9n7z4mb",
    credentialUrl: "https://learn.microsoft.com/en-us/users/kharthier-7224/achievements/k9n7z4mb?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    skills: ["Azure AI Foundry", "Chat Applications", "Prompt Flow", "Vector Search"],
    description: "End-to-end development of enterprise conversational AI solutions with custom enterprise grounding data and Prompt Flow."
  },
  {
    id: "ms-foundry-iq",
    title: "Microsoft: Microsoft Foundry IQ",
    fullTitle: "Microsoft Foundry IQ",
    issuer: "Microsoft Learn",
    issuerKey: "microsoft",
    category: "Cloud & Infrastructure",
    credentialId: "9aq46dju",
    credentialUrl: "https://learn.microsoft.com/en-us/users/kharthier-7224/achievements/9aq46dju?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    skills: ["Azure AI Foundry", "Model Evaluation", "Model Benchmarking", "AI Safety Guardrails"],
    description: "Evaluation metrics, benchmarking foundation models, safety guardrails, and enterprise AI model management."
  },
  {
    id: "ms-rag-intro",
    title: "Microsoft: Intro to retrieval-augmented generation",
    fullTitle: "Intro to Retrieval-Augmented Generation (RAG)",
    issuer: "Microsoft Learn",
    issuerKey: "microsoft",
    category: "Generative AI",
    credentialId: "jhmvys3t",
    credentialUrl: "https://learn.microsoft.com/en-us/users/kharthier-7224/achievements/jhmvys3t",
    skills: ["RAG Architecture", "Vector Embeddings", "Azure AI Search", "Semantic Grounding"],
    description: "Architecture and implementation of RAG pipelines, semantic vector search, chunking strategies, and hallucination reduction."
  },
  {
    id: "ms-ai-azure",
    title: "Microsoft: AI in Azure",
    fullTitle: "AI in Azure: Cloud Services & Architecture",
    issuer: "Microsoft Learn",
    issuerKey: "microsoft",
    category: "Cloud & Infrastructure",
    credentialId: "8v5ng36w",
    credentialUrl: "https://learn.microsoft.com/en-us/users/kharthier-7224/achievements/8v5ng36w?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    skills: ["Azure Cognitive Services", "Azure AI Studio", "Cloud AI Architecture", "Azure ML"],
    description: "Comprehensive cloud architecture leveraging Azure AI services, automated ML, and enterprise cognitive capabilities."
  },
  {
    id: "ms-nlp-concepts",
    title: "Microsoft: Natural Language Processing Concepts",
    fullTitle: "Natural Language Processing (NLP) Concepts",
    issuer: "Microsoft Learn",
    issuerKey: "microsoft",
    category: "Generative AI",
    credentialId: "nqgy2euf",
    credentialUrl: "https://learn.microsoft.com/en-us/users/kharthier-7224/achievements/nqgy2euf",
    skills: ["NLP Pipelines", "Text Analytics", "Named Entity Recognition", "Language Modeling"],
    description: "Core linguistic concepts, tokenization, semantic similarity, and modern NLP workflows using Azure AI Language."
  },
  {
    id: "ms-ai-speech",
    title: "Microsoft: Introduction to AI speech concepts",
    fullTitle: "Introduction to AI Speech Concepts",
    issuer: "Microsoft Learn",
    issuerKey: "microsoft",
    category: "Generative AI",
    credentialId: "fecuc5lx",
    credentialUrl: "https://learn.microsoft.com/en-us/users/kharthier-7224/achievements/fecuc5lx",
    skills: ["Speech Recognition", "Neural Text-to-Speech", "Audio Transcription", "Azure Speech"],
    description: "Acoustic modeling, speech-to-text transcription, neural voice synthesis, and real-time conversational audio processing."
  },
  {
    id: "ms-ai-concepts",
    title: "Microsoft: Introduction to AI concepts",
    fullTitle: "Introduction to AI Concepts",
    issuer: "Microsoft Learn",
    issuerKey: "microsoft",
    category: "Generative AI",
    credentialId: "4cuu46qk",
    credentialUrl: "https://learn.microsoft.com/en-us/users/kharthier-7224/achievements/4cuu46qk?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    skills: ["Machine Learning", "Computer Vision", "Cognitive Services", "Azure AI Ecosystem"],
    description: "Broad foundation covering machine learning paradigms, vision models, cognitive APIs, and predictive intelligence."
  },
  {
    id: "guvi-mern",
    title: "MERN Stack Development - Guvi Pvt Ltd",
    fullTitle: "MERN Stack Development Certification",
    issuer: "GUVI",
    issuerKey: "guvi",
    category: "Full Stack Development",
    credentialId: "4566O31R815k364CgQ",
    credentialUrl: "https://www.guvi.in/verify-certificate?id=4566O31R815k364CgQ",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "Full Stack Architecture"],
    description: "Professional full-stack web development program accredited by GUVI (an IIT Madras incubated research park company)."
  }
];
