export async function GET() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jitendra Singh Nimod",
    alternateName: [
      "Jitendra Nimod",
      "Jitu Nimod",
      "JS Nimod",
      "Jitendra Singh"
    ],
    url: "https://jitendrasingh.online",
    image: "https://jitendrasingh.online/images/main/jitendra-singh-nimod.jpg",
    birthDate: "2009-05-14",
    jobTitle: "Full Stack Web Developer",
    description:
      "Full Stack Web Developer and B.Sc Mathematics student from Rajasthan, India.",
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
      "https://www.linkedin.com/in/jitendra-singh07"
    ]
  };

  return new Response(JSON.stringify(schema, null, 2), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}