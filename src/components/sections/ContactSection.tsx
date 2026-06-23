import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/data';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Map / Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Initialize <span className="text-gradient">Connection</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 text-center"
          >
            <div>
              <h3 className="text-2xl font-bold mb-2">Let's build something extraordinary.</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">Ready to accelerate your engineering goals? Let's discuss your next ambitious project.</p>
            </div>

            <div className="space-y-6 max-w-xl mx-auto">
              <div className="grid grid-cols-[3rem_minmax(0,1fr)] items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary border border-border group-hover:border-primary transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0 text-left">
                  <div className="text-sm text-muted-foreground font-mono mb-1">EMAIL</div>
                  <a href={`mailto:${personalInfo.email}`} className="text-foreground hover:text-primary transition-colors font-medium">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-[3rem_minmax(0,1fr)] items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-secondary border border-border group-hover:border-secondary transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0 text-left">
                  <div className="text-sm text-muted-foreground font-mono mb-1">PHONE</div>
                  <a href={`tel:${personalInfo.phone}`} className="text-foreground hover:text-secondary transition-colors font-medium">
                    +91 {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-[3rem_minmax(0,1fr)] items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-accent border border-border group-hover:border-accent transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0 text-left">
                  <div className="text-sm text-muted-foreground font-mono mb-1">LOCATION</div>
                  <div className="text-foreground font-medium">
                    {personalInfo.location}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 flex justify-center gap-4">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all hover:-translate-y-1">
                <Github className="w-5 h-5" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass border border-border flex items-center justify-center text-foreground hover:text-secondary hover:border-secondary transition-all hover:-translate-y-1">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          {/* <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="glass-card p-8 rounded-2xl space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Name</label>
                    <Input placeholder="John Doe" className="bg-background/50 border-border/50 focus:border-primary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Email</label>
                    <Input type="email" placeholder="john@example.com" className="bg-background/50 border-border/50 focus:border-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Message</label>
                  <Textarea placeholder="How can I help you?" className="min-h-[150px] bg-background/50 border-border/50 focus:border-primary resize-none" />
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground font-bold text-lg h-12 hover:opacity-90 transition-opacity group">
                Transmit Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
