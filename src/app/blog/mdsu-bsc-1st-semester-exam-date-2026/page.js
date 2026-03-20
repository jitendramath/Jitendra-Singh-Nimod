// src/app/blog/[pagename]/page.js

import Link from "next/link";
import { notFound } from "next/navigation";

const posts = {
  "mdsu-bsc-1st-semester-exam-date-2026": {
    title: "MDSU B.Sc. 1st Semester Exam Date 2026",
    subtitle:
      "Full timetable, subject-wise flow, practical window, and what students should expect after theory papers.",
    category: "Exam Update",
    readTime: "6 min read",
    updatedAt: "20 March 2026",
    heroImage:
      "/images/blog/mdsu-bsc-1st-semester-exam-date-2026.jpg",
    intro:
      "Aaj kal exam timetable ka scene full cinematic chal raha hai. Ek date aati hai, dusri ud jaati hai, aur student ka dimaag background music me chala jata hai. Is post me MDSU B.Sc. 1st semester exam ka clean breakdown diya gaya hai, so you can actually plan your prep like a sane human being.",
    highlights: [
      "Theory papers subject-wise spaced out hain",
      "25 March se exam cycle start hone ka signal mil raha hai",
      "Practical exam ka schedule alag notice me aata hai",
      "Result aur next semester gap ke liye thoda breathing room milta hai",
    ],
    sections: [
      {
        heading: "What is happening in this semester?",
        content: [
          "MDSU semester pattern ke hisaab se B.Sc. 1st semester ka theory schedule alag-alag subjects ke saath spread hota hai. First paper usually common subject hota hai, aur science papers uske baad line me aate hain.",
          "Iska matlab ye nahi ki sab students ek hi din me finish ho jayenge. Har subject ka date alag hota hai, aur wahi real timetable hota hai jo university notice me diya jata hai.",
        ],
      },
      {
        heading: "Why the 25 March date matters",
        content: [
          "25 March ko exam cycle start hone ka matlab hota hai ki semester officially alive ho gaya. Uske baad papers ka sequence aata hai, aur students ke liye revision ka final lap start ho jata hai.",
          "Agar first paper Hindi ya English jaisa common paper hai, to science students ko thoda softer entry milti hai. Uske baad Maths, Physics, Chemistry jaise subjects ka parade shuru hota hai.",
        ],
      },
      {
        heading: "Practical exam ka game",
        content: [
          "Practical paper theory ke saath chipka hua nahi hota. University alag notice ke through practical dates batati hai.",
          "Kabhi theory ke baad gap milta hai, kabhi college wise schedule aata hai. Matlab practical ka scene surprise box jaisa hota hai, par usually controlled window me hota hai.",
        ],
      },
      {
        heading: "After the last paper",
        content: [
          "Jab final theory paper khatam hota hai, turant next semester ka alarm nahi bajta. Checking, result process, aur university notices me thoda time lag sakta hai.",
          "Isi beech students ko usually thoda rest aur reset mil jata hai. Is gap ko smartly use karo, warna revision ka winter aa jayega aur tum summer samajh rahe hoge.",
        ],
      },
    ],
    tips: [
      "Har subject ka last 10 year style revision karo",
      "Numerical subjects ke formula sheet ko one-page me lock karo",
      "Practical files aur record book time pe complete rakho",
      "Exam notice ko daily once check karte raho",
    ],
    faq: [
      {
        q: "Kya 25 March ko sab science papers khatam ho jayenge?",
        a: "Nahi bhai. 25 March usually schedule start hone ka point hota hai. Science papers uske baad alag dates me aate hain.",
      },
      {
        q: "Practical same din hota hai kya?",
        a: "Usually nahi. Practical ka separate notice aata hai.",
      },
      {
        q: "Last paper ke baad next semester immediately start hota hai?",
        a: "Generally nahi. Pehle result, notice, aur academic calendar ka flow aata hai.",
      },
    ],
  },

  "how-to-prepare-for-bsc-1st-semester": {
    title: "How to Prepare for B.Sc. 1st Semester Without Panic",
    subtitle:
      "A practical, no-nonsense roadmap for science students who want marks without turning into a midnight gremlin.",
    category: "Study Guide",
    readTime: "5 min read",
    updatedAt: "20 March 2026",
    heroImage: "/images/blog/how-to-prepare-for-bsc-1st-semester.jpg",
    intro:
      "B.Sc. 1st semester ka asli boss syllabus nahi, procrastination hota hai. Ye guide tumhe simple routine, smart revision, aur paper strategy dega without the boring lecture energy.",
    highlights: [
      "Study in short focused blocks",
      "Prioritize high-weightage chapters",
      "Keep formula and definitions sheet ready",
      "Practice previous pattern questions",
    ],
    sections: [
      {
        heading: "Start with the map, not the jungle",
        content: [
          "Sabse pehle syllabus ko chapter-wise divide karo. Jo cheez visible hoti hai, wahi conquer hoti hai.",
          "Physics, Chemistry, Maths, Zoology ya Botany, jo bhi stream ho, usme core topics pe pehle grip banao.",
        ],
      },
      {
        heading: "Use a 3 layer revision system",
        content: [
          "Layer 1: Samajh lo. Layer 2: Notes banao. Layer 3: Repeat until brain stops arguing.",
          "Isse exam ke waqt tumhare paas ek tight revision chain hoti hai.",
        ],
      },
      {
        heading: "Do not trust last minute heroics",
        content: [
          "One-night preparation movie me cool lagti hai, real life me nahi. Paper pe blank mind ka gift milta hai.",
          "Har subject ke liye minimum 3 revision rounds rakho.",
        ],
      },
    ],
    tips: [
      "Daily 2 subjects mix karo",
      "Week me 1 mock test lo",
      "Short notes ko final weapon banao",
      "Formula, diagrams, and definitions alag pages me rakho",
    ],
    faq: [
      {
        q: "Kya sirf important questions padhne se kaam chal jayega?",
        a: "Short term me shayad, but full coverage better hoti hai.",
      },
      {
        q: "Best study time kya hai?",
        a: "Wo time jab phone silent ho aur dimaag half asleep na ho.",
      },
    ],
  },
};

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
      {children}
    </span>
  );
}

function SectionCard({ title, children }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-7">
      <h2 className="text-xl font-semibold text-white sm:text-2xl">{title}</h2>
      <div className="mt-4 space-y-3 text-sm leading-7 text-white/75 sm:text-base">
        {children}
      </div>
    </section>
  );
}

export function generateMetadata({ params }) {
  const post = posts[params.pagename];

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | JSS Originals Blog`,
    description: post.subtitle,
  };
}

export default function BlogPage({ params }) {
  const post = posts[params.pagename];

  if (!post) return notFound();

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.22),transparent_32%),radial-gradient(circle_at_right,rgba(168,85,247,0.16),transparent_25%),linear-gradient(to_bottom,#060816_0%,#050816_60%,#04060f_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />

        <div className="relative mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
          <div className="flex flex-wrap gap-2">
            <Badge>{post.category}</Badge>
            <Badge>{post.readTime}</Badge>
            <Badge>Updated {post.updatedAt}</Badge>
          </div>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium text-cyan-200">
                Premium Blog Experience
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {post.title}
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
                {post.subtitle}
              </p>

              <p className="mt-6 max-w-3xl text-sm leading-7 text-white/70 sm:text-base">
                {post.intro}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/blog"
                  className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
                >
                  Back to blog
                </Link>
                <a
                  href="#details"
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Read full post
                </a>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.4)] backdrop-blur-sm sm:p-5">
              <div className="rounded-[22px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                  Key Takeaways
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-white/80">
                  {post.highlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="details"
        className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24"
      >
        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="space-y-6">
            {post.sections.map((section) => (
              <SectionCard key={section.heading} title={section.heading}>
                {section.content.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </SectionCard>
            ))}

            <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-500/10 via-white/5 to-fuchsia-500/10 p-5 sm:p-7">
              <h2 className="text-xl font-semibold text-white sm:text-2xl">
                Smart study checklist
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {post.tips.map((tip) => (
                  <div
                    key={tip}
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/80"
                  >
                    {tip}
                  </div>
                ))}
              </div>
            </section>

            <SectionCard title="Frequently asked questions">
              <div className="space-y-4">
                {post.faq.map((item) => (
                  <div
                    key={item.q}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <h3 className="font-medium text-white">{item.q}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/70">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </SectionCard>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">
            <section className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                Quick navigation
              </p>
              <div className="mt-4 space-y-2 text-sm">
                <a
                  href="#details"
                  className="block rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white/80 transition hover:bg-white/10"
                >
                  Overview
                </a>
                <a
                  href="#details"
                  className="block rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white/80 transition hover:bg-white/10"
                >
                  Subject flow
                </a>
                <a
                  href="#details"
                  className="block rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white/80 transition hover:bg-white/10"
                >
                  Practical info
                </a>
                <a
                  href="#details"
                  className="block rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white/80 transition hover:bg-white/10"
                >
                  FAQ
                </a>
              </div>
            </section>

            <section className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/70">
                Pro tip
              </p>
              <p className="mt-3 text-sm leading-6 text-cyan-50/90">
                Is type ka blog page SEO aur readability dono ke liye strong hota
                hai. Mobile pe bhi clean dikhega, aur content heavy hone ke
                bawajood premium feel dega.
              </p>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
