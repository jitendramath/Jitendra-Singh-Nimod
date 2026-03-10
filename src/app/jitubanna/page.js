// src/app/jitubanna/page.js
// The ultimate premium page for Jitubanna – the flagship domain identity

import Link from "next/link";
import Image from "next/image";
import {
  Globe2,
  Crown,
  MapPin,
  Code2,
  GraduationCap,
  Briefcase,
  Sparkles,
  Fingerprint,
  Users,
  ChevronRight,
  Phone,
  Mail,
  MessageCircle,
  Github,
  Linkedin,
  Instagram,
  Heart,
  Award,
  CheckCircle,
  Star,
  Hash,
  ExternalLink,
  BookOpen,
  Clock,
  Target,
  BadgeCheck,
  AtSign,
  Home,
  Rocket,
  Zap,
  Shield,
  TrendingUp,
  Compass,
  Layers
} from "lucide-react";

export const metadata = {
  title: "Jitubanna – The Official Digital Identity | Jitendra Singh Nimod",
  description:
    "Jitubanna is the flagship domain and primary online identity of Jitendra Singh Nimod (JS Nimod), a Full Stack Developer from Rajasthan, India. Discover the complete digital ecosystem.",
  keywords: [
    "Jitubanna",
    "Jitu Banna",
    "Jitubanna.com",
    "Jitendra Singh Nimod",
    "JS Nimod",
    "Full Stack Developer Rajasthan",
    "Web Developer Kuchaman City",
    "Jitu Banna Developer",
    "JSS Originals",
    "Nimod Village Developer"
  ],
  alternates: { canonical: "/jitubanna" },
  openGraph: {
    title: "Jitubanna – The Official Digital Identity",
    description:
      "The flagship domain and primary online identity of Jitendra Singh Nimod, a Full Stack Developer from Rajasthan.",
    images: [{ url: "/images/og/jitubanna-og.jpg", width: 1200, height: 630 }],
  },
};

export default function JitubannaPage() {
  // JSON-LD schema for rich results
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jitubanna",
    alternateName: ["Jitu Banna", "Jitendra Singh Nimod", "JS Nimod", "Jitu Nimod"],
    description: "Primary digital identity and flagship domain of Jitendra Singh Nimod, a Full Stack Web Developer from Rajasthan, India.",
    url: "https://jitubanna.com",
    sameAs: [
      "https://github.com/jitendra-math",
      "https://linkedin.com/in/jitendra-singh07",
      "https://instagram.com/jitendra.07_7",
      "https://x.com/jitendranimod",
      "https://medium.com/@i.jitendra.singh0",
      "https://dev.to/jitendrasingh"
    ]
  };

  // Quick stats for the hero
  const quickStats = [
    { label: "Flagship Domain", value: "jitubanna.com", icon: Globe2 },
    { label: "Primary Alias", value: "Jitu Banna", icon: Crown },
    { label: "Location", value: "Kuchaman City, Rajasthan", icon: MapPin },
    { label: "Profession", value: "Full Stack Developer", icon: Code2 },
    { label: "Education", value: "B.Sc Mathematics", icon: GraduationCap },
    { label: "Brand", value: "JSS Originals", icon: Sparkles }
  ];

  // Main identity pillars
  const identityPillars = [
    {
      title: "The Domain",
      desc: "jitubanna.com is the flagship domain – the central hub for all projects, portfolio, and digital presence.",
      icon: Globe2,
      color: "blue"
    },
    {
      title: "The Developer",
      desc: "Full Stack Developer with expertise in Next.js, React, Node.js, and modern web technologies.",
      icon: Code2,
      color: "purple"
    },
    {
      title: "The Student",
      desc: "B.Sc Mathematics student at Govt. Bangur College, Didwana – combining logic with code.",
      icon: GraduationCap,
      color: "amber"
    },
    {
      title: "The Founder",
      desc: "Founder of JSS Originals – building digital tools and identity platforms.",
      icon: Sparkles,
      color: "emerald"
    }
  ];

  // Key sections of the site
  const keySections = [
    { name: "Developer Profile", path: "/developer-profile", icon: Code2, desc: "Tech stack, projects, experience" },
    { name: "Student Profile", path: "/student-profile", icon: GraduationCap, desc: "Academic journey & achievements" },
    { name: "About", path: "/about", icon: User, desc: "Personal story & mission" },
    { name: "Blog", path: "/blog", icon: BookOpen, desc: "Articles & insights" },
    { name: "Contact", path: "/contact", icon: Mail, desc: "Get in touch" },
    { name: "FAQ", path: "/faq", icon: HelpCircle, desc: "Frequently asked questions" }
  ];

  // Location links
  const locationLinks = [
    { name: "Nimod Village", path: "/location/nimod-village" },
    { name: "Kuchaman City", path: "/location/kuchaman-city" },
    { name: "Didwana", path: "/location/didwana-rajasthan" },
    { name: "Kuchaman Web Developer", path: "/kuchaman-web-developer" },
    { name: "Didwana Developer", path: "/didwana-developer" }
  ];

  // Identity alias links
  const aliasLinks = [
    { name: "Jitendra Singh Nimod", path: "/identity/jitendra-singh-nimod" },
    { name: "JS Nimod", path: "/identity/js-nimod" },
    { name: "Jitu Nimod", path: "/identity/jitu-nimod" },
    { name: "Jitendra Nimod", path: "/identity/jitendra-nimod" },
    { name: "Jitu Banna", path: "/identity/jitu-banna" },
    { name: "Jitubanna Identity", path: "/jitubanna-identity" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-zinc-50 to-white text-zinc-700 font-sans selection:bg-[#2563EB]/30 selection:text-white relative overflow-hidden pb-20">

      {/* JSON-LD script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Premium Background Blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#2563EB]/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(#2563EB_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.015] pointer-events-none"></div>

      {/* ===== HERO SECTION ===== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 md:pt-28 pb-16">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2563EB]/10 rounded-full text-[#2563EB] text-xs font-medium uppercase tracking-wider mb-6">
              <Crown className="w-4 h-4" />
              <span>Flagship Domain • Primary Identity</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-zinc-800 leading-tight mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-purple-600">
                Jitubanna
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#2563EB] font-medium mb-2">
              The official digital identity of {identity.name}
            </p>

            <p className="text-base text-zinc-600 max-w-2xl mx-auto md:mx-0 leading-relaxed mb-6">
              <strong className="text-[#2563EB]">Jitubanna</strong> is the flagship domain and primary online identity 
              of <strong>{identity.name}</strong> (JS Nimod), a Full Stack Web Developer from Rajasthan, India. 
              This domain serves as the central hub for all projects, portfolio, and digital presence.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="https://jitubanna.com"
                target="_blank"
                className="px-6 py-3 bg-[#2563EB] text-white font-semibold rounded-full hover:bg-[#1d4ed8] hover:scale-105 transition-all shadow-md inline-flex items-center gap-2"
              >
                <Globe2 className="w-4 h-4" />
                Visit jitubanna.com
              </a>
              <a
                href="https://wa.me/919549626202"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 hover:scale-105 transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Me
              </a>
              <Link
                href="/contact"
                className="px-6 py-3 bg-white border border-zinc-300 text-zinc-700 font-semibold rounded-full hover:border-[#2563EB] hover:text-[#2563EB] transition-all"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-64 h-64 md:w-72 md:h-72 shrink-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#2563EB] via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50"></div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
              <Image
                src="/images/main/jitendra-singh-nimod.jpg"
                alt="Jitubanna"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-[#2563EB] text-white text-xs px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
              <BadgeCheck className="w-3 h-3" />
              Flagship
            </div>
          </div>
        </div>
      </section>

      {/* ===== QUICK STATS ===== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-zinc-200 text-center hover:border-[#2563EB]/30 hover:shadow-md transition group">
                <Icon className="w-5 h-5 text-[#2563EB] mx-auto mb-2 group-hover:scale-110 transition" />
                <p className="text-xs text-zinc-500">{stat.label}</p>
                <p className="text-sm font-medium text-zinc-800">{stat.value}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== IDENTITY PILLARS ===== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-8 text-center">The Four Pillars of Jitubanna</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {identityPillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div key={i} className={`bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-2xl p-6 hover:bg-white hover:border-[#2563EB]/30 hover:shadow-xl transition-all group`}>
                <div className={`p-3 bg-${pillar.color}-100 rounded-xl w-fit mb-4 group-hover:scale-110 transition`}>
                  <Icon className={`w-6 h-6 text-${pillar.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-zinc-800 mb-2">{pillar.title}</h3>
                <p className="text-sm text-zinc-600">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== DOMAIN HIGHLIGHT ===== */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-20">
        <div className="bg-gradient-to-br from-[#2563EB]/10 to-purple-500/10 rounded-3xl p-8 md:p-10 border border-[#2563EB]/20 text-center">
          <Globe2 className="w-16 h-16 text-[#2563EB] mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-3">The Flagship Domain</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto mb-6">
            <strong className="text-[#2563EB]">jitubanna.com</strong> is more than a domain – it's the central command center 
            for all digital projects, the portfolio, and the identity of Jitendra Singh Nimod. Everything originates from here.
          </p>
          <a
            href="https://jitubanna.com"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white font-semibold rounded-full hover:bg-[#1d4ed8] hover:scale-105 transition-all shadow-md"
          >
            Explore the Domain
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* ===== KEY SECTIONS OF THE SITE ===== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-6">Explore the Ecosystem</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {keySections.map((section, i) => {
            const Icon = section.icon;
            return (
              <Link
                key={i}
                href={section.path}
                className="group bg-white/70 backdrop-blur-sm border border-zinc-200 rounded-xl p-5 hover:bg-white hover:border-[#2563EB]/30 hover:shadow-lg transition-all flex items-start gap-3"
              >
                <div className="p-2 bg-[#2563EB]/10 rounded-lg group-hover:bg-[#2563EB] group-hover:text-white transition">
                  <Icon className="w-5 h-5 text-[#2563EB] group-hover:text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-zinc-800 mb-1">{section.name}</h3>
                  <p className="text-xs text-zinc-500">{section.desc}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-zinc-400 group-hover:text-[#2563EB] group-hover:translate-x-1 transition" />
              </Link>
            );
          })}
        </div>
      </section>

      {/* ===== LOCATION & ALIAS GRID ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 mb-20">
        
        {/* Location Links */}
        <div className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-zinc-800 mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#2563EB]" />
            Local Presence
          </h3>
          <div className="space-y-2">
            {locationLinks.map((loc, i) => (
              <Link
                key={i}
                href={loc.path}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-[#2563EB]/5 transition group"
              >
                <span className="text-sm text-zinc-600 group-hover:text-[#2563EB]">{loc.name}</span>
                <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-[#2563EB]" />
              </Link>
            ))}
          </div>
        </div>

        {/* Alias Links */}
        <div className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-zinc-800 mb-4 flex items-center gap-2">
            <Fingerprint className="w-5 h-5 text-[#2563EB]" />
            Identity Aliases
          </h3>
          <div className="space-y-2">
            {aliasLinks.map((alias, i) => (
              <Link
                key={i}
                href={alias.path}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-[#2563EB]/5 transition group"
              >
                <span className="text-sm text-zinc-600 group-hover:text-[#2563EB]">{alias.name}</span>
                <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-[#2563EB]" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ===== SEO ENHANCED CONTENT ===== */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-20">
        <div className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-3xl p-8 md:p-10 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-4">Why Jitubanna?</h2>
          <div className="prose prose-zinc max-w-none space-y-4">
            <p className="text-zinc-600">
              <strong className="text-[#2563EB]">Jitubanna</strong> combines the friendly nickname <strong>"Jitu"</strong> with the 
              respectful Rajasthani suffix <strong>"Banna"</strong>. It's more than a username – it's a brand that represents 
              quality web development, cultural pride, and digital innovation.
            </p>
            <p className="text-zinc-600">
              Whether you search for <strong>Jitubanna developer</strong>, <strong>Jitu Banna Rajasthan</strong>, or simply 
              <strong> jitubanna.com</strong>, you'll find the portfolio and identity of <strong>Jitendra Singh Nimod</strong> 
              (also known as JS Nimod, Jitu Nimod, and Jitendra Nimod).
            </p>
            <p className="text-zinc-600">
              This domain is the central hub for all projects, including the <strong>JSS Originals</strong> brand, 
              <strong> developer portfolio</strong>, <strong>student profile</strong>, and <strong>blog</strong>. 
              It's designed to be the authoritative source for everything related to this developer.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-6">
              <p className="text-amber-800 text-sm flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  <strong>jitubanna.com</strong> is the official flagship domain. All other pages and aliases point back here.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-16">
        <div className="bg-gradient-to-br from-[#2563EB] to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Build Something Great?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Whether you need a website, web app, or just want to connect – Jitubanna is here.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/919549626202"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#2563EB] font-semibold rounded-full hover:bg-zinc-100 hover:scale-105 transition-all shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Me
            </a>
            <a
              href="tel:+919549626202"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full hover:bg-white/30 hover:scale-105 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="mailto:contact@jitubanna.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full hover:bg-white/30 hover:scale-105 transition-all"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
          </div>
        </div>
      </section>

      {/* ===== BOTTOM SOCIAL ===== */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-6 pt-8">
        <a href="https://jitubanna.com" target="_blank" className="text-zinc-400 hover:text-[#2563EB] transition">
          <Globe2 className="w-6 h-6" />
        </a>
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
        <a href="https://x.com/jitendranimod" target="_blank" className="text-zinc-400 hover:text-[#2563EB] transition">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </div>

      {/* ===== FOOTER NOTE ===== */}
      <div className="relative z-10 text-center text-xs text-zinc-400 mt-16">
        <Heart className="w-3 h-3 inline text-rose-400" /> Jitubanna – The Flagship Digital Identity
      </div>
    </main>
  );
}
