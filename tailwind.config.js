/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: "#0f0f16",
        surfaceHighlight: "#1a1a24",
        primary: "#7c3aed", // Violet
        secondary: "#2dd4bf", // Teal/Cyan for neon accents
        textMain: "#f8fafc",
        textMuted: "#94a3b8",
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      animation: {
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      }
    },
  },
  plugins: [],
}