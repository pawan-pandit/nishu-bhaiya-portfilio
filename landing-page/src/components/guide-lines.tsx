"use client"

import type React from "react"
import { motion } from "framer-motion"
import { ArrowRightCircle } from "lucide-react"

const GuideSection: React.FC = () => {
  // ✅ Faster and type-safe animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const, // ✅ type-safe
      },
    },
  }

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0,
      },
    },
  }

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const, // ✅ type-safe
      },
    },
  }

  return (
    <motion.div
      className="transition-colors duration-500 flex flex-col items-left justify-center text-left mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full bg-[#f8f1f3] text-black"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.01, margin: "0px 0px -100px 0px" }} // triggers early
    >
      <motion.h2
        className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl uppercase tracking-wider doner font-black pb-10"
        variants={itemVariants}
      >
        <strong className="bg-gradient-to-r from-[#876B40] via-[#F1DEC0] to-[#6C522A] bg-clip-text text-transparent font-black">
          10X
        </strong>{" "}
        GROWTH CLUB
      </motion.h2>

      <motion.p
        className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-wider opacity-90 inter leading-relaxed font-black mb-4 lg:mb-6 text-left"
        variants={itemVariants}
      >
        A proven system to grow on Instagram and YouTube — Turn views into paid clients… By creating videos in just
        2 hours a week.
      </motion.p>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
        {/* LEFT COLUMN */}
        <motion.div
          className="flex flex-col justify-center items-start text-left space-y-6 h-full"
          variants={itemVariants}
        >
          <motion.h3
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl doner tracking-wider font-black mb-6 lg:mb-8 text-left"
            variants={itemVariants}
          >
            Most creators and entrepreneurs don&apos;t fail because of effort.
          </motion.h3>

          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl inter font-semibold opacity-90 leading-relaxed text-left mb-6"
            variants={itemVariants}
          >
            They fail because they&apos;re guessing.
          </motion.p>

          <motion.ul
            className="space-y-3 lg:space-y-4 text-left inter text-sm md:text-lg opacity-90 leading-relaxed"
            variants={listVariants}
          >
            <motion.li className="flex items-start gap-3" variants={listItemVariants}>
              <span className="text-[#00e13c] flex-shrink-0 mt-0.5">
                <ArrowRightCircle />
              </span>
              Guessing what niche their personal brand should stand for.
            </motion.li>
            <motion.li className="flex items-start gap-3" variants={listItemVariants}>
              <span className="text-[#00e13c] flex-shrink-0 mt-0.5">
                <ArrowRightCircle />
              </span>
              Guessing what topics will actually attract the right audience.
            </motion.li>
            <motion.li className="flex items-start gap-3" variants={listItemVariants}>
              <span className="text-[#00e13c] flex-shrink-0 mt-0.5">
                <ArrowRightCircle />
              </span>
              Guessing how to turn that audience into customers and real business revenue.
            </motion.li>
          </motion.ul>

          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold inter text-green-600 text-left mt-6 lg:mt-8"
            variants={itemVariants}
          >
            This program removes the guesswork.
          </motion.p>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          className="space-y-6 lg:space-y-8 bg-white p-6 rounded-lg"
          variants={itemVariants}
        >
          <motion.h3
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl doner tracking-wider font-black mb-6 lg:mb-8 text-left"
            variants={itemVariants}
          >
            You&apos;ll learn a step-by-step system to:
          </motion.h3>

          <motion.ul
            className="space-y-3 sm:space-y-4 md:space-y-5 text-left text-sm md:text-lg inter opacity-90 leading-relaxed"
            variants={listVariants}
          >
            {[
              "Build and grow your YouTube channel & Instagram with clarity and confidence",
              "Create videos people love to watch — and get more views, consistently",
              "Build content for YouTube & Instagram in just 2 hours per week",
              "Write hooks and scripts like an expert — even if you’re not a writer",
              "Craft irresistible offers and package your services to make $20K–$350K/month",
              "Build and automate funnels that turn your views into paid clients.",
            ].map((text, i) => (
              <motion.li key={i} className="flex items-start gap-2 sm:gap-3" variants={listItemVariants}>
                <span className="text-[#00e13c] flex-shrink-0 mt-0.5">
                  <ArrowRightCircle />
                </span>
                <span dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, "<br/>") }} />
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="mt-8 lg:mt-12 p-6 lg:p-8 rounded-2xl bg-opacity-10 backdrop-blur-sm border border-opacity-20 text-left hover:scale-[1.02] transition-transform duration-300"
            variants={itemVariants}
          >
            <motion.h4
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-green-600 inter"
              variants={itemVariants}
            >
              This isn&apos;t just about content.
            </motion.h4>
            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold opacity-90 inter"
              variants={itemVariants}
            >
              It&apos;s about building a <strong>real business</strong> powered by content.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default GuideSection
