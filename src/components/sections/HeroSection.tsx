import { motion } from 'framer-motion';
import { ParticleBackground } from '@/components/ParticleBackground';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ROLE = "Gen AI - Full Stack Dev";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden">
      <ParticleBackground />
      
      <div className="container mx-auto relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-primary/20 bg-background/50 px-5 py-2 text-sm font-semibold text-primary shadow-[0_14px_45px_rgba(0,0,0,0.12)] backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_18px_hsl(var(--primary))]" />
            {ROLE}
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-sm font-semibold uppercase text-muted-foreground md:text-base"
          >
            Hi, I'm
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 text-5xl font-extrabold tracking-tight md:text-7xl lg:text-8xl"
          >
            <span className="text-gradient leading-tight">Kharthie</span>
            <span className="block text-foreground">Ramakrishnan</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto mb-10 max-w-3xl text-xl font-medium leading-relaxed text-muted-foreground md:text-2xl"
          >
            Building enterprise-grade AI products, cloud platforms, and full-stack applications with a focus on clean architecture and useful automation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12 flex flex-wrap justify-center gap-3"
          >
            {["4+ Years Experience", "6+ Projects Delivered", "LLM Workflow Automation", "Azure Cloud & AWS"].map((stat, i) => (
              <span key={i} className="rounded-full border border-border/70 bg-card/60 px-5 py-2 text-sm font-semibold text-foreground/80 shadow-sm backdrop-blur transition-colors hover:border-primary/50 hover:text-primary">
                {stat}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base group shadow-[0_18px_45px_rgba(0,245,212,0.18)]" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-primary/50 text-primary hover:bg-primary/10 font-medium text-base group">
              <a href="/Kharthie_R_Resume.pdf" download="Kharthie_R_Resume.pdf">
                <Download className="mr-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
                Download Resume
              </a>
            </Button>
            <Button size="lg" variant="ghost" className="w-full sm:w-auto text-foreground hover:text-primary hover:bg-transparent font-medium text-base" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
