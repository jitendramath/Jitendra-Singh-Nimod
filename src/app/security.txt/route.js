export async function GET() {
  const text = `
Contact: https://jitendrasingh.online/contact
Preferred-Languages: en
Canonical: https://jitendrasingh.online/security.txt
Policy: https://jitendrasingh.online

# Owner
Name: Jitendra Singh Nimod
Website: https://jitendrasingh.online
Brand: JSS Originals
Location: Rajasthan, India
  `;

  return new Response(text.trim(), {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}