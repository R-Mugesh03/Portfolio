import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTilt3D } from "@/hooks/use-tilt-3d";

const skills = [
  "Java", "Html / Css", "Sql", "Node.js", "Python", 
  "React", "Tailwind CSS", "Node js", "AI"
];

const TiltCard = ({ children }: { children: React.ReactNode }) => {
  const { ref, tiltStyle, handleMouseMove, handleMouseLeave } = useTilt3D(12, 1.02);
  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tiltStyle}
    >
      {children}
    </div>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative perspective-container" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 5 }}
          animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-16 items-center preserve-3d"
        >
          {/* Left */}
          <TiltCard>
            <div className="glass-3d rounded-2xl p-8">
              <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-3">About Me</p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight text-3d">
                Passionate about <span className="gradient-text">innovation</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
              Passionate Software Developer focused on building scalable, intelligent, and user-centric applications. With strong foundations in Java, web development, and databases, I combine technical expertise with continuous learning to create efficient, real-world solutions. Eager to contribute to innovative teams, solve complex problems, and evolve into a high-impact full-stack engineer.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring generative art, contributing to
                open-source projects, or experimenting with emerging web technologies.
              </p>
            </div>
          </TiltCard>

          {/* Right — Skills */}
          <div className="preserve-3d">
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                  animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  whileHover={{
                    scale: 1.1,
                    rotateY: 10,
                    z: 30,
                    boxShadow: "0 15px 40px -10px hsl(185 80% 55% / 0.2)",
                  }}
                  className="px-4 py-2 rounded-lg glass-3d text-sm font-heading text-foreground cursor-default card-3d"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { value: "3+", label: "Projects" },
                { value:"4Years" ,label: "Student"},
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20, rotateX: 20 }}
                  animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
                  whileHover={{ scale: 1.1, rotateX: -5, y: -5 }}
                  className="text-center glass-3d rounded-xl p-4 card-3d cursor-default"
                >
                  <p className="text-3xl font-heading font-bold gradient-text text-3d">{stat.value}</p>
                  <p className="text-muted-foreground text-xs mt-1 tracking-wide">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
