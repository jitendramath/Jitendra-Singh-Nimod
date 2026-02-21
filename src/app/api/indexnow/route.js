export async function GET() {
  const host = "jitendrasingh.online";

  const urls = [
    "https://jitendrasingh.online/",
    "https://jitendrasingh.online/about",
    "https://jitendrasingh.online/developer-profile",
    "https://jitendrasingh.online/student-profile",
    "https://jitendrasingh.online/blog",
    "https://jitendrasingh.online/photos-jitendra-singh-nimod",
  ];

  try {
    await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        host: host,
        key: host,
        urlList: urls,
      }),
    });

    return new Response(
      JSON.stringify({
        status: "success",
        message: "IndexNow ping sent 🚀",
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (e) {
    return new Response(
      JSON.stringify({
        status: "error",
        message: "IndexNow failed",
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  }
}