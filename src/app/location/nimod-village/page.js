// src/app/location/nimod-village/page.js
// Ultra-premium location page for Nimod Village with strong local SEO and emotional connection

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
  Shield,
  Home,
  Coffee,
  TreePine,
  Church,
  School,
  User,
  Users2,
  Flower2,
  Sun,
  Mountain,
  Wheat,
  Leaf
} from "lucide-react";

export const metadata = {
  title: "Jitendra Singh Nimod – Proudly from Nimod Village, Rajasthan",
  description:
    "Jitendra Singh Nimod (JS Nimod) belongs to Nimod village in Rajasthan, India. Full Stack Developer and B.Sc Mathematics student with roots in rural Rajasthan.",
  keywords: [
    "Jitendra Singh Nimod Nimod village",
    "JS Nimod Nimod",
    "Nimod village developer",
    "Developer from Nimod Rajasthan",
    "Jitu Nimod Nimod",
    "Nimod village Kuchaman",
    "Rajasthan village developer",
    "Nimod Rajasthan IT professional",
    "Nimod village web developer"
  ],
  alternates: { canonical: "/location/nimod-village" },
  openGraph: {
    title: "Jitendra Singh Nimod – From Nimod Village, Rajasthan",
    description:
      "Full Stack Web Developer and B.Sc Mathematics student originally from Nimod village, Rajasthan. Building modern web applications from his roots.",
    images: [{ url: "/images/og/nimod-village-og.jpg", width: 1200, height: 630 }],
  },
};

export default function NimodVillagePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: identity.name,
    alternateName: identity.alternateNames,
    jobTitle: identity.profession,
    description: `Full Stack Web Developer and B.Sc Mathematics student originally from ${identity.location.village} village in Rajasthan, India.`,
    address: {
      "@type": "PostalAddress",
      addressLocality: identity.location.village,
      addressRegion: identity.location.state,
      addressCountry: identity.location.country
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: identity.education.college
    },
    sameAs: identity.sameAs,
    worksFor: {
      "@type": "Organization",
      name: identity.brand
    },
    birthPlace: {
      "@type": "Place",
      name: identity.location.village,
      address: {
        "@type": "PostalAddress",
        addressLocality: identity.location.village,
        addressRegion: identity.location.state,
        addressCountry: identity.location.country
      }
    }
  };

  const quickStats = [
    { label: "Village", value: identity.location.village, icon: Home },
    { label: "District", value: "Didwana Kuchaman", icon: MapPin },
    { label: "State", value: identity.location.state, icon: Sun },
    { label: "Profession", value: "Full Stack Developer", icon: Code2 },
    { label: "Education", value: "B.Sc Mathematics", icon: GraduationCap },
    { label: "Brand", value: identity.brand, icon: Sparkles }
  ];

  const villagePride = [
    { icon: TreePine, text: "Surrounded by the beautiful landscape of rural Rajasthan" },
    { icon: Users2, text: "Strong community bonds and traditional values" },
    { icon: School, text: "Education at N.B.N. Secondary School, Nimod" },
    { icon: Wheat, text: "Agricultural heritage of the region" },
    { icon: Mountain, text: "Near the historic Kuchaman Fort" },
    { icon: Leaf, text: "Peaceful village life that inspires creativity" }
  ];

  const reasons = [
    { icon: Home, text: `Proudly from ${identity.location.village} village` },
    { icon: Users, text: "Deep understanding of rural community needs" },
    { icon: MessageCircle, text: "Support in Hindi, English, and Rajasthani" },
    { icon: Clock, text: "Same-timezone collaboration from rural India" },
    { icon: Award, text: "Inspiring the next generation of village developers" },
    { icon: Heart, text: "Building technology with roots and authenticity" }
  ];

  const services = [
    {
      title: "Website Development",
      desc: `Modern websites for businesses and individuals in ${identity.location.village} and surrounding villages.`,
      icon: Code2,
      price: "Starting ₹15,000"
    },
    {
      title: "SEO Optimization",
      desc: "Help local businesses rank on Google and reach customers.",
      icon: TrendingUp,
      price: "Starting ₹8,000"
    },
    {
      title: "Digital Identity",
      desc: "Personal brand websites for professionals from rural areas.",
      icon: Globe,
      price: "Custom quote"
    }
  ];

  const testimonials = [
    {
      name: "Ramesh Ji",
      location: identity.location.village,
      text: `Jitendra is from our village. He built a website for my shop and did an excellent job. Proud of him!`,
      rating: 5
    },
    {
      name: "Priya",
      location: identity.location.village,
      text: "He's a role model for young people in Nimod. His work is professional and inspiring.",
      rating: 5
    },
    {
      name: "School Teacher",
      location: "N.B.N. Secondary School",
      text: "Jitendra was a bright student. Now he's building websites for people across Rajasthan.",
      rating: 5
    }
  ];

  const nearbyVillages = [
    "Kuchaman City",
    "Didwana",
    "Makrana",
    "Nawa City",
    "Degana",
    "Merta City",
    "Borawar",
    "Roled"
  ];

  const villageLandmarks = [
    { name: "N.B.N. Secondary School", icon: School },
    { name: "Nimod Temple", icon: Church },
    { name: "Village Panchayat", icon: Building2 },
    { name: "Community Ground", icon: Users2 }
  ];

  const famousPersonalities = [
    { name: "Jitendra Singh Nimod", role: "Full Stack Developer" }
  ];

  return (
    <>
      <StructuredData />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-gradient-to-br from-white via-zinc-50 to-white text-zinc-700 font-sans selection:bg-[#2563EB]/30 selection:text-white relative overflow-hidden pb-20">

        {/* Premium Background Blobs - Warm earth tones for village feel */}
        <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="fixed bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="fixed inset-0 bg-[radial-gradient(#2563EB_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.015] pointer-events-none"></div>

        {/* ===== HERO SECTION ===== */}
        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 md:pt-28 pb-16">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            
            {/* Left Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full text-amber-600 text-xs font-medium uppercase tracking-wider mb-6">
                <Home className="w-4 h-4" />
                <span>Proudly from {identity.location.village} Village</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-800 leading-tight mb-4">
                {identity.name}
              </h1>

              <p className="text-lg md:text-xl text-[#2563EB] font-medium mb-2">
                Full Stack Developer from {identity.location.village}
              </p>

              <p className="text-base text-zinc-600 max-w-2xl mx-auto md:mx-0 leading-relaxed mb-6">
                I belong to <strong className="text-[#2563EB]">{identity.location.village} village</strong> in Rajasthan, India. 
                Also known as <strong>JS Nimod, Jitu Nimod, and Jitubanna</strong>. 
                I'm building modern web applications while staying connected to my roots.
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

            {/* Image with village touch */}
            <div className="relative w-64 h-64 md:w-72 md:h-72 shrink-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 via-[#2563EB] to-emerald-500 rounded-2xl blur-xl opacity-50"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src={identity.images.main}
                  alt={identity.name}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-amber-500 text-white text-xs px-3 py-1.5 rounded-full shadow-lg">
                ⭐ From Nimod
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

        {/* ===== VILLAGE PRIDE SECTION ===== */}
        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-20">
          <div className="bg-gradient-to-br from-amber-500/5 via-[#2563EB]/5 to-emerald-500/5 rounded-3xl p-8 md:p-12 border border-zinc-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-4">
                  Pride of {identity.location.village}
                </h2>
                <div className="space-y-4 text-zinc-600">
                  <p>
                    I was born and raised in <strong className="text-[#2563EB]">{identity.location.village} village</strong>, 
                    a small but vibrant community in the Didwana Kuchaman district of Rajasthan. This village has shaped 
                    who I am today – my values, my work ethic, and my dreams.
                  </p>
                  <p>
                    I studied at <strong>N.B.N. Secondary School</strong> in Nimod, where I completed my early education. 
                    The support of my teachers and the village community gave me the foundation to pursue my passion for 
                    technology and mathematics.
                  </p>
                  <p>
                    Today, I'm building a name for myself as a Full Stack Developer, but I carry my village with me 
                    everywhere. I want to show that talent isn't limited to cities – it can bloom in the heart of rural India.
                  </p>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <TreePine className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-semibold text-zinc-800">About Nimod Village</h3>
                </div>
                <p className="text-sm text-zinc-600 mb-3">
                  Nimod is a village near Kuchaman City in the Didwana district of Rajasthan. Known for its 
                  agricultural landscape and close-knit community, it represents the heart of rural Rajasthan.
                </p>
                <div className="space-y-2">
                  {villageLandmarks.map((place) => {
                    const Icon = place.icon;
                    return (
                      <div key={place.name} className="flex items-center gap-2 text-sm text-zinc-600">
                        <Icon className="w-3.5 h-3.5 text-[#2563EB]" />
                        {place.name}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== WHAT MAKES NIMOD SPECIAL ===== */}
        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-6 text-center">
            What Makes {identity.location.village} Special
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {villagePride.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white/70 backdrop-blur-sm border border-zinc-200 rounded-xl p-4 flex items-start gap-3 hover:bg-white hover:border-[#2563EB]/30 transition">
                  <Icon className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                  <p className="text-sm text-zinc-600">{item.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===== WHY HIRE A DEVELOPER FROM NIMOD ===== */}
        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-6 text-center">
            Why Hire a Developer from Nimod Village?
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

        {/* ===== SERVICES FROM NIMOD ===== */}
        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-6 text-center">
            Web Development Services from Nimod
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

        {/* ===== NEARBY VILLAGES ===== */}
        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-20">
          <div className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-3xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Compass className="w-5 h-5 text-[#2563EB]" />
              <h3 className="text-xl font-bold text-zinc-800">Nearby Villages & Towns</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {nearbyVillages.map((place) => (
                <span key={place} className="px-3 py-1.5 bg-zinc-100 text-zinc-600 text-sm rounded-full">
                  {place}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ===== VILLAGE LANDMARKS ===== */}
        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {villageLandmarks.map((place) => {
              const Icon = place.icon;
              return (
                <div key={place.name} className="bg-white/70 backdrop-blur-sm border border-zinc-200 rounded-xl p-4 text-center hover:border-[#2563EB]/30 transition">
                  <Icon className="w-5 h-5 text-[#2563EB] mx-auto mb-2" />
                  <p className="text-sm font-medium text-zinc-700">{place.name}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===== FAMOUS PERSONALITIES ===== */}
        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-20">
          <div className="bg-gradient-to-br from-amber-500/10 to-[#2563EB]/10 rounded-3xl p-6 md:p-8 text-center">
            <h3 className="text-xl font-bold text-zinc-800 mb-2">Famous Personalities from Nimod</h3>
            <p className="text-zinc-600 mb-4">Including the next generation of developers ✨</p>
            <div className="flex flex-wrap justify-center gap-3">
              {famousPersonalities.map((person) => (
                <div key={person.name} className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-zinc-200">
                  <span className="font-medium text-zinc-800">{person.name}</span>
                  <span className="text-xs text-zinc-500 ml-2">{person.role}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TESTIMONIALS ===== */}
        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-6 text-center">
            What People from Nimod Say
          </h2>
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
                  <Home className="w-4 h-4 text-zinc-400" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== ENHANCED SEO CONTENT ===== */}
        <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-20">
          <div className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-3xl p-8 md:p-10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-6">
              About {identity.name} from {identity.location.village} Village
            </h2>
            
            <div className="prose prose-zinc max-w-none space-y-4">
              <p className="text-zinc-600 leading-relaxed">
                <strong className="text-[#2563EB]">{identity.name}</strong> belongs to{' '}
                <strong>{identity.location.village} village</strong> in Rajasthan, India. 
                He is also known as <strong>{identity.alternateNames.join(", ")}</strong>.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                Many people search online for{' '}
                <span className="px-2 py-1 bg-zinc-100 rounded text-sm">Nimod village Jitendra Nimod</span>,{' '}
                <span className="px-2 py-1 bg-zinc-100 rounded text-sm">JS Nimod Nimod village</span>, and{' '}
                <span className="px-2 py-1 bg-zinc-100 rounded text-sm">developer from Nimod Rajasthan</span>. 
                These searches refer to the same individual — {identity.name}, a proud son of this village.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                Currently based in {identity.location.city}, Rajasthan, he is pursuing {identity.education.degree} at{' '}
                {identity.education.college} and working as a Full Stack Web Developer.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                From {identity.location.village} village, {identity.shortName} is building modern web applications, 
                digital tools and scalable online platforms under the brand <strong>{identity.brand}</strong>.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                He represents a new generation of developers emerging from rural and small-town regions of Rajasthan, 
                building their presence on the internet through technology and web development.
              </p>

              <p className="text-zinc-600 leading-relaxed font-medium border-l-4 border-[#2563EB] pl-4">
                This official website confirms that {identity.name} is originally from {identity.location.village} village 
                in Rajasthan, India – a fact that fills him with pride every single day.
              </p>
            </div>
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-16">
          <div className="bg-gradient-to-br from-[#2563EB] to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Proudly from Nimod Village</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Let's work together. I bring the heart of rural Rajasthan to every project.
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
          <Heart className="w-3 h-3 inline text-rose-400" /> Proudly from {identity.location.village} village, Rajasthan 🇮🇳
        </div>
      </main>
    </>
  );
}
