export async function GET() {
  const identity = {
    name: "Jitendra Singh Nimod",
    alternateNames: [
      "Jitendra Nimod",
      "Jitu Nimod",
      "JS Nimod",
      "Jitendra Singh"
    ],

    title:
      "Full Stack Web Developer | B.Sc Mathematics Student | Founder of JSS Originals",

    birthDate: "2009-05-14",

    profession: "Full Stack Web Developer",
    education: "B.Sc Mathematics",

    college: "Govt. Bangur PG College, Didwana",

    location: {
      city: "Kuchaman City",
      state: "Rajasthan",
      country: "India",
      village: "Nimod"
    },

    brand: "JSS Originals",

    website: "https://jitendrasingh.online",

    socials: {
      github: "https://github.com/jitendra-math",
      instagram: "https://www.instagram.com/jitendra.07_7",
      linkedin: "https://www.linkedin.com/in/jitendra-singh07"
    },

    verified: true,
    lastUpdated: new Date().toISOString()
  };

  return new Response(JSON.stringify(identity, null, 2), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store"
    },
  });
}