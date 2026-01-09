import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What are the prerequisites for the Software Testing course?",
      answer: "No prior programming experience is required for Manual Testing. For Automation Testing courses, basic understanding of any programming language is helpful but not mandatory as we cover the fundamentals in our course."
    },
    {
      question: "How long is the course duration?",
      answer: "Course duration varies based on the module. Manual Testing is 4-6 weeks, Selenium Automation is 8-10 weeks, and Complete Testing course is 12-16 weeks. We also offer flexible weekend batches for working professionals."
    },
    {
      question: "Do you provide placement assistance?",
      answer: "Yes! We provide 100% placement assistance including resume preparation, mock interviews, soft skills training, and direct referrals to our 300+ hiring partners. Our placement rate is over 95%."
    },
    {
      question: "Will I get a certificate after course completion?",
      answer: "Yes, you will receive an industry-recognized certificate upon successful completion of the course. Our certificates are valued by top IT companies across India."
    },
    {
      question: "What is the course fee and payment options?",
      answer: "Course fees vary based on the program. We offer flexible EMI options starting from ₹5,000/month. Contact us for detailed fee structure and available discounts for early enrollment."
    },
    {
      question: "Is this course available online?",
      answer: "Yes! We offer both classroom training at our Tambaram center and live online training. Online sessions are interactive with the same quality as in-person training."
    },
    {
      question: "Who is the trainer for the course?",
      answer: "Our lead trainer Manoj has 12+ years of industry experience in QA and has trained over 5000+ students. All our trainers are working professionals from top IT companies."
    },
    {
      question: "Do you provide real-time project experience?",
      answer: "Absolutely! You will work on 3-5 real-time projects during the course covering e-commerce, banking, and healthcare domains. This hands-on experience is crucial for job interviews."
    },
  ];

  return (
    <section id="faq" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            Got Questions?
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Frequently Asked <span className="text-secondary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our software testing courses
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 shadow-card"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
