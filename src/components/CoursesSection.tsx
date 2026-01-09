import { motion } from "framer-motion";
import { Star, BookOpen, Users, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

interface CourseCardProps {
  title: string;
  rating: number;
  lessons: number;
  students: string;
  icon: string;
  index: number;
}

const CourseCard = ({ title, rating, lessons, students, icon, index }: CourseCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-secondary/30 group"
  >
    <div className="bg-hero-gradient p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%2040L40%200H20L0%2020M40%2040V20L20%2040%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
      <span className="text-5xl relative z-10">{icon}</span>
    </div>
    
    <div className="p-6">
      <h3 className="font-heading font-semibold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-secondary fill-secondary" />
          <span className="font-medium text-foreground">{rating}</span>
        </div>
        <div className="flex items-center gap-1">
          <BookOpen className="w-4 h-4" />
          <span>{lessons} Lessons</span>
        </div>
        <div className="flex items-center gap-1">
          <Users className="w-4 h-4" />
          <span>{students}</span>
        </div>
      </div>
      
      <Button variant="outline" className="w-full group/btn">
        Enroll Now
        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </Button>
    </div>
  </motion.div>
);

const CoursesSection = () => {
  const courses = [
    { title: "Java Selenium Automation Testing", rating: 4.9, lessons: 85, students: "8.5K+", icon: "☕" },
    { title: "Python Selenium Automation Testing", rating: 4.8, lessons: 72, students: "6.2K+", icon: "🐍" },
    { title: "Playwright with JavaScript & TypeScript", rating: 4.9, lessons: 65, students: "4.8K+", icon: "🎭" },
    { title: "API Testing (Postman & REST Assured)", rating: 4.8, lessons: 58, students: "5.5K+", icon: "🔗" },
    { title: "Mobile Testing (Android & iOS)", rating: 4.7, lessons: 48, students: "3.2K+", icon: "📱" },
    { title: "Performance Testing (JMeter)", rating: 4.8, lessons: 42, students: "4.1K+", icon: "⚡" },
    { title: "Manual Testing Fundamentals", rating: 4.9, lessons: 55, students: "12K+", icon: "📋" },
    { title: "ETL & Data Warehouse Testing", rating: 4.7, lessons: 38, students: "2.8K+", icon: "🗄️" },
  ];

  return (
    <section id="courses" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            Our Courses
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Software Testing <span className="text-secondary">Courses</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our comprehensive range of testing courses designed to make you industry-ready
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={course.title} {...course} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
