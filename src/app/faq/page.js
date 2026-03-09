// src/app/faq/page.js
// Premium FAQ page with SEO schema and mobile‑first design

import Link from "next/link";
import {
  HelpCircle,
  ChevronDown,
  Phone,
  Mail,
  MessageCircle,
  Github,
  Linkedin,
  Instagram,
  Heart,
  Code2,
  Globe,
  MapPin,
  DollarSign,
  Clock,
  Users,
  Award,
  Sparkles,
  Shield,
  Zap,
  Smartphone,
  Briefcase,
  GraduationCap,
  ExternalLink,
} from "lucide-react";

export const metadata = {
  title: "Frequently Asked Questions – Jitendra Singh Nimod",
  description:
    "Get answers to common questions about web development services, pricing, locations, and more. Jitendra Singh Nimod (JS Nimod) explains everything you need to know.",
  keywords: [
    "Jitendra Singh Nimod FAQ",
    "JS Nimod questions",
    "web developer FAQ Rajasthan",
    "website cost Kuchaman City",
    "freelance developer questions",
    "web design pricing India",
  ],
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ – Jitendra Singh Nimod",
    description:
      "Everything you need to know about working with a full‑stack developer from Rajasthan.",
    images: [{ url: "/images/og/faq-og.jpg", width: 1200, height: 630 }],
  },
};

// FAQ data with categories and expanded answers (includes higher prices)
const faqCategories = [
  {
    category: "General Questions",
    icon: HelpCircle,
    questions: [
      {
        q: "Who is Jitendra Singh Nimod?",
        a: "Jitendra Singh Nimod (also known as <strong>JS Nimod</strong>, <strong>Jitu Nimod</strong>, and <strong>Jitubanna</strong>) is a Full‑Stack Web Developer and B.Sc Mathematics student from <strong>Nimod village</strong> near Kuchaman City, Rajasthan. He builds modern websites, web apps, and digital identity platforms with a focus on performance and SEO.",
      },
      {
        q: "What does JSS Originals stand for?",
        a: "JSS Originals is my personal brand under which I create digital projects, tools, and identity websites. It represents original, high‑quality work rooted in creativity and technical excellence.",
      },
      {
        q: "Are you available for freelance or contract work?",
        a: "Absolutely. I'm open to freelance projects, long‑term contracts, and collaborations. Whether you need a one‑page site or a complex web application, let's talk.",
      },
    ],
  },
  {
    category: "Services & Pricing",
    icon: DollarSign,
    questions: [
      {
        q: "What services do you offer?",
        a: "I offer <strong>website development</strong> (business sites, portfolios, e‑commerce), <strong>SEO optimization</strong>, <strong>web applications</strong> (with databases, authentication), <strong>personal brand websites</strong>, and ongoing <strong>maintenance & support</strong>. Every project is custom‑built to your needs.",
      },
      {
        q: "How much does a website cost?",
        a: "Pricing depends on complexity. A professional business website starts at <strong>₹20,000</strong>. E‑commerce or advanced web applications are custom‑quoted. I also offer affordable packages for students and local businesses in Rajasthan. You pay for quality, performance, and long‑term value.",
      },
      {
        q: "Why are your prices higher than some freelancers?",
        a: "I don't just build websites – I build <strong>digital assets</strong>. Each site is coded from scratch (no page builders), optimized for speed (90+ Lighthouse), and structured with SEO best practices. You get a site that ranks, converts, and lasts. Premium work deserves premium pricing.",
      },
      {
        q: "Do you provide website maintenance?",
        a: "Yes. I offer maintenance packages including regular updates, security patches, backups, and content changes. Every new project includes <strong>1 month of free support</strong> after launch.",
      },
    ],
  },
  {
    category: "Location & Availability",
    icon: MapPin,
    questions: [
      {
        q: "Do you work with clients in Kuchaman City, Didwana, and Nimod?",
        a: "Absolutely! I'm based in <strong>Nimod village</strong> and frequently visit <strong>Kuchaman City</strong> and <strong>Didwana</strong>. In‑person meetings are available. I understand the local market and culture, which helps me create better solutions for local businesses.",
      },
      {
        q: "Can you work with clients outside India?",
        a: "Yes, I work with clients worldwide. Through online tools like WhatsApp, Zoom, and email, distance is never a barrier. I've collaborated with clients across Asia, Europe, and North America.",
      },
      {
        q: "What is your typical response time?",
        a: "I usually respond within <strong>24 hours</strong> (often sooner). For urgent matters, WhatsApp is the fastest way to reach me.",
      },
    ],
  },
  {
    category: "Technical Questions",
    icon: Code2,
    questions: [
      {
        q: "What technologies do you use?",
        a: "I specialise in modern web technologies: <strong>Next.js</strong>, <strong>React</strong>, <strong>Node.js</strong>, <strong>Tailwind CSS</strong>, <strong>MongoDB</strong>, and <strong>PostgreSQL</strong>. For SEO, I implement schema markup, meta optimisation, and performance tuning to ensure high Google rankings.",
      },
      {
        q: "Can you handle complex web applications?",
        a: "Yes. I build custom web apps with user authentication, databases, admin panels, real‑time features, and API integrations. My mathematics background gives me a strong foundation for logical, scalable systems.",
      },
      {
        q: "Will my website be mobile‑friendly?",
        a: "Every site I build is <strong>100% responsive</strong> – it looks perfect on phones, tablets, and desktops. Mobile‑first design is my standard approach.",
      },
    ],
  },
  {
    category: "Business & Collaboration",
    icon: Briefcase,
    questions: [
      {
        q: "How does the process work?",
        a: "1. We discuss your project (free consultation). 2. I provide a detailed proposal with timeline and cost. 3. After a 50% advance, development begins. 4. You review iterations and provide feedback. 5. Final delivery and launch. 6. Post‑launch support.",
      },
      {
        q: "What payment methods do you accept?",
        a: "I accept bank transfers, UPI, PayPal, and other digital methods. A 50% advance is required to start, with the remaining 50% upon completion.",
      },
      {
        q: "Do you offer discounts for students or local businesses?",
        a: "Yes – I believe in supporting the local community. Students and small businesses in Rajasthan can contact me for special pricing. Let's talk about your budget.",
      },
    ],
  },
  {
    category: "SEO & Performance",
    icon: Zap,
    questions: [
      {
        q: "Will my website rank on Google?",
        a: "I build SEO‑friendly websites from the ground up: clean code, fast loading, proper meta tags, and schema markup. I also offer dedicated SEO packages to boost your rankings further.",
      },
      {
        q: "Can you improve SEO for my existing site?",
        a: "Absolutely. I provide SEO audits and optimisation services for existing websites – on‑page SEO, technical fixes, and content recommendations.",
      },
      {
        q: "How fast will my website load?",
        a: "I aim for <strong>90+ Lighthouse scores</strong>. I optimise images, minimise code, use modern formats, and leverage caching. Speed is a priority.",
      },
    ],
  },
];

// Helper component for accordion (client component)
// Note: Since this page is a server component, we need a separate client component for the accordion.
// We'll create a simple FAQAccordion component inside this file with "use client".
// But to keep it clean, we'll define a client component in the same file.

export default function FAQPage() {
  // FAQ Schema (JSON-LD)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCategories.flatMap((cat) =>
      cat.questions.map((q) => ({
        "@type": "Question",
        name: q.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: q.a.replace(/<[^>]*>/g, ""), // strip HTML for schema
        },
      }))
    ),
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-zinc-50 to-white text-zinc-700 font-sans selection:bg-[#2563EB]/30 selection:text-white relative overflow-hidden pb-20">
      
      {/* JSON-LD script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Premium Background Blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#2563EB]/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(#2563EB_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.015] pointer-events-none"></div>

      {/* ===== HERO SECTION ===== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 md:pt-28 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2563EB]/10 rounded-full text-[#2563EB] text-xs font-medium uppercase tracking-wider mb-6">
          <HelpCircle className="w-4 h-4" />
          <span>Got Questions? We've Got Answers</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-800 mb-4">
          Frequently Asked Questions
        </h1>

        <p className="text-lg text-zinc-600 max-w-3xl mx-auto mb-8">
          Everything you need to know about working with me – from services and pricing to timelines and support.
        </p>

        {/* Quick stats / trust badges */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span className="px-4 py-2 bg-white/70 backdrop-blur-sm border border-zinc-200 rounded-full">
            ⚡ 100+ Projects
          </span>
          <span className="px-4 py-2 bg-white/70 backdrop-blur-sm border border-zinc-200 rounded-full">
            🌍 Worldwide Clients
          </span>
          <span className="px-4 py-2 bg-white/70 backdrop-blur-sm border border-zinc-200 rounded-full">
            📍 Based in Rajasthan
          </span>
          <span className="px-4 py-2 bg-gradient-to-r from-[#2563EB]/10 to-purple-500/10 border border-[#2563EB]/20 rounded-full text-[#2563EB]">
            ⭐ 5-Star Service
          </span>
        </div>
      </section>

      {/* ===== FAQ ACCORDION ===== */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 mb-20">
        <FAQAccordion categories={faqCategories} />
      </section>

      {/* ===== STILL HAVE QUESTIONS? ===== */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-20">
        <div className="bg-gradient-to-br from-[#2563EB] to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            I'm here to help. Reach out directly and I'll get back to you within 24 hours.
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
        <Heart className="w-3 h-3 inline text-rose-400" /> Transparent answers, premium service
      </div>
    </main>
  );
}

// Client component for accordion (interactivity)
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

function FAQAccordion({ categories }) {
  const [openIndex, setOpenIndex] = useState(null); // format: "categoryIndex-questionIndex"

  const toggle = (catIdx, qIdx) => {
    const key = `${catIdx}-${qIdx}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <div className="space-y-8">
      {categories.map((category, catIdx) => (
        <div key={catIdx} className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-3xl p-6 md:p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-[#2563EB]/10 rounded-lg">
              <category.icon className="w-5 h-5 text-[#2563EB]" />
            </div>
            <h2 className="text-2xl font-bold text-zinc-800">{category.category}</h2>
          </div>

          <div className="space-y-4">
            {category.questions.map((q, qIdx) => {
              const key = `${catIdx}-${qIdx}`;
              const isOpen = openIndex === key;
              return (
                <div
                  key={qIdx}
                  className="border border-zinc-200 rounded-xl overflow-hidden bg-white hover:border-[#2563EB]/30 transition"
                >
                  <button
                    onClick={() => toggle(catIdx, qIdx)}
                    className="w-full flex items-center justify-between p-5 text-left font-medium text-zinc-800 hover:bg-zinc-50 transition"
                  >
                    <span className="pr-8">{q.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#2563EB] transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div
                      className="p-5 pt-0 text-zinc-600 border-t border-zinc-100 prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{ __html: q.a }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
