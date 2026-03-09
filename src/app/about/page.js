// src/app/about/page.js
// Ultra‑premium light theme about page with personal story, journey, and vision

import Image from "next/image";
import Link from "next/link";
import identity from "../../data/identity";
import StructuredData from "../../components/StructuredData";
import {
  User,
  MapPin,
  GraduationCap,
  Briefcase,
  Sparkles,
  Code2,
  Heart,
  Target,
  Eye,
  Award,
  Clock,
  Users,
  Globe,
  Mail,
  MessageCircle,
  Instagram,
  Github,
  Linkedin,
  ChevronRight,
  Quote,
  BookOpen,
  Rocket,
  Compass,
  Star,
  BadgeCheck,
} from "lucide-react";

export const metadata = {
  title: "About Jitendra Singh Nimod – Developer & Student from Rajasthan",
  description:
    "Learn about Jitendra Singh Nimod (JS Nimod), a Full Stack Developer and B.Sc Mathematics student from Rajasthan. His journey, vision, and mission.",
  keywords: [
    "About Jitendra Singh Nimod",
    "Jitendra Nimod biography",
    "JS Nimod story",
    "Jitu Nimod about",
    "Full Stack Developer Rajasthan",
    "JSS Originals founder",
    "Kuchaman City developer",
    "Nimod village Rajasthan",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Jitendra Singh Nimod – Developer & Student",
    description:
      "The story of Jitendra Singh Nimod – from Nimod village to building web apps. Full Stack Developer & Mathematics student.",
    images: [{ url: "/images/og/about-og.jpg", width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  const stats = [
    { label: "Also Known As", value: identity.alternateNames.slice(0, 3).join(", ") + "...", icon: Users },
    { label: "Location", value: `${identity.location.city}, ${identity.location.state}`, icon: MapPin },
    { label: "Education", value: identity.education.degree, icon: GraduationCap },
    { label: "Brand", value: identity.brand, icon: Sparkles },
  ];

  const journey = [
    { year: "2009", event: "Born in Nimod village, Rajasthan", icon: Star },
    { year: "2022", event: "Completed Class 10 at N.B.N. Secondary School", icon: BookOpen },
    { year: "2024", event: "Completed Class 12 (PCM) – Kota Career School, Kuchaman City", icon: GraduationCap },
    { year: "2024", event: "Started B.Sc Mathematics at Govt. Bangur College, Didwana", icon: GraduationCap },
    { year: "2025", event: "Founded JSS Originals – digital identity brand", icon: Rocket },
    { year: "2026", event: "Full Stack Developer & Freelancer", icon: Code2 },
  ];

  return (
    <>
      <StructuredData />
      <main className="bg-gradient-to-br from-white via-zinc-50 to-white text-zinc-700 font-sans selection:bg-[#2563EB]/30 selection:text-white relative overflow-hidden">
        
        {/* Premium background blobs */}
        <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#2563EB]/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="fixed inset-0 bg-[radial-gradient(#2563EB_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.015] pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">

          {/* Hero section */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16 md:mb-20">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 shrink-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2563EB] via-purple-500 to-amber-400 rounded-2xl blur-xl opacity-50"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src={identity.images.developer}
                  alt={identity.name}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2563EB]/10 rounded-full text-[#2563EB] text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                <span>Developer & Mathematics Student</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-800 mb-3">
                About {identity.name}
              </h1>
              <p className="text-base text-zinc-600 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                From the lanes of <span className="font-semibold text-zinc-800">Nimod village</span> to building modern web applications – 
                this is my story of passion, learning, and creation.
              </p>
            </div>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-zinc-200 hover:border-[#2563EB]/30 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4 text-[#2563EB]" />
                    <span className="text-xs font-medium text-zinc-500 uppercase">{stat.label}</span>
                  </div>
                  <p className="text-sm font-semibold text-zinc-800">{stat.value}</p>
                </div>
              );
            })}
          </div>

          {/* Who am I – story cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            <div className="bg-white/70 backdrop-blur-sm border border-zinc-200 rounded-2xl p-8 hover:bg-white hover:border-[#2563EB]/30 hover:shadow-2xl transition-all">
              <div className="p-3 bg-[#2563EB]/10 rounded-xl w-fit mb-6">
                <User className="w-6 h-6 text-[#2563EB]" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-800 mb-4">Who Am I?</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                I'm <strong className="text-[#2563EB]">{identity.name}</strong>, a Full Stack Web Developer and 
                B.Sc Mathematics student from Rajasthan. People also know me as{' '}
                <strong className="text-zinc-800">{identity.alternateNames.slice(0, 3).join(", ")}</strong>.
              </p>
              <p className="text-zinc-600">
                I believe in building things that matter – websites that are fast, beautiful, and reach the right people.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm border border-zinc-200 rounded-2xl p-8 hover:bg-white hover:border-[#2563EB]/30 hover:shadow-2xl transition-all">
              <div className="p-3 bg-purple-100 rounded-xl w-fit mb-6">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-800 mb-4">My Mission</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                To bridge the gap between mathematics and code, creating digital solutions that are logical, scalable, and human‑centered.
              </p>
              <p className="text-zinc-600">
                Through <strong className="text-[#2563EB]">{identity.brand}</strong>, I aim to help individuals and businesses 
                establish their digital identity with premium websites.
              </p>
            </div>
          </div>

          {/* Journey timeline */}
          <section className="mb-20">
            <div className="flex items-center gap-2 mb-8">
              <div className="p-2 bg-[#2563EB]/10 rounded-lg">
                <Clock className="w-5 h-5 text-[#2563EB]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-800">My Journey</h2>
            </div>
            <div className="relative">
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2563EB] via-purple-400 to-amber-400 md:-translate-x-1/2"></div>
              <div className="space-y-8 relative z-10">
                {journey.map((item, idx) => (
                  <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-8 md:gap-12`}>
                    <div className="md:w-1/2 pl-16 md:pl-0 relative">
                      <div className={`absolute left-0 md:left-auto ${idx % 2 === 0 ? 'md:-right-[22px]' : 'md:-left-[22px]'} top-0 w-12 h-12 rounded-full bg-white border-2 border-[#2563EB] flex items-center justify-center z-20 shadow-lg`}>
                        <item.icon className="w-5 h-5 text-[#2563EB]" />
                      </div>
                      <div className="bg-white/80 p-5 rounded-xl border border-zinc-200 shadow-md hover:shadow-xl transition-shadow">
                        <span className="text-sm font-bold text-[#2563EB]">{item.year}</span>
                        <p className="text-zinc-700 mt-1">{item.event}</p>
                      </div>
                    </div>
                    <div className="md:w-1/2 hidden md:block"></div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Philosophy */}
          <section className="bg-gradient-to-br from-[#2563EB]/5 via-purple-500/5 to-amber-500/5 rounded-3xl p-8 md:p-12 mb-20 border border-zinc-200/80">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="p-6 bg-white rounded-3xl shadow-2xl">
                  <Eye className="w-16 h-16 text-[#2563EB]" />
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-4">My Philosophy</h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  I believe that great code is born from great logic – and what better training than mathematics? 
                  Every project I build is an exercise in structure, pattern recognition, and clean thinking.
                </p>
                <p className="text-zinc-600">
                  From the villages of Rajasthan to the global web – I want to show that talent isn't tied to a city. 
                  It's about passion, consistency, and the will to build.
                </p>
              </div>
            </div>
          </section>

          {/* What people search */}
          <section className="mb-20">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-[#2563EB]/10 rounded-lg">
                <Globe className="w-5 h-5 text-[#2563EB]" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-800">People Also Search</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                "Jitendra Nimod",
                "JS Nimod",
                "Jitu Nimod",
                "Jitu Banna",
                "Jitendra Singh",
                "Jitendra Singh Shekhawat",
                "JSS Originals founder",
                "Developer in Didwana",
                "Kuchaman City web developer",
                "Freelancer Rajasthan",
              ].map((term, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white/70 backdrop-blur-sm border border-zinc-200 rounded-full text-sm text-zinc-600 hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] transition-all cursor-default"
                >
                  {term}
                </span>
              ))}
            </div>
          </section>

          {/* Call to action */}
          <section className="bg-gradient-to-br from-[#2563EB] to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Want to know more?</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Whether you have a project, a question, or just want to say hi – I'm always open.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/919549626202"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#2563EB] font-semibold rounded-full hover:bg-zinc-100 hover:scale-105 transition-all shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Me
              </a>
              <a
                href="mailto:contact@jitubanna.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full hover:bg-white/30 hover:scale-105 transition-all"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </a>
              <a
                href="https://instagram.com/jitendra.07_7"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full hover:bg-white/30 hover:scale-105 transition-all"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
            </div>
          </section>

          {/* Bottom social links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href={identity.social.github} target="_blank" rel="noopener" className="text-zinc-400 hover:text-[#2563EB] transition">
              <Github className="w-6 h-6" />
            </a>
            <a href={identity.social.linkedin} target="_blank" rel="noopener" className="text-zinc-400 hover:text-[#2563EB] transition">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={identity.social.instagram} target="_blank" rel="noopener" className="text-zinc-400 hover:text-[#2563EB] transition">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="mailto:contact@jitubanna.com" className="text-zinc-400 hover:text-[#2563EB] transition">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
