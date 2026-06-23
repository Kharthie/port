import { motion } from 'framer-motion';

export function AboutSection() {
  const timeline = [
    { year: 2022, event: "Mediguru Global Solutions" },
    { year: 2024, event: "Genworx AI" },
    { year: 2025, event: "Techcedence Infosystems" }
  ];

  const domains = ["Healthcare", "Telehealth", "AI Products", "Cloud Automation", "Logistics"];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans tracking-tight">
            System <span className="text-secondary">Overview</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10 rounded-2xl border-gradient"
          >
            <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
              <span className="w-8 h-8 rounded bg-primary/20 text-primary flex items-center justify-center text-sm font-mono">01</span>
              The Architecture
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              Results-driven Full Stack Developer with 4+ years of experience building scalable web applications, AI-powered platforms, cloud-native solutions, and enterprise systems.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              Deep expertise in Generative AI: <span className="text-primary font-medium">GPT-4o, Gemini, LangChain, LangGraph, Vector Databases, RAG Architectures, and Intelligent Automation.</span>
            </p>
            
            <div className="flex flex-wrap gap-2">
              {domains.map((domain, i) => (
                <span key={i} className="px-3 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded-md text-sm font-mono">
                  {domain}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent opacity-30" />
            
            <div className="space-y-12 relative">
              {timeline.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-6 items-start"
                >
                  <div className="relative z-10 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div className="glass p-5 rounded-xl border border-border/50 flex-1 hover:border-primary/50 transition-colors group">
                    <div className="text-primary font-mono font-bold text-xl mb-1 group-hover:text-glow">{item.year}</div>
                    <div className="text-foreground text-lg font-medium">{item.event}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
