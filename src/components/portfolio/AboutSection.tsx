import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "./SectionHeading";
import { Bot, Cpu, MessageSquare, Workflow, Plug, Database, Code2 } from "lucide-react";
import profileImg from "@/assets/profile.png";

gsap.registerPlugin(ScrollTrigger);

const skillIcons = [
  { icon: Bot, label: "AI Agents" },
  { icon: Cpu, label: "OpenAI / LLMs" },
  { icon: MessageSquare, label: "Chatbots" },
  { icon: Workflow, label: "n8n" },
  { icon: Plug, label: "API Integration" },
  { icon: Database, label: "Webhooks" },
  { icon: Code2, label: "Google Sheets" },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const icons = sectionRef.current.querySelectorAll(".skill-icon-item");
    gsap.fromTo(
      icons,
      { opacity: 0, y: 20, scale: 0.8 },
      {
        opacity: 1, y: 0, scale: 1,
        stagger: 0.08,
        duration: 0.5,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section id="about" className="section-padding relative" ref={sectionRef}>
      <div className="container mx-auto">
        <SectionHeading label="About" title="Who I Am" />
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -60, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative group cursor-pointer">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary/60 transition-colors duration-500 relative z-10">
                <img
                  src={profileImg}
                  alt="Ahmad Raza"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ objectPosition: "50% 18%" }}
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-all duration-500 scale-110" />
            </div>
          </motion.div>

          {/* Bio + Skills */}
          <motion.div
            initial={{ opacity: 0, x: 60, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-8">
              AI automation enthusiast and BSIT student at the University of Management and Technology.
              I specialize in AI agents, chatbots, and no-code workflow automation — building scalable
              solutions that reduce manual work, improve customer experience, and help businesses grow.
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {skillIcons.map((skill) => (
                <div
                  key={skill.label}
                  className="skill-icon-item glass-card rounded-xl p-3 flex flex-col items-center gap-2 hover:border-primary/40 transition-all group cursor-default"
                >
                  <skill.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-[0.65rem] text-muted-foreground text-center leading-tight">{skill.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
