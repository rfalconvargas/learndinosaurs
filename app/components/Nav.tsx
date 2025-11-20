"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import AuthButton from "./AuthButton"

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Glass morphism background with blur */}
      <div className="absolute inset-0 bg-[#0a1f1a]/30 backdrop-blur-2xl border-b border-white/10"></div>
      
      {/* Iridescent top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link 
            href="/" 
            className="relative group text-2xl font-bold bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent hover:from-[#2dd4bf] hover:via-[#14b8a6] hover:to-[#10b981] transition-all duration-500"
          >
            <span className="relative z-10">LearnDinosaurs</span>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#2dd4bf] via-[#14b8a6] to-[#10b981] rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
          </Link>
          
          <div className="flex items-center gap-8">
            <Link
              href="/learn"
              className={`relative text-sm font-medium transition-all duration-300 ${
                pathname === "/learn" || pathname.startsWith("/learn/")
                  ? "text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <span className="relative z-10">Learn</span>
              {(pathname === "/learn" || pathname.startsWith("/learn/")) && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2dd4bf] via-[#14b8a6] to-[#10b981] rounded-full"></div>
              )}
            </Link>
            <Link
              href="/create"
              className={`relative text-sm font-medium transition-all duration-300 ${
                pathname === "/create" || pathname.startsWith("/create/")
                  ? "text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <span className="relative z-10">Create</span>
              {(pathname === "/create" || pathname.startsWith("/create/")) && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2dd4bf] via-[#14b8a6] to-[#10b981] rounded-full"></div>
              )}
            </Link>
            <AuthButton />
          </div>
        </div>
      </div>
    </nav>
  )
}

