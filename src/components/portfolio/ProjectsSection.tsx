import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { MessageSquare, Target, Brain, ExternalLink } from "lucide-react";

const projects = [
  {
    icon: MessageSquare,
    title: "AI WhatsApp Customer Support System",
    description:
      "AI-powered WhatsApp automation for Shopify stores with real-time order tracking and product assistance.",
    tags: ["WhatsApp API", "Shopify", "AI", "n8n"],
  },
  {
    icon: Target,
    title: "AI Lead Generation System",
    description:
      "Automated Google Maps scraping + AI personalized email outreach system for client acquisition.",
    tags: ["Google Maps", "Email Outreach", "AI", "Automation"],
  },
  {
    icon: Brain,
    title: "RAG-Based Appointment Booking Agent",
    description:
      "Intelligent system using Retrieval-Augmented Generation to automate scheduling with context-aware responses and real-time data retrieval.",
    tags: ["RAG", "AI Agent", "LLM", "Automation"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding relative">
    <div className="container mx-auto">
      <SectionHeading label="Work" title="Featured Projects" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="glass-card rounded-xl p-8 group hover:border-primary/30 transition-all relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <project.icon className="w-8 h-8 text-primary" />
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-3">{project.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
