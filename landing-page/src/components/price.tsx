"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { BorderBeam } from "./ui/border-beam"
import Link from "next/link"
import { MoveRight } from "lucide-react"

export default function PriceSection() {
  return (
    <section className="relative w-full  flex flex-col items-center justify-center px-4 border-t-[0.1px] border-green-100 py-10">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[#141414]" />
      <div className="absolute inset-0 -z-0 flex items-center justify-center opacity-5">
        <Image
          src="/logo7.png"
          alt="Background Logo"
          width={800}
          height={800}
          className="w-[500px] md:w-[700px] lg:w-[900px] object-cover"
        />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl uppercase tracking-wider doner font-black pb-10"
        >
        Pricing
      </motion.h2>
      {/* Animated Card */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.1, ease: "easeOut" }}
        whileHover={{
          scale: 1.02,
          boxShadow: "0px 20px 50px rgba(0,0,0,0.3)",
        }}
        className="bg-[#0000000d] border border-gray-700  text-black rounded-lg  p-10 max-w-xl w-full shadow-2xl cursor-pointer relative overflow-hidden"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_50%)] pointer-events-none" />

        {/* Header */}
        <h3                 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-wider opacity-90 doner leading-relaxed  font-black mb-4 lg:mb-6 text-left"
        >
          Creator Wealth System
          <div className="h-[1px] mt-2 bg-green-500"></div>
        </h3>

        {/* Features */}
        <div className="space-y-5 mb-10 ">
          {[
            "1:1 Strategy & Accountability Calls",
            "Full Audit of Your Brand & Funnel",
            "Custom Funnel Setup (YouTube, Instagram, Email)",
            "Step-by-step video lessons, PDFs, checklists, and a complete roadmap",
            "Weekly Group Training & Feedback",
            "Private Expert Community",
            "Direct Support from Vivek",
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="flex items-center gap-3"
            >
              <motion.span whileHover={{ scale: 1.2, rotate: 10 }} className=" bg-green-400 px-2">
                <div className="text-black text-xl"><MoveRight/></div>
              </motion.span>
              <p className=" inter text-sm sm:text-base md:text-lg lg:text-xl 
                            leading-relaxed">{feature}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 200 }}
          className="block archivo tracking-wider   bg-[#00e13c] w-full text-center px-6 py-3 rounded-md border border-green-600 text-white font-medium uppercase 
               transition-all duration-300 ease-in-out 
               transform hover:scale-110 
               hover:backdrop-blur-md hover:bg-green-500"
        >
          <p className=" text-2xl sm:text-2xl md:text-3xl lg:text-4xl  font-extrabold mb-2">$250</p>
          <p className="text-lg font-medium tracking-wide">per month</p>
        </motion.div>
        <div className="w-full  mt-4">
          <Link
            href="https://forms.gle/nqDF4TBXLnRYuuFRA"
            className="block archivo tracking-wider  w-full text-center px-6 py-3 rounded-md border border-green-600 text-black font-medium uppercase 
               transition-all duration-300 ease-in-out 
               transform hover:scale-110 
               hover:backdrop-blur-md hover:bg-white/10"
          >
            Apply Now
          </Link>
        </div>
        <BorderBeam duration={6} size={400} className="from-transparent via-red-500 to-transparent" />
        <BorderBeam
          duration={6}
          delay={3}
          size={400}
          borderWidth={2}
          className="from-transparent via-blue-500 to-transparent"
        />
      </motion.div>
    </section>
  )
}
