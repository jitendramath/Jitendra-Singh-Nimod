"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
  BookOpen,
  Globe,
  TerminalSquare,
  Rss,
  ArrowRight,
  Info,
  Code2,
  ExternalLink,
  User,
  MapPin,
  Hash,
  Newspaper,
  Link2,
  Sparkles,
  Fingerprint,
  AtSign,
  School,
  Briefcase,
  Home,
  ImageIcon,
  FileText,
  Users,
  ChevronRight,
  Menu,
  X,
  ChevronUp,
  Mail
} from "lucide-react";
import identity from "../data/identity";

// ---------- Link Groups ----------
const corePages = [
  { name: "About", href: "/about", icon: User },
  { name: "Contact", href: "/contact", icon: Mail },
  { name: "Developer Profile", href: "/developer-profile", icon: Code2 },
  { name: "Student Profile", href: "/student-profile", icon: School },
  { name: "Photo Gallery", href: "/photos-jitendra-singh-nimod", icon: ImageIcon },
  { name: "Official Website", href: "/official-website-jitendra-singh-nimod", icon: Globe },
  { name: "Who is Jitendra?", href: "/who-is-jitendra-singh-nimod", icon: Fingerprint },
];

const aliasPages = [
  { name: "Jitendra Singh", href: "/jitendra-singh", icon: User },
  { name: "Jitendra Rajput", href: "/jitendra-rajput", icon: Users },
  { name: "Jitendra Singh Dev", href: "/jitendra-singh-dev", icon: Code2 },
  { name: "Jitendra Singh Developer", href: "/jitendra-singh-developer", icon: Code2 },
  { name: "Jitendra Singh Rajput", href: "/jitendra-singh-rajput", icon: Users },
  { name: "Jitendra Singh Shekhawat", href: "/jitendra-singh-shekhawat", icon: Users },
  { name: "Jitendra Singh Shekhawat Rajput", href: "/jitendra-singh-shekhawat-rajput", icon: Users },
  { name: "Jitu Banna", href: "/jitu-banna", icon: Hash },
  { name: "Jitu Banna Developer", href: "/jitu-banna-developer", icon: Code2 },
  { name: "Jitu Developer", href: "/jitu-developer", icon: Code2 },
  { name: "Jitu Singh", href: "/jitu-singh", icon: User },
  { name: "JS Developer", href: "/js-developer", icon: Code2 },
  { name: "JS Shekhawat", href: "/js-shekhawat", icon: Users },
  { name: "Rajput Nimod", href: "/rajput-nimod", icon: MapPin },
  { name: "Rajputo Ka Nimod", href: "/rajputo-ka-nimod", icon: MapPin },
  { name: "Nimod Rajasthan", href: "/nimod-rajasthan", icon: MapPin },
  { name: "Shekhawat Nimod", href: "/shekhawat-nimod", icon: MapPin },
];

const identityCluster = [
  { name: "Jitendra Nimod", href: "/identity/jitendra-nimod", icon: Fingerprint },
  { name: "Jitendra Singh", href: "/identity/jitendra-singh", icon: Fingerprint },
  { name: "Jitendra Singh Nimod", href: "/identity/jitendra-singh-nimod", icon: Fingerprint },
  { name: "Jitu Nimod", href: "/identity/jitu-nimod", icon: Fingerprint },
  { name: "JS Nimod", href: "/identity/js-nimod", icon: Fingerprint },
  { name: "Nimod Jitu", href: "/identity/nimod-jitu", icon: Fingerprint },
  { name: "Nimod JS", href: "/identity/nimod-js", icon: Fingerprint },
];

const locationPages = [
  { name: "Kuchaman City", href: "/location/kuchaman-city", icon: MapPin },
  { name: "Nimod Village", href: "/location/nimod-village", icon: MapPin },
  { name: "Didwana Rajasthan", href: "/location/didwana-rajasthan", icon: MapPin },
  { name: "Jitendra Singh Kuchaman City", href: "/jitendra-singh-kuchaman-city", icon: MapPin },
  { name: "Jitendra Singh Didwana", href: "/jitendra-singh-didwana", icon: MapPin },
  { name: "Kuchaman Web Developer", href: "/kuchaman-web-developer", icon: Code2 },
  { name: "Didwana Developer", href: "/didwana-developer", icon: Code2 },
];

const brandPages = [
  { name: "JSS Originals", href: "/jss-originals", icon: Sparkles },
  { name: "JSS Rajput", href: "/jss-rajput", icon: Users },
];

const blogPosts = [
  { name: "Blog Home", href: "/blog", icon: Newspaper },
  { name: "Who is Jitendra Nimod?", href: "/blog/who-is-jitendra-nimod", icon: FileText },
  { name: "My Journey as a Developer", href: "/blog/my-journey-as-developer", icon: FileText },
  { name: "Full Stack Developer Rajasthan", href: "/blog/full-stack-developer-rajasthan", icon: FileText },
  { name: "Best Friend", href: "/blog/best-friend-of-jitendra-singh-nimod", icon: Users },
  { name: "Why Personal Websites Matter", href: "/blog/why-personal-websites-still-matter-for-developers-in-the-ai-era", icon: FileText },
];

const specialPages = [
  { name: "All Names & Usernames", href: "/all-names-and-usernames-of-jitendra-singh-nimod", icon: AtSign },
  { name: "Complete Digital Identity", href: "/complete-digital-identity-of-jitendra-singh-nimod", icon: Link2 },
  { name: "Jitubanna Identity", href: "/jitubanna-identity", icon: Fingerprint },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/jitendra-math", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/jitendra-singh07", icon: Linkedin },
  { name: "X / Twitter", href: "https://x.com/jitendranimod", icon: Twitter },
  { name: "YouTube", href: "https://youtube.com/@jitendranimod", icon: Youtube },
  { name: "Instagram", href: "https://instagram.com/jitendra.07_7", icon: Instagram },
  { name: "Medium", href: "https://medium.com/@i.jitendra.singh0", icon: BookOpen },
  { name: "Dev.to", href: "https://dev.to/jitendrasingh", icon: TerminalSquare },
  { name: "Hashnode", href: "https://jitendrasinghnimod.hashnode.dev", icon: Code2 },
  { name: "About.me", href: "https://about.me/jitendrasinghnimod", icon: Info },
  { name: "Reddit", href: "https://www.reddit.com/user/jitendranimod", icon: Globe },
  { name: "Product Hunt", href: "https://www.producthunt.com/@jitendra_nimod", icon: ExternalLink },
  { name: "Linktree", href: "https://linktr.ee/jitendranimod", icon: Globe },
  { name: "RSS Feed", href: "/rss.xml", icon: Rss, internal: true },
];

// Helper Section component
function Section({ title, icon, children }) {
  return (
    <section>
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2 bg-white/[0.03] rounded-lg border border-white/10">
          {icon}
        </div>
        <h2 className="text-xl font-medium text-zinc-200 tracking-tight">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function HomePageContent() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-15 py-8 md:py-16">
      {/* Notice Banner */}
      <div className="mb-12 animate-fade-in">
        <div className="bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/[0.05] rounded-full">
              <Info className="w-5 h-5 text-zinc-400" />
            </div>
            <p className="text-sm sm:text-base text-zinc-300">
              <span className="text-zinc-400 font-medium">This Website made for Identity Archive only</span> –{" "}
              <strong>Jitendra Singh Nimod</strong>The official website not completely build yet.<br> work in progress...<br> Main Website will be soon
            </p>
          </div>
          <a
            href="https://jitubanna.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-2 bg-white text-black text-sm font-semibold rounded-full hover:scale-105 transition-all"
          >
            Here
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Hero */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            Jitendra <br /> Singh Nimod
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed">
            Full Stack Developer & Founder of <span className="text-white font-medium">JSS Originals</span>. Crafting scalable web applications and premium digital ecosystems from Rajasthan.
          </p>
          <div className="flex flex-wrap gap-3 pt-4 justify-center md:justify-start">
            <Link
              href="/about"
              className="px-6 py-2.5 bg-white/[0.08] border border-white/[0.1] text-white text-sm font-medium rounded-full hover:bg-white/[0.15] transition-all"
            >
              Read Biography
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2.5 text-zinc-400 hover:text-white text-sm font-medium transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
        <div className="relative group shrink-0">
          <div className="absolute -inset-1 bg-gradient-to-b from-white/20 to-transparent rounded-[2rem] blur-xl opacity-50 group-hover:opacity-100 transition"></div>
          <div className="relative w-[220px] h-[280px] sm:w-[280px] sm:h-[350px] rounded-[2rem] overflow-hidden border border-white/[0.1] bg-zinc-900 shadow-2xl">
            <Image
              src={identity.images?.main || "/placeholder.jpg"}
              alt="Jitendra Singh Nimod"
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
            />
          </div>
        </div>
      </div>

      {/* All Sections - Grid of Links */}
      <div className="space-y-16">
        {/* Section: Core Identity */}
        <Section title="Core Identity" icon={<User className="w-5 h-5" />}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {corePages.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 p-4 bg-white/[0.02] border border-white/[0.05] rounded-xl hover:bg-white/[0.06] hover:border-white/20 transition-all group"
              >
                <link.icon className="w-5 h-5 text-zinc-500 group-hover:text-white" />
                <span className="text-sm font-medium text-zinc-300 group-hover:text-white">{link.name}</span>
                <ChevronRight className="w-4 h-4 ml-auto text-zinc-600 group-hover:text-white group-hover:translate-x-1 transition" />
              </Link>
            ))}
          </div>
        </Section>

        {/* Section: Name & Alias Pages */}
        <Section title="Name & Alias Pages" icon={<Hash className="w-5 h-5" />}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {aliasPages.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 p-4 bg-white/[0.02] border border-white/[0.05] rounded-xl hover:bg-white/[0.06] hover:border-white/20 transition-all group"
              >
                <link.icon className="w-5 h-5 text-zinc-500 group-hover:text-white" />
                <span className="text-sm font-medium text-zinc-300 group-hover:text-white">{link.name}</span>
                <ChevronRight className="w-4 h-4 ml-auto text-zinc-600 group-hover:text-white group-hover:translate-x-1 transition" />
              </Link>
            ))}
          </div>
        </Section>

        {/* Section: Identity Cluster */}
        <Section title="Identity Cluster (/identity/*)" icon={<Fingerprint className="w-5 h-5" />}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {identityCluster.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 p-4 bg-white/[0.02] border border-white/[0.05] rounded-xl hover:bg-white/[0.06] hover:border-white/20 transition-all group"
              >
                <link.icon className="w-5 h-5 text-zinc-500 group-hover:text-white" />
                <span className="text-sm font-medium text-zinc-300 group-hover:text-white">{link.name}</span>
                <ChevronRight className="w-4 h-4 ml-auto text-zinc-600 group-hover:text-white group-hover:translate-x-1 transition" />
              </Link>
            ))}
          </div>
        </Section>

        {/* Section: Location Pages */}
        <Section title="Location & Regional" icon={<MapPin className="w-5 h-5" />}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {locationPages.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 p-4 bg-white/[0.02] border border-white/[0.05] rounded-xl hover:bg-white/[0.06] hover:border-white/20 transition-all group"
              >
                <link.icon className="w-5 h-5 text-zinc-500 group-hover:text-white" />
                <span className="text-sm font-medium text-zinc-300 group-hover:text-white">{link.name}</span>
                <ChevronRight className="w-4 h-4 ml-auto text-zinc-600 group-hover:text-white group-hover:translate-x-1 transition" />
              </Link>
            ))}
          </div>
        </Section>

        {/* Section: Brand Pages */}
        <Section title="Brand & Projects" icon={<Sparkles className="w-5 h-5" />}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {brandPages.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 p-4 bg-white/[0.02] border border-white/[0.05] rounded-xl hover:bg-white/[0.06] hover:border-white/20 transition-all group"
              >
                <link.icon className="w-5 h-5 text-zinc-500 group-hover:text-white" />
                <span className="text-sm font-medium text-zinc-300 group-hover:text-white">{link.name}</span>
                <ChevronRight className="w-4 h-4 ml-auto text-zinc-600 group-hover:text-white group-hover:translate-x-1 transition" />
              </Link>
            ))}
          </div>
        </Section>

        {/* Section: Blog */}
        <Section title="Blog & Articles" icon={<Newspaper className="w-5 h-5" />}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {blogPosts.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 p-4 bg-white/[0.02] border border-white/[0.05] rounded-xl hover:bg-white/[0.06] hover:border-white/20 transition-all group"
              >
                <link.icon className="w-5 h-5 text-zinc-500 group-hover:text-white" />
                <span className="text-sm font-medium text-zinc-300 group-hover:text-white">{link.name}</span>
                <ChevronRight className="w-4 h-4 ml-auto text-zinc-600 group-hover:text-white group-hover:translate-x-1 transition" />
              </Link>
            ))}
          </div>
        </Section>

        {/* Section: Special Pages */}
        <Section title="Special Identity Pages" icon={<Link2 className="w-5 h-5" />}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {specialPages.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 p-4 bg-white/[0.02] border border-white/[0.05] rounded-xl hover:bg-white/[0.06] hover:border-white/20 transition-all group"
              >
                <link.icon className="w-5 h-5 text-zinc-500 group-hover:text-white" />
                <span className="text-sm font-medium text-zinc-300 group-hover:text-white">{link.name}</span>
                <ChevronRight className="w-4 h-4 ml-auto text-zinc-600 group-hover:text-white group-hover:translate-x-1 transition" />
              </Link>
            ))}
          </div>
        </Section>

        {/* Section: Social Footprint */}
        <Section title="Official Social Footprint" icon={<Globe className="w-5 h-5" />}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              if (link.internal) {
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex flex-col items-center p-4 bg-white/[0.02] border border-white/[0.05] rounded-xl hover:bg-white/[0.06] hover:border-white/20 transition-all group"
                  >
                    <Icon className="w-6 h-6 mb-2 text-zinc-500 group-hover:text-white" />
                    <span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200">
                      {link.name}
                    </span>
                  </Link>
                );
              }
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 bg-white/[0.02] border border-white/[0.05] rounded-xl hover:bg-white/[0.06] hover:border-white/20 transition-all group"
                >
                  <Icon className="w-6 h-6 mb-2 text-zinc-500 group-hover:text-white" />
                  <span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200">
                    {link.name}
                  </span>
                </a>
              );
            })}
          </div>
        </Section>
      </div>

      {/* Closing / About text */}
      <section className="mt-24 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100 mb-4">
          Who is Jitendra Singh Nimod?
        </h2>
        <p className="text-zinc-400 leading-relaxed text-base sm:text-lg font-light">
          Also known as <strong>JS Nimod</strong>, <strong>Jitu Nimod</strong>, and <strong>Jitubanna</strong>, he is a developer dedicated to merging high-performance architecture with premium, user-centric design. From building comprehensive digital identity systems to crafting specialized developer tools, his work emphasizes both aesthetic minimalism and robust SEO architecture.
        </p>
      </section>

      {/* Back to top button */}
      <div className="mt-16 text-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center gap-2 px-5 py-2 bg-white/[0.05] border border-white/10 rounded-full text-sm text-zinc-300 hover:bg-white/[0.1] transition-all"
        >
          <ChevronUp className="w-4 h-4" />
          Back to top
        </button>
      </div>
    </div>
  );
}
