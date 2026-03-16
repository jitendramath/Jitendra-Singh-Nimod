// src/app/jss-originals/page.js
// Ultra-premium, SEO-optimized brand page for JSS Originals with jssoriginals.in domain focus

import Link from "next/link";
import Image from "next/image";
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
  BookOpen,
  ExternalLink,
  CheckCircle,
  Star
} from "lucide-react";

// Brand data for JSS Originals (can be moved to constants file later)
const brandData = {
  name: "JSS Originals",
  founded: "2025",
  founder: "Jitendra Singh Nimod",
  founderAliases: ["JS Nimod", "Jitu Nimod", "Jitubanna", "Jitu Banna"],
  location: {
    village: "Nimod",
    city: "Kuchaman City",
    state: "Rajasthan",
    country: "India"
  },
  education: {
    degree: "B.Sc Mathematics (PCM)",
    college: "Govt. Bangur PG College, Didwana"
  },
  description: "Digital development brand creating modern web applications, identity platforms, and developer tools.",
  emails: {
    personal: "jitu@jssoriginals.in",
    business: "contact@jssoriginals.in"
  },
  phone: "+919549626202",
  whatsapp: "https://wa.me/919549626202",
  social: {
    github: "https://github.com/jitendra-math",
    linkedin: "https://linkedin.com/in/jitendra-singh07",
    instagram: "https://instagram.com/jitendra.07_7",
    twitter: "https://x.com/jitendranimod",
    medium: "https://medium.com/@i.jitendra.singh0",
    devto: "https://dev.to/jitendrasingh",
    youtube: "https://youtube.com/@jitendranimod"
  },
  domains: {
    main: "https://jssoriginals.in",
    portfolio: "https://jitubanna.com",
    identity: "https://me.jitubanna.com",
    wiki: "https://wiki.jitubanna.com"
  }
};

export const metadata = {
  title: "JSS Originals – Digital Innovation by Jitendra Singh Nimod",
  description:
    "JSS Originals is a digital development brand founded by Jitendra Singh Nimod (JS Nimod), a Full Stack Developer from Rajasthan, India. We create modern web applications, digital identity platforms, and developer tools with a focus on performance and authenticity.",
  keywords: [
    "JSS Originals",
    "Jitendra Singh Nimod brand",
    "JS Nimod",
    "Jitu Nimod",
    "Jitubanna",
    "Web Development Rajasthan",
    "Digital Identity Platform",
    "Full Stack Developer India",
    "JSS Originals founder",
    "Jitendra Nimod projects",
    "Kuchaman City developer",
    "Rajasthan tech brand"
  ],
  alternates: { canonical: "https://jssoriginals.in" },
  openGraph: {
    title: "JSS Originals – Digital Innovation by Jitendra Singh Nimod",
    description:
      "Official website of JSS Originals, the digital development studio of Jitendra Singh Nimod. Creating authentic, performant, and meaningful digital experiences.",
    url: "https://jssoriginals.in",
    siteName: "JSS Originals",
    images: [{ url: "https://jssoriginals.in/og-image.jpg", width: 1200, height: 630, alt: "JSS Originals – Digital Brand" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JSS Originals – Digital Innovation",
    description: "Digital development brand by Jitendra Singh Nimod (JS Nimod).",
    creator: "@jitendranimod",
    images: ["https://jssoriginals.in/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function JSSOriginalsPage() {
  // JSON-LD for Organization (with Person founder)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://jssoriginals.in/#organization",
        name: brandData.name,
        url: "https://jssoriginals.in",
        logo: "https://jssoriginals.in/logo.png",
        foundingDate: brandData.founded,
        description: brandData.description,
        founder: {
          "@type": "Person",
          "@id": "https://jssoriginals.in/#person",
          name: brandData.founder,
          alternateName: brandData.founderAliases,
          jobTitle: "Full Stack Web Developer",
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: brandData.education.college
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: brandData.location.city,
            addressRegion: brandData.location.state,
            addressCountry: brandData.location.country
          },
          sameAs: [
            brandData.social.github,
            brandData.social.linkedin,
            brandData.social.instagram,
            brandData.social.twitter,
            brandData.social.medium,
            brandData.social.devto,
            brandData.social.youtube
          ]
        },
        sameAs: [
          brandData.social.github,
          brandData.social.linkedin,
          brandData.social.instagram,
          brandData.social.twitter
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://jssoriginals.in/#website",
        url: "https://jssoriginals.in",
        name: "JSS Originals – Digital Brand",
        publisher: { "@id": "https://jssoriginals.in/#organization" }
      }
    ]
  };

  const quickStats = [
    { label: "Founded", value: brandData.founded, icon: Clock },
    { label: "Founder", value: brandData.founder, icon: Users },
    { label: "Focus", value: "Web Development", icon: Code2 },
    { label: "Projects", value: "10+", icon: Layers },
    { label: "Mission", value: "Digital Identity", icon: Target },
    { label: "Origin", value: brandData.location.state, icon: Globe }
  ];

  const services = [
    {
      title: "Web Development",
      desc: "Modern, responsive websites and web applications built with Next.js, React, Node.js, and Tailwind CSS.",
      icon: Code2,
      color: "blue",
      features: ["Custom design", "Fast performance", "SEO optimized"]
    },
    {
      title: "Digital Identity",
      desc: "Personal brand websites, portfolio platforms, and identity hubs for professionals and creators.",
      icon: Palette,
      color: "purple",
      features: ["Alias integration", "Structured data", "Knowledge base"]
    },
    {
      title: "SEO Optimization",
      desc: "On‑page SEO, schema markup, and performance tuning to improve search rankings and visibility.",
      icon: Zap,
      color: "amber",
      features: ["Keyword strategy", "Technical SEO", "Rich snippets"]
    },
    {
      title: "Developer Tools",
      desc: "Custom utilities, open‑source projects, and components for the developer community.",
      icon: Cpu,
      color: "emerald",
      features: ["Reusable components", "Open source", "Documentation"]
    }
  ];

  const featuredProjects = [
    {
      name: "Jitendra Singh Nimod Identity Ecosystem",
      description: "Complete digital identity platform with multiple domains, aliases, and location pages.",
      tech: ["Next.js", "Tailwind", "Vercel"],
      links: [
        { label: "Main Site", url: brandData.domains.portfolio },
        { label: "Identity Archive", url: brandData.domains.identity },
        { label: "Wiki", url: brandData.domains.wiki }
      ]
    },
    {
      name: "Jitubanna Wiki",
      description: "Personal knowledge base and digital garden documenting skills, projects, and journey.",
      tech: ["Next.js", "MDX", "Tailwind"],
      links: [
        { label: "Live Wiki", url: brandData.domains.wiki },
        { label: "GitHub", url: brandData.social.github + "/jitubanna-wiki" }
      ]
    },
    {
      name: "Developer Utilities",
      description: "Open‑source tools like skill bars, project cards, and MDX components for developers.",
      tech: ["React", "TypeScript", "Tailwind"],
      links: [
        { label: "GitHub", url: brandData.social.github }
      ]
    }
  ];

  const testimonials = [
    {
      text: "JSS Originals built our complete digital identity ecosystem. Professional, timely, and excellent communication.",
      author: "Client from Jaipur",
      role: "Business Owner"
    },
    {
      text: "The wiki and identity platform are incredibly well-structured. Perfect for personal branding.",
      author: "Fellow Developer",
      role: "Tech Community"
    }
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
              <Sparkles className="w-4 h-4" />
              <span>Digital Innovation by {brandData.founder}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-zinc-800 leading-tight mb-4">
              {brandData.name}
            </h1>

            <p className="text-lg md:text-xl text-[#2563EB] font-medium mb-2">
              Authentic • Performant • Meaningful
            </p>

            <p className="text-base text-zinc-600 max-w-2xl mx-auto md:mx-0 leading-relaxed mb-6">
              <strong className="text-[#2563EB]">{brandData.name}</strong> is a digital development brand founded by{' '}
              <strong>{brandData.founder}</strong> (JS Nimod, Jitubanna), a Full Stack Developer from {brandData.location.state}, India. 
              We create modern web applications, digital identity platforms, and developer tools with a commitment to original, high‑quality work.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-6 py-3 bg-[#2563EB] text-white font-semibold rounded-full hover:bg-[#1d4ed8] hover:scale-105 transition-all shadow-md"
              >
                View Projects
              </a>
              <a
                href={brandData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 hover:scale-105 transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <Link
                href="#contact"
                className="px-6 py-3 bg-white border border-zinc-300 text-zinc-700 font-semibold rounded-full hover:border-[#2563EB] hover:text-[#2563EB] transition-all"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Brand Icon / Logo */}
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

      {/* ===== MISSION SECTION ===== */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-20">
        <div className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-3xl p-8 md:p-10 shadow-xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-6">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Authentic", desc: "Crafted from scratch, never copied. Every line of code is original.", icon: Sparkles },
              { title: "Performant", desc: "Fast, accessible, and reliable. 90+ Lighthouse scores guaranteed.", icon: Zap },
              { title: "Meaningful", desc: "Solving real problems for real people with thoughtful design.", icon: Heart }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex flex-col items-center">
                  <div className="p-3 bg-blue-50 rounded-full mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-zinc-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-8 text-center">
          What We Create
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
                <p className="text-sm text-zinc-600 mb-4">{service.desc}</p>
                <ul className="space-y-1">
                  {service.features.map((feature, j) => (
                    <li key={j} className="text-xs text-zinc-500 flex items-start gap-1">
                      <CheckCircle className="w-3 h-3 text-[#2563EB] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== FEATURED PROJECTS ===== */}
      <section id="projects" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-8 text-center">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredProjects.map((project, i) => (
            <div key={i} className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-2xl p-6 hover:bg-white hover:border-[#2563EB]/30 hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-zinc-800 mb-2">{project.name}</h3>
              <p className="text-sm text-zinc-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, j) => (
                  <span key={j} className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-md">{t}</span>
                ))}
              </div>
              <div className="space-y-2">
                {project.links.map((link, j) => (
                  <a key={j} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-sm text-blue-600 hover:text-blue-800 group">
                    <span>{link.label}</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FOUNDER SECTION ===== */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-20">
        <div className="bg-gradient-to-br from-[#2563EB]/5 to-purple-500/5 rounded-3xl p-8 md:p-10 border border-zinc-200">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src="/images/founder.jpg" // Replace with actual image
                  alt={brandData.founder}
                  width={192}
                  height={192}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-2">Founded by {brandData.founder}</h2>
              <p className="text-sm text-zinc-500 mb-4">Also known as {brandData.founderAliases.join(", ")}</p>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Jitendra is a Full Stack Developer and B.Sc Mathematics student from {brandData.location.village} village, near {brandData.location.city}, Rajasthan. 
                He combines mathematical logic with modern web development to create digital solutions that are both powerful and elegant.
              </p>
              <p className="text-zinc-600">
                From the villages of Rajasthan to the global web – JSS Originals is his vision to show that talent isn't tied to a city. It's about passion, consistency, and the will to build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-8 text-center">What People Say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-2xl p-6">
              <div className="flex items-center gap-1 text-[#2563EB] mb-3">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-zinc-600 mb-4 italic">"{t.text}"</p>
              <p className="font-semibold text-zinc-800">{t.author}</p>
              <p className="text-xs text-zinc-500">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-16">
        <div className="bg-gradient-to-br from-[#2563EB] to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Let's Build Something Together</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Have a project in mind? JSS Originals is ready to bring your ideas to life.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`mailto:${brandData.emails.business}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#2563EB] font-semibold rounded-full hover:bg-zinc-100 hover:scale-105 transition-all shadow-lg"
            >
              <Mail className="w-5 h-5" />
              {brandData.emails.business}
            </a>
            <a
              href={brandData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full hover:bg-white/30 hover:scale-105 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
          <p className="mt-4 text-white/60 text-sm">
            Personal: <a href={`mailto:${brandData.emails.personal}`} className="text-white hover:underline">{brandData.emails.personal}</a> | Phone: {brandData.phone}
          </p>
        </div>
      </section>

      {/* ===== BOTTOM SOCIAL ===== */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-6 pt-8">
        <a href={brandData.social.github} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#2563EB] transition">
          <Github className="w-6 h-6" />
        </a>
        <a href={brandData.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#2563EB] transition">
          <Linkedin className="w-6 h-6" />
        </a>
        <a href={brandData.social.instagram} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#2563EB] transition">
          <Instagram className="w-6 h-6" />
        </a>
        <a href={brandData.social.twitter} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#2563EB] transition">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a href={brandData.social.medium} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#2563EB] transition">
          <BookOpen className="w-6 h-6" />
        </a>
        <a href={brandData.social.devto} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#2563EB] transition">
          <Code2 className="w-6 h-6" />
        </a>
      </div>

      {/* ===== FOOTER NOTE ===== */}
      <div className="relative z-10 text-center text-xs text-zinc-400 mt-16">
        <Heart className="w-3 h-3 inline text-rose-400" /> {brandData.name} – Digital by {brandData.founder}
      </div>
    </main>
  );
}
