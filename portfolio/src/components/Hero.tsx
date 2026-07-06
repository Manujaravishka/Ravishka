"use client"

import { motion, Variants } from 'framer-motion'
import { JSX } from 'react'

const name = 'MANUJA RAVISHKA'

const description =
  'UI/UX Designer passionate about creating modern, user-friendly, and visually engaging digital experiences with clean and creative designs.'

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.2,
    },
  },
}

const letter: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
}

export default function Hero(): JSX.Element {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0a0a] px-6 py-24 text-white"
    >
      {/* Subtle Radial Gradient Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,#1a1a1a,transparent_70%)]" />

      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Background Text */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <span className="select-none text-[18vw] font-black uppercase tracking-[0.25em] text-white/[0.03] blur-sm">
          RASH
        </span>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center text-center">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 rounded-full border border-white/10 bg-white/5 px-6 py-2 text-xs uppercase tracking-[0.35em] text-white/80"
        >
          AVAILABLE FOR FREELANCE
        </motion.span>

        {/* Animated Name */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="w-full overflow-hidden"
        >
          <motion.h1
            className="flex flex-wrap justify-center gap-y-2 text-center font-black uppercase leading-[0.9] tracking-tight text-[clamp(3rem,9vw,7rem)] lg:flex-nowrap"
          >
            {name.split(' ').map((word, wordIndex) => (
              <span
                key={wordIndex}
                className="mr-4 inline-flex whitespace-nowrap last:mr-0 md:mr-6"
              >
                {word.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    variants={letter}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-10 max-w-3xl text-base leading-8 text-white/70 sm:text-lg"
        >
          {description}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row"
        >
          <a
            href="#work"
            className="rounded-full bg-white px-10 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-black transition hover:-translate-y-1"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 bg-white/5 px-10 py-3 text-sm font-semibold uppercase tracking-[0.15em] transition hover:-translate-y-1 hover:bg-white/10"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  )
}