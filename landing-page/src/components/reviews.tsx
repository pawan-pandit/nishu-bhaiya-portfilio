"use client"

// Includes Vimeo background mode so the iframe content covers without black bars.
import { motion } from "framer-motion"

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
    // Tip: place this file at public/videos/ena.mp4 (update path below if needed)
    videoUrl: "/ena.mp4",
  },
  {
    id: "2",
    name: "Pat Basil",
    title: "Online University",
    achievement: "Pat currently makes $10,000 to $20,000 monthly.",
    videoUrl:
      "vedio2.mp4"
  },
  {
    id: "3",
    name: "Alex Feinberg",
    title: "Online University",
    achievement: "Alex made $12K using one of my strategies.",
    videoUrl:
      "vedio3.mp4",
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
      <div className="mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl uppercase tracking-wider doner font-black mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Success Stories
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col rounded-3xl overflow-hidden shadow-xl bg-primary text-primary-foreground  bg-gray-950  px-6 sm:px-8 "
            >
              {/* Top header inside card */}
              <div className="px-6 py-4">
                        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl inter text-white font-semibold opacity-90 leading-relaxed text-left">
                  {t.achievement}
                </h3>
                <p className="mt-1 text-xs opacity-80 text-white/80 inter">
                  {t.name} — {t.title}
                </p>
              </div>

              {/* Video area */}
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
      </div>
    </div>
  )
}
