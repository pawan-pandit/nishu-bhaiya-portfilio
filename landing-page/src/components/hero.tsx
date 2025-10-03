"use client"

import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MorphingText } from "./ui/flipword"
import { BoxReveal } from "./ui/box-revel"
import Image from "next/image"
import { ShinyButton } from "./ui/shinny-button"
import { PulsatingButton } from "./ui/pulse-button"
import { useState } from "react"
import { Menu, X } from "lucide-react"

interface HeroSectionProps {
    theme: "black" | "white"
}

const HeroSection: React.FC<HeroSectionProps> = ({ theme }) => {

     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { label: "About me", href: "about" },
    { label: "Reviews", href: "reviews" },
    { label: "What's included", href: "included" },
    { label: "Program details", href: "details" },
    { label: "Pricing", href: "pricing" },
    { label: "Free bonus", href: "bonus" },
  ]
   
    return (
        <header
            className={`transition-colors duration-500 ${theme === "black" ? "bg-black text-white" : "bg-[#f8f1f3] text-black"
                }`}
        > 
 <div className="w-full bg-indigo-950 overflow-hidden">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-3 sm:gap-4 md:gap-6 px-3 sm:px-4">
        {/* Left: Logo - fully visible at all sizes */}
        <div className="flex-shrink-0">
          <Image
            src="/money.svg"
            alt="100% Money Back Guarantee"
            width={100}
            height={100}
            className="w-[100px] h-[100px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px] cover drop-shadow-lg"
            priority
          />
        </div>

        {/* Right: Text - smaller and more readable */}
        <div className="flex-1 min-w-0">
          <p className="font-sans font-semibold text-[10px] sm:text-xs md:text-sm text-white leading-relaxed">
            I am so confident in what I teach that if you don&apos;t get
            clarity after our first 1:1 strategy call, I&apos;ll{" "}
            <span className="text-green-400">refund you every penny</span>...{" "}
            <span className="italic text-gray-300">It&apos;s that simple.</span>
          </p>
        </div>
      </div>
    </div>



            <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-10   mx-auto inter ">
                {/* Logo */}
                <div className="relative flex items-center">
                    <img src={theme === "black" ? "/logo1.svg" : "/logo7.png"}
                        alt="10xGrowth Logo" className="h-20 w-20 sm:h-40 sm:w-40 bg-[#f8f1f3]" />
                   
                </div>

             <div className="hidden lg:flex items-center gap-6 xl:gap-8 doner">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-sm xl:text-base hover:text-green-500 transition-colors duration-200 hover:underline"
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 hover:bg-gray-200 rounded-md transition-colors z-50"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

               <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className=" archivo tracking-wider bg-[#00e13c] text-gray-800 hover:bg-green-600 px-4 py-2 text-center hover:border-green-400"
          >
            Claim Your Spot
          </motion.div>
                  </motion.div>

            </nav>

            
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 p-8 doner">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-2xl font-semibold hover:text-green-500 transition-colors duration-200"
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
            className=" archivo tracking-wider bg-[#00e13c] text-gray-800 hover:bg-green-600 px-4 py-2 text-center hover:border-green-400"
              >
                Claim Your Spot
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


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
