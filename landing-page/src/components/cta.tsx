"use client"

import { motion } from "framer-motion"
import { ArrowRight, Clock, Users, TrendingUp } from "lucide-react"

interface CTASectionProps {
    theme?: "white" | "black"
}

export default function CTASection({ theme = "white" }: CTASectionProps) {
    const isWhiteTheme = theme === "white"

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    }



    return (
        <motion.section
            className={`transition-colors duration-500 px-4 sm:px-6 lg:px-8 xl:px-12 py-10 md:py-20 w-full  ${isWhiteTheme
                ? "bg-gradient-to-br from-[#f8f1f3] via-pink-50 to-rose-50"
                : "bg-gradient-to-br from-gray-900 via-gray-800 to-black"
                }`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <div className=" mx-auto text-center">
                <motion.div variants={itemVariants} className="mb-4">
                    <div className="relative rounded-lg p-6 bg-[#0000000d] overflow-hidden">
                        <img
                            src="/long2.png"
                            alt="Logo"
                            className="absolute inset-0 w-full h-full object-contain opacity-5 pointer-events-none"
                        />

                        <div className="relative z-10 mb-2">
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-wider opacity-90 inter leading-relaxed font-black mb-2 text-center">
                                Ready to Build Your Content Growth Machine?
                            </p>
                            <p className="inter text-sm sm:text-base md:text-lg italic leading-relaxed">
                                Join the program and start turning your views into predictable income with just 2 hours of content
                                creation per week.
                            </p>
                        </div>
                        <motion.button
                            className={`
              px-8
              py-4 
              text-lg sm:text-xl text-white archivo
              font-black archivo tracking-wider uppercase
              rounded-lg transition-all duration-300
              bg-[#00e13c]
              shadow-xl hover:shadow-2xl
              transform-gpu
            `}
                            whileHover={{
                                scale: 1.05,
                                y: -4,
                                boxShadow: theme === "black" ? "0 20px 40px rgba(255,255,255,0.2)" : "0 20px 40px rgba(219,39,119,0.3)",
                                transition: { duration: 0.2, ease: "easeOut" },
                            }}
                            whileTap={{
                                scale: 0.95,
                                transition: { duration: 0.1 },
                            }}
                            onClick={() => console.log("Join Now clicked!")}
                        >
                            Join Now
                        </motion.button>
                    </div>
                </motion.div>

                <div>
                    <p className="doner">
                        Questions? Email us at{" "}
                        <a href="mailto:vivek@10xgrowth.club" className="underline text-green-600 hover:text-blue-600">
                            vivek@10xgrowth.club
                        </a>
                    </p>
                </div>

            </div>
        </motion.section>
    )
}
