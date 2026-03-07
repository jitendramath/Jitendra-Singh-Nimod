// src/app/api/indexnow/route.js

export async function GET() {
  const host = "me.jitubanna.com";

  const urls = [
    "https://me.jitubanna.com/",
    "https://me.jitubanna.com/about",
    "https://me.jitubanna.com/developer-profile",
    "https://me.jitubanna.com/student-profile",
    "https://me.jitubanna.com/contact",

    "https://me.jitubanna.com/blog",
    "https://me.jitubanna.com/blog/who-is-jitendra-nimod",
    "https://me.jitubanna.com/blog/my-journey-as-developer",
    "https://me.jitubanna.com/blog/full-stack-developer-rajasthan",
    "https://me.jitubanna.com/blog/best-friend-of-jitendra-singh-nimod",

    "https://me.jitubanna.com/photos-jitendra-singh-nimod",
    "https://me.jitubanna.com/who-is-jitendra-singh-nimod"
  ];

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        host: host,
        key: "jitubanna",
        urlList: urls,
      }),
    });

    const result = await res.text();

    return new Response(
      JSON.stringify({
        status: "success",
        host,
        submittedUrls: urls.length,
        message: "IndexNow ping sent successfully 🚀",
        response: result,
      }),
      {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        status: "error",
        message: "IndexNow request failed",
        error: error.message,
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
