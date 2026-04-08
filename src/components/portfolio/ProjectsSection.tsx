import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "./SectionHeading";
import { ExternalLink } from "lucide-react";
import projectWhatsapp from "@/assets/project-whatsapp.png";
import projectLeadgen from "@/assets/project-leadgen.png";
import projectRag from "@/assets/project-rag.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    image: projectWhatsapp,
    title: "AI WhatsApp Customer Support System",
    description:
      "AI-powered WhatsApp automation for Shopify stores with real-time order tracking and product assistance.",
    tags: ["WhatsApp API", "Shopify", "AI", "n8n"],
    link: "https://drive.google.com/file/d/1GpZh4ZnmNk4axQHJ5Tcjz9Igu68o8efJ/view?usp=sharing",
  },
  {
    image: projectLeadgen,
    title: "AI Lead Generation System",
    description:
      "Automated Google Maps scraping + AI personalized email outreach system for client acquisition.",
    tags: ["Google Maps", "Email Outreach", "AI", "Automation"],
    link: "https://docs.google.com/document/d/1nRCG3M0ntAD3rOtr2e0b1hCuXsLoE4xe/edit?usp=sharing&ouid=115793955902701151489&rtpof=true&sd=true",
  },
  {
    image: projectRag,
    title: "RAG-Based Appointment Booking Agent",
    description:
      "Intelligent system using Retrieval-Augmented Generation to automate scheduling with context-aware responses and real-time data retrieval.",
    tags: ["RAG", "AI Agent", "LLM", "Automation"],
    link: "https://drive.google.com/file/d/15rsou7pHxpPVEHX9BNJIH07gfRpuKnwL/view?usp=sharing",
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
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card glass-card rounded-2xl overflow-hidden group hover:border-primary/40 transition-all duration-300 relative cursor-pointer hover:-translate-y-2 block"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute top-3 right-3 p-2 rounded-lg glass-card opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/15 transition-all duration-500" />
                <div className="relative z-10">
                  <h3 className="font-display font-semibold text-lg mb-3 group-hover:text-primary/90 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
