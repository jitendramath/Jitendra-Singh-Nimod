// app/page.js

import Image from "next/image";
import Link from "next/link";
import identity from "../data/identity";
import StructuredData from "../components/StructuredData";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Youtube, 
  Instagram, 
  BookOpen, 
  Globe, 
  TerminalSquare, 
  Rss, 
  ArrowRight,
  Info,
  Code2,
  ExternalLink
} from "lucide-react";

// 📌 ULTRA-OPTIMIZED SEO METADATA
export const metadata = {
  metadataBase: new URL("https://me.jitubanna.com"),
  title: "Jitendra Singh Nimod | Full Stack Developer & Founder",
  description:
    "The digital identity archive of Jitendra Singh Nimod (JS Nimod). Full Stack Developer, Founder of JSS Originals, and creator of premium digital experiences.",
  keywords: [
    "Jitendra Singh Nimod",
    "Jitendra Nimod",
    "Jitu Nimod",
    "JS Nimod",
    "JSS Originals",
    "Full Stack Developer Rajasthan",
    "Jitu Banna Developer",
    "Jitendra Singh Shekhawat",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: "Jitendra Singh Nimod — Digital Identity",
    description: "Verified identity archive of Jitendra Singh Nimod. Developer, Founder, and Tech Enthusiast from Rajasthan.",
    url: "https://me.jitubanna.com",
    siteName: "Jitendra Singh Nimod",
    type: "profile",
    images: [{ url: "/images/og/og-main.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jitendra Singh Nimod",
    description: "Full Stack Developer & Founder of JSS Originals.",
    creator: "@jitendranimod",
  },
};

export default function HomePage() {
  return (
    <main className="bg-black pt-10 text-zinc-100 min-h-screen font-sans selection:bg-white/20 relative overflow-hidden">
      <StructuredData />

      {/* ===== SUBTLE APPLE-LIKE GLOWS ===== */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-zinc-800/30 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-zinc-900/40 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 py-12 md:py-24 relative z-10">
        
        {/* ===== PREMIUM NOTICE BANNER ===== */}
        <div className="mb-20 animate-fade-in">
          <div className="bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl transition-all hover:bg-white/[0.05]">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/[0.05] rounded-full border border-white/[0.1]">
                <Info className="w-6 h-6 text-zinc-400" />
              </div>
              <div>
                <p className="text-zinc-400 text-sm font-medium tracking-wide uppercase mb-1">
                  Identity Archive
                </p>
                <p className="text-zinc-300">
                  This page serves as the digital footprint for <strong>Jitendra Singh Nimod</strong>.
                </p>
              </div>
            </div>
            <a
              href="https://jitubanna.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition-all duration-300"
            >
              Visit Primary Site
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* ===== HERO SECTION ===== */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-16 mb-32">
          <div className="flex-1 space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
              Jitendra <br />
              Singh Nimod
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-lg font-light">
              Full Stack Developer & Founder of <span className="text-white font-medium">{identity.brand || "JSS Originals"}</span>. Crafting scalable web applications and premium digital ecosystems from Rajasthan.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/about"
                className="px-8 py-3.5 bg-white/[0.08] border border-white/[0.1] text-white font-medium rounded-full hover:bg-white/[0.15] backdrop-blur-md transition-all duration-300 flex items-center gap-2"
              >
                Read Biography
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3.5 text-zinc-400 hover:text-white font-medium transition-colors flex items-center gap-2"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* PROFILE IMAGE WITH SUBTLE AURA */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-b from-white/20 to-transparent rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-700"></div>
            <div className="relative w-[280px] h-[350px] md:w-[320px] md:h-[400px] rounded-[2rem] overflow-hidden border border-white/[0.1] bg-zinc-900 shadow-2xl">
              <Image
                src={identity.images?.main || "/placeholder.jpg"}
                alt="Jitendra Singh Nimod"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
              />
            </div>
          </div>
        </section>

        {/* ===== OFFICIAL PROFILES (BENTO GRID) ===== */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <h2 className="text-xl font-medium text-zinc-300 tracking-wide uppercase">Official Footprint</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
              { name: "GitHub", href: "https://github.com/jitendra-math", icon: Github },
              { name: "LinkedIn", href: "https://linkedin.com/in/jitendra-singh07", icon: Linkedin },
              { name: "X / Twitter", href: "https://x.com/jitendranimod", icon: Twitter },
              { name: "YouTube", href: "https://youtube.com/@jitendranimod", icon: Youtube },
              { name: "Instagram", href: "https://instagram.com/jitendra.07_7", icon: Instagram },
              { name: "Medium", href: "https://medium.com/@i.jitendra.singh0", icon: BookOpen },
              { name: "Dev.to", href: "https://dev.to/jitendrasingh", icon: TerminalSquare },
              { name: "Hashnode", href: "https://jitendrasinghnimod.hashnode.dev", icon: Code2 },
              { name: "About.me", href: "https://about.me/jitendrasinghnimod", icon: Info },
              { name: "Reddit", href: "https://www.reddit.com/user/jitendranimod", icon: Globe },
              { name: "Product Hunt", href: "https://www.producthunt.com/@jitendra_nimod", icon: ExternalLink },
              { name: "Linktree", href: "https://linktr.ee/jitendranimod", icon: Globe },
              { name: "RSS Feed", href: "/rss.xml", icon: Rss },
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.name === "RSS Feed" ? "_self" : "_blank"}
                rel={link.name === "RSS Feed" ? "" : "noopener noreferrer"}
                className="group flex flex-col items-center justify-center p-6 bg-white/[0.02] border border-white/[0.05] rounded-2xl hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-300 hover:-translate-y-1"
              >
                <link.icon className="w-6 h-6 mb-3 text-zinc-500 group-hover:text-white transition-colors" />
                <span className="text-sm font-medium text-zinc-400 group-hover:text-zinc-200">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* ===== ABOUT / CLOSING SECTION ===== */}
        <section className="text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100">
            Who is Jitendra Singh Nimod?
          </h2>
          <p className="text-zinc-400 leading-relaxed text-lg font-light">
            Also known as <strong>JS Nimod</strong> and <strong>Jitu Nimod</strong>, he is a developer dedicated to merging high-performance architecture with premium, user-centric design. From building comprehensive digital identity systems to crafting specialized developer tools, his work emphasizes both aesthetic minimalism and robust SEO architecture.
          </p>
        </section>

      </div>
    </main>
  );
}
