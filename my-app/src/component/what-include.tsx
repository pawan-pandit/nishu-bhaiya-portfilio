"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const whatsIncluded = [
  "✅ Bi-weekly 1:1 Strategy + Accountability Calls (so you never fall behind)",
  "✅ Complete Audit of your personal brand platforms, offers, sales funnel, business, and bottlenecks.",
  "✅ Custom Funnel Creation — including YouTube funnel, Instagram sales funnel, and email marketing funnel.",
  "✅ Weekly Training Calls. Surround yourself with other creators and agency owners scaling to $30K–$100K/month. Ask questions, get feedback, and tap into proven templates, wins, and behind-the-scenes insights.",
  "✅ Video Course & Action Tools: Get access to step-by-step pre-recorded video lessons, supporting PDFs, and actionable checklists. On our 1:1 calls, I’ll personally make sure you’re not just learning but actually implementing what you’ve learned.",
  "✅ Private Expert Community",
  "✅ Direct Support & Feedback from Vivek — You’ll have access to me for support inside the community. When something breaks or stalls, I will help you fix it — fast.",
]

const listVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
}
interface IncludeSectionProps {
  id?: string;
  className?: string;
}

const IncludeSection = ({ id, className }: IncludeSectionProps) => {
  return (
    <section
      id={id}
      className={`relative py-16 px-6 overflow-hidden ${className || ""}`}
    >
      <div className="absolute inset-0 -z-10 bg-[#141414]" />

      <div className="absolute inset-0 -z-0 flex items-center justify-center opacity-5">
        <Image
          src="/logo1.svg"
          alt="Background Logo"
          width={600}
          height={600}
          className="w-[500px] md:w-[700px] lg:w-[900px] object-contain"
        />
      </div>

      <div className="max-w-[1220px] mx-auto relative md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-bold uppercase text-slate-100 anton leading-tight tracking-wider mb-10 text-left"
        >
          What’s Included
        </motion.h2>

        <ul className="space-y-6 text-slate-200 text-lg leading-relaxed">
          {whatsIncluded.map((item, i) => (
            <motion.li
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              variants={listVariants}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-800/40 border border-gray-700 tracking-wider plus text-xs md:text-sm lg:text-lg rounded-md p-5 font-bold hover:bg-gray-800/70 transition shadow-md"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default IncludeSection
