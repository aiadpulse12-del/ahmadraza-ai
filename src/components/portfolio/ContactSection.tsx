import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useState } from "react";
import { MessageCircle, Mail, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:aiadpulse12@gmail.com?subject=Inquiry from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`;
    window.open(mailto, "_blank");
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="container mx-auto">
        <SectionHeading
          label="Get In Touch"
          title="Let's Build Something Powerful Together"
          description="Have a project in mind or want to collaborate? I'd love to hear from you."
        />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-xl p-8 space-y-5"
          >
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </motion.form>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            <a
              href="https://wa.me/923000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-xl p-6 flex items-center gap-4 hover:border-primary/30 transition-colors group"
            >
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-sm">WhatsApp</p>
                <p className="text-muted-foreground text-xs">Chat directly</p>
              </div>
            </a>
            <a
              href="https://linkedin.com/in/ahmadraza"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-xl p-6 flex items-center gap-4 hover:border-primary/30 transition-colors group"
            >
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Linkedin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-sm">LinkedIn</p>
                <p className="text-muted-foreground text-xs">Connect with me</p>
              </div>
            </a>
            <a
              href="mailto:contact@ahmadraza.dev"
              className="glass-card rounded-xl p-6 flex items-center gap-4 hover:border-primary/30 transition-colors group"
            >
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-sm">Email</p>
                <p className="text-muted-foreground text-xs">contact@ahmadraza.dev</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
