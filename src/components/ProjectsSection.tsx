import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useTilt3D } from "@/hooks/use-tilt-3d";

const projects = [
  {
    title: "A Dual-Mode Smart Assistive Guidance System",
    category: "Assistive Technology",
    description: "Enhanced an AI-powered assistive system providing real-time visual and audio guidance for visually and hearing-impaired users. Integrated computer vision, speech processing, and emotion recognition to deliver context-aware navigation and enhance independent living..",
    tech: ["Python", "OpenCV", "TensorFlow / Keras", "SpeechRecognition","Gts"],
  },
  {
    title: "Jio Saavn Clone – Music Streaming Web App",
    category: "Web Development",
    description: "Developed a responsive music streaming web application using HTML and CSS, with Firebase integration for backend services including authentication and real-time database management.",
    tech: ["Html5", "Css3", "Firebase Authentication","Front / Back -End","Cloud-Based Application"],
  },
  {
    title: "Brain Tumor and Alzheimer’s Detection System (Ongoing) ",
    category: "Artificial Intelligence",
    description: "Improved a medical image analysis system using Python to detect brain tumors and Alzheimer’s disease through image processing and machine learning techniques.",
    tech: ["Machine Learning", "Medical Image Processing", "Healthcare Technology", "Deep Learning"],
  },
  {
    title: "Prism Commerce",
    category: "E-Commerce",
    description: "High-performance e-commerce platform with AR product previews and real-time inventory.",
    tech: ["React", "Stripe", "Three.js", "Redis"],
  },
];

const ProjectCard = ({ project, index, inView }: { project: typeof projects[0]; index: number; inView: boolean }) => {
  const { ref, tiltStyle, handleMouseMove, handleMouseLeave } = useTilt3D(12, 1.03);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 10 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ delay: 0.15 * index, duration: 0.6 }}
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={tiltStyle}
        className="group"
      >
        <div className="glass-3d rounded-xl overflow-hidden cursor-pointer card-3d">
          {/* Glowing top edge */}
          <div className="h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative p-8 md:p-10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-primary font-heading tracking-widest uppercase">
                {project.category}
              </span>
              <motion.span
                initial={{ x: -10, opacity: 0 }}
                whileHover={{ x: 5 }}
                className="text-primary text-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                →
              </motion.span>
            </div>

            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3 group-hover:gradient-text transition-all duration-300 text-3d">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <motion.span
                  key={t}
                  whileHover={{ scale: 1.1, rotateZ: 2 }}
                  className="text-xs px-3 py-1 rounded-full bg-muted/60 text-muted-foreground font-heading border border-border/30"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative perspective-container" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-3">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-3d">
            Selected <span className="gradient-text">Works</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
