// app/skills/page.tsx
"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Figma",           level: 95 },
  { name: "UI/UX Design",    level: 90 },
  { name: "React / Next.js", level: 85 },
  { name: "Tailwind CSS",    level: 92 },
  { name: "Webflow",         level: 80 },
  { name: "JavaScript",      level: 87 },
  { name: "TypeScript",      level: 82 },
  { name: "Next.js",         level: 92 },
  { name: "Express",         level: 88 },
  { name: "PHP",             level: 82 },
];

const Logo = ({ name }: { name: string }) => {
  switch (name) {
    case "Figma":         return <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-400 via-red-500 to-purple-600 rounded-md" />;
    case "UI/UX Design":  return <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-tr from-pink-500 to-violet-600 rounded-xl flex items-center justify-center text-white font-black text-base sm:text-lg">UX</div>;
    case "React / Next.js":
    case "Next.js":       return <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl font-light">N</div>;
    case "Tailwind CSS":  return <div className="w-8 h-8 sm:w-10 sm:h-10 bg-teal-500 rounded-xl flex items-center justify-center text-white font-bold text-lg sm:text-xl">TW</div>;
    case "Webflow":       return <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl sm:text-2xl">W</div>;
    case "JavaScript":    return <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-400 rounded-xl flex items-center justify-center text-black font-bold text-lg sm:text-xl">JS</div>;
    case "TypeScript":    return <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-lg sm:text-xl">TS</div>;
    case "Express":       return <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-xl flex items-center justify-center text-white font-mono text-base sm:text-lg">EX</div>;
    case "PHP":           return <div className="w-8 h-8 sm:w-10 sm:h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-lg sm:text-xl">PHP</div>;
    default:              return <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-400 rounded-xl" />;
  }
};

export default function Skills() {
  return (
    <section className="min-h-screen py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto">

        {/* Title Only */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Skills
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mt-4 sm:mt-6 px-4">
            Tools & technologies I use every day
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group"
            >
              <div className="flex items-center justify-between mb-3 sm:mb-5">
                <div className="flex items-center gap-3 sm:gap-6">
                  <div className="p-2 sm:p-3 bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl ring-2 sm:ring-4 ring-blue-50 group-hover:ring-purple-200 group-hover:scale-110 transition-all duration-300">
                    <Logo name={skill.name} />
                  </div>
                  <span className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800">
                    {skill.name}
                  </span>
                </div>
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="h-5 sm:h-6 lg:h-7 bg-gray-200/70 rounded-full overflow-hidden shadow-inner">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, delay: 0.4 + i * 0.1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full relative overflow-hidden shadow-lg"
                >
                  <div className="absolute inset-0 bg-white/25 animate-pulse" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}