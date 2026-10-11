/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { 50:'#eef4fa', 100:'#d9e6f2', 500:'#22598d', 700:'#153f68', 900:'#0A2342', 950:'#06162b' },
        gold: { 50:'#fbf8ed', 100:'#f4edcf', 400:'#d7b84b', 500:'#D4AF37', 600:'#b89027', 700:'#91701f' }
      },
      fontFamily: { sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'], display: ['var(--font-playfair)', 'Georgia', 'serif'] },
      boxShadow: { premium: '0 20px 60px -20px rgba(10,35,66,.24)', glow: '0 0 40px rgba(212,175,55,.18)' },
      backgroundImage: { 'hero-grid': 'radial-gradient(rgba(212,175,55,.16) 1px, transparent 1px)' }
    }
  },
  plugins: []
};
