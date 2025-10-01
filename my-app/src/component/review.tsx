"use client"

import Image from "next/image"
import { FC } from "react"

const reviews = [
  "/reviews/1.png",
  "/reviews/2.png",
  "/reviews/3.png",
//   "/reviews/4.png",
  "/reviews/5.png",
]

interface ReviewsSectionProps {
  id?: string
  className?: string
}

const ReviewsSection: FC<ReviewsSectionProps> = ({ id, className }) =>{
  return (
    <section className="relative py-10 px-6">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#141414] via-gray-900 to-[#141414]"/>

      <div className=" max-w-[1220px]  mx-auto  md:px-10">
        <h2 className="font-bold uppercase text-slate-100 anton leading-tight tracking-wider mb-10 text-center">
          What Creators Are Saying
        </h2>

        <div className="columns-2 sm:columns-2 md:columns-3 gap-2 [column-fill:_balance]">
          {reviews.map((src, i) => (
            <div key={i} className="mb-4 break-inside-avoid overflow-hidden rounded-md">
              <Image
                src={src || "/placeholder.svg"}
                alt={`Review ${i + 1}`}
                width={800}
                height={600}
                className="w-full h-auto object-contain block"
                priority={i < 4}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default ReviewsSection
