// src/app/api/schema/route.js

export async function GET() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",

    "@id": "https://me.jitubanna.com/#person",

    name: "Jitendra Singh Nimod",

    alternateName: [
      "Jitendra Nimod",
      "Jitu Nimod",
      "JS Nimod",
      "Jitendra Singh",
      "Jitubanna"
    ],

    url: "https://me.jitubanna.com",

    image:
      "https://me.jitubanna.com/images/main/jitendra-singh-nimod.jpg",

    birthDate: "2009-05-14",

    jobTitle: "Full Stack Web Developer",

    description:
      "Full Stack Web Developer, B.Sc Mathematics student from Rajasthan, India, and founder of JSS Originals.",

    worksFor: {
      "@type": "Organization",
      name: "JSS Originals"
    },

    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Govt. Bangur PG College, Didwana"
    },

    address: {
      "@type": "PostalAddress",
      addressLocality: "Kuchaman City",
      addressRegion: "Rajasthan",
      addressCountry: "India"
    },

    sameAs: [
      "https://github.com/jitendra-math",
      "https://www.instagram.com/jitendra.07_7",
      "https://www.linkedin.com/in/jitendra-singh07",
      "https://x.com/jitendranimod",
      "https://jitubanna.com"
    ],

    knowsAbout: [
      "Full Stack Development",
      "JavaScript",
      "Next.js",
      "React",
      "Web Development",
      "SEO"
    ],

    mainEntityOfPage: {
      "@type": "WebSite",
      "@id": "https://me.jitubanna.com"
    },

    identifier: [
      "Jitendra Singh Nimod",
      "Jitu Nimod",
      "JS Nimod",
      "Jitubanna"
    ],

    lastUpdated: new Date().toISOString()
  };

  return new Response(JSON.stringify(schema, null, 2), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
      "Access-Control-Allow-Origin": "*"
    },
  });
}
