export async function GET() {
  const data = {
    site: "https://jitendrasingh.online",
    status: "active",
    owner: "Jitendra Singh Nimod",
    updated: new Date().toISOString(),
    message: "Site is active and maintained",
  };

  return new Response(JSON.stringify(data, null, 2), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
}