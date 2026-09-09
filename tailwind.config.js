/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Exact colors extracted from public/logo.png
          cyan: '#00CDFA',
          cyanDeep: '#0096B8',
          cyanLight: '#E6F9FE',
          coral: '#FF3366',
          coralDeep: '#E61A4E',
          coralLight: '#FFF0F3',
          gold: '#FFCC33',
          goldDeep: '#DDA800',
          goldLight: '#FFF9E6',
          // Conversion color
          green: '#25D366',
          greenHover: '#20BA5A',
          textDark: '#373656', // rgb(55, 54, 86)
        },
        primaryText: '#373656', // rgb(55, 54, 86)
        surface: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          800: '#1E293B',
          900: '#0F172A',
        }
      },
      fontFamily: {
        heading: ['Recoleta', 'Fraunces', 'Arial', 'serif'],
        sans: ['Figtree', 'Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.04)',
        'card-hover': '0 12px 30px -4px rgba(15, 23, 42, 0.1), 0 4px 12px -2px rgba(15, 23, 42, 0.05)',
        'glow-whatsapp': '0 4px 20px -2px rgba(37, 211, 102, 0.35)',
        'glow-cyan': '0 4px 20px -2px rgba(0, 205, 250, 0.35)',
      },
    },
  },
  plugins: [],
}
