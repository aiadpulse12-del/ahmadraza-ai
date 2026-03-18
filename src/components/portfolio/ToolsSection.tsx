import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const tools = ["n8n", "LLM Platforms", "APIs & Webhooks", "Automation Systems", "Data Handling & Integrations"];

const ToolsSection = () => (
  <section className="section-padding relative">
    <div className="container mx-auto">
      <SectionHeading label="Stack" title="Tools & Technologies" />
      <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
        {tools.map((tool, i) => (
          <motion.span
            key={tool}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.08 }}
            className="px-6 py-3 rounded-lg glass-card text-sm font-medium hover:border-primary/30 transition-colors"
          >
            {tool}
          </motion.span>
        ))}
      </div>

      {/* Additional info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-16 max-w-2xl mx-auto text-center"
      >
        <p className="text-muted-foreground text-sm leading-relaxed">
          Passionate about AI, automation, and innovation. Strong interest in entrepreneurship
          and continuous learning focused on real-world impact.
        </p>
      </motion.div>
    </div>
  </section>
);

export default ToolsSection;
