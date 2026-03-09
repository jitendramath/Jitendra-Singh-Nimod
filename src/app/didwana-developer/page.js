// src/app/didwana-developer/page.js
// Ultra-premium light theme local developer page for Didwana Kuchaman

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Code2,
  Globe,
  Rocket,
  Zap,
  Users,
  Star,
  Award,
  CheckCircle,
  ChevronRight,
  Phone,
  Mail,
  MessageCircle,
  Github,
  Linkedin,
  Instagram,
  ExternalLink,
  Briefcase,
  Clock,
  Calendar,
  Heart,
  Sparkles,
  Compass,
  Target,
  TrendingUp,
  Shield
} from "lucide-react";

export const metadata = {
  title: "Web Developer in Didwana Kuchaman | Jitendra Singh Nimod | JS Developer",
  description:
    "Jitendra Singh Nimod (JS Nimod) is a Full Stack Web Developer in Didwana Kuchaman, Rajasthan. Hire a local developer for modern websites, SEO, and web applications.",
  keywords: [
    "Web Developer Didwana Kuchaman",
    "JS Developer Didwana",
    "Jitendra Singh Nimod Didwana",
    "Website Developer Kuchaman City",
    "Freelance Developer Didwana",
    "Local Developer Rajasthan",
    "Jitu Developer Kuchaman",
    "Best Developer in Didwana"
  ],
  alternates: { canonical: "/didwana-developer" },
  openGraph: {
    title: "Web Developer in Didwana Kuchaman | Jitendra Singh Nimod",
    description:
      "Hire a professional Full Stack Web Developer from Didwana Kuchaman, Rajasthan. Modern websites, SEO optimization, and web applications.",
    images: [{ url: "/images/og/didwana-developer-og.jpg", width: 1200, height: 630 }],
  },
};

export default function DidwanaDeveloperPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Jitendra Singh Nimod - Web Developer",
    description: "Full Stack Web Developer serving Didwana Kuchaman and surrounding areas in Rajasthan.",
    url: "https://me.jitubanna.com/didwana-developer",
    telephone: "+919549626202",
    email: "contact@jitubanna.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Didwana Kuchaman",
      addressRegion: "Rajasthan",
      addressCountry: "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 27.4,
      longitude: 74.5
    },
    sameAs: [
      "https://github.com/jitendra-math",
      "https://linkedin.com/in/jitendra-singh07",
      "https://instagram.com/jitendra.07_7"
    ]
  };

  const services = [
    {
      title: "Website Development",
      desc: "Modern, responsive websites built with Next.js, React, and Tailwind CSS. Perfect for businesses, portfolios, and startups.",
      icon: Code2,
      price: "Starting ₹15,000",
      features: ["Mobile-first design", "Fast loading", "Custom domain setup"]
    },
    {
      title: "SEO Optimization",
      desc: "Rank higher on Google. On-page SEO, meta tags, schema markup, and performance optimization for local businesses.",
      icon: TrendingUp,
      price: "Starting ₹8,000",
      features: ["Local SEO focus", "Keyword research", "Google Search Console setup"]
    },
    {
      title: "Web Applications",
      desc: "Custom web apps with user authentication, databases, and admin panels. Built scalable for your growing needs.",
      icon: Rocket,
      price: "Custom quote",
      features: ["Node.js backend", "MongoDB/PostgreSQL", "Real-time features"]
    }
  ];

  const benefits = [
    { icon: MapPin, text: "Local developer from Didwana Kuchaman" },
    { icon: Clock, text: "Fast response & same-day replies" },
    { icon: Award, text: "5+ projects delivered in Rajasthan" },
    { icon: Heart, text: "Personalized attention & support" }
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      location: "Kuchaman City",
      text: "Jitendra built my business website from scratch. He understood exactly what I needed and delivered quickly. Highly recommended!",
      rating: 5
    },
    {
      name: "Priya Mehta",
      location: "Didwana",
      text: "Professional, affordable, and talented. My portfolio site looks amazing and ranks on Google now.",
      rating: 5
    }
  ];

  const faqs = [
    {
      q: "Are you based in Didwana?",
      a: "Yes, I'm from Nimod village near Didwana Kuchaman and serve clients across the region."
    },
    {
      q: "How much do you charge for a website?",
      a: "Basic websites start at ₹15,000, but every project is custom. Let's discuss your needs."
    },
    {
      q: "Can we meet in person?",
      a: "Absolutely. I'm available for in-person meetings in Didwana, Kuchaman City, and nearby areas."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-zinc-50 to-white text-zinc-700 font-sans selection:bg-[#2563EB]/30 selection:text-white relative overflow-hidden pb-20">

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
              <MapPin className="w-4 h-4" />
              <span>Local Developer – Didwana Kuchaman</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-800 leading-tight mb-4">
              Web Developer in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-purple-600">
                Didwana Kuchaman
              </span>
            </h1>

            <p className="text-lg text-zinc-600 max-w-2xl mx-auto md:mx-0 leading-relaxed mb-6">
              I'm <strong className="text-[#2563EB]">Jitendra Singh Nimod</strong> (JS Nimod), a Full Stack Web Developer 
              from Nimod village, serving Didwana, Kuchaman City, and all of Rajasthan. 
              I build modern websites, portfolios, and SEO-optimized web platforms.
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
                src="/images/main/jitendra-singh-nimod.jpg"
                alt="Jitendra Singh Nimod – Web Developer Didwana Kuchaman"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== BENEFITS BAR ===== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {benefits.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-zinc-200 text-center hover:border-[#2563EB]/30 hover:shadow-md transition">
                <Icon className="w-6 h-6 text-[#2563EB] mx-auto mb-2" />
                <p className="text-xs text-zinc-500">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-4">
            Services I Offer in Didwana Kuchaman
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Professional web development services tailored for local businesses and individuals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div key={i} className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-2xl p-8 hover:bg-white hover:border-[#2563EB]/30 hover:shadow-xl transition-all group">
                <div className="p-3 bg-[#2563EB]/10 rounded-xl w-fit mb-6 group-hover:bg-[#2563EB] group-hover:text-white transition">
                  <Icon className="w-6 h-6 text-[#2563EB] group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-zinc-800 mb-2">{service.title}</h3>
                <p className="text-sm text-zinc-600 mb-4">{service.desc}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                      <span className="text-zinc-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#2563EB]">{service.price}</span>
                  <a
                    href="https://wa.me/919549626202"
                    target="_blank"
                    className="text-sm text-zinc-500 hover:text-[#2563EB] flex items-center gap-1"
                  >
                    Inquire <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== WHY HIRE LOCAL ===== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-20">
        <div className="bg-gradient-to-br from-[#2563EB]/5 via-purple-500/5 to-transparent rounded-3xl p-8 md:p-12 border border-zinc-200">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-4">
                Why Hire a Local Developer in Didwana Kuchaman?
              </h2>
              <ul className="space-y-4">
                {[
                  "I understand the local market and language",
                  "Face-to-face meetings possible in Didwana or Kuchaman City",
                  "Support in Hindi, English, and Rajasthani",
                  "Knowledge of local business needs and culture",
                  "Faster communication and same-timezone collaboration"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                    <span className="text-zinc-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-[#2563EB]" />
                <h3 className="font-semibold text-zinc-800">Service Area</h3>
              </div>
              <div className="space-y-2">
                {["Didwana", "Kuchaman City", "Nimod", "Makrana", "Nawa City", "Degana", "Merta City"].map((place) => (
                  <div key={place} className="flex items-center gap-2 text-sm text-zinc-600">
                    <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full"></div>
                    {place}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-8 text-center">What Local Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-2xl p-6 hover:shadow-lg transition">
              <div className="flex items-center gap-1 text-[#2563EB] mb-3">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-zinc-600 mb-4 italic">"{testimonial.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-zinc-800">{testimonial.name}</p>
                  <p className="text-xs text-zinc-500">{testimonial.location}</p>
                </div>
                <MapPin className="w-4 h-4 text-zinc-400" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PROJECTS SHOWCASE ===== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-4 text-center">Recent Work</h2>
        <p className="text-zinc-600 text-center max-w-2xl mx-auto mb-8">
          Websites and applications built for clients in and around Didwana Kuchaman.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: "JSS Originals – Identity Suite", type: "Personal Brand", year: "2026" },
            { name: "Local Business Website", type: "E-commerce", year: "2025" },
            { name: "Portfolio for Photographer", type: "Portfolio", year: "2025" }
          ].map((project, i) => (
            <div key={i} className="bg-white/70 backdrop-blur-sm border border-zinc-200 rounded-xl p-4 text-center hover:bg-white hover:border-[#2563EB]/30 transition">
              <Briefcase className="w-8 h-8 text-[#2563EB] mx-auto mb-2" />
              <h3 className="font-semibold text-zinc-800">{project.name}</h3>
              <p className="text-xs text-zinc-500">{project.type} · {project.year}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-xl p-5 hover:bg-white hover:border-[#2563EB]/30 transition">
              <h3 className="font-semibold text-zinc-800 mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#2563EB] rounded-full"></span>
                {faq.q}
              </h3>
              <p className="text-sm text-zinc-600 pl-4">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== LONG SEO CONTENT ===== */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-20">
        <div className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-3xl p-8 md:p-10 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-6">
            About the Developer in Didwana Kuchaman
          </h2>
          
          <div className="prose prose-zinc max-w-none space-y-4">
            <p className="text-zinc-600 leading-relaxed">
              If you're searching for a <strong className="text-[#2563EB]">web developer in Didwana Kuchaman, Rajasthan</strong>, 
              you've found him. <strong>Jitendra Singh Nimod</strong> (also known as <strong>JS Nimod</strong> and <strong>Jitu Developer</strong>) 
              is a Full Stack Web Developer from Nimod village, serving clients across the Didwana Kuchaman region.
            </p>

            <p className="text-zinc-600 leading-relaxed">
              He builds modern websites, personal brand platforms, and SEO-optimized digital identity websites using 
              technologies like Next.js, React, and Node.js. Whether you're a local business, a startup, or an individual 
              needing a portfolio, Jitendra offers professional, affordable, and timely web development services.
            </p>

            <p className="text-zinc-600 leading-relaxed">
              This page connects search terms like <span className="px-2 py-1 bg-zinc-100 rounded text-sm">developer in Didwana Kuchaman</span>,{' '}
              <span className="px-2 py-1 bg-zinc-100 rounded text-sm">JS Developer Rajasthan</span>, and{' '}
              <span className="px-2 py-1 bg-zinc-100 rounded text-sm">Jitendra Singh Nimod</span> so that search engines 
              can identify the correct developer identity for this region.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-16">
        <div className="bg-gradient-to-br from-[#2563EB] to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need a Website in Didwana Kuchaman?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Let's discuss your project. I'm available for in-person meetings in Didwana, Kuchaman City, and nearby areas.
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
        <Heart className="w-3 h-3 inline text-rose-400" /> Serving Didwana, Kuchaman City & all of Rajasthan
      </div>
    </main>
  );
}
