"use client"

import type React from "react"
import { motion } from "framer-motion"

interface GuideSectionProps {
  theme: "black" | "white"
}

const GuideSection: React.FC<GuideSectionProps> = ({ theme }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <motion.div
      className={`transition-colors duration-500 flex flex-col items-center justify-center text-center mx-auto px-4 sm:px-6 lg:px-8 xl:px-12  w-full ${
        theme === "black" ? "bg-black text-white" : "bg-[#f8f1f3] text-black"
      }`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl inter font-bold uppercase tracking-wider   pb-10 md:pb-20 "
        variants={itemVariants}
      >
        <strong className="text-[#FFD700] font-black"> 10X </strong>
        GROWTH CLUB
      </motion.h2>
      <motion.p
        className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl  tracking-wider opacity-90 doner leading-relaxed   uppercase doner  font-black mb-4 lg:mb-6 text-left"
        variants={itemVariants}
      >
        A proven system to not just get more views — but turn them into predictable monthly income… in just 2 hours a
        week.
      </motion.p>

    

      <div className="w-full  grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
        {/* Left Column - Problem Section */}
        
        <motion.div className="space-y-6 lg:space-y-8" variants={itemVariants}>
      
         
          <motion.h3
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl doner  tracking-wider font-black mb-6 lg:mb-8 text-left"
            variants={itemVariants}
          >
            Most creators and entrepreneurs don't fail because of effort.
            </motion.h3>

          
          

          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl inter font-semibold opacity-90 leading-relaxed text-left mb-6"
            variants={itemVariants}
          >
            They fail because they're guessing.
          </motion.p>

          <motion.ul className="space-y-3 lg:space-y-4 text-left inter text-sm md:text-lg opacity-90 leading-relaxed" variants={listVariants}>
            <motion.li
              className=" flex items-start gap-3 "
              variants={listItemVariants}
            >
              <span className="text-[#FFD700] ">👉</span>
              Guessing what niche their personal brand should stand for.
              </motion.li>
            <motion.li
              className=" flex items-start gap-3"
              variants={listItemVariants}
            >
              <span className="text-[#FFD700] ">👉</span>
              Guessing what topics will actually attract the right audience.
              </motion.li>
            <motion.li
              className=" flex items-start gap-3"
              variants={listItemVariants}
            >
              <span className="text-[#FFD700] ">👉</span>
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

        <motion.div className={`space-y-6 lg:space-y-8 bg-white p-6 rounded-lg ${
        theme === "black" ? "bg-black text-white" : "bg-[#f8f1f3] text-black"} `} variants={itemVariants}>
          <motion.h3
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl doner  tracking-wider font-black mb-6 lg:mb-8 text-left"
            variants={itemVariants}
          >
            You'll learn a step-by-step system to:
          </motion.h3>

          <motion.ul className="space-y-4 lg:space-y-5 text-left inter  text-sm md:text-lg opacity-90 leading-relaxed " variants={listVariants}>
            <motion.li
              className="flex items-start gap-3"
              variants={listItemVariants}
            >
              <span className="text-[#FFD700] ">👉</span>
              Build & grow your YouTube channel and Instagram with clarity and confidence
            </motion.li>
            <motion.li
              className=" flex items-start gap-3"
              variants={listItemVariants}
            >
              <span className="text-[#FFD700] ">👉</span>
              Make videos people love to watch and get more views every time
            </motion.li>
            <motion.li
              className=" flex items-start gap-3"
              variants={listItemVariants}
            >
              <span className="text-[#FFD700] ">👉</span>
              Build content in just 2 hours per week
            </motion.li>
            <motion.li
              className=" flex items-start gap-3"
              variants={listItemVariants}
            >
              <span className="text-[#FFD700] ">👉</span>
              Craft irresistible offers your audience wants to buy
            </motion.li>
            <motion.li
              className="flex items-start gap-3"
              variants={listItemVariants}
            >
              <span className="text-[#FFD700] ">👉</span>
              Price & package your services/products for predictable monthly income
            </motion.li>
            <motion.li
              className="flex items-start gap-3"
              variants={listItemVariants}
            >
              <span className="text-[#FFD700] ">👉</span>
              Build a sales funnel that turns views into customers
            </motion.li>
          </motion.ul>

          <motion.div
            className="mt-8 lg:mt-12 p-6 lg:p-8 rounded-2xl bg-opacity-10 backdrop-blur-sm border border-opacity-20 text-left"
            style={{
              backgroundColor: theme === "black" ? "rgba(255, 215, 0, 0.1)" : "rgba(0, 0, 0, 0.05)",
              borderColor: theme === "black" ? "rgba(255, 215, 0, 0.3)" : "rgba(0, 0, 0, 0.1)",
            }}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h4
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-green-600 inter"
              variants={itemVariants}
            >
              This isn't just about content.
            </motion.h4>
            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold opacity-90 inter"
              variants={itemVariants}
            >
              It's about building a real business powered by content.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default GuideSection
