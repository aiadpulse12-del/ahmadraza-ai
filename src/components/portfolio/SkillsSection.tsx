import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "./SectionHeading";
import { Bot, Brain, MessageSquare, Workflow, Plug, Target, Code2, Settings } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

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

const SkillsSection = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll(".skill-card");
    gsap.fromTo(
      cards,
      { opacity: 0, scale: 0.85, y: 30 },
      {
        opacity: 1, scale: 1, y: 0,
        stagger: 0.07,
        duration: 0.5,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section id="skills" className="section-padding relative">
      <div className="container mx-auto">
        <SectionHeading label="Expertise" title="Skills & Specializations" />
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.label}
              className="skill-card glass-card rounded-xl p-6 flex flex-col items-center text-center gap-3 hover:border-primary/40 transition-all cursor-default group hover:-translate-y-1"
            >
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.2)]">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium">{skill.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
