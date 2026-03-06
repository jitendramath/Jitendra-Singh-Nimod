// src/components/Footer.jsx

import Link from "next/link";
import identity from "../data/identity";
import {
  Fingerprint,
  MapPin,
  Compass,
  Users,
  BookOpen,
  Terminal,
  Share2,
  Sparkles
} from "lucide-react";

// 📌 HELPER COMPONENT: For clean and consistent link styling
const FooterLink = ({ href, children, external = false }) => {
  const baseClasses = "group flex items-center text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-300 w-fit";
  const textClasses = "relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-zinc-300 after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
        <span className={textClasses}>{children}</span>
      </a>
    );
  }

  return (
    <Link href={href} className={baseClasses}>
      <span className={textClasses}>{children}</span>
    </Link>
  );
};

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/[0.05] bg-black text-zinc-300 overflow-hidden selection:bg-white/20">
      
      {/* ===== SUBTLE TOP GLOW ===== */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-zinc-900/40 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-24">

        {/* ===== TOP GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* BRAND / ABOUT */}
          <div className="lg:pr-8">
            <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
              <Sparkles className="w-5 h-5 text-zinc-100 group-hover:text-white transition-colors" />
              <h3 className="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">
                {identity.name}
              </h3>
            </Link>

            <p className="text-sm text-zinc-400 leading-relaxed font-light">
              Full Stack Web Developer and B.Sc Mathematics student from {identity.location?.state || "Rajasthan"}, {identity.location?.country || "India"}. 
              Known online as {identity.alternateNames?.join(", ") || "JS Nimod"}.
            </p>

            <p className="mt-4 text-xs text-zinc-500 leading-relaxed font-light border-l border-white/10 pl-3">
              Founder of <strong className="text-zinc-300 font-medium">{identity.brand || "JSS Originals"}</strong>. 
              Building modern web applications, digital identity platforms, and developer tools.
            </p>
          </div>

          {/* CORE PAGES */}
          <div>
            <div className="flex items-center gap-2 mb-6 text-zinc-100">
              <Compass className="w-4 h-4 text-zinc-500" />
              <h3 className="font-medium text-sm tracking-wide uppercase">Core Pages</h3>
            </div>
            <div className="flex flex-col gap-3.5">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/developer-profile">Developer Profile</FooterLink>
              <FooterLink href="/student-profile">Student Profile</FooterLink>
              <FooterLink href="/photos-jitendra-singh-nimod">Photo Gallery</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </div>
          </div>

          {/* IDENTITY LINKS */}
          <div>
            <div className="flex items-center gap-2 mb-6 text-zinc-100">
              <Fingerprint className="w-4 h-4 text-zinc-500" />
              <h3 className="font-medium text-sm tracking-wide uppercase">Identity Pages</h3>
            </div>
            <div className="flex flex-col gap-3.5">
              <FooterLink href="/identity/jitendra-nimod">Jitendra Nimod</FooterLink>
              <FooterLink href="/identity/jitendra-singh">Jitendra Singh</FooterLink>
              <FooterLink href="/identity/jitendra-singh-nimod">Jitendra Singh Nimod</FooterLink>
              <FooterLink href="/identity/jitu-nimod">Jitu Nimod</FooterLink>
              <FooterLink href="/identity/js-nimod">JS Nimod</FooterLink>
              <FooterLink href="/identity/nimod-jitu">Nimod Jitu</FooterLink>
              <FooterLink href="/identity/nimod-js">Nimod JS</FooterLink>
            </div>
          </div>

          {/* LOCATION / SEO */}
          <div>
            <div className="flex items-center gap-2 mb-6 text-zinc-100">
              <MapPin className="w-4 h-4 text-zinc-500" />
              <h3 className="font-medium text-sm tracking-wide uppercase">Regional</h3>
            </div>
            <div className="flex flex-col gap-3.5">
              <FooterLink href="/location/nimod-village">Nimod Village</FooterLink>
              <FooterLink href="/location/kuchaman-city">Kuchaman City</FooterLink>
              <FooterLink href="/location/didwana-rajasthan">Didwana Rajasthan</FooterLink>
              <FooterLink href="/nimod-rajasthan">Nimod Rajasthan</FooterLink>
              <FooterLink href="/kuchaman-web-developer">Kuchaman Web Developer</FooterLink>
              <FooterLink href="/didwana-developer">Didwana Developer</FooterLink>
            </div>
          </div>

        </div>

        {/* ===== DIVIDER ===== */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent mb-16"></div>

        {/* ===== BOTTOM GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* COMMUNITY */}
          <div>
            <div className="flex items-center gap-2 mb-6 text-zinc-100">
              <Users className="w-4 h-4 text-zinc-500" />
              <h3 className="font-medium text-sm tracking-wide uppercase">Community</h3>
            </div>
            <div className="flex flex-col gap-3.5">
              <FooterLink href="/jss-originals">JSS Originals</FooterLink>
              <FooterLink href="/jss-rajput">JSS Rajput</FooterLink>
              <FooterLink href="/rajput-nimod">Rajput Nimod</FooterLink>
              <FooterLink href="/rajputo-ka-nimod">Rajputo Ka Nimod</FooterLink>
              <FooterLink href="/shekhawat-nimod">Shekhawat Nimod</FooterLink>
            </div>
          </div>

          {/* BLOG */}
          <div>
            <div className="flex items-center gap-2 mb-6 text-zinc-100">
              <BookOpen className="w-4 h-4 text-zinc-500" />
              <h3 className="font-medium text-sm tracking-wide uppercase">Blog</h3>
            </div>
            <div className="flex flex-col gap-3.5">
              <FooterLink href="/blog">Blog Home</FooterLink>
              <FooterLink href="/blog/who-is-jitendra-nimod">Who is Jitendra Nimod</FooterLink>
              <FooterLink href="/blog/my-journey-as-developer">Developer Journey</FooterLink>
              <FooterLink href="/blog/full-stack-developer-rajasthan">Full Stack Rajasthan</FooterLink>
            </div>
          </div>

          {/* META */}
          <div>
            <div className="flex items-center gap-2 mb-6 text-zinc-100">
              <Terminal className="w-4 h-4 text-zinc-500" />
              <h3 className="font-medium text-sm tracking-wide uppercase">Meta</h3>
            </div>
            <div className="flex flex-col gap-3.5">
              <FooterLink href="/robots.txt">Robots.txt</FooterLink>
              <FooterLink href="/sitemap.xml">Sitemap</FooterLink>
              <FooterLink href="/rss.xml">RSS Feed</FooterLink>
              <FooterLink href="/security.txt">Security.txt</FooterLink>
              <FooterLink href="/humans.txt">Humans.txt</FooterLink>
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <div className="flex items-center gap-2 mb-6 text-zinc-100">
              <Share2 className="w-4 h-4 text-zinc-500" />
              <h3 className="font-medium text-sm tracking-wide uppercase">Official</h3>
            </div>
            <div className="flex flex-col gap-3.5">
              <FooterLink href={identity.social?.github || "#"} external>GitHub</FooterLink>
              <FooterLink href={identity.social?.linkedin || "#"} external>LinkedIn</FooterLink>
              <FooterLink href="https://x.com/jitendranimod" external>X / Twitter</FooterLink>
              <FooterLink href="https://dev.to/jitendrasingh" external>Dev.to</FooterLink>
              <FooterLink href="https://medium.com/@i.jitendra.singh0" external>Medium</FooterLink>
              <FooterLink href="https://jitendrasinghnimod.hashnode.dev" external>Hashnode</FooterLink>
              <FooterLink href="https://youtube.com/@jitendranimod" external>YouTube</FooterLink>
              <FooterLink href={identity.social?.instagram || "#"} external>Instagram</FooterLink>
            </div>
          </div>

        </div>

        {/* ===== FOOTER BOTTOM LOGO & COPYRIGHT ===== */}
        <div className="mt-24 pt-8 border-t border-white/[0.05] flex flex-col items-center justify-center text-center">
          <p className="text-sm font-medium text-zinc-400">
            © {new Date().getFullYear()} {identity.name}. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-zinc-600 max-w-lg mx-auto font-light">
            Digital identity archive for Jitendra Singh Nimod — Full Stack Developer & Founder from Rajasthan. Built with Next.js.
          </p>
        </div>

      </div>
    </footer>
  );
}
