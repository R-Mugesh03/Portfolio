import { useRef, useState, useCallback, type MouseEvent } from "react";

interface TiltState {
  rotateX: number;
  rotateY: number;
  scale: number;
}

export const useTilt3D = (intensity = 15, scaleOnHover = 1.03) => {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<TiltState>({ rotateX: 0, rotateY: 0, scale: 1 });

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setTilt({
        rotateX: (0.5 - y) * intensity,
        rotateY: (x - 0.5) * intensity,
        scale: scaleOnHover,
      });
    },
    [intensity, scaleOnHover]
  );

  const handleMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0, scale: 1 });
  }, []);

  const tiltStyle: React.CSSProperties = {
    transform: `perspective(800px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(${tilt.scale}, ${tilt.scale}, ${tilt.scale})`,
    transition: "transform 0.2s ease-out",
    transformStyle: "preserve-3d" as const,
  };

  return { ref, tiltStyle, handleMouseMove, handleMouseLeave };
};
