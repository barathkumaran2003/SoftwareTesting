import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Karthik Rajan",
      role: "Automation Engineer at Infosys",
      image: "👨‍💻",
      content: "Trainer Manoj's practical approach to Selenium made automation so easy to understand. His real-time project experience helped me crack my first automation interview. Highly recommend Greens Tambaram!",
      rating: 5,
      trainer: "Manoj",
    },
    {
      name: "Priya Lakshmi",
      role: "QA Lead at TCS",
      image: "👩‍💼",
      content: "The best decision I made was joining Greens Tambaram branch. Manoj sir's way of explaining complex testing concepts is exceptional. Got placed within 3 weeks of course completion!",
      rating: 5,
      trainer: "Manoj",
    },
    {
      name: "Suresh Kumar",
      role: "SDET at Zoho",
      image: "👨‍🔧",
      content: "Switched from manual testing to automation with Manoj sir's guidance. The Playwright and API testing modules were exactly what the industry needs. Great placement support from the Tambaram team!",
      rating: 5,
      trainer: "Manoj",
    },
    {
      name: "Divya Sharma",
      role: "Manual Tester at Wipro",
      image: "👩‍🎓",
      content: "As a fresher, I was worried about entering IT. But Manoj sir at Greens Tambaram made everything easy. The ISTQB-aligned training and mock interviews gave me confidence. Now working at Wipro!",
      rating: 5,
      trainer: "Manoj",
    },
    {
      name: "Arun Prakash",
      role: "Performance Tester at Cognizant",
      image: "👨‍💻",
      content: "JMeter training by Manoj sir was outstanding! His industry experience shows in every class. The real-time load testing projects prepared me well for my role. Thank you Greens Tambaram!",
      rating: 5,
      trainer: "Manoj",
    },
    {
      name: "Meena Sundaram",
      role: "API Tester at HCL",
      image: "👩‍🔬",
      content: "The API testing course with Postman and REST Assured was comprehensive. Manoj sir's patience in clearing doubts and his practical assignments made learning enjoyable. Best institute in Tambaram!",
      rating: 5,
      trainer: "Manoj",
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
            Tambaram Branch Reviews
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            What Our <span className="text-secondary">Students Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of successful QA professionals who started their journey with us at Greens Tambaram
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
              whileHover={{ y: -5 }}
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

              <p className="text-muted-foreground leading-relaxed mb-4">{testimonial.content}</p>
              
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-primary font-medium">Trainer: {testimonial.trainer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
