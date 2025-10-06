import React from 'react'
import { motion, Variants, easeOut } from "framer-motion";





const ProgramSection: React.FC = ({  }) => {
    const projects = [
        {
            icon: "",
            title: "Foundation & Clarity",
            subtitle: "",
            description:
                "We start by building the right foundation. Without clarity, everything else falls apart.",
            point: [
                "1:1 Strategy Calls: Bi-weekly private sessions with personalized roadmap",
                "10x Productivity Blueprint — Simple system to 10x your growth",
                "Niche & Audience Clarity - Get crystal clear on your ideal audience",
                "Create content in just 2 hours per week",
                "Content Repurposing System - Turn 1 video into multiples posts and content",
                "Channel Positioning"
            ],
            outcome: "Get clear on your niche, audience, and brand. Learn to make 1 YouTube video and 4 Instagram videos in 2 hours a week—and repurpose them into posts and emails to stay consistent without stress.",

            color: "#BBACAF",
        },
        {
            icon: "",
            title: "Growth Engines",
            subtitle: "Create Content That Gets Clicks & Keeps Viewers Watching",
            description:
                "",
            point: [
                "Proven Rules for Thumbnails That Get Clicked",

                "AI Thumbnails Made Simple",
                "How to Create Hooks People Can't Ignore",
                "The Script Analysis Method for Maximum Views",
                "Winning Script Frameworks Built to Hook & Hold Attention",

                "How to Write Scripts & Story Formulas That Always Hook Viewers"

            ],
            outcome: "Learn to create thumbnails that grab attention and write hooks, scripts, and stories that keep viewers watching.",
            color: "#BBACAF",
        },
        {
            icon: "",
            title: "Execution & Scaling",
            subtitle: "",
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
            subtitle: "",
            description:
                "Views are great, but money pays the bills. Learn how to turn your audience into consistent revenue.",
            point: [
                "How to Make Money With YouTube & Instagram",
                "How to Create an Irresistible Offer Your Audience Can't Refuse",
                "Pricing Strategies That Work: Low-ticket to high-ticket",
                "Market Analysis: Uncover What Your Audience Truly Wants to Buy",
            ],
            outcome: "A clear offer and pricing strategy for both low and high-ticket programs—built to attract your audience and turn viewers into loyal customers.",

            color: "#BBACAF",
        },
        {
            icon: "",
            title: "The Funnel System",
            subtitle: "Turn views into sales on autopilot",
            description:
                "",
            point: [
                "High-Converting Sales Pages - Copy + design secrets",
                "YouTube & Instagram Sales Funnel Step-by-step",
                "Video Sales Letters (VSLs) - Sell directly through YouTube",
                "Complete Email Marketing System - Nurture & convert automatically",
                "Lead Magnet System - Build your list while you sleep",
                "Launch Systems for low-ticket & high-ticket products",
                "Discover the best tools to save time & money to grow your personal brand efficiently."
            ],
            outcome: "A repeatable sales system built around your content—where every video feeds your YouTube, Instagram, and email funnels to grow your business.",
            color: "#BBACAF",
        },
    ];

    return (
        <motion.section
            className={`transition-colors duration-500 px-4 sm:px-6 lg:px-8 text-black xl:px-12 py-10 md:pt-20 w-full bg-[#f8f1f3] text-black"`}

          
        
        >
            <motion.h2
                className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl uppercase tracking-wider doner font-black pb-10"
               
            >
                Program Details
            </motion.h2>
            <motion.p
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-wider opacity-90 doner leading-relaxed  font-black mb-4 lg:mb-6 text-left"
            >
                A step-by-step growth system broken down into 5 phases that takes you from confused creator to profitable business owner
            </motion.p>
            <div className="mx-auto max-w-7xl">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="bg-white  rounded-lg p-6 transition-shadow cursor-pointer mb-10"
                        whileHover={{
                            y: -8,
                            scale: 1.03,
                            boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                            transition: { duration: 0.3, ease: "easeOut" }
                        }}
                    >
                        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl inter  tracking-wider font-black mb-6 lg:mb-8 text-left text-green-600">
                            Phase {index + 1}: {project.title}
                        </h2>
                        <h3
                            className="text-sm sm:text-base text-black md:text-lg lg:text-xl inter font-semibold opacity-90 leading-relaxed text-left"
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