// src/app/who-is-jitubanna/page.js

import Link from "next/link";
import { 
  Crown, 
  Fingerprint, 
  Code2, 
  Globe2, 
  Search, 
  ShieldCheck, 
  Link2,
  Cpu,
  ArrowRight
} from "lucide-react";

// 📌 APPLE-TIER SEO METADATA
export const metadata = {
  title: "Who Is Jitubanna? | The Digital Architecture of Jitendra Singh Nimod",
  description:
    "Jitubanna is the premier online identity and personal brand of Jitendra Singh Nimod, a full stack developer architecting modern web experiences from Rajasthan, India.",
  keywords: [
    "Jitubanna",
    "Jitu Banna",
    "Who is Jitubanna",
    "Jitubanna developer",
    "Jitubanna website",
    "Jitubanna Jitendra Singh Nimod",
    "Jitu Banna Rajasthan",
    "Jitubanna brand",
    "Jitubanna portfolio",
    "Jitubanna developer Rajasthan"
  ],
  alternates: { canonical: "/who-is-jitubanna" },
};

export default function Page() {
  const base = "https://me.jitubanna.com";

  // 🧠 ADVANCED SEO: Google Knowledge Graph Entity Mapping
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jitendra Singh Nimod",
    alternateName: [
      "Jitubanna",
      "Jitu Banna",
      "JS Nimod",
      "Jitu Nimod"
    ],
    url: "https://jitubanna.com",
    sameAs: [
      "https://github.com/jitendra-math",
      "https://instagram.com/jitendra.07_7",
      "https://x.com/jitendranimod",
      "https://medium.com/@i.jitendra.singh0",
      "https://dev.to/jitendrasingh"
    ],
    jobTitle: "Full Stack Web Developer",
    description:
      "Jitubanna is the personal brand and online identity of Jitendra Singh Nimod, a full stack web developer from Rajasthan, India.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kuchaman City",
      addressRegion: "Rajasthan",
      addressCountry: "India"
    }
  };

  return (
    <main className="min-h-screen bg-[#000000] text-zinc-400 font-sans selection:bg-amber-500/30 pb-32 overflow-hidden">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ===== CINEMATIC HERO SECTION ===== */}
      <header className="relative pt-32 pb-24 px-6">
        {/* Royal Amber & Tech Blue Glow */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-300 text-xs font-medium tracking-widest uppercase mb-8 shadow-[0_0_30px_rgba(245,158,11,0.1)]">
            <Fingerprint className="w-4 h-4" />
            <span>The Global Brand Identity</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-8 leading-[1]">
            Who Is <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-orange-500 drop-shadow-[0_0_20px_rgba(245,158,11,0.2)]">
              Jitubanna?
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light max-w-2xl mx-auto">
            Beyond a username, it is a master alias. The central digital hub representing the engineering logic, cultural heritage, and modern web architecture of <strong className="text-white font-medium">Jitendra Singh Nimod</strong>.
          </p>
        </div>
      </header>

      {/* ===== MAIN ARCHITECTURE CONTENT ===== */}
      <article className="max-w-4xl mx-auto px-6 space-y-24">

        {/* INTRODUCTION BLOCK */}
        <section className="relative p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-zinc-900/80 to-black border border-white/10 shadow-2xl overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
            <ShieldCheck className="w-48 h-48 text-white" />
          </div>
          <div className="relative z-10">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              <Search className="w-6 h-6 text-amber-400" />
              The Search Resolution
            </h2>
            <p className="text-lg text-zinc-300 leading-relaxed mb-6 font-light">
              When queries for <strong>"Jitubanna"</strong> are executed across global search engines, they are explicitly hunting for the developer profile of Jitendra Singh Nimod. This page acts as the cryptographic handshake—confirming to both humans and AI models that the alias and the architect are the exact same entity.
            </p>
          </div>
        </section>

        

        {/* ETYMOLOGY & ORIGIN (BENTO GRID) */}
        <section>
          <div className="flex items-center gap-3 mb-10">
            <Crown className="w-7 h-7 text-white" />
            <h2 className="text-3xl font-bold text-white tracking-tight">The Origin of the Handle</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-[2rem] border border-white/[0.05] bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
              <span className="block text-4xl font-black text-white mb-4">Jitu</span>
              <p className="text-zinc-400 leading-relaxed text-sm">
                The globally accessible, informal shorthand for the given name <strong>Jitendra</strong>. It brings approachability and high recall value to the digital forefront.
              </p>
            </div>
            <div className="p-8 rounded-[2rem] border border-amber-500/10 bg-amber-500/[0.02] hover:bg-amber-500/[0.05] transition-colors">
              <span className="block text-4xl font-black text-amber-400 mb-4">Banna</span>
              <p className="text-zinc-400 leading-relaxed text-sm">
                A mark of cultural reverence. Rooted deep in the Rajput heritage of Rajasthan, it infuses the brand with respect, honor, and a distinct regional identity.
              </p>
            </div>
            <div className="md:col-span-2 p-8 rounded-[2rem] border border-white/[0.05] bg-gradient-to-r from-zinc-900 to-black flex items-center justify-between group">
              <div>
                <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-2">The Synthesis</p>
                <p className="text-xl text-white font-medium">A handle built for developer communities, GitHub repositories, and global brand recognition.</p>
              </div>
            </div>
          </div>
        </section>

        {/* THE DEVELOPER BEHIND THE BRAND */}
        <section className="relative">
          {/* Subtle background mesh */}
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>

          <div className="flex items-center gap-3 mb-10">
            <Cpu className="w-7 h-7 text-white" />
            <h2 className="text-3xl font-bold text-white tracking-tight">The Architect Behind Jitubanna</h2>
          </div>

          <div className="space-y-6 text-lg text-zinc-300 font-light leading-relaxed border-l-2 border-white/10 pl-6 md:pl-8 ml-3">
            <p>
              The <strong>Jitubanna</strong> brand is powered by a rigorous technical foundation. As a developer operating from Rajasthan, the core focus lies in architecting premium, mobile-first progressive web applications (PWAs) and highly scalable digital interfaces.
            </p>
            <p>
              Rooted in a strong background of mathematical logic (B.Sc PCM), the development approach treats code not just as syntax, but as structured problem-solving. This translates into writing clean, high-performance logic using cutting-edge frameworks like <strong>Next.js, Svelte, and React Native</strong>.
            </p>
            <p className="text-zinc-400 text-base">
              From crafting seamless OTP authentication systems to deploying luxury-grade UI components with Tailwind CSS, the Jitubanna identity represents a commitment to software excellence and continuous open-source contribution.
            </p>
          </div>
        </section>

        {/* OFFICIAL DOMAINS & REAL ESTATE */}
        <section className="pt-10 border-t border-white/[0.05]">
          <div className="flex items-center gap-3 mb-10">
            <Globe2 className="w-7 h-7 text-white" />
            <h2 className="text-3xl font-bold text-white tracking-tight">Official Digital Real Estate</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <a href="https://jitubanna.com" target="_blank" rel="noopener noreferrer" className="group p-8 rounded-[2rem] bg-gradient-to-br from-blue-900/20 to-black border border-blue-500/20 hover:border-blue-500/40 transition-all flex flex-col items-start justify-between min-h-[200px]">
              <div className="p-3 rounded-full bg-blue-500/10 text-blue-400 mb-6">
                <Globe2 className="w-6 h-6" />
              </div>
              <div className="w-full flex items-end justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-400/80 uppercase tracking-widest mb-1">The Flagship</p>
                  <p className="text-2xl font-bold text-white">jitubanna.com</p>
                </div>
                <ArrowRight className="w-6 h-6 text-zinc-600 group-hover:text-white group-hover:translate-x-2 transition-all" />
              </div>
            </a>

            <a href="https://me.jitubanna.com" className="group p-8 rounded-[2rem] bg-gradient-to-br from-indigo-900/20 to-black border border-indigo-500/20 hover:border-indigo-500/40 transition-all flex flex-col items-start justify-between min-h-[200px]">
              <div className="p-3 rounded-full bg-indigo-500/10 text-indigo-400 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="w-full flex items-end justify-between">
                <div>
                  <p className="text-sm font-medium text-indigo-400/80 uppercase tracking-widest mb-1">Identity Archive</p>
                  <p className="text-2xl font-bold text-white">me.jitubanna.com</p>
                </div>
                <ArrowRight className="w-6 h-6 text-zinc-600 group-hover:text-white group-hover:translate-x-2 transition-all" />
              </div>
            </a>
          </div>
        </section>

        {/* RELATED IDENTITY NODES */}
        <section className="pt-10 pb-20">
          <div className="flex items-center gap-3 mb-8">
            <Link2 className="w-6 h-6 text-white" />
            <h2 className="text-2xl font-bold text-white tracking-tight">The Identity Network</h2>
          </div>
          <p className="text-zinc-400 mb-8 max-w-2xl leading-relaxed">
            To ensure zero search-engine fragmentation, the Jitubanna brand is structurally linked to its core alias nodes across this platform.
          </p>

          <div className="flex flex-wrap gap-4">
            {[
              { label: "Jitendra Singh Nimod", path: "/identity/jitendra-singh-nimod" },
              { label: "Jitu Nimod", path: "/identity/jitu-nimod" },
              { label: "JS Nimod", path: "/identity/js-nimod" },
              { label: "Jitu Banna", path: "/jitu-banna" }
            ].map((node, i) => (
              <Link 
                key={i} 
                href={node.path}
                className="px-6 py-3 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/10 text-sm font-medium text-zinc-300 hover:text-white transition-all shadow-lg"
              >
                {node.label}
              </Link>
            ))}
          </div>
        </section>

      </article>
    </main>
  );
}
