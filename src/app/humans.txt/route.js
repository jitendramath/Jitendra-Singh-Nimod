export async function GET() {
  const text = `
/* TEAM */
Name: Jitendra Singh Nimod
Role: Full Stack Web Developer
Location: Rajasthan, India

/* ALIASES */
Jitendra Nimod
Jitu Nimod
JS Nimod

/* SITE */
Official Website: https://jitendrasingh.online
Brand: JSS Originals

/* SOCIAL */
GitHub: https://github.com/jitendra-math
Instagram: https://www.instagram.com/jitendra.07_7
LinkedIn: https://www.linkedin.com/in/jitendra-singh07
  `;

  return new Response(text.trim(), {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}