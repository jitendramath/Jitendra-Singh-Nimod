// src/app/identity/jitendra-nimod/page.js
// Ultra-premium identity page for Jitendra Nimod alias

import Link from "next/link";
import Image from "next/image";
import identity from "../../../data/identity";
import StructuredData from "../../../components/StructuredData";
import {
  User,
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
  Globe,
  Award,
  CheckCircle,
  Star,
  Hash,
  ExternalLink,
  BookOpen,
  Clock,
  Target
} from "lucide-react";

export const metadata = {
  title: "Jitendra Nimod – Official Profile | Jitendra Singh Nimod",
  description:
    "Jitendra Nimod is the commonly searched name of Jitendra Singh Nimod, also known as Jitu Nimod and JS Nimod. Full Stack Developer from Rajasthan, India.",
  keywords: [
    "Jitendra Nimod",
    "Jitendra Nimod developer",
    "Jitendra Nimod Rajasthan",
    "Jitendra Nimod student",
    "Jitendra Singh Nimod",
    "JS Nimod",
    "Jitu Nimod"
  ],
  alternates: { canonical: "/identity/jitendra-nimod" },
  openGraph: {
    title: "Jitendra Nimod – Official Profile",
    description:
      "Jitendra Nimod is the commonly searched name of Jitendra Singh Nimod, a Full Stack Developer from Rajasthan.",
    images: [{ url: "/images/og/jitendra-nimod-og.jpg", width: 1200, height: 630 }],
  },
};

export default function JitendraNimodPage() {
  // JSON-LD for better entity understanding
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jitendra Nimod",
    alternateName: ["Jitendra Singh Nimod", "Jitu Nimod", "JS Nimod"],
    description: "Full Stack Web Developer and B.Sc Mathematics student from Rajasthan, India.",
    url: "https://me.jitubanna.com/identity/jitendra-nimod",
    sameAs: [
      "https://github.com/jitendra-math",
      "https://linkedin.com/in/jitendra-singh07",
      "https://instagram.com/jitendra.07_7"
    ]
  };

  const quickStats = [
    { label: "Full Name", value: identity.name, icon: User },
    { label: "Commonly Known As", value: "Jitendra Nimod", icon: Hash },
    { label: "Location", value: `${identity.location.city}, ${identity.location.state}`, icon: MapPin },
    { label: "Profession", value: "Full Stack Developer", icon: Code2 },
    { label: "Education", value: "B.Sc Mathematics", icon: GraduationCap },
    { label: "Brand", value: identity.brand, icon: Sparkles }
  ];

  const otherNames = [
    { name: "Jitendra Singh Nimod", path: "/identity/jitendra-singh-nimod" },
    { name: "Jitu Nimod", path: "/identity/jitu-nimod" },
    { name: "JS Nimod", path: "/identity/js-nimod" },
    { name: "Jitendra Singh", path: "/identity/jitendra-singh" },
    { name: "Jitubanna", path: "/jitubanna-identity" },
    { name: "Jitu Banna", path: "/jitu-banna" }
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
                <Fingerprint className="w-4 h-4" />
                <span>Identity Clarification</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-800 leading-tight mb-4">
                Jitendra Nimod
              </h1>

              <p className="text-lg md:text-xl text-[#2563EB] font-medium mb-2">
                Commonly searched name for {identity.name}
              </p>

              <p className="text-base text-zinc-600 max-w-2xl mx-auto md:mx-0 leading-relaxed mb-6">
                <strong className="text-[#2563EB]">Jitendra Nimod</strong> is the commonly searched name of{' '}
                <strong>{identity.name}</strong>, a Full Stack Web Developer from{' '}
                {identity.location.state}, India. Also known as <strong>Jitu Nimod and JS Nimod</strong>.
              </p>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Link
                  href="/developer-profile"
                  className="px-6 py-3 bg-[#2563EB] text-white font-semibold rounded-full hover:bg-[#1d4ed8] hover:scale-105 transition-all shadow-md"
                >
                  View Portfolio
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

            {/* Image */}
            <div className="relative w-64 h-64 md:w-72 md:h-72 shrink-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2563EB] via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src={identity.images.main}
                  alt={identity.name}
                  fill
                  priority
                  className="object-cover"
                />
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
              About Jitendra Nimod
            </h2>
            
            <div className="prose prose-zinc max-w-none space-y-4">
              <p className="text-zinc-600 leading-relaxed">
                <strong className="text-[#2563EB]">Jitendra Nimod</strong> is the commonly searched name of{' '}
                <strong>{identity.name}</strong>, a Full Stack Web Developer from {identity.location.state},{' '}
                {identity.location.country}.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                He is also known as <strong>{identity.alternateNames.join(", ")}</strong>. All these names refer to 
                the same individual.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                Jitendra Nimod is currently pursuing {identity.education.degree} at {identity.education.college} and is
                actively building modern web applications and digital platforms.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                Based in {identity.location.city}, Rajasthan, he develops scalable and SEO-optimized websites under the brand{' '}
                <strong>{identity.brand}</strong>.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-6">
                <p className="text-amber-800 text-sm flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    If you searched for <strong>“Jitendra Nimod developer”</strong>,{' '}
                    <strong>“Jitendra Nimod Rajasthan”</strong> or <strong>“Jitendra Nimod student”</strong>, this official 
                    website confirms his professional and academic identity.
                  </span>
                </p>
              </div>

              <p className="text-zinc-600 leading-relaxed font-medium border-l-4 border-[#2563EB] pl-4">
                The official and complete name is <strong>{identity.name}</strong>, but Jitendra Nimod is widely used
                across the internet.
              </p>
            </div>
          </div>
        </section>

        {/* ===== OTHER NAMES YOU MIGHT SEARCH ===== */}
        <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-20">
          <div className="bg-gradient-to-br from-[#2563EB]/5 to-purple-500/5 rounded-3xl p-8 md:p-10 border border-zinc-200">
            <h2 className="text-2xl font-bold text-zinc-800 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-[#2563EB]" />
              Other Names You Might Search
            </h2>
            <p className="text-zinc-600 mb-6">
              All these names refer to the same person – Jitendra Singh Nimod.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {otherNames.map((item, i) => (
                <Link
                  key={i}
                  href={item.path}
                  className="flex items-center justify-between p-3 bg-white/70 backdrop-blur-sm border border-zinc-200 rounded-xl hover:bg-white hover:border-[#2563EB]/30 hover:shadow-md transition group"
                >
                  <span className="text-sm text-zinc-600 group-hover:text-[#2563EB]">{item.name}</span>
                  <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-[#2563EB] group-hover:translate-x-1 transition" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===== RELATED IDENTITY PAGES ===== */}
        <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-20">
          <h2 className="text-2xl font-bold text-zinc-800 mb-6 text-center">Related Identity Pages</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Jitendra Singh", path: "/identity/jitendra-singh" },
              { name: "Jitu Nimod", path: "/identity/jitu-nimod" },
              { name: "JS Nimod", path: "/identity/js-nimod" },
              { name: "Nimod Jitu", path: "/identity/nimod-jitu" }
            ].map((item, i) => (
              <Link
                key={i}
                href={item.path}
                className="bg-white/70 backdrop-blur-sm border border-zinc-200 rounded-xl p-4 text-center hover:bg-white hover:border-[#2563EB]/30 hover:shadow-md transition group"
              >
                <Fingerprint className="w-5 h-5 text-[#2563EB] mx-auto mb-2 group-hover:scale-110 transition" />
                <p className="text-sm font-medium text-zinc-700 group-hover:text-[#2563EB]">{item.name}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-16">
          <div className="bg-gradient-to-br from-[#2563EB] to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Know the Real Jitendra Nimod</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Connect with Jitendra Singh Nimod – the developer behind the name.
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
                href="https://instagram.com/jitendra.07_7"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full hover:bg-white/30 hover:scale-105 transition-all"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
            </div>
          </div>
        </section>

        {/* ===== BOTTOM SOCIAL ===== */}
        <div className="relative z-10 flex flex-wrap items-center justify-center gap-6 pt-8">
          <a href={identity.social.github} target="_blank" className="text-zinc-400 hover:text-[#2563EB] transition">
            <Github className="w-6 h-6" />
          </a>
          <a href={identity.social.linkedin} target="_blank" className="text-zinc-400 hover:text-[#2563EB] transition">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href={identity.social.instagram} target="_blank" className="text-zinc-400 hover:text-[#2563EB] transition">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="mailto:contact@jitubanna.com" className="text-zinc-400 hover:text-[#2563EB] transition">
            <Mail className="w-6 h-6" />
          </a>
          <a href={identity.social.twitter} target="_blank" className="text-zinc-400 hover:text-[#2563EB] transition">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>

        {/* ===== FOOTER NOTE ===== */}
        <div className="relative z-10 text-center text-xs text-zinc-400 mt-16">
          <Heart className="w-3 h-3 inline text-rose-400" /> Jitendra Nimod = {identity.name}
        </div>
      </main>
    </>
  );
}
