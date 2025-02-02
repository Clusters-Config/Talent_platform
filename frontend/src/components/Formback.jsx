import { motion, useAnimationFrame } from "framer-motion";
import { useState, useEffect } from "react";

const generateDots = (count, width, height) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 10 + 4,
    speed: Math.random() * 0.8 + 0.2,
    blur: Math.random() * 2 + 0.5,
    followMouse: Math.random() < 0.1, 
    distance: Math.random() * 80 + 20,
    angle: Math.random() * Math.PI * 2, 
  }));
};

export default function AnimatedBackground() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [mousePosition, setMousePosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const [dots, setDots] = useState(() => generateDots(40, dimensions.width, dimensions.height));

  useAnimationFrame(() => {
    setDots((prevDots) =>
      prevDots.map((dot) => {
        if (dot.followMouse) {
          // Calculate the target position of the dot in a circular area around the mouse
          const targetX = mousePosition.x + Math.cos(dot.angle) * dot.distance;
          const targetY = mousePosition.y + Math.sin(dot.angle) * dot.distance;

          // Gradually move the dot towards the target position for smooth transitions
          const lerpFactor = 0.1; // Smoothness factor, adjust for smoother/slower movement
          const newX = dot.x + (targetX - dot.x) * lerpFactor;
          const newY = dot.y + (targetY - dot.y) * lerpFactor;

          // Update the angle for random movement around the mouse
          dot.angle += Math.random() * 0.05 - 0.025; // Small random change in angle

          return {
            ...dot,
            x: newX,
            y: newY,
          };
        }
        // Move other dots naturally
        return { ...dot, y: (dot.y + dot.speed) % dimensions.height };
      })
    );
  });

  return (
    <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="absolute w-full h-full backdrop-blur-lg bg-white/20 dark:bg-gray-900/30" />
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full bg-blue-300 dark:bg-blue-500 opacity-70 dark:opacity-60"
          style={{
            width: dot.size,
            height: dot.size,
            top: dot.y,
            left: dot.x,
            filter: `blur(${dot.blur}px)`,
            boxShadow: `0 0 ${dot.blur * 2}px rgba(0, 0, 255, 0.3)`,
          }}
        />
      ))}
    </div>
  );
}
