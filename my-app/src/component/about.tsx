"use client"

import type React from "react"
import IntroHeader from "./ui/about-header"
import HeroSection from "./hero"
import { OriginStory } from "./ui/about-body"

interface AboutSectionProps {
  id?: string
  className?: string
}

const AboutSection: React.FC<AboutSectionProps> = ({ id, className }) => {
  return (
    <>
      <section id={id} className={`relative text-white ${className}`}>
        <div className="px-6 md:px-10 relative">
          {/* Background only for header */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-black via-gray-900 to-black" />

          <IntroHeader headline="ABOUT ME" desk=" " location="" />
        </div>

        {/* Other sections without gradient */}
        <OriginStory />
      </section>
    </>
  )
}

export default AboutSection
