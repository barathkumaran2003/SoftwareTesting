import { motion } from "framer-motion";
import { CheckCircle, Shield, Code2, Users, Trophy } from "lucide-react";

const AboutSection = () => {
  const features = [
    "Importance of software testing in modern applications",
    "Strong focus on both Manual and Automation Testing",
    "Hands-on real-time testing projects",
    "Agile and industry-standard testing practices",
    "Suitable for freshers and working professionals",
  ];

  const highlights = [
    { icon: <Shield className="w-6 h-6" />, title: "ISTQB-Certified", desc: "Industry-standard curriculum" },
    { icon: <Code2 className="w-6 h-6" />, title: "Real-Time Defect Tracking", desc: "Work with live projects" },
    { icon: <Users className="w-6 h-6" />, title: "Live Project Exposure", desc: "Build portfolio projects" },
    { icon: <Trophy className="w-6 h-6" />, title: "Placement Support", desc: "Interview preparation" },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              About Our Training
            </span>
            
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Build Your Career as a{" "}
              <span className="text-secondary">Software Tester</span>{" "}
              with Greens Technologies
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              Thousands of successfull QA engineers who started their journey with us. 
              Our comprehensive training program covers everything from fundamentals to 
              advanced automation frameworks.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-secondary/30 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-secondary/20 group-hover:text-secondary transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
