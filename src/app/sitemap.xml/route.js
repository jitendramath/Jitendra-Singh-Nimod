export async function GET() {

  const BASE_URL = "https://www.jitendrasingh.online";
  const lastmod = "2026-02-23";

  const routes = [

    // CORE MAIN
    { url: "", priority: "1.0", freq: "daily" },
    { url: "/about", priority: "0.9", freq: "monthly" },
    { url: "/contact", priority: "0.8", freq: "monthly" },
    { url: "/developer-profile", priority: "0.9", freq: "monthly" },
    { url: "/student-profile", priority: "0.9", freq: "monthly" },
    { url: "/photos-jitendra-singh-nimod", priority: "0.8", freq: "monthly" },

    // BLOG CORE
    { url: "/blog", priority: "0.9", freq: "weekly" },
    { url: "/blog/who-is-jitendra-nimod", priority: "0.8", freq: "monthly" },
    { url: "/blog/my-journey-as-developer", priority: "0.8", freq: "monthly" },
    { url: "/blog/full-stack-developer-rajasthan", priority: "0.8", freq: "monthly" },

    // IDENTITY CORE
    { url: "/identity/jitendra-singh-nimod", priority: "0.95", freq: "monthly" },
    { url: "/identity/jitendra-nimod", priority: "0.95", freq: "monthly" },
    { url: "/identity/jitu-nimod", priority: "0.95", freq: "monthly" },
    { url: "/identity/js-nimod", priority: "0.95", freq: "monthly" },
    { url: "/identity/jitendra-singh", priority: "0.9", freq: "monthly" },
    { url: "/identity/nimod-js", priority: "0.8", freq: "monthly" },
    { url: "/identity/nimod-jitu", priority: "0.8", freq: "monthly" },

    // MAIN PROFESSIONAL
    { url: "/jitendra-singh", priority: "0.9", freq: "monthly" },
    { url: "/jitendra-singh-dev", priority: "0.9", freq: "monthly" },
    { url: "/jitendra-singh-developer", priority: "0.9", freq: "monthly" },
    { url: "/jitendra-singh-kuchaman-city", priority: "0.9", freq: "monthly" },
    { url: "/jitendra-singh-didwana", priority: "0.9", freq: "monthly" },
    { url: "/didwana-developer", priority: "0.9", freq: "monthly" },
    { url: "/kuchaman-web-developer", priority: "0.9", freq: "monthly" },

    // RAJPUT / SHEKHAWAT SEO
    { url: "/jitendra-rajput", priority: "0.8", freq: "monthly" },
    { url: "/jitendra-singh-rajput", priority: "0.8", freq: "monthly" },
    { url: "/jitendra-singh-shekhawat", priority: "0.8", freq: "monthly" },
    { url: "/jitendra-singh-shekhawat-rajput", priority: "0.8", freq: "monthly" },
    { url: "/jss-rajput", priority: "0.7", freq: "monthly" },
    { url: "/rajput-nimod", priority: "0.7", freq: "monthly" },
    { url: "/rajputo-ka-nimod", priority: "0.7", freq: "monthly" },
    { url: "/shekhawat-nimod", priority: "0.7", freq: "monthly" },

    // BANNA / JS / BRAND
    { url: "/jitu-banna", priority: "0.8", freq: "monthly" },
    { url: "/jitu-banna-developer", priority: "0.8", freq: "monthly" },
    { url: "/jitu-developer", priority: "0.8", freq: "monthly" },
    { url: "/jitu-singh", priority: "0.8", freq: "monthly" },
    { url: "/js-developer", priority: "0.8", freq: "monthly" },
    { url: "/js-shekhawat", priority: "0.8", freq: "monthly" },

    // BRAND
    { url: "/jss-originals", priority: "0.9", freq: "monthly" },
    { url: "/official-website-jitendra-singh-nimod", priority: "0.95", freq: "monthly" },
    { url: "/official-jitendra-singh-rajput", priority: "0.9", freq: "monthly" },
    { url: "/who-is-jitendra-singh-nimod", priority: "0.95", freq: "monthly" },

    // LOCATION SEO
    { url: "/location/kuchaman-city", priority: "0.9", freq: "monthly" },
    { url: "/location/nimod-village", priority: "0.9", freq: "monthly" },
    { url: "/location/didwana-rajasthan", priority: "0.9", freq: "monthly" },
    { url: "/nimod-rajasthan", priority: "0.9", freq: "monthly" },

  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes
      .map(
        (r) => `
      <url>
        <loc>${BASE_URL}${r.url}</loc>
        <lastmod>${lastmod}</lastmod>
        <changefreq>${r.freq}</changefreq>
        <priority>${r.priority}</priority>
      </url>`
      )
      .join("")}
  </urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
