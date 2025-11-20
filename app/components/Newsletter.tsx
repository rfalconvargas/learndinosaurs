"use client"

import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    
    // TODO: Integrate with your newsletter service
    setTimeout(() => {
      setStatus("success")
      setEmail("")
      setTimeout(() => setStatus("idle"), 3000)
    }, 1000)
  }

  return (
    <div className="relative py-20 overflow-hidden">
      {/* Background with glass effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/2 to-transparent backdrop-blur-xl border-t border-white/10"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#2dd4bf]/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#14b8a6]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent mb-3">
          Stay Updated
        </h3>
        <p className="text-white/60 mb-10 text-lg">
          Get notified when we publish new content about dinosaurs and paleontology.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1 group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2dd4bf] via-[#14b8a6] to-[#10b981] rounded-xl blur opacity-0 group-focus-within:opacity-20 transition duration-500"></div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="relative w-full px-6 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300"
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2dd4bf] via-[#14b8a6] to-[#10b981] rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative px-8 py-4 bg-gradient-to-r from-[#2dd4bf] to-[#14b8a6] text-black font-semibold rounded-xl hover:from-[#14b8a6] hover:to-[#10b981] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 shadow-lg shadow-[#2dd4bf]/20">
                {status === "loading" ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></span>
                    Loading...
                  </span>
                ) : status === "success" ? (
                  <span className="flex items-center gap-2">
                    <span>✓</span> Subscribed!
                  </span>
                ) : (
                  "Subscribe"
                )}
              </div>
            </button>
          </div>
        </form>
        
        {status === "success" && (
          <p className="mt-6 text-sm text-[#2dd4bf] animate-pulse">Thanks for subscribing!</p>
        )}
      </div>
    </div>
  )
}



