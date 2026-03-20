// src/app/blog/mdsu-bsc-1st-semester-exam-date-2026/page.js

import Link from "next/link";
import StructuredData from "../../../components/StructuredData";
import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  ChevronRight,
  CheckCircle2,
  BookOpenText,
  GraduationCap,
  FlaskConical,
  FileText,
  Sparkles,
  AlertTriangle,
  ArrowUpRight,
  BadgeCheck,
} from "lucide-react";

export const metadata = {
  title: "MDSU BSc 1st Semester Exam Date 2026 | Full Timetable & Practical Update",
  description:
    "Complete MDSU B.Sc. 1st Semester 2026 exam guide with theory start date, subject-wise flow, practical update, and student-friendly breakdown.",
  keywords: [
    "MDSU BSc 1st Semester Exam Date 2026",
    "MDSU BSc timetable 2026",
    "MDSU science semester exam",
    "BSc first semester exam date",
    "MDSU practical date",
  ],
  alternates: {
    canonical: "https://me.jitubanna.com/blog/mdsu-bsc-1st-semester-exam-date-2026",
  },
  openGraph: {
    title: "MDSU BSc 1st Semester Exam Date 2026",
    description:
      "A premium, student-friendly guide to the MDSU B.Sc. 1st Semester exam timetable, practicals, and what happens after the last paper.",
    url: "https://me.jitubanna.com/blog/mdsu-bsc-1st-semester-exam-date-2026",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MDSU BSc 1st Semester Exam Date 2026",
    description:
      "Full timetable, practical update, and exam flow for MDSU B.Sc. 1st Semester.",
  },
};

const quickFacts = [
  {
    icon: CalendarDays,
    label: "Exam cycle start",
    value: "25 March 2026",
  },
  {
    icon: BookOpenText,
    label: "First paper vibe",
    value: "Common subject first",
  },
  {
    icon: FlaskConical,
    label: "Science papers",
    value: "After the common paper",
  },
  {
    icon: Clock3,
    label: "Practical notice",
    value: "Separate schedule",
  },
];

const sections = [
  {
    id: "overview",
    title: "Overview",
    content: [
      "MDSU B.Sc. 1st Semester timetable ko dekhkar ek cheez clear ho jaati hai, exam ka scene ek single thunderclap nahi hota. Ye proper sequence me aata hai, jahan pehle common subject, phir science subjects, aur practical alag notice me move karta hai.",
      "Agar tum science stream se ho, toh 25 March ko timetable ka start point samajho. Actual subject papers uske baad line me aate hain, so last-minute panic ka option mat rakho.",
    ],
  },
  {
    id: "subject-flow",
    title: "Subject-wise flow",
    content: [
      "Usually common paper se entry hoti hai, aur uske baad Mathematics, Physics, Chemistry, Zoology, Botany, ya stream ke hisaab se other papers aate hain. Yeh flow useful hai kyunki tum revision ko subject buckets me baant sakte ho.",
      "Common paper ke baad science papers ka gap milna tumhare liye bonus time hota hai. Is gap ko waste kar diya toh syllabus tumse badla lega.",
    ],
  },
  {
    id: "practical-update",
    title: "Practical exam update",
    content: [
      "Practical exam theory paper ke saath chipka hua package nahi hota. University usually practical ke liye separate notice nikalti hai.",
      "Iska simple matlab: theory ka end aur practical ka start beech me thoda drama lekar aata hai. Practical file, viva prep, aur record book ko pehle se ready rakho.",
    ],
  },
  {
    id: "after-exams",
    title: "Last paper ke baad kya hota hai",
    content: [
      "Final paper ke baad turant next semester ka jump-scare nahi aata. Checking, internal process, aur result timeline me thoda gap hota hai.",
      "Ye gap tumhare liye rest aur reset window hota hai. Isme backlogs ko clean karo, notes ko sort karo, aur next semester ka plan tayyar rakho.",
    ],
  },
];

const faqs = [
  {
    q: "Kya 25 March ko science ka first subject paper hota hai?",
    a: "Nahi, 25 March ko usually exam cycle start hota hai. Science papers uske baad aate hain.",
  },
  {
    q: "Practical date same timetable me hoti hai kya?",
    a: "Usually practical ka separate notice aata hai.",
  },
  {
    q: "Last paper ke baad next semester turant start ho jata hai?",
    a: "Nahi, result aur academic notice ke baad next phase aata hai.",
  },
];

const relatedPosts = [
  {
    title: "How to Prepare for B.Sc. 1st Semester",
    href: "/blog/how-to-prepare-for-bsc-1st-semester",
  },
  {
    title: "MDSU Result Kab Aayega 2026",
    href: "/blog/mdsu-result-date-2026",
  },
  {
    title: "MDSU BSc Practical Date 2026",
    href: "/blog/mdsu-bsc-practical-date-2026",
  },
];

function SectionCard({ id, title, children }) {
  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-7"
    >
      <h2 className="text-xl font-semibold text-white sm:text-2xl">{title}</h2>
      <div className="mt-4 space-y-4 text-sm leading-7 text-white/75 sm:text-base">
        {children}
      </div>
    </section>
  );
}

function SoftBadge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
      {children}
    </span>
  );
}

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "MDSU BSc 1st Semester Exam Date 2026",
    description:
      "Complete guide to MDSU B.Sc. 1st Semester 2026 exam start date, subject flow, practical update, and next steps.",
    author: {
      "@type": "Organization",
      name: "JSS Originals",
    },
    publisher: {
      "@type": "Organization",
      name: "JSS Originals",
    },
    datePublished: "2026-03-20",
    dateModified: "2026-03-20",
    mainEntityOfPage:
      "https://me.jitubanna.com/blog/mdsu-bsc-1st-semester-exam-date-2026",
  };

  return (
    <>
      <StructuredData />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main className="min-h-screen bg-[#050816] text-white">
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.22),transparent_30%),radial-gradient(circle_at_right,rgba(168,85,247,0.16),transparent_25%),linear-gradient(to_bottom,#060816_0%,#050816_60%,#04060f_100%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />

          <div className="relative mx-auto max-w-6xl px-4 py-5 sm:px-6 lg:px-8 lg:py-8">
            <div className="flex items-center justify-between gap-3">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-sm transition hover:bg-white/10 hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to blog
              </Link>

              <SoftBadge>
                <Sparkles className="mr-2 h-3.5 w-3.5 text-cyan-300" />
                Premium blog
              </SoftBadge>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <div className="flex flex-wrap gap-2">
                  <SoftBadge>Exam Update</SoftBadge>
                  <SoftBadge>Science Stream</SoftBadge>
                  <SoftBadge>UG Semester</SoftBadge>
                </div>

                <h1 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  MDSU B.Sc. 1st Semester Exam Date 2026
                </h1>

                <p className="mt-4 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
                  Full timetable ka clean, premium aur student-friendly breakdown.
                  Yahan se exam flow, theory sequence, practical update, aur last
                  paper ke baad ka scene sab samajh aa jayega.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/55">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    Updated 20 March 2026
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock3 className="h-4 w-4" />
                    6 min read
                  </span>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="#overview"
                    className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
                  >
                    Read overview
                  </a>
                  <a
                    href="#faq"
                    className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Jump to FAQ
                  </a>
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/5 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.4)] backdrop-blur-sm sm:p-5">
                <div className="rounded-[22px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                    Quick facts
                  </p>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {quickFacts.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.label}
                          className="rounded-2xl border border-white/10 bg-black/20 p-4"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10">
                              <Icon className="h-5 w-5 text-cyan-300" />
                            </div>
                            <div>
                              <p className="text-xs text-white/45">{item.label}</p>
                              <p className="text-sm font-semibold text-white">
                                {item.value}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.32fr]">
              <div className="space-y-6">
                <SectionCard id="overview" title="Overview">
                  <p>
                    MDSU B.Sc. 1st Semester exam ka timeline ek proper chain ki tarah
                    behave karta hai. Pehle common paper aata hai, phir science
                    subjects us sequence me aate hain jisse revision ka flow naturally
                    manage ho sake.
                  </p>
                  <p>
                    25 March ko exam cycle ka start samjho. Ye wo point hai jahan
                    student ka planner aur real life dono ek dusre ko stare karte
                    hain.
                  </p>
                </SectionCard>

                <SectionCard id="subject-flow" title="Subject-wise flow">
                  <p>
                    Science stream me common subject ke baad Maths, Physics, Chemistry,
                    Botany, Zoology ya stream-specific papers aate hain. Exact order
                    university ke timetable me define hota hai, aur wahi final truth
                    hota hai.
                  </p>
                  <p>
                    Is flow ka advantage ye hai ki tum apni revision ko blocks me tod
                    sakte ho. Ek subject ke baad next ka burst, aur beech me chhota
                    mental coffee break.
                  </p>
                </SectionCard>

                <SectionCard id="practical" title="Practical exam update">
                  <p>
                    Practical exam usually theory sheet ke bilkul side me parked nahi
                    hota. University practical ke liye separate notice ya college-level
                    schedule nikal sakti hai.
                  </p>
                  <p>
                    Isliye record book, lab file, viva basics, aur experiment
                    explanation ko pehle se lock karke rakho. Practical me surprise
                    kabhi kabhi sirf face pe aata hai, marks me nahi.
                  </p>
                </SectionCard>

                <SectionCard id="after-paper" title="After the last paper">
                  <p>
                    Final paper ke baad usually thoda quiet phase aata hai. Checking,
                    result processing, aur academic notices me gap ho sakta hai.
                    Matlab ek short breathing window.
                  </p>
                  <p>
                    Ye gap waste mat karo. Notes sort karo, weak topics list banao, aur
                    next semester ke liye prep engine warm rakho.
                  </p>
                </SectionCard>

                <section className="rounded-[28px] border border-cyan-400/20 bg-cyan-400/10 p-5 sm:p-7">
                  <div className="flex items-start gap-3">
                    <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Smart student takeaway
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-cyan-50/90 sm:text-base">
                        Exam start date ko sirf date mat samjho. Use revision
                        checkpoints, practical prep, aur time management ka anchor
                        bana do. Tabhi timetable dushman se dashboard banega.
                      </p>
                    </div>
                  </div>
                </section>

                <section
                  id="faq"
                  className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-7"
                >
                  <h2 className="text-xl font-semibold text-white sm:text-2xl">
                    Frequently asked questions
                  </h2>

                  <div className="mt-5 space-y-4">
                    {faqs.map((item) => (
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
                </section>
              </div>

              <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">
                <section className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                    In this article
                  </p>

                  <div className="mt-4 space-y-2 text-sm">
                    {[
                      ["overview", "Overview"],
                      ["subject-flow", "Subject-wise flow"],
                      ["practical", "Practical exam"],
                      ["after-paper", "After the last paper"],
                      ["faq", "FAQ"],
                    ].map(([id, label]) => (
                      <a
                        key={id}
                        href={`#${id}`}
                        className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white/80 transition hover:bg-white/10 hover:text-white"
                      >
                        <span>{label}</span>
                        <ChevronRight className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </section>

                <section className="rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                    Student tip
                  </p>
                  <div className="mt-4 space-y-3 text-sm leading-6 text-white/75">
                    <p className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                      <span>Daily short revision more useful than one giant panic session.</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                      <span>Practical file aur record book pehle ready rakho.</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                      <span>University notice ko last-minute scroll se mat chhodo.</span>
                    </p>
                  </div>
                </section>

                <section className="rounded-[28px] border border-amber-400/20 bg-amber-400/10 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-amber-100/70">
                    Heads up
                  </p>
                  <p className="mt-3 flex items-start gap-3 text-sm leading-6 text-amber-50/90">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-200" />
                    <span>
                      Practical aur exact subject timing ke liye official university
                      notice ya college timetable hamesha final source hota hai.
                    </span>
                  </p>
                </section>

                <section className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                    Related posts
                  </p>

                  <div className="mt-4 space-y-3">
                    {relatedPosts.map((post) => (
                      <Link
                        key={post.href}
                        href={post.href}
                        className="group block rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-white/20 hover:bg-white/10"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <h3 className="text-sm font-medium text-white/90 group-hover:text-white">
                            {post.title}
                          </h3>
                          <ArrowUpRight className="h-4 w-4 shrink-0 text-white/50 group-hover:text-white" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              </aside>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
