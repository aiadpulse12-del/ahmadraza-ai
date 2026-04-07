import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import gsap from "gsap";

const HeroSection = () => {
  const orbsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!orbsRef.current) return;
    const orbs = orbsRef.current.querySelectorAll(".glow-orb");
    orbs.forEach((orb, i) => {
      gsap.to(orb, {
        y: -20 + i * 5,
        x: 10 - i * 3,
        duration: 3 + i * 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spline 3D background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://my.spline.design/orb-GVbl1TXf3kXpj0CbxDb5o9WZ/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="opacity-60"
          title="3D Background"
        />
      </div>

      {/* Floating glow orbs */}
      <div ref={orbsRef} className="absolute inset-0 z-[1] pointer-events-none">
        <div className="glow-orb orb orb-violet w-[500px] h-[500px] top-[10%] left-[5%]" />
        <div className="glow-orb orb orb-blue w-[400px] h-[400px] bottom-[15%] right-[10%]" />
        <div className="glow-orb orb orb-cyan w-[300px] h-[300px] top-[60%] left-[50%]" />
        <div className="glow-orb orb orb-primary w-[250px] h-[250px] top-[5%] right-[30%]" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 z-[2] grid-bg opacity-30" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 glass-card mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Agentic AI Developer</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-6xl lg:text-8xl font-display font-bold leading-[0.95] tracking-tight mb-6"
        >
          Hi, I'm{" "}
          <span className="text-gradient">M.Ahmad</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-4"
        >
          AI Agents & Chatbot Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-sm text-muted-foreground/70 max-w-lg mx-auto mb-10 italic"
        >
          "Building intelligent systems that help businesses work smarter, faster, and more efficiently."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium glow-button"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-border/60 text-foreground font-medium hover:bg-secondary/50 transition-all hover:border-primary/30"
          >
            Hire Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
