import { useState, useRef, useEffect } from "react"

export function VideoWithThumbnail({
  videoUrl,
  thumbnail,
  name,
}: {
  videoUrl: string
  thumbnail: string
  name: string
}) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const handlePlay = () => {
    setIsPlaying(true)
  }

  // Play automatically once visible
  useEffect(() => {
    if (isPlaying && videoRef.current) {
      videoRef.current.play().catch(() => {
        // ignore autoplay block
      })
    }
  }, [isPlaying])

  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl">
      {/* Thumbnail (shown before click) */}
      {!isPlaying && (
        <button
          onClick={handlePlay}
          className="absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer group"
        >
          <img
            src={thumbnail}
            alt={`${name} thumbnail`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                viewBox="0 0 24 24"
                className="w-8 h-8 ml-1"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </button>
      )}

      {/* Video (shown after click) */}
      {isPlaying && (
        <video
          ref={videoRef}
          src={videoUrl}
          controls
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-10"
        />
      )}
    </div>
  )
}
