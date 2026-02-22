const BASE_URL = "https://www.jitendrasingh.online";

export async function GET() {
  const now = new Date().toISOString();

  // 🔥 ALL PAGES (based on your full structure)
  const pages = [
    "",
    "/about",
    "/contact",
    "/developer-profile",
    "/student-profile",
    "/photos-jitendra-singh-nimod",

    // main identity
    "/jitendra-singh",
    "/jitendra-rajput",
    "/jitendra-singh-dev",
    "/jitendra-singh-developer",
    "/jitendra-singh-rajput",
    "/jitendra-singh-shekhawat",
    "/jitendra-singh-shekhawat-rajput",

    // local identity
    "/jitendra-singh-kuchaman-city",
    "/jitendra-singh-didwana",
    "/kuchaman-web-developer",
    "/didwana-developer",

    // nick identity
    "/jitu-banna",
    "/jitu-banna-developer",
    "/jitu-developer",
    "/jitu-singh",
    "/js-developer",
    "/js-shekhawat",

    // brand
    "/jss-originals",
    "/jss-rajput",
    "/official-jitendra-singh-rajput",
    "/official-website-jitendra-singh-nimod",

    // village/rajput domination
    "/rajput-nimod",
    "/rajputo-ka-nimod",
    "/nimod-rajasthan",
    "/shekhawat-nimod",

    // location
    "/location/kuchaman-city",
    "/location/nimod-village",
    "/location/didwana-rajasthan",

    // blog main
    "/blog",
    "/blog/who-is-jitendra-nimod",
    "/blog/my-journey-as-developer",
    "/blog/full-stack-developer-rajasthan",

    // identity cluster
    "/identity/jitendra-nimod",
    "/identity/jitendra-singh",
    "/identity/jitendra-singh-nimod",
    "/identity/jitu-nimod",
    "/identity/js-nimod",
    "/identity/nimod-jitu",
    "/identity/nimod-js",

    // extra authority
    "/who-is-jitendra-singh-nimod",
  ];

  const urls = pages
    .map((path) => {
      return `
      <url>
        <loc>${BASE_URL}${path}</loc>
        <lastmod>${now}</lastmod>
        <changefreq>${path === "" ? "daily" : "weekly"}</changefreq>
        <priority>${path === "" ? "1.0" : "0.8"}</priority>
      </url>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
  </urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
