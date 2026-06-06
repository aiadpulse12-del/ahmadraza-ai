import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Preloader from "@/components/portfolio/Preloader";
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import CertificationsSection from "@/components/portfolio/CertificationsSection";

import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ToolsSection from "@/components/portfolio/ToolsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const onPreloaderComplete = useCallback(() => setLoaded(true), []);

  return (
    <>
      <Preloader onComplete={onPreloaderComplete} />
      {loaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="min-h-screen bg-background relative"
        >
          <div className="starfield" />
          <div className="cosmic-glow" />
          <Navbar />
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          
          <ExperienceSection />
          <ToolsSection />
          <ContactSection />
          <Footer />
        </motion.div>
      )}
    </>
  );
};

export default Index;
