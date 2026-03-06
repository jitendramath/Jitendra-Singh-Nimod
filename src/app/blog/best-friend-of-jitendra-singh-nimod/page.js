// src/app/blog/best-friend-of-jitendra-singh-nimod/page.js

import { 
  Infinity, 
  CameraOff, 
  MapPin, 
  GraduationCap, 
  Compass, 
  Heart, 
  Sparkles,
  Route,
  Clock
} from "lucide-react";

// 📌 APPLE-TIER SEO METADATA
export const metadata = {
  title: "Who Is the Best Friend of Jitendra Singh Nimod?",
  description:
    "A digital tribute to the lifelong friendship between Jitendra Singh Nimod and Nikhil Sambhariya. A bond that started in Nimod and transcends time.",
  keywords: [
    "Jitendra Singh Nimod best friend",
    "Nikhil Sambhariya",
    "Friendship story",
    "Nimod village friends"
  ],
  alternates: { canonical: "/blog/best-friend-of-jitendra-singh-nimod" },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-zinc-400 font-sans selection:bg-rose-500/30 pb-32">
      
      {/* ===== HERO SECTION (EMOTIONAL & CINEMATIC) ===== */}
      <header className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Soft, warm ambient glow to represent friendship */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-rose-500/15 via-orange-500/5 to-transparent blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-3xl mx-auto relative z-10 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rose-500/20 bg-rose-500/5 text-rose-300 text-xs font-medium tracking-widest uppercase mb-8 shadow-[0_0_20px_rgba(244,63,94,0.1)]">
            <Heart className="w-4 h-4" fill="currentColor" />
            <span>A Bond Beyond Time</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.15]">
            Who Is the Best Friend of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-white to-zinc-400">
              Jitendra Singh Nimod?
            </span>
          </h1>

          <p className="text-lg text-zinc-400 leading-relaxed font-light max-w-2xl mx-auto">
            While the internet knows the developer, the code, and the projects, behind the screen exists a personal story of a friendship that has stood the ultimate test of time. That name is <strong className="text-white font-medium">Nikhil Sambhariya</strong>.
          </p>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-6 space-y-24">

        {/* ===== THE MASTERPIECE CARD: 0 PHOTOS, INFINITE MEMORIES ===== */}
        <section className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 to-purple-500 rounded-[2.5rem] blur-xl opacity-20 animate-pulse"></div>
          
          <div className="relative p-10 md:p-14 rounded-[2.5rem] bg-gradient-to-br from-zinc-900 to-black border border-white/10 shadow-2xl overflow-hidden flex flex-col items-center text-center group">
            
            {/* Background texture/glow */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>
            
            <div className="flex items-center justify-center gap-6 md:gap-12 mb-8 relative z-10">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-zinc-800/50 border border-white/5 flex items-center justify-center mb-4 group-hover:-translate-y-2 transition-transform duration-500">
                  <CameraOff className="w-7 h-7 text-zinc-500" />
                </div>
                <span className="text-3xl md:text-5xl font-bold text-white tracking-tight">0</span>
                <span className="text-xs uppercase tracking-widest text-zinc-500 mt-2 font-medium">Photos</span>
              </div>

              <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4 group-hover:-translate-y-2 transition-transform duration-500">
                  <Infinity className="w-8 h-8 text-rose-400 drop-shadow-[0_0_10px_rgba(244,63,94,0.5)]" />
                </div>
                <span className="text-3xl md:text-5xl font-bold text-white tracking-tight">∞</span>
                <span className="text-xs uppercase tracking-widest text-rose-400 mt-2 font-medium">Memories</span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-zinc-300 font-light italic relative z-10 max-w-lg">
              "Because the most beautiful moments were lived in reality, not captured for a gallery."
            </p>
            
          </div>
        </section>

        

        {/* ===== THE TIMELINE (MOBILE-FIRST SCROLLYTELLING) ===== */}
        <section className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent md:-translate-x-1/2"></div>

          <div className="space-y-16 relative z-10">
            
            {/* Chapter 1 */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 w-full">
              <div className="md:w-1/2 md:text-right pl-16 md:pl-0 pr-0 md:pr-12 relative">
                <div className="absolute left-0 md:left-auto md:-right-14 top-1 w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  <MapPin className="w-5 h-5 text-zinc-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">The Genesis in Nimod</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  It started at <strong>N.B.N. Secondary School</strong>. Around the 3rd or 4th grade, a childhood bond was forged. Sharing benches, routines, and the simple joys of village school life created a foundation stronger than concrete.
                </p>
              </div>
              <div className="md:w-1/2 hidden md:block"></div>
            </div>

            {/* Chapter 2 */}
            <div className="flex flex-col md:flex-row-reverse items-start md:items-center gap-8 md:gap-12 w-full">
              <div className="md:w-1/2 pl-16 md:pl-12 relative">
                <div className="absolute left-0 md:-left-14 top-1 w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  <Clock className="w-5 h-5 text-zinc-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Together Until Class 10</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  For years, they walked the same academic path. Exam preparations, classroom jokes, and growing up together. These formative years turned a regular friendship into an unbreakable brotherhood.
                </p>
              </div>
              <div className="md:w-1/2 hidden md:block"></div>
            </div>

            {/* Chapter 3 */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 w-full">
              <div className="md:w-1/2 md:text-right pl-16 md:pl-0 pr-0 md:pr-12 relative">
                <div className="absolute left-0 md:left-auto md:-right-14 top-1 w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  <Route className="w-5 h-5 text-zinc-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">The Divergence</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  After 10th grade, paths physically split. Nikhil went to <strong>Tagore High School</strong> for Arts, while Jitendra pursued Mathematics at <strong>Kota Career School</strong> in Kuchaman City.
                </p>
              </div>
              <div className="md:w-1/2 hidden md:block"></div>
            </div>

          </div>
        </section>

        {/* ===== THE SPLIT BUT CONNECTED CARD ===== */}
        <section className="pt-8">
          <div className="p-8 md:p-10 rounded-[2rem] bg-white/[0.02] border border-white/[0.05] relative overflow-hidden">
            <div className="flex items-center gap-3 mb-8">
              <Compass className="w-6 h-6 text-white" />
              <h2 className="text-2xl font-semibold text-white tracking-tight">Different Paths, Same Destination</h2>
            </div>
            
            <p className="text-zinc-400 leading-relaxed mb-8">
              Choosing different academic streams reflects individual passions. Nikhil chose the creative canvas of Arts, while Jitendra dove into the logical architecture of Mathematics. Yet, the friendship never required them to be in the same classroom to remain in the same chapter of life.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-black border border-white/5 flex flex-col items-center text-center">
                <GraduationCap className="w-8 h-8 text-amber-400 mb-3" />
                <span className="text-white font-medium">Nikhil</span>
                <span className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">Arts Stream</span>
              </div>
              <div className="p-6 rounded-2xl bg-black border border-white/5 flex flex-col items-center text-center">
                <Sparkles className="w-8 h-8 text-cyan-400 mb-3" />
                <span className="text-white font-medium">Jitendra</span>
                <span className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">Mathematics</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CONCLUSION ===== */}
        <section className="text-center pb-10">
          <div className="w-16 h-px bg-white/20 mx-auto mb-10"></div>
          <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed mb-6">
            While life takes people in different directions, <strong className="text-white font-medium">true friendships remain constant</strong>. 
          </p>
          <p className="text-zinc-500 text-sm max-w-lg mx-auto leading-relaxed">
            The story of Jitendra and Nikhil is a testament to the fact that you don't need a thousand photos in your gallery when you have an eternity of memories etched in your mind.
          </p>
        </section>

      </article>
    </main>
  );
}
