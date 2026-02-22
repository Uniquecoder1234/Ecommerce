/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        cream: {
          50: "#fdfaf4",
          100: "#faf3e0",
          200: "#f5e6c8",
        },
        obsidian: {
          900: "#0d0d0d",
          800: "#1a1a1a",
          700: "#2a2a2a",
        },
        gold: {
          400: "#d4a843",
          500: "#c49a2e",
          600: "#a8821f",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        shimmer: "shimmer 2s infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
}
