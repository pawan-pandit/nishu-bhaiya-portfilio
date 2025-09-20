"use client"

import styles from './style.module.scss';
import { useEffect, useState } from "react"
import { motion, type Variants, type Transition } from "framer-motion"


const bezier: Transition["ease"] = [0.76, 0, 0.24, 1]

export const slideUp: Variants = {
  initial: {
    y: 0,
  },
  exit: {
    y: -1000, // moves offscreen upward
    transition: {
      duration: 0.8,
      ease: bezier,
      delay: 0.2,
    },
  },
}

export const opacity: Variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 1, delay: 0.2 },
  },
}

// Curve variant with custom prop for dynamic paths
export const curve: Variants = {
  initial: (custom: { initialPath: string; targetPath: string }) => ({
    d: custom.initialPath,
    transition: { duration: 0.7, ease: bezier },
  }),
  exit: (custom: { initialPath: string; targetPath: string }) => ({
    d: custom.targetPath,
    transition: { duration: 0.7, ease: bezier, delay: 0.3 },
  }),
}


const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo"]

export default function Preloader() {
  const [index, setIndex] = useState(0)
  const [dimension, setDimension] = useState({ width: 0, height: 0 })

  // Get viewport dimensions
  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight })
  }, [])

  // Word cycling
  useEffect(() => {
    if (index === words.length - 1) return
    const timeout = setTimeout(
      () => {
        setIndex((prev) => prev + 1)
      },
      index === 0 ? 1000 : 150,
    )

    return () => clearTimeout(timeout)
  }, [index])

  // Build dynamic SVG paths
  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${
    dimension.height + 300
  } 0 ${dimension.height}  L0 0`
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`

  return (
    <motion.div variants={slideUp} initial="initial" exit="exit" className={styles.introduction}>
      {dimension.width > 0 && (
        <>
          <motion.p variants={opacity} initial="initial" animate="enter">
            <span></span>
            {words[index]}
          </motion.p>
          <svg>
            <motion.path variants={curve} initial="initial" exit="exit" custom={{ initialPath, targetPath }} />
          </svg>
        </>
      )}
    </motion.div>
  )
}
