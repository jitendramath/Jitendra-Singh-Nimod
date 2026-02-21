export async function GET() {
  const base = "https://jitendrasingh.online";

  const posts = [
    {
      title: "Who is Jitendra Nimod",
      slug: "who-is-jitendra-nimod",
      description:
        "Learn about Jitendra Singh Nimod, also known as Jitendra Nimod, Jitu Nimod and JS Nimod.",
      date: "2026-01-01",
    },
    {
      title: "My Journey as a Full Stack Developer",
      slug: "my-journey-as-developer",
      description:
        "Journey of Jitendra Singh Nimod as a Full Stack Developer from Rajasthan.",
      date: "2026-01-02",
    },
    {
      title: "Full Stack Developer from Rajasthan",
      slug: "full-stack-developer-rajasthan",
      description:
        "Jitendra Singh Nimod — Full Stack Developer based in Rajasthan, India.",
      date: "2026-01-03",
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Jitendra Singh Nimod Blog</title>
    <link>${base}</link>
    <description>Official blog of Jitendra Singh Nimod</description>
    ${posts
      .map(
        (post) => `
      <item>
        <title>${post.title}</title>
        <link>${base}/blog/${post.slug}</link>
        <description>${post.description}</description>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      </item>
    `
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(xml.trim(), {
    headers: {
      "Content-Type": "application/rss+xml",
    },
  });
}