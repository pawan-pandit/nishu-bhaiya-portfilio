"use client"

import { AnimatePresence, motion } from "framer-motion"
import HeroSection from "@/components/hero"
import GuideSection from "@/components/guide-lines"
import AboutSection from "@/components/about"
import IncludeSection from "@/components/includes"
import ProgramSection from "@/components/program"
import EndResultSection from "@/components/endResult"
import CTASection from "@/components/cta"
import FAQSection from "@/components/question"
import PriceSection from "@/components/price"
import VideoTestimonials from "@/components/reviews"

export default function Home() {
  return (
    <main className="min-h-screen transition-colors duration-500 bg-[#f8f1f3] text-black">
      <AnimatePresence>
        <motion.div
          key="main-content"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <HeroSection />

          <GuideSection />

          <section id="reviews">
            <VideoTestimonials />
          </section>

          <section id="about">
            <AboutSection />
          </section>

          <section id="included">
            <IncludeSection />
          </section>

          <section id="details">
            <ProgramSection />
          </section>

          <section id="pricing">
            <PriceSection />
          </section>

          <EndResultSection />

          <FAQSection />

          <CTASection />
        </motion.div>
      </AnimatePresence>
    </main>
  )
}
