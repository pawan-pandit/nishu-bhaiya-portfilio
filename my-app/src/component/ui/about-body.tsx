"use client";
import React, { useRef, useState, useEffect } from "react";
import { useMotionValueEvent, useScroll, useInView } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { cn } from "../../../lib/utils";
import Link from "next/link";

const content = [
  {
    title: "THE BREAKTHROUGH THAT TOOK ME FROM CHARGING $200 PER CLIENT TO ",
    description: "",
    content: (
      <div className="flex items-center justify-center text-white relative w-full h-[400px] md:h-[600px] lg:h-[650px] xl:h-screen">
        <Image src="/vivek.jpeg" alt="hero" fill style={{ objectFit: 'cover' }} className="" />
      </div>
    ),
  },

];


interface StickyContent {
  title: string;
  description: string;
  content?: React.ReactNode;
}
interface StickyScrollProps {
  content: StickyContent[];
  contentClassName?: string;
}
export function OriginStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="">
      {isInView && <StickyScroll content={content} />}
    </div>
  );
}



export const StickyScroll = ({ content, contentClassName }: StickyScrollProps) => {
  const [activeCard, setActiveCard] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0%", "end 20%"] });
  const cardLength = content.length;

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);

    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <div ref={ref} style={{ borderRadius: 'clamp(20px, 2.604vw, 2.604vw)' }} className="  flex flex-col md:flex-row justify-center relative    gap-2  pl-6  mx-auto ">
      <div className="w-full md:w-[50%] xl:w-[55%] relative flex items-start">
        <div className=" w-full py-10">
          {content.map((item, index) => (
            <div key={item.title + index} className="text-white" style={{ minHeight: isSmallScreen ? 'auto' : '40vh' }} >
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index || isSmallScreen ? 1 : 0.3 }}
                className="font-bold text-slate-100 anton leading-tight tracking-wider"
              >
I help <span className="font-semibold text-gray-300">creators, coaches, and entrepreneurs</span> grow their personal brand on
                    <span className="font-bold text-green-400">YouTube & Instagram</span>, craft irresistible offers, and build funnels that bring in clients on repeat.
                             </motion.h2>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index || isSmallScreen ? 1 : 0.3 }}
                className="tracking-wider plus text-xs md:text-sm lg:text-lg text-slate-300 mt-2 mr-2 space-y-4  my-6"
              >
                <p>{item.description}</p>

                <div className="space-y-6 text-gray-200 leading-relaxed">
                  

                  <p className="font-semibold text-lg text-white">Over the last few years, I’ve:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Helped scale a Los Angeles-based ed-tech company <span className="italic  text-green-400">(TTP)</span> from <strong className="text-green-400 font-bold">zero → $12M</strong> in 4.5 years.</li>
                    <li>Partnered with <strong className="text-green-400 ">Nolan Molt</strong> (ex-Think Media) to grow a business from <strong className="text-green-400">$25K → $400K+</strong>.</li>
                    <li>Worked directly with <strong>150+ creators and entrepreneurs</strong>, helping them grow their audience and turn it into real revenue.</li>
                  </ul>

                  <p>
                    I’ve also invested <strong className="text-green-400">10,000+ hours</strong> and over <strong className="text-green-400">$85,000</strong> of my own money learning from the best in the world —
                    including <span className="text-green-400 font-bold">Ed from Film Booth, Think Media, Alex Hormozi, Nolan Molt, Dan Martell, Iman Gadzhi, Marcus Jones,</span> and more.
                  </p>

                  <p className="text-gray-300 ">
                    👉 Everything I’ve learned, tested, failed at, and mastered has been distilled into<strong className="text-green-400"> one proven growth system </strong> — and I’ll build it with you.
                  </p>

                  <p>
                    Unlike most coaches who sell you a “course” and leave you on your own, <strong>I work side by side with you</strong> to install the exact systems that:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Grow your audience consistently</li>
                    <li>Create offers people actually want</li>
                    <li>Set up funnels that deliver clients on repeat</li>
                  </ul>

                  <p className="italic text-gray-300">You don’t need another “content hack.”</p>
                  <p className="font-bold sm:text-lg text-white">
                    You need someone who’s already walked the path — and can walk it with you. <br />
                    That’s exactly what I do.
                  </p>
                </div>


              </motion.div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index || isSmallScreen ? 1 : 0.3 }} className="text-slate-300 py-6 ">
                {/* <a
                  className=" bg-white group relative inline-block  anton tracking-wider text-white font-medium uppercase  rounded-md border border-white hover:border-green-500 overflow-hidden  px-6 py-2 sm:px-8 sm:py-3 "
                  href="/services"
                >
                  <span className="absolute inset-y-0 left-0 w-[1px] bg-green-400 transition-all group-hover:w-full "></span>
                  <span className="flex relative  text-black anton tracking-wider font-medium uppercase  transition-colors group-hover:text-black">
                    buy now  <ChevronRight size={20} />
                  </span>
                </a> */}
                <Link
                href="https://forms.gle/nqDF4TBXLnRYuuFRA"
                className=" px-6 py-2  anton tracking-wider rounded-md border border-white text-white font-medium uppercase 
               transition-all duration-300 ease-in-out 
               transform hover:scale-110 hover:-rotate-2 
               hover:backdrop-blur-md hover:bg-white/10"
              >
                Apply Now
              </Link>              </motion.button>
              {isSmallScreen && (
                <div className="mt-6 w-full  overflow-hidden">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {!isSmallScreen && (
        <div
          className={cn(
            "w-full md:w-[50%] h-[300px] md:h-fit  bg-white sticky overflow-hidden ",
            contentClassName
          )}
          style={{ top: '10vh' }}
        >
          {content[activeCard].content ?? null}
        </div>
      )}
    </div>
  );
};