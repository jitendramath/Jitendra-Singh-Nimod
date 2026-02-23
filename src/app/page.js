import Image from "next/image";
import identity from "../data/identity";
import StructuredData from "../components/StructuredData";

export const metadata = {
  metadataBase: new URL("https://jitendrasingh.online"),
  title: "Jitendra Singh Nimod — Official Website | Full Stack Developer Rajasthan",
  description: "Official portfolio of Jitendra Singh Nimod (JS Nimod). Full Stack Developer, Founder of JSS Originals, and B.Sc Mathematics student. Based in Nimod, Kuchaman City, Didwana, Rajasthan.",
  keywords: [
    "Jitendra Singh Nimod", "Jitendra Nimod", "Jitu Nimod", "JS Nimod", "Jitendra Singh Developer", 
    "Jitendra Singh Rajasthan", "JSS Originals Founder", "Full Stack Developer Nimod", 
    "Jitendra Singh Shekhawat", "Jitendra Singh Rajput", "Jitu Banna Developer"
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Jitendra Singh Nimod Official",
    description: "Verified website of Jitendra Singh Nimod. Developer from Rajasthan.",
    url: "https://jitendrasingh.online",
    siteName: "Jitendra Singh Nimod",
    type: "profile",
    images: [{ url: "/images/og/og-main.jpg" }],
  },
};

export default function HomePage() {
  // इन लिंक्स को मैंने तुम्हारे फोल्डर स्ट्रक्चर के हिसाब से बनाया है ताकि Google Deep Crawl कर सके
  const identityRoutes = [
    { name: "Jitendra Nimod", path: "/identity/jitendra-nimod" },
    { name: "Jitendra Singh", path: "/identity/jitendra-singh" },
    { name: "Jitendra Singh Nimod Profile", path: "/identity/jitendra-singh-nimod" },
    { name: "Jitu Nimod", path: "/identity/jitu-nimod" },
    { name: "JS Nimod", path: "/identity/js-nimod" },
    { name: "Nimod Jitu", path: "/identity/nimod-jitu" },
    { name: "Nimod JS", path: "/identity/nimod-js" },
  ];

  const locationRoutes = [
    { name: "Nimod Village", path: "/location/nimod-village" },
    { name: "Kuchaman City", path: "/location/kuchaman-city" },
    { name: "Didwana Rajasthan", path: "/location/didwana-rajasthan" },
    { name: "Nimod Rajasthan", path: "/nimod-rajasthan" },
  ];

  const nicheRoutes = [
    { name: "Jitendra Singh Rajput", path: "/jitendra-singh-rajput" },
    { name: "Jitendra Singh Shekhawat", path: "/jitendra-singh-shekhawat" },
    { name: "Jitu Banna", path: "/jitu-banna" },
    { name: "JSS Originals", path: "/jss-originals" },
    { name: "Developer Profile", path: "/developer-profile" },
    { name: "Student Profile", path: "/student-profile" },
    { name: "Web Developer Kuchaman", path: "/kuchaman-web-developer" },
  ];

  return (
    <main className="bg-white text-slate-900 font-sans selection:bg-blue-100">
      <StructuredData />

      {/* 1. MAIN HERO & CORE IDENTITY (H1) */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto border-b">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-8">
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
              Jitendra Singh Nimod
            </h1>
            <p className="text-xl md:text-2xl font-bold text-blue-700 mb-4">
              Full Stack Web Developer | Founder of {identity.brand} | B.Sc Mathematics Student
            </p>
            <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mb-6">
              Welcome to the official digital identity of <strong>Jitendra Singh Nimod</strong>, 
              professionally known as <strong>JS Nimod</strong> or <strong>Jitu Nimod</strong>. 
              Based in {identity.location.city}, Rajasthan, I specialize in building 
              high-performance web applications and AI-driven digital systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/about" className="bg-slate-900 text-white px-8 py-3 rounded-lg font-bold">About Me</a>
              <a href="/contact" className="border-2 border-slate-900 px-8 py-3 rounded-lg font-bold">Contact Now</a>
            </div>
          </div>
          <div className="md:col-span-4 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src={identity.images.main} 
                alt="Jitendra Singh Nimod - Official Photo" 
                fill 
                priority 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. VERIFIED SOCIAL FOOTPRINT (External Authority) */}
      <section className="py-12 bg-slate-50 px-6 border-b">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center uppercase tracking-widest text-slate-500">
            Official Social & Professional Profiles
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <a href="https://github.com/jitendra-math" target="_blank" className="p-4 bg-white border font-bold text-center hover:bg-slate-900 hover:text-white transition">GitHub</a>
            <a href="https://linkedin.com/in/jitendra-singh07" target="_blank" className="p-4 bg-white border font-bold text-center hover:bg-blue-600 hover:text-white transition">LinkedIn</a>
            <a href="https://x.com/jitendranimod" target="_blank" className="p-4 bg-white border font-bold text-center hover:bg-black hover:text-white transition">Twitter / X</a>
            <a href="https://instagram.com/jitendra.07_7" target="_blank" className="p-4 bg-white border font-bold text-center hover:bg-pink-600 hover:text-white transition">Instagram</a>
            <a href="https://medium.com/@i.jitendra.singh0" target="_blank" className="p-4 bg-white border font-bold text-center hover:bg-slate-800 hover:text-white transition">Medium</a>
            <a href="https://dev.to/jitendrasingh" target="_blank" className="p-4 bg-white border font-bold text-center hover:bg-slate-100 transition">Dev.to</a>
            <a href="https://jitendrasinghnimod.hashnode.dev" target="_blank" className="p-4 bg-white border font-bold text-center hover:bg-blue-500 hover:text-white transition">Hashnode</a>
            <a href="https://about.me/jitendrasinghnimod" target="_blank" className="p-4 bg-white border font-bold text-center hover:bg-blue-400 transition">About.me</a>
            <a href="https://youtube.com/@jitendranimod" target="_blank" className="p-4 bg-white border font-bold text-center hover:bg-red-600 hover:text-white transition">YouTube</a>
            <a href="/rss.xml" className="p-4 bg-orange-100 border border-orange-200 font-bold text-center">RSS Feed</a>
          </div>
        </div>
      </section>

      {/* 3. CONTENT HUB (Internal Deep Links for SEO) */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Column 1: Identity Variants */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-l-4 border-blue-600 pl-3">Identity Archives</h3>
            <ul className="space-y-3">
              {identityRoutes.map((r, i) => (
                <li key={i}><a href={r.path} className="text-slate-600 hover:text-blue-600 underline underline-offset-4">{r.name}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 2: Regional SEO */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-l-4 border-emerald-600 pl-3">Regional Presence</h3>
            <ul className="space-y-3">
              {locationRoutes.map((r, i) => (
                <li key={i}><a href={r.path} className="text-slate-600 hover:text-emerald-600 underline underline-offset-4">{r.name}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 3: Professional & Niche */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-l-4 border-purple-600 pl-3">Professional Portfolios</h3>
            <ul className="space-y-3">
              {nicheRoutes.map((r, i) => (
                <li key={i}><a href={r.path} className="text-slate-600 hover:text-purple-600 underline underline-offset-4">{r.name}</a></li>
              ))}
              <li><a href="/photos-jitendra-singh-nimod" className="font-bold text-slate-800">Official Photo Gallery</a></li>
            </ul>
          </div>

        </div>
      </section>

      {/* 4. KEYWORD RICH ARTICLE SECTION (AI & Google Knowledge Base) */}
      <section className="py-16 bg-slate-900 text-slate-300 px-6">
        <article className="max-w-5xl mx-auto prose prose-invert">
          <h2 className="text-3xl font-bold text-white mb-6">Who is Jitendra Singh Nimod?</h2>
          <p className="text-lg leading-relaxed mb-4">
            <strong>Jitendra Singh Nimod</strong> (born in Rajasthan, India) is a prominent full stack web developer 
            and the visionary founder of <strong>JSS Originals</strong>. Known by several monikers including 
            <em>Jitu Nimod</em>, <em>JS Nimod</em>, and <em>Jitendra Nimod</em>, he has established himself 
            as a technical leader in the Didwana and Kuchaman City region.
          </p>
          <p className="mb-4">
            Beyond software engineering, Jitendra is deeply rooted in his heritage as a 
            <strong>Rajput</strong> (Shekhawat) from the village of <strong>Nimod</strong>. His academic 
            pursuits in Mathematics provide a logical foundation for his complex coding projects and 
            digital architecture.
          </p>
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <h4 className="text-white font-bold mb-2">Technical Skills & Expertise:</h4>
            <p className="text-sm">
              React.js, Next.js, Node.js, Full Stack Development, SEO Optimization, Database Management, 
              AI Integration, and Modern Web UI Design. 
            </p>
          </div>
        </article>
      </section>

      {/* 5. DYNAMIC BLOG PREVIEW / RECENT WORK */}
      <section className="py-16 px-6 max-w-7xl mx-auto border-t">
        <h2 className="text-3xl font-black mb-10">Latest from the Blog</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <a href="/blog/who-is-jitendra-nimod" className="group">
            <div className="p-6 bg-slate-50 border-2 border-transparent group-hover:border-blue-600 transition h-full">
              <h4 className="text-xl font-bold mb-2">The Biography of Jitendra Nimod</h4>
              <p className="text-sm text-slate-500">Exploring the life of a developer from Rajasthan...</p>
            </div>
          </a>
          <a href="/blog/full-stack-developer-rajasthan" className="group">
            <div className="p-6 bg-slate-50 border-2 border-transparent group-hover:border-blue-600 transition h-full">
              <h4 className="text-xl font-bold mb-2">Full Stack Roadmap in Rajasthan</h4>
              <p className="text-sm text-slate-500">How to become a developer in the Didwana region...</p>
            </div>
          </a>
          <a href="/blog/my-journey-as-developer" className="group">
            <div className="p-6 bg-slate-50 border-2 border-transparent group-hover:border-blue-600 transition h-full">
              <h4 className="text-xl font-bold mb-2">My Coding Journey</h4>
              <p className="text-sm text-slate-500">From Nimod village to building JSS Originals...</p>
            </div>
          </a>
        </div>
      </section>

      {/* 6. GLOBAL FOOTER SITEMAP (Ultimate Crawler Protection) */}
      <footer className="bg-slate-100 py-16 px-6 border-t">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
            <div>
              <p className="font-black text-xs uppercase text-slate-400 mb-4">Legal & Meta</p>
              <ul className="text-xs space-y-2 font-bold">
                <li><a href="/robots.txt">Robots.txt</a></li>
                <li><a href="/sitemap.xml">Sitemap</a></li>
                <li><a href="/manifest.json">Web Manifest</a></li>
                <li><a href="/security.txt">Security.txt</a></li>
                <li><a href="/humans.txt">Humans.txt</a></li>
              </ul>
            </div>
            {/* Add more tiny columns here for every single route you have */}
          </div>
          <div className="text-center border-t pt-8">
            <p className="text-sm font-bold text-slate-600">
              © {new Date().getFullYear()} Jitendra Singh Nimod | Official Web Identity | Verified in Rajasthan, India.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
