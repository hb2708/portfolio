/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark & Modern Palette
        background: "#0f172a", // Slate 900
        surface: "#1e293b",    // Slate 800
        primary: "#f59e0b", // Amber - warmer, more approachable
        secondary: "#10b981", // Emerald - complements amber
        text: "#f8fafc",       // Slate 50
        muted: "#94a3b8",      // Slate 400
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
