export async function GET() {
  const text = `
User-agent: *
Allow: /

Sitemap: https://jitendrasingh.online/sitemap.xml
  `;

  return new Response(text.trim(), {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}