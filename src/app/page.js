// src/app/page.js
import Image from "next/image";
import Link from "next/link";
import HomePageContent from "../components/HomePageContent";
import StructuredData from "../components/StructuredData";

export const metadata = {
  metadataBase: new URL("https://me.jitubanna.com"),
  title: "Jitendra Singh Nimod | Full Stack Developer & Founder",
  description:
    "The complete digital identity archive of Jitendra Singh Nimod (JS Nimod). Full Stack Developer, Founder of JSS Originals, and creator of premium digital experiences from Rajasthan, India.",
  keywords: [
    "Jitendra Singh Nimod",
    "Jitendra Nimod",
    "Jitu Nimod",
    "JS Nimod",
    "JSS Originals",
    "Full Stack Developer Rajasthan",
    "Jitu Banna Developer",
    "Jitendra Singh Shekhawat",
    "Nimod Rajasthan",
    "Kuchaman City Developer",
    "Didwana Developer",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Jitendra Singh Nimod — Complete Digital Identity",
    description:
      "Verified identity archive of Jitendra Singh Nimod. Developer, Founder, and Tech Enthusiast from Rajasthan.",
    url: "https://me.jitubanna.com",
    siteName: "Jitendra Singh Nimod",
    type: "profile",
    images: [{ url: "/images/og/og-main.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jitendra Singh Nimod",
    description: "Full Stack Developer & Founder of JSS Originals.",
    creator: "@jitendranimod",
  },
};

export default function HomePage() {
  return (
    <main className="bg-gradient-to-br from-white via-zinc-50 to-zinc-100 text-zinc-800 min-h-screen font-sans selection:bg-blue-600/30 selection:text-white relative overflow-hidden">
      <StructuredData />

      {/* Dynamic background blobs (animated later with framer) */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none animate-pulse-slow"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none animate-pulse-slower"></div>

      <HomePageContent />
    </main>
  );
}
