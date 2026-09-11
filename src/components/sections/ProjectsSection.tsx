import { motion } from 'framer-motion';
import { projects } from '@/lib/data';
import { CalendarDays, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-secondary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-8 border border-border/50 hover:border-accent/50 transition-all duration-300 group flex flex-col h-full hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors" />
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-2 py-1 text-xs font-mono rounded bg-background border border-border text-muted-foreground group-hover:border-accent/30 group-hover:text-foreground transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-gradient transition-all">{project.title}</h3>
              <div className="mb-4 flex items-center gap-2 text-sm font-mono text-accent">
                {/* <CalendarDays className="h-4 w-4" /> */}
                {/* <span>{project.duration}</span> */}
              </div>
              <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              {/* <div className="flex gap-4 mt-auto">
                <Button variant="outline" className="flex-1 border-border hover:border-accent hover:text-accent hover:bg-accent/10">
                  <ExternalLink className="mr-2 h-4 w-4" /> View Demo
                </Button>
                <Button variant="outline" className="flex-1 border-border hover:border-secondary hover:text-secondary hover:bg-secondary/10">
                  <Github className="mr-2 h-4 w-4" /> Source Code
                </Button>
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
