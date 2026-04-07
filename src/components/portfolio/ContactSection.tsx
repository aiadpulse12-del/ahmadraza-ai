import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "./SectionHeading";
import { MessageCircle, Send, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollTrigger);

const SERVICE_ID = "service_678nve4";
const TEMPLATE_ID = "template_ug2ldkw";
const PUBLIC_KEY = "Gjv_lRs323hU-N3MF";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const inputs = sectionRef.current.querySelectorAll(".contact-animate");
    gsap.fromTo(
      inputs,
      { opacity: 0, x: -30 },
      {
        opacity: 1, x: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      }, PUBLIC_KEY);
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    } catch {
      setError("Failed to send. Please try again or use WhatsApp.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative" ref={sectionRef}>
      <div className="container mx-auto">
        <SectionHeading
          label="Get In Touch"
          title="Let's Build Something Powerful Together"
          description="Have a project in mind or want to collaborate? I'd love to hear from you."
        />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
            <div className="contact-animate">
              <label className="text-sm text-muted-foreground mb-1.5 block">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg glass-input text-foreground text-sm focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div className="contact-animate">
              <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg glass-input text-foreground text-sm focus:outline-none"
                placeholder="you@email.com"
              />
            </div>
            <div className="contact-animate">
              <label className="text-sm text-muted-foreground mb-1.5 block">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg glass-input text-foreground text-sm focus:outline-none resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            {error && <p className="text-destructive text-sm">{error}</p>}
            {sent && (
              <p className="text-primary text-sm flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" /> Message sent successfully!
              </p>
            )}
            <button
              type="submit"
              disabled={sending}
              className="contact-animate w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium glow-button disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div className="flex flex-col gap-4">
            <a
              href="https://wa.me/message/SOADFTQYKH4NE1"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-animate glass-card rounded-2xl p-6 flex items-center gap-4 hover:border-primary/40 transition-all group"
            >
              <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-sm">WhatsApp</p>
                <p className="text-muted-foreground text-xs">Chat directly</p>
              </div>
            </a>
            <a
              href="https://www.instagram.com/aiadpulse?igsh=eXQ0MXM0dW9qZTJn"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-animate glass-card rounded-2xl p-6 flex items-center gap-4 hover:border-primary/40 transition-all group"
            >
              <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
                <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-sm">Instagram</p>
                <p className="text-muted-foreground text-xs">@aiadpulse</p>
              </div>
            </a>
            <a
              href="mailto:aiadpulse12@gmail.com"
              className="contact-animate glass-card rounded-2xl p-6 flex items-center gap-4 hover:border-primary/40 transition-all group"
            >
              <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
                <Send className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-sm">Email</p>
                <p className="text-muted-foreground text-xs">aiadpulse12@gmail.com</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
