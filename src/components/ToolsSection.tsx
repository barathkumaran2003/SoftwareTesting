import { motion } from "framer-motion";

const ToolsSection = () => {
  const tools = [
    { name: "Selenium", icon: "🔬" },
    { name: "Playwright", icon: "🎭" },
    { name: "Maven", icon: "📦" },
    { name: "JIRA", icon: "📊" },
    { name: "Jenkins", icon: "🔧" },
    { name: "JMeter", icon: "⚡" },
    { name: "Git", icon: "📂" },
    { name: "Appium", icon: "📱" },
    { name: "Postman", icon: "📮" },
    { name: "REST Assured", icon: "🔗" },
    { name: "TestNG", icon: "🧪" },
    { name: "Cucumber", icon: "🥒" },
    { name: "JUnit", icon: "✅" },
    { name: "POM", icon: "📋" },
    { name: "Mocha", icon: "☕" },
    { name: "Agile", icon: "🔄" },
    { name: "BrowserStack", icon: "🌐" },
    { name: "GenAI", icon: "🤖" },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            Industry Tools
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Tools & <span className="text-secondary">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Master the most in-demand testing tools used by top companies worldwide
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-card rounded-2xl px-6 py-4 md:px-8 md:py-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-secondary/30 flex items-center gap-3 md:gap-4"
            >
              <span className="text-2xl md:text-3xl">{tool.icon}</span>
              <span className="font-heading font-semibold text-base md:text-lg text-foreground">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
