import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";
import { useTilt3D } from "@/hooks/use-tilt-3d";

const internships = [
  {
    role: "Cyber Security Intern",
    company: "Corizo",
    duration: "Sep 2023",
    description:
      "Assisted in implementing security protocols and monitoring systems to safeguard digital assets.",
  },
  {
    role: "Web Development",
    company: " On Campus",
    duration: "Feb 2024",
    description:
      "Developed and maintained web applications, enhancing functionality and user experience.",
  },
  {
    role: "AI Generative",
    company: "NISC Technical Service Center",
    duration: "Apr 2025",
    description:
      "Worked on AI-driven content generation and optimization using generative models.",
  },
];

const InternCard = ({ children }: { children: React.ReactNode }) => {
  const { ref, tiltStyle, handleMouseMove, handleMouseLeave } = useTilt3D(10, 1.02);
  return (
    <div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={tiltStyle}>
      {children}
    </div>
  );
};

const InternshipsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="internships" className="section-padding relative perspective-container" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-3 text-center">
            Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 leading-tight text-center text-3d">
            My <span className="gradient-text">Internships</span>
          </h2>

          <div className="relative">
            {/* Timeline line with glow */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px blur-sm bg-gradient-to-b from-primary/30 via-primary/10 to-transparent" />

            <div className="space-y-12">
              {internships.map((item, i) => (
                <motion.div
                  key={item.company}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40, rotateY: i % 2 === 0 ? -10 : 10 }}
                  animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.2, duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot with 3D glow */}
                  <motion.div
                    className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 mt-2 md:mt-0 z-10"
                    style={{
                      boxShadow: "0 0 15px hsl(var(--primary) / 0.5), 0 0 30px hsl(var(--primary) / 0.2)",
                    }}
                    whileHover={{ scale: 2 }}
                  />

                  {/* Card */}
                  <div className={`ml-10 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <InternCard>
                      <div className="glass-3d rounded-xl p-6 card-3d">
                        <div className="flex items-center gap-3 mb-3">
                          <motion.div
                            className="p-2 rounded-lg bg-primary/10 text-primary"
                            whileHover={{ rotateY: 180 }}
                            transition={{ duration: 0.5 }}
                            style={{ transformStyle: "preserve-3d" }}
                          >
                            <Briefcase size={18} />
                          </motion.div>
                          <span className="text-xs text-muted-foreground/70 font-heading">
                            {item.duration}
                          </span>
                        </div>
                        <h3 className="text-lg font-heading font-bold text-foreground">
                          {item.role}
                        </h3>
                        <p className="text-primary text-sm font-heading mt-1">{item.company}</p>
                        <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </InternCard>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InternshipsSection;
