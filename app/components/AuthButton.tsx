"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"

export default function AuthButton() {
  const { data: session, status } = useSession()
  const [isSigningIn, setIsSigningIn] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen])

  if (status === "loading") {
    return (
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2dd4bf] via-[#14b8a6] to-[#10b981] rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
        <div className="relative px-6 py-2.5 bg-[#0a1f1a]/40 backdrop-blur-xl border border-white/10 rounded-xl">
          <div className="h-5 w-20 bg-white/10 rounded animate-pulse"></div>
        </div>
      </div>
    )
  }

  if (session?.user) {
    return (
      <div className="relative" ref={menuRef}>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative group/avatar focus:outline-none"
        >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2dd4bf] via-[#14b8a6] to-[#10b981] rounded-full blur opacity-30 group-hover/avatar:opacity-50 transition duration-500"></div>
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/20 backdrop-blur-xl cursor-pointer hover:border-white/40 transition-all duration-300">
            <Image
              src={session.user.image || ""}
              alt={session.user.name || "User"}
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
        </button>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-56 origin-top-right">
            {/* Iridescent border - Turquoise */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2dd4bf] via-[#14b8a6] to-[#10b981] rounded-xl blur opacity-20"></div>
            
            {/* Glass menu */}
            <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl overflow-hidden">
              {/* User info section */}
              <div className="px-4 py-3 border-b border-white/10">
                <p className="text-sm font-semibold text-white">{session.user.name}</p>
                <p className="text-xs text-white/60 truncate">{session.user.email}</p>
              </div>

              {/* Menu items */}
              <div className="py-2">
                <Link
                  href="/profile"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 text-sm text-white/90 hover:bg-white/10 transition-colors duration-200"
                >
                  Profile
                </Link>
                <button
                  onClick={() => {
                    setIsMenuOpen(false)
                    signOut()
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 transition-colors duration-200"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  const handleSignIn = async () => {
    try {
      setIsSigningIn(true)
      await signIn("google", { callbackUrl: "/profile" })
    } catch (error) {
      console.error("Sign in error:", error)
      setIsSigningIn(false)
    }
  }

  return (
    <button
      onClick={handleSignIn}
      disabled={isSigningIn}
      className="relative group disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {/* Iridescent glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2dd4bf] via-[#14b8a6] to-[#10b981] rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
      
      {/* Glass morphism button */}
      <div className="relative px-8 py-3 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 rounded-xl text-white font-semibold text-sm hover:from-white/15 hover:via-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#2dd4bf]/20 disabled:hover:scale-100">
        <span className="relative z-10 flex items-center gap-2">
          {isSigningIn ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Signing in...
            </>
          ) : (
            <>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Sign in with Google
            </>
          )}
        </span>
      </div>
    </button>
  )
}

