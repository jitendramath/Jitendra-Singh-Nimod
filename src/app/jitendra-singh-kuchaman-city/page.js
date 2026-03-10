// src/app/jitendra-singh-kuchaman-city/page.js
// Ultra-premium local identity page for Kuchaman City with creative storytelling

import Link from "next/link";
import Image from "next/image";
import identity from "../../data/identity";
import StructuredData from "../../components/StructuredData";
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
  Shield,
  Building2,
  GraduationCap,
  Landmark,
  Mountain,
  School,
  Coffee,
  Navigation
} from "lucide-react";

export const metadata = {
  title: "Jitendra Singh from Kuchaman City | JS Nimod | Full Stack Developer",
  description:
    "Jitendra Singh from Kuchaman City, Rajasthan – also known as Jitendra Singh Nimod, JS Nimod, and Jitu Developer. Full Stack Web Developer building modern digital platforms.",
  keywords: [
    "Jitendra Singh Kuchaman City",
    "JS Nimod Kuchaman",
    "Jitu Developer Kuchaman",
    "Jitendra Singh Nimod",
    "Web Developer Kuchaman City",
    "Full Stack Developer Rajasthan",
    "Kuchaman City IT services"
  ],
  alternates: { canonical: "/jitendra-singh-kuchaman-city" },
  openGraph: {
    title: "Jitendra Singh from Kuchaman City | JS Nimod",
    description:
      "Full Stack Web Developer based in Kuchaman City, Rajasthan. Building modern websites and web applications.",
    images: [{ url: "/images/og/jitendra-singh-kuchaman-og.jpg", width: 1200, height: 630 }],
  },
};

export default function JitendraSinghKuchamanPage() {
  // Local business schema for Kuchaman City
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Jitendra Singh Nimod - Web Developer Kuchaman City",
    description: "Full Stack Web Developer serving Kuchaman City and surrounding areas in Rajasthan.",
    url: "https://me.jitubanna.com/jitendra-singh-kuchaman-city",
    telephone: "+919549626202",
    email: "contact@jitubanna.com",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kuchaman City",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
      postalCode: "341508"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 27.15,
      longitude: 74.85
    },
    areaServed: ["Kuchaman City", "Nimod", "Didwana", "Makrana", "Nawa City"]
  };

  const quickStats = [
    { label: "Location", value: "Kuchaman City", icon: MapPin },
    { label: "Tehsil", value: "Kuchaman City", icon: Building2 },
    { label: "District", value: "Didwana", icon: Navigation },
    { label: "Education", value: "B.Sc Mathematics", icon: GraduationCap },
    { label: "Profession", value: "Full Stack Dev", icon: Code2 },
    { label: "Village", value: "Nimod", icon: Mountain }
  ];

  const localLandmarks = [
    { name: "Kuchaman Fort", icon: Landmark, desc: "Historic hill fort, known for its architecture" },
    { name: "Mehrangarh Institute", icon: School, desc: "Educational hub of the region" },
    { name: "N.B.N. Secondary School", icon: School, desc: "Where I studied in Nimod" },
    { name: "Kota Career School", icon: School, desc: "My Class 12 (PCM) alma mater" }
  ];

  const services = [
    {
      title: "Website Development",
      desc: "Modern, responsive websites for businesses in Kuchaman City.",
      icon: Code2,
      price: "Starting ₹20,000",
      features: ["Mobile-first design", "Fast loading", "Custom domain"]
    },
    {
      title: "SEO Optimization",
      desc: "Rank higher on Google for local searches in Kuchaman City.",
      icon: TrendingUp,
      price: "Starting ₹10,000",
      features: ["Local SEO focus", "Keyword research", "Google Maps listing"]
    },
    {
      title: "Web Applications",
      desc: "Custom web apps with databases, authentication, and admin panels.",
      icon: Rocket,
      price: "Custom quote",
      features: ["Node.js backend", "User accounts", "Real-time features"]
    }
  ];

  const testimonials = [
    {
      name: "Rakesh Sharma",
      location: "Makrana",
      text: "Jitendra built a website for my hardware store. Now customers find me easily on Google. Great work!",
      rating: 5
    },
    {
      name: "Anil Choudhary",
      location: "Kuchaman City",
      text: "He designed my portfolio site. It looks beautiful and works perfectly on mobile. Highly recommend!",
      rating: 5
    },
    {
      name: "Ravi Kumar",
      location: "Mithri",
      text: "Jitendra is from our village. Professional, affordable, and delivers on time.",
      rating: 5
    }
  ];

  const faqs = [
    {
      q: "Are you available for in-person meetings in Kuchaman City?",
      a: "Yes! I'm based in Nimod village and frequently visit Kuchaman City. We can meet at a local cafe or your office."
    },
    {
      q: "How much does a website cost for a small business in Kuchaman?",
      a: "Basic business websites start at ₹20,000. E‑commerce or advanced sites are custom quoted."
    },
    {
      q: "How long does it take to build a website?",
      a: "A typical website takes 1-2 weeks from start to launch, depending on complexity."
    }
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
                <MapPin className="w-4 h-4" />
                <span>Local Identity – Kuchaman City</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-800 leading-tight mb-4">
                Jitendra Singh{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-purple-600">
                  Kuchaman City
                </span>
              </h1>

              <p className="text-lg md:text-xl text-[#2563EB] font-medium mb-2">
                Also known as Jitendra Singh Nimod, JS Nimod, Jitu Developer
              </p>

              <p className="text-base text-zinc-600 max-w-2xl mx-auto md:mx-0 leading-relaxed mb-6">
                <strong className="text-[#2563EB]">Jitendra Singh from Kuchaman City</strong> is a Full Stack Web Developer 
                from Rajasthan. He is known online as <strong>Jitendra Singh Nimod, JS Nimod, and Jitu Developer</strong>. 
                Based near Kuchaman City, he builds modern websites and digital platforms for clients locally and globally.
              </p>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Link
                  href="/developer-profile"
                  className="px-6 py-3 bg-[#2563EB] text-white font-semibold rounded-full hover:bg-[#1d4ed8] hover:scale-105 transition-all shadow-md"
                >
                  Developer Profile
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-white border border-zinc-300 text-zinc-700 font-semibold rounded-full hover:border-[#2563EB] hover:text-[#2563EB] transition-all"
                >
                  Contact
                </Link>
                <a
                  href="https://wa.me/919549626202"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 hover:scale-105 transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative w-64 h-64 md:w-72 md:h-72 shrink-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2563EB] via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src="/images/main/jitendra-singh-nimod.jpg"
                  alt="Jitendra Singh Kuchaman City"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-[#2563EB] text-white text-xs px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                Kuchaman City
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

        {/* ===== LOCAL LANDMARKS SECTION ===== */}
        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-8 text-center">
            <span className="text-[#2563EB]">Kuchaman City</span> – My Connection
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {localLandmarks.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-2xl p-6 text-center hover:bg-white hover:border-[#2563EB]/30 hover:shadow-xl transition-all">
                  <div className="p-3 bg-[#2563EB]/10 rounded-full w-fit mx-auto mb-4">
                    <Icon className="w-6 h-6 text-[#2563EB]" />
                  </div>
                  <h3 className="font-bold text-zinc-800 mb-2">{item.name}</h3>
                  <p className="text-sm text-zinc-500">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===== ABOUT KUCHAMAN CITY ===== */}
        <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-20">
          <div className="bg-gradient-to-br from-[#2563EB]/5 to-purple-500/5 rounded-3xl p-8 md:p-10 border border-zinc-200">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="p-4 bg-white rounded-2xl shadow-xl">
                  <Landmark className="w-16 h-16 text-[#2563EB]" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-4">About Kuchaman City</h2>
                <p className="text-zinc-600 leading-relaxed mb-3">
                  Kuchaman City is a historic municipality in the Didwana district of Rajasthan, known for its majestic 
                  <strong className="text-[#2563EB]"> Kuchaman Fort</strong> and as a growing educational and commercial hub. 
                  It's the closest town to <strong>Nimod village</strong>, where I was born and raised.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  I studied at <strong>Kota Career School</strong> in Kuchaman City for my Class 12 (PCM) and remain deeply 
                  connected to this region. Many of my clients come from here, and I understand the local market intimately.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SERVICES ===== */}
        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-8 text-center">
            Web Development Services in Kuchaman City
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div key={i} className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-2xl p-6 hover:bg-white hover:border-[#2563EB]/30 hover:shadow-xl transition-all group">
                  <div className="p-2 bg-[#2563EB]/10 rounded-lg w-fit mb-4 group-hover:bg-[#2563EB] group-hover:text-white transition">
                    <Icon className="w-5 h-5 text-[#2563EB] group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-800 mb-2">{service.title}</h3>
                  <p className="text-sm text-zinc-600 mb-4">{service.desc}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs">
                        <CheckCircle className="w-3 h-3 text-[#2563EB] shrink-0 mt-0.5" />
                        <span className="text-zinc-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#2563EB]">{service.price}</span>
                    <a
                      href="https://wa.me/919549626202"
                      target="_blank"
                      className="text-xs text-zinc-500 hover:text-[#2563EB] flex items-center gap-1"
                    >
                      Inquire <ChevronRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===== WHY LOCAL ===== */}
        <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-20">
          <div className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-3xl p-8 md:p-10">
            <h2 className="text-2xl font-bold text-zinc-800 mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#2563EB]" />
              Why Hire a Local Developer from Kuchaman City?
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "I understand the local language and culture",
                "In-person meetings available in Kuchaman City",
                "Faster response with same-timezone collaboration",
                "Affordable rates compared to metro cities",
                "Knowledge of local business needs",
                "Long‑term support and relationship"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                  <span className="text-sm text-zinc-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TESTIMONIALS ===== */}
        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-8 text-center">What Kuchaman City Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-2xl p-6 hover:shadow-lg transition">
                <div className="flex items-center gap-1 text-[#2563EB] mb-3">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-zinc-600 mb-4 italic">"{t.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-zinc-800">{t.name}</p>
                    <p className="text-xs text-zinc-500">{t.location}</p>
                  </div>
                  <MapPin className="w-4 h-4 text-zinc-400" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 mb-20">
          <h2 className="text-2xl font-bold text-zinc-800 mb-6 text-center">Frequently Asked Questions</h2>
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
              About Jitendra Singh from Kuchaman City
            </h2>
            <div className="prose prose-zinc max-w-none space-y-4">
              <p className="text-zinc-600 leading-relaxed">
                <strong className="text-[#2563EB]">Jitendra Singh from Kuchaman City</strong> Rajasthan is known as{' '}
                <strong>Jitendra Singh Nimod</strong> and <strong>JS Nimod</strong> across the internet. He is a Full Stack Web
                Developer building modern websites and web applications.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                He is associated with <strong>Nimod village</strong> and the <strong>Didwana Kuchaman region</strong> and focuses on
                modern web development, portfolio sites and SEO optimized digital identity platforms.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                This page connects search keywords like{' '}
                <span className="px-2 py-1 bg-zinc-100 rounded text-sm">Jitendra Singh Kuchaman City</span>,{' '}
                <span className="px-2 py-1 bg-zinc-100 rounded text-sm">JS Developer Rajasthan</span>, and{' '}
                <span className="px-2 py-1 bg-zinc-100 rounded text-sm">Jitendra Singh Nimod</span> so search engines can
                identify the same person across different searches.
              </p>
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-16">
          <div className="bg-gradient-to-br from-[#2563EB] to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Need a Website in Kuchaman City?</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Let's discuss your project. I'm available for in‑person meetings in Kuchaman City.
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
          <Heart className="w-3 h-3 inline text-rose-400" /> Jitendra Singh – Proudly from Kuchaman City, Rajasthan
        </div>
      </main>
    </>
  );
}
