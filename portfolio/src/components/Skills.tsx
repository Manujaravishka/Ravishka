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
  SiLinux,
  SiCanva,
  SiIntellijidea,
  SiPostman,
  SiApachenetbeanside,
} from "react-icons/si";

import { FaWindows, FaMicrosoft } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion";

const skills = [
  { icon: SiHtml5, name: "HTML" },
  { icon: SiCss, name: "CSS" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiReact, name: "React" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiAngular, name: "Angular" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiMysql, name: "MySQL" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiLinux, name: "Linux" },
  { icon: FaWindows, name: "Windows" },
  { icon: SiCanva, name: "Canva" },
  { icon: VscVscode, name: "VS Code" },
  { icon: SiIntellijidea, name: "IntelliJ" },
  { icon: SiGithub, name: "GitHub" },
  { icon: SiGit, name: "Git" },
  { icon: SiPostman, name: "Postman" },
  { icon: SiApachenetbeanside, name: "NetBeans" },
  { icon: SiBootstrap, name: "Bootstrap" },
  { icon: SiJson, name: "JSON" },
  { icon: SiWordpress, name: "WordPress" },
  { icon: FaMicrosoft, name: "Office" },
];

// අයිකනවල පිහිටීම
const positions = [
  { left: "10%", top: "10%" }, { left: "20%", top: "20%" }, { left: "30%", top: "10%" },
  { left: "40%", top: "20%" }, { left: "50%", top: "10%" }, { left: "60%", top: "20%" },
  { left: "70%", top: "10%" }, { left: "80%", top: "20%" }, { left: "15%", top: "40%" },
  { left: "25%", top: "50%" }, { left: "35%", top: "40%" }, { left: "45%", top: "50%" },
  { left: "55%", top: "40%" }, { left: "65%", top: "50%" }, { left: "75%", top: "40%" },
  { left: "85%", top: "50%" }, { left: "20%", top: "70%" }, { left: "35%", top: "80%" },
  { left: "50%", top: "70%" }, { left: "65%", top: "80%" }, { left: "80%", top: "70%" },
  { left: "10%", top: "80%" }, { left: "90%", top: "80%" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative w-full bg-black py-20 overflow-hidden">
      <div className="container mx-auto px-8 flex flex-col items-center justify-center text-center">

        {/* මැදට කළ පෙළ කොටස */}
        <div className="max-w-2xl mb-16">
          <p className="uppercase tracking-[4px] text-gray-500 mb-5 font-mono">
            Technical Arsenal
          </p>

          <h2 className="text-5xl md:text-7xl font-bold leading-none mb-8 text-white">
            Skills & Expertise
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            A curated stack of technologies I use to craft digital
            experiences. From full-stack development to design and workflow
            automation.
          </p>
        </div>

        {/* අයිකන කොටස */}
        <div className="relative h-[450px] w-full max-w-6xl">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                className="absolute group -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={{
                  left: positions[index]?.left || "50%",
                  top: positions[index]?.top || "50%",
                }}
                animate={{ y: [0, -10, 0] }} // පාවෙන සජීවිකරණය
                transition={{ duration: 3 + (index % 3), repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.2 }} // මූසිකය යැවූ විට විශාල වීම
              >
                {/* අයිකන පෙට්ටිය */}
                <div className="w-16 h-16 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/30 transition-all duration-300">
                  <Icon
                    size={30}
                    className="text-white transition-colors duration-300 group-hover:text-blue-400" // අයිකනය ද නිල් පැහැයට හැරේ
                  />
                </div>

                {/* අයිකනයේ නම (hover කළ විට පෙන්වයි) */}
                <span
                  className="
                    absolute
                    left-1/2
                    -translate-x-1/2
                    mt-3
                    text-[11px]
                    font-medium
                    opacity-0
                    group-hover:opacity-100
                    text-blue-500      /* මෙය නිල් පැහැය ලබා දෙයි */
                    bg-blue-950/50     /* පසුබිමට සැහැල්ලු නිල් පැහැයක් */
                    px-2
                    py-0.5
                    rounded
                    whitespace-nowrap
                    transition-all
                    duration-300
                    pointer-events-none
                  "
                >
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}