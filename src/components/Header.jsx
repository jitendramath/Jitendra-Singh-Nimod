// src/components/Header.jsx

import Link from "next/link";
import { Github, Instagram, Globe } from "lucide-react";

export default function Header() {

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/developer-profile", label: "Developer" },
    { href: "/student-profile", label: "Student" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const iconBtn =
    "w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition border border-white/10";

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* Glass background */}
      <div className="absolute inset-0 backdrop-blur-2xl bg-black/40 border-b border-white/10"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-6">

          {/* Logo */}
          <Link
            href="/"
            className="text-xl md:text-2xl font-black tracking-tight gradient-text"
          >
            Jitendra
          </Link>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-3">

            <a
              href="https://github.com/jitendra-math"
              target="_blank"
              rel="noopener noreferrer"
              className={iconBtn}
            >
              <Github size={18} />
            </a>

            <a
              href="https://instagram.com/jitendra.07_7"
              target="_blank"
              rel="noopener noreferrer"
              className={iconBtn}
            >
              <Instagram size={18} />
            </a>

            <a
              href="https://jitubanna.com"
              target="_blank"
              rel="noopener noreferrer"
              className={iconBtn}
            >
              <Globe size={18} />
            </a>

          </div>
        </div>


        {/* CENTER NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="link-underline hover:text-white transition"
            >
              {link.label}
            </Link>
          ))}

        </nav>


        {/* RIGHT SIDE CTA */}
        <div className="flex items-center gap-3">

          <a
            href="https://jitubanna.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex px-5 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105 transition shadow-lg"
          >
            Official Site
          </a>

        </div>

      </div>

    </header>
  );
}
