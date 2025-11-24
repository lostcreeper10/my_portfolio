"use client";

import { motion } from "framer-motion";
import AnimatedPhoto from "@/app/components/animated-photo";
import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 leading-tight">
            Hi,
            <br />
            <span className="text-blue-600">I'am Jameboy</span>
            <br />
            <span className="text-4xl md:text-6xl">Web Designer</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-xl text-gray-600"
          >
            I craft beautiful, responsive, and user-centered digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-10"
          >
            <Link
              href="/contacts"
              className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center"
        >
          <AnimatedPhoto />
        </motion.div>
      </div>
    </section>
  );
}