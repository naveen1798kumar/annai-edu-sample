import plugin from 'tailwindcss/plugin';
import tailwindScrollbar from 'tailwind-scrollbar';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
    },
  },
  plugins: [
    tailwindScrollbar,
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.custom-scrollbar': {
          scrollbarWidth: 'thin',
          scrollbarColor: '#1E40AF #E5E7EB', // Thumb and track colors
        },
        '.custom-scrollbar::-webkit-scrollbar': {
          width: '8px',
        },
        '.custom-scrollbar::-webkit-scrollbar-thumb': {
          backgroundColor: '#1E40AF', // Thumb color
          borderRadius: '10px',
        },
        '.custom-scrollbar::-webkit-scrollbar-track': {
          backgroundColor: '#E5E7EB', // Track color
        },
      });
    }),
  ],
};
