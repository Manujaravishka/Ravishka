"use client";

import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiAngular,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiJson,
  SiPostgresql,
  SiWordpress,
  SiMongodb,
  SiMysql,
  SiPython,
  SiLinux,
  SiCanva,
  SiIntellijidea,
  SiPostman,
  SiApachenetbeanside,
} from "react-icons/si";

import {
  FaJava,
  FaWindows,
  FaMicrosoft,
} from "react-icons/fa";

import { VscVscode } from "react-icons/vsc";

import { motion } from "framer-motion";

const skills = [
  { icon: SiHtml5, size: 50, name: "HTML" },
  { icon: SiCss, size: 50, name: "CSS" },
  { icon: SiJavascript, size: 55, name: "JavaScript" },
  { icon: SiReact, size: 65, name: "React" },
  { icon: SiTailwindcss, size: 55, name: "Tailwind CSS" },
  { icon: SiTypescript, size: 50, name: "TypeScript" },
  { icon: SiAngular, size: 60, name: "Angular" },
  { icon: SiMongodb, size: 55, name: "MongoDB" },
  { icon: SiMysql, size: 50, name: "MySQL" },
  { icon: SiPostgresql, size: 50, name: "PostgreSQL" },
  { icon: FaJava, size: 55, name: "Java" },
  { icon: SiPython, size: 55, name: "Python" },
  { icon: SiLinux, size: 55, name: "Linux" },
  { icon: FaWindows, size: 55, name: "Windows" },
  { icon: SiCanva, size: 50, name: "Canva" },
  { icon: VscVscode, size: 55, name: "VS Code" },
  { icon: SiIntellijidea, size: 55, name: "IntelliJ" },
  { icon: SiGithub, size: 55, name: "GitHub" },
  { icon: SiGit, size: 50, name: "Git" },
  { icon: SiPostman, size: 50, name: "Postman" },
  { icon: SiApachenetbeanside, size: 55, name: "NetBeans" },
  { icon: SiBootstrap, size: 50, name: "Bootstrap" },
  { icon: SiJson, size: 40, name: "JSON" },
  { icon: SiWordpress, size: 55, name: "WordPress" },
  { icon: FaMicrosoft, size: 55, name: "Office Package" },
];

export default function SkillsSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black px-10 py-24 text-white md:px-24">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(255,255,255,0.06),transparent_40%)]" />

      <div className="relative z-10 grid items-center gap-16 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-sm uppercase tracking-[4px] text-gray-500">
            My Expertise
          </p>

          <h2 className="mb-8 text-5xl font-extrabold leading-tight text-white md:text-6xl">
            Skills & Experience
          </h2>
          <br />
          <br />

          <div className="space-y-5 text-lg leading-8 text-gray-400">
            <p>
              I specialize in modern frontend and full-stack web development
              using powerful frameworks and technologies.
            </p>

            <p>
              I build responsive, interactive, and scalable applications using
              React, TypeScript, Tailwind CSS, Angular, databases, and backend
              technologies.
            </p>

            <p>
              I also work with development tools, APIs, version control systems,
              UI design platforms, and CMS platforms like WordPress.
            </p>

            <p>
              Passionate about creating beautiful digital experiences with clean
              code and modern UI/UX practices.
            </p>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="relative flex h-[550px] items-center justify-center">

          {skills.map((skill, index) => {
            const randomX = Math.random() * 500 - 250;
            const randomY = Math.random() * 500 - 250;

            const Icon = skill.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                animate={{
                  y: [0, -18, 0],
                  x: [0, 10, 0, -10, 0],
                }}
                transition={{
                  duration: 4 + index * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.2,
                }}
                className="group absolute cursor-pointer text-white transition-all duration-300 hover:text-gray-300"
                style={{
                  left: `calc(50% + ${randomX}px)`,
                  top: `calc(50% + ${randomY}px)`,
                  filter: "drop-shadow(0 0 12px rgba(255,255,255,0.25))",
                }}
              >
                <div className="flex flex-col items-center gap-2">
                  <Icon size={skill.size} />

                  <span className="text-xs font-medium tracking-wide opacity-0 transition duration-300 group-hover:opacity-100">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}