"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

const STATUS_MESSAGES = [
  "Preparing workspace...",
  "Loading projects...",
  "Almost ready...",
  "Welcome.",
]

const PARTICLE_COUNT = 6

function Particle({ index }: { index: number }) {
  const x = useRef(Math.random() * 100)
  const y = useRef(Math.random() * 100)
  const size = useRef(2 + Math.random() * 3)
  const delay = useRef(Math.random() * 2)
  const duration = useRef(3 + Math.random() * 4)

  return (
    <motion.div
      className="absolute rounded-full bg-white/20"
      style={{
        width: size.current,
        height: size.current,
        left: `${x.current}%`,
        top: `${y.current}%`,
      }}
      animate={{
        y: [0, -20, 0, 15, 0],
        x: [0, 10, -5, -10, 0],
        opacity: [0.2, 0.6, 0.3, 0.7, 0.2],
      }}
      transition={{
        duration: duration.current,
        delay: delay.current,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  )
}

export default function IntroLoader({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [statusIndex, setStatusIndex] = useState(0)
  const [ready, setReady] = useState(false)

  console.log("Loader progress:", progress)

  // ── Progress animation: +2 every 50ms until 100 ──
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return Math.min(prev + 2, 100)
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  // ── When progress hits 100: wait 600ms, then hide loader ──
  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        setIsVisible(false)
        sessionStorage.setItem("intro-loader-seen", "true")
      }, 600)

      return () => clearTimeout(timeout)
    }
  }, [progress])

  // ── After loader finishes exit animation (600ms), reveal content ──
  useEffect(() => {
    if (!isVisible) {
      const timeout = setTimeout(() => {
        setReady(true)
      }, 600)
      return () => clearTimeout(timeout)
    }
  }, [isVisible])

  // ── Cycle status messages while loader is visible ──
  useEffect(() => {
    if (!isVisible) return
    const statusInterval = setInterval(() => {
      setStatusIndex((prev) => Math.min(prev + 1, STATUS_MESSAGES.length - 1))
    }, 700)
    return () => clearInterval(statusInterval)
  }, [isVisible])

  return (
    <>
      {/* Content wrapper – fades in after loader exits */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>

      {/* Loader overlay – exits with scale-down + fade */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="intro-loader"
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-2xl"
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            {/* Subtle grid background */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />

            {/* Floating particles */}
            {Array.from({ length: PARTICLE_COUNT }).map((_, i) => (
              <Particle key={i} index={i} />
            ))}

            {/* Center content */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Animated diamond frame */}
              <div className="relative flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="flex items-center justify-center"
                >
                  <div className="h-20 w-20 rotate-45 rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_0_60px_rgba(59,130,246,0.08)]" />
                </motion.div>
                <motion.div
                  className="absolute"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <div className="h-28 w-28 rotate-45 rounded-2xl border border-white/[0.04]" />
                </motion.div>

                {/* Center dot */}
                <motion.div
                  className="absolute h-1.5 w-1.5 rounded-full bg-[#3b82f6]"
                  animate={{ scale: [1, 1.6, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>

              {/* Progress bar – width driven by progress state */}
              <div className="mt-10 w-44">
                <div className="h-[1.5px] w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-white/40 via-[#3b82f6] to-white/80"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="mt-1.5 text-right text-[10px] font-mono tracking-widest text-white/30">
                  {Math.round(progress)}
                  <span className="text-white/20">%</span>
                </p>
              </div>

              {/* Branding */}
              <div className="mt-8 text-center">
                <h1 className="text-xl font-black tracking-[0.22em] text-white/90 sm:text-2xl">
                  Manuja Ravishka
                </h1>
                <p className="mt-1.5 text-[10px] tracking-[0.35em] text-white/30 sm:text-xs">
                  CREATIVE PORTFOLIO
                </p>
              </div>

              {/* Status message */}
              <div className="mt-8 h-4">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={statusIndex}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="text-[10px] font-mono tracking-widest text-white/25 sm:text-xs"
                  >
                    {STATUS_MESSAGES[statusIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Thin decorative lines */}
              <div className="absolute -bottom-32 left-1/2 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="absolute -bottom-36 left-1/2 h-px w-20 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
