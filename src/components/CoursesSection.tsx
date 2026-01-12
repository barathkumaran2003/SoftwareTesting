import { useState } from "react";
import { motion } from "framer-motion";
import { Star, BookOpen, Users, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import EnrollmentDialog from "./EnrollmentDialog";

interface CourseCardProps {
  title: string;
  rating: number;
  lessons: number;
  students: string;
  icon: string;
  index: number;
  onEnroll: () => void;
}

/* 👇 SUBTLE GRADIENTS — DIFFERENT FOR EACH CARD */
const headerGradients = [
  "from-[#1e3a8a] via-[#1e40af] to-[#2563eb]", // blue
  "from-[#065f46] via-[#047857] to-[#059669]", // green
  "from-[#312e81] via-[#3730a3] to-[#4338ca]", // indigo
  "from-[#4c1d95] via-[#5b21b6] to-[#6d28d9]", // purple
  "from-[#7c2d12] via-[#9a3412] to-[#c2410c]", // orange-brown
  "from-[#0f766e] via-[#0d9488] to-[#14b8a6]", // teal
  "from-[#374151] via-[#4b5563] to-[#6b7280]", // neutral grey
  "from-[#1f2937] via-[#111827] to-[#020617]", // dark slate
];

const CourseCard = ({
  title,
  rating,
  lessons,
  students,
  icon,
  index,
  onEnroll,
}: CourseCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -8 }}
    className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-secondary/30 group"
  >
    {/* HEADER */}
    <div
      className={`relative p-6 overflow-hidden bg-gradient-to-br ${
        headerGradients[index % headerGradients.length]
      }`}
    >
      {/* SAME BACKGROUND LINE PATTERN */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20stroke%3D%22%2399c2ff%22%20stroke-width%3D%221%22%20stroke-opacity%3D%220.08%22%3E%3Cpath%20d%3D%22M0%2040L40%200M-10%2030L30%20-10M10%2050L50%2010%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />

      <motion.span
        className="text-5xl relative z-10 block"
        whileHover={{ scale: 1.2, rotate: 8 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {icon}
      </motion.span>
    </div>

    {/* CONTENT */}
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

      <Button
        variant="outline"
        className="w-full group/btn"
        onClick={onEnroll}
      >
        Enroll Now
        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </Button>
    </div>
  </motion.div>
);

const CoursesSection = () => {
  const [enrollDialogOpen, setEnrollDialogOpen] = useState(false);

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
    <>
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
              Software <span className="text-secondary">Testing</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our comprehensive range of testing courses designed to
              make you industry-ready
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <CourseCard
                key={course.title}
                {...course}
                index={index}
                onEnroll={() => setEnrollDialogOpen(true)}
              />
            ))}
          </div>
        </div>
      </section>

      <EnrollmentDialog
        open={enrollDialogOpen}
        onOpenChange={setEnrollDialogOpen}
        type="enroll"
      />
    </>
  );
};

export default CoursesSection;
