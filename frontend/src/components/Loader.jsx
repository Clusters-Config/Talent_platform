import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

export default function SvgHLoader() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animateLoader = async () => {
      animate(
        [
          [".h1", { pathLength: 0.5, pathOffset: 0, strokeDasharray: "1 2" }],
          [".h1", { pathLength: 0.005, pathOffset: 0, strokeDasharray: "1 4" }],
          [".h2", { pathLength: 0.5, pathOffset: 0.5, strokeDasharray: "2 1" }, { at: "<" }]
        ],
        { duration: 3, ease: "easeInOut", repeat: Infinity }
      );
    };
    animateLoader();
  }, [animate]);

  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-[200px]">
      <svg
        ref={scope}
        width="200mm"
        height="200mm"
        viewBox="0 0 100 100"
        className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 transform hover:scale-110 transition-transform duration-300 ease-in-out"
        role="status"
        aria-label="Loading"

      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <motion.path
          className="h1 text-blue-600 dark:text-blue-400"
          initial={{ pathLength: 0.5, pathOffset: 0.5 }}
          d="M 20,80 V 20 M 20,50 H 60 M 60,80 V 20"
          stroke="currentColor"
          strokeWidth="5"

          strokeLinecap="round"
          filter="url(#glow)"
          fill="none"
        />
        <motion.path
          className="h2 text-blue-500 dark:text-blue-300/70"
          initial={{ pathLength: 0, pathOffset: 1 }}
          d="M 20,80 V 20 M 20,50 H 60 M 60,80 V 20"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          filter="url(#glow)"
          fill="none"
        />
      </svg>
      <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>

    </div>
  );
}
