"use client";
const logo = '/ShoorauiLogo.svg';
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 md:px-6 md:py-6">
        <div className="flex items-center gap-2 md:gap-4 text-lg md:text-3xl font-bold tracking-wide">
          <img src={logo} alt="Shoora UI" className="w-6 h-6 md:w-8 md:h-8" />
          <span className="text-white text-sm md:text-base bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">Shoora UI</span>
        </div>
        <div className="flex gap-3 md:gap-6 text-xs md:text-sm">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 py-3 md:px-10 md:py-5 flex gap-3 md:gap-12 shadow-lg shadow-purple-900/20 hover:shadow-purple-900/30 transition-all duration-300">
            <a href="#" className="text-white hover:text-purple-300 transition-colors duration-300 flex items-center gap-1 md:gap-2 group">
              <span className="w-1 h-1 bg-purple-400 rounded-full group-hover:bg-purple-300 transition-colors duration-300"></span>
              <span className="hidden md:inline">Home</span>
              <span className="md:hidden">Home</span>
            </a>
            <a href="/docs/getstarted/introduction" className="text-white/80 hover:text-purple-300 transition-colors duration-300 group">
              <span className="hidden md:inline group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">Docs</span>
              <span className="md:hidden">Docs</span>
            </a>
            <a href="/docs/getstarted/index" className="text-white/80 hover:text-purple-300 transition-colors duration-300 group">
              <span className="hidden md:inline group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">Index</span>
              <span className="md:hidden">index</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
