import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  metadataBase: new URL("https://www.jitendrasingh.online"),

  title: {
    default:
      "Jitendra Singh Nimod — Full Stack Developer | JSS Originals",
    template: "%s | Jitendra Singh Nimod",
  },

  description:
    "Official website of Jitendra Singh Nimod (JS Nimod), Full Stack Web Developer from Rajasthan, India and Founder of JSS Originals.",

  keywords: [
    "Jitendra Singh Nimod",
    "JS Nimod",
    "Jitu Nimod",
    "Full Stack Developer Rajasthan",
    "JSS Originals",
  ],
icons: {
  icon: "/favicon.ico",
  shortcut: "/favicon-16x16.png",
  apple: "/apple-touch-icon.png",
},

manifest: "/site.webmanifest",
  
  openGraph: {
    title: "Jitendra Singh Nimod — Official Website",
    description:
      "Full Stack Web Developer from Rajasthan, India.",
    url: "https://www.jitendrasingh.online",
    siteName: "Jitendra Singh Nimod",
    images: [
      {
        url: "/images/og/og-main.jpg",
        width: 1200,
        height: 630,
        alt: "Jitendra Singh Nimod",
      },
    ],
    locale: "en_IN",
    type: "profile",
  },

  twitter: {
    card: "summary_large_image",
    title: "Jitendra Singh Nimod",
    description:
      "Full Stack Web Developer from Rajasthan",
    images: ["/images/og/og-main.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.jitendrasingh.online/#person",
    name: "Jitendra Singh Nimod",
    alternateName: ["JS Nimod", "Jitu Nimod"],
    url: "https://www.jitendrasingh.online",
    image:
      "https://www.jitendrasingh.online/images/main/jitendra-singh-nimod.jpg",
    jobTitle: "Full Stack Web Developer",
    description:
      "Full Stack Web Developer from Rajasthan, India and Founder of JSS Originals.",
    sameAs: [
      "https://github.com/jitendra-math",
      "https://www.instagram.com/jitendra.07_7",
      "https://www.linkedin.com/in/jitendra-singh07",
      "https://x.com/jitendranimod",
      "https://www.youtube.com/@jitendranimod"
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kuchaman City",
      addressRegion: "Rajasthan",
      addressCountry: "India",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Govt. Bangur PG College, Didwana",
    },
    worksFor: {
      "@type": "Organization",
      name: "JSS Originals",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.jitendrasingh.online/#organization",
    name: "JSS Originals",
    url: "https://www.jitendrasingh.online",
    logo: "https://www.jitendrasingh.online/android-chrome-512x512.png",
    founder: {
      "@type": "Person",
      name: "Jitendra Singh Nimod",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.jitendrasingh.online/#website",
    url: "https://www.jitendrasingh.online",
    name: "Jitendra Singh Nimod Official Website",
    publisher: {
      "@type": "Person",
      name: "Jitendra Singh Nimod",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>

      <body className="bg-white text-zinc-900 antialiased">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
