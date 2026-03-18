import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ label, title, description }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className="text-center mb-16"
  >
    <span className="text-primary text-sm font-medium tracking-widest uppercase mb-3 block">
      {label}
    </span>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
      {title}
    </h2>
    {description && (
      <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
        {description}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
