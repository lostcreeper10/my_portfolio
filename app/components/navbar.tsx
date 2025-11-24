"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", path: "/home" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/project" },
  { name: "Scheduling", path: "/round-robin" },
  { name: "Contact", path: "/contacts" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg shadow-md"
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">
          Portfolio
        </Link>

        <div className="flex gap-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-gray-700 hover:text-blue-600 transition relative`}
            >
              {item.name}
              {pathname === item.path && (
                <motion.div
                  layoutId="navbar-active"
                  className="absolute bottom-[-8px] left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}