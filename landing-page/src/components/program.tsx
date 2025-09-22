import React from 'react'
import { motion, Variants, easeOut } from "framer-motion";

interface ProgramSectionProps {
    theme: "black" | "white"
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

const ProgramSection: React.FC<ProgramSectionProps> = ({ theme }) => {
    const projects = [
        {
            icon: "",
            title: "Foundation & Clarity",
            subtitle: "Set Your Channel & Brand Up for Success",
            description:
                "We start by building the right foundation. Without clarity, everything else falls apart.",
            point: [
                "1:1 Strategy Calls - Bi-weekly private sessions with personalized roadmap",
                "The 10x Productivity Blueprint - Simple system to 10x your growth",
                "Niche & Audience Clarity - Get crystal clear on your ideal audience",
                "Create content in just 2 hours per week",
                "Content Repurposing System - Turn 1 video into multiple pieces",
                "Channel Positioning + Niche Clarity"
            ],
            outcome: "Clarity on your niche, audience, and brand. A simple system to create content in 2 hours a week.",
            color: "#BBACAF",
        },
        {
            icon: "",
            title: "Growth Engines",
            subtitle: "Create Content That Gets Clicks & Keeps Viewers Watching",
            description:
                "This is where growth happens. You'll master the two biggest levers that decide your reach.",
            point: [
                "10 Proven Rules for Thumbnails That Get Clicked",
                "AI Thumbnails Made Simple",
                "How to Create Hooks People Can't Ignore",
                "The Script Analysis Method for Maximum Views",
                "Winning Script Frameworks Built to Hook & Hold Attention",
                "Story Formulas That Always Work Online"
            ],
            outcome: "Learn to make thumbnails that grab attention and write hooks, scripts and stories that keep people watching.",
            color: "#BBACAF",
        },
        {
            icon: "",
            title: "Execution & Scaling",
            subtitle: "From Planning to Publishing Without the Chaos",
            description:
                "Most creators waste 5x more time than needed because their process is messy. I'll fix that.",
            point: [
                "The Secret Formula to Planning Videos That Perform",
                "Visual Storytelling That Gets Views",
                "The Filming Prep Checklist",
                "The Repurposing Workflow - 1 video = multiple platforms",
            ],
            outcome: "Streamlined system to plan, film, and publish consistently without stress or wasted effort.",
            color: "#BBACAF",
        },
        {
            icon: "",
            title: "Offer & Pricing Mastery",
            subtitle: "Turn views into predictable monthly income",
            description:
                "Views are great, but money pays the bills. Learn how to turn your audience into consistent revenue.",
            point: [
                "How to Make Money With YouTube & Instagram",
                "How to Create an Irresistible Offer Your Audience Can't Refuse",
                "Pricing Strategies That Work - Low-ticket to high-ticket",
                "Market Research: Discover What People Actually Want to Buy",
            ],
            outcome: "Clear offer + pricing strategy that matches your audience and turns subscribers into paying customers.",
            color: "#BBACAF",
        },
        {
            icon: "",
            title: "The Funnel System",
            subtitle: "Turn views into sales on autopilot",
            description:
                "Plug your audience growth into a complete funnel that converts viewers into paying customers.",
            point: [
                "High-Converting Sales Pages - Copy + design secrets",
                "YouTube & Instagram Sales Funnel Step-by-step",
                "Video Sales Letters (VSLs) - Sell directly through YouTube",
                "Complete Email Marketing System - Nurture & convert automatically",
                "Lead Magnet System - Build your list while you sleep",
                "Launch Systems for low-ticket & high-ticket products"
            ],
            outcome: "A repeatable sales machine built around your content. Every video becomes part of a funnel that grows your business.",
            color: "#BBACAF",
        },
    ];

    return (
        <motion.section
            className={`transition-colors duration-500 px-4 sm:px-6 lg:px-8 xl:px-12 py-10 md:py-20 w-full ${theme === "black" ? "bg-black text-white" : "bg-[#f8f1f3] text-black"}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <motion.h2
                className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl uppercase tracking-wider doner font-black pb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                Program Details
            </motion.h2>
            <motion.p
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-wider opacity-90 doner leading-relaxed  font-black mb-4 lg:mb-6 text-left"
                variants={itemVariants}
            >
                A step-by-step system broken down into 5 phases that takes you from confused creator to profitable business owner
            </motion.p>
            <div className="mx-auto">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="bg-white  rounded-lg p-6 transition-shadow cursor-pointer mb-10"
                        variants={itemVariants}
                        whileHover={{
                            y: -8,
                            scale: 1.03,
                            boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                            transition: { duration: 0.3, ease: "easeOut" }
                        }}
                    >
                        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl doner tracking-wider font-black mb-6 lg:mb-8 text-left text-green-600">
                            Phase {index + 1}: {project.title}
                        </h2>
                        <h3
                            className="text-sm sm:text-base md:text-lg lg:text-xl inter font-semibold opacity-90 leading-relaxed text-left"
                            style={{ color: project.color }}
                        >
                            {project.subtitle}
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl inter font-semibold opacity-90 leading-relaxed text-left mb-6">
                            {project.description}
                        </p>
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-1/2">
                                <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl doner tracking-wider font-semibold mb-6 lg:mb-8 text-left">
                                    What you&apos;ll get:
                                </h4>
                                <ul className="list-disc pl-5 inter text-sm md:text-lg opacity-90 leading-relaxed">
                                    {project.point.map((item, idx) => (
                                        <li key={idx} className="mb-2">{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="md:w-1/2 rounded-lg p-6 bg-[#0000000d]">
                                <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl doner tracking-wider font-semibold mb-6 lg:mb-8 text-left">
                                    Outcome:
                                </h4>
                                <p className="list-disc pl-5 inter text-sm md:text-lg opacity-90 leading-relaxed">{project.outcome}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    )
}

export default ProgramSection