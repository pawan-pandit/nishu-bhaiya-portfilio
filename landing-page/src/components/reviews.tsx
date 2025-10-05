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
    videoUrl: "ena.mp4", // local file
  },
  {
    id: "2",
    name: "Pat Basil",
    title: "Online University",
    achievement: "Pat currently makes $10,000 to $20,000 monthly.",
    videoUrl:
      "https://player.vimeo.com/video/809410825?h=e779a831a8&autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0",
  },
  {
    id: "3",
    name: "Alex Feinberg",
    title: "Online University",
    achievement: "Alex made $12K using one of my strategies.",
    videoUrl:
      "https://player.vimeo.com/video/809410825?h=e779a831a8&autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0",
  },
]

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col bg-gray-950 rounded-3xl p-6 sm:p-8 shadow-xl"
            >
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                  {testimonial.achievement}
                </h3>
              </div>

              <div className="relative w-full h-[400px] md:h-[500px] bg-black rounded-2xl border border-white overflow-hidden group">
                {testimonial.videoUrl.endsWith(".mp4") ? (
                  <video
                    className="absolute bottom-10 sm:-bottom-60 md:-bottom-10 xl:-bottom-2 left-0 w-full h-full object-cover"
                    src={testimonial.videoUrl}
                    controls
                    playsInline
                  />
                ) : (
                  <iframe
                    className="absolute top-0 left-0 w-full h-full object-center"
                    src={testimonial.videoUrl}
                    title={`${testimonial.name} Video Testimonial`}
                    allow="autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope;"
                    allowFullScreen
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
