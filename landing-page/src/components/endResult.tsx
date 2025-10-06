"use client"

import type React from "react"
import { motion, type Variants, easeOut } from "framer-motion"



const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.7, ease: easeOut },
    },
}

const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: 0.8, ease: easeOut },
    },
}

const IncludeSection: React.FC = ({  }) => {
    const features = [
        {
            description: "Grow on YouTube & Instagram without burnout",
        },
        {
            description: "Create content in 2 hours per week",
        },
        {
            description: "Repurpose content across platforms in hours, not weeks",
        },
        {
            description: "Create offers that make money",
        },
        {
            description: "Price your products the right way — from low-ticket to high-ticket",
        },
        {
            description:
                "Launch and scale programs that actually sell",
        },
        {
            description:
                "Build funnels, sales pages & automation that bring clients on repeat",
        }, {
            description:
                "Turn followers into buyers and create consistent, predictable income",
        },
    ]

    return (
        <motion.section
            className={`transition-colors duration-500 px-4 sm:px-6 lg:px-8 xl:px-12 py-10 md:py-20 w-full bg-[#f8f1f3] text-black"`}

            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
       <motion.div
  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pb-10"
  variants={itemVariants}
>
  {/* Heading */}
  <motion.h2
    className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl uppercase tracking-wider doner font-black"
    variants={itemVariants}
  >
    The End Result
  </motion.h2>

  {/* Button */}
  <motion.div variants={buttonVariants}>
    <motion.button
      className={`
        px-8
        py-4 
        text-lg sm:text-xl  text-white archivo
        font-black doner tracking-wider uppercase
        rounded-lg transition-all duration-300
         bg-[#00e13c]
        shadow-xl hover:shadow-2xl
        transform-gpu
      `}
      whileHover={{
        scale: 1.05,
        y: -4,
        boxShadow:
             "0 20px 40px rgba(219,39,119,0.3)",
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.1 },
      }}
      onClick={() => console.log("Join Now clicked!")}
    >
      Join Now
    </motion.button>
  </motion.div>
</motion.div>


            <motion.p
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-wider opacity-90 doner leading-relaxed  font-black mb-4 lg:mb-6 text-left"
                variants={itemVariants}
            >
                By the end of this program, you&apos;ll leave with a complete system to grow your brand, monetize your audience, and turn attention into consistent clients & income — by spending just 2 hours per week creating content.      </motion.p>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 md:mb-16 mx-auto max-w-7xl"
                variants={containerVariants}
            >
                <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl doner tracking-wider font-semibold mb-6 lg:mb-8 text-left">
                    You&apos;ll know how to:                                </h4>

                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        className={`
                            
                                 "bg-gradient-to-br from-white to-pink-50 border border-pink-100
                        
                            rounded-2xl p-6 sm:p-7 lg:p-8 shadow-lg hover:shadow-2xl 
                            transition-all duration-300 cursor-pointer 
                            min-h-[100px]
                            backdrop-blur-sm"
                        `}
                        variants={itemVariants}
                        whileHover={{
                            y: -12,
                            scale: 1.02,
                            boxShadow: "0 20px 40px rgba(219,39,119,0.15)",
                            transition: { duration: 0.3, ease: "easeOut" },
                        }}
                        whileTap={{ scale: 0.98 }}
                    >


                        <p
                            className={`
                            inter text-sm sm:text-base md:text-lg lg:text-xl 
                            leading-relaxed
                            text-gray-700
                        `}
                        >
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
                
            </motion.div>
            <div className="relative rounded-lg p-6 bg-[#0000000d] overflow-hidden">
  {/* Background Logo */}
  <img
    src="/long2.png" // ← replace with your logo path
    alt="Logo"
    className="absolute inset-0 w-full h-full object-contain opacity-5 pointer-events-none"
  />

  {/* Content */}
  <div className="relative z-10">
    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-wider opacity-90 inter leading-relaxed font-black mb-2 text-left">
      Transform from confused creator to profitable business owner
    </p>
    <p className="inter text-sm sm:text-base md:text-lg italic leading-relaxed">
      Stop guessing and start growing with a proven system that&apos;s helped 150+ creators and entrepreneurs build sustainable, profitable businesses powered by content.
    </p>
  </div>
</div>
    
        </motion.section>
    )
}

export default IncludeSection
