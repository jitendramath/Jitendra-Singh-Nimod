// next.config.js

const nextConfig = {
  reactStrictMode: true,

  // 🔥 Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  // ⚡ Performance
  compress: true,
  poweredByHeader: false,

  // 🧠 SEO + Domain Migration Redirect
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "jitendrasingh.online",
          },
        ],
        destination: "https://me.jitubanna.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.jitendrasingh.online",
          },
        ],
        destination: "https://me.jitubanna.com/:path*",
        permanent: true,
      },
    ];
  },

  // 🛡️ Security + SEO Headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },

          // 🔥 SEO caching
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },

  // ⚡ Faster builds
  swcMinify: true,

  // 🧠 Experimental performance boost
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

module.exports = nextConfig;
