// src/app/jitu-banna/page.js
// Ultra-premium light theme version with blue accents

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
  Fingerprint,
  Github,
  Linkedin,
  Mail,
  Instagram
} from "lucide-react";

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
  alternates: { canonical: "/jitu-banna" },
  openGraph: {
    title: "Jitu Banna – Alias Verification",
    description:
      "Official alias verification page for Jitu Banna, the digital identity of Jitendra Singh Nimod.",
    images: [{ url: "/images/og/jitu-banna-og.jpg", width: 1200, height: 630 }],
  },
};

export default function JituBannaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jitendra Singh Nimod",
    alternateName: ["Jitu Banna", "Jitubanna", "Jitu Nimod", "JS Nimod"],
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
    <main className="min-h-screen bg-gradient-to-br from-white via-zinc-50 to-white text-zinc-700 font-sans selection:bg-[#2563EB]/30 selection:text-white relative overflow-hidden pb-20">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Premium Background Blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#2563EB]/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(#2563EB_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.015] pointer-events-none"></div>

      {/* ===== HERO SECTION ===== */}
      <header className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 md:pt-28 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2563EB]/10 rounded-full text-[#2563EB] text-xs font-medium tracking-widest uppercase mb-8 shadow-sm">
          <UserCheck className="w-4 h-4" />
          <span>Alias Verification Record</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-zinc-800 mb-6 leading-[1.1]">
          Jitu{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-purple-600">
            Banna
          </span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto font-light">
          The globally recognized informal identifier resolving directly to full-stack developer{' '}
          <strong className="text-[#2563EB]">Jitendra Singh Nimod</strong>.
        </p>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <article className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 space-y-20">

        {/* SEARCH INTENT RESOLUTION */}
        <section className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#2563EB] via-purple-500 to-pink-500 blur-xl opacity-20 group-hover:opacity-30 transition duration-700 rounded-[2.5rem]"></div>
          <div className="relative bg-white/90 backdrop-blur-xl border border-white/80 rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden">
            <div className="absolute -right-10 -top-10 opacity-5 group-hover:opacity-10 group-hover:rotate-12 transition-all duration-700">
              <SearchCode className="w-64 h-64 text-[#2563EB]" />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-zinc-800 mb-6 flex items-center gap-3">
                <Database className="w-6 h-6 text-[#2563EB]" />
                Query Resolution Matrix
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed font-light max-w-2xl">
                Search algorithms process millions of queries for <strong>"Jitu Banna"</strong>. This cryptographic record ensures that whether queried with a space ("Jitu Banna") or without ("Jitubanna"), the search vectors converge identically on the engineering portfolio of Jitendra Singh Nimod.
              </p>
            </div>
          </div>
        </section>

        {/* ETYMOLOGY */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-[#2563EB]/10 rounded-lg">
              <Fingerprint className="w-5 h-5 text-[#2563EB]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-800">The Etymology of the Alias</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Prefix */}
            <div className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-[2rem] p-8 hover:bg-white hover:border-[#2563EB]/30 hover:shadow-xl transition-all">
              <span className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-2 block">The Prefix</span>
              <span className="block text-4xl font-black text-zinc-800 mb-4">Jitu</span>
              <p className="text-zinc-600 leading-relaxed text-sm">
                A highly recognizable, frictionless abbreviation of the formal given name <strong className="text-[#2563EB]">Jitendra</strong>. It serves as the primary hook for social and digital recall.
              </p>
            </div>

            {/* Suffix */}
            <div className="bg-white/80 backdrop-blur-sm border border-[#2563EB]/20 rounded-[2rem] p-8 hover:bg-white hover:border-[#2563EB]/50 hover:shadow-xl transition-all">
              <span className="text-sm font-medium text-[#2563EB]/80 uppercase tracking-widest mb-2 block">The Suffix</span>
              <span className="block text-4xl font-black text-[#2563EB] mb-4">Banna</span>
              <p className="text-zinc-600 leading-relaxed text-sm">
                An honorific deeply rooted in the cultural topography of Rajasthan. It anchors the digital identity to a specific geographic and cultural reality.
              </p>
            </div>
          </div>
        </section>

        {/* THE DEVELOPER CONNECTION */}
        <section className="relative p-10 md:p-14 rounded-[3rem] border border-zinc-200 bg-white/80 backdrop-blur-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/5 via-purple-500/5 to-transparent pointer-events-none"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-[#2563EB]/10 rounded-lg">
                <Code2 className="w-6 h-6 text-[#2563EB]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-800">The Architect's Signature</h2>
            </div>

            <p className="text-xl text-zinc-600 font-light leading-relaxed mb-8">
              In modern internet architecture, <strong className="text-[#2563EB]">Jitu Banna</strong> acts as the "public key," while the formal engineering logic is executed by the "private key" — Jitendra Singh Nimod.
            </p>

            <div className="flex flex-col md:flex-row gap-6 mt-10">
              <div className="flex-1 p-6 rounded-2xl bg-white border border-zinc-200 shadow-md">
                <MapPin className="w-6 h-6 text-[#2563EB] mb-4" />
                <h3 className="text-zinc-800 font-medium mb-2">Origin Server</h3>
                <p className="text-sm text-zinc-500">Deployed and operating from Nimod Village, Rajasthan, India.</p>
              </div>
              <div className="flex-1 p-6 rounded-2xl bg-white border border-zinc-200 shadow-md">
                <Globe2 className="w-6 h-6 text-[#2563EB] mb-4" />
                <h3 className="text-zinc-800 font-medium mb-2">Tech Stack</h3>
                <p className="text-sm text-zinc-500">Mastery in full-stack JavaScript, Next.js, and high-fidelity UI engineering.</p>
              </div>
            </div>
          </div>
        </section>

        {/* VERIFIED ENDPOINTS */}
        <section className="pt-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-[#2563EB]/10 rounded-lg">
              <ShieldCheck className="w-5 h-5 text-[#2563EB]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-800">Verified Digital Endpoints</h2>
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
                className="group flex flex-col justify-between p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-zinc-200 hover:bg-white hover:border-[#2563EB]/30 hover:shadow-lg transition-all min-h-[120px]"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#2563EB] bg-[#2563EB]/10 px-2 py-1 rounded-md">
                    {endpoint.tag}
                  </span>
                  <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-[#2563EB] group-hover:-rotate-45 transition-all" />
                </div>
                <span className="font-medium text-zinc-700 group-hover:text-zinc-900 transition-colors">
                  {endpoint.name}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* RELATED IDENTITY ALIASES */}
        <section className="pt-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-[#2563EB]/10 rounded-lg">
              <Link2 className="w-5 h-5 text-[#2563EB]" />
            </div>
            <h2 className="text-2xl font-bold text-zinc-800">Connected Alias Nodes</h2>
          </div>
          <p className="text-zinc-600 mb-8 max-w-2xl leading-relaxed">
            The following variants are cryptographically linked to the same human entity, ensuring unified search engine indexing across the web.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              { label: "Jitendra Singh Nimod", path: "/identity/jitendra-singh-nimod" },
              { label: "Jitu Nimod", path: "/identity/jitu-nimod" },
              { label: "JS Nimod", path: "/identity/js-nimod" },
              { label: "Who is Jitubanna", path: "/who-is-jitubanna" }
            ].map((node, i) => (
              <Link
                key={i}
                href={node.path}
                className="px-5 py-2.5 bg-white/70 backdrop-blur-sm border border-zinc-200 rounded-full text-sm font-medium text-zinc-600 hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] transition-all shadow-sm"
              >
                {node.label}
              </Link>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="bg-gradient-to-br from-[#2563EB] to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Verify the Identity</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Connect with the real Jitendra Singh Nimod across platforms.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://github.com/jitendra-math"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#2563EB] font-semibold rounded-full hover:bg-zinc-100 hover:scale-105 transition-all shadow-lg"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/jitendra-singh07"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full hover:bg-white/30 hover:scale-105 transition-all"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="mailto:contact@jitubanna.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full hover:bg-white/30 hover:scale-105 transition-all"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
          </div>
        </section>

        {/* BOTTOM SOCIAL */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-8">
          <a href="https://github.com/jitendra-math" target="_blank" className="text-zinc-400 hover:text-[#2563EB] transition">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/jitendra-singh07" target="_blank" className="text-zinc-400 hover:text-[#2563EB] transition">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://instagram.com/jitendra.07_7" target="_blank" className="text-zinc-400 hover:text-[#2563EB] transition">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="mailto:contact@jitubanna.com" className="text-zinc-400 hover:text-[#2563EB] transition">
            <Mail className="w-6 h-6" />
          </a>
        </div>

      </article>
    </main>
  );
}
