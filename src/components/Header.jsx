// src/components/Header.jsx

import Link from "next/link";
import { Github, Instagram, Globe, ChevronRight } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      
      {/* ===== FLOATING GLASS ISLAND ===== */}
      <div className="w-full max-w-6xl bg-black/40 backdrop-blur-3xl border border-white/[0.08] rounded-full px-4 py-3 flex items-center justify-between shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] transition-all duration-500 hover:border-white/[0.15] hover:bg-black/50">

        {/* ===== LEFT: LOGO ===== */}
        <div className="flex items-center gap-4 md:gap-6">
          
          <Link href="/" className="group pl-2 flex items-center gap-2">
            <span className="text-xl md:text-2xl font-black tracking-tighter text-white group-hover:opacity-80 transition-opacity">
              JS
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                .
              </span>
            </span>
          </Link>

        </div>


        {/* ===== CENTER: NAVIGATION ===== */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 rounded-full border border-white/[0.05]">

          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Developer", path: "/developer-profile" },
            { name: "Student", path: "/student-profile" },
            { name: "Blog", path: "/blog" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="px-5 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
            >
              {item.name}
            </Link>
          ))}

        </nav>


        {/* ===== RIGHT: SOCIAL BUTTONS ===== */}
        <div className="flex items-center gap-2 pr-1">

          {/* GitHub */}
          <a
            href="https://github.com/jitendra-math"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-2.5 rounded-full bg-white/[0.04] border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
          >
            <Github className="w-[18px] h-[18px] group-hover:scale-110 transition-transform" />

            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-zinc-800 border border-white/10 text-zinc-300 text-[10px] font-medium tracking-widest uppercase px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              GitHub
            </span>
          </a>


          {/* Instagram */}
          <a
            href="https://instagram.com/jitendra.07_7"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-2.5 rounded-full bg-white/[0.04] border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
          >
            <Instagram className="w-[18px] h-[18px] group-hover:scale-110 transition-transform" />

            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-zinc-800 border border-white/10 text-zinc-300 text-[10px] font-medium tracking-widest uppercase px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Instagram
            </span>
          </a>


          {/* Main Site */}
          <a
            href="https://jitubanna.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-2.5 rounded-full bg-white/[0.04] border border-indigo-500/20 text-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10 transition-all"
          >
            <Globe className="w-[18px] h-[18px] group-hover:scale-110 transition-transform" />

            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[10px] font-medium tracking-widest uppercase px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap backdrop-blur-md">
              Main Site
            </span>
          </a>

        </div>

      </div>
    </header>
  );
}
