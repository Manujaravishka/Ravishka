"use client";

import { JSX } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { FaGithub } from 'react-icons/fa';
import { asset } from '@/lib/asset';

// ව්‍යාපෘති දත්ත
const projects = [
  {
    id: 1,
    title: 'Ceylon Traditional Medicine Center',
    subtitle: 'Digital Ayurveda & Hela Wedakama Platform',
    description: 'Developed a full-stack healthcare platform to modernize Sri Lanka’s traditional medicine ecosystem by connecting patients with Ayurveda and Hela Wedakama practitioners.',
    tags: ['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'JavaScript', 'Healthcare'],
    image: '/project/project_1.jpg',
    link: 'https://github.com/Manujaravishka/Ceylon-Traditional-Medicine-Center',
    codeLink: 'https://github.com/Manujaravishka/Ceylon-Traditional-Medicine-Center',
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Maison Florelle',
    subtitle: 'Luxury Floral E-Commerce Platform',
    description: 'Maison Florelle is a production-ready luxury floral marketplace built with React, TypeScript, Node.js, Express, and MongoDB. The platform includes customer authentication, Google OAuth, shopping cart, secure checkout, order tracking, AI-powered bouquet generation, analytics dashboard, product management, review system, and responsive UI with premium animations.',
    tags: [ "React",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "Vite",
    "JWT",
    "Google OAuth",
    "Cloudinary",
    "Vercel"],
    image: '/project/project_3.png',
    link: 'https://github.com/Manujaravishka/Flower-Shop-Backend',
    codeLink: 'https://github.com/Manujaravishka/Flower-Shop-Frontend',
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'NIVORA DESIGNS',
    subtitle: 'Premium Graphic Design Studio Website',
    description:"NIVORA DESIGNS is a premium portfolio website built to establish a strong online presence for a creative design studio. The website highlights professional design services, portfolio projects, pricing packages, and contact options through a clean, minimal, and highly interactive user interface optimized for performance and SEO.",
    tags: ["Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "GitHub Pages",
    "Responsive",
    "SEO",
    "Static Export"],
    image: '/project/project_4.png',
    link: 'https://github.com/Manujaravishka/nivora-designs',
    codeLink: 'https://github.com/Manujaravishka/nivora-designs',
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Cambridge International School',
    subtitle: 'Modern Educational Institution Website',
    description: 'Cambridge International School is a professional educational website built to strengthen the school digital presence. The platform provides information about academic programs, admissions, faculty, campus facilities, student achievements, events, and contact details while delivering a fast, responsive, and accessible experience for parents and prospective students.',
    tags: ["React",
    "JavaScript",
    "Tailwind CSS",
    "Responsive",
    "Framer Motion",
    "Educational",
    "SEO"],
    image: '/project/project_2.png',
    link: 'https://github.com/Manujaravishka/Gittering-Stars',
    codeLink: 'https://github.com/Manujaravishka/Gittering-Stars',
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Ceylon Panda Travel',
    subtitle: 'Tourism & Travel Agency Website',
    description: 'Ceylon Panda Travel is a professional tourism website designed to establish a strong online presence for a Sri Lankan travel agency. The platform showcases tour packages, popular destinations, transportation services, travel experiences, customer testimonials, and inquiry options with a responsive and visually appealing design optimized for performance and SEO.',
    tags: ["HTML5",
    "CSS3",
    "JavaScript",
    "Responsive Design",
    "SEO",
    "Travel",
    "Business Website"],
    image: '/project/project_5.png',
    link: 'https://github.com/Manujaravishka/web-site',
    codeLink: 'https://github.com/Manujaravishka/web-site',
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
];

export default function Projects(): JSX.Element {
  return (
    <section id="projects" className="relative w-full bg-[#050505] px-6 py-24 text-gray-100 sm:px-10 lg:px-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a1a1a,transparent_70%)] opacity-50" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <h2 className="text-sm font-mono tracking-[0.2em] text-blue-500 mb-4 uppercase">Selected Work</h2>
          <p className="text-4xl md:text-6xl font-bold text-white">Featured Projects</p>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl border border-white/[0.05] bg-white/[0.02] p-1 transition-all hover:bg-white/[0.05] ${idx === 0 ? 'md:col-span-2' : ''}`}
            >
              <div className="flex flex-col h-full rounded-[22px] bg-[#0a0a0a] overflow-hidden">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img src={asset(project.image)} alt={project.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
                      {project.icon}
                    </div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{project.subtitle}</span>
                  </div>

                  <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-grow">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.05] text-gray-400">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/[0.05]">
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="View source code on GitHub"><FaGithub size={18} /></a>
                    <Button variant="primary" href={project.link} target="_blank" rel="noopener noreferrer" size="sm">Live Demo</Button>
                  </div>
                </div>
              </div>
            </motion.div>
            
          ))}
          
        </div>
              {/* View All Projects Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 flex justify-center"
        >
          <Button 
            variant="primary" 
            href="https://github.com/Manujaravishka" 
            target="_blank" 
            rel="noopener noreferrer"
            size="md"
          >
            View All Projects on GitHub
          </Button>
        </motion.div>
        
      </div>
    </section>
  );
}