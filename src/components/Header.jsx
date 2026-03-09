// src/components/Header.jsx

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Github, Instagram, Globe } from "lucide-react";

export default function Header() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center">

      <div
        className={`w-full max-w-7xl transition-all duration-500
        ${scrolled
          ? "bg-black/60 backdrop-blur-2xl border border-white/10 shadow-xl"
          : "bg-transparent border-transparent"}
        rounded-b-[18px]`}
      >

        <div className="px-4 h-16 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-black tracking-tight text-[#2563EB]">
              Jitu
              <span className="text-[#7C3AED]">
                Banna
              </span>
            </span>
          </Link>

          {/* NAV */}
          <nav className="hidden md:flex items-center gap-6">

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
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}

          </nav>

          {/* SOCIAL */}
          <div className="flex items-center gap-3">

            <a
              href="https://github.com/jitendra-math"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://instagram.com/jitendra.07_7"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a
              href="https://jitubanna.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10 transition"
            >
              <Globe className="w-5 h-5" />
            </a>

          </div>

        </div>

      </div>

    </header>
  );
}
