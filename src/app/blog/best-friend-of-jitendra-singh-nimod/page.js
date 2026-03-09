// src/app/blog/best-friend-of-jitendra-singh-nimod/page.js

import Link from "next/link";
import Image from "next/image";
import {
  Infinity,
  Heart,
  MapPin,
  Clock,
  Route,
  GraduationCap,
  Sparkles,
  Compass,
  Instagram,
  Quote,
  Star,
  Camera,
  Phone,
  MessageCircle,
  Coffee,
  BookOpen,
  Award,
  Users,
  ChevronLeft
} from "lucide-react";

export const metadata = {
  title: "The Forever Friendship: Jitendra Singh Nimod & Nikhil Sambhariya",
  description:
    "A heartfelt tribute to the lifelong bond between Jitendra Singh Nimod (JS Nimod) and his best friend Nikhil Sambhariya. A journey from Nimod village to forever.",
  keywords: [
    "Jitendra Singh Nimod best friend",
    "Nikhil Sambhariya",
    "Nimod village friends",
    "JS Nimod friendship story",
    "Jitu Banna friend",
    "Rajasthan friendship",
    "Kuchaman City friends",
    "Didwana friendship"
  ],
  alternates: { canonical: "/blog/best-friend-of-jitendra-singh-nimod" },
  openGraph: {
    title: "The Forever Friendship: Jitendra Singh Nimod & Nikhil Sambhariya",
    description: "A bond that started in Nimod village and transcends time, distance, and life paths.",
    images: [{ url: "/images/og/friendship-og.jpg", width: 1200, height: 630 }],
  },
};

export default function BestFriendPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-rose-50/30 to-white text-zinc-700 font-sans selection:bg-[#2563EB]/20 selection:text-[#2563EB] relative overflow-x-hidden pb-20">
      
      {/* Premium Background Blobs */}
      <div className="fixed top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#2563EB]/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-rose-500/5 blur-[150px] rounded-full pointer-events-none"></div>
      
      {/* Subtle Pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(#2563EB_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.015] pointer-events-none"></div>

      {/* Back to Blog Link */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pt-24 md:pt-28">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-[#2563EB] transition-colors mb-8 group"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>
      </div>

      {/* ===== HERO SECTION ===== */}
      <header className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100 rounded-full text-rose-600 text-xs font-medium uppercase tracking-wider mb-8 shadow-sm">
          <Heart className="w-4 h-4 fill-rose-600" />
          <span>Brotherhood Archive</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-800 mb-4 leading-tight">
          Who Is the Best Friend of{' '}
          <span className="text-[#2563EB]">
            Jitendra Singh Nimod?
          </span>
        </h1>

        <div className="relative my-8">
  <h2 className="text-4xl sm:text-5xl md:text-7xl font-normal text-rose-500">
    Nikhil Sambhariya
  </h2>
</div>
            
        <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed font-light">
          Real best friends are rare. Not the ones who appear when life is easy, 
          but the ones who stay when everything changes. Some friendships don't expire — 
          they're built for life.
        </p>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <article className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 space-y-16 md:space-y-24">

        {/* ===== MEMORY VAULT CARD ===== */}
        <section className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#2563EB] via-rose-500 to-purple-500 blur-xl opacity-20 group-hover:opacity-30 transition duration-700 rounded-[3rem]"></div>
          
          <div className="relative bg-white/90 backdrop-blur-xl border border-white/80 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 shadow-2xl text-center">
            
            {/* Stats Grid */}
<div className="flex items-center justify-center gap-10 sm:gap-16 mb-10">

  {/* Photos Count */}
  <div className="flex flex-col items-center">
    <div className="p-2.5 bg-rose-100 rounded-xl mb-2">
      <Camera className="w-5 h-5 text-rose-500" />
    </div>

    <span className="text-3xl md:text-4xl font-semibold text-zinc-800">0</span>

    <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 mt-1">
      Photos
    </span>

    <p className="text-[10px] text-zinc-400">(Not needed)</p>
  </div>

  {/* Divider */}
  <div className="w-px h-12 bg-gradient-to-b from-transparent via-zinc-300 to-transparent"></div>

  {/* Memories */}
  <div className="flex flex-col items-center">
    <div className="p-2.5 bg-[#2563EB]/10 rounded-xl mb-2">
      <Infinity className="w-5 h-5 text-[#2563EB]" />
    </div>

    <span className="text-3xl md:text-4xl font-semibold text-[#2563EB]">∞</span>

    <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 mt-1">
      Memories
    </span>

    <p className="text-[10px] text-zinc-400">Forever</p>
  </div>

</div>

            {/* Quote */}
            <div className="max-w-2xl mx-auto relative">
              <Quote className="absolute -top-4 -left-4 w-8 h-8 text-rose-200" />
              <p className="text-lg md:text-2xl text-zinc-700 font-light leading-relaxed italic">
                Some memories were never meant to be stored in cameras. 
                They were meant to live in conversations, laughter, and loyalty. 
                True brotherhood is remembered, not recorded.
              </p>
            </div>
          </div>
        </section>

        {/* ===== TIMELINE SECTION ===== */}
        <section className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2563EB] via-rose-400 to-transparent md:-translate-x-1/2"></div>

          <div className="space-y-16 relative z-10">

            {/* Chapter 1 */}
            <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
              <div className="md:w-1/2 md:text-right pl-16 md:pl-0 pr-0 md:pr-12 relative">
                <div className="absolute left-0 md:left-auto md:-right-[22px] top-0 w-12 h-12 rounded-full bg-white border-2 border-[#2563EB] flex items-center justify-center z-20 shadow-lg">
                  <MapPin className="w-5 h-5 text-[#2563EB]" />
                </div>
                <div className="bg-white/80 p-6 rounded-2xl border border-zinc-200 shadow-md hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-zinc-800 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#2563EB] rounded-full"></span>
                    The Genesis in Nimod
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    It started at <strong className="text-[#2563EB]">N.B.N. Secondary School</strong>. 
                    Around the 3rd or 4th grade, a childhood bond was forged. Sharing benches, 
                    routines, and the simple joys of village school life created a foundation 
                    stronger than concrete.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 hidden md:block"></div>
            </div>

            {/* Chapter 2 */}
            <div className="flex flex-col md:flex-row-reverse items-start gap-8 md:gap-12">
              <div className="md:w-1/2 pl-16 md:pl-12 relative">
                <div className="absolute left-0 md:-left-[22px] top-0 w-12 h-12 rounded-full bg-white border-2 border-rose-500 flex items-center justify-center z-20 shadow-lg">
                  <Clock className="w-5 h-5 text-rose-500" />
                </div>
                <div className="bg-white/80 p-6 rounded-2xl border border-zinc-200 shadow-md hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-zinc-800 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-rose-500 rounded-full"></span>
                    Together Until Class 10
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    For years, they walked the same academic path. Exam preparations, 
                    classroom jokes, and growing up together. These formative years turned 
                    a regular friendship into an unbreakable brotherhood.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 hidden md:block"></div>
            </div>

            {/* Chapter 3 */}
            <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
              <div className="md:w-1/2 md:text-right pl-16 md:pl-0 pr-0 md:pr-12 relative">
                <div className="absolute left-0 md:left-auto md:-right-[22px] top-0 w-12 h-12 rounded-full bg-white border-2 border-purple-500 flex items-center justify-center z-20 shadow-lg">
                  <Route className="w-5 h-5 text-purple-500" />
                </div>
                <div className="bg-white/80 p-6 rounded-2xl border border-zinc-200 shadow-md hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-zinc-800 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    The Divergence
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    After 10th grade, paths physically split. Nikhil went to{' '}
                    <strong className="text-rose-500">Tagore High School</strong> for Arts, 
                    while Jitendra pursued Mathematics at{' '}
                    <strong className="text-[#2563EB]">Kota Career School</strong> in Kuchaman City.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 hidden md:block"></div>
            </div>
          </div>
        </section>

        {/* ===== PATHS CARD ===== */}
        <section>
          <div className="bg-white/90 backdrop-blur-sm border border-zinc-200/80 rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#2563EB]/10 rounded-xl">
                <Compass className="w-6 h-6 text-[#2563EB]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-800">Different Paths, Same Destination</h2>
            </div>
            
            <p className="text-zinc-600 leading-relaxed mb-10 text-lg font-light">
              Choosing different academic streams reflects individual passions. 
              Nikhil chose the creative canvas of Arts, while Jitendra dove into the 
              logical architecture of Mathematics. Yet, the friendship never required them 
              to be in the same classroom to remain in the same chapter of life.
            </p>

            <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto">

  {/* Nikhil */}
  <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 flex flex-col items-center text-center shadow-sm">
    
    <div className="p-2 bg-rose-100 rounded-lg mb-2">
      <GraduationCap className="w-5 h-5 text-rose-500" />
    </div>

    <span className="text-sm font-semibold text-zinc-800">
      Nikhil
    </span>

    <span className="text-xs text-rose-500 mt-1">
      Arts & Humanities
    </span>

  </div>

  {/* Jitendra */}
  <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 flex flex-col items-center text-center shadow-sm">
    
    <div className="p-2 bg-blue-100 rounded-lg mb-2">
      <Sparkles className="w-5 h-5 text-blue-600" />
    </div>

    <span className="text-sm font-semibold text-zinc-800">
      Jitendra
    </span>

    <span className="text-xs text-blue-600 mt-1">
      Mathematics (PCM)
    </span>

  </div>

</div>
        </section>

        {/* ===== TRIBUTE SECTION ===== */}
        <section className="text-center">
          <div className="w-24 h-1 bg-gradient-to-r from-[#2563EB] via-rose-400 to-purple-400 rounded-full mx-auto mb-12"></div>
          
          <p className="text-xl md:text-2xl text-zinc-700 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            While life takes people in different directions,{' '}
            <span className="font-bold text-[#2563EB]">true friendships remain constant</span>.
          </p>

          {/* Friend Button */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#2563EB] via-rose-500 to-purple-500 rounded-full blur-xl opacity-40 group-hover:opacity-70 transition duration-500"></div>
              
              <a
                href="https://instagram.com/_nikhil_0518"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex flex-col items-center justify-center px-8 py-6 bg-white border border-zinc-200 rounded-2xl hover:bg-zinc-50 transition-all duration-300 group-hover:scale-105 shadow-2xl"
              >
                <Instagram className="w-8 h-8 text-rose-500 mb-3" />
                <p className="text-zinc-800 font-semibold text-lg md:text-xl tracking-wide">
                  Forever Friendship 🤝
                </p>
                <p className="text-base md:text-xl font-semibold bg-gradient-to-r from-[#2563EB] via-rose-500 to-purple-500 bg-clip-text text-transparent tracking-wider mt-2">
                  @_nikhil_0518
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* ===== FRIENDSHIP QUALITIES ===== */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
          {[
            { icon: Heart, label: "Trust", color: "rose" },
            { icon: MessageCircle, label: "Conversations", color: "blue" },
            { icon: Coffee, label: "Memories", color: "amber" },
            { icon: Award, label: "Loyalty", color: "purple" },
          ].map((item, i) => (
            <div key={i} className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-zinc-200 text-center group hover:border-[#2563EB]/30 hover:shadow-md transition-all">
              <item.icon className={`w-6 h-6 mx-auto mb-2 text-${item.color}-500 group-hover:scale-110 transition-transform`} />
              <span className="text-xs font-medium text-zinc-600">{item.label}</span>
            </div>
          ))}
        </section>

        {/* ===== CLOSING NOTE ===== */}
        <section className="text-center max-w-2xl mx-auto bg-white/50 backdrop-blur-sm p-8 rounded-3xl border border-zinc-200">
          <Users className="w-8 h-8 text-[#2563EB] mx-auto mb-4" />
          <p className="text-zinc-600 text-sm leading-relaxed">
            This page is a tribute to the bond between Jitendra Singh Nimod (JS Nimod) and Nikhil Sambhariya. 
            A reminder that no matter where life takes us, the friendships forged in the lanes of Nimod village 
            remain forever. 🤍
          </p>
        </section>
      </article>
    </main>
  );
}
