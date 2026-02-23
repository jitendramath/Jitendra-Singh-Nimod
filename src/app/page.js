import Image from "next/image";
import identity from "../data/identity";
import StructuredData from "../components/StructuredData";

// 🔥 PRO SEO METADATA - Google & AI Bots के लिए
export const metadata = {
  metadataBase: new URL("https://jitendrasingh.online"),
  title: "Jitendra Singh Nimod | Full Stack Developer & Founder of JSS Originals",
  description:
    "Official website of Jitendra Singh Nimod (JS Nimod). Full Stack Web Developer and B.Sc Mathematics student from Rajasthan, India. Exploring modern web applications and AI-optimized digital platforms.",
  keywords: [
    "jitendra singh nimod",
    "jitendra nimod",
    "jitu nimod",
    "js nimod",
    "jitendra singh developer",
    "full stack developer rajasthan",
    "jitendra singh kuchaman city didwana",
    "jss originals founder",
    "nimod village developer",
  ],
  authors: [{ name: "Jitendra Singh Nimod", url: "https://jitendrasingh.online" }],
  creator: "Jitendra Singh Nimod",
  publisher: "JSS Originals",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Jitendra Singh Nimod — Official Developer Profile",
    description:
      "Full Stack Web Developer from Rajasthan India. Founder of JSS Originals, building fast & scalable digital systems.",
    url: "https://jitendrasingh.online",
    siteName: "Jitendra Singh Nimod Official",
    images: [
      {
        url: "/images/og/og-main.jpg",
        width: 1200,
        height: 630,
        alt: "Jitendra Singh Nimod - Full Stack Developer",
      },
    ],
    locale: "en_IN",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jitendra Singh Nimod | Developer",
    description: "Full Stack Developer from Rajasthan. Building JSS Originals.",
    creator: "@jitendranimod", // Twitter Handle yahan zaroor check karna
    images: ["/images/og/og-main.jpg"],
  },
  // Google Search Console verification tag (Isko baad me apna actual code de dena)
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE", 
  },
};

export default function HomePage() {
  return (
    // <main> tag AI aur Screen Readers ko batata hai ki ye core content hai
    <main className="min-h-screen bg-slate-50 selection:bg-blue-200 selection:text-blue-900 overflow-hidden">
      <StructuredData />

      {/* 🚀 HERO SECTION */}
      <section 
        id="hero" 
        className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-6 max-w-7xl mx-auto"
        aria-label="Introduction"
      >
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT CONTENT */}
          <div className="flex flex-col space-y-6 z-10 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900">
              {identity.name}
            </h1>

            <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
              {identity.title}
            </h2>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
              {identity.description} Currently pursuing{" "}
              <strong className="text-slate-800">{identity.education.degree}</strong> at{" "}
              <span className="text-slate-800">{identity.education.college}</span>. 
              Proudly based in {identity.location.city}, {identity.location.state}, {identity.location.country}.
            </p>

            <p className="text-slate-600 leading-relaxed">
              Popularly recognized across the internet as{" "}
              <strong>{identity.alternateNames.join(", ")}</strong>. I am the founder of{" "}
              <strong>{identity.brand}</strong>, dedicated to architecting modern web applications, highly-scalable developer platforms, and fully SEO-optimized digital ecosystems.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a 
                href="/about" 
                title="Learn more about Jitendra Singh Nimod"
                className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ring-2 ring-transparent focus:ring-slate-900 focus:outline-none"
              >
                About Developer
              </a>
              <a
                href={identity.social.github}
                target="_blank"
                rel="noopener noreferrer"
                title="Visit GitHub Profile of Jitendra Nimod"
                className="px-8 py-4 bg-white text-slate-900 border border-slate-200 font-semibold rounded-full hover:border-slate-400 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                GitHub Profile
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE WITH PRO EFFECTS */}
          <div className="flex justify-center md:justify-end relative">
            <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-50 scale-150"></div>
            <div className="relative w-80 h-80 lg:w-[450px] lg:h-[450px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-900/5 group">
              <Image
                src={identity.images.main}
                alt="Jitendra Singh Nimod - Full Stack Web Developer from Rajasthan India"
                fill
                priority
                sizes="(max-width: 768px) 320px, 450px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 🌐 SOCIAL AUTHORITY (Semantic <nav> for links) */}
      <section className="bg-white py-16 border-y border-slate-200" aria-label="Official Web Presence">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-slate-900 tracking-tight">
              Official Presence Across Internet
            </h3>
            <p className="text-slate-500 mt-2">Verified digital footprints of Jitendra Singh</p>
          </div>

          <nav className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4" aria-label="Social Links">
            {[
              { name: "GitHub", url: "https://github.com/jitendra-math" },
              { name: "LinkedIn", url: "https://www.linkedin.com/in/jitendra-singh07" },
              { name: "Twitter / X", url: "https://x.com/jitendranimod" },
              { name: "Instagram", url: "https://www.instagram.com/jitendra.07_7" },
              { name: "Medium", url: "https://medium.com/@i.jitendra.singh0" },
              { name: "Dev.to", url: "https://dev.to/jitendrasingh" },
              { name: "Hashnode", url: "https://jitendrasinghnimod.hashnode.dev" },
              { name: "About.me", url: "https://about.me/jitendrasinghnimod" },
              { name: "YouTube", url: "https://www.youtube.com/@jitendranimod" },
            ].map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`${link.name} profile of Jitendra Singh Nimod`}
                className="flex items-center justify-center py-4 px-6 bg-slate-50 rounded-xl font-semibold text-slate-700 hover:bg-slate-900 hover:text-white transition-all duration-300 border border-slate-100 hover:shadow-lg hover:-translate-y-1"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* 📝 SEO AUTHORITY TEXT (Semantic <article>) */}
      <section className="py-20 px-6 max-w-4xl mx-auto" aria-labelledby="about-heading">
        <article className="prose prose-lg prose-slate md:prose-xl">
          <h3 id="about-heading" className="text-3xl font-bold text-slate-900 mb-6 text-center">
            Digital Identity & Background
          </h3>
          
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 space-y-6 text-slate-600 leading-relaxed">
            <p>
              <strong>Jitendra Singh Nimod</strong> is an Indian full-stack web developer hailing from 
              Rajasthan, India. Across tech communities, he is widely recognized online as <em>Jitendra Nimod</em>, <em>Jitu Nimod</em>, and <em>JS Nimod</em>. This official website serves as the central hub representing his verified digital identity, technical writings, and professional portfolio.
            </p>

            <p>
              If your search intent was to find Jitendra Singh Nimod from <strong>Kuchaman City</strong>, 
              <strong>Didwana</strong>, or the village of Nimod in Rajasthan, this verified domain confirms his identity as a passionate software developer and mathematics student.
            </p>

            <p>
              As the lead developer and founder of <strong>{identity.brand}</strong>, his primary focus revolves around architecting lightning-fast, highly accessible, and fundamentally SEO-optimized web platforms. From experimental AI tools to robust developer ecosystems, his work spans across the modern internet landscape.
            </p>
          </div>
        </article>
      </section>

      {/* 🔗 INTERNAL LINKS BOOST (Sitemap style for deep crawling) */}
      <footer className="bg-slate-900 py-16 text-slate-400 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-xl font-semibold text-white mb-8">Explore Ecosystem</h3>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium" aria-label="Footer Navigation">
            <a href="/about" className="hover:text-white transition-colors">About</a>
            <a href="/developer-profile" className="hover:text-white transition-colors">Developer Profile</a>
            <a href="/student-profile" className="hover:text-white transition-colors">Student Profile</a>
            <a href="/photos-jitendra-singh-nimod" className="hover:text-white transition-colors">Photos</a>
            <a href="/blog" className="hover:text-white transition-colors">Tech Blog</a>
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
            <a href="/jss-originals" className="hover:text-white transition-colors">JSS Originals</a>
          </nav>
          
          <p className="mt-12 text-xs text-slate-600">
            © {new Date().getFullYear()} Jitendra Singh Nimod. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
