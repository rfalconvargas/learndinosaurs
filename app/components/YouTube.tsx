"use client"

interface YouTubeProps {
  id: string
  title?: string
  className?: string
}

export default function YouTube({ id, title, className = "" }: YouTubeProps) {
  return (
    <div className={`relative w-full aspect-video rounded-lg overflow-hidden bg-[#0a1f1a] ${className}`}>
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube.com/embed/${id}`}
        title={title || "YouTube video player"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  )
}



