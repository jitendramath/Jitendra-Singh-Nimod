// src/app/jss-originals/page.js
// Ultra-premium brand page for JSS Originals

import Link from "next/link";
import Image from "next/image";
import identity from "../../data/identity";
import StructuredData from "../../components/StructuredData";
import {
  Sparkles,
  Code2,
  Globe,
  Rocket,
  Users,
  Award,
  ChevronRight,
  Phone,
  Mail,
  MessageCircle,
  Github,
  Linkedin,
  Instagram,
  Heart,
  Briefcase,
  Clock,
  Target,
  BadgeCheck,
  Layers,
  Zap,
  Palette,
  Cpu,
  GraduationCap,
  User,
  BookOpen
} from "lucide-react";

export const metadata = {
  title: "JSS Originals – Digital Brand by Jitendra Singh Nimod",
  description:
    "JSS Originals is a digital development brand founded by Jitendra Singh Nimod (JS Nimod), a Full Stack Developer from Rajasthan, India. Creating modern web applications, developer tools, and digital identity platforms.",
  keywords: [
    "JSS Originals",
    "Jitendra Singh Nimod brand",
    "JS Nimod brand",
    "Jitu Nimod projects",
    "JSS Originals founder",
    "Digital development brand Rajasthan"
  ],
  alternates: { canonical: "/jss-originals" },
  openGraph: {
    title: "JSS Originals – Digital Brand by Jitendra Singh Nimod",
    description:
      "Official brand page for JSS Originals, the digital development studio of Jitendra Singh Nimod.",
    images: [{ url: "/images/og/jss-originals-og.jpg", width: 1200, height: 630 }],
  },
};

export default function JSSOriginalsPage() {
  // JSON‑LD for organization
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: identity.brand,
    description: "Digital development brand founded by Jitendra Singh Nimod, creating modern web applications, developer tools, and digital identity platforms.",
    url: "https://me.jitubanna.com/jss-originals",
    logo: "https://me.jitubanna.com/images/og/jss-originals-og.jpg",
    founder: {
      "@type": "Person",
      name: identity.name
    },
    sameAs: [
      "https://github.com/jitendra-math",
      "https://linkedin.com/in/jitendra-singh07"
    ]
  };

  const quickStats = [
    { label: "Founded", value: "2025", icon: Clock },
    { label: "Founder", value: identity.name, icon: Users },
    { label: "Focus", value: "Web Development", icon: Code2 },
    { label: "Projects", value: "5+", icon: Layers },
    { label: "Mission", value: "Digital Identity", icon: Target },
    { label: "Origin", value: "Rajasthan", icon: Globe }
  ];

  const services = [
    {
      title: "Web Development",
      desc: "Modern, responsive websites and web applications built with Next.js, React, and Tailwind CSS.",
      icon: Code2,
      color: "blue"
    },
    {
      title: "Digital Identity",
      desc: "Personal brand websites, portfolio platforms, and identity hubs for professionals.",
      icon: Palette,
      color: "purple"
    },
    {
      title: "SEO Optimization",
      desc: "On‑page SEO, schema markup, and performance tuning to improve search rankings.",
      icon: Zap,
      color: "amber"
    },
    {
      title: "Developer Tools",
      desc: "Custom tools, utilities, and open‑source projects for the developer community.",
      icon: Cpu,
      color: "emerald"
    }
  ];

  return (
    <>
      <StructuredData />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-gradient-to-br from-white via-zinc-50 to-white text-zinc-700 font-sans selection:bg-[#2563EB]/30 selection:text-white relative overflow-hidden pb-20">

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
                <Sparkles className="w-4 h-4" />
                <span>Digital Brand by {identity.name}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-800 leading-tight mb-4">
                {identity.brand}
              </h1>

              <p className="text-lg md:text-xl text-[#2563EB] font-medium mb-2">
                Digital Projects & Development
              </p>

              <p className="text-base text-zinc-600 max-w-2xl mx-auto md:mx-0 leading-relaxed mb-6">
                <strong className="text-[#2563EB]">{identity.brand}</strong> is a digital development brand created by{' '}
                <strong>{identity.name}</strong>, a Full Stack Web Developer from Rajasthan, India. 
                Also known as <strong>JS Nimod, Jitu Nimod, and Jitubanna</strong>.
              </p>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Link
                  href="/developer-profile"
                  className="px-6 py-3 bg-[#2563EB] text-white font-semibold rounded-full hover:bg-[#1d4ed8] hover:scale-105 transition-all shadow-md"
                >
                  View Founder's Profile
                </Link>
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

            {/* Image – could be brand logo or founder image */}
            <div className="relative w-64 h-64 md:w-72 md:h-72 shrink-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2563EB] via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white shadow-2xl flex items-center justify-center bg-gradient-to-br from-[#2563EB]/20 to-purple-500/20">
                <Sparkles className="w-24 h-24 text-[#2563EB]" />
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

        {/* ===== MAIN CONTENT ===== */}
        <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-20">
          <div className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-3xl p-8 md:p-10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-6">
              About {identity.brand}
            </h2>
            
            <div className="prose prose-zinc max-w-none space-y-4">
              <p className="text-zinc-600 leading-relaxed">
                <strong className="text-[#2563EB]">{identity.brand}</strong> is a digital development and web project brand created by{' '}
                <strong>{identity.name}</strong>, a Full Stack Web Developer from {identity.location.state}, India.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                Also known as <strong>{identity.alternateNames.join(", ")}</strong>, {identity.shortName} builds modern web applications,
                developer tools and SEO-optimized websites under the brand <strong>{identity.brand}</strong>.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                The purpose of {identity.brand} is to create scalable digital platforms, high-performance web apps and experimental projects
                related to full stack development, frontend engineering and modern web technologies.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                {identity.name}, founder of {identity.brand}, is currently pursuing {identity.education.degree} at {identity.education.college} while
                actively building digital products and online platforms.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-6">
                <p className="text-amber-800 text-sm flex items-start gap-2">
                  <BadgeCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    Many users search for <strong>“JSS Originals”</strong>, <strong>“JSS Originals founder”</strong>,{' '}
                    <strong>“Jitendra Nimod JSS Originals”</strong>, <strong>“JS Nimod brand”</strong>.
                    All these searches refer to {identity.name} and his development brand.
                  </span>
                </p>
              </div>

              <p className="text-zinc-600 leading-relaxed">
                Through {identity.brand}, he focuses on building performance-driven websites, modern UI systems and scalable web-based tools for the internet.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SERVICES / FOCUS AREAS ===== */}
        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-8 text-center">
            What {identity.brand} Creates
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div key={i} className={`bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-2xl p-6 hover:bg-white hover:border-[#2563EB]/30 hover:shadow-xl transition-all group`}>
                  <div className={`p-3 bg-${service.color}-100 rounded-xl w-fit mb-4 group-hover:scale-110 transition`}>
                    <Icon className={`w-6 h-6 text-${service.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-800 mb-2">{service.title}</h3>
                  <p className="text-sm text-zinc-600">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===== PROJECT HIGHLIGHT ===== */}
        <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-20">
          <div className="bg-gradient-to-br from-[#2563EB]/5 to-purple-500/5 rounded-3xl p-8 md:p-10 border border-zinc-200 text-center">
            <Rocket className="w-16 h-16 text-[#2563EB] mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-3">Signature Project</h2>
            <p className="text-zinc-600 max-w-2xl mx-auto mb-6">
              The most prominent project under {identity.brand} is the <strong>Jitendra Singh Nimod identity website</strong> itself – 
              a comprehensive digital ecosystem that connects all aliases, locations, and profiles into a unified whole.
            </p>
            <Link
              href="/complete-digital-identity-of-jitendra-singh-nimod"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white font-semibold rounded-full hover:bg-[#1d4ed8] hover:scale-105 transition-all shadow-md"
            >
              Explore the Identity
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ===== RELATED LINKS ===== */}
        <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-20">
          <h2 className="text-2xl font-bold text-zinc-800 mb-4">Explore More</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "Developer Profile", path: "/developer-profile", icon: Code2 },
              { name: "Student Profile", path: "/student-profile", icon: GraduationCap },
              { name: "About Jitendra", path: "/about", icon: User },
              { name: "All Aliases", path: "/all-names-and-usernames-of-jitendra-singh-nimod", icon: Users },
              { name: "Locations", path: "/location", icon: Globe },
              { name: "Blog", path: "/blog", icon: BookOpen }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <Link
                  key={i}
                  href={item.path}
                  className="flex items-center justify-between p-4 bg-white/70 backdrop-blur-sm border border-zinc-200 rounded-xl hover:bg-white hover:border-[#2563EB]/30 hover:shadow-md transition group"
                >
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-[#2563EB]" />
                    <span className="text-sm text-zinc-600 group-hover:text-[#2563EB]">{item.name}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-[#2563EB]" />
                </Link>
              );
            })}
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-16">
          <div className="bg-gradient-to-br from-[#2563EB] to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Let's Build Something Together</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Have a project in mind? JSS Originals is ready to bring your ideas to life.
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
          <Heart className="w-3 h-3 inline text-rose-400" /> {identity.brand} – Digital by {identity.name}
        </div>
      </main>
    </>
  );
}
