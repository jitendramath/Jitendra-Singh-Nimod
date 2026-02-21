export async function GET() {
  const manifest = {
    name: "Jitendra Singh Nimod",
    short_name: "Jitendra Nimod",
    description:
      "Official website of Jitendra Singh Nimod, Full Stack Developer and B.Sc Mathematics student from Rajasthan, India.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/images/main/jitendra-singh-nimod.jpg",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };

  return new Response(JSON.stringify(manifest), {
    headers: {
      "Content-Type": "application/manifest+json",
    },
  });
}