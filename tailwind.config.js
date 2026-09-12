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
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "'SF Pro Display'",
          "'SF Pro Text'",
          "'Inter'",
          "system-ui",
          "sans-serif"
        ],
        mono: [
          "'SF Mono'",
          "'JetBrains Mono'",
          "ui-monospace",
          "monospace"
        ]
      },
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc7fb',
          400: '#36abf7',
          500: '#0c8ee9',
          600: '#0071e3', // Apple Blue
          700: '#0159be',
          800: '#064b9c',
          900: '#0b3f7c',
          950: '#082852',
        },
        surface: {
          light: '#ffffff',
          lightMuted: '#f8fafc',
          dark: '#0a0d14',
          darkCard: '#111726',
          darkMuted: '#172033',
        }
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'float': '0 12px 30px -10px rgba(0, 0, 0, 0.08), 0 4px 10px -5px rgba(0, 0, 0, 0.04)',
        'float-dark': '0 12px 30px -10px rgba(0, 0, 0, 0.4), 0 4px 10px -5px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}
