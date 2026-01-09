import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Award, BookOpen, Building2 } from "lucide-react";

interface CounterProps {
  end: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
  delay: number;
}

const Counter = ({ end, suffix, label, icon, delay }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
    }, delay);

    return () => clearTimeout(timer);
  }, [isInView, end, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center p-6"
    >
      <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-4 text-secondary">
        {icon}
      </div>
      <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <p className="text-muted-foreground font-medium">{label}</p>
    </motion.div>
  );
};

const CounterSection = () => {
  const stats = [
    { end: 25, suffix: "K+", label: "Students Trained", icon: <Users className="w-8 h-8" />, delay: 0 },
    { end: 15, suffix: "K+", label: "Test Engineers Placed", icon: <Award className="w-8 h-8" />, delay: 200 },
    { end: 100, suffix: "%", label: "Practical Training", icon: <BookOpen className="w-8 h-8" />, delay: 400 },
    { end: 300, suffix: "+", label: "Hiring Partners", icon: <Building2 className="w-8 h-8" />, delay: 600 },
  ];

  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Counter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
