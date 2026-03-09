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
  Sparkles,
  Heart,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  ExternalLink,
} from "lucide-react";

// 📌 HELPER COMPONENT: Premium link styling with blue hover
const FooterLink = ({ href, children, external = false, icon: Icon }) => {
  const baseClasses = "group flex items-center gap-2 text-sm text-zinc-600 hover:text-[#2563EB] transition-all duration-300 w-fit";
  
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
        {Icon && <Icon className="w-4 h-4 text-zinc-400 group-hover:text-[#2563EB] transition-colors" />}
        <span className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-[#2563EB] after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
          {children}
        </span>
        <ExternalLink className="w-3 h-3 text-zinc-400 group-hover:text-[#2563EB] opacity-0 group-hover:opacity-100 transition-all" />
      </a>
    );
  }

  return (
    <Link href={href} className={baseClasses}>
      {Icon && <Icon className="w-4 h-4 text-zinc-400 group-hover:text-[#2563EB] transition-colors" />}
      <span className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-[#2563EB] after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
        {children}
      </span>
    </Link>
  );
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative mt-32 border-t border-zinc-200/80 bg-gradient-to-b from-white to-zinc-50/80 text-zinc-700 overflow-hidden selection:bg-[#2563EB]/20">
      
      {/* ===== PREMIUM BLUE GLOW ===== */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#2563EB]/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      {/* ===== DECORATIVE DOTS ===== */}
      <div className="absolute inset-0 bg-[radial-gradient(#2563EB_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.015] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">

        {/* ===== TOP GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">

          {/* BRAND / ABOUT - lg:col-span-4 */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
              <div className="p-2 bg-[#2563EB]/10 rounded-xl group-hover:bg-[#2563EB]/20 transition-colors">
                <Sparkles className="w-5 h-5 text-[#2563EB]" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-zinc-800 group-hover:text-[#2563EB] transition-colors">
                {identity.name}
              </h3>
            </Link>

            <p className="text-sm text-zinc-600 leading-relaxed font-light mb-4">
              Full Stack Web Developer and B.Sc Mathematics student from {identity.location?.state || "Rajasthan"}, {identity.location?.country || "India"}. 
              Known online as <span className="font-medium text-zinc-800">{identity.alternateNames?.slice(0,3).join(", ")}</span>.
            </p>

            <div className="flex items-center gap-3 text-sm text-zinc-500">
              <MapPin className="w-4 h-4 text-[#2563EB]" />
              <span>{identity.location?.city}, {identity.location?.state}</span>
            </div>
            
            <div className="flex items-center gap-3 mt-2 text-sm text-zinc-500">
              <Mail className="w-4 h-4 text-[#2563EB]" />
              <a href="mailto:contact@jitubanna.com" className="hover:text-[#2563EB] transition">contact@jitubanna.com</a>
            </div>

            <p className="mt-4 text-xs text-zinc-500 leading-relaxed font-light border-l-2 border-[#2563EB]/30 pl-3">
              Founder of <strong className="text-zinc-700">{identity.brand || "JSS Originals"}</strong>. 
              Building modern web applications, digital identity platforms, and developer tools.
            </p>
          </div>

          {/* CORE PAGES - lg:col-span-2 */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-1.5 bg-[#2563EB]/10 rounded-lg">
                <Compass className="w-4 h-4 text-[#2563EB]" />
              </div>
              <h3 className="font-semibold text-sm tracking-wide uppercase text-zinc-500">Core Pages</h3>
            </div>
            <div className="flex flex-col gap-3">
              <FooterLink href="/" icon={Sparkles}>Home</FooterLink>
              <FooterLink href="/about" icon={Users}>About</FooterLink>
              <FooterLink href="/developer-profile" icon={Terminal}>Developer Profile</FooterLink>
              <FooterLink href="/student-profile" icon={BookOpen}>Student Profile</FooterLink>
              <FooterLink href="/photos-jitendra-singh-nimod" icon={Fingerprint}>Photo Gallery</FooterLink>
              <FooterLink href="/contact" icon={Mail}>Contact</FooterLink>
            </div>
          </div>

          {/* IDENTITY LINKS - lg:col-span-3 */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-1.5 bg-[#2563EB]/10 rounded-lg">
                <Fingerprint className="w-4 h-4 text-[#2563EB]" />
              </div>
              <h3 className="font-semibold text-sm tracking-wide uppercase text-zinc-500">Identity Pages</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <FooterLink href="/identity/jitendra-nimod">Jitendra Nimod</FooterLink>
              <FooterLink href="/identity/jitendra-singh">Jitendra Singh</FooterLink>
              <FooterLink href="/identity/jitendra-singh-nimod">Jitendra Singh Nimod</FooterLink>
              <FooterLink href="/identity/jitu-nimod">Jitu Nimod</FooterLink>
              <FooterLink href="/identity/js-nimod">JS Nimod</FooterLink>
              <FooterLink href="/identity/nimod-jitu">Nimod Jitu</FooterLink>
              <FooterLink href="/identity/nimod-js">Nimod JS</FooterLink>
            </div>
          </div>

          {/* LOCATION / SEO - lg:col-span-3 */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-1.5 bg-[#2563EB]/10 rounded-lg">
                <MapPin className="w-4 h-4 text-[#2563EB]" />
              </div>
              <h3 className="font-semibold text-sm tracking-wide uppercase text-zinc-500">Regional</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <FooterLink href="/location/nimod-village">Nimod Village</FooterLink>
              <FooterLink href="/location/kuchaman-city">Kuchaman City</FooterLink>
              <FooterLink href="/location/didwana-rajasthan">Didwana Rajasthan</FooterLink>
              <FooterLink href="/nimod-rajasthan">Nimod Rajasthan</FooterLink>
              <FooterLink href="/kuchaman-web-developer">Kuchaman Developer</FooterLink>
              <FooterLink href="/didwana-developer">Didwana Developer</FooterLink>
            </div>
          </div>

        </div>

        {/* ===== DIVIDER ===== */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-12"></div>

        {/* ===== BOTTOM GRID ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">

          {/* COMMUNITY */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="p-1.5 bg-[#2563EB]/10 rounded-lg">
                <Users className="w-4 h-4 text-[#2563EB]" />
              </div>
              <h3 className="font-semibold text-sm tracking-wide uppercase text-zinc-500">Community</h3>
            </div>
            <div className="flex flex-col gap-3">
              <FooterLink href="/jss-originals">JSS Originals</FooterLink>
              <FooterLink href="/jss-rajput">JSS Rajput</FooterLink>
              <FooterLink href="/rajput-nimod">Rajput Nimod</FooterLink>
              <FooterLink href="/rajputo-ka-nimod">Rajputo Ka Nimod</FooterLink>
              <FooterLink href="/shekhawat-nimod">Shekhawat Nimod</FooterLink>
            </div>
          </div>

          {/* BLOG */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="p-1.5 bg-[#2563EB]/10 rounded-lg">
                <BookOpen className="w-4 h-4 text-[#2563EB]" />
              </div>
              <h3 className="font-semibold text-sm tracking-wide uppercase text-zinc-500">Blog</h3>
            </div>
            <div className="flex flex-col gap-3">
              <FooterLink href="/blog">Blog Home</FooterLink>
              <FooterLink href="/blog/who-is-jitendra-nimod">Who is Jitendra Nimod</FooterLink>
              <FooterLink href="/blog/my-journey-as-developer">Developer Journey</FooterLink>
              <FooterLink href="/blog/full-stack-developer-rajasthan">Full Stack Rajasthan</FooterLink>
            </div>
          </div>

          {/* META */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="p-1.5 bg-[#2563EB]/10 rounded-lg">
                <Terminal className="w-4 h-4 text-[#2563EB]" />
              </div>
              <h3 className="font-semibold text-sm tracking-wide uppercase text-zinc-500">Meta</h3>
            </div>
            <div className="flex flex-col gap-3">
              <FooterLink href="/robots.txt">Robots.txt</FooterLink>
              <FooterLink href="/sitemap.xml">Sitemap</FooterLink>
              <FooterLink href="/rss.xml">RSS Feed</FooterLink>
              <FooterLink href="/security.txt">Security.txt</FooterLink>
              <FooterLink href="/humans.txt">Humans.txt</FooterLink>
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="p-1.5 bg-[#2563EB]/10 rounded-lg">
                <Share2 className="w-4 h-4 text-[#2563EB]" />
              </div>
              <h3 className="font-semibold text-sm tracking-wide uppercase text-zinc-500">Official</h3>
            </div>
            <div className="flex flex-col gap-3">
              <FooterLink href={identity.social?.github || "#"} external icon={Github}>GitHub</FooterLink>
              <FooterLink href={identity.social?.linkedin || "#"} external icon={Linkedin}>LinkedIn</FooterLink>
              <FooterLink href="https://x.com/jitendranimod" external icon={Twitter}>X / Twitter</FooterLink>
              <FooterLink href="https://dev.to/jitendrasingh" external icon={Terminal}>Dev.to</FooterLink>
              <FooterLink href="https://medium.com/@i.jitendra.singh0" external icon={BookOpen}>Medium</FooterLink>
              <FooterLink href="https://youtube.com/@jitendranimod" external icon={Youtube}>YouTube</FooterLink>
              <FooterLink href={identity.social?.instagram || "#"} external icon={Instagram}>Instagram</FooterLink>
            </div>
          </div>

        </div>

        {/* ===== FOOTER BOTTOM ===== */}
        <div className="mt-12 pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            © {currentYear} {identity.name}. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="mailto:contact@jitubanna.com" className="text-zinc-500 hover:text-[#2563EB] transition">
              <Mail className="w-4 h-4" />
            </a>
            <a href={identity.social?.github} target="_blank" rel="noopener" className="text-zinc-500 hover:text-[#2563EB] transition">
              <Github className="w-4 h-4" />
            </a>
            <a href={identity.social?.linkedin} target="_blank" rel="noopener" className="text-zinc-500 hover:text-[#2563EB] transition">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href={identity.social?.instagram} target="_blank" rel="noopener" className="text-zinc-500 hover:text-[#2563EB] transition">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
          
          <p className="text-xs text-zinc-400">
            Built with <Heart className="w-3 h-3 inline text-red-400" /> in Rajasthan
          </p>
        </div>

      </div>
    </footer>
  );
}
