// src/app/jitubanna-identity/page.js

import Link from "next/link";
import { 
  Fingerprint, 
  Crown, 
  UserCircle, 
  Globe2, 
  Code2, 
  ShieldCheck, 
  Link2, 
  ArrowRight,
  ExternalLink,
  MapPin
} from "lucide-react";

// 📌 APPLE-TIER SEO METADATA
export const metadata = {
  title: "The Identity Behind Jitubanna | Jitendra Singh Nimod",
  description:
    "Explore the origin, cultural significance, and digital architecture of the 'Jitubanna' identity, the primary developer alias of Jitendra Singh Nimod.",
  keywords: [
    "Jitubanna",
    "Jitubanna identity",
    "Jitu Banna developer",
    "Jitendra Singh Nimod alias",
    "Jitubanna domain"
  ],
  alternates: { canonical: "/jitubanna-identity" },
};

export default function Page() {
  // 🧠 ADVANCED SEO: Tying the Alias 'Jitubanna' directly to the main Person entity
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Jitendra Singh Nimod",
      "alternateName": "Jitubanna",
      "description": "Jitubanna is the primary digital alias and personal brand of full stack developer Jitendra Singh Nimod from Rajasthan.",
      "url": "https://jitubanna.com",
      "sameAs": [
        "https://me.jitubanna.com",
        "https://github.com/jitendra-math"
      ]
    }
  };

  return (
    <main className="min-h-screen bg-black text-zinc-400 font-sans selection:bg-white/20 pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ===== EDITORIAL HERO HEADER ===== */}
      <header className="relative pt-32 pb-20 px-6 border-b border-white/[0.05] overflow-hidden">
        {/* Subtle Gold/Amber glow to represent the Royal/Rajput heritage */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10 animate-fade-in text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 text-xs font-medium tracking-widest uppercase mb-8">
            <Fingerprint className="w-4 h-4 text-amber-500/80" />
            <span>Nomenclature & Brand Identity</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
            The Anatomy of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
              Jitubanna
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light max-w-2xl mx-auto">
            A convergence of cultural heritage and modern digital architecture. Discover the origin of the primary alias used by Jitendra Singh Nimod across the global web.
          </p>
        </div>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <article className="max-w-4xl mx-auto px-6 py-20 space-y-24">
        
        {/* INTRODUCTION */}
        <section className="text-xl md:text-2xl leading-relaxed font-light text-zinc-300 text-center max-w-3xl mx-auto">
          <p>
            Across the internet, developers curate aliases that represent their digital footprint. <strong>Jitubanna</strong> is not just a username; it is the definitive personal brand and foundational identity connected with full-stack developer <strong className="text-white">Jitendra Singh Nimod</strong>.
          </p>
        </section>

        {/* ETYMOLOGY / ORIGIN (VISUAL EQUATION) */}
        <section>
          <div className="flex items-center gap-3 mb-10 justify-center">
            <Crown className="w-6 h-6 text-amber-400" />
            <h2 className="text-3xl font-semibold text-white tracking-tight">The Etymology</h2>
          </div>

          {/* Premium Visual Breakdown */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 p-8 md:p-12 rounded-[2.5rem] border border-white/[0.05] bg-gradient-to-b from-white/[0.02] to-transparent">
            
            {/* Part 1 */}
            <div className="text-center">
              <span className="block text-4xl md:text-5xl font-bold text-white mb-4">Jitu</span>
              <p className="text-sm text-zinc-500 max-w-[200px] mx-auto">
                A globally recognized, approachable shorthand for the given name <strong>Jitendra</strong>.
              </p>
            </div>

            <div className="text-3xl font-light text-zinc-600 hidden md:block">+</div>
            <div className="text-3xl font-light text-zinc-600 md:hidden my-2">+</div>

            {/* Part 2 */}
            <div className="text-center">
              <span className="block text-4xl md:text-5xl font-bold text-amber-400 mb-4">Banna</span>
              <p className="text-sm text-zinc-500 max-w-[200px] mx-auto">
                A cultural honorific from Rajasthan, conveying respect within Rajput communities.
              </p>
            </div>

            <div className="text-3xl font-light text-zinc-600 hidden md:block">=</div>
            <div className="text-3xl font-light text-zinc-600 md:hidden my-2">=</div>

            {/* Result */}
            <div className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/10 shadow-[0_0_40px_rgba(251,191,36,0.1)]">
              <span className="block text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500 mb-2">Jitubanna</span>
              <p className="text-xs text-zinc-400 uppercase tracking-widest font-medium">Digital Identity</p>
            </div>

          </div>

          <p className="mt-8 text-zinc-400 text-center max-w-2xl mx-auto leading-relaxed">
            When fused, these elements forge a unique digital identity that seamlessly honors regional roots while establishing a modern, memorable brand on the internet.
          </p>

          
        </section>

        {/* ALIAS RESOLUTION */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="w-6 h-6 text-white" />
              <h2 className="text-3xl font-semibold text-white tracking-tight">Entity Resolution</h2>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Search algorithms and users querying "Jitubanna" are frequently routed to the same core entity. This alias acts as an umbrella for a cluster of interconnected names.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Jitendra Singh Nimod", "Jitendra Nimod", "Jitu Nimod", "JS Nimod"].map((alias, i) => (
                <div key={i} className="px-4 py-2 rounded-xl border border-white/[0.05] bg-white/[0.02] text-sm font-medium text-zinc-300">
                  {alias}
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-[2rem] border border-white/[0.05] bg-zinc-900/50 backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <Globe2 className="w-32 h-32 text-white" />
            </div>
            <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-2">The Flagship Domain</h3>
            <p className="text-2xl font-semibold text-white mb-6 relative z-10">jitubanna.com</p>
            <p className="text-sm text-zinc-400 leading-relaxed relative z-10 mb-8">
              Secured as the primary digital real estate, this domain serves as the definitive portfolio and future nexus for all ventures under the Jitubanna brand.
            </p>
            <a href="https://jitubanna.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:scale-105 transition-transform relative z-10">
              Visit Flagship Domain <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* THE ARCHITECT (BENTO GRID) */}
        <section>
          <div className="flex items-center gap-3 mb-10">
            <Code2 className="w-6 h-6 text-white" />
            <h2 className="text-3xl font-semibold text-white tracking-tight">The Architect Behind the Alias</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 p-8 rounded-[2rem] border border-white/[0.05] bg-white/[0.01]">
              <p className="text-zinc-300 leading-relaxed mb-6">
                <strong>Jitendra Singh Nimod</strong> architects modern web platforms, utilizing advanced frameworks to build progressive web apps (PWAs) and high-performance digital systems.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                His portfolio encompasses everything from authentication ecosystems to complex UI/UX engineering, driven by a foundational background in B.Sc Mathematics logic.
              </p>
            </div>
            
            <div className="p-8 rounded-[2rem] border border-white/[0.05] bg-white/[0.01] flex flex-col justify-center items-center text-center">
              <MapPin className="w-8 h-8 text-amber-500/80 mb-4" />
              <h3 className="text-white font-medium mb-2">Operating Base</h3>
              <p className="text-sm text-zinc-400">Nimod Village, Rajasthan, India</p>
            </div>
          </div>
        </section>

        {/* ECOSYSTEM LINKS */}
        <section className="pt-10 border-t border-white/[0.05]">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Link2 className="w-6 h-6 text-white" />
              <h2 className="text-2xl font-semibold text-white tracking-tight">Ecosystem Presence</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { name: "GitHub", url: "https://github.com/jitendra-math" },
              { name: "Medium", url: "https://medium.com/@i.jitendra.singh0" },
              { name: "Dev.to", url: "https://dev.to/jitendrasingh" },
              { name: "X (Twitter)", url: "https://x.com/jitendranimod" },
              { name: "Instagram", url: "https://instagram.com/jitendra.07_7" }
            ].map((link, i) => (
              <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="group p-4 rounded-2xl border border-white/[0.05] bg-white/[0.01] hover:bg-white/[0.04] hover:border-white/20 transition-all flex flex-col items-center justify-center text-center gap-2">
                <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">{link.name}</span>
                <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-amber-400 transition-colors" />
              </a>
            ))}
          </div>
        </section>

        {/* PURPOSE (SEO / IDENTITY) */}
        <section className="mt-16 p-8 md:p-12 rounded-[2.5rem] bg-zinc-900 border border-white/[0.05]">
          <h2 className="text-xl font-bold text-white mb-4">Why This Document Exists</h2>
          <p className="text-zinc-400 leading-relaxed max-w-3xl">
            In modern web architecture, identity fragmentation harms discoverability. This specific page is a programmatic and semantic anchor. It explicitly instructs search engines (via JSON-LD and structured content) that the query <em>"Jitubanna"</em> and <em>"Jitendra Singh Nimod"</em> resolve to the exact same human entity, unifying the digital footprint into a single, unbreakable authoritative source.
          </p>
        </section>

      </article>
    </main>
  );
}
