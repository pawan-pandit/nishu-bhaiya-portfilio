"use client"
import { motion, type Variants, type Transition } from "framer-motion"
import { useEffect, useState } from "react"

// Framer Motion variants
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
}

const charVariant: Variants = {
  hidden: { opacity: 0, y: 20, rotateX: -90 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      ease: "easeOut" as Transition["ease"], // ✅ correct type, no `any`
      duration: 0.6,
    },
  },
}

type IntroHeaderProps = {
  headline?: string
  desk?: string
  location?: string
}

export default function IntroHeader({
  headline = "DEAR EXPERT",
  desk = "FROM ROB O’ROURKE’S DESK",
  location = "KRAKOW, POLAND",
}: IntroHeaderProps) {
  const [time, setTime] = useState<string>("")

  // Live clock (updates every minute)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Europe/Warsaw",
        timeZoneName: "short",
      }
      setTime(new Intl.DateTimeFormat("en-GB", options).format(now))
    }
    updateTime()
    const interval = setInterval(updateTime, 60_000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col py-6 max-w-[1220px] mx-auto text-center text-gray-100">
      {/* Top details (desk + location + time) */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between text-sm tracking-wide text-gray-300 gap-2">
        <h3 className="font-medium uppercase">{desk}</h3>

        <div className="flex items-center gap-6">
          <h3 className="uppercase">{location}</h3>
          {/* <h3 className="font-mono">{time}</h3> */}
        </div>
      </div>

      {/* Animated Headline */}
      <motion.h1
        className=" text-[65px] sm:text-[145px]  md:text-[145px] lg:text-[200px] xl:text-[245px] anton font-bold leading-tight"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {headline.split(" ").map((word, i) => (
          <span key={i} className="inline-block mr-2">
            {word.split("").map((char, j) => (
              <motion.span key={j} className="inline-block" variants={charVariant}>
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.h1>
    </div>
  )
}
