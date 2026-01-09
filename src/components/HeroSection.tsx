import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { CheckCircle, Download, ArrowRight } from "lucide-react";
import EnrollmentDialog from "./EnrollmentDialog";

const HeroSection = () => {
  const [enrollDialogOpen, setEnrollDialogOpen] = useState(false);
  const [syllabusDialogOpen, setSyllabusDialogOpen] = useState(false);

  const highlights = [
    "100% Practical Training",
    "Real-Time Projects",
    "Placement Assistance",
  ];

  return (
    <>
      <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
        
        {/* Floating elements */}
        <motion.div
          className="absolute top-1/4 right-10 w-20 h-20 rounded-full bg-secondary/20 blur-xl"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-10 w-32 h-32 rounded-full bg-teal/20 blur-xl"
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="text-sm font-medium">ISTQB-Aligned Training</span>
              </motion.div>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                Master{" "}
                <span className="text-secondary">Software Testing</span>{" "}
                & Automation with Industry Experts
              </h1>

              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl">
                Become a job-ready Software Tester with hands-on Manual Testing, 
                Automation Testing, API Testing, Performance Testing, and Real-Time Projects.
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-2 text-primary-foreground/90"
                  >
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="font-medium text-sm md:text-base">{highlight}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button 
                  variant="hero" 
                  size="xl" 
                  className="group"
                  onClick={() => setEnrollDialogOpen(true)}
                >
                  Enroll for Testing Course
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="heroOutline" 
                  size="xl" 
                  className="group"
                  onClick={() => setSyllabusDialogOpen(true)}
                >
                  <Download className="w-5 h-5" />
                  Download Syllabus
                </Button>
              </motion.div>
            </motion.div>

            {/* Hero Image/Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Main illustration placeholder */}
                <div className="w-full aspect-square rounded-3xl bg-gradient-to-br from-primary-foreground/10 to-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/20 p-8 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                    {/* Testing icons */}
                    {[
                      { icon: "🔍", label: "Manual Testing" },
                      { icon: "🤖", label: "Automation" },
                      { icon: "🔗", label: "API Testing" },
                      { icon: "⚡", label: "Performance" },
                    ].map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-card/90 backdrop-blur rounded-2xl p-6 text-center shadow-card hover:shadow-card-hover transition-all cursor-pointer"
                      >
                        <span className="text-4xl mb-2 block">{item.icon}</span>
                        <span className="text-sm font-medium text-foreground">{item.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-4 shadow-lg cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
                      <span className="text-2xl">✓</span>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-foreground">15K+</p>
                      <p className="text-sm text-muted-foreground">Testers Placed</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      <EnrollmentDialog 
        open={enrollDialogOpen} 
        onOpenChange={setEnrollDialogOpen} 
        type="enroll" 
      />
      <EnrollmentDialog 
        open={syllabusDialogOpen} 
        onOpenChange={setSyllabusDialogOpen} 
        type="syllabus" 
      />
    </>
  );
};

export default HeroSection;
