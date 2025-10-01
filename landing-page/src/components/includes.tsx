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
            title: "Bi-Weekly 1:1 Strategy & Planning Calls — ",
            description: "Get private sessions, personalized guidance and accountability to keep you focused, aligned, and on track, so you always know your next move and never feel like you’re doing it alone.",
        },
        {
            title: "Complete Audit",
            description: "Of your personal brand platforms, offers, sales funnel, business.",
        },
        {
            title: "Custom Funnel Creation",
            description: "Including YouTube sales funnel, Instagram sales funnel, and email marketing funnel",
        },
       
        {
            title: "Private Expert Community",
            description: "Join a private space where  creators and entrepreneurs connect to exchange strategies, share wins, and support each other’s journey, all with the shared goal of scaling to $30K–$100K/month.",
        },
        {
            title: "Direct Support & Feedback from Vivek",
            description: "You’ll have access to me for support inside the community. When something breaks or stalls, I will help you fix it — fast.",
        },
        {
            title: "Bonus resources:",
            description: "Done-for-you resources — checklists, templates, and AI prompts (valued at $1,800): so you can execute with clarity and speed.",
        },
        {
            title: "Weekly Training Calls",
            description: "Level up every week with live training sessions built to help creators and entrepreneurs grow their personal brand and scale their business to $30K–$100K/month. Learn proven strategies, master high-impact skills, and plug into ready-to-use templates. Get answers to your questions, personalized feedback, and behind-the-scenes insights to accelerate your growth.",
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
