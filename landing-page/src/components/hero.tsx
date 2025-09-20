"use client"

import type React from "react"
import { motion } from "framer-motion"
import { MorphingText } from "./ui/flipword"
import { BoxReveal } from "./ui/box-revel"
import Image from "next/image"
import { ShinyButton } from "./ui/shinny-button"

interface HeroSectionProps {
    theme: "black" | "white"
}

const HeroSection: React.FC<HeroSectionProps> = ({ theme }) => {
    const texts = [
        "Funnels",
        "Make More Money",
        "Engaging",
    ];
    return (
        <header
            className={`transition-colors duration-500 ${theme === "black" ? "bg-black text-white" : "bg-[#f8f1f3] text-black"
                }`}
        >
            <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-6 lg:py-10 mx-auto doner">
                {/* Logo */}
                <div className="relative flex items-center">
  {/* Text on top */}
  <motion.a
    href="https://www.10xgrowth.club/"
    className="relative z-10 flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-bold uppercase doner tracking-wider hover:text-green-600 transition"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    10xGrowth.Club
  </motion.a>

  {/* Background image */}
  <div className="absolute inset-0 w-full h-20 opacity-20 pointer-events-none">
    <Image
      src={theme === "black" ? "/logo1.svg" : "/logo3.png"} // dynamically choose image
      alt="10xGrowth Logo"
      fill
      className="object-contain object-center "
      priority
    />

  </div>
</div>

                {/* Button (desktop) */}
                <motion.div
                    className="block"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-2 sm:px-6 py-1 plus uppercase rounded-md  font-bold transition text-sm sm:text-base 
              ${theme === "black"
                                ? "bg-green-600 text-white hover:bg-green-700 border border-white"
                                : "border border-black text-green-500 hover:bg-green-600 hover:text-white hover:border-green-400"
                            }`}
                    >
                                              <ShinyButton theme={theme} className="uppercase">Apply now</ShinyButton>

                    </motion.button>
                </motion.div>
            </nav>

            <motion.section
                className="relative overflow-hidden px-4 sm:px-6 lg:px-10 py-20 mx-auto "
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                {/* Background Logo */}




                {/* Foreground Content */}
                <div className="relative z-10 ">
                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl uppercase tracking-wider font-extrabold doner mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        Get More Views.
                        Build Better Offers & <MorphingText texts={texts} />
                    </motion.h2>

                    <div className="relative mx-auto mt-8">
                        {/* Paragraph container */}
                        <div className="relative z-10   space-y-6">
                            <BoxReveal
                                boxColor={theme === "black" ? "#10b981" : "#059669"}
                                duration={0.6}
                                width="100%"
                            >
                                <motion.p
                                    className="text-sm md:text-lg opacity-90 max-w-2xl leading-relaxed"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.8 }}
                                >
                                    This isn&apos;t another course — it&apos;s a complete growth system ...
                                    designed to
                                    get you more views on YouTube & Instagram, build offers that actually
                                    sell, and finally turn your audience into income.
                                </motion.p>
                            </BoxReveal>

                            <BoxReveal
                                boxColor={theme === "black" ? "#10b981" : "#059669"}
                                duration={0.7}
                                width="100%"
                            >
                                <motion.p
                                    className="text-sm md:text-lg opacity-80c max-w-3xl leading-relaxed"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 1.0 }}
                                >
                                    And you won&apos;t be left to figure it out alone. This is a done-with-you
                                    program — with 1:1 strategy calls, private sessions, and hands-on
                                    support so you always know exactly what to do next.
                                </motion.p>
                            </BoxReveal>
                        </div>

                        <div className="absolute inset-0 md:inset-y-0 md:right-0 w-full h-64 md:h-full opacity-10 pointer-events-none">
                            <Image
                                src={theme === "black" ? "/logo1.svg" : "/logo3.png"} // dynamically choose image
                                alt="10xGrowth Logo"
                                fill
                                className="object-contain object-center md:object-right drop-shadow-2xl"
                                priority
                            />

                            {/* Optional gradient overlay to make text readable */}
                            <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-transparent md:from-transparent pointer-events-none" />
                        </div>

                    </div>


                    <motion.div
                        className="my-6 max-w-md"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                    >
                      <ShinyButton theme={theme}>Join Before It&apos;s Gone</ShinyButton>

                    </motion.div>
                </div>
            </motion.section>


        </header>
    )
}

export default HeroSection
