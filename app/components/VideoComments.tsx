"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

interface Comment {
  id: string
  userId: string
  userName: string
  content: string
  createdAt: string
}

interface VideoCommentsProps {
  videoId?: string
}

export default function VideoComments({ videoId }: VideoCommentsProps) {
  const pathname = usePathname()
  const slug = videoId || pathname?.split("/").pop() || ""
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Fetch comments for this video
  useEffect(() => {
    if (!slug) return
    // In production, fetch from API: /api/profile/comments?videoId=${slug}
    fetch(`/api/profile/comments?videoId=${slug}`)
      .then((res) => {
        if (!res.ok) return null;
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setComments(data)
        } else {
          setComments([])
        }
      })
      .catch(() => {
        // Fallback to empty comments if API fails
        setComments([])
      })
  }, [slug])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim()) return

    setIsLoading(true)
    try {
      const response = await fetch("/api/profile/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ videoId: slug, content: newComment }),
      })
      
      if (response.ok) {
        const comment = await response.json()
        setComments([comment, ...comments])
        setNewComment("")
      }
    } catch (error) {
      console.error("Error posting comment:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="mt-8 bg-surface border border-line rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-ink">Comments</h2>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-8">
          <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="w-full p-4 bg-bg border border-line rounded-lg text-ink placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 resize-none"
          rows={4}
        />
        <button
          type="submit"
          disabled={isLoading || !newComment.trim()}
          className="mt-4 bg-accent text-bg px-6 py-2 rounded-lg font-semibold hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? "Posting..." : "Post Comment"}
        </button>
      </form>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.length === 0 ? (
          <p className="text-muted/60 text-center py-8">No comments yet. Be the first to comment!</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="border-b border-line pb-4 last:border-0">
              <div className="flex items-start justify-between mb-2">
                <span className="font-semibold text-ink">{comment.userName}</span>
                <span className="text-sm text-muted/60">
                  {new Date(comment.createdAt).toLocaleDateString()}
                </span>
              </div>
              <p className="text-muted/90">{comment.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
