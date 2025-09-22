import React from "react";
import { motion, Variants, easeOut } from "framer-motion";

interface IncludeSectionProps {
    theme: "black" | "white";
}

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: easeOut }
    },
};

const IncludeSection: React.FC<IncludeSectionProps> = ({ theme }) => {
    const features = [
        {
            title: "Bi-weekly 1:1 strategy and planning calls — ",
            description: "Giving you the guidance and accountability you need to stay on track, so you never feel alone in the process.",
        },
        {
            title: "Complete Audit",
            description: "Of your personal brand platforms, offers, sales funnel, business, and bottlenecks",
        },
        {
            title: "Custom Funnel Creation",
            description: "Including YouTube funnel, Instagram sales funnel, and email marketing funnel",
        },
        {
            title: "Weekly Training Calls",
            description: "Surround yourself with other creators and entrepreneurs scaling to $30K–$100K/month. Ask questions, get feedback, and tap into proven templates, wins, and behind-the-scenes insights.",
        },
        {
            title: "Private Expert Community",
            description: "A space to connect where creators come together to exchange strategies, share wins, and support each other’s growth.",
        },
        {
            title: "Direct Support & Feedback from Vivek",
            description: "You’ll have access to me for support inside the community. When something breaks or stalls, I will help you fix it — fast.",
        },
        {
            title: "Bonus resources:",
            description: "Done-for-you resources — checklists, templates, and AI prompts (valued at $1,800): so you can execute with clarity and speed.",
        },
    ];

    return (
        <motion.section
            className={`transition-colors duration-500 px-4 sm:px-6 lg:px-8 xl:px-12 py-10 md:py-20 w-full`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <motion.h2
                className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-black uppercase tracking-wider doner font-black pb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                What&apos;s Included


            </motion.h2>
            <motion.p
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl  text-black  tracking-wider opacity-90 doner leading-relaxed      font-black mb-4 lg:mb-6 text-left"
                variants={itemVariants}
            >
                Everything you need to build a complete growth system that turns views into predictable income

            </motion.p>
            <motion.div
                className="flex  items-start"
                variants={containerVariants}
            >
                {/* Left Column: Subheading */}

                <motion.div className="grid grid-cols-1 lg:grid-cols-4 gap-2 items-start" variants={containerVariants}>
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-white text-black  rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow cursor-pointer  min-h-[200px] sm:min-h-[220px] md:min-h-[350px]"
                            variants={itemVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.03, 
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
                        >
                            <h3 className="text-sm sm:text-base md:text-lg  doner  tracking-wider font-black mb-6 lg:mb-8 text-left"
                            >{feature.title}</h3>
                            <p  className={`
                            inter text-sm sm:text-base md:text-lg lg:text-xl 
                            leading-relaxed
                            ${theme === "black" ? "text-gray-300" : "text-gray-700"}
                        `}>{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

        </motion.section>
    );
};

export default IncludeSection;
