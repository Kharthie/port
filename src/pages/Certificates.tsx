import { Navigation } from "@/components/Navigation";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Certificates() {
  return (
    <div className="min-h-screen bg-background text-foreground bg-grid-pattern selection:bg-primary/30 selection:text-primary relative">
      <Navigation />
      <main className="relative z-10 pt-24">
        <div className="container mx-auto px-6 mb-2">
          <Link href="/">
            <Button variant="ghost" className="gap-2 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors pl-0">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Button>
          </Link>
        </div>
        <CertificationsSection className="pt-2 pb-24" />
      </main>

      <footer className="py-8 text-center border-t border-border/30 glass">
        <p className="text-muted-foreground font-mono text-sm">
          © {new Date().getFullYear()} Kharthie Ramakrishnan. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
