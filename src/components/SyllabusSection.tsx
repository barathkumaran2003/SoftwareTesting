import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, CheckCircle } from "lucide-react";

const SyllabusSection = () => {
  const [activeTab, setActiveTab] = useState("Manual Testing");

  const syllabus: Record<string, string[]> = {
    "Manual Testing": [
      "SDLC and STLC Fundamentals",
      "Types of Testing (Functional, Non-Functional)",
      "Test Plan and Test Case Writing",
      "Defect Life Cycle Management",
      "Agile and Scrum Methodology",
      "JIRA Basics for Bug Tracking",
    ],
    "Selenium": [
      "Java or Python Basics for Testing",
      "Selenium WebDriver Architecture",
      "Locators (XPath, CSS, ID, Name)",
      "TestNG or PyTest Framework",
      "Framework Design Patterns (POM, Data-Driven)",
      "Maven, Git, and Jenkins Integration",
    ],
    "Playwright": [
      "Playwright Architecture & Setup",
      "JavaScript & TypeScript Basics",
      "Page Object Model Implementation",
      "Parallel Test Execution",
      "CI/CD Pipeline Integration",
    ],
    "API Testing": [
      "REST API Fundamentals",
      "HTTP Methods & Status Codes",
      "Postman for API Testing",
      "REST Assured Framework",
      "JSON Schema Validation",
    ],
    "Performance": [
      "JMeter Architecture & Components",
      "Load Testing Strategies",
      "Stress Testing Techniques",
      "Spike Testing Scenarios",
      "Test Plans & Report Analysis",
    ],
    "Mobile Testing": [
      "Mobile Testing Concepts",
      "Emulators vs Real Devices",
      "Appium Framework Basics",
    ],
    "ETL Testing": [
      "Data Warehouse Concepts",
      "Source-to-Target Validation",
      "SQL for ETL Testing",
    ],
  };

  const tabs = Object.keys(syllabus);

  return (
    <section id="syllabus" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            Course Curriculum
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Comprehensive <span className="text-secondary">Syllabus</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry-aligned curriculum covering everything you need to become a skilled QA professional
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tabs */}
          <div className="lg:w-1/3">
            <div className="bg-card rounded-2xl p-4 shadow-card border border-border">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left font-medium transition-all duration-200 mb-2 last:mb-0 ${
                    activeTab === tab
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted text-foreground"
                  }`}
                >
                  <span>{tab}</span>
                  <ChevronRight className={`w-5 h-5 transition-transform ${activeTab === tab ? "rotate-90" : ""}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-card rounded-2xl p-8 shadow-card border border-border"
              >
                <h3 className="font-heading text-2xl font-bold text-primary mb-6">
                  {activeTab}
                </h3>
                <ul className="space-y-4">
                  {syllabus[activeTab].map((topic, index) => (
                    <motion.li
                      key={topic}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium">{topic}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SyllabusSection;
