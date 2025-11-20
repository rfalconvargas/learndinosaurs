"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"

interface SavePlaylistButtonProps {
  videoId?: string
  playlistId?: string
}

export default function SavePlaylistButton({ videoId, playlistId }: SavePlaylistButtonProps) {
  const { data: session, status } = useSession()
  const [isSaved, setIsSaved] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  // Don't show button if auth is not available
  const authAvailable = status !== "loading" && (status === "authenticated" || status === "unauthenticated")

  useEffect(() => {
    if (authAvailable && session?.user && playlistId) {
      // Check if playlist is saved
      fetch(`/api/profile/saved-playlists`)
        .then((res) => {
          if (!res.ok) return null;
          return res.json();
        })
        .then((data) => {
          if (Array.isArray(data)) {
            setIsSaved(data.some((p: any) => p.id === playlistId))
          }
        })
        .catch(() => {})
    }
  }, [session, playlistId, authAvailable])

  const handleClick = async () => {
    if (!session?.user) return
    
    setIsLoading(true)
    
    try {
      if (playlistId) {
        // Save playlist
        const response = await fetch("/api/profile/saved-playlists", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: playlistId, videoIds: [] }),
        })
        if (response.ok) {
          setIsSaved(true)
        }
      } else if (videoId) {
        // Save video
        const response = await fetch("/api/profile/saved-videos", {
          method: isSaved ? "DELETE" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ videoId }),
        })
        if (response.ok) {
          setIsSaved(!isSaved)
        }
      }
    } catch (error) {
      console.error("Error saving:", error)
    } finally {
      setIsLoading(false)
    }
  }

  if (!authAvailable || !session?.user) return null

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className={`
        px-4 py-2 rounded-lg text-sm font-semibold transition-all
        ${isSaved
          ? "bg-accent text-bg hover:bg-accent/90"
          : "bg-surface border border-line text-ink hover:bg-surface2"
        }
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
    >
      {isLoading ? (
        "Saving..."
      ) : isSaved ? (
        "✓ Saved"
      ) : (
        "Save"
      )}
    </button>
  )
}
