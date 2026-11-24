/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['DM Sans', 'sans-serif'], display: ['Space Grotesk', 'sans-serif'] },
      colors: { ink: '#09090f', panel: '#11111b', brand: '#8b5cf6', cyan: '#22d3ee' },
      boxShadow: { glow: '0 0 70px rgba(139,92,246,.18)' }
    }
  },
  plugins: []
}
