import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Manual Tester at TCS",
      image: "👩‍💼",
      content: "The comprehensive manual testing training helped me understand real-world scenarios. Got placed within 2 months of completing the course!",
      rating: 5,
    },
    {
      name: "Rahul Verma",
      role: "Automation Engineer at Infosys",
      image: "👨‍💻",
      content: "The Selenium course was exceptional. The framework building exercises prepared me perfectly for my automation role. Highly recommended!",
      rating: 5,
    },
    {
      name: "Sneha Patel",
      role: "QA Fresher at Wipro",
      image: "👩‍🎓",
      content: "As a fresher with no coding background, I was worried. But the trainers made everything easy to understand. Now I'm confidently working as a QA!",
      rating: 5,
    },
    {
      name: "Amit Kumar",
      role: "Career Switcher - Now SDET",
      image: "👨‍🔧",
      content: "Switched from a non-IT role to Software Testing. The placement team was incredibly helpful in preparing me for interviews.",
      rating: 5,
    },
    {
      name: "Deepa Nair",
      role: "API Tester at Cognizant",
      image: "👩‍🔬",
      content: "The API testing module with Postman and REST Assured was exactly what I needed. Practical assignments made learning so effective!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            Success Stories
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            What Our <span className="text-secondary">Students Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of successful QA professionals who started their journey with us
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-secondary/20 group-hover:text-secondary/40 transition-colors" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-3xl">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-secondary fill-secondary" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
