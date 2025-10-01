"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Timeline } from "./ui/timeline"
import { FC } from "react"

interface ProgramSummarySectionProps {
  id?: string
  className?: string
}

const data = [
  {
    title: "1",
    content: (
      <div>
        <h3 className="font-bold uppercase roboto text-slate-100 flex items-center gap-3 mb-4">
          <span>🔥</span> Phase 1: Foundation & Clarity
        </h3>
        <ul className="list-disc list-inside space-y-2 sm:uppercase text-slate-300 plus font-bold text-sm md:text-base tracking-wide">
          <li>Niche, audience & brand clarity</li>
          <li>Personalized growth roadmap (1:1 strategy calls)</li>
          <li>Create content in just 2 hours/week</li>
          <li>Repurpose one video across all platforms</li>
        </ul>
      </div>
    ),
    fullDetails: (
      <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed">
        <p>
          ✅ 1:1 Strategy Calls → Bi-weekly private sessions where you get a personalized roadmap 
          and strategy for YouTube, Instagram, and your business growth.
        </p>
        <p>
          ✅ The 10x Productivity Blueprint → A simple system to 10x your growth and build your 
          brand and business — without wasting time.
        </p>
        <p>
          ✅ Create content in just 2 hours per week → Learn how to go from idea → title → script → shoot 
          in only 2 hours.
        </p>
        <p>
          ✅ Content Repurposing System → Turn 1 video into content for Instagram, LinkedIn, Shorts & Reels.
        </p>
        <p>
          ✅ Channel Positioning + Niche Clarity → Finally know who you’re speaking to.
        </p>
        <p>
          ✅ Follow-up 1:1 Strategy Call → Refine your plan, stay accountable, and get a growth roadmap 
          with complete clarity.
        </p>
        <p>
          <strong>Outcome:</strong> Clarity on your niche, audience, and brand. A system to create and repurpose 
          content in just 2 hours a week, with accountability to grow your business.
        </p>
      </div>
    ),
  },
  {
    title: "2",
    content: (
      <div>
        <h3 className="uppercase font-bold text-slate-100 flex items-center gap-3 mb-4">
          <span>📈</span> Phase 2: Growth Engines
        </h3>
        <ul className="list-disc list-inside sm:uppercase space-y-2 text-slate-300 text-sm md:text-base tracking-wide">
          <li>Thumbnails & hooks that get clicks</li>
          <li>Storytelling & scriptwriting to keep attention</li>
          <li>Proven frameworks for maximum views</li>
        </ul>
      </div>
    ),
    fullDetails: (
      <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed">
        <p>
          🔑 <strong>Thumbnails & Hooks (Get Clicks)</strong>:
          <br />• 10 Proven Rules for Thumbnails That Get Clicked
          <br />• AI Thumbnails Made Simple
          <br />• Hooks People Can’t Ignore
        </p>
        <p>
          🎬 <strong>Scripts & Storytelling (Keep Attention)</strong>:
          <br />• The Script Analysis Method → Write for maximum views
          <br />• Winning Script Frameworks → Hook & hold attention
          <br />• Story Formulas That Always Work
          <br />• Metaphors, Setups & Payoffs → Tricks to keep viewers engaged
        </p>
        <p>
          <strong>Outcome:</strong> Master thumbnails, hooks, and storytelling 
          so your content gets clicked and watched all the way through.
        </p>
      </div>
    ),
  },
  {
    title: "3",
    content: (
      <div>
        <h3 className="uppercase font-bold text-slate-100 flex items-center gap-3 mb-4">
          <span>⚡</span> Phase 3: Execution & Scaling
        </h3>
        <ul className="list-disc list-inside sm:uppercase space-y-2 text-slate-300 text-sm md:text-base tracking-wide">
          <li>Streamlined video planning system</li>
          <li>Filming prep & publishing workflow</li>
          <li>Repurposing system to multiply content</li>
        </ul>
      </div>
    ),
    fullDetails: (
      <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed">
        <p>
          🚀 <strong>What you’ll learn:</strong>
          <br />• The Secret Formula to Planning Videos That Perform
          <br />• Visual Storytelling That Gets Views
          <br />• The Filming Prep Checklist → Avoid disasters before you hit record
          <br />• The Repurposing Workflow → 1 video = Instagram, LinkedIn, Shorts, Reels & more
        </p>
        <p>
          <strong>Outcome:</strong> A streamlined system to plan, film, and publish consistently 
          — without stress, wasted effort, or endless retakes.
        </p>
      </div>
    ),
  },
  {
    title: "4",
    content: (
      <div>
        <h3 className="uppercase font-bold text-slate-100 flex items-center gap-3 mb-4">
          <span>💰</span> Phase 4: Offer & Pricing Mastery
        </h3>
        <ul className="list-disc list-inside sm:uppercase space-y-2 text-slate-300 text-sm md:text-base tracking-wide">
          <li>Create irresistible offers</li>
          <li>Pricing strategies for low-ticket & high-ticket</li>
          <li>Market research to know what people want</li>
        </ul>
      </div>
    ),
    fullDetails: (
      <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed">
        <p>
          💡 <strong>What you’ll master:</strong>
          <br />• How to Make Money With YouTube & Instagram
          <br />• How to Create an Irresistible Offer Your Audience Can’t Refuse
          <br />• Pricing Strategies → Low-ticket to high-ticket
          <br />• Market Research → Discover what people actually want to buy
        </p>
        <p>
          <strong>Outcome:</strong> You’ll leave with a clear offer + pricing 
          strategy that matches your audience and turns subscribers into paying customers.
        </p>
      </div>
    ),
  },
  {
    title: "5",
    content: (
      <div>
        <h3 className="uppercase font-bold text-slate-100 flex items-center gap-3 mb-4">
          <span>🔗</span> Phase 5: The Funnel System
        </h3>
        <ul className="list-disc sm:uppercase list-inside space-y-2 text-slate-300 text-sm md:text-base tracking-wide">
          <li>High-converting sales pages & VSLs</li>
          <li>YouTube & Instagram funnel setup</li>
          <li>Email & Instagram automation systems</li>
          <li>Launch playbooks for consistent sales</li>
        </ul>
      </div>
    ),
    fullDetails: (
      <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed">
        <p>
          🔗 <strong>What you’ll build:</strong>
          <br />• High-Converting Sales Pages → Copy + design secrets
          <br />• YouTube & Instagram Funnels → Step-by-step view → lead → customer
          <br />• Video Sales Letters (VSLs) → Sell directly through YouTube
          <br />• Email Marketing Systems → Nurture & convert leads automatically
          <br />• Lead Magnet Systems → Build your list while you sleep
          <br />• Launch Systems → For both low-ticket & high-ticket offers
          <br />• Instagram Automations → Convert leads via DMs & content
        </p>
        <p>
          <strong>Outcome:</strong> Walk away with a repeatable sales machine built 
          around your content. Every video/post fuels predictable growth and income.
        </p>
      </div>
    ),
  },
]

const ProgramSummarySection: FC<ProgramSummarySectionProps> = ({ id, className }) => {
  return (
    <section
      id={id}
      className={`relative py-20 px-6 border-t-[0.1px] border-green-100 overflow-hidden ${className || ""}`}
    >
      <div className="absolute inset-0 -z-10 bg-[#141414]" />

      <div className="absolute inset-0 -z-0 flex items-center justify-center opacity-5">
        <Image
          src="/logo1.svg"
          alt="Background Logo"
          width={600}
          height={600}
          className="w-[500px] md:w-[700px] lg:w-[900px] object-cover"
        />
      </div>

      <div className="max-w-[1220px] mx-auto relative">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-bold uppercase text-slate-100 anton leading-tight tracking-wider mb-10 text-left"
        >
          🚀 The 5 Phases of The Creator Wealth System
        </motion.h2>

        <div className="relative w-full overflow-clip">
          <Timeline data={data} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-slate-300 italic text-sm sm:text-lg font-extralight text-center max-w-4xl mx-auto"
        >
          👉 By the end, you’ll have a proven system that grows your audience,
          builds offers that sell, and turns views into predictable clients & income.
        </motion.div>
      </div>
    </section>
  )
}

export default ProgramSummarySection
