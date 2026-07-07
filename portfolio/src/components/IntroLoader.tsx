"use client";

import { useState, useEffect, useRef, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STATUS_MESSAGES = [
  "Preparing workspace...",
  "Loading projects...",
  "Almost ready...",
  "Welcome.",
];

const Particle = memo(({ index }: { index: number }) => {
  const settings = useRef({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 2 + Math.random() * 3,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 4,
  });

  return (
    <motion.div
      className="absolute rounded-full bg-white/20"
      style={{
        width: settings.current.size,
        height: settings.current.size,
        left: `${settings.current.x}%`,
        top: `${settings.current.y}%`,
      }}
      animate={{
        y: [0, -20, 0, 15, 0],
        x: [0, 10, -5, -10, 0],
        opacity: [0.2, 0.6, 0.3, 0.7, 0.2],
      }}
      transition={{
        duration: settings.current.duration,
        delay: settings.current.delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
});
Particle.displayName = "Particle";

export default function IntroLoader({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [statusIndex, setStatusIndex] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 2));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem("intro-loader-seen", "true");
        setTimeout(() => setReady(true), 600);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % STATUS_MESSAGES.length);
    }, 700);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="intro-loader"
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-2xl"
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            {/* Grid background */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />

            {Array.from({ length: 6 }).map((_, i) => (
              <Particle key={i} index={i} />
            ))}

            <div className="relative z-10 flex flex-col items-center">
              {/* Circular Spinner */}
              <div className="relative flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="h-24 w-24 rounded-full border-[3px] border-white/10 border-t-[#3b82f6]"
                />
                <div className="absolute text-[12px] font-bold text-white/80">
                  {Math.round(progress)}%
                </div>
              </div>

              {/* Branding */}
              <div className="mt-12 text-center">
                <h1 className="text-xl font-black tracking-[0.22em] text-white/90">
                  Manuja Ravishka
                </h1>
                <p className="mt-2 text-[10px] tracking-[0.35em] text-white/30">
                  CREATIVE PORTFOLIO
                </p>
              </div>

              {/* Status Message */}
              <div className="mt-8 h-4">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={statusIndex}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="text-[10px] font-mono tracking-widest text-white/25"
                  >
                    {STATUS_MESSAGES[statusIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}