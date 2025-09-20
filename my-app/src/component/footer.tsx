"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  const navItems = [
    { label: "About Me", href: "#about" },
    { label: "Reviews", href: "#reviews" },
    { label: "What’s Included", href: "#include" },
    { label: "Program Details", href: "#program" },
  ];

  return (
    <footer className="relative bg-[#141414] text-gray-300 pt-16 pb-10 px-6 overflow-hidden">
      {/* Accent gradient line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10"
      >
        {/* Logo & About */}
        <div className="flex flex-col md:flex-row items-start gap-5 max-w-lg">
          <Image
            src="/logo1.svg"
            alt="Logo"
            width={140}
            height={60}
            className="shrink-0"
          />
          <div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-md">
              Helping creators, coaches, and agencies build scalable systems
              with funnels, automation, and direct coaching support.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-6 text-sm"
            >
              Contact us:{" "}
              <a
                href="mailto:vivek@10xgrowth.club"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300 underline-offset-4 hover:underline"
              >
                vivek@10xgrowth.club
              </a>
            </motion.div>
          </div>
        </div>

        {/* Simple Nav with Motion Underline */}
        <ul className="flex flex-wrap gap-8 text-sm font-medium relative">
          {navItems.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Link
                href={item.href}
                className="relative group inline-block font-semibold tracking-wide"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
        className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500"
      >
        © {new Date().getFullYear()}{" "}
        <span className="text-gray-300 font-semibold">10X Growth Club</span>. All rights reserved.
      </motion.div>
    </footer>
  );
}
