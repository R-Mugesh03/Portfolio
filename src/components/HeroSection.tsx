import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { motion } from "framer-motion";
import HeroSphere from "./HeroSphere";
import ParticleField from "./ParticleField";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden perspective-container">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 60 }} dpr={[1, 2]}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.3} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} />
            <pointLight position={[-5, -5, -5]} color="#8b5cf6" intensity={0.5} />
            <HeroSphere />
            <ParticleField />
            <Environment preset="night" />
          </Suspense>
        </Canvas>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-background/40 via-transparent to-background pointer-events-none" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-background/60 via-transparent to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 section-padding w-full max-w-7xl mx-auto preserve-3d">
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl preserve-3d"
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.p
            initial={{ opacity: 0, x: -20, z: -30 }}
            animate={{ opacity: 1, x: 0, z: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-primary font-heading text-sm md:text-base tracking-[0.3em] uppercase mb-4 depth-layer-1"
            style={{ transform: "translateZ(30px)" }}
          >
            Creative Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20, rotateX: 15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[0.95] mb-6 text-3d"
            style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
          >
            <span className="block">MUGESH R</span>
            <span className="block gradient-text">AI & Web Engineer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-muted-foreground text-lg md:text-xl max-w-lg mb-10 leading-relaxed"
            style={{ transform: "translateZ(20px)" }}
          >
            
Focused on developing reliable, efficient, and impactful technology solutions.

          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex flex-wrap gap-4"
            style={{ transform: "translateZ(40px)" }}
          >
            <a
              href="#projects"
              className="btn-3d px-8 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-sm tracking-wide"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="btn-3d px-8 py-3 rounded-lg border border-border text-foreground font-heading font-semibold text-sm tracking-wide hover:border-primary/50"
              style={{
                boxShadow: "0 6px 0 hsl(var(--border)), 0 8px 20px hsl(var(--background) / 0.5)",
              }}
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-muted-foreground text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-muted-foreground/40 flex justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
