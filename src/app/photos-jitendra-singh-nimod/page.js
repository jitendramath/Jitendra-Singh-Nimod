// src/app/photos-jitendra-singh-nimod/page.js
// Ultra-premium photo gallery page with lightbox

import Image from "next/image";
import Link from "next/link";
import StructuredData from "../../components/StructuredData";
import identity from "../../data/identity";
import GalleryClient from "../../components/GalleryClient";

export const metadata = {
  title: "Jitendra Singh Nimod Photos – Official Gallery",
  description:
    "Official photos of Jitendra Singh Nimod (JS Nimod, Jitu Nimod, Jitubanna). Full Stack Developer and B.Sc Mathematics student from Rajasthan, India.",
  keywords: [
    "Jitendra Singh Nimod photos",
    "JS Nimod images",
    "Jitu Nimod photo",
    "Jitendra Nimod picture",
    "Jitubanna gallery",
    "Rajasthan developer photos"
  ],
  alternates: { canonical: "/photos-jitendra-singh-nimod" },
  openGraph: {
    title: "Jitendra Singh Nimod – Official Photo Gallery",
    description:
      "View official photos of Jitendra Singh Nimod, Full Stack Developer from Rajasthan.",
    images: [{ url: "/images/og/photos-og.jpg", width: 1200, height: 630 }],
  },
};

export default function PhotosPage() {
  const gallery = [
    {
      src: identity.images.main,
      alt: "Jitendra Singh Nimod – Full Stack Developer",
      caption: "Jitendra Singh Nimod – Official Portrait"
    },
    {
      src: identity.images.developer,
      alt: "JS Nimod – Developer Profile",
      caption: "JS Nimod – Developer Profile"
    },
    {
      src: identity.images.casual,
      alt: "Jitu Nimod – Casual",
      caption: "Jitu Nimod – Casual"
    },
    {
      src: "/images/gallery/photo1.jpg",
      alt: "Jitendra Nimod – Photo 1",
      caption: "Jitendra Nimod – Kuchaman City"
    },
    {
      src: "/images/gallery/photo2.jpg",
      alt: "Jitendra Nimod – Photo 2",
      caption: "Jitendra Nimod – Didwana"
    },
    {
      src: "/images/gallery/photo3.jpg",
      alt: "Jitendra Nimod – Photo 3",
      caption: "Jitendra Nimod – Nimod Village"
    },
  ];

  return (
    <>
      <StructuredData />
      <main className="min-h-screen bg-gradient-to-br from-white via-zinc-50 to-white text-zinc-700 font-sans selection:bg-[#2563EB]/30 selection:text-white relative overflow-hidden pb-20">

        {/* Premium Background Blobs */}
        <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#2563EB]/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="fixed bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="fixed inset-0 bg-[radial-gradient(#2563EB_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.015] pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-800 mb-4">
              Photos of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-purple-600">Jitendra Singh Nimod</span>
            </h1>
            <p className="text-lg text-zinc-600">
              Official images of <strong>Jitendra Singh Nimod</strong> (JS Nimod, Jitu Nimod, Jitubanna), 
              Full Stack Developer from Rajasthan.
            </p>
          </div>

          {/* Gallery Client Component */}
          <GalleryClient images={gallery} />

          {/* SEO Text */}
          <section className="mt-20 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-3xl p-8 md:p-10 shadow-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-4">About This Gallery</h2>
              <div className="prose prose-zinc max-w-none space-y-4">
                <p className="text-zinc-600">
                  These are official images of <strong className="text-[#2563EB]">{identity.name}</strong> from Rajasthan, India. 
                  Many people search for photos of <strong>Jitendra Nimod, Jitu Nimod, or JS Nimod</strong> on Google Images.
                </p>
                <p className="text-zinc-600">
                  All images on this page belong to {identity.name}, a Full Stack Web Developer and student currently studying 
                  at <strong>{identity.education.college}</strong>.
                </p>
                <p className="text-zinc-600">
                  If you are searching for real images of Jitendra Singh Nimod from <strong>Kuchaman City, Didwana, or Nimod village</strong>, 
                  this is the official gallery.
                </p>
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="mt-20 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white font-semibold rounded-full hover:bg-[#1d4ed8] hover:scale-105 transition-all shadow-md"
            >
              Get in Touch
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
