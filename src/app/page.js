// app/page.js

import Image from "next/image";
import identity from "../data/identity";
import StructuredData from "../components/StructuredData";

export const metadata = {
  metadataBase: new URL("https://me.jitubanna.com"),
  title: "Jitendra Singh Nimod — Official Website | Full Stack Developer Rajasthan",
  description:
    "Official portfolio of Jitendra Singh Nimod (JS Nimod). Full Stack Developer, Founder of JSS Originals, and B.Sc Mathematics student from Rajasthan.",
  keywords: [
    "Jitendra Singh Nimod",
    "Jitendra Nimod",
    "Jitu Nimod",
    "JS Nimod",
    "Jitendra Singh Developer",
    "Jitendra Singh Rajasthan",
    "JSS Originals Founder",
    "Full Stack Developer Nimod",
    "Jitendra Singh Shekhawat",
    "Jitendra Singh Rajput",
    "Jitu Banna Developer",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Jitendra Singh Nimod Official",
    description: "Verified website of Jitendra Singh Nimod. Developer from Rajasthan.",
    url: "https://me.jitubanna.com",
    siteName: "Jitendra Singh Nimod",
    type: "profile",
    images: [{ url: "/images/og/og-main.jpg" }],
  },
};

export default function HomePage() {
  return (
    <main className="bg-[#0b0b0f] text-white min-h-screen font-sans relative overflow-hidden">

      <StructuredData />

      {/* ===== BACKGROUND BLOBS ===== */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-600 opacity-30 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600 opacity-30 blur-[160px] rounded-full"></div>
      <div className="absolute top-[40%] left-[40%] w-[500px] h-[500px] bg-indigo-600 opacity-20 blur-[140px] rounded-full"></div>

      {/* ===== NOTICE BOX ===== */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-12">

        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-[2px] rounded-2xl mb-12">
          <div className="bg-[#0b0b0f] rounded-2xl p-6 text-center">
            <p className="text-sm md:text-base text-slate-300">
              ⚠️ This website is part of the identity archive of{" "}
              <strong>Jitendra Singh Nimod</strong>.
            </p>

            <p className="mt-3 text-lg md:text-xl font-bold">
              The official and primary website is:
            </p>

            <a
              href="https://jitubanna.com"
              className="inline-block mt-4 text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"
            >
              https://jitubanna.com
            </a>

            <p className="mt-3 text-xs text-slate-500">
              This page exists for search indexing and identity documentation.
            </p>
          </div>
        </div>

      </section>

      {/* ===== HERO ===== */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-16 items-center">

        <div>
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Jitendra
            <br />
            Singh
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              {" "}
              Nimod
            </span>
          </h1>

          <p className="text-xl text-slate-300 mb-6">
            Full Stack Developer • Founder of {identity.brand}
          </p>

          <p className="text-slate-400 leading-relaxed max-w-xl mb-10">
            Welcome to the digital identity of{" "}
            <strong>Jitendra Singh Nimod</strong>, also known as{" "}
            <strong>JS Nimod</strong> and <strong>Jitu Nimod</strong>.  
            A developer from Rajasthan focused on building scalable web
            applications, modern interfaces and AI-driven digital systems.
          </p>

          <div className="flex flex-wrap gap-4">

            <a
              href="/about"
              className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:scale-105 transition"
            >
              About
            </a>

            <a
              href="/contact"
              className="px-8 py-3 border border-white/30 rounded-xl hover:bg-white/10 transition"
            >
              Contact
            </a>

          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <div className="relative w-[320px] h-[320px] rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
            <Image
              src={identity.images.main}
              alt="Jitendra Singh Nimod"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

      </section>

      <section className="relative z-10 py-16 border-t border-white/10">

  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-center text-2xl font-bold mb-10">
      Official Profiles
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">

      <a href="https://github.com/jitendra-math" target="_blank" className="p-4 bg-white/5 rounded-xl text-center hover:bg-white/10 transition">
        GitHub
      </a>

      <a href="https://linkedin.com/in/jitendra-singh07" target="_blank" className="p-4 bg-white/5 rounded-xl text-center hover:bg-white/10 transition">
        LinkedIn
      </a>

      <a href="https://x.com/jitendranimod" target="_blank" className="p-4 bg-white/5 rounded-xl text-center hover:bg-white/10 transition">
        X / Twitter
      </a>

      <a href="https://medium.com/@i.jitendra.singh0" target="_blank" className="p-4 bg-white/5 rounded-xl text-center hover:bg-white/10 transition">
        Medium
      </a>

      <a href="https://dev.to/jitendrasingh" target="_blank" className="p-4 bg-white/5 rounded-xl text-center hover:bg-white/10 transition">
        Dev.to
      </a>

      <a href="https://jitendrasinghnimod.hashnode.dev" target="_blank" className="p-4 bg-white/5 rounded-xl text-center hover:bg-white/10 transition">
        Hashnode
      </a>

      <a href="https://about.me/jitendrasinghnimod" target="_blank" className="p-4 bg-white/5 rounded-xl text-center hover:bg-white/10 transition">
        About.me
      </a>

      <a href="https://youtube.com/@jitendranimod" target="_blank" className="p-4 bg-white/5 rounded-xl text-center hover:bg-white/10 transition">
        YouTube
      </a>

      <a href="https://instagram.com/jitendra.07_7" target="_blank" className="p-4 bg-white/5 rounded-xl text-center hover:bg-white/10 transition">
        Instagram
      </a>

      <a href="https://www.reddit.com/user/jitendranimod" target="_blank" className="p-4 bg-white/5 rounded-xl text-center hover:bg-white/10 transition">
        Reddit
      </a>

      <a href="https://www.producthunt.com/@jitendra_nimod" target="_blank" className="p-4 bg-white/5 rounded-xl text-center hover:bg-white/10 transition">
        Product Hunt
      </a>

      <a href="https://www.pinterest.com/jitendranimod" target="_blank" className="p-4 bg-white/5 rounded-xl text-center hover:bg-white/10 transition">
        Pinterest
      </a>

      <a href="https://www.tumblr.com/jitendranimod" target="_blank" className="p-4 bg-white/5 rounded-xl text-center hover:bg-white/10 transition">
        Tumblr
      </a>

      <a href="https://linktr.ee/jitendranimod" target="_blank" className="p-4 bg-white/5 rounded-xl text-center hover:bg-white/10 transition">
        Linktree
      </a>

      <a href="/rss.xml" className="p-4 bg-white/5 rounded-xl text-center hover:bg-white/10 transition">
        RSS Feed
      </a>

    </div>

  </div>

</section>
      {/* ===== ABOUT SECTION ===== */}
      <section className="relative z-10 py-20">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-black mb-8">
            Who is Jitendra Singh Nimod?
          </h2>

          <p className="text-slate-300 leading-relaxed mb-6">
            <strong>Jitendra Singh Nimod</strong> is a full stack developer
            from Rajasthan, India. He is the founder of{" "}
            <strong>JSS Originals</strong> and actively builds web
            applications, developer tools and digital identity systems.
          </p>

          <p className="text-slate-400 leading-relaxed">
            Known by multiple names such as <strong>Jitu Nimod</strong>,
            <strong> JS Nimod</strong>, and <strong>Jitendra Nimod</strong>,
            he focuses on combining modern web technologies with strong
            search-engine presence and developer ecosystems.
          </p>

        </div>

      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-white/10 py-10 text-center text-slate-500 text-sm">

        © {new Date().getFullYear()} Jitendra Singh Nimod • Digital Identity Archive

      </footer>

    </main>
  );
}
