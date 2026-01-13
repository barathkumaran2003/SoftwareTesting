import { motion } from "framer-motion";
import {
  Bug,
  Cog,
  GraduationCap,
  Users,
  Briefcase,
  FileText,
} from "lucide-react";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Bug,
      title: "Real-Time Bug Tracking",
      desc: "Work on actual defect management and tracking systems",
      gradient: "from-[#ff416c] via-[#ff4b2b] to-[#ff9a44]",
    },
    {
      icon: Cog,
      title: "Live Framework Setup",
      desc: "Build automation frameworks from scratch",
      gradient: "from-[#4f46e5] via-[#3b82f6] to-[#06b6d4]",
    },
    {
      icon: GraduationCap,
      title: "Experienced QA Instructors",
      desc: "Learn from industry professionals with 10+ years of experience",
      gradient: "from-[#10b981] via-[#14b8a6] to-[#22d3ee]",
    },
    {
      icon: Users,
      title: "Agile & Scrum Training",
      desc: "Master's in modern software development methodologies",
      gradient: "from-[#8b5cf6] via-[#a855f7] to-[#ec4899]",
    },
    {
      icon: Briefcase,
      title: "Placement Assistance",
      desc: "Get connect with 300+ hiring partners",
      gradient: "from-[#f59e0b] via-[#f97316] to-[#ef4444]",
    },
    {
      icon: FileText,
      title: "Interview Preparation",
      desc: "Mock interviews and resume building support",
      gradient: "from-[#06b6d4] via-[#0ea5e9] to-[#2563eb]",
    },
  ];

  return (
    <section className="py-20 bg-hero-gradient relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-semibold mb-6">
            Why Choose Us
          </span>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Greens{" "}
            <span className="text-secondary">Technologies Provides</span>
          </h2>

          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Choose Greens Technologies for industry-relevant training with expert trainers, hands-on projects, and real-time exposure.
Get career-focused courses with strong placement support to help you succeed in the IT industry.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                }}
                className={`rounded-2xl p-8 border border-white/10 bg-gradient-to-br ${reason.gradient} shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition-all duration-300`}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-16 h-16 rounded-2xl bg-white/90 flex items-center justify-center mb-6 shadow-lg"
                >
                  <Icon className="w-8 h-8 text-black/80" />
                </motion.div>

                <h3 className="font-heading font-semibold text-xl text-white mb-3">
                  {reason.title}
                </h3>

                <p className="text-white/90">{reason.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
