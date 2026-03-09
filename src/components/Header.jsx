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
          ? "bg-white/70 backdrop-blur-xl border border-zinc-200 shadow-lg"
          : "bg-transparent border-transparent"}
        rounded-b-[18px]`}
      >

        <div className="px-6 h-16 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-black">

              <span className="text-blue-600">
                Jitu
              </span>

              <span className="text-violet-600">
                Banna
              </span>

            </span>
          </Link>

          {/* NAV */}
          <nav className="hidden md:flex items-center gap-7">

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
                className="text-sm font-medium text-zinc-600 hover:text-black transition"
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
              className="p-2 rounded-lg text-zinc-600 hover:text-black hover:bg-zinc-100 transition"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://instagram.com/jitendra.07_7"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-600 hover:text-pink-600 hover:bg-pink-50 transition"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a
              href="https://jitubanna.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-violet-600 hover:text-violet-700 hover:bg-violet-50 transition"
            >
              <Globe className="w-5 h-5" />
            </a>

          </div>

        </div>

      </div>

    </header>
  );
}
