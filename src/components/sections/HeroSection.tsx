import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/data';
import { ParticleBackground } from '@/components/ParticleBackground';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SiAngular, SiReact, SiNodedotjs, SiPython, SiDocker, SiMongodb } from 'react-icons/si';
import { Cloud, Server } from 'lucide-react';

const ROLES = ["Full Stack Developer", "AI Engineer"];

const floatingIcons = [
  { Icon: SiAngular, color: "#DD0031", delay: 0 },
  { Icon: SiReact, color: "#61DAFB", delay: 0.2 },
  { Icon: SiNodedotjs, color: "#339933", delay: 0.4 },
  { Icon: SiPython, color: "#3776AB", delay: 0.6 },
  { Icon: Cloud, color: "#FF9900", delay: 0.8 },
  { Icon: Server, color: "#0078D4", delay: 1.0 },
  { Icon: SiDocker, color: "#2496ED", delay: 1.2 },
  { Icon: SiMongodb, color: "#47A248", delay: 1.4 },
];

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      } else {
        setText(currentRole.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <ParticleBackground />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-primary/20 text-primary text-sm font-mono uppercase tracking-wider"
          >
            {/* <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> */}
            {/* <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> */}
            {/* System Online */}
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-lg md:text-xl mb-2 font-mono"
          >
            Hi, I'm
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6"
          >
            <span className="text-gradient leading-tight">{personalInfo.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl md:text-4xl font-medium text-foreground mb-10 h-[40px] md:h-[48px]"
          >
            <span className="opacity-80">Building the future as a </span>
            <span className="text-secondary border-r-2 border-secondary pr-1 animate-pulse">{text}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {["4+ Years Experience", "10+ Projects Delivered", "AI Powered Solutions", "AWS & Azure Cloud"].map((stat, i) => (
              <span key={i} className="px-4 py-2 rounded-full glass text-sm font-medium border border-border/50 text-foreground/80 hover:text-primary transition-colors hover:border-primary/50">
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
            <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-base group" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-primary/50 text-primary hover:bg-primary/10 font-medium text-base group">
              <a href="/Kharthie_R_CV.pdf" download="Kharthie_R_CV.pdf">
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

      {/* Floating Icons */}
      {/* <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
        {floatingIcons.map(({ Icon, color, delay }, index) => {
          // Calculate a position on an orbit
          const angle = (index / floatingIcons.length) * Math.PI * 2;
          const radiusX = 40 + Math.random() * 20; // vw
          const radiusY = 30 + Math.random() * 15; // vh
          
          return (
            <motion.div
              key={index}
              className="absolute left-1/2 top-1/2 opacity-20"
              initial={{ x: "-50%", y: "-50%" }}
              animate={{
                x: [
                  `calc(-50% + ${Math.cos(angle) * radiusX}vw)`,
                  `calc(-50% + ${Math.cos(angle + Math.PI) * radiusX}vw)`,
                  `calc(-50% + ${Math.cos(angle) * radiusX}vw)`,
                ],
                y: [
                  `calc(-50% + ${Math.sin(angle) * radiusY}vh)`,
                  `calc(-50% + ${Math.sin(angle + Math.PI) * radiusY}vh)`,
                  `calc(-50% + ${Math.sin(angle) * radiusY}vh)`,
                ],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
                delay,
              }}
            >
              <Icon size={40 + Math.random() * 30} color={color} />
            </motion.div>
          );
        })}
      </div> */}
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
        {/* <span className="text-xs font-mono tracking-widest uppercase">Scroll</span> */}
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
