// src/app/location/didwana-rajasthan/page.js
// Ultra-premium location page for Didwana with strong local SEO

import Link from "next/link";
import Image from "next/image";
import identity from "../../../data/identity";
import StructuredData from "../../../components/StructuredData";
import {
  MapPin,
  GraduationCap,
  Briefcase,
  Sparkles,
  Code2,
  Globe,
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
  Building2,
  Users,
  Star,
  Heart,
  BookOpen,
  Clock,
  Calendar,
  Compass,
  Target,
  TrendingUp,
  Shield
} from "lucide-react";

export const metadata = {
  title: "Jitendra Singh Nimod – Full Stack Developer from Didwana, Rajasthan",
  description:
    "Jitendra Singh Nimod (JS Nimod) is a Full Stack Web Developer and B.Sc Mathematics student connected to Didwana, Rajasthan. Hire a local developer for modern websites and SEO.",
  keywords: [
    "Jitendra Singh Nimod Didwana",
    "JS Nimod Didwana",
    "Web Developer Didwana Rajasthan",
    "Full Stack Developer Didwana",
    "Jitu Nimod Didwana",
    "Didwana Kuchaman Developer",
    "Website Designer Didwana",
    "Local Developer Didwana",
    "Govt Bangur College Didwana student"
  ],
  alternates: { canonical: "/location/didwana-rajasthan" },
  openGraph: {
    title: "Jitendra Singh Nimod – Developer from Didwana, Rajasthan",
    description:
      "Full Stack Web Developer and B.Sc Mathematics student at Govt. Bangur College, Didwana. Building modern websites and web applications.",
    images: [{ url: "/images/og/didwana-location-og.jpg", width: 1200, height: 630 }],
  },
};

export default function DidwanaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: identity.name,
    alternateName: identity.alternateNames,
    jobTitle: identity.profession,
    description: `Full Stack Web Developer and B.Sc Mathematics student at ${identity.education.college} in Didwana, Rajasthan.`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Didwana",
      addressRegion: "Rajasthan",
      addressCountry: "India"
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: identity.education.college
    },
    sameAs: identity.sameAs,
    worksFor: {
      "@type": "Organization",
      name: identity.brand
    }
  };

  const quickStats = [
    { label: "Location", value: "Didwana, Rajasthan", icon: MapPin },
    { label: "College", value: "Govt. Bangur College", icon: GraduationCap },
    { label: "Education", value: "B.Sc Mathematics (PCM)", icon: BookOpen },
    { label: "Profession", value: "Full Stack Developer", icon: Code2 },
    { label: "Brand", value: identity.brand, icon: Sparkles },
    { label: "Experience", value: "2+ Years", icon: Clock }
  ];

  const reasons = [
    { icon: MapPin, text: "Local developer based near Didwana (Nimod village)" },
    { icon: GraduationCap, text: `Currently studying at ${identity.education.college}` },
    { icon: Users, text: "Understanding of local business needs and culture" },
    { icon: MessageCircle, text: "Support in Hindi, English, and Rajasthani" },
    { icon: Clock, text: "Fast response and same-timezone collaboration" },
    { icon: Award, text: "Affordable rates for Didwana region" }
  ];

  const services = [
    {
      title: "Website Development",
      desc: "Modern, responsive websites for businesses in Didwana and surrounding areas.",
      icon: Code2,
      price: "Starting ₹15,000"
    },
    {
      title: "SEO Optimization",
      desc: "Rank higher on Google for local searches in Didwana and Rajasthan.",
      icon: TrendingUp,
      price: "Starting ₹8,000"
    },
    {
      title: "Web Applications",
      desc: "Custom web apps with databases, authentication, and admin panels.",
      icon: Globe,
      price: "Custom quote"
    }
  ];

  const testimonials = [
    {
      name: "Ramesh Choudhary",
      location: "Didwana",
      text: "Jitendra built a website for my shop in Didwana. Now customers find me online easily. Great work!",
      rating: 5
    },
    {
      name: "Priya Meena",
      location: "Didwana Kuchaman",
      text: "He's a talented developer and a fellow student at Govt. Bangur College. Highly recommend!",
      rating: 5
    }
  ];

  const nearbyPlaces = [
    "Kuchaman City",
    "Nimod Village",
    "Makrana",
    "Nawa City",
    "Degana",
    "Merta City"
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
                <span>Based in Didwana, Rajasthan</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-800 leading-tight mb-4">
                {identity.name}
              </h1>

              <p className="text-lg md:text-xl text-[#2563EB] font-medium mb-2">
                Full Stack Developer from Didwana
              </p>

              <p className="text-base text-zinc-600 max-w-2xl mx-auto md:mx-0 leading-relaxed mb-6">
                I'm a <strong className="text-[#2563EB]">Full Stack Web Developer</strong> and{' '}
                <strong>B.Sc Mathematics student at {identity.education.college}</strong> in Didwana, Rajasthan. 
                Also known as <strong>JS Nimod, Jitu Nimod, and Jitubanna</strong>.
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
                  src={identity.images.main}
                  alt={identity.name}
                  fill
                  priority
                  className="object-cover"
                />
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

        {/* ===== ABOUT DIDWANA CONNECTION ===== */}
        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-20">
          <div className="bg-gradient-to-br from-[#2563EB]/5 via-purple-500/5 to-transparent rounded-3xl p-8 md:p-12 border border-zinc-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-4">
                  My Didwana Connection
                </h2>
                <div className="space-y-4 text-zinc-600">
                  <p>
                    I'm currently pursuing my <strong className="text-[#2563EB]">B.Sc Mathematics (PCM)</strong> at{' '}
                    <strong>Govt. Bangur PG College, Didwana</strong>. This institution has been instrumental in 
                    shaping my analytical thinking and problem-solving skills.
                  </p>
                  <p>
                    While studying in Didwana, I've been building my career as a Full Stack Developer, 
                    creating websites and web applications for clients locally and beyond.
                  </p>
                  <p>
                    Many people search online for <strong>"developer in Didwana"</strong> or{' '}
                    <strong>"JS Nimod Didwana"</strong> – and this page confirms that I'm the developer 
                    they're looking for.
                  </p>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-5 h-5 text-[#2563EB]" />
                  <h3 className="font-semibold text-zinc-800">Govt. Bangur PG College</h3>
                </div>
                <p className="text-sm text-zinc-600 mb-2">
                  Established in 1959, one of the premier institutions in the Didwana region.
                </p>
                <p className="text-sm text-zinc-500 flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> Didwana, Rajasthan – 341508
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== WHY HIRE ME IN DIDWANA ===== */}
        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-6 text-center">
            Why Hire a Local Developer in Didwana?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <div key={i} className="bg-white/70 backdrop-blur-sm border border-zinc-200 rounded-xl p-4 flex items-start gap-3 hover:bg-white hover:border-[#2563EB]/30 transition">
                  <Icon className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                  <p className="text-sm text-zinc-600">{reason.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===== SERVICES IN DIDWANA ===== */}
        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-6 text-center">
            Web Development Services in Didwana
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

        {/* ===== NEARBY AREAS ===== */}
        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-20">
          <div className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-3xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Compass className="w-5 h-5 text-[#2563EB]" />
              <h3 className="text-xl font-bold text-zinc-800">Serving Didwana & Nearby Areas</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {nearbyPlaces.map((place) => (
                <span key={place} className="px-3 py-1.5 bg-zinc-100 text-zinc-600 text-sm rounded-full">
                  {place}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TESTIMONIALS ===== */}
        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-6 text-center">
            What Didwana Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
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

        {/* ===== ENHANCED SEO CONTENT ===== */}
        <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-20">
          <div className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-3xl p-8 md:p-10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-6">
              About {identity.name} from Didwana Rajasthan
            </h2>
            
            <div className="prose prose-zinc max-w-none space-y-4">
              <p className="text-zinc-600 leading-relaxed">
                <strong className="text-[#2563EB]">{identity.name}</strong> is a Full Stack Web Developer and 
                B.Sc Mathematics student connected with the Didwana region in Rajasthan, India. He is also known as{' '}
                <strong>{identity.alternateNames.join(", ")}</strong>.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                He is currently studying at <strong>{identity.education.college}</strong>, located in Didwana, 
                Rajasthan. Alongside his academic pursuits, he builds modern web applications, digital platforms, 
                and SEO-optimized websites for clients locally and globally.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                Many people search online for{' '}
                <span className="px-2 py-1 bg-zinc-100 rounded text-sm">Jitendra Nimod Didwana</span>,{' '}
                <span className="px-2 py-1 bg-zinc-100 rounded text-sm">JS Nimod Didwana Rajasthan</span>, and{' '}
                <span className="px-2 py-1 bg-zinc-100 rounded text-sm">developer from Didwana Rajasthan</span>. 
                These searches refer to {identity.name}, a developer and student from this region.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                Originally from {identity.location.village} village and based in {identity.location.city}, 
                he is building his identity as a Full Stack Developer and digital creator from Rajasthan.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                Under his brand <strong>{identity.brand}</strong>, he works on web development projects, 
                scalable platforms, and SEO-optimized websites.
              </p>
            </div>
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-16">
          <div className="bg-gradient-to-br from-[#2563EB] to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Need a Website in Didwana?</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Let's discuss your project. I'm available for in-person meetings in Didwana and nearby areas.
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
          <Heart className="w-3 h-3 inline text-rose-400" /> Proudly from Didwana, Rajasthan
        </div>
      </main>
    </>
  );
}
