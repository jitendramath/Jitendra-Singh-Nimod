// src/app/complete-digital-identity-of-jitendra-singh-nimod/page.js

import Link from "next/link";
import { 
  Network, 
  UserCircle, 
  Code2, 
  GraduationCap, 
  Fingerprint, 
  MapPin, 
  Library, 
  Link as LinkIcon,
  ChevronRight
} from "lucide-react";

// 📌 APPLE-TIER SEO METADATA
export const metadata = {
  title: "The Complete Digital Identity of Jitendra Singh Nimod | Architecture",
  description:
    "An exhaustive overview of the digital ecosystem, developer presence, and identity nodes of Jitendra Singh Nimod (JS Nimod).",
  keywords: [
    "Jitendra Singh Nimod Digital Identity",
    "JS Nimod Ecosystem",
    "Jitubanna Portfolio",
    "Full Stack Developer Presence"
  ],
  alternates: { canonical: "/complete-digital-identity-of-jitendra-singh-nimod" },
};

export default function Page() {
  // JSON-LD for advanced SEO mapping
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Jitendra Singh Nimod",
      "alternateName": ["Jitu Nimod", "JS Nimod", "Jitubanna"],
      "jobTitle": "Full Stack Developer",
      "url": "https://me.jitubanna.com"
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
        {/* Subtle Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.02] blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 text-xs font-medium tracking-widest uppercase mb-8">
            <Network className="w-4 h-4" />
            <span>Platform Architecture</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
            The Complete Digital Identity of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">
              Jitendra Singh Nimod
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light max-w-2xl mx-auto">
            A centralized mapping of the digital ecosystem, connecting personal information, regional anchors, and developer frameworks across the internet.
          </p>
        </div>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <article className="max-w-4xl mx-auto px-6 py-20 space-y-24">
        
        {/* INTRODUCTION LEAD */}
        <section className="text-xl md:text-2xl leading-relaxed font-light text-zinc-300 border-l-2 border-white/20 pl-6 md:pl-10">
          <p className="mb-6">
            The official website of <strong className="text-white font-medium">Jitendra Singh Nimod</strong> serves as the nexus of a broader digital footprint. It is meticulously designed to provide a structured overview of the developer behind aliases like <strong className="text-white font-medium">Jitu Nimod</strong>, <strong className="text-white font-medium">JS Nimod</strong>, and <strong className="text-white font-medium">Jitubanna</strong>.
          </p>
          <p className="text-lg text-zinc-500">
            By architecting this platform, the goal is to create seamless contextual mapping for search engines and developer communities, bridging the gap between isolated projects and a unified online identity.
          </p>
        </section>

        

        {/* BENTO GRID: CORE PLATFORM */}
        <section>
          <div className="flex items-center gap-3 mb-10">
            <UserCircle className="w-6 h-6 text-white" />
            <h2 className="text-3xl font-semibold text-white tracking-tight">Core Platform Segments</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Card 1 */}
            <div className="p-8 rounded-[2rem] border border-white/[0.05] bg-white/[0.01] hover:bg-white/[0.03] transition-colors group">
              <Code2 className="w-8 h-8 text-zinc-500 mb-6 group-hover:text-white transition-colors" />
              <h3 className="text-xl font-medium text-white mb-3">Developer Profile</h3>
              <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                Focuses on the technical architecture. Highlights expertise in modern frameworks like Next.js and Svelte, and the creation of high-performance PWAs and mobile-first tools.
              </p>
              <Link href="/developer-profile" className="inline-flex items-center text-sm font-medium text-white hover:text-zinc-300 transition-colors">
                Explore Profile <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-[2rem] border border-white/[0.05] bg-white/[0.01] hover:bg-white/[0.03] transition-colors group">
              <GraduationCap className="w-8 h-8 text-zinc-500 mb-6 group-hover:text-white transition-colors" />
              <h3 className="text-xl font-medium text-white mb-3">Student Profile</h3>
              <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                Details the academic foundation in B.Sc Mathematics (PCM), showcasing how analytical logic and mathematical principles translate into scalable programming solutions.
              </p>
              <Link href="/student-profile" className="inline-flex items-center text-sm font-medium text-white hover:text-zinc-300 transition-colors">
                Explore Academic Journey <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Card 3 (Full width) */}
            <div className="md:col-span-2 p-8 rounded-[2rem] border border-white/[0.05] bg-white/[0.01] hover:bg-white/[0.03] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6 group">
              <div>
                <h3 className="text-xl font-medium text-white mb-2">The About Page</h3>
                <p className="text-sm text-zinc-400 leading-relaxed max-w-xl">
                  A comprehensive background detailing personal interests, the genesis of foundational projects, and the overarching vision driving development work.
                </p>
              </div>
              <Link href="/about" className="px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:scale-105 transition-transform whitespace-nowrap">
                Read Biography
              </Link>
            </div>

          </div>
        </section>

        {/* LIST SECTION: IDENTITY NODES */}
        <section className="relative p-10 rounded-[2rem] border border-white/[0.05] overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.03] blur-[80px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <Fingerprint className="w-6 h-6 text-white" />
              <h2 className="text-2xl font-semibold text-white tracking-tight">Identity Nodes</h2>
            </div>
            
            <p className="text-zinc-400 mb-8 max-w-2xl leading-relaxed">
              These dedicated pages resolve alias fragmentation. They programmatically instruct search engines that multiple variations of the name resolve to a single authoritative entity.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                { name: "Jitendra Singh Nimod", path: "jitendra-singh-nimod" },
                { name: "Jitendra Nimod", path: "jitendra-nimod" },
                { name: "Jitu Nimod", path: "jitu-nimod" },
                { name: "JS Nimod", path: "js-nimod" },
                { name: "Nimod Jitu", path: "nimod-jitu" },
                { name: "Nimod JS", path: "nimod-js" }
              ].map((node) => (
                <Link 
                  key={node.path} 
                  href={`/identity/${node.path}`}
                  className="px-5 py-2.5 rounded-xl border border-white/10 bg-white/[0.02] text-sm text-zinc-300 hover:bg-white/10 hover:text-white transition-all"
                >
                  {node.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* TWO COLUMN: REGION & CONTENT */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Regional Anchors */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-5 h-5 text-white" />
              <h2 className="text-2xl font-semibold text-white tracking-tight">Regional Anchors</h2>
            </div>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
              Establishing geographical relevance within Rajasthan, embedding local roots into the global digital identity.
            </p>
            <ul className="space-y-4">
              {[
                { name: "Nimod Village", path: "/location/nimod-village" },
                { name: "Kuchaman City", path: "/location/kuchaman-city" },
                { name: "Didwana Rajasthan", path: "/location/didwana-rajasthan" }
              ].map((loc) => (
                <li key={loc.path}>
                  <Link href={loc.path} className="group flex items-center justify-between p-4 rounded-2xl border border-white/[0.03] bg-white/[0.01] hover:border-white/[0.1] hover:bg-white/[0.04] transition-all">
                    <span className="text-zinc-300 group-hover:text-white transition-colors">{loc.name}</span>
                    <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Blog & Thought Leadership */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Library className="w-5 h-5 text-white" />
              <h2 className="text-2xl font-semibold text-white tracking-tight">Thought Leadership</h2>
            </div>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
              Articles documenting the evolutionary journey from mathematics to full-stack engineering and software design.
            </p>
            <ul className="space-y-4">
              {[
                { name: "Who is Jitendra Nimod?", path: "/blog/who-is-jitendra-nimod" },
                { name: "My Journey as a Developer", path: "/blog/my-journey-as-developer" },
                { name: "Full Stack Developer Rajasthan", path: "/blog/full-stack-developer-rajasthan" }
              ].map((blog) => (
                <li key={blog.path}>
                  <Link href={blog.path} className="group flex items-center gap-3 p-4 rounded-2xl border border-white/[0.03] bg-white/[0.01] hover:border-white/[0.1] hover:bg-white/[0.04] transition-all">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-white transition-colors"></div>
                    <span className="text-zinc-300 group-hover:text-white transition-colors text-sm">{blog.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

        </div>

        {/* EXTERNAL ECOSYSTEM */}
        <section className="pt-10 border-t border-white/10">
          <div className="flex items-center gap-3 mb-8">
            <LinkIcon className="w-6 h-6 text-white" />
            <h2 className="text-2xl font-semibold text-white tracking-tight">The External Ecosystem</h2>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a href="https://github.com/jitendra-math" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl border border-white/[0.05] text-sm text-zinc-400 hover:text-white hover:bg-white/[0.05] transition-all flex items-center gap-2">
              GitHub Infrastructure
            </a>
            <a href="https://dev.to/jitendrasingh" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl border border-white/[0.05] text-sm text-zinc-400 hover:text-white hover:bg-white/[0.05] transition-all flex items-center gap-2">
              Dev.to Publications
            </a>
            <a href="https://medium.com/@i.jitendra.singh0" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl border border-white/[0.05] text-sm text-zinc-400 hover:text-white hover:bg-white/[0.05] transition-all flex items-center gap-2">
              Medium Articles
            </a>
          </div>
        </section>

      </article>
    </main>
  );
}
