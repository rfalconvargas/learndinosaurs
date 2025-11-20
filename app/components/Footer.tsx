import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f1a] via-[#0a1f1a]/95 to-transparent"></div>
      
      {/* Top border with iridescent effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="relative group">
            <h3 className="text-xl font-bold bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent mb-4">
              LearnDinosaurs
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Explore the fascinating world of prehistoric creatures and paleontology.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-white/90 mb-6 uppercase tracking-wider">Links</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/learn" 
                  className="text-sm text-white/60 hover:text-[#2dd4bf] transition-all duration-300 inline-block hover:translate-x-1"
                >
                  Learn
                </Link>
              </li>
              <li>
                <Link 
                  href="/learn/videos" 
                  className="text-sm text-white/60 hover:text-[#2dd4bf] transition-all duration-300 inline-block hover:translate-x-1"
                >
                  Videos
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-white/90 mb-6 uppercase tracking-wider">Connect</h4>
            <p className="text-sm text-white/60 leading-relaxed">
              Follow us for the latest updates on prehistoric discoveries.
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} LearnDinosaurs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}



