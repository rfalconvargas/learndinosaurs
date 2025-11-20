"use client";

import Nav from "../components/Nav";
import Link from "next/link";
import Image from "next/image";
import { categories } from "./categories";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

export default function LearnPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1f1a] via-[#0d2e25] to-[#0f3d2f] px-6 py-32 relative overflow-hidden">
        {/* Animated background gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2dd4bf]/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#14b8a6]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#10b981]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center w-full">
          <h1 className="text-7xl md:text-9xl font-black bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent mb-8">
            Learn
          </h1>
          <p className="text-2xl md:text-3xl text-white/70 mb-20 leading-relaxed font-light">
            Explore our content by category
          </p>

          {/* Category Cards with Premium Styling */}
          <div className="flex flex-wrap justify-center items-center gap-8 max-w-7xl mx-auto">
            {categories.map((category, idx) => (
              <Link
                key={category.id}
                href={`/learn/category/${category.id}`}
                className="group relative w-[40vw] max-w-[500px] aspect-square rounded-3xl overflow-hidden tilt-3d"
                style={{
                  animationDelay: `${idx * 0.1}s`,
                }}
              >
                {/* Iridescent border glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#2dd4bf] via-[#14b8a6] to-[#10b981] rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition duration-1000"></div>
                
                {/* Background image */}
                {category.thumbnail && (
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${category.thumbnail})`,
                    }}
                  />
                )}
                
                {/* Glass morphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a1f1a]/90 via-[#0d2e25]/80 to-[#0a1f1a]/90 backdrop-blur-md group-hover:from-[#0a1f1a]/70 group-hover:via-[#0d2e25]/60 group-hover:to-[#0a1f1a]/70 transition-all duration-500 flex flex-col items-center justify-center p-8 border border-white/10 group-hover:border-white/20">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <h2 className="relative z-10 text-3xl md:text-4xl font-black text-white mb-4 text-center group-hover:text-[#2dd4bf] transition-colors duration-300">
                    {category.title}
                  </h2>
                  <p className="relative z-10 text-base md:text-lg text-white/70 text-center leading-relaxed mb-6 group-hover:text-white/90 transition-colors duration-300">
                    {category.description}
                  </p>
                  <div className="relative z-10 text-sm text-[#14b8a6]/80 font-medium">
                    {category.estimatedVideos}+ videos • {category.viewPotential} views
                  </div>
                  
                  {/* Hover indicator */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-[#2dd4bf] via-[#14b8a6] to-[#10b981] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <Newsletter />
    </>
  );
}


