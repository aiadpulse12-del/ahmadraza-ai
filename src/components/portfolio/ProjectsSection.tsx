import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "./SectionHeading";
import { MessageSquare, Target, Brain, ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

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

const ProjectsSection = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardsRef.current) return;
    const cards = cardsRef.current.querySelectorAll(".project-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 60, scale: 0.95 },
      {
        opacity: 1, y: 0, scale: 1,
        stagger: 0.15,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section id="projects" className="section-padding relative">
      <div className="container mx-auto">
        <SectionHeading label="Work" title="Featured Projects" />
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {projects.map((project) => (
            <div
              key={project.title}
              className="project-card glass-card rounded-2xl p-8 group hover:border-primary/40 transition-all duration-300 relative overflow-hidden cursor-pointer hover:-translate-y-2"
            >
              {/* Glow effect */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/15 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "hsl(var(--neon-violet) / 0.1)" }} />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-3 group-hover:text-primary/90 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary/80 border border-primary/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
