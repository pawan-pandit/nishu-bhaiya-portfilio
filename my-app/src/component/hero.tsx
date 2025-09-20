import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { LinkPreview } from "./ui/link-preview";
import IntroHeader from "./ui/about-header";

interface HeroSectionProps {
  id?: string;
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ id, className }) => {
  return (
    <>
      <section
        id={id}
        className={`relative flex items-center justify-center text-white overflow-hidden ${className}`}
      >
         <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
    {/* <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-green-500/20 rounded-full blur-3xl animate-pulse"></div> */}
    {/* <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-500/20 rounded-full blur-3xl animate-pulse delay-300"></div> */}
  </div>
        <div>
          {/* Content */}
          <div className="relative  z-10 py-10 lg:py-15 max-w-full mx-auto px-6 text-center">
            {/* Glass effect wrapper for text only */}
            <div className="backdrop-blur-2xl bg-white/5 rounded-md px-6 py-3 inline-block mb-6">
              <p className="sm:uppercase tracking-wider plus text-xs md:text-sm text-gray-300">
                for freelancers, agency owners, and creators
              </p>
            </div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="anton text-[40px] sm:text-5xl lg:text-8xl font-bold leading-tight"
            >
              <span className="text-green-500">STOP Chasing Clients.</span> <br />
              START Being the One They Choose.
            </motion.h1>

            {/* Subhead */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-gray-100"
            >
              <h3 className=" max-w-3xl mx-auto font-bold">
                The 3-part funnel system that attracts premium clients, pre-sells your
                expertise, grows your bank account, and increases your project rates by
                2–3x.
              </h3>
              <p className="mt-2 italic text-xs md:text-sm text-gray-400 plus">
                (Trusted by top freelancers and agency owners scaling to $30K–$100K/month)
              </p>
            </motion.div>

            {/* CTA */}
            <motion.a
              href="https://forms.gle/nqDF4TBXLnRYuuFRA"
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 inline-block border text-sm bg-green-600 border-white px-4 sm:px-8 py-2 sm:py-4 rounded-md font-semibold uppercase shadow-lg 
                     transition-all duration-0 hover:bg-green-400 hover:text-black hover:border-green-500 "
            >
              YES, I WANT PREMIUM CLIENTS
            </motion.a>
          </div>

{/* 
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute right-0 lg:bottom-10 xl:bottom-20 w-[70%] lg:max-w-[450px] xl:max-w-[500px] hidden lg:block z-0"
          >
            <Image
              src="/man-removebg-preview.png"
              alt="Man"
              width={700}
              height={500}
              className="object-contain pointer-events-none select-none relative z-10"
            />

            <div className="absolute bottom-0 left-0 w-full h-25  rounded-b-[50%] 
                  bg-gradient-to-t from-white via-white/90 to-transparent 
                  z-20 pointer-events-none" />
                  

            <div className="absolute bottom-0 w-full h-20 bg-white/10     rounded-[50%] z-0" />
          
          </motion.div> */}
        </div>
        
      </section>
    
      {/* <div className="my-4 sm:my-6 max-w-[1220px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center gap-6 py-4 px-6 text-white rounded-2xl shadow-lg backdrop-blur-2xl bg-white/5 w-full">
          <img src="/5-start.svg" alt="5 stars rating" className="w-28 h-auto" />

          <div className="tracking-wider plus text-xs md:text-sm text-gray-100 flex-1 text-center md:text-left">
            “Thanks to Rob’s help, I managed to hit an{" "}
            <LinkPreview url="https://tailwindcss.com" className="relative font-bold text-red-500
             before:absolute before:bottom-0 before:left-0
             before:h-[2px] before:w-0 before:bg-red-500
             before:transition-all before:duration-300 before:ease-out
             hover:before:w-full
             after:absolute after:bottom-0 after:right-0
             after:h-[2px] after:w-0 after:bg-red-500
             after:transition-all after:duration-300 after:ease-in
             group-hover:after:w-full">
              annual revenue of $500K
            </LinkPreview>{" "}
            for the first time!”
          </div>


          <div className="flex items-center gap-3 min-w-[200px]">
            <img
              src="/author.avif"
              alt="Ethan Suero"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="flex flex-col md:flex-row md:gap-2">
              <span className="font-semibold text-gray-100 uppercase tracking-wide text-xs sm:text-sm">
                ETHAN SUERO
              </span>
              <LinkPreview url="https://framer.com/motion" className="font-bold">

                <span className="text-gray-400 text-xs sm:text-sm">ONITNOW.CO</span>
              </LinkPreview>
            </div>
          </div>
        </div>
      </div> */}

    </>
  );
};

export default HeroSection;
