import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./ui/button";
import { CheckCircle, Download, ArrowRight } from "lucide-react";
import EnrollmentDialog from "./EnrollmentDialog";

// Images
import testingGirlDesktop from "@/assets/testing-girl.png";
import testingGirlMobile from "@/assets/testing-girl.png";

const HeroSection = () => {
  const [enrollDialogOpen, setEnrollDialogOpen] = useState(false);
  const [syllabusDialogOpen, setSyllabusDialogOpen] = useState(false);

  const imageRef = useRef(null);

  /* 🎯 Parallax Effect */
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  const highlights = [
    "100% Practical Training",
    "Real-Time Projects",
    "Placement Assistance",
  ];

  // 👇 SAME POSITIONS AS BEFORE — ICON ONLY
  const floatingBadges = [
    { icon: "🔍", top: "18%", left: "8%" },
    { icon: "🤖", top: "20%", right: "8%" },
    { icon: "🔗", bottom: "0%", left: "26%" },
    { icon: "⚡", bottom: "18%", right: "10%" },
  ];

  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      >
        {/* 🌿 Background Gradient */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-x-0 top-[-100px] bottom-[-140px] bg-hero-gradient rounded-b-[20px]" />
        </div>

        <div className="container mx-auto px-2 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left lg:-translate-y-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground mb-6">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="text-sm font-medium">
                  ISTQB-Certified Trainer
                </span>
              </div>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                Master's in{" "}
                <span className="text-secondary">Software Testing</span>{" "}
                & Automation
              </h1>

              <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl">
                Become a job-ready Software Tester with hands-on Manual,
                Automation, API & Performance Testing using real-time projects.
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-primary-foreground/90"
                  >
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  variant="heroOutline"
                  size="xl"
                  onClick={() => setEnrollDialogOpen(true)}
                >
                  Enroll for Testing Course
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Button>

                <Button
                  variant="hero"
                  size="xl"
                  onClick={() => setSyllabusDialogOpen(true)}
                >
                  <Download className="w-5 h-5" />
                  Download Syllabus
                </Button>
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              ref={imageRef}
              style={{ y }}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:flex justify-center mt-10"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full -z-10" />

              <img
                src={testingGirlDesktop}
                alt="Software Testing Expert"
                className="w-full max-w-lg rounded-3xl shadow-2xl object-cover"
              />

              {/* 🔥 ICON ONLY — SAME PLACE */}
              {floatingBadges.map((badge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{
                    opacity: 1,
                    y: [0, -8, 0],
                  }}
                  transition={{
                    delay: 0.6 + i * 0.15,
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.15 }}
                  className="absolute w-12 h-12 flex items-center justify-center
                             bg-white rounded-full shadow-lg
                             ring-1 ring-black/10 text-xl"
                  style={badge}
                >
                  {badge.icon}
                </motion.div>
              ))}
            </motion.div>

            {/* MOBILE IMAGE */}
            <div className="lg:hidden flex justify-center mt-10">
              <img
                src={testingGirlMobile}
                alt="Mobile Software Testing"
                className="w-full max-w-sm rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom Curve */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="w-full h-[120px]"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H0Z"
              fill="hsl(var(--background))"
            />
          </svg>
        </div>
      </section>

      {/* Dialogs */}
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
