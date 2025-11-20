import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bg: "#0a1f1a",
        surface: "rgba(255, 255, 255, 0.05)",
        surface2: "rgba(255, 255, 255, 0.1)",
        ink: "#ffffff",
        muted: "#2dd4bf",
        accent: "#14b8a6",
        line: "rgba(255, 255, 255, 0.1)",
        turquoise: {
          50: "#e0fffe",
          100: "#b3ffff",
          200: "#80ffff",
          300: "#4dffff",
          400: "#1affff",
          500: "#2dd4bf",
          600: "#14b8a6",
          700: "#0d9488",
          800: "#0f766e",
          900: "#134e4a",
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'iridescent': 'iridescent 8s ease infinite',
        'shimmer': 'shimmer 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.05)' },
        },
        iridescent: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(45, 212, 191, 0.4)',
        'glow-lg': '0 0 40px rgba(20, 184, 166, 0.5)',
        'glow-xl': '0 0 60px rgba(45, 212, 191, 0.6)',
      },
    },
  },
  plugins: [],
}
export default config


