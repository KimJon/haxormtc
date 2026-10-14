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
          // Exact colors specified by user & logo palette
          coral: '#FE4775',
          coralDeep: '#E0335E',
          coralLight: '#FFF0F4',
          cyan: '#18D2FA',
          cyanDeep: '#0EA5C6',
          cyanLight: '#EAFBFF',
          gold: '#FED147',
          goldDeep: '#D8AB16',
          goldLight: '#FFFBE8',
          charcoal: '#3F4040',
          dark: '#1C1D1D',
          white: '#FFFFFF',
          // Conversion accents
          green: '#25D366',
          greenHover: '#20BA5A',
          textDark: '#3F4040',
        },
        primaryText: '#3F4040',
        surface: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          800: '#3F4040',
          900: '#1C1D1D',
        }
      },
      fontFamily: {
        sans: ['"Work Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        heading: ['"Work Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        'work-sans': ['"Work Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
      backgroundImage: {
        'clarity-spectrum': 'linear-gradient(135deg, #18D2FA 0%, #FE4775 50%, #FED147 100%)',
        'clarity-cyan-pink': 'linear-gradient(135deg, #18D2FA 0%, #FE4775 100%)',
        'clarity-pink-gold': 'linear-gradient(135deg, #FE4775 0%, #FED147 100%)',
        'clarity-dark-radial': 'radial-gradient(circle at 50% 0%, rgba(24, 210, 250, 0.15) 0%, rgba(254, 71, 117, 0.08) 50%, transparent 80%)',
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
