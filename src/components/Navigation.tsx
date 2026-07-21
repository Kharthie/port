import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "./ui/button";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "AI", href: "#ai" },
  { name: "Certificates", href: "/certificates" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [location, setLocation] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollYProgress } = useScroll();
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (location === "/") {
        const sections = document.querySelectorAll("section[id]");
        let current = "";
        sections.forEach((section) => {
          const sectionTop = (section as HTMLElement).offsetTop;
          if (window.scrollY >= sectionTop - 100) {
            current = section.getAttribute("id") || "";
          }
        });
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  const toggleTheme = () => {
    setIsDark((current) => {
      const next = !current;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href.startsWith("/")) {
      setLocation(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (href.startsWith("#")) {
      if (location !== "/") {
        setLocation("/");
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            window.scrollTo({
              top: (element as HTMLElement).offsetTop,
              behavior: "smooth",
            });
          }
        }, 100);
      } else {
        const element = document.querySelector(href);
        if (element) {
          window.scrollTo({
            top: (element as HTMLElement).offsetTop,
            behavior: "smooth",
          });
        }
      }
    }
  };

  const isLinkActive = (href: string) => {
    if (href.startsWith("/")) {
      return location === href || (href === "/certificates" && location === "/certifications");
    }
    return location === "/" && activeSection === href.substring(1);
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "glass py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <a
            href="/"
            onClick={(e) => handleNavClick(e, location === "/" ? "#hero" : "/")}
            className="text-xl font-bold tracking-tighter text-foreground flex items-center gap-2"
          >
            <span className="w-8 h-8 rounded bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-background">
              R
            </span>
            <span>Kharthie</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium transition-colors hover:text-primary relative ${
                    active ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                  {active && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"
                    />
                  )}
                </a>
              );
            })}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </nav>

          <div className="md:hidden flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <button
              className="text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass border-t border-border/50 py-4 flex flex-col items-center gap-4 shadow-2xl md:hidden"
          >
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-base font-medium transition-colors hover:text-primary ${
                    active ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </motion.div>
        )}
      </header>
    </>
  );
}

