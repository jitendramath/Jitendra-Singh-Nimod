// src/app/student-profile/page.js
// Ultra‑premium light theme student profile with academic journey, achievements, and contact

import Link from "next/link";
import Image from "next/image";
import identity from "../../data/identity";
import StructuredData from "../../components/StructuredData";
import {
  GraduationCap,
  BookOpen,
  Calculator,
  Award,
  Sparkles,
  Clock,
  MapPin,
  Calendar,
  Target,
  Brain,
  Code2,
  Globe,
  Mail,
  MessageCircle,
  Instagram,
  Github,
  Linkedin,
  Users,
  ChevronRight,
  ExternalLink,
  Star,
  Heart,
  School,
  Library,
  PenTool,
  Trophy,
  Rocket,
  BadgeCheck,
} from "lucide-react";

export const metadata = {
  title: "Jitendra Singh Nimod – B.Sc Mathematics Student & Developer",
  description:
    "Jitendra Singh Nimod (JS Nimod) is a B.Sc Mathematics student at Govt. Bangur PG College, Didwana, Rajasthan. Combining mathematical logic with full stack development.",
  keywords: [
    "Jitendra Singh Nimod student",
    "JS Nimod BSc student",
    "Jitu Nimod education",
    "Mathematics student Rajasthan",
    "Govt Bangur College Didwana student",
    "Kuchaman City student",
    "Developer student Rajasthan",
  ],
  alternates: { canonical: "/student-profile" },
  openGraph: {
    title: "Jitendra Singh Nimod – B.Sc Mathematics Student",
    description:
      "Student of Mathematics at Govt. Bangur PG College, Didwana. Full Stack Developer & Founder of JSS Originals.",
    images: [{ url: "/images/og/student-og.jpg", width: 1200, height: 630 }],
  },
};

export default function StudentProfilePage() {
  const currentYear = new Date().getFullYear();
  const enrollmentYear = 2024; // assuming 1st year in 2024
  const graduationYear = 2027;

  const subjects = [
    { name: "Mathematics (PCM)", icon: Calculator, color: "blue", desc: "Core focus – algebra, calculus, statistics" },
    { name: "Physics", icon: Brain, color: "purple", desc: "Problem solving & analytical thinking" },
    { name: "Chemistry", icon: PenTool, color: "green", desc: "Lab work & practical applications" },
  ];

  const achievements = [
    { title: "School Topper – Class 10", year: "2022", icon: Trophy, color: "amber" },
    { title: "Mathematics Olympiad Participant", year: "2023", icon: Award, color: "blue" },
    { title: "Web Development Certification", year: "2024", icon: Code2, color: "indigo" },
    { title: "JSS Originals Founder", year: "2025", icon: Rocket, color: "purple" },
  ];

  const timeline = [
    { year: "2022", event: "Completed Class 10 at N.B.N. Secondary School, Nimod", icon: School },
    { year: "2024", event: "Completed Class 12 (PCM) at Kota Career School, Kuchaman City", icon: Library },
    { year: "2024", event: "Enrolled in B.Sc Mathematics at Govt. Bangur PG College, Didwana", icon: GraduationCap },
    { year: "2025", event: "Founded JSS Originals – digital identity brand", icon: Rocket },
    { year: "2026", event: "Currently in 2nd year, building web apps & freelancing", icon: Code2 },
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
                  src={identity.images.casual}
                  alt={`${identity.name} student`}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full text-amber-600 text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                <span>B.Sc Mathematics (PCM) – 2nd Year</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-800 mb-3">
                {identity.name}
              </h1>
              <p className="text-lg sm:text-xl text-[#2563EB] font-medium mb-4">
                Student & Developer
              </p>
              <p className="text-base text-zinc-600 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                Pursuing Mathematics at{' '}
                <span className="font-semibold text-zinc-800">Govt. Bangur PG College, Didwana</span>. 
                Passionate about combining logical thinking with modern web development.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-6">
                <a
                  href="mailto:contact@jitubanna.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2563EB] text-white text-sm font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all"
                >
                  <Mail className="w-4 h-4" />
                  Email Me
                </a>
                <a
                  href="https://wa.me/919549626202"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white text-sm font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <a
                  href="https://instagram.com/jitendra.07_7"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
            <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-zinc-200 text-center hover:border-[#2563EB]/30 hover:shadow-md transition">
              <GraduationCap className="w-6 h-6 text-[#2563EB] mx-auto mb-2" />
              <p className="text-xs text-zinc-500">Degree</p>
              <p className="font-medium text-zinc-800 text-sm">B.Sc Mathematics</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-zinc-200 text-center hover:border-[#2563EB]/30 hover:shadow-md transition">
              <School className="w-6 h-6 text-[#2563EB] mx-auto mb-2" />
              <p className="text-xs text-zinc-500">College</p>
              <p className="font-medium text-zinc-800 text-sm">Govt. Bangur College</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-zinc-200 text-center hover:border-[#2563EB]/30 hover:shadow-md transition">
              <Calendar className="w-6 h-6 text-[#2563EB] mx-auto mb-2" />
              <p className="text-xs text-zinc-500">Year</p>
              <p className="font-medium text-zinc-800 text-sm">2nd Year (2024–2027)</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-zinc-200 text-center hover:border-[#2563EB]/30 hover:shadow-md transition">
              <MapPin className="w-6 h-6 text-[#2563EB] mx-auto mb-2" />
              <p className="text-xs text-zinc-500">Location</p>
              <p className="font-medium text-zinc-800 text-sm">Didwana, Rajasthan</p>
            </div>
          </div>

          {/* Academic journey – timeline */}
          <section className="mb-20">
            <div className="flex items-center gap-2 mb-8">
              <div className="p-2 bg-[#2563EB]/10 rounded-lg">
                <BookOpen className="w-5 h-5 text-[#2563EB]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-800">Academic Journey</h2>
            </div>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2563EB] via-purple-400 to-amber-400 md:-translate-x-1/2"></div>
              
              <div className="space-y-8 relative z-10">
                {timeline.map((item, idx) => (
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

          {/* Subjects / Core studies */}
          <section className="mb-20">
            <div className="flex items-center gap-2 mb-8">
              <div className="p-2 bg-[#2563EB]/10 rounded-lg">
                <Calculator className="w-5 h-5 text-[#2563EB]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-800">Core Subjects</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {subjects.map((subject, i) => {
                const Icon = subject.icon;
                return (
                  <div
                    key={i}
                    className="bg-white/70 backdrop-blur-sm border border-zinc-200 rounded-2xl p-6 hover:bg-white hover:border-[#2563EB]/30 hover:shadow-2xl transition-all group"
                  >
                    <div className={`p-3 bg-${subject.color}-100 rounded-xl w-fit mb-4 group-hover:bg-${subject.color}-200 transition`}>
                      <Icon className={`w-6 h-6 text-${subject.color}-600`} />
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-800 mb-2">{subject.name}</h3>
                    <p className="text-sm text-zinc-600">{subject.desc}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Achievements */}
          <section className="mb-20">
            <div className="flex items-center gap-2 mb-8">
              <div className="p-2 bg-[#2563EB]/10 rounded-lg">
                <Award className="w-5 h-5 text-[#2563EB]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-800">Achievements</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {achievements.map((ach, i) => {
                const Icon = ach.icon;
                return (
                  <div
                    key={i}
                    className="bg-white/70 backdrop-blur-sm border border-zinc-200 rounded-xl p-5 text-center hover:bg-white hover:border-[#2563EB]/30 hover:shadow-xl transition-all group"
                  >
                    <div className={`p-2 bg-${ach.color}-100 rounded-full w-fit mx-auto mb-3 group-hover:scale-110 transition`}>
                      <Icon className={`w-5 h-5 text-${ach.color}-600`} />
                    </div>
                    <p className="text-xs text-zinc-500">{ach.year}</p>
                    <p className="text-sm font-medium text-zinc-800 mt-1">{ach.title}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Mathematics & Code – the connection */}
          <section className="bg-gradient-to-br from-[#2563EB]/5 to-purple-500/5 rounded-3xl p-8 md:p-10 mb-20 border border-zinc-200/80">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="p-6 bg-white rounded-3xl shadow-2xl">
                  <Brain className="w-16 h-16 text-[#2563EB]" />
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-4">Why Mathematics + Code?</h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  Mathematics isn't just about numbers – it's about logical thinking, patterns, and problem‑solving. 
                  These same skills make a great developer. Every algorithm, every data structure, every optimized query 
                  is rooted in mathematical logic.
                </p>
                <p className="text-zinc-600">
                  <strong className="text-[#2563EB]">{identity.shortName}</strong> brings this analytical mindset to every 
                  project, whether it's a complex web app or a simple business site.
                </p>
              </div>
            </div>
          </section>

          {/* Campus & life */}
          <section className="mb-20">
            <div className="flex items-center gap-2 mb-8">
              <div className="p-2 bg-[#2563EB]/10 rounded-lg">
                <Users className="w-5 h-5 text-[#2563EB]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-800">Campus & Community</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white/70 backdrop-blur-sm border border-zinc-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-amber-100 rounded-lg">
                    <Library className="w-5 h-5 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-800">Govt. Bangur PG College, Didwana</h3>
                </div>
                <p className="text-sm text-zinc-600 mb-2">
                  Established in 1959, one of the premier institutions in the region. Known for strong science & mathematics programs.
                </p>
                <p className="text-sm text-zinc-500">📍 Didwana, Rajasthan – 341508</p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm border border-zinc-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Code2 className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-800">Developer Student Community</h3>
                </div>
                <p className="text-sm text-zinc-600 mb-2">
                  Active member of local dev groups, helping fellow students learn web development. Organising small workshops in Kuchaman City.
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <BadgeCheck className="w-4 h-4 text-[#2563EB]" />
                  <span className="text-xs text-zinc-600">Mentor & Founder, JSS Originals</span>
                </div>
              </div>
            </div>
          </section>

          {/* Call to action – freelance / connect */}
          <section className="bg-gradient-to-br from-[#2563EB] to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Balancing Studies & Code</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              I'm a student first, but I'm always open to freelance projects, collaborations, or just a chat about tech and mathematics.
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
