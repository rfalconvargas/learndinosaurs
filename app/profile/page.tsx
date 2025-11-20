"use client"

import Nav from "../components/Nav"
import Footer from "../components/Footer"
import AuthButton from "../components/AuthButton"
import { useSession } from "next-auth/react"
import Image from "next/image"

export default function ProfilePage() {
  const { data: session, status } = useSession()

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-gradient-to-br from-[#0a1f1a] via-[#0d2e25] to-[#0f3d2f] pt-32 pb-16 relative overflow-hidden">
        {/* Animated background gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2dd4bf]/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#14b8a6]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#10b981]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 py-12">
          {status === "loading" ? (
            <div className="flex items-center justify-center min-h-[60vh]">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#2dd4bf] via-[#14b8a6] to-[#10b981] rounded-2xl blur opacity-30 animate-pulse"></div>
                <div className="relative w-16 h-16 border-4 border-white/20 border-t-[#2dd4bf] rounded-full animate-spin"></div>
              </div>
            </div>
          ) : session?.user ? (
            <>
              {/* User Profile Card */}
              <div className="relative group mb-12">
                {/* Iridescent glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#2dd4bf] via-[#14b8a6] to-[#10b981] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                
                {/* Glass card */}
                <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl border border-white/20 rounded-3xl p-12 shadow-2xl">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    {session.user.image && (
                      <div className="relative group/avatar">
                        <div className="absolute -inset-2 bg-gradient-to-r from-[#2dd4bf] via-[#14b8a6] to-[#10b981] rounded-full blur-xl opacity-30 group-hover/avatar:opacity-50 transition duration-500"></div>
                        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white/30 backdrop-blur-xl">
                          <Image
                            src={session.user.image}
                            alt={session.user.name || "User"}
                            width={128}
                            height={128}
                            className="object-cover"
                          />
                        </div>
                      </div>
                    )}
                    <div className="flex-1 text-center md:text-left">
                      <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent mb-4">
                        {session.user.name || "User"}
                      </h1>
                      <p className="text-xl text-white/60 mb-6">{session.user.email}</p>
                      <div className="flex justify-center md:justify-start">
                        <AuthButton />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats or Content Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Saved Videos", value: "0", icon: "📹" },
                  { title: "Playlists", value: "0", icon: "📚" },
                  { title: "Comments", value: "0", icon: "💬" },
                ].map((stat, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2dd4bf] via-[#14b8a6] to-[#10b981] rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                    <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 hover:scale-105">
                      <div className="text-4xl mb-3">{stat.icon}</div>
                      <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-white/60">{stat.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
              <div className="relative mb-8">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#2dd4bf] via-[#14b8a6] to-[#10b981] rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <div className="relative text-8xl">🦕</div>
              </div>
              <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent mb-6">
                Welcome to LearnDinosaurs
              </h1>
              <p className="text-xl text-white/60 mb-12 max-w-2xl">
                Sign in with Google to save your favorite videos, create playlists, and track your learning progress.
              </p>
              <div className="scale-125">
                <AuthButton />
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}



