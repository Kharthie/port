import { Navigation } from "@/components/Navigation";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function CertificatesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground bg-grid-pattern selection:bg-primary/30 selection:text-primary relative">
      <Navigation />
      <main className="relative z-10 pt-20">
        <div className="container mx-auto px-6 pt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-primary transition-colors py-1 px-3 rounded-lg bg-card/40 border border-border/50 hover:border-primary/40 shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Full Portfolio</span>
          </Link>
        </div>
        <CertificationsSection />
      </main>

      <footer className="py-8 text-center border-t border-border/30 glass">
        <p className="text-muted-foreground font-mono text-sm">
          © {new Date().getFullYear()} Kharthie Ramakrishnan. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
