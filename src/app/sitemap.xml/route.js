export async function GET() {
  const base = "https://www.jitendrasingh.online";

  const pages = [
    "",

    // core
    "/about",
    "/contact",
    "/developer-profile",
    "/student-profile",
    "/jss-originals",
    "/photos-jitendra-singh-nimod",

    "/blog",
    "/blog/who-is-jitendra-nimod",
    "/blog/my-journey-as-developer",
    "/blog/full-stack-developer-rajasthan",

    "/identity/jitendra-nimod",
    "/identity/jitu-nimod",
    "/identity/js-nimod",
    "/identity/jitendra-singh-nimod",
    "/identity/jitendra-singh",
    "/identity/nimod-js",
    "/identity/nimod-jitu",

    "/location/kuchaman-city",
    "/location/nimod-village",
    "/location/didwana-rajasthan",
  ];

  const today = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(
        (p, i) => `
      <url>
        <loc>${base}${p}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>${i === 0 ? "daily" : "weekly"}</changefreq>
        <priority>${i === 0 ? "1.0" : "0.8"}</priority>
      </url>`
      )
      .join("")}
  </urlset>`;

  return new Response(xml.trim(), {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "no-store",
    },
  });
}
