const BASE_URL = "https://www.jitendrasingh.online";

export async function GET() {
  const now = "2026-02-23"; // static date for trust (change only when real update)

  // 🔥 ALL WEBSITE PAGES (MASTER LIST — NO PAGE LEFT)
  const pages = [

    // CORE
    "",
    "/about",
    "/contact",
    "/developer-profile",
    "/student-profile",
    "/photos-jitendra-singh-nimod",

    // MAIN IDENTITY CORE
    "/jitendra-singh",
    "/jitendra-rajput",
    "/jitendra-singh-dev",
    "/jitendra-singh-developer",
    "/jitendra-singh-rajput",
    "/jitendra-singh-shekhawat",
    "/jitendra-singh-shekhawat-rajput",

    // LOCAL SEO
    "/jitendra-singh-kuchaman-city",
    "/jitendra-singh-didwana",
    "/kuchaman-web-developer",
    "/didwana-developer",

    // BANNA / JS / NAME VARIANTS
    "/jitu-banna",
    "/jitu-banna-developer",
    "/jitu-developer",
    "/jitu-singh",
    "/js-developer",
    "/js-shekhawat",

    // BRAND & AUTHORITY
    "/jss-originals",
    "/jss-rajput",
    "/official-jitendra-singh-rajput",
    "/official-website-jitendra-singh-nimod",
    "/who-is-jitendra-singh-nimod",

    // VILLAGE / RAJPUT SEO
    "/rajput-nimod",
    "/rajputo-ka-nimod",
    "/nimod-rajasthan",
    "/shekhawat-nimod",

    // LOCATION CLUSTER
    "/location/kuchaman-city",
    "/location/nimod-village",
    "/location/didwana-rajasthan",

    // BLOG
    "/blog",
    "/blog/who-is-jitendra-nimod",
    "/blog/my-journey-as-developer",
    "/blog/full-stack-developer-rajasthan",

    // IDENTITY CLUSTER (MOST IMPORTANT)
    "/identity/jitendra-nimod",
    "/identity/jitendra-singh",
    "/identity/jitendra-singh-nimod",
    "/identity/jitu-nimod",
    "/identity/js-nimod",
    "/identity/nimod-jitu",
    "/identity/nimod-js",
  ];

  const urls = pages
    .map((path) => {
      let priority = "0.8";
      let freq = "monthly";

      if (path === "") {
        priority = "1.0";
        freq = "daily";
      }

      if (path.includes("/identity")) {
        priority = "0.9";
      }

      if (path.includes("/blog")) {
        priority = "0.7";
        freq = "weekly";
      }

      return `
      <url>
        <loc>${BASE_URL}${path}</loc>
        <lastmod>${now}</lastmod>
        <changefreq>${freq}</changefreq>
        <priority>${priority}</priority>
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
