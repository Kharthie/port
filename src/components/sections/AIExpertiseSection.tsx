import { motion } from 'framer-motion';

const aiCapabilities = [
  "GPT-4o", "Gemini", "LangChain", "LangGraph", 
  "Prompt Engineering", "Vector Search", "RAG", 
  "AI Agents", "Cloud Automation"
];

export function AIExpertiseSection() {
  return (
    <section id="ai" className="py-24 relative overflow-hidden">
      {/* Network Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="#7B61FF" />
              <path d="M 50 50 L 150 150 M 50 50 L -50 150 M 50 50 L 150 -50 M 50 50 L -50 -50" stroke="#7B61FF" strokeWidth="0.5" strokeOpacity="0.5" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#network)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-secondary/20 text-secondary text-sm font-mono uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            Specialization
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Building the Future with <span className="text-gradient">Generative AI</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto" />
        </motion.div>

        <div className="max-w-5xl mx-auto relative h-[400px] md:h-[500px] flex items-center justify-center">
          {/* Central Node */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 rounded-full flex items-center justify-center z-20"
          >
            <div className="absolute inset-0 rounded-full bg-secondary/20 blur-2xl animate-pulse" />
            <div className="absolute inset-2 rounded-full border border-secondary/50 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-primary/50 animate-[spin_15s_linear_infinite_reverse]" />
            <div className="relative z-10 text-center font-bold text-lg md:text-2xl text-foreground font-mono">
              AI<br/>CORE
            </div>
          </motion.div>

          {/* Orbiting Capabilities */}
          {aiCapabilities.map((cap, i) => {
            const angle = (i / aiCapabilities.length) * Math.PI * 2;
            const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 120 : 200;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 0, y: 0 }}
                whileInView={{ opacity: 1, x, y }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
              >
                <div className="px-4 py-2 glass-card rounded-full whitespace-nowrap text-sm md:text-base font-medium border border-secondary/30 text-foreground hover:border-primary hover:text-primary transition-colors cursor-default shadow-[0_0_15px_rgba(123,97,255,0.2)]">
                  {cap}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
