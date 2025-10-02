"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import { Menu, X } from "lucide-react"
import Preloader from "@/components/Preloader/page"
import HeroSection from "@/components/hero"
import GuideSection from "@/components/guide-lines"
import AboutSection from "@/components/about"
import IncludeSection from "@/components/includes"
import ProgramSection from "@/components/program"
import EndResultSection from "@/components/endResult"
import CTASection from "@/components/cta"
import FAQSection from "@/components/question"
import PriceSection from "@/components/price"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [theme, setTheme] = useState<"black" | "white">("white")

  // Preloader logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      document.body.style.cursor = "default"
      window.scrollTo(0, 0)
    }, 3000) // Show preloader for 3 seconds

    return () => clearTimeout(timer)
  }, [])



  return (
    <main
      className={`min-h-screen transition-colors duration-500 ${
        theme === "black" ? "bg-black text-white" : "bg-[#f8f1f3] text-black"
      }`}
    >
      {/* Preloader */}
      {/* <AnimatePresence mode="wait">{isLoading && <Preloader key="preloader" />}</AnimatePresence> */}

      {/* Main Content - Only show after preloader finishes */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            key="main-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
           

          

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <HeroSection theme={theme} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }
            }
            >
              <GuideSection theme={theme}  />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <AboutSection theme={theme} />
            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <IncludeSection theme={theme} />
            
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ProgramSection theme={theme} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <PriceSection  />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <EndResultSection theme={theme} />


            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <FAQSection theme={theme} />


            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              < CTASection theme={theme} />


            </motion.div>
          
           
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
