/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Inter'", "sans-serif"],
      },
      animation: {
        gobble: "gobble 4s ease-in-out infinite",
      },
       keyframes: {
        gobble: {
          '0%, 100%': {
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          },
          '25%': {
            borderRadius: '40% 60% 60% 40% / 50% 30% 70% 50%',
          },
          '50%': {
            borderRadius: '30% 70% 70% 30% / 30% 49% 51% 70%',
          },
          '75%': {
            borderRadius: '60% 40% 40% 60% / 20% 60% 40% 80%',
          },
        },
      },
    },
  },
  plugins: [],
}

