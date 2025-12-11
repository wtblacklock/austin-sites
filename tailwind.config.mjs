/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        'truck-yellow': '#FCD34D', // Bright sunny yellow
        'truck-red': '#DC2626',    // Menu text red
        'studio-black': '#1a1a1a',
        'studio-white': '#FFFBEB', // Very light warm yellow/white
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      animation: {
        'fade-in-up': 'fadeInUp 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fadeIn 1.5s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    }
  },
  plugins: [],
}