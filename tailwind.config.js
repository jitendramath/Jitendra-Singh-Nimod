/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        dark: "#0a0a0a",
        soft: "#f8fafc",
      },

      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "sans-serif"],
      },

      boxShadow: {
        premium:
          "0 10px 30px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.06)",
        strong: "0 20px 60px rgba(0,0,0,0.15)",
      },

      borderRadius: {
        xl2: "1.25rem",
      },

      backgroundImage: {
        "hero-gradient":
          "linear-gradient(120deg, rgba(37,99,235,0.08), rgba(124,58,237,0.08))",
      },

      animation: {
        float: "float 6s ease-in-out infinite",
      },

      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },

  plugins: [],
};