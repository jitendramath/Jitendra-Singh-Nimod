// src/app/all-names-and-usernames-of-jitendra-singh-nimod/page.js

import Link from "next/link";
import { 
  Fingerprint, 
  AtSign, 
  BadgeCheck, 
  Globe2, 
  MapPin, 
  Code2, 
  BookOpen, 
  ExternalLink,
  ShieldCheck,
  ChevronRight,
  Network
} from "lucide-react";

// 📌 APPLE-TIER SEO METADATA
export const metadata = {
  title: "The Nomenclature of Jitendra Singh Nimod | Digital Identity Matrix",
  description:
    "An exhaustive cryptographic-style mapping of all names, aliases, domains, and profiles associated with Jitendra Singh Nimod across the internet ecosystem.",
  keywords: [
    "Jitendra Singh Nimod aliases",
    "JS Nimod username",
    "Jitu Nimod profile",
    "Jitubanna internet identity",
    "Jitendra Singh developer names"
  ],
  alternates: { canonical: "/all-names-and-usernames-of-jitendra-singh-nimod" },
};

export default function Page() {
  // 🧠 ADVANCED SEO: Tying all aliases to one entity for Google Knowledge Graph
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Jitendra Singh Nimod",
      "alternateName": [
        "Jitendra Nimod",
        "Jitu Nimod",
        "JS Nimod",
        "Nimod Jitu",
        "Nimod JS",
        "Jitu Banna",
        "Jitubanna"
      ],
      "jobTitle": "Full Stack Web Developer",
      "sameAs": [
        "https://github.com/jitendra-math",
        "https://medium.com/@i.jitendra.singh0",
        "https://dev.to/jitendrasingh",
        "https://me.jitubanna.com"
      ]
    }
  };

  return (
    <main className="min-h-screen bg-black text-zinc-400 font-sans selection:bg-white/20 pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ===== HERO / EDITORIAL HEADER ===== */}
      <header className="relative pt-32 pb-20 px-6 border-b border-white/[0.05] overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 text-xs font-medium tracking-widest uppercase mb-8">
            <Fingerprint className="w-4 h-4" />
            <span>Identity Resolution Registry</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
            The Nomenclature of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
              Jitendra Singh Nimod
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light max-w-2xl">
            In complex digital ecosystems, a single architect operates under multiple monikers. This registry provides a cryptographic mapping of every alias, domain, and profile tied to the founder of JSS Originals.
          </p>
        </div>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <article className="max-w-4xl mx-auto px-6 py-20 space-y-24">
        
        {/* PRIMARY IDENTITY CARD */}
        <section>
          <div className="relative p-8 md:p-12 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-zinc-900/80 to-black overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <ShieldCheck className="w-32 h-32 text-white" />
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div>
                <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-3">Primary Designation</p>
                <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight flex items-center gap-4">
                  Jitendra Singh Nimod
                  <BadgeCheck className="w-8 h-8 text-blue-400" />
                </h2>
                <p className="mt-4 text-zinc-400 max-w-md leading-relaxed">
                  The foundational identity anchoring all web development, mathematical logic mapping, and official digital real estate.
                </p>
              </div>
            </div>
          </div>
        </section>

        

        {/* ALIAS MATRIX (THE PILL CLOUD) */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <AtSign className="w-6 h-6 text-white" />
            <h3 className="text-2xl font-semibold text-white tracking-tight">The Alias Matrix</h3>
          </div>
          <p className="text-zinc-400 mb-8 max-w-2xl leading-relaxed">
            These variations act as search vectors across the internet. Search engines and platform algorithms are trained to resolve all the following aliases back to the primary identity.
          </p>

          <div className="flex flex-wrap gap-3 md:gap-4">
            {[
              "Jitendra Nimod", "Jitu Nimod", "JS Nimod", 
              "Nimod Jitu", "Nimod JS", "Jitu Banna", "Jitubanna"
            ].map((alias, i) => (
              <div key={i} className="flex items-center gap-2 px-5 py-3 rounded-2xl border border-white/[0.08] bg-white/[0.02] text-zinc-200 hover:bg-white/[0.06] hover:border-white/20 hover:-translate-y-1 transition-all cursor-default shadow-lg shadow-black/50">
                <AtSign className="w-4 h-4 text-zinc-500" />
                <span className="font-medium tracking-wide">{alias}</span>
              </div>
            ))}
          </div>
        </section>

        {/* IDENTITY RESOLUTION NODES (BENTO GRID OF LINKS) */}
        <section className="border-t border-white/[0.05] pt-20">
          <div className="flex items-center gap-3 mb-10">
            <Network className="w-6 h-6 text-white" />
            <h3 className="text-3xl font-semibold text-white tracking-tight">Resolution Nodes</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Core Identity URLs */}
            <div className="p-8 rounded-[2rem] border border-white/[0.05] bg-white/[0.01]">
              <h4 className="text-sm font-medium text-zinc-100 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Fingerprint className="w-4 h-4 text-zinc-500" />
                Identity Endpoints
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "Jitendra Singh Nimod", path: "jitendra-singh-nimod" },
                  { name: "Jitendra Nimod", path: "jitendra-nimod" },
                  { name: "Jitu Nimod", path: "jitu-nimod" },
                  { name: "JS Nimod", path: "js-nimod" },
                  { name: "Nimod Jitu", path: "nimod-jitu" },
                  { name: "Nimod JS", path: "nimod-js" }
                ].map((node) => (
                  <li key={node.path}>
                    <Link href={`/identity/${node.path}`} className="group flex items-center justify-between p-3 rounded-xl hover:bg-white/[0.03] transition-colors">
                      <span className="text-zinc-400 group-hover:text-white transition-colors">{node.name}</span>
                      <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Developer Architecture */}
            <div className="p-8 rounded-[2rem] border border-white/[0.05] bg-white/[0.01]">
              <h4 className="text-sm font-medium text-zinc-100 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-zinc-500" />
                Developer Footprint
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "Jitendra Singh Developer", path: "/jitendra-singh-developer" },
                  { name: "Jitu Developer", path: "/jitu-developer" },
                  { name: "JS Developer", path: "/js-developer" },
                  { name: "Kuchaman Web Developer", path: "/kuchaman-web-developer" },
                  { name: "Didwana Developer", path: "/didwana-developer" }
                ].map((dev) => (
                  <li key={dev.path}>
                    <Link href={dev.path} className="group flex items-center justify-between p-3 rounded-xl hover:bg-white/[0.03] transition-colors">
                      <span className="text-zinc-400 group-hover:text-white transition-colors">{dev.name}</span>
                      <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        {/* GEOGRAPHICAL & EDITORIAL CONTEXT */}
        <div className="grid md:grid-cols-2 gap-12 pt-10">
          
          <section>
            <h4 className="text-xl font-medium text-white mb-6 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-zinc-500" />
              Regional Anchors
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { name: "Nimod Village", path: "/location/nimod-village" },
                { name: "Kuchaman City", path: "/location/kuchaman-city" },
                { name: "Didwana, Rajasthan", path: "/location/didwana-rajasthan" }
              ].map((loc) => (
                <Link key={loc.path} href={loc.path} className="px-5 py-4 rounded-2xl border border-white/[0.03] bg-white/[0.01] hover:border-white/[0.1] hover:bg-white/[0.03] text-zinc-300 hover:text-white transition-all flex justify-between items-center">
                  {loc.name}
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h4 className="text-xl font-medium text-white mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-zinc-500" />
              Editorial Context
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { name: "Who is Jitendra Nimod?", path: "/blog/who-is-jitendra-nimod" },
                { name: "My Journey as a Developer", path: "/blog/my-journey-as-developer" },
                { name: "Full Stack Developer Rajasthan", path: "/blog/full-stack-developer-rajasthan" }
              ].map((blog) => (
                <Link key={blog.path} href={blog.path} className="px-5 py-4 rounded-2xl border border-white/[0.03] bg-white/[0.01] hover:border-white/[0.1] hover:bg-white/[0.03] text-zinc-300 hover:text-white transition-all flex justify-between items-center">
                  {blog.name}
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </Link>
              ))}
            </div>
          </section>

        </div>

        {/* EXTERNAL PLATFORMS */}
        <section className="pt-20 border-t border-white/[0.05] text-center">
          <Globe2 className="w-8 h-8 text-zinc-600 mx-auto mb-6" />
          <h3 className="text-2xl font-semibold text-white mb-4">External Ecosystem</h3>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            The digital footprint extends beyond this primary domain, establishing authority across global developer communities.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://github.com/jitendra-math" target="_blank" rel="noopener noreferrer" className="group px-6 py-3 rounded-full border border-white/[0.05] bg-white/[0.02] hover:bg-white text-zinc-300 hover:text-black font-medium transition-all flex items-center gap-2">
              GitHub <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a href="https://dev.to/jitendrasingh" target="_blank" rel="noopener noreferrer" className="group px-6 py-3 rounded-full border border-white/[0.05] bg-white/[0.02] hover:bg-white text-zinc-300 hover:text-black font-medium transition-all flex items-center gap-2">
              Dev.to <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a href="https://medium.com/@i.jitendra.singh0" target="_blank" rel="noopener noreferrer" className="group px-6 py-3 rounded-full border border-white/[0.05] bg-white/[0.02] hover:bg-white text-zinc-300 hover:text-black font-medium transition-all flex items-center gap-2">
              Medium <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </section>

      </article>
    </main>
  );
}
