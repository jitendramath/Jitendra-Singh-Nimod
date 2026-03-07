// src/app/api/ping/route.js

export async function GET() {
  const site = "https://me.jitubanna.com";
  const sitemap = `${site}/sitemap.xml`;

  const engines = [
    `https://www.google.com/ping?sitemap=${sitemap}`,
    `https://www.bing.com/ping?sitemap=${sitemap}`,
  ];

  try {
    const results = await Promise.all(
      engines.map((url) =>
        fetch(url).then((res) => ({
          engine: url.includes("google") ? "Google" : "Bing",
          status: res.status,
        }))
      )
    );

    return new Response(
      JSON.stringify(
        {
          status: "success",
          site,
          sitemap,
          enginesPinged: results,
          message: "Search engines pinged successfully 🚀",
        },
        null,
        2
      ),
      {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify(
        {
          status: "error",
          message: "Ping failed",
          error: error.message,
        },
        null,
        2
      ),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
