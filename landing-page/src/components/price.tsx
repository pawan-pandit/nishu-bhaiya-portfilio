"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { BorderBeam } from "./ui/border-beam"
import Link from "next/link"
import { MoveRight } from "lucide-react"

export default function PriceSection() {
  const featuresClub = [
    "Bi-weekly 1:1 Strategy & Planning Calls ($2,500)",
    "Complete Audit of Your Brand & Business ($1,000)",
    "Custom Funnel Setup (YouTube, Instagram, Email) ($1500)",
    "Bonus Resources, Checklist, Templates, AI Prompts ($1200)",
    "Weekly Live Group Trainings ($1200)",
    "Private Expert Community ($500)",
    "Direct Support & Feedback from Vivek ($1,200)",

  ]



  return (
    <>
      <div className="w-full bg-black overflow-hidden">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-3 sm:gap-4 md:gap-6 px-3 sm:px-4">
          {/* Left: Logo - fully visible at all sizes */}
          <div className="flex-shrink-0 bg-black ">
            <Image
              src="/money.svg"
              alt="100% Money Back Guarantee"
              width={10}
              height={10}
              className="w-[100px] h-[100px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px] bg-black  lg:w-[100px] lg:h-[100px]  drop-shadow-lg"
              priority
            />
          </div>

          {/* Right: Text - smaller and more readable */}
          <div className="flex-1 min-w-0">
            <p className="font-sans font-semibold text-[10px] sm:text-xs md:text-sm text-white leading-relaxed">
              I am so confident in what I teach that if you don&apos;t get
              clarity after our first 1:1 strategy call, I&apos;ll{" "}
              <span className="text-green-400">issue the refund</span>...{" "}
              <span className="italic text-gray-300">It&apos;s that simple.</span>
            </p>
          </div>
        </div>
      </div>
      <section className="relative w-full flex flex-col items-center mx-auto justify-center px-4 border-t border-green-100 py-10">
        <div className="absolute inset-0 -z-10 bg-[#141414]" />
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl uppercase tracking-wider doner font-black pb-4 md:pb-10"
        >
          Pricing
        </motion.h2>



        <div className="mt-4 rounded-full bg-muted px-4 py-2 text-center text-xs font-semibold text-muted-foreground bg-gray-950 text-white md:text-sm mb-6">
          In 12 weeks: grow your personal brand, craft your offer, monetize your funnel
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-10 w-full max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 20px 50px rgba(0,0,0,0.3)",
            }}
            className="bg-[#0000000d] border border-gray-700 rounded-lg  shadow-2xl cursor-pointer relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_50%)] pointer-events-none" />
            <div className="flex items-center justify-center w-full h-[35px] sm:h-[40px] md:h-[45px] bg-[linear-gradient(106deg,#876B40_-4%,#AE9061_6%,#F1DEC0_12%,#FFFAF1_22%,#E1CAA6_36%,#FFFAF1_74%,#AE9061_88%,#6C522A_103%)] rounded-t-lg px-4 text-black">
              <p className="text-center text-sm sm:text-base md:text-lg uppercase inter  ">
                <strong>
                  <span className="line-through text-white mr-1 font-medium">15</span>8 spots left
                </strong>
              </p>
            </div>

            <div className="p-6">
              <h3 className="text-lg md:text-xl font-black mb-6 mx-auto text-center w-full doner tracking-wider">
                <span className="bg-gradient-to-r from-[#876B40]  to-[#6C522A] bg-clip-text text-transparent font-black">10X</span> Growth Club <br /> <span className="text-sm font-normal text-muted-foreground">(12-week program)</span>
                <div className="h-[1px] mt-2 bg-green-500"></div>
              </h3>



              <div className="space-y-4 mb-10 ">
                {featuresClub.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <motion.span whileHover={{ scale: 1.2, rotate: 10 }} className=" px-2 py-1">
                      <div className="text-green-600">
                        <MoveRight />
                      </div>
                    </motion.span>
                    <p className="inter text-sm md:text-lg leading-relaxed text-gray-700">{feature}</p>
                  </motion.div>
                ))}
                <p className="inter text-sm md:text-lg leading-relaxed text-gray-700 italic font-bold">  👉 Total value: $9,100</p>


              </div>

              <motion.div
               
  className="block tracking-wider w-full text-center px-6 py-3 rounded-md border-2 border-dashed border-green-600 text-blue-600 font-medium"
          >
                <p className=" text-2xl md:text-3xl  mb-2">
                  <span className="line-through text-gray-400 mr-2 text-2xl md:text-3xl inter">$950</span> <span className="inter font-bold " > $280 </span> <span className="text-gray-400 text-base ">/month</span>
                </p>
                <p className="mt-2 text-sm font-semibold text-gray-600">
                  ⚡ Price increases soon — lock in the lowest it’ll ever be
                </p>
              </motion.div>



              <div className="w-full mt-4">
                <Link
                  href="https://forms.gle/nqDF4TBXLnRYuuFRA"
                  className="block archivo tracking-wider w-full bg-[#00e13c] text-center px-6 py-3 rounded-md border border-green-600 text-white font-medium uppercase 
                transition-all duration-300 ease-in-out transform hover:scale-105 hover:backdrop-blur-md "
                >
                  claim your spot
                </Link>
              </div>
            </div>
            <BorderBeam duration={6} size={400} className="from-transparent via-red-500 to-transparent" />
            <BorderBeam duration={6} delay={3} size={400} borderWidth={2} className="from-transparent via-blue-500 to-transparent" />
          </motion.div>

          {/* --- Card 2: Done-For-You --- */}
          {/* <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 20px 50px rgba(0,0,0,0.3)",
            }}
            className="bg-[#0000000d] border border-gray-700 rounded-lg  shadow-2xl cursor-pointer relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)] pointer-events-none" />
   <div className="flex items-center justify-center w-full h-[35px] sm:h-[40px] md:h-[45px] bg-[linear-gradient(106deg,#876B40_-4%,#AE9061_6%,#F1DEC0_12%,#FFFAF1_22%,#E1CAA6_36%,#FFFAF1_74%,#AE9061_88%,#6C522A_103%)] rounded-t-lg px-4 text-black">
  <p className="text-center text-sm sm:text-base md:text-lg uppercase inter  ">
    <strong>
      <span className="line-through text-white mr-1 font-medium">3</span>1 spots left
    </strong>
  </p>
</div>

           <div className="p-6">
             <h3 className="text-xl md:text-2xl font-black mb-6 doner tracking-wider">
              Done-For-You Growth
              <div className="h-[1px] mt-2 bg-green-500"></div>
            </h3>

            <p className="mb-6 text-gray-400 leading-relaxed">
              I personally come in as your brand <span className="font-bold">Head of Growth</span> and install everything for you:
            </p>

            <div className="space-y-4 mb-10">
              {featuresDoneForYou.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <motion.span whileHover={{ scale: 1.2, rotate: 10 }} className="bg-green-400 px-2">
                    <div className="text-black text-xl">
                      <MoveRight />
                    </div>
                  </motion.span>
                  <p className="inter text-sm md:text-lg leading-relaxed text-gray-700">{feature}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 200 }}
           className="block  tracking-wider  w-full text-center px-6 py-3 rounded-md border border-green-600 text-blue-600 font-medium  
              transition-all duration-300 ease-in-out transform hover:scale-105 hover:backdrop-blur-md"  >
              <p className=" font-medium tracking-wide text-2xl md:text-3xl "> <span className="inter font-bold">$4500</span> <span className="text-gray-500 text-lg">/month</span></p>
            </motion.div>

            <div className="w-full mt-4">
              <Link
                href="https://forms.gle/nqDF4TBXLnRYuuFRA"
                             className="block archivo tracking-wider w-full bg-[#00e13c] text-center px-6 py-3 rounded-md border border-green-600 text-black font-medium uppercase 
                transition-all duration-300 ease-in-out transform hover:scale-105 hover:backdrop-blur-md "
                >
                claim your spot
              </Link>
            </div>
            <BorderBeam duration={6} size={400} className="from-transparent via-yellow-500 to-transparent" />
            <BorderBeam duration={6} delay={3} size={400} borderWidth={2} className="from-transparent via-pink-500 to-transparent" />
     </div>     </motion.div> */}
        </div>

      </section>


    </>
  )
}