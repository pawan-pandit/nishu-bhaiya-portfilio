"use client"

import type React from "react"
import { motion } from "framer-motion"
import { MorphingText } from "./ui/flipword"
import { BoxReveal } from "./ui/box-revel"
import Image from "next/image"
import { ShinyButton } from "./ui/shinny-button"
import { PulsatingButton } from "./ui/pulse-button"

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
            <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-6   mx-auto inter ">
                {/* Logo */}
                <div className="relative flex items-center">
                    <img src={theme === "black" ? "/logo1.svg" : "/logo7.png"}
                        alt="10xGrowth Logo" className="h-20 w-20 sm:h-40 sm:w-40 bg-[#f8f1f3]" />
                    {/* <motion.a
    href="https://www.10xgrowth.club/"
    className="relative z-10 flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-bold uppercase  tracking-wider hover:text-green-600 transition"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    10xGrowth.Club
  </motion.a> */}

                    {/* Background image */}
                    {/* <div className="relative w-full h-20 opacity-20 pointer-events-none">
                        <Image
                            src={theme === "black" ? "/logo1.svg" : "/logo4.png"}
                            alt="10xGrowth Logo"
                            fill
                            className="object-contain object-center  "
                            priority
                        />

                    </div> */}
                </div>

                {/* Button (desktop) */}
                <motion.div
                    className="block"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`  uppercase archivo tracking-wider  
            bg-[#00e13c] hover:bg-green-600 px-4 py-2 text-center text-white hover:border-green-400
                            `}
                    >
                        Claim Your Spot

                    </motion.div>
                </motion.div>
            </nav>

            <motion.section
                className="relative overflow-hidden px-4 sm:px-6 lg:px-10 py-10 md:py-20 mx-auto   inter"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >




                <div className="relative z-10 ">
                    <motion.h2
                        className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl uppercase tracking-wider doner font-black  mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        Get  <strong className="text-green-600 font-black">  More Views </strong> <br />
                        Build Better Offer<br /> Turn Content Into <strong className="text-green-600 font-black"> Clients</strong>
                    </motion.h2>

                    <div className="relative mx-auto mt-8">
                        <div className="relative z-10   space-y-6">
                            <BoxReveal
                                boxColor={theme === "black" ? "#10b981" : "#059669"}
                                duration={0.6}
                                width="100%"
                            >
                                <motion.p
                                    className="text-sm md:text-lg opacity-90 max-w-4xl leading-relaxed"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.8 }}
                                >
                                    This isn&apos;t another &quot;watch and figure it out alone&quot; course like other coaches offer that leaves you stuck and alone.
                                </motion.p>
                            </BoxReveal>

                            <BoxReveal
                                boxColor={theme === "black" ? "#10b981" : "#059669"}
                                duration={0.7}
                                width="100%"
                            >
                                <motion.p
                                    className="text-sm md:text-lg opacity-80c max-w-4xl leading-relaxed"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 1.0 }}
                                >
                                    This is a done-with-you program with <strong className=" italic"> 1:1 strategy calls, private sessions, and step-by-step guidance — </strong>so you can create videos in just 2 hours a week, grow your audience, get more views and start making money from your content.
                                </motion.p>
                            </BoxReveal>
                        </div>

                        {/* <div className="absolute inset-0 md:inset-y-0 md:right-0 w-full h-64 md:h-full opacity-10 pointer-events-none">
                            <Image
                                src={theme === "black" ? "/logo1.svg" : "/logo3.png"} // dynamically choose image
                                alt="10xGrowth Logo"
                                fill
                                className="object-contain object-center md:object-right drop-shadow-2xl"
                                priority
                            />

                            <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-transparent md:from-transparent pointer-events-none" />
                        </div> */}

                    </div>


                    <motion.div
                        className="mt-6 max-w-2xl "
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    // transition={{ duration: 0.6, delay: 1.2 }}

                    >
                        <PulsatingButton theme={theme} className="uppercase ">Join Before It&apos;s Gone</PulsatingButton>

                    </motion.div>

                    <motion.p className="my-2 px-2 py-1 italic rounded-md text-sm md:text-base opacity-80c max-w-2xl  text-gray-800 leading-relaxed "
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.0 }}>
                        Spots are limited <strong>  ( 8 spots left )</strong> — let’s grow your personal brand together.
                    </motion.p>
                </div>
            </motion.section>


        </header>
    )
}

export default HeroSection
