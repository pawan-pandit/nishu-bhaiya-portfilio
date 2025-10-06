"use client"

import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MorphingText } from "./ui/flipword"
import { BoxReveal } from "./ui/box-revel"
import Image from "next/image"
import { ShinyButton } from "./ui/shinny-button"
import { PulsatingButton } from "./ui/pulse-button"
import { useState } from "react"
import { Menu, Quote, X } from "lucide-react"



const HeroSection: React.FC = () => {

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
      className={`transition-colors duration-500 bg-[#f8f1f3] text-black"
        `}
    >
      <div className="w-full bg-black overflow-hidden">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-3 sm:gap-4 md:gap-6 px-3 sm:px-4">
          {/* Left: Logo - fully visible at all sizes */}
          <div className="flex-shrink-0 bg-black ">
            <Image
              src="/money.svg"
              alt="100% Money Back Guarantee"
              width={10}
              height={10}
              className="w-[100px] h-[100px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px] bg-black  lg:w-[100px] lg:h-[100px]  drop-shadow-lg"
              priority
            />
          </div>

          {/* Right: Text - smaller and more readable */}
          <div className="flex-1 min-w-0">
            <p className="font-sans font-semibold text-[10px] sm:text-xs md:text-sm text-white leading-relaxed">
              I am so confident in what I teach that if you don&apos;t get
              clarity after our first 1:1 strategy call, I&apos;ll{" "}
              <span className="text-green-400">issue the refund</span>...{" "}
              <span className="italic text-gray-300">It&apos;s that simple.</span>
            </p>
          </div>
        </div>
      </div>



      <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-10   mx-auto inter ">
        {/* Logo */}
        <div className="relative flex items-center">
          <img src="/logo7.png"
            alt="10xGrowth Logo" className="h-20 w-20 sm:h-40 sm:w-40 bg-[#f8f1f3]" />

        </div>

        <div className="hidden lg:flex items-center gap-6 xl:gap-8 doner">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-sm xl:text-base hover:text-green-500  font-semibold transition-colors duration-200 hover:underline"
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
        className="relative overflow-hidden px-4 sm:px-6 lg:px-10 pb-10 mt-2   mx-auto   inter"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="relative z-10 ">
          <motion.h2
            className="text-2xl md:text-5xl lg:text-6xl xl:text-7xl  tracking-wider doner font-black mb-2  md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Get More  <strong className="text-green-600 font-black">   Views </strong> <br />
            Create <strong className="text-green-600 font-black"> Offers </strong> <strong className="inter">&</strong> <strong className="text-green-600 font-black">Funnels</strong>
            <br /> Turn your content into <strong className="text-green-600 font-black"> Clients</strong>
          </motion.h2>

          <div className="relative mx-auto md:mt-8">
            <div className="relative z-10 space-y-2   md:space-y-6">
              <BoxReveal
                boxColor={"#059669"}
                duration={0.6}
                width="100%"
              >
                <motion.p
                  className="text-xs md:text-lg opacity-90 max-w-4xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Tired of courses that leave you feeling stuck and alone?
                </motion.p>
              </BoxReveal>

              <BoxReveal
                boxColor={"#059669"}
                duration={0.7}
                width="100%"
              >
                <motion.p
                  className="text-xs md:text-lg opacity-80c max-w-4xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  This done-with-you program gives you <strong>1:1 strategy calls, private sessions and step-by-step guidance — </strong>so you can confidently create videos in just  <strong>2 hours a week, get more views, create irresistible offers and automated funnels that attract premium clients.     </strong>
                </motion.p>

                <motion.p
                  className="text-sm md:text-lg opacity-80c max-w-4xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  Start making <strong className="text-green-600 font-black" > $20K–$350K/month with YouTube & Instagram.</strong>

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
            <PulsatingButton  className=" ">Join Before It&apos;s Gone</PulsatingButton>

          </motion.div>

          <motion.p className="my-2 px-2 py-1 italic rounded-md text-sm md:text-base opacity-80c max-w-2xl  text-gray-800 leading-relaxed "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}>
            Spots are limited  <strong>  ( <span className="line-through text-gray-400 mr-1 font-medium">15</span>8 spots left )</strong> — let’s grow your personal brand together.
          </motion.p>
          <motion.div className=""
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}>
            <div className="flex max-w-2xl items-center justify-center ">
              <div className="flex items-center gap-0 sm:gap-6 py-6">
                <img
                  src="https://alejandroreyes.com/wp-content/uploads/2025/06/justin-khoe.webp"
                  alt="Justin Khoe"
                  width={100}
                  height={100}
                  className="rounded-full object-cover flex-shrink-0 border-4"
                  loading="lazy"
                  decoding="async"
                />
                <div className="flex flex-col ">
                  <blockquote className="relative max-w-2xl mx-auto p-4 sm:p-6   ">
                    <p className="text-sm sm:text-lg leading-relaxed inter font-semibold text-black">
                      <Quote className="inline-block w-3 h-3 sm:w-5 sm:h-5 mr-1 text-gray-950 -translate-y-2 rotate-180" />
                      Alejandro helped me launch my first program…
                      I made $120,465
                      and am officially debt free
                      <Quote className="inline-block w-3 h-3 sm:w-5 sm:h-5 ml-1 text-gray-950 -translate-y-2" />
                    </p>
                    <p className=" inter text-sm sm:text-lg py-2">Justin Kho</p>
                  </blockquote>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.section>


    </header>
  )
}

export default HeroSection
