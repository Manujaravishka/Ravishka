"use client";

import { JSX, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  tags: string[];
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'AI/ML Engineer – Stage 1 (SLIIT UNI) ',
    issuer: 'SLIIT | Sri Lanka Institute of Information Technology',
    date: '2025 - PRESENT',
    image: '/certificates/AI_ML_Engineer_1.png',
    tags: ['Machine Learning', 'Data Analysis', 'AI Integration'],
  },
  {
    id: 2,
    title: 'AI/ML Engineer – Stage 2 (SLIIT UNI)',
    issuer: 'SLIIT | Sri Lanka Institute of Information Technology',
    date: '2025 - PRESENT',
    image: '/certificates/AI_ML_Engineer_2.png',
    tags: ['Machine Learning', 'Data Analysis', 'AI Integration'],
  },
  {
    id: 3,
    title: ' high-level, and object-oriented programming language ',
    issuer: 'Sololearn',
    date: '2025',
    image: '/certificates/sololearnJAVA.png',
    tags: ['Java', 'Programming Fundamentals', 'Software Development'],
  },
  {
    id: 4,
    title: 'Standard markup language',
    issuer: 'Sololearn',
    date: '2023',
    image: '/certificates/sololearnHTML.png',
    tags: ['HTML', 'Web Development', 'Frontend Basics'],
  },
  {
    id: 5,
    title: 'Cascading Style Sheets',
    issuer: 'Sololearn',
    date: '2023',
    image: '/certificates/sololearnCSS.png',
    tags: ['CSS', 'Web Development', 'Frontend Basics'],
  }
];

export default function CertificatesSection(): JSX.Element {
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="certificates" className="relative w-full bg-black px-6 py-24 text-gray-100 sm:px-10 lg:px-16 overflow-hidden">
      {/* Background glow - Emerald වෙනුවට Zinc/White glow එකක් දැම්මා (ගොඩක් Dark Clean පෙනුමක් එන්න) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-zinc-500/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-xs text-white backdrop-blur-md mb-3 font-mono tracking-wider">
              {/* Pulse Dot එක Gray කළා */}
              <span className="flex h-1.5 w-1.5 rounded-full bg-zinc-400 animate-pulse" />
              CREDENTIALS
            </div>
            <h2 className="text-3xl font-black tracking-tight uppercase sm:text-4xl lg:text-5xl bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent font-sans">
              Verified <br /> Certifications
            </h2>
          </div>
          <p className="max-w-xs text-zinc-500 leading-relaxed text-xs sm:text-sm font-sans">
            Academic qualifications and professional credentials validating technical expertise.
          </p>
        </div>

        {/* Horizontal Scroll Area */}
        <div className="relative group">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-black/60 backdrop-blur border border-zinc-800 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/80"
            aria-label="Scroll left"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-black/60 backdrop-blur border border-zinc-800 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/80"
            aria-label="Scroll right"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-5 pb-6 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {certificates.map((cert) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: cert.id * 0.05 }}
                whileHover={{ y: -5 }}
                className="relative flex-shrink-0 w-[280px] sm:w-[320px] snap-start flex flex-col justify-between overflow-hidden rounded-[1.25rem] border border-zinc-800/60 bg-[#111112]/40 backdrop-blur-md p-4 transition-all duration-300 hover:border-zinc-700 hover:bg-[#141415]/60 shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    {/* Date Badge එක Emerald වලින් Zinc/White ශෛලියට හැරෙව්වා */}
                    <span className="inline-block rounded-full bg-zinc-900 border border-zinc-800 px-2 py-0.5 text-[8px] font-mono font-bold tracking-wider text-zinc-300 uppercase">
                      {cert.date}
                    </span>
                    {/* Shield Icon එකේ text-emerald-400 වෙනුවට text-zinc-400 දැම්මා */}
                    <div className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-sm font-bold tracking-tight text-white font-sans group-hover:text-zinc-200 transition-colors line-clamp-2 min-h-[40px]">
                    {cert.title}
                  </h3>
                  <p className="text-[11px] text-zinc-500 font-sans mt-0.5 font-medium">
                    {cert.issuer}
                  </p>

                  <div
                    onClick={() => setActiveCert(cert)}
                    className="relative mt-3 aspect-[21/9] w-full overflow-hidden rounded-lg border border-zinc-900 bg-zinc-950/40 cursor-pointer"
                  >
                    <motion.img
                      src={cert.image}
                      alt={cert.title}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.25 }}
                      className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1">
                    {cert.tags.map((tag) => (
                      <span key={tag} className="rounded border border-zinc-900 bg-zinc-900/40 px-1.5 py-0.5 text-[8px] font-mono uppercase text-zinc-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 border-t border-zinc-900/60 pt-3 flex items-center justify-between">
                  <span className="text-[8px] font-mono uppercase tracking-widest text-zinc-600">
                    CREDENTIAL
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveCert(cert)}
                    className="group/btn inline-flex items-center gap-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors duration-200"
                  >
                    EXPAND
                    <svg className="h-3 w-3 transition-transform duration-200 group-hover/btn:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll hint for mobile */}
        <div className="mt-4 text-center text-[9px] font-mono uppercase tracking-wider text-zinc-600 md:hidden">
          ← Scroll horizontally →
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCert(null)}
              className="absolute inset-0 bg-black/75 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="relative z-10 w-full max-w-2xl overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 p-5 shadow-2xl shadow-black"
            >
              <div className="flex items-start justify-between border-b border-zinc-900 pb-3 mb-4">
                <div>
                  <span className="text-[9px] font-mono uppercase text-zinc-500 font-semibold">
                    {activeCert.issuer}
                  </span>
                  <h4 className="text-base font-bold tracking-tight text-white font-sans mt-0.5">
                    {activeCert.title}
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveCert(null)}
                  className="rounded-full p-1 text-zinc-500 hover:bg-zinc-900 hover:text-white transition-all border border-transparent hover:border-zinc-800"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-zinc-900 bg-zinc-900/30 flex items-center justify-center">
                <img src={activeCert.image} alt={activeCert.title} className="h-full w-full object-contain" />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}