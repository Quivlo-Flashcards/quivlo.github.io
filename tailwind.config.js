/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lora', 'Georgia', 'serif'],
        serif: ['Lora', 'Georgia', 'serif'],
      },
      colors: {
        quivlo: {
          accent: 'var(--color-accent)',
          accentFrom: 'var(--color-accent-from)',
          accentTo: 'var(--color-accent-to)',
          surface: 'var(--color-surface)',
          muted: 'var(--color-muted)',
        },
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-dark': '0 2px 15px -3px rgba(0, 0, 0, 0.3), 0 10px 20px -2px rgba(0, 0, 0, 0.2)',
        'glow': '0 0 40px -10px var(--color-glow)',
        'glow-lg': '0 0 60px -15px var(--color-glow)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'hero-fade-in': 'heroFadeIn 0.4s ease-out forwards',
        'hero-fade-out': 'heroFadeOut 0.4s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        heroFadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        heroFadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh': 'var(--bg-mesh)',
      },
    },
  },
  plugins: [],
}
