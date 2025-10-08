"use client"

import { motion } from "framer-motion"
import { BlurFade } from "./ui/photogrid"
import { VideoWithThumbnail } from "./ui/vedio-reviews"

interface Testimonial {
  id: string
  name: string
  title: string
  achievement: string
  videoUrl: string
  tumbnail: string
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Bella",
    title: "Relationship coach",
    achievement: " From Confused to 30K: Bella’s YouTube Breakthrough",
    videoUrl: "/ena.mp4",
    tumbnail: "enaa.png"

  },
  {
    id: "2",
    name: "Elena",
    title: "Fitness coach",
    achievement: "Elena’s Journey: From 450 Subs to 53K and $75K/Month",
    videoUrl: "vedio2.mp4",
    tumbnail: "tumbnail2.png"
  },
  {
    id: "3",
    name: "Ron",
    title: "Agency owner",
    achievement: " Ron: From no clarity to 100K Subs — and $150K.",
    videoUrl: "vedio3.mp4",
    tumbnail: "tumbnail3.png"

  },
]

const images = [
  "nolan1.png",
  "nolan2.jpg",
  "review4.png",
  "review1.png",
  "review8.jpg",
  "review9.jpg",
  {
    img: "review6.jpg",
    text: "Julia turned a small online presence into a $20K/month brand — in just one month."
  },
]

function toVimeoBackground(url: string) {
  try {
    const u = new URL(url)
    if (u.hostname.includes("vimeo.com")) {
      u.searchParams.set("background", "1")
      u.searchParams.set("autoplay", "1")
      u.searchParams.set("muted", "1")
      u.searchParams.set("loop", "1")
      u.searchParams.set("controls", "0")
      u.searchParams.set("title", "0")
      u.searchParams.set("byline", "0")
      u.searchParams.set("portrait", "0")
      return u.toString()
    }
    return url
  } catch {
    return url
  }
}

function isMp4(url: string) {
  return url.toLowerCase().endsWith(".mp4")
}

export default function VideoTestimonials() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-10 md:py-20">
      <div className="mx-auto max-w-full">
        <motion.h2
          className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl uppercase tracking-wider doner font-black mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Success Stories
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mx-auto max-w-7xl">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col rounded-3xl overflow-hidden shadow-xl bg-gray-950 text-primary-foreground px-6 sm:px-8"
            >
              <div className="px-6 py-4">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl inter text-white font-semibold opacity-90 leading-relaxed text-left">
                  {t.achievement}
                </h3>
                <p className="mt-1 text-xs opacity-80  text-gray-200   inter font-semibold">
                  {t.title}
                </p>
              </div>

              <div className="px-4 pb-6">
                <div className="relative w-full aspect-[9/14] rounded-2xl border-2 border-b-green-500 overflow-hidden bg-black">
                 {isMp4(t.videoUrl) ? (
  <VideoWithThumbnail
    videoUrl={t.videoUrl}
    thumbnail={t.tumbnail}
    name={t.name}
  />
) : (
  <iframe
    className="absolute inset-0 h-full w-full object-cover"
    src={toVimeoBackground(t.videoUrl)}
    title={`${t.name} Video Testimonial`}
    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; gyroscope"
    referrerPolicy="no-referrer-when-downgrade"
  />
)}

                </div>
              </div>
            </div>
          ))}
        </div>

        <motion.section
          id="photos"
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="columns-1 sm:columns-2 gap-4 mx-auto max-w-7xl">
            {images.map((item, idx) => {
              const imageUrl = typeof item === "string" ? item : item.img
              const caption = typeof item === "object" && item.text ? item.text : null

              const isEmailScreenshot = imageUrl.includes("nolan") // or check for other email files if needed

              return (
                <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
                  <div className=" w-full flex flex-col items-center">
                    <img
                      className={`w-full rounded-lg hover:scale-105 transition-transform duration-300 ${isEmailScreenshot
                          ? "object-contain max-h-[400px] "
                          : "object-cover max-h-[550px]"
                        }`}
                      src={imageUrl}
                      alt={`Review ${idx + 1}`}
                    />
                    {caption && (
                      <p className="mt-2 text-sm sm:text-lg text-gray-700 font-bold text-center">
                        {caption}
                      </p>
                    )}

                  </div>
                </BlurFade>
              )
            })}

          </div>
        </motion.section>


      </div>
    </div>
  )
}
