// src/components/HomePageContent.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
  BookOpen,
  Globe,
  TerminalSquare,
  Rss,
  ArrowRight,
  Info,
  Code2,
  ExternalLink,
  User,
  MapPin,
  Hash,
  Newspaper,
  Link2,
  Sparkles,
  Fingerprint,
  AtSign,
  School,
  Briefcase,
  Home,
  ImageIcon,
  FileText,
  Users,
  ChevronRight,
  Menu,
  X,
  ChevronUp,
  Mail,
  GraduationCap,
  Award,
  Building2,
  Star,
  Heart,
  Rocket,
  Compass,
  Activity,
  Zap,
} from "lucide-react";
import identity from "../data/identity";

// ---------- Link Groups (unchanged) ----------
const corePages = [
  { name: "About", href: "/about", icon: User, desc: "Learn my story" },
  { name: "Contact", href: "/contact", icon: Mail, desc: "Get in touch" },
  { name: "Developer Profile", href: "/developer-profile", icon: Code2, desc: "Tech stack & work" },
  { name: "Student Profile", href: "/student-profile", icon: School, desc: "Academic journey" },
  { name: "Photo Gallery", href: "/photos-jitendra-singh-nimod", icon: ImageIcon, desc: "Moments & memories" },
  { name: "Official Website", href: "/official-website-jitendra-singh-nimod", icon: Globe, desc: "Main identity" },
  { name: "Who is Jitendra?", href: "/who-is-jitendra-singh-nimod", icon: Fingerprint, desc: "Complete intro" },
];

const aliasPages = [
  { name: "Jitendra Singh", href: "/jitendra-singh", icon: User },
  { name: "Jitendra Rajput", href: "/jitendra-rajput", icon: Users },
  { name: "Jitendra Singh Dev", href: "/jitendra-singh-dev", icon: Code2 },
  { name: "Jitendra Singh Developer", href: "/jitendra-singh-developer", icon: Code2 },
  { name: "Jitendra Singh Rajput", href: "/jitendra-singh-rajput", icon: Users },
  { name: "Jitendra Singh Shekhawat", href: "/jitendra-singh-shekhawat", icon: Users },
  { name: "Jitendra Singh Shekhawat Rajput", href: "/jitendra-singh-shekhawat-rajput", icon: Users },
  { name: "Jitu Banna", href: "/jitu-banna", icon: Hash },
  { name: "Jitu Banna Developer", href: "/jitu-banna-developer", icon: Code2 },
  { name: "Jitu Developer", href: "/jitu-developer", icon: Code2 },
  { name: "Jitu Singh", href: "/jitu-singh", icon: User },
  { name: "JS Developer", href: "/js-developer", icon: Code2 },
  { name: "JS Shekhawat", href: "/js-shekhawat", icon: Users },
  { name: "Rajput Nimod", href: "/rajput-nimod", icon: MapPin },
  { name: "Rajputo Ka Nimod", href: "/rajputo-ka-nimod", icon: MapPin },
  { name: "Nimod Rajasthan", href: "/nimod-rajasthan", icon: MapPin },
  { name: "Shekhawat Nimod", href: "/shekhawat-nimod", icon: MapPin },
];

const identityCluster = [
  { name: "Jitendra Nimod", href: "/identity/jitendra-nimod", icon: Fingerprint },
  { name: "Jitendra Singh", href: "/identity/jitendra-singh", icon: Fingerprint },
  { name: "Jitendra Singh Nimod", href: "/identity/jitendra-singh-nimod", icon: Fingerprint },
  { name: "Jitu Nimod", href: "/identity/jitu-nimod", icon: Fingerprint },
  { name: "JS Nimod", href: "/identity/js-nimod", icon: Fingerprint },
  { name: "Nimod Jitu", href: "/identity/nimod-jitu", icon: Fingerprint },
  { name: "Nimod JS", href: "/identity/nimod-js", icon: Fingerprint },
];

const locationPages = [
  { name: "Kuchaman City", href: "/location/kuchaman-city", icon: MapPin },
  { name: "Nimod Village", href: "/location/nimod-village", icon: MapPin },
  { name: "Didwana Rajasthan", href: "/location/didwana-rajasthan", icon: MapPin },
  { name: "Jitendra Singh Kuchaman City", href: "/jitendra-singh-kuchaman-city", icon: MapPin },
  { name: "Jitendra Singh Didwana", href: "/jitendra-singh-didwana", icon: MapPin },
  { name: "Kuchaman Web Developer", href: "/kuchaman-web-developer", icon: Code2 },
  { name: "Didwana Developer", href: "/didwana-developer", icon: Code2 },
];

const brandPages = [
  { name: "JSS Originals", href: "/jss-originals", icon: Sparkles },
  { name: "JSS Rajput", href: "/jss-rajput", icon: Users },
];

const blogPosts = [
  { name: "Blog Home", href: "/blog", icon: Newspaper },
  { name: "Who is Jitendra Nimod?", href: "/blog/who-is-jitendra-nimod", icon: FileText },
  { name: "My Journey as a Developer", href: "/blog/my-journey-as-developer", icon: FileText },
  { name: "Full Stack Developer Rajasthan", href: "/blog/full-stack-developer-rajasthan", icon: FileText },
  { name: "Best Friend", href: "/blog/best-friend-of-jitendra-singh-nimod", icon: Users },
  { name: "Why Personal Websites Matter", href: "/blog/why-personal-websites-still-matter-for-developers-in-the-ai-era", icon: FileText },
];

const specialPages = [
  { name: "All Names & Usernames", href: "/all-names-and-usernames-of-jitendra-singh-nimod", icon: AtSign },
  { name: "Complete Digital Identity", href: "/complete-digital-identity-of-jitendra-singh-nimod", icon: Link2 },
  { name: "Jitubanna Identity", href: "/jitubanna-identity", icon: Fingerprint },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/jitendra-math", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/jitendra-singh07", icon: Linkedin },
  { name: "X / Twitter", href: "https://x.com/jitendranimod", icon: Twitter },
  { name: "YouTube", href: "https://youtube.com/@jitendranimod", icon: Youtube },
  { name: "Instagram", href: "https://instagram.com/jitendra.07_7", icon: Instagram },
  { name: "Medium", href: "https://medium.com/@i.jitendra.singh0", icon: BookOpen },
  { name: "Dev.to", href: "https://dev.to/jitendrasingh", icon: TerminalSquare },
  { name: "Hashnode", href: "https://jitendrasinghnimod.hashnode.dev", icon: Code2 },
  { name: "About.me", href: "https://about.me/jitendrasinghnimod", icon: Info },
  { name: "Reddit", href: "https://www.reddit.com/user/jitendranimod", icon: Globe },
  { name: "Product Hunt", href: "https://www.producthunt.com/@jitendra_nimod", icon: ExternalLink },
  { name: "Linktree", href: "https://linktr.ee/jitendranimod", icon: Globe },
  { name: "RSS Feed", href: "/rss.xml", icon: Rss, internal: true },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const scaleOnHover = { scale: 1.02, transition: { duration: 0.2 } };

export default function HomePageContent() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });

  // Parallax effect for hero image
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 md:pt-28 md:pb-20">
      {/* Animated background particle effect (optional – could use a library, but we'll keep it simple) */}
      
      {/* Notice Banner with animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="glass-card bg-white/80 backdrop-blur-xl border border-white/90 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-full">
              <Info className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-sm sm:text-base text-zinc-700">
              <span className="text-zinc-500 font-medium">Identity Archive</span> –{" "}
              <strong>Jitendra Singh Nimod (JS Nimod)</strong>. Work in progress. Full version launching soon.
            </p>
          </div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://jitubanna.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-full hover:shadow-lg transition-all"
          >
            Primary Site
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </motion.div>

      {/* Hero Section with parallax */}
      <motion.div
        ref={heroRef}
        variants={staggerContainer}
        initial="hidden"
        animate={isHeroInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
      >
        {/* Large intro card */}
        <motion.div
          variants={fadeInUp}
          whileHover={scaleOnHover}
          className="md:col-span-2 flex flex-col md:flex-row items-center gap-6 p-8 bg-white/70 backdrop-blur-md border border-white/80 rounded-2xl shadow-premium hover:shadow-strong transition-all duration-300"
        >
          <motion.div style={{ y, opacity }} className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-white shadow-xl shrink-0">
            <Image
              src={identity.images?.main || "/placeholder.jpg"}
              alt="Jitendra Singh Nimod"
              fill
              className="object-cover"
            />
          </motion.div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Full Stack Developer</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-2">
              Jitendra Singh Nimod
            </h1>
            <p className="text-zinc-600 leading-relaxed">
              Also known as <span className="font-medium text-zinc-800">JS Nimod, Jitu Banna, Jitu Nimod</span>. 
              Building modern web experiences from Rajasthan, India.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <IconPill icon={MapPin} label="Kuchaman City" href="/location/kuchaman-city" />
              <IconPill icon={GraduationCap} label="B.Sc Mathematics" href="/student-profile" />
              <IconPill icon={Briefcase} label="JSS Originals" href="/jss-originals" />
            </div>
          </div>
        </motion.div>

        {/* Quick links / stats */}
        <motion.div
          variants={fadeInUp}
          whileHover={scaleOnHover}
          className="flex flex-col justify-between p-8 bg-white/70 backdrop-blur-md border border-white/80 rounded-2xl shadow-premium hover:shadow-strong transition-all duration-300"
        >
          <div className="flex items-center gap-2 mb-4">
            <Rocket className="w-5 h-5 text-purple-500" />
            <h3 className="font-semibold text-zinc-800">Quick Actions</h3>
          </div>
          <div className="space-y-3">
            <Link href="/about" className="flex items-center justify-between p-3 bg-white/80 rounded-xl hover:bg-blue-50 transition group">
              <span className="text-zinc-700">📖 Read Biography</span>
              <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-blue-600 group-hover:translate-x-1 transition" />
            </Link>
            <Link href="/contact" className="flex items-center justify-between p-3 bg-white/80 rounded-xl hover:bg-blue-50 transition group">
              <span className="text-zinc-700">📬 Get in Touch</span>
              <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-blue-600 group-hover:translate-x-1 transition" />
            </Link>
            <Link href="/developer-profile" className="flex items-center justify-between p-3 bg-white/80 rounded-xl hover:bg-blue-50 transition group">
              <span className="text-zinc-700">💻 Developer Profile</span>
              <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-blue-600 group-hover:translate-x-1 transition" />
            </Link>
          </div>
          <div className="mt-4 pt-4 border-t border-zinc-200">
            <p className="text-sm text-zinc-500">📍 Based in Rajasthan, India</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Rest of the sections with scroll-triggered animations */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-16"
      >
        {/* Core Identity */}
        <Section title="Core Identity" icon={Star} color="amber">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {corePages.map((link) => (
              <motion.div key={link.href} variants={fadeInUp} whileHover={{ scale: 1.02 }}>
                <Link
                  href={link.href}
                  className="group flex items-start gap-3 p-4 bg-white/80 border border-zinc-200/80 rounded-xl hover:bg-white hover:border-blue-200 hover:shadow-md transition-all"
                >
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600 group-hover:bg-blue-100 transition">
                    <link.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="font-medium text-zinc-800 group-hover:text-blue-700">{link.name}</span>
                    {link.desc && <p className="text-xs text-zinc-500 mt-1">{link.desc}</p>}
                  </div>
                  <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-blue-600 group-hover:translate-x-1 transition flex-shrink-0 mt-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Name & Alias Pages */}
        <Section title="Name & Alias Pages" icon={Hash} color="indigo">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {aliasPages.map((link) => (
              <motion.div key={link.href} variants={fadeInUp} whileHover={{ scale: 1.02 }}>
                <Link
                  href={link.href}
                  className="flex flex-col items-center text-center p-3 bg-white/70 border border-zinc-200/70 rounded-xl hover:bg-white hover:border-blue-200 hover:shadow-sm transition-all group"
                >
                  <link.icon className="w-5 h-5 text-zinc-600 group-hover:text-blue-600 mb-2" />
                  <span className="text-xs font-medium text-zinc-700 group-hover:text-zinc-900">{link.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Identity Cluster + Location */}
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div variants={fadeInUp} className="md:col-span-2 p-6 bg-white/70 backdrop-blur-md border border-white/80 rounded-2xl shadow-premium hover:shadow-strong transition-all">
            <div className="flex items-center gap-2 mb-4">
              <Fingerprint className="w-5 h-5 text-purple-500" />
              <h3 className="font-semibold text-zinc-800">Identity Cluster (/identity/*)</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {identityCluster.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 p-2 bg-white/80 rounded-lg hover:bg-blue-50 transition group"
                >
                  <link.icon className="w-4 h-4 text-zinc-500 group-hover:text-blue-600" />
                  <span className="text-sm text-zinc-700 group-hover:text-zinc-900">{link.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="p-6 bg-white/70 backdrop-blur-md border border-white/80 rounded-2xl shadow-premium hover:shadow-strong transition-all">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-emerald-500" />
              <h3 className="font-semibold text-zinc-800">Location Pages</h3>
            </div>
            <div className="space-y-2">
              {locationPages.slice(0, 5).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 p-2 bg-white/80 rounded-lg hover:bg-blue-50 transition group"
                >
                  <link.icon className="w-4 h-4 text-zinc-500 group-hover:text-blue-600" />
                  <span className="text-sm text-zinc-700 group-hover:text-zinc-900">{link.name}</span>
                </Link>
              ))}
              <Link
                href="/location"
                className="flex items-center justify-center gap-1 p-2 text-sm text-blue-600 hover:text-blue-800"
              >
                View all <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Brand + Blog + Special */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[brandPages, blogPosts, specialPages].map((group, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="p-6 bg-white/70 backdrop-blur-md border border-white/80 rounded-2xl shadow-premium hover:shadow-strong transition-all">
              <div className="flex items-center gap-2 mb-4">
                {idx === 0 && <Sparkles className="w-5 h-5 text-amber-500" />}
                {idx === 1 && <Newspaper className="w-5 h-5 text-rose-500" />}
                {idx === 2 && <Link2 className="w-5 h-5 text-cyan-500" />}
                <h3 className="font-semibold text-zinc-800">
                  {idx === 0 ? "Brand & Projects" : idx === 1 ? "Blog & Articles" : "Special Identity Pages"}
                </h3>
              </div>
              <div className="space-y-2">
                {group.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 p-2 bg-white/80 rounded-lg hover:bg-blue-50 transition group"
                  >
                    <link.icon className="w-4 h-4 text-zinc-500 group-hover:text-blue-600" />
                    <span className="text-sm text-zinc-700 group-hover:text-zinc-900">{link.name}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Footprint */}
        <Section title="Official Social Footprint" icon={Globe} color="sky">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              if (link.internal) {
                return (
                  <motion.div key={link.name} variants={fadeInUp} whileHover={{ scale: 1.05 }}>
                    <Link
                      href={link.href}
                      className="flex flex-col items-center p-4 bg-white/80 border border-zinc-200/80 rounded-xl hover:bg-white hover:border-blue-200 hover:shadow-md transition-all group"
                    >
                      <Icon className="w-6 h-6 mb-2 text-zinc-600 group-hover:text-blue-600" />
                      <span className="text-xs font-medium text-zinc-600 group-hover:text-zinc-800">{link.name}</span>
                    </Link>
                  </motion.div>
                );
              }
              return (
                <motion.div key={link.name} variants={fadeInUp} whileHover={{ scale: 1.05 }}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 bg-white/80 border border-zinc-200/80 rounded-xl hover:bg-white hover:border-blue-200 hover:shadow-md transition-all group"
                  >
                    <Icon className="w-6 h-6 mb-2 text-zinc-600 group-hover:text-blue-600" />
                    <span className="text-xs font-medium text-zinc-600 group-hover:text-zinc-800">{link.name}</span>
                  </a>
                </motion.div>
              );
            })}
          </div>
        </Section>
      </motion.div>

      {/* Footer-like closing statement */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-24 text-center max-w-3xl mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-800 mb-4">
          Who is Jitendra Singh Nimod?
        </h2>
        <p className="text-zinc-600 leading-relaxed text-base sm:text-lg font-light">
          Also known as <strong>JS Nimod</strong>, <strong>Jitu Nimod</strong>, and <strong>Jitubanna</strong>, he is a developer dedicated to merging high-performance architecture with premium, user-centric design. From building comprehensive digital identity systems to crafting specialized developer tools, his work emphasizes both aesthetic minimalism and robust SEO architecture.
        </p>
      </motion.section>

      {/* Back to top button */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-16 text-center"
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center gap-2 px-5 py-2 bg-white/80 border border-zinc-200 rounded-full text-sm text-zinc-700 hover:bg-white hover:border-blue-200 hover:shadow-md hover:text-blue-700 transition-all"
        >
          <ChevronUp className="w-4 h-4" />
          Back to top
        </button>
      </motion.div>
    </div>
  );
}

// Helper components
function IconPill({ icon: Icon, label, href, external = false }) {
  const content = (
    <div className="flex items-center gap-2 px-3 py-2 bg-white/80 rounded-full border border-zinc-200 hover:border-blue-300 hover:bg-white hover:shadow-md transition-all group">
      <Icon className="w-4 h-4 text-zinc-600 group-hover:text-blue-600" />
      <span className="text-sm font-medium text-zinc-700 group-hover:text-zinc-900">{label}</span>
    </div>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className="inline-block">
      {content}
    </Link>
  );
}

function Section({ title, icon: Icon, color, children }) {
  return (
    <motion.div variants={fadeInUp}>
      <div className="flex items-center gap-2 mb-6">
        <Icon className={`w-5 h-5 text-${color}-500`} />
        <h2 className="text-2xl font-semibold text-zinc-800">{title}</h2>
      </div>
      {children}
    </motion.div>
  );
}
