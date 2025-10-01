"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// CTA SECTION
export function CTASection() {
  return (
    <section className="relative py-20 px-6 text-white overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />

      {/* Watermark Logo */}
      <div className="absolute inset-0 -z-0 flex items-center justify-center opacity-10">
        <Image
          src="/logo1.svg"
          alt="Background Logo"
          width={800}
          height={800}
          className="w-[550px] object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-stretch justify-between gap-10 relative z-10">
        {/* Left Content */}
        <div className="max-w-3xl flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="anton text-3xl md:text-4xl lg:text-5xl tracking-wide font-bold mb-6 leading-snug"
          >
            How many potential clients are you losing by not having a system?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl"
          >
            Don’t let another day go by feeling overwhelmed and underpaid.  
            Let’s chat about how we can simplify your business and increase your income.
          </motion.p>
        </div>

        {/* Right CTA Button - Centered */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center justify-center md:justify-end w-full md:w-auto"
        >
          <Link
            href="https://forms.gle/nqDF4TBXLnRYuuFRA"
            className="inline-block anton tracking-wider px-10 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold rounded-md shadow-lg hover:shadow-pink-500/40 hover:scale-105 transition-all duration-300"
          >
            Apply Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
