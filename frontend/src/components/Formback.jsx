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
  }));
};

export default function Formback() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [dots, setDots] = useState(() => generateDots(40, dimensions.width, dimensions.height));

  useAnimationFrame(() => {
    setDots((prevDots) =>
      prevDots.map((dot) => ({
        ...dot,
        y: (dot.y + dot.speed) % dimensions.height,
      }))
    );
  });

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b -z-50 from-blue-50 to-white flex items-center justify-center">
      <div className="absolute w-full h-full backdrop-blur-lg bg-white/20" />
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full bg-blue-300 opacity-70"
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
      <div className="absolute z-10 text-center text-gray-700 text-xl font-semibold px-4 md:px-0">
        <h1 className="text-lg md:text-2xl">Welcome to TalentMatch</h1>
        <p className="text-sm md:text-lg">Find and connect with top talent effortlessly</p>
      </div>
    </div>
  );
}
