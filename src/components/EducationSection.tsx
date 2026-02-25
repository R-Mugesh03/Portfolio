import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";
import { useTilt3D } from "@/hooks/use-tilt-3d";

const education = [
  {
    type: "School",
    name: "Little Flower Matric Hr.Sec.School",
    degree: "Higher Secondary (12th)",
    year: "2022 – 2023",
    description: "Completed with distinction in  computer Science stream.",
  },
  {
    type: "College",
    name: "Panimalar Engineering College",
    degree: "B.Tech in Information Technology",
    year: "2023 – 2027",
    description: "Graduated with honors. Focused on software engineering and web technologies.",
  },
];

const certifications = [
  "Infosys Springboard Java",
  "Web Development",
  "AI Generative",
  "Cycber Security","DBMS"
];

const EduCard = ({ children }: { children: React.ReactNode }) => {
  const { ref, tiltStyle, handleMouseMove, handleMouseLeave } = useTilt3D(14, 1.03);
  return (
    <div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={tiltStyle}>
      {children}
    </div>
  );
};

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding relative perspective-container" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-3 text-center">
            Education
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 leading-tight text-center text-3d">
            My <span className="gradient-text">Academic Journey</span>
          </h2>

          {/* Education Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {education.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30, rotateX: 10 }}
                animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
              >
                <EduCard>
                  <div className="glass-3d rounded-xl p-6 card-3d">
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="p-3 rounded-lg bg-primary/10 text-primary"
                        whileHover={{ rotateY: 180, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        <GraduationCap size={24} />
                      </motion.div>
                      <div>
                        <span className="text-xs font-heading text-primary tracking-wider uppercase">
                          {item.type}
                        </span>
                        <h3 className="text-xl font-heading font-bold text-foreground mt-1">
                          {item.name}
                        </h3>
                        <p className="text-muted-foreground text-sm mt-1">{item.degree}</p>
                        <p className="text-muted-foreground/70 text-xs mt-1">{item.year}</p>
                        <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </EduCard>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h3 className="text-2xl font-heading font-bold mb-6 text-center text-3d">
              <span className="gradient-text">Certifications</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert, i) => (
                <motion.span
                  key={cert}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                  animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.08, rotateY: 8, z: 20 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg glass-3d text-sm font-heading text-foreground card-3d cursor-default"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Award size={14} className="text-primary" />
                  {cert}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
