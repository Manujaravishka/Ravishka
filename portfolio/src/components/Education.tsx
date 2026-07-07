"use client";

import { JSX } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { IoSchoolOutline } from 'react-icons/io5';
import { FiAward } from 'react-icons/fi';

interface EducationItem {
  id: number;
  institute: string;
  degree: string;
  duration: string;
  description: string;
  logoUrl?: string;
  fallbackIcon: React.ComponentType<{ className?: string }>;
  grade?: string;
}

const educationData: EducationItem[] = [
  {
    id: 1,
    institute: "Institute of Software Engineering (IJSE)",
    degree: "Higher National Diploma (HND) in Software Engineering(GDSE)",
    duration: "2024 - PRESENT",
    description: "Focusing on enterprise application development, advanced Java concepts, full-stack web architecture, and database management systems.",
    logoUrl: "/pictures/ijse-logo.png",
    fallbackIcon: HiOutlineAcademicCap,
    grade: "Current"
  },
  {
    id: 2,
    institute: " Information Technology Campus",
    degree: "Diploma in Information Technology",
    duration: "2024 - 2026",
    description: "Learned basic Information Technology concepts, computer applications, MS Office tools, and introductory networking skills through an IT Certificate Diploma.",
    logoUrl: "/pictures/itc-logo.png",
    fallbackIcon: IoSchoolOutline,
    grade: "Pass"
  },
  {
    id: 3,
    institute: "British Way English Academy – Nugegoda",
    degree: "Diploma in English Language",
    duration: "2024 - 2024",
    description: "Completed Diploma in English Language at British Way English Academy, Nugegoda, developing communication skills, grammar proficiency, and spoken English fluency.",
    logoUrl: "/pictures/bwea-logo.png", 
    fallbackIcon: FiAward,
    grade: "Pass"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const cardVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
};

export default function EducationSection(): JSX.Element {
  return (
    <section id="education" className="relative w-full bg-black px-6 py-28 text-gray-100 sm:px-10 lg:px-16 overflow-hidden">
      
      {/* WATERMARK - subtle, true watermark style */}
  <div className="absolute inset-0 pointer-events-none z-0 opacity-5 mix-blend-screen">
  <img
    src="https://i.pinimg.com/736x/47/95/b5/4795b55039c8ff8e6f30e0b06534137e.jpg"
    alt=""
    className="h-full w-full object-cover blur-[1px]"
    loading="lazy"
  />
</div>
      {/* Background Neon Glow Effect */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[300px] bg-gray-500/[0.015] blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-xs text-white backdrop-blur-md mb-4 font-mono tracking-wider">
            <span className="flex h-1.5 w-1.5 rounded-full bg-gray-500 animate-pulse" />
            ACADEMIC PATHWAY
          </div>
          <h2 className="text-3xl font-black tracking-tight uppercase sm:text-4xl lg:text-5xl bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent font-sans">
            Education & <br /> Qualifications
          </h2>
        </div>

        {/* Timeline Dynamic List */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="relative border-l border-zinc-800/80 ml-4 md:ml-6 space-y-10"
        >
          {educationData.map((edu) => {
            const IconComponent = edu.fallbackIcon;
            return (
              <motion.div
                key={edu.id}
                variants={cardVariants}
                className="relative pl-8 md:pl-10 group"
              >
                {/* Timeline Bullet - Left Side Logo Container */}
                <div className="absolute -left-[32px] top-1 flex h-16 w-16 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-950 text-zinc-400 transition-all duration-300 group-hover:border-gray-500/60 group-hover:shadow-[0_0_25px_rgba(107,114,128,0.30)] overflow-hidden">
                  {edu.logoUrl ? (
                    <img 
                      src={edu.logoUrl} 
                      alt={edu.institute} 
                      className="h-full w-full object-contain p-1 rounded-lg opacity-95 group-hover:opacity-100 transition-opacity duration-200"
                    />
                  ) : (
                    <IconComponent className="h-5 w-5" />
                  )}
                </div>

                {/* Main Card */}
                <div className="rounded-[1.25rem] border border-zinc-900/80 bg-[#0d0d0e]/40 backdrop-blur-md p-5 md:p-6 transition-all duration-300 hover:border-zinc-800 hover:bg-[#121213]/60">
                  
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-gray-400 bg-gray-950/20 border border-gray-900/30 px-2.5 py-0.5 rounded-full uppercase">
                      {edu.duration}
                    </span>
                    {edu.grade && (
                      <span className="text-[9px] font-mono tracking-widest text-zinc-500 group-hover:text-zinc-400 transition-colors uppercase">
                        // {edu.grade}
                      </span>
                    )}
                  </div>

                  {/* Degree and Institute Info */}
                  <h3 className="text-lg font-bold tracking-tight text-white font-sans group-hover:text-gray-400 transition-colors duration-300">
                    {edu.degree}
                  </h3>
                  <p className="text-xs text-zinc-400 font-sans mt-0.5 font-medium">
                    {edu.institute}
                  </p>

                  {/* Brief Description */}
                  <p className="mt-3 text-[13px] text-zinc-500 leading-relaxed font-sans font-light group-hover:text-zinc-400 transition-colors duration-300">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}