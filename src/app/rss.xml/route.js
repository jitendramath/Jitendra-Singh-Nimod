// src/app/rss.xml/route.js

export async function GET() {
  const base = "https://me.jitubanna.com";

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
    {
      title: "Who Is the Best Friend of Jitendra Singh Nimod",
      slug: "best-friend-of-jitendra-singh-nimod",
      description:
        "A story about the friendship between Jitendra Singh Nimod and Nikhil Sambhariya.",
      date: "2026-03-01",
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0"
xmlns:atom="http://www.w3.org/2005/Atom">

<channel>

<title>Jitendra Singh Nimod Blog</title>

<link>${base}</link>

<description>
Official blog and articles about Jitendra Singh Nimod, Full Stack Developer from Rajasthan, India.
</description>

<language>en-IN</language>

<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>

<atom:link href="${base}/rss.xml" rel="self" type="application/rss+xml"/>

${posts
  .map(
    (post) => `
<item>
<title>${post.title}</title>
<link>${base}/blog/${post.slug}</link>
<guid>${base}/blog/${post.slug}</guid>
<description>${post.description}</description>
<pubDate>${new Date(post.date).toUTCString()}</pubDate>
</item>`
  )
  .join("")}

</channel>
</rss>`;

  return new Response(xml.trim(), {
    headers: {
      "Content-Type": "application/rss+xml",
      "Cache-Control": "no-store",
    },
  });
}
