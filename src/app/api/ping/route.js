export async function GET() {
  const site = "https://jitendrasingh.online";

  try {
    await fetch(
      `https://www.google.com/ping?sitemap=${site}/sitemap.xml`
    );

    return new Response(
      JSON.stringify({
        status: "success",
        message: "Google pinged successfully 🚀",
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (e) {
    return new Response(
      JSON.stringify({
        status: "error",
        message: "Ping failed",
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  }
}