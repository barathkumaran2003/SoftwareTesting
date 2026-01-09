import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Download, ArrowRight, Phone, Mail } from "lucide-react";
import EnrollmentDialog from "./EnrollmentDialog";

const CTASection = () => {
  const [enrollDialogOpen, setEnrollDialogOpen] = useState(false);
  const [syllabusDialogOpen, setSyllabusDialogOpen] = useState(false);

  return (
    <>
      <section className="py-20 bg-hero-gradient relative overflow-hidden">
        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />

        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 rounded-full bg-secondary/10 blur-2xl"
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-teal/10 blur-2xl"
          animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Become a Certified{" "}
                <span className="text-secondary">Software Tester</span>
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
                Start your journey towards a rewarding career in Quality Assurance. 
                Enroll now and get access to our comprehensive training program.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button 
                  variant="hero" 
                  size="xl" 
                  className="group"
                  onClick={() => setEnrollDialogOpen(true)}
                >
                  Enroll Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="heroOutline" 
                  size="xl" 
                  className="group"
                  onClick={() => setSyllabusDialogOpen(true)}
                >
                  <Download className="w-5 h-5" />
                  Download Free Syllabus
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-primary-foreground/90">
                <a href="tel:8939982169" className="flex items-center gap-2 hover:text-secondary transition-colors">
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">8939982169</span>
                </a>
                <a href="mailto:info@greenstech.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">info@greenstech.com</span>
                </a>
              </div>
            </motion.div>
          </div>
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

export default CTASection;
