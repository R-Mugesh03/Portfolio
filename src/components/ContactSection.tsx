import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useTilt3D } from "@/hooks/use-tilt-3d";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const formTilt = useTilt3D(8, 1.01);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! (Demo)");
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding relative perspective-container" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start preserve-3d">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotateY: -8 }}
            animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="glass-3d rounded-2xl p-8"
          >
            <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-3">Contact</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight text-3d">
              Let's build something <span className="gradient-text">Innovation</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Have a project in mind or just want to chat? Drop me a message and I'll get back to you within 24 hours.
            </p>

            <div className="flex gap-4">
              {["GitHub","LinkedIn","Email","Instagram"].map((social, i) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1, rotateY: 10, z: 20 }}
                  className="px-4 py-2 rounded-lg glass-3d text-sm font-heading text-muted-foreground hover:text-primary card-3d"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotateY: 8 }}
            animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div
              ref={formTilt.ref}
              onMouseMove={formTilt.handleMouseMove}
              onMouseLeave={formTilt.handleMouseLeave}
              style={formTilt.tiltStyle}
            >
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 glass-3d rounded-2xl p-8 card-3d"
              >
                {[
                  { name: "name", label: "Name", type: "text" },
                  { name: "email", label: "Email", type: "email" },
                ].map((field) => (
                  <div key={field.name} className="flex flex-col gap-2">
                    <label className="text-sm font-heading text-muted-foreground tracking-wide">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      required
                      value={formState[field.name as keyof typeof formState]}
                      onChange={(e) => setFormState((s) => ({ ...s, [field.name]: e.target.value }))}
                      className="bg-muted/40 border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary/60 focus:glow-box transition-all duration-300 placeholder:text-muted-foreground/50"
                      placeholder={`Your ${field.label.toLowerCase()}`}
                    />
                  </div>
                ))}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-heading text-muted-foreground tracking-wide">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                    className="bg-muted/40 border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary/60 focus:glow-box transition-all duration-300 resize-none placeholder:text-muted-foreground/50"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 btn-3d px-8 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-sm tracking-wide self-start"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-xs font-heading">© 2026 MR. All rights reserved.</p>
        <p className="text-muted-foreground/50 text-xs">Crafted with passion & code</p>
      </div>
    </section>
  );
};

export default ContactSection;
