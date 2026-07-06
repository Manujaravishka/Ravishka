"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      animate={{
        x: position.x - 10,
        y: position.y - 10,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      <div className="h-5 w-5 rounded-full bg-white mix-blend-difference shadow-lg" />
    </motion.div>
  );
}