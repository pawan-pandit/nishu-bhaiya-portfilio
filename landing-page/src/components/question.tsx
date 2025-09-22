"use client"

import { motion, type Variants } from "framer-motion"
import { ChevronDownIcon } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    q: "What exactly is this program?",
    a: "It's a structured growth system that combines digital learning materials (step-by-step video lessons, PDFs, checklists, and a complete roadmap) with guided support to ensure you actually implement and get results. You're not buying \"just a course\" — you're getting a complete, productized system designed to help creators, coaches, and entrepreneurs grow faster and more consistently.",
  },
  {
    q: "Who is it for?",
    a: "Creators, coaches, and small agency owners who want more leads and sales ($5K–$100K/mo).",
  },
  {
    q: "How is it different from other programs?",
    a: "Most courses stop at selling information. We go further by ensuring implementation. Along with the core training, you'll get a private community, weekly Q&As, and accountability check-ins — so you're never left wondering what to do next.",
  },
  {
    q: "What results can I expect?",
    a: "Clear positioning, an offer that converts, a working funnel, and steady lead flow within 6–12 weeks (if you implement).",
  },
  {
    q: "Do you offer refunds?",
    a: "Because this is a high-touch program with my personal time and resources, there are no refunds. But I work closely with you until the system is in place.",
  },
]

interface FAQSectionProps {
  theme?: "white" | "black"
}

export default function FAQSection({ theme = "white" }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className={`py-16 px-4 sm:px-6 lg:px-8 ${theme === "black" ? "bg-gray-900 text-white" : "bg-[#f8f1f3]"}`}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <motion.h2
                        className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl uppercase tracking-wider doner font-black pb-10"
                        variants={itemVariants}
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.p
                        className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-wider opacity-90 doner leading-relaxed  font-black mb-4 lg:mb-6 text-center"
                        variants={itemVariants}
          >
            Everything you need to know about the program
          </motion.p>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-4 inter">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`rounded-xl border transition-all duration-300 ${
                theme === "black"
                  ? "bg-gray-800 border-gray-700 hover:border-gray-600"
                  : "bg-white/80 backdrop-blur-sm border-pink-200 hover:border-pink-300 shadow-sm hover:shadow-md"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 rounded-xl"
              >
                <h3
                  className={`text-sm sm:text-base md:text-lg leading-relaxed font-bold pr-4 ${theme === "black" ? "text-white" : "text-gray-900"}`}
                >
                  {faq.q}
                </h3>
                <ChevronDownIcon
                  className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  } ${theme === "black" ? "text-gray-400" : "text-gray-500"}`}
                />
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5">
                  <p
                    className={`text-sm sm:text-base md:text-lg leading-relaxed ${
                      theme === "black" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {faq.a}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
