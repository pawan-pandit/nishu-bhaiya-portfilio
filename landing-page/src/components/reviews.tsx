import { motion, Variants, easeOut } from "framer-motion";

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
    videoUrl:
      "ena.mp4",
  },
  {
    id: "2",
    name: "Pat Basil",
    title: "Online University",
    achievement: "Pat currently makes $10,000 to $20,000 monthly.",
    videoUrl:
      "https://player.vimeo.com/video/809410825?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1&h=e779a831a8#t=",
  },
  {
    id: "3",
    name: "Alex Feinberg",
    title: "Online University",
    achievement: "Alex made $12K using one of my strategies.",
    videoUrl:
      "https://player.vimeo.com/video/809410825?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1&h=e779a831a8#t=",
  },
]

export default function VideoTestimonials() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-10 md:py-20">
      <div className=" mx-auto">
       
          <motion.h2
                className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl uppercase  tracking-wider doner font-black  mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
           Success Stories
            </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col bg-gray-950  rounded-3xl p-6 sm:p-8 shadow-xl">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">{testimonial.achievement}</h3>
              </div>

         <div className="relative w-full h-[400px] bg-black rounded-2xl border border-white overflow-hidden group">
  <iframe
    className="absolute top-0 left-0 w-full h-full object-cover transform transition-transform duration-300 ease-in-out scale-125"
    src={testimonial.videoUrl}
    title={`${testimonial.name} Video Testimonial`}
    allowFullScreen
    allow="clipboard-write; autoplay; encrypted-media; gyroscope;"
  />
</div>


            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
