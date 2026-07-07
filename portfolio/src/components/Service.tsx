"use client";

import { motion } from 'framer-motion';

const services = [
  {
    title: 'UI/UX Design',
    description:
      'User-centered interface design, wireframing, prototyping, and usability testing to create intuitive digital experiences.',
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),
  },
  {
    title: 'Frontend Development',
    description:
      'Responsive, performant websites using React, Next.js, Tailwind CSS, and modern frontend technologies.',
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: 'Backend Developer',
    description:
      'Robust server-side logic, RESTful APIs, database management, and authentication systems for scalable web applications.',
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5M5.25 9.75h13.5M3.75 3.75h16.5a1.5 1.5 0 011.5 1.5v13.5a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5V5.25a1.5 1.5 0 011.5-1.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75h.008v.008H9V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM12 6.75h.008v.008H12V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
];

export default function Service() {
  return (
    <section
      id="services"
      className="relative w-full bg-black px-6 py-24 text-white sm:px-10 lg:px-16 overflow-hidden"
    >
      {/* Modern background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05),transparent_60%)] pointer-events-none" />

      {/* Watermark Image - MORE VISIBLE (increased opacity and stronger blend) */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.15] mix-blend-overlay">
        <img
          src="https://i.pinimg.com/736x/47/95/b5/4795b55039c8ff8e6f30e0b06534137e.jpg"
          alt="watermark design element"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* HEADER – refined spacing and fade-up */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-20 text-center"
        >
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.4em] text-white/50">
            What I Do
          </span>

          <h2 className="mb-6 text-4xl font-black uppercase tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Services
          </h2>

          <p className="mx-auto max-w-2xl text-base text-white/70 sm:text-lg">
            I provide UI/UX design, frontend development, and modern web experiences tailored to your needs.
          </p>
        </motion.div>

        {/* GRID – modern staggered animation + floating hover */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
              }}
              whileHover={{ y: -12, transition: { duration: 0.2 } }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-500 hover:border-white/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-white/5"
            >
              {/* Modern animated gradient on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* Big watermark number – blurred and modern */}
              <div className="pointer-events-none absolute -bottom-4 -right-2 select-none text-8xl font-black text-white/5 blur-[4px] transition duration-500 group-hover:scale-110 group-hover:text-white/10 group-hover:blur-[2px]">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* ICON with modern micro-interaction */}
              <div className="mb-5 inline-flex rounded-xl bg-gradient-to-br from-white/20 to-white/5 p-3 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:from-white/30 group-hover:to-white/10">
                {service.icon}
              </div>

              {/* TITLE */}
              <h3 className="mb-3 text-xl font-bold tracking-tight text-white">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm leading-relaxed text-white/60 transition duration-300 group-hover:text-white/80">
                {service.description}
              </p>

              {/* Modern underline that expands on hover */}
              <div className="mt-4 h-px w-8 bg-white/20 transition-all duration-300 group-hover:w-full group-hover:bg-white/40" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}