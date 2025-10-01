"use client"

import { motion, type Variants } from "framer-motion"
import { ChevronDownIcon } from "lucide-react"
import { useState } from "react"


  const faqs = [
    {
      q: "What exactly is this program?",
      a: "This isn't another \"watch and figure it out alone course\" where you're left to watch videos and figure everything out on your own.\nInstead, this is a done-with-you coaching program designed to give you direct support and clear direction every step of the way.\nHere's what makes it different:\n1:1 Strategy Calls & Private Sessions — personalized guidance so you always know your next move.\nStep-by-Step Frameworks — simple systems to help you create consistent, high-quality content in just 2 hours per week.\nDone-for-You Resources — hooks, scripts, templates, and prompts so you can plug and play without guesswork.\nHands-On Support — feedback, accountability, and troubleshooting to keep you on track.\nThe goal? To help you grow your audience, get more views, and start making money from your content—without the overwhelm or wasted time.",
    },
    {
      q: "What happens after I join the program?",
      a: "As soon as you join, you'll receive an email with a booking link to schedule your first 1:1 strategy call. After that, you'll get instant access to the private community and all the resources and tools so you can start right away.",
    },
    {
      q: "Who's this program for?",
      a: "This program is built for creators, coaches, agency owners, and entrepreneurs who want to grow their personal brand on YouTube and Instagram—while simultaneously scaling their business to $30K–$100K per month.",
    },
    {
      q: "How is this program different from other programs?",
      a: "Most courses and coaching programs leave you on your own once you buy—forcing you to figure everything out by yourself. This program is different.",
    },
    {
      q: "How does the 100% money-back guarantee work?",
      a: "I'm fully confident in the results this program delivers. That's why I offer a guarantee: if you don't walk away from our very first 1:1 strategy call with more clarity and confidence, I'll refund your money.\n\nAll you need to do is reach out within 24 hours of that first call, and I'll process your refund right away. It's that straightforward.",
    },
    {
      q: "What if I can't make the live training calls?",
      a: "No problem! Every call is recorded, so you can watch or listen at your convenience. If you're short on time, you can simply hop on to get your questions answered and then head out—or drop your questions ahead of time to be covered. Plus, you'll have private sessions for personalized support. The calls are completely optional, so you can join as often—or as little—as you'd like.",
    },
    {
      q: "Will the weekly calls be recorded?",
      a: "Yes! Every weekly call is recorded, and you'll have full access to the replays inside the private community so you can watch, revisit, and learn on your own schedule.",
    },
    {
      q: "When are the group coaching calls?",
      a: "Every Monday, 11:00 AM–12:30 PM Eastern Time (ET).\nDuration: 1 hour 30 minutes. Replays will be available inside the community within 12 hours after the call.",
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
  } whitespace-pre-line`}
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
