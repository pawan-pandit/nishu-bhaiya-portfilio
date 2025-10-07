"use client"

import { motion } from "framer-motion"
import { BlurFade } from "./ui/photogrid"

interface Testimonial {
  id: string
  name: string
  title: string
  achievement: string
  videoUrl: string
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Tom Noske",
    title: "Online University",
    achievement: "Tom recently made his first $100K in sales.",
    videoUrl: "/ena.mp4",
  },
  {
    id: "2",
    name: "Pat Basil",
    title: "Online University",
    achievement: "Pat currently makes $10,000 to $20,000 monthly.",
    videoUrl: "vedio2.mp4",
  },
  {
    id: "3",
    name: "Alex Feinberg",
    title: "Online University",
    achievement: "Alex made $12K using one of my strategies.",
    videoUrl: "vedio3.mp4",
  },
]

const images = [
  "review2.png",
  "review5.jpg",
  "review3.png",
  "review4.png",
  "review1.png",
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
        {/* --- Heading --- */}
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
                <p className="mt-1 text-xs opacity-80 text-white/80 inter">
                  {t.name} — {t.title}
                </p>
              </div>

              <div className="px-4 pb-6">
                <div className="relative w-full aspect-[9/14] rounded-2xl border-2 border-b-blue-500 overflow-hidden bg-black">
                  {isMp4(t.videoUrl) ? (
                    <video
                      className="absolute inset-0 h-full w-full object-cover"
                      src={t.videoUrl}
                      controls
                      playsInline
                      aria-label={`${t.name} video testimonial`}
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
          <motion.h3
            className="text-2xl md:text-4xl font-black uppercase tracking-wider doner mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Reviews
          </motion.h3>

          <div className="columns-1 sm:columns-2 gap-4 mx-auto max-w-7xl">
            {images.map((imageUrl, idx) => (
              <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
                <img
                  className="mb-4 w-full rounded-lg object-cover hover:scale-105 transition-transform duration-300"
                  src={imageUrl}
                  alt={`Review ${idx + 1}`}
                />
              </BlurFade>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}
