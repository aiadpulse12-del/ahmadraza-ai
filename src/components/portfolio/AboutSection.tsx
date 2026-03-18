import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Bot, GraduationCap, Rocket } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto">
        <SectionHeading label="About" title="Who I Am" />
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: Bot,
              title: "AI Enthusiast",
              text: "Specializing in AI agents, chatbots, and no-code workflow automation to build scalable solutions.",
            },
            {
              icon: GraduationCap,
              title: "BSIT Student",
              text: "Currently pursuing BSIT at the University of Management and Technology, merging academics with real-world projects.",
            },
            {
              icon: Rocket,
              title: "Impact-Driven",
              text: "Focused on reducing manual work, improving customer experience, and helping businesses grow through intelligent automation.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-xl p-8 hover:border-primary/30 transition-colors group"
            >
              <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
