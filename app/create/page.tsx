"use client"

import Nav from "../components/Nav"
import Footer from "../components/Footer"

export default function CreatePage() {
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
          <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent mb-6">
            Create
          </h1>
          <p className="text-2xl text-white/70 mb-12 font-light">
            Create and share your content
          </p>
          
          <div className="relative group">
            {/* Iridescent glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#2dd4bf] via-[#14b8a6] to-[#10b981] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            
            {/* Glass card */}
            <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl border border-white/20 rounded-3xl p-12 shadow-2xl hover:border-white/30 transition-all duration-500">
              <div className="text-center">
                <div className="text-6xl mb-6">✨</div>
                <p className="text-xl text-white/80 mb-8">
                  Content creation features coming soon...
                </p>
                <div className="flex justify-center gap-4">
                  <div className="w-2 h-2 bg-[#2dd4bf] rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-[#14b8a6] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}



