"use client"

import { motion, type MotionProps } from "framer-motion"
import React from "react"
import { cn } from "../../../lib/utils"

const animationProps: MotionProps = {
  initial: { "--x": "100%", "--y": "100%", scale: 0.8 },
  animate: { "--x": "-100%", "--y": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Number.POSITIVE_INFINITY,
    repeatType: "loop",
    repeatDelay: 0.5, // Faster repeat for more dynamic effect
    type: "spring",
    stiffness: 25,
    damping: 12,
    mass: 1.5,
    scale: {
      type: "spring",
      stiffness: 300,
      damping: 8,
      mass: 0.3,
    },
  },
}

interface ShinyButtonProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, keyof MotionProps>, MotionProps {
  children: React.ReactNode
  className?: string
  theme?: "black" | "white"
}

export const ShinyButton = React.forwardRef<HTMLButtonElement, ShinyButtonProps>(
  ({ children, className, theme = "black", ...props }, ref) => {
    const bgColor = theme === "black" ? "#00a63e" : "#00a63e"
    const primaryShimmer = theme === "black" ? "rgba(255,255,255,0.9)" : "rgba(16,185,129,0.8)"
    const secondaryShimmer = theme === "black" ? "rgba(255,255,255,0.6)" : "rgba(34,197,94,0.6)"
    const accentShimmer = theme === "black" ? "rgba(255,255,255,0.3)" : "rgba(59,130,246,0.4)"
    const textColor = theme === "black" ? "#ffffff" : "#ffffff"
    const borderColor = theme === "black" ? "#10b981" : "#e5e7eb"

    return (
      <motion.button
        ref={ref}
        className={cn(
          "relative cursor-pointer doner tracking-wider w-full rounded-md px-6 py-2 font-bold border transition-all duration-300 ease-in-out overflow-hidden",
          className,
        )}
        style={
          {
            backgroundColor: bgColor,
            borderColor: borderColor,
            "--primary": bgColor,
            // boxShadow: `0 0 20px ${glowColor}, 0 4px 15px rgba(0,0,0,0.1)`,
          } as React.CSSProperties
        }
        {...animationProps}
        {...props}
      >
        <span
          style={{
            color: textColor,
            maskImage: `linear-gradient(-75deg, ${primaryShimmer} calc(var(--x) + 10%), transparent calc(var(--x) + 20%), ${primaryShimmer} calc(var(--x) + 40%), transparent calc(var(--x) + 50%), ${primaryShimmer} calc(var(--x) + 90%))`,
            WebkitMaskImage: `linear-gradient(-75deg, ${primaryShimmer} calc(var(--x) + 10%), transparent calc(var(--x) + 20%), ${primaryShimmer} calc(var(--x) + 40%), transparent calc(var(--x) + 50%), ${primaryShimmer} calc(var(--x) + 90%))`,
          }}
          className="relative z-20"
        >
          {children}
        </span>

        <span
          style={{
            mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude, linear-gradient(rgb(0,0,0), rgb(0,0,0))",
            WebkitMask:
              "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude, linear-gradient(rgb(0,0,0), rgb(0,0,0))",
            backgroundImage: `linear-gradient(-75deg, ${primaryShimmer}/20% calc(var(--x)+10%), ${primaryShimmer}/80% calc(var(--x)+20%), ${primaryShimmer}/100% calc(var(--x)+25%), ${primaryShimmer}/80% calc(var(--x)+30%), ${primaryShimmer}/20% calc(var(--x)+90%))`,
          }}
          className="absolute inset-0 z-10 block rounded-[inherit] p-px"
        />

        <span
          style={{
            mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude, linear-gradient(rgb(0,0,0), rgb(0,0,0))",
            WebkitMask:
              "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude, linear-gradient(rgb(0,0,0), rgb(0,0,0))",
            backgroundImage: `linear-gradient(-45deg, transparent calc(var(--y)+15%), ${secondaryShimmer}/60% calc(var(--y)+25%), ${secondaryShimmer}/80% calc(var(--y)+35%), ${secondaryShimmer}/60% calc(var(--y)+45%), transparent calc(var(--y)+85%))`,
          }}
          className="absolute inset-0 z-5 block rounded-[inherit] p-px"
        />

        <span
          style={{
            mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude, linear-gradient(rgb(0,0,0), rgb(0,0,0))",
            WebkitMask:
              "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude, linear-gradient(rgb(0,0,0), rgb(0,0,0))",
            backgroundImage: `radial-gradient(ellipse at calc(var(--x) + 30%) calc(var(--y) + 30%), ${accentShimmer}/70% 0%, transparent 50%), radial-gradient(ellipse at calc(var(--x) + 70%) calc(var(--y) + 70%), ${accentShimmer}/50% 0%, transparent 40%)`,
          }}
          className="absolute inset-0 z-5 block rounded-[inherit] p-px"
        />

        <span
          className="absolute inset-0 rounded-[inherit] border-2 border-transparent"
          style={{
            background: `linear-gradient(-75deg, transparent calc(var(--x)+15%), ${primaryShimmer}/30% calc(var(--x)+25%), transparent calc(var(--x)+35%)) border-box`,
            mask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
            WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
            maskComposite: "xor",
            WebkitMaskComposite: "xor",
          }}
        />
      </motion.button>
    )
  },
)

ShinyButton.displayName = "ShinyButton"
