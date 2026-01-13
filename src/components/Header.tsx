import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";
import EnrollmentDialog from "./EnrollmentDialog";

// ✅ Logo import (use correct path)
import greensLogo from "@/assets/greens-logo.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [enrollDialogOpen, setEnrollDialogOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Courses", href: "#courses" },
    { label: "Syllabus", href: "#syllabus" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* ✅ LOGO */}
            <a href="#" className="flex items-center gap-3">
              <img
                src={greensLogo}
                alt="Greens Technologies Logo"
                className="w-14 h-18 object-contain"
              />
              <span className="font-heading font-bold text-xl text-primary tracking-wide">
                GREENS
                <span className="block text-xs text-secondary tracking-[0.2em]">
                  TECHNOLOGIES
                </span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:8939915538"
                className="flex items-center gap-2 font-medium"
              >
                <Phone className="w-4 h-4 text-[#9c7a1f]" />
                <span className="text-[#0f5132]">
                  8939915538
                </span>
              </a>

              <Button
                variant="hero"
                size="default"
                onClick={() => setEnrollDialogOpen(true)}
              >
                Enroll Now
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden overflow-hidden"
              >
                <nav className="py-4 flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200 py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}

                  <div className="pt-4 border-t border-border flex flex-col gap-3">
                    <a
                      href="tel:8939915538"
                      className="flex items-center gap-2 font-medium"
                    >
                      <Phone className="w-4 h-4 text-[#9c7a1f]" />
                      <span className="text-[#0f5132]">
                        8939915538
                      </span>
                    </a>

                    <Button
                      variant="hero"
                      size="lg"
                      className="w-full"
                      onClick={() => {
                        setEnrollDialogOpen(true);
                        setIsMenuOpen(false);
                      }}
                    >
                      Enroll Now
                    </Button>
                  </div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      <EnrollmentDialog
        open={enrollDialogOpen}
        onOpenChange={setEnrollDialogOpen}
        type="enroll"
      />
    </>
  );
};

export default Header;
