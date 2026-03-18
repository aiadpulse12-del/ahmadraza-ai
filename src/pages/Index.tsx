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

const Index = () => (
  <div className="min-h-screen bg-background relative">
    <div className="starfield" />
    <div className="cosmic-glow" />
    <Navbar />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <CertificationsSection />
    <ExperienceSection />
    <ToolsSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
