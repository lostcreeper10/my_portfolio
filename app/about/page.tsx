// app/about/page.tsx
"use client";

import { motion } from "framer-motion";
import { Download, FileText, Eye } from "lucide-react";

export default function About() {
  return (
    <section className="min-h-screen py-24 px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-5xl mx-auto">

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
            About Me
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto"
          >
            I’m a <span className="font-semibold text-blue-600">Bachelor of Science in Information Technology</span> student at 
            <span className="font-semibold"> Cordova Public College</span>, aspiring to become a software developer 
            with a passion for building practical and user-centered solutions.
          </motion.p>
        </motion.div>

        {/* Resume Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex flex-col items-center gap-8"
        >
          <p className="text-lg text-gray-600">Want to know more? Here’s my resume</p>

          <div className="flex flex-col sm:flex-row gap-6">

            {/* View Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-white text-blue-600 border-2 border-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-lg hover:bg-blue-50 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Eye size={26} />
              View Resume
            </a>

            {/* Download Resume Button */}
            <a
              href="/resume.pdf"
              download="Jameboy_Escartin_Resume.pdf"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-purple-500/40 transform hover:scale-105 transition-all duration-300"
            >
              <Download size={26} className="group-hover:translate-y-1 transition" />
              Download Resume
            </a>
          </div>

          <p className="text-sm text-gray-500">
            Updated November 2025 • PDF
          </p>
        </motion.div>

      </div>
    </section>
  );
}