/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'charcoal': '#2D2D2D',
        'plasma-violet': '#8A2BE2',
        'midnight': '#000033',
        'plasma-violet-dark': '#5A189A',
      },
      /* ▼ add this ▼ */
      boxShadow: {
        glow:      '0 0 20px rgba(138,43,226,0.25)',
        glowHover: '0 0 40px rgba(138,43,226,0.5)',
      },
      keyframes: {
        pulseSlow: {
          '0%, 100%': { opacity: 0.05 },
          '50%':      { opacity: 0.15 },
        },
        blink: {                // neon bracket flash
          '0%, 97%, 100%': { opacity: 0.15 },
          '98%':            { opacity: 1   },
        },
        underline: {
          '0%':   { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        pulseSlow: 'pulseSlow 8s ease-in-out infinite',
        blinkSlow: 'blink 4s linear infinite',
        underlineGrow: 'underline 0.6s cubic-bezier(0.4,0,0.2,1) forwards',
      },
      /* ▲ add this ▲ */
    },
  },
  plugins: [],
};
