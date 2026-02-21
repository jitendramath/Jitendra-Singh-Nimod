import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  metadataBase: new URL("https://jitendrasingh.online"),

  title: {
    default:
      "Jitendra Singh Nimod — Full Stack Developer | B.Sc Mathematics Student | JSS Originals",
    template: "%s | Jitendra Singh Nimod",
  },

  description:
    "Official website of Jitendra Singh Nimod also known as Jitendra Nimod, Jitu Nimod and JS Nimod. Full Stack Web Developer and B.Sc Mathematics student from Rajasthan, India. Founder of JSS Originals.",

  keywords: [
    "jitendra singh nimod",
    "jitendra nimod",
    "jitu nimod",
    "js nimod",
    "jitendra singh",
    "jitendra nimod developer",
    "full stack developer rajasthan",
    "jitendra singh nimod didwana",
    "jss originals",
  ],

  openGraph: {
    title: "Jitendra Singh Nimod — Official Website",
    description:
      "Full Stack Web Developer and B.Sc Mathematics student from Rajasthan, India.",
    url: "https://jitendrasingh.online",
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
      "Full Stack Web Developer & B.Sc Mathematics Student from Rajasthan",
    images: ["/images/og/og-main.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* 🧠 PERSON SCHEMA (Knowledge panel seed) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Jitendra Singh Nimod",
              alternateName: [
                "Jitendra Nimod",
                "Jitu Nimod",
                "JS Nimod",
                "Jitendra Singh",
              ],
              birthDate: "2009-05-14",
              url: "https://jitendrasingh.online",
              image:
                "https://jitendrasingh.online/images/main/jitendra-singh-nimod.jpg",
              jobTitle: "Full Stack Web Developer",
              description:
                "Full Stack Web Developer and B.Sc Mathematics student from Rajasthan, India.",
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Govt. Bangur PG College, Didwana",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kuchaman City",
                addressRegion: "Rajasthan",
                postalCode: "341508",
                addressCountry: "India",
              },
              sameAs: [
                "https://github.com/jitendra-math",
                "https://www.instagram.com/jitendra.07_7",
                "https://www.linkedin.com/in/jitendra-singh07",
              ],
            }),
          }}
        />
      </head>

      <body className="bg-white text-zinc-900 antialiased">
        <div className="min-h-screen flex flex-col">

          {/* HEADER */}
          <Header />

          {/* PAGE CONTENT */}
          <main className="flex-1">{children}</main>

          {/* FOOTER */}
          <Footer />

        </div>
      </body>
    </html>
  );
}