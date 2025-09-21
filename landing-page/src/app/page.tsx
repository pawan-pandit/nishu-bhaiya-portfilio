"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import { Menu, X } from "lucide-react"
import Preloader from "@/components/Preloader/page"
import HeroSection from "@/components/hero"
import GuideSection from "@/components/guide-lines"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [theme, setTheme] = useState<"black" | "white">("black")
  const [menuOpen, setMenuOpen] = useState(false)

  // Preloader logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      document.body.style.cursor = "default"
      window.scrollTo(0, 0)
    }, 3000) // Show preloader for 3 seconds

    return () => clearTimeout(timer)
  }, [])

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
  }, [menuOpen])

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
            {/* Fixed Buttons */}
            <motion.div
              className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[99999] flex gap-x-4 px-4 py-2 rounded-lg shadow-md transition-colors duration-500
                ${theme === "black" ? "bg-white" : "bg-black"}
              `}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Menu Button */}
              <div className="relative">
                <motion.div
                  className={`absolute inset-0 rounded-full p-2 border-2 ${theme === "black" ? "border-black" : "border-white"}`}
                  initial={{ scale: 1, opacity: 0 }}
                  whileHover={{
                    scale: 1.4,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    },
                  }}
                  style={{
                    transformOrigin: "center",
                    pointerEvents: "none",
                  }}
                />

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setMenuOpen(!menuOpen)}
                  className={`relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full transition-colors duration-500 border-2
                    ${theme === "black" ? "bg-gray-800 hover:border-black" : "bg-gray-200 hover:border-white"}`}
                >
                  {menuOpen ? <X /> : <Menu />}
                </motion.button>
              </div>

              {/* Theme Toggle */}
              <div className="relative">
                <motion.div
                  className={`absolute inset-0 rounded-full border-2 ${theme === "black" ? "border-black" : "border-white"}`}
                  initial={{ scale: 1, opacity: 0 }}
                  whileHover={{
                    scale: 1.4,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    },
                  }}
                  style={{
                    transformOrigin: "center",
                    pointerEvents: "none",
                  }}
                />

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setTheme(theme === "black" ? "white" : "black")}
                  className={`relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 shadow-md transition-colors duration-500
                    ${theme === "black" ? " hover:border-black" : " hover:border-white"}`}
                >
                  <div
                    className={`w-full h-full flex ${
                      theme === "black" ? "flex-col" : "flex-col-reverse"
                    } transition-all duration-500`}
                  >
                    <div className="w-full h-1/2 bg-black"></div>
                    <div className="w-full h-1/2 bg-white"></div>
                  </div>
                </motion.button>
              </div>
            </motion.div>

            {/* Fullscreen Modal */}
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`fixed inset-0 z-50 flex flex-col items-center justify-center backdrop-blur transition-colors duration-500
                    ${theme === "black" ? "bg-black/90 text-white" : "bg-white/90 text-black"}
                  `}
                >
                  <button onClick={() => setMenuOpen(false)} className="absolute top-3 right-3 text-2xl font-bold">
                    ✕
                  </button>
                  <div className="text-center space-y-6">
                    <h2 className="text-3xl md:text-5xl font-bold">Menu</h2>
                    <ul className="space-y-4 text-xl md:text-2xl">
                      <li className="hover:underline cursor-pointer">Home</li>
                      <li className="hover:underline cursor-pointer">About</li>
                      <li className="hover:underline cursor-pointer">Contact</li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

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
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <GuideSection theme={theme} />
            </motion.div>

          
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
