import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Bot, Brain, MessageSquare, Workflow, Plug, Target, Code2, Settings } from "lucide-react";

const skills = [
  { icon: Brain, label: "AI Automation" },
  { icon: Bot, label: "AI Agents" },
  { icon: MessageSquare, label: "Chatbot Development" },
  { icon: Workflow, label: "Workflow Automation (n8n)" },
  { icon: Plug, label: "API Integration" },
  { icon: Target, label: "Lead Generation Systems" },
  { icon: Code2, label: "No-code / Low-code Dev" },
  { icon: Settings, label: "Business Process Optimization" },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding relative">
    <div className="container mx-auto">
      <SectionHeading label="Expertise" title="Skills & Specializations" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            whileHover={{ y: -4 }}
            className="glass-card rounded-xl p-6 flex flex-col items-center text-center gap-3 hover:border-primary/30 transition-colors cursor-default"
          >
            <skill.icon className="w-7 h-7 text-primary" />
            <span className="text-sm font-medium">{skill.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
