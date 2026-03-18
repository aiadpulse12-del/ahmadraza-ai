import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Briefcase, Lightbulb, Search } from "lucide-react";

const items = [
  {
    icon: Briefcase,
    title: "Hands-on Project Work",
    text: "Built real-world AI automation systems including customer support bots, lead generation pipelines, and workflow integrations.",
  },
  {
    icon: Lightbulb,
    title: "Self-Driven Learning",
    text: "Continuously exploring AI agents, LLM platforms, and no-code tools through certifications and practical experimentation.",
  },
  {
    icon: Search,
    title: "Seeking Opportunities",
    text: "Actively looking for professional roles and freelance projects in AI automation and intelligent systems.",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding relative">
    <div className="container mx-auto">
      <SectionHeading label="Journey" title="Experience & Goals" />
      <div className="max-w-3xl mx-auto space-y-6">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="glass-card rounded-xl p-6 flex gap-5 items-start hover:border-primary/30 transition-colors"
          >
            <div className="p-2.5 rounded-lg bg-primary/10 shrink-0">
              <item.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-semibold mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Goals */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-16 max-w-3xl mx-auto text-center"
      >
        <h3 className="font-display font-semibold text-xl mb-6">Future Goals</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "Build a career in AI & automation",
            "Become an expert in intelligent systems",
            "Launch a tech-driven AI solutions company",
          ].map((goal) => (
            <span
              key={goal}
              className="px-5 py-2.5 rounded-full border border-border text-sm text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors"
            >
              {goal}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;
