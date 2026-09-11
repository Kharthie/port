import { motion } from 'framer-motion';
import { experience } from '@/lib/data';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Career <span className="text-secondary">Trajectory</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary rounded-full mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Spine */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-border/50 md:-translate-x-1/2" />
          <motion.div 
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent md:-translate-x-1/2 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          <div className="space-y-12">
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className={`flex flex-col md:flex-row gap-8 items-center md:justify-between relative ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary md:-translate-x-1/2 flex items-center justify-center z-10 shadow-[0_0_10px_rgba(0,245,212,0.5)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                </div>

                <div className="w-full md:w-[45%] pl-12 md:pl-0">
                  <div className="glass-card p-6 md:p-8 rounded-2xl border-gradient group hover:-translate-y-1 transition-transform">
                    <div className="text-primary font-mono font-bold mb-2">{exp.period}</div>
                    <h3 className="text-xl md:text-2xl font-bold mb-1 text-foreground">{exp.role}</h3>
                    <h4 className="text-lg text-secondary mb-4 font-medium">{exp.company}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                    {exp.projects && (
                      <div className="mt-6 space-y-5">
                        {exp.projects.map((project) => (
                          <div key={project.name}>
                            <h5 className="mb-2 font-semibold text-foreground">{project.name}</h5>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              {project.highlights.map((highlight) => (
                                <li key={highlight} className="flex gap-2 leading-relaxed">
                                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
