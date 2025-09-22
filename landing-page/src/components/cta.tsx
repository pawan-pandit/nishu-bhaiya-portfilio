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

    const features = [
        {
            icon: Clock,
            title: "Limited Time",
            description: "Spots are very limited for personalized attention",
        },
        {
            icon: Users,
            title: "Done-With-You",
            description: "Not just a course - real support and accountability",
        },
        {
            icon: TrendingUp,
            title: "Proven System",
            description: "Tested with 150+ creators and entrepreneurs",
        },
    ]

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
                {/* Header */}
                <motion.div variants={itemVariants} className="mb-12">

                    <motion.h2
                        className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl uppercase tracking-wider doner font-black pb-10"
                        variants={itemVariants}
                    >
                        Your Next Step
                    </motion.h2>
                    <motion.p
                        className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-wider opacity-90 doner leading-relaxed  font-black mb-4 lg:mb-6 text-center"
                        variants={itemVariants}
                    >
                        You don&apos;t need another random content tip.
                    </motion.p>




                    <p className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-wider opacity-90 doner font-semibold ${isWhiteTheme ? "text-rose-600" : "text-rose-400"}`}>
                        You need a system that grows and monetizes.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4  mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-105 ${isWhiteTheme
                                    ? "bg-gradient-to-br from-white to-pink-50 border-pink-200 hover:shadow-xl hover:shadow-pink-100"
                                    : "bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:shadow-xl hover:shadow-gray-900/50"
                                }`}
                            whileHover={{ y: -5 }}
                        >
                            <feature.icon className={`w-12 h-12 mx-auto mb-4 ${isWhiteTheme ? "text-rose-500" : "text-rose-400"}`} />
                            <h3 className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-wider opacity-90 inter leading-relaxed font-black mb-2 ${isWhiteTheme ? "text-gray-900" : "text-white"}`}>
                                {feature.title}
                            </h3>
                            <p className={`inter text-sm sm:text-base md:text-lg  leading-relaxed ${isWhiteTheme ? "text-gray-600" : "text-gray-400"}`}>{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>




                <motion.div variants={itemVariants} className="mb-4">
          <div className="relative rounded-lg p-6 bg-[#0000000d] overflow-hidden">
            {/* Background Logo */}
            <img
              src="/long2.png" // ← replace with your logo path
              alt="Logo"
              className="absolute inset-0 w-full h-full object-contain opacity-5 pointer-events-none"
            />

            {/* Content */}
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
              font-black doner tracking-wider uppercase
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
    <a href="mailto:contact@creatorwealthsystem.com" className="underline text-green-600 hover:text-blue-600">
      contact@creatorwealthsystem.com
    </a>
  </p>
</div>

            </div>
        </motion.section>
    )
}
