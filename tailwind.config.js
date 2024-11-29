/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        jiggle: "jiggle 0.6s ease-in-out", // Jiggle effect
        tilt: "tilt 0.6s ease-in-out",    // Tilt effect
        'bounce-slow': 'bounce 2s infinite', // Slow bouncy animation
        'pulse-slow': 'pulse 4s ease-in-out infinite', // Pulse animation
        "float": "float 4s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        
      },
      keyframes: {
        jiggle: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px)" },
          "50%": { transform: "translateX(5px)" },
          "75%": { transform: "translateX(-3px)" },
        },
        tilt: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
          "75%": { transform: "rotate(-2deg)" },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(-5%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
        },
        float: {
          "0%, 100%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(10px)" },
        },
      },
      colors: {
        teal: {
          500: '#14b8a6',
        },
        purple: {
          500: '#8b5cf6',
        },
        pink: {
          400: '#f472b6',
        },
      },
    },
  },
  plugins: [],
}

