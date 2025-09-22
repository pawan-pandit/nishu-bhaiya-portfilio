import React from "react";
import { motion, Variants, easeOut } from "framer-motion";

interface AboutSectionProps {
    theme: "black" | "white";
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.25 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: easeOut },
    },
};

const AboutSection: React.FC<AboutSectionProps> = ({ theme }) => {
    return (
        <motion.section
            className={`transition-colors duration-500  px-4 sm:px-6 lg:px-8 xl:px-12 py-10 md:py-20 w-full ${theme === "black" ? "bg-black text-white" : "bg-[#f8f1f3] text-black"
                }`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <motion.h2
                className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl uppercase  tracking-wider doner font-black  mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                About me
            </motion.h2>
            <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Side Image */}
                <motion.div variants={itemVariants} className="flex justify-center">
                    <img
                        src='/founder.png'
                        alt="About section"
                        className="rounded-lg shadow-lg max-w-full h-auto"
                    />
                </motion.div>

                {/* Right Side Content */}
                <motion.div
                    className="flex flex-col space-y-6 text-left"
                    variants={containerVariants}
                >


                    <motion.p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl  tracking-wider opacity-90 doner leading-relaxed   uppercase   font-black mb-4 lg:mb-6 text-left"
                        variants={itemVariants}>
                        I help creators, coaches, and entrepreneurs grow their personal brand
                        on <strong className="text-green-600">YouTube & Instagram</strong>, craft offers that make money,
                        and build funnels that bring in clients on repeat.
                    </motion.p>

                    <motion.h3
                        className="text-sm sm:text-base md:text-lg lg:text-xl inter font-semibold opacity-90 leading-relaxed text-left mb-6"
                        variants={itemVariants}
                    >
                        Over the last few years, I’ve:
                    </motion.h3>

                    <motion.ul
                        className="space-y-3 list-disc pl-5 inter text-sm md:text-lg opacity-90 leading-relaxed"
                        variants={containerVariants}
                    >
                        <motion.li variants={itemVariants}>
                            Helped scale a Los Angeles-based ed-tech company  <strong>(TTP)</strong> with my team to <strong>$12 Million in Revenue in 4.5 years</strong>
                        </motion.li>
                        <motion.li variants={itemVariants}>
                            I was a business partner of <strong className="text-green-600">Nolan Molt</strong> (former Think Media Creative Director), and together we scaled our business to $400K+                        </motion.li>
                        <motion.li variants={itemVariants}>
                            Worked with <strong>150+ creators and entrepreneurs</strong>, helping them grow their personal brand and turn their views into real revenue.                        </motion.li>

                    </motion.ul>

                    <div className="bg-[#0000000d] p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-md">
                        <motion.h3
                            className="text-sm sm:text-base md:text-lg lg:text-xl inter font-semibold opacity-90 leading-relaxed text-left mb-6"
                            variants={itemVariants}
                        >
                            I&apos;ve invested 10,000+ hours and $64,000 of my own money to master YouTube growth, Instagram strategy, offer creation, and funnel building — learning directly from some of the best in the world:
                        </motion.h3>

                        <motion.ul
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 list-none pl-0 inter text-xs sm:text-sm font-semibold opacity-90 leading-relaxed"
                            variants={containerVariants}
                        >
                            <motion.li variants={itemVariants} className="bg-white rounded-lg p-3 shadow hover:shadow-lg transition-shadow">
                                Ed from Film Booth
                            </motion.li>
                            <motion.li variants={itemVariants} className="bg-white rounded-lg p-3 shadow hover:shadow-lg transition-shadow">
                                Ali Abdal
                            </motion.li>
                            <motion.li variants={itemVariants} className="bg-white rounded-lg p-3  shadow hover:shadow-lg transition-shadow">
                                Think Media
                            </motion.li>
                            <motion.li variants={itemVariants} className="bg-white rounded-lg p-3 shadow hover:shadow-lg transition-shadow">
                                Alex Hormozi
                            </motion.li>
                            <motion.li variants={itemVariants} className="bg-white rounded-lg p-3  shadow hover:shadow-lg transition-shadow">
                                Dan Martell
                            </motion.li>

                            <motion.li variants={itemVariants} className="bg-white rounded-lg p-3  shadow hover:shadow-lg transition-shadow">
                                Marcus Jones
                            </motion.li>

                        </motion.ul>
                    </div>

                    <div className="bg-[#0000000d] p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-md">
                        <motion.h3 className="text-sm sm:text-base md:text-lg lg:text-xl inter font-semibold opacity-90 leading-relaxed text-left mb-6"
                            variants={itemVariants}>
                            👉 Everything I&apos;ve learned, tested, failed at, and mastered has been
                            distilled into <strong>one proven growth system </strong>that I’ll build with you.
                        </motion.h3>

                        <motion.h3
                            className="text-sm sm:text-base md:text-lg lg:text-xl inter  opacity-90 leading-relaxed text-left mb-6"
                            variants={itemVariants}
                        >
                            Unlike most coaches who sell you a “course” and leave you on your own, I work <strong>side by side </strong>with you to install the exact systems that:
                        </motion.h3>

                        <motion.ul
                            className="space-y-3 list-disc pl-5 text-xs sm:text-sm inter"
                            variants={containerVariants}
                        >
                            <motion.li variants={itemVariants}>
                                Grow your audience on YouTube & Instagram
                            </motion.li>
                            <motion.li variants={itemVariants}>
                                Create offers that make money for you
                            </motion.li>
                            <motion.li variants={itemVariants}>
                                Set up funnels that deliver clients on repeat
                            </motion.li>
                        </motion.ul>

                    </div>

                    <motion.p className="inter text:sm sm:text-lg font-bold italic ">
                        You don’t need another “content hack.”
                        You need someone who’s already walked the path — and can walk it with you.
                        That’s exactly what I do.

                    </motion.p>


                    <motion.div className="mt-4" variants={itemVariants}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 uppercase archivo tracking-wider rounded-md w-full text-white font-semibold shadow-md transition bg-[#00e13c]"
                        >
                            Join the program now
                        </motion.button>

                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default AboutSection;
