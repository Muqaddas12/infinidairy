/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        scarlet: {
          400: "#ff4b8b",
          500: "#e51e5a",
          600: "#c10d45",
          700: "#8b0936",
        },
        mystic: {
          400: "#b86cff",
          500: "#7d2cff",
          600: "#5b18cc",
        },
      },
      boxShadow: {
        "magic-red": "0 0 30px rgba(229,30,90,.45), 0 0 90px rgba(125,44,255,.25)",
      },
      keyframes: {
        "magic-pulse": {
          "0%, 100%": { transform: "scale(.96)", opacity: ".55" },
          "50%": { transform: "scale(1.05)", opacity: "1" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-14px,0)" },
        },
        "magic-spin": {
          "from": { transform: "rotate(0deg) scale(1)" },
          "to": { transform: "rotate(360deg) scale(1.05)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        }
      },
      animation: {
        "magic-pulse": "magic-pulse 3s ease-in-out infinite",
        "float-slow": "float-slow 5s ease-in-out infinite",
        "magic-spin": "magic-spin 16s linear infinite",
        shimmer: "shimmer 4s linear infinite",
      }
    },
  },
  plugins: [],
};
