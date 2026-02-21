"use client";

import identity from "../data/identity";

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: identity.name,

    alternateName: identity.alternateNames,

    url: identity.website,

    image: identity.images.main,

    birthDate: identity.dob,

    jobTitle: identity.profession,

    description: identity.description,

    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: identity.education.college,
    },

    address: {
      "@type": "PostalAddress",
      addressLocality: identity.location.city,
      addressRegion: identity.location.state,
      postalCode: identity.location.pincode,
      addressCountry: identity.location.country,
    },

    sameAs: [
      identity.social.github,
      identity.social.instagram,
      identity.social.linkedin,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}