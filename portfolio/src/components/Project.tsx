"use client";

import { JSX } from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  codeLink?: string;
  stats?: string[];
  icon: JSX.Element;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Ceylon Traditional Medicine Center',
    subtitle: 'Digital Ayurveda & Hela Wedakama Platform',
    description:
      'Developed a full-stack healthcare platform to modernize Sri Lanka’s traditional medicine ecosystem by connecting patients with Ayurveda and Hela Wedakama practitioners. The system includes appointment booking, wellness package management, AI-powered symptom suggestions, accommodation handling, and an admin dashboard for managing doctors, users, and activities.',
    tags: [ 'Java',
    'Spring Boot',
    'Spring Security',
    'MySQL',
    'JavaScript',
    'Healthcare',],
    image: 'project/project_1.jpg',
    stats: [ 'Java',
    'Spring Boot',
    'Spring Security',
    'MySQL',
    'JavaScript',
    'Healthcare',],
    link: 'https://github.com/Manujaravishka/Ceylon-Traditional-Medicine-Center',
    codeLink: 'https://github.com/Manujaravishka/Ceylon-Traditional-Medicine-Center',
    icon: (
      <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'DailyForge',
    subtitle: 'Forge Your Future, One Strike at a Time',
    description:
      'Maison Florelle is a full-stack luxury floral e-commerce platform designed to deliver a premium online shopping experience with modern UI/UX, scalable architecture, and production-ready backend services. The system allows customers to browse, customize, and purchase floral products while providing a powerful admin dashboard for complete business management..',
    tags: ['React Native', 'Firebase', 'TypeScript', 'Expo'],
    image: 'project/project_2.png',
    link: '#',
    codeLink: '#',
    icon: (
      <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'PropertyPulse',
    subtitle: 'Backend API & Frontend Platform',
    description:
      'A robust RESTful API and full real estate platform featuring AI‑powered analytics, Stripe payments, and Cloudinary uploads.',
    tags: ['Node.js', 'Express', 'MongoDB', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    link: '#',
    codeLink: '#',
    icon: (
      <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'FutureProject Alpha',
    subtitle: 'Decentralized Data Mesh',
    description:
      'An exploratory project testing peer-to-peer data replication protocols with native encryption frameworks.',
    tags: ['Rust', 'Wasm', 'Web3', 'Libp2p'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    link: '#',
    codeLink: '#',
    icon: (
      <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'FutureProject Beta',
    subtitle: 'Automated Infrastructure Pipeline',
    description:
      'Highly available multi-region architecture configurations managed natively through cloud-agnostic blueprints.',
    tags: ['AWS', 'Terraform', 'Docker', 'GitHub Actions'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    link: '#',
    codeLink: '#',
    icon: (
      <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
];

export default function Projects(): JSX.Element {
  return (
    <section id="projects" className="relative w-full bg-[#0a0a0a] px-6 py-32 text-gray-100 sm:px-10 lg:px-16 overflow-hidden">
      {/* Premium pure white subtle glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-800 bg-gray-900/50 px-3 py-1 text-xs text-white backdrop-blur-md">
              <span className="flex h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              PORTFOLIO
            </div>
            <h2 className="mt-4 text-4xl font-black tracking-tight uppercase sm:text-5xl lg:text-6xl bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
              Featured <br /> Projects
            </h2>
          </div>
          <p className="max-w-md text-gray-400 leading-relaxed text-sm sm:text-base">
            Data science solutions, interactive mobile apps, and scalable full-stack ecosystems engineered for performance.
          </p>
        </div>

        {/* Bento Grid Concept Layout */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/30 backdrop-blur-md transition-all duration-300 hover:border-gray-600 hover:bg-gray-900/50 ${
                idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div>
                {/* Image Wrap */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-gray-800/50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  {/* සටහන: පින්තූරයට උඩින් වැටෙන අඳුරු පැහැය (shadow overlay) ඉවත් කිරීමට පහත div එක අක්‍රිය කර ඇත */}
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" /> */}
                  
                  {/* Floating Icon */}
                  <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-gray-950/80 border border-gray-800 backdrop-blur-md">
                    {project.icon}
                  </div>
                </div>

                {/* Info Area */}
                <div className="p-6">
                  <span className="text-xs font-mono tracking-wider text-gray-500 block mb-1 uppercase">
                    {project.subtitle}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-gray-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights/Stats - Combined with index to guarantee uniqueness */}
                  {project.stats && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stats.map((stat, sIdx) => (
                        <span key={`${stat}-${sIdx}`} className="text-xs font-medium text-white bg-white/5 border border-white/10 rounded-md px-2.5 py-1">
                          {stat}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Footer Area */}
              <div className="p-6 pt-0 mt-auto">
                {/* Tech Tags - Combined with index to guarantee uniqueness */}
                <div className="mb-6 flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tIdx) => (
                    <span key={`${tag}-${tIdx}`} className="rounded border border-gray-800 bg-gray-900/40 px-2 py-0.5 text-[10px] font-mono uppercase text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between border-t border-gray-800/60 pt-4">
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                      SOURCE_CODE
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full bg-white hover:bg-gray-200 px-4 py-1.5 text-xs font-semibold text-black transition-all duration-300 group/btn"
                    >
                      Live Demo
                      <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 19L19 5M19 5H9M19 5v10" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Action Footer */}
        <div className="mt-20 text-center">
          <a
            href="https://github.com/Manujaravishka"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gray-800 bg-zinc-900/30 px-6 py-3 text-xs font-mono tracking-widest text-gray-400 uppercase transition-all duration-300 hover:border-gray-500 hover:text-white hover:bg-gray-900/60"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            Explore More Archive
          </a>
        </div>
      </div>
    </section>
  );
}