"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Sales Report System",
    desc: "Daily Sales Report Tracking",
    img: "/sales.webp",
    link: "https://github.com/lostcreeper10/sales-report",
  },
  {
    title: "Creeper",
    desc: "E-clothing",
    img: "/creeper.png",
    link: "https://github.com/lostcreeper10/creeper-fashion-capstone",
  },
  {
    title: "CareSync",
    desc: "Remote care-button system for elderly communication",
    img: "/caresyncs.jpg",
    link: "https://youtu.be/i0rPkd9anr8",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-center mb-12 sm:mb-16 lg:mb-20 text-gray-800"
        >
          My Works
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-8 sm:mt-12 lg:mt-16">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -12 }}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={project.img || `/placeholder.svg?height=600&width=800`}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>

              <div className="p-5 sm:p-6 lg:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{project.desc}</p>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base text-blue-600 font-semibold hover:text-blue-800 transition inline-block"
                >
                  View Project →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}