// src/app/jitu-banna/page.js

import Link from "next/link";
import { 
  UserCheck, 
  SearchCode, 
  MapPin, 
  Code2, 
  Globe2, 
  ShieldCheck, 
  Link2,
  Database,
  ArrowRight,
  Fingerprint
} from "lucide-react";

// 📌 APPLE-TIER SEO METADATA
export const metadata = {
  title: "Jitu Banna | Alias Verification | Jitendra Singh Nimod",
  description:
    "Jitu Banna is the primary informal alias and digital identifier for Jitendra Singh Nimod, a full stack web developer from Rajasthan, India.",
  keywords: [
    "Jitu Banna",
    "Jitu Banna developer",
    "Who is Jitu Banna",
    "Jitu Banna Rajasthan",
    "Jitu Banna Nimod",
    "Jitu Banna Jitendra Singh Nimod",
    "Jitu Banna portfolio",
    "Jitu Banna website",
    "Jitu Banna developer Rajasthan"
  ],
  alternates: {
    canonical: "/jitu-banna"
  }
};

export default function Page() {

  // 🧠 ADVANCED SEO: Explicit Alias Verification Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jitendra Singh Nimod",
    alternateName: [
      "Jitu Banna",
      "Jitubanna",
      "Jitu Nimod",
      "JS Nimod"
    ],
    url: "https://jitubanna.com",
    jobTitle: "Full Stack Web Developer",
    description:
      "Jitu Banna is a commonly used nickname and online identity of Jitendra Singh Nimod, a web developer from Rajasthan, India.",
    sameAs: [
      "https://github.com/jitendra-math",
      "https://instagram.com/jitendra.07_7",
      "https://x.com/jitendranimod",
      "https://medium.com/@i.jitendra.singh0",
      "https://dev.to/jitendrasingh"
    ]
  };

  return (
    <main className="min-h-screen bg-[#000000] text-zinc-400 font-sans selection:bg-indigo-500/30 pb-32 overflow-hidden">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ===== CINEMATIC HERO SECTION ===== */}
      <header className="relative pt-32 pb-20 px-6">
        {/* Deep Tech Indigo/Blue Glow */}
        <div className="absolute top-0 right-1/4 translate-x-1/2 w-[600px] h-[500px] bg-indigo-500/10 blur-[130px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium tracking-widest uppercase mb-8 shadow-[0_0_30px_rgba(99,102,241,0.15)]">
            <UserCheck className="w-4 h-4" />
            <span>Alias Verification Record</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 leading-[1.1]">
            Jitu <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Banna</span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light max-w-2xl mx-auto">
            The globally recognized informal identifier resolving directly to full-stack developer <strong className="text-white font-medium">Jitendra Singh Nimod</strong>.
          </p>
        </div>
      </header>

      {/* ===== MAIN ARCHITECTURE CONTENT ===== */}
      <article className="max-w-4xl mx-auto px-6 space-y-24">

        {/* SEARCH INTENT RESOLUTION (THE SEO VAULT) */}
        <section className="relative p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-zinc-900/80 to-black border border-white/10 shadow-2xl overflow-hidden group">
          <div className="absolute -right-10 -top-10 opacity-5 group-hover:opacity-10 group-hover:rotate-12 transition-all duration-700">
            <SearchCode className="w-64 h-64 text-indigo-400" />
          </div>
          <div className="relative z-10">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              <Database className="w-6 h-6 text-indigo-400" />
              Query Resolution Matrix
            </h2>
            <p className="text-lg text-zinc-300 leading-relaxed font-light max-w-2xl">
              Search algorithms process millions of queries for <strong>"Jitu Banna"</strong>. This cryptographic record ensures that whether queried with a space ("Jitu Banna") or without ("Jitubanna"), the search vectors converge identically on the engineering portfolio of Jitendra Singh Nimod.
            </p>
          </div>
        </section>

        

        {/* SEMANTICS (BENTO GRID) */}
        <section>
          <div className="flex items-center gap-3 mb-10">
            <Fingerprint className="w-7 h-7 text-white" />
            <h2 className="text-3xl font-bold text-white tracking-tight">The Etymology of the Alias</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-[2rem] border border-white/[0.05] bg-white/[0.02] hover:bg-white/[0.04] transition-colors flex flex-col justify-center">
              <span className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-2">The Prefix</span>
              <span className="block text-4xl font-black text-white mb-4">Jitu</span>
              <p className="text-zinc-400 leading-relaxed text-sm">
                A highly recognizable, frictionless abbreviation of the formal given name <strong>Jitendra</strong>. It serves as the primary hook for social and digital recall.
              </p>
            </div>
            
            <div className="p-8 rounded-[2rem] border border-indigo-500/20 bg-indigo-500/5 hover:bg-indigo-500/10 transition-colors flex flex-col justify-center">
              <span className="text-sm font-medium text-indigo-500/80 uppercase tracking-widest mb-2">The Suffix</span>
              <span className="block text-4xl font-black text-indigo-400 mb-4">Banna</span>
              <p className="text-zinc-400 leading-relaxed text-sm">
                An honorific deeply rooted in the cultural topography of Rajasthan. It anchors the digital identity to a specific geographic and cultural reality.
              </p>
            </div>
          </div>
        </section>

        {/* THE DEVELOPER CONNECTION */}
        <section className="relative p-10 md:p-14 rounded-[3rem] border border-white/[0.05] bg-zinc-900/50 backdrop-blur-xl overflow-hidden">
          {/* Subtle noise texture */}
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <Code2 className="w-7 h-7 text-cyan-400" />
              <h2 className="text-3xl font-bold text-white tracking-tight">The Architect's Signature</h2>
            </div>
            
            <p className="text-xl text-zinc-300 font-light leading-relaxed mb-8">
              In modern internet architecture, <strong>Jitu Banna</strong> acts as the "public key," while the formal engineering logic is executed by the "private key" — Jitendra Singh Nimod.
            </p>

            <div className="flex flex-col md:flex-row gap-6 mt-10">
              <div className="flex-1 p-6 rounded-2xl bg-black border border-white/5 shadow-inner">
                <MapPin className="w-6 h-6 text-zinc-500 mb-4" />
                <h3 className="text-white font-medium mb-2">Origin Server</h3>
                <p className="text-sm text-zinc-400">Deployed and operating from Nimod Village, Rajasthan, India.</p>
              </div>
              <div className="flex-1 p-6 rounded-2xl bg-black border border-white/5 shadow-inner">
                <Globe2 className="w-6 h-6 text-zinc-500 mb-4" />
                <h3 className="text-white font-medium mb-2">Tech Stack</h3>
                <p className="text-sm text-zinc-400">Mastery in full-stack JavaScript, Next.js, and high-fidelity UI engineering.</p>
              </div>
            </div>
          </div>
        </section>

        {/* VERIFIED ENDPOINTS (EXTERNAL PLATFORMS) */}
        <section className="pt-10 border-t border-white/[0.05]">
          <div className="flex items-center gap-3 mb-10">
            <ShieldCheck className="w-7 h-7 text-white" />
            <h2 className="text-3xl font-bold text-white tracking-tight">Verified Digital Endpoints</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "The Flagship Domain", url: "https://jitubanna.com", tag: "Primary" },
              { name: "Identity Archive", url: "https://me.jitubanna.com", tag: "Core" },
              { name: "GitHub Repositories", url: "https://github.com/jitendra-math", tag: "Code" },
              { name: "Medium Publications", url: "https://medium.com/@i.jitendra.singh0", tag: "Articles" },
              { name: "Dev.to Profile", url: "https://dev.to/jitendrasingh", tag: "Community" }
            ].map((endpoint, i) => (
              <a 
                key={i} 
                href={endpoint.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex flex-col justify-between p-6 rounded-2xl border border-white/[0.05] bg-white/[0.01] hover:bg-white/[0.04] hover:border-white/20 transition-all min-h-[120px]"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded-md">{endpoint.tag}</span>
                  <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-white group-hover:-rotate-45 transition-all" />
                </div>
                <span className="font-medium text-zinc-300 group-hover:text-white transition-colors">{endpoint.name}</span>
              </a>
            ))}
          </div>
        </section>

        {/* RELATED IDENTITY ALIASES */}
        <section className="pt-10 pb-20">
          <div className="flex items-center gap-3 mb-8">
            <Link2 className="w-6 h-6 text-white" />
            <h2 className="text-2xl font-bold text-white tracking-tight">Connected Alias Nodes</h2>
          </div>
          <p className="text-zinc-400 mb-8 max-w-2xl leading-relaxed">
            The following variants are cryptographically linked to the same human entity, ensuring unified search engine indexing across the web.
          </p>

          <div className="flex flex-wrap gap-4">
            {[
              { label: "Jitendra Singh Nimod", path: "/identity/jitendra-singh-nimod" },
              { label: "Jitu Nimod", path: "/identity/jitu-nimod" },
              { label: "JS Nimod", path: "/identity/js-nimod" },
              { label: "Who is Jitubanna", path: "/who-is-jitubanna" }
            ].map((node, i) => (
              <Link 
                key={i} 
                href={node.path}
                className="px-6 py-3 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/10 text-sm font-medium text-zinc-300 hover:text-white transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
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
