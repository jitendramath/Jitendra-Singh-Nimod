// src/app/sitemap.xml/route.js
import { NextResponse } from 'next/server';

const BASE_URL = "https://me.jitubanna.com";

export async function GET() {
  const now = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

  // List of all page paths (excluding api routes, special files)
  const pages = [
    // Core pages
    "",
    "/about",
    "/contact",
    "/developer-profile",
    "/student-profile",
    "/photos-jitendra-singh-nimod",
    "/faq",
    "/location", // main location hub

    // Flagship & comprehensive identity pages
    "/jitubanna",
    "/jitubanna-identity",
    "/complete-digital-identity-of-jitendra-singh-nimod",
    "/complete-identity-of-jitendra-singh-nimod",
    "/all-names-and-usernames-of-jitendra-singh-nimod",

    // Name variations (direct pages)
    "/jitendra-singh",
    "/jitendra-rajput",
    "/jitendra-singh-dev",
    "/jitendra-singh-developer",
    "/jitendra-singh-rajput",
    "/jitendra-singh-shekhawat",
    "/jitendra-singh-shekhawat-rajput",
    "/jitu-banna",
    "/jitu-banna-developer",
    "/jitu-developer",
    "/jitu-singh",
    "/js-developer",
    "/js-shekhawat",

    // Brand & authority pages
    "/jss-originals",
    "/jss-rajput",
    "/official-jitendra-singh-rajput",
    "/official-website-jitendra-singh-nimod",
    "/who-is-jitendra-singh-nimod",
    "/who-is-jitubanna",

    // Village / Rajput SEO
    "/rajput-nimod",
    "/rajputo-ka-nimod",
    "/nimod-rajasthan",
    "/shekhawat-nimod",

    // Location detail pages
    "/location/kuchaman-city",
    "/location/nimod-village",
    "/location/didwana-rajasthan",

    // Local SEO pages (cities)
    "/jitendra-singh-kuchaman-city",
    "/jitendra-singh-didwana",
    "/kuchaman-web-developer",
    "/didwana-developer",

    // Blog index and posts
    "/blog",
    "/blog/who-is-jitendra-nimod",
    "/blog/my-journey-as-developer",
    "/blog/full-stack-developer-rajasthan",
    "/blog/best-friend-of-jitendra-singh-nimod",
    "/blog/why-personal-websites-still-matter-for-developers-in-the-ai-era",

    // Identity cluster pages
    "/identity/jitendra-nimod",
    "/identity/jitendra-singh",
    "/identity/jitendra-singh-nimod",
    "/identity/jitu-nimod",
    "/identity/js-nimod",
    "/identity/nimod-jitu",
    "/identity/nimod-js",
    "/identity/jitu-banna",
  ];

  const urls = pages
    .map((path) => {
      let priority = "0.8";
      let changefreq = "monthly";

      if (path === "" || path === "/jitubanna") {
        priority = "1.0";
        changefreq = "daily";
      } else if (
        path === "/about" ||
        path === "/contact" ||
        path === "/developer-profile" ||
        path === "/student-profile" ||
        path === "/photos-jitendra-singh-nimod" ||
        path === "/faq" ||
        path === "/location" ||
        path.startsWith("/complete-") ||
        path === "/all-names-and-usernames-of-jitendra-singh-nimod" ||
        path === "/jitubanna-identity"
      ) {
        priority = "0.9";
        changefreq = "weekly";
      } else if (
        path.startsWith("/identity/") ||
        path.startsWith("/location/") ||
        path.includes("kuchaman") ||
        path.includes("didwana") ||
        path.includes("rajput") ||
        path.includes("nimod-") ||
        path.includes("shekhawat")
      ) {
        priority = "0.8";
        changefreq = "monthly";
      } else if (path.startsWith("/blog/")) {
        priority = "0.7";
        changefreq = "weekly";
      }

      return `
  <url>
    <loc>${BASE_URL}${path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
