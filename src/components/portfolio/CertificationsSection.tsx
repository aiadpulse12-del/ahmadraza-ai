import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Award } from "lucide-react";

const CertificationsSection = () => (
  <section className="section-padding relative">
    <div className="container mx-auto">
      <SectionHeading label="Credentials" title="Certifications" />
      <motion.a
        href="https://drive.google.com/file/d/1b1KiLTyJ3ZV3a10Q9DE9TYAqCBBcxXR3/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-card rounded-xl p-8 max-w-2xl mx-auto hover:border-primary/30 transition-colors block cursor-pointer"
      >
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-primary/10">
            <Award className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-lg">Agentic AI & Automation Expert</h3>
            <p className="text-primary text-sm mt-1">Tech 7 Academy</p>
            <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
              Demonstrated proficiency in AI agents, AI calling systems, workflow automation, and
              intelligent business solutions.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CertificationsSection;
