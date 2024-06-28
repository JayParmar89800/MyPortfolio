import type { Config } from "tailwindcss"
import customGradientPlugin from "./plugins/tailwind-gradient-plugin"
import customTextStrokePlugin from "./plugins/tailwind-text-stroke-plugin"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm:'640px',
      md:'768px',
      lg:'960px',
      xl:'1200px', 
    },
    fontFamily:{
      primary:"var(--font-robotoslab)",
    },
    extend: {
      colors:{
        primary:"#1c1c22",
        accent:{
          // DEFAULT:'#00a7fa',
          DEFAULT:'#005b94',

          hover:'#028cd1',
        },
        bgdark:{DEFAULT:'#042e4d',100:'#004567'},
        red: {
          500: '#ef4444',
        },

      },
      fontSize: {
        "fluid-2xl":"clamp(2.5rem, 10vw, 10rem)",
        "fluid-xxl": "clamp(43px, 10.08vw, 165px)",
        "fluid-xl": "clamp(1.5rem, 6cqw, 2.25rem)",
        "fluid-lg": "clamp(1.25rem, 4vw, 2rem)",
        "fluid-md": "clamp(1rem, 5cqw, 1.5rem)",
        "fluid-sm": "clamp(1rem, 4cqw, 1.25rem)",
        "fluid-xs": "clamp(0.9rem, 5cqw, 1.5rem)",
        "clamp-4-7-10": "clamp(2.5rem, 10cqw, 10rem)", 
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      bgGradientDeg: {
        75: '75deg',  // Including the custom 75 degree angle in the theme
      },
      textStrokeWidth: {
        DEFAULT: '1px',
        sm: '1px',
        md: '2px',
        lg: '3px',
      },
    },
  },
  plugins: [require("tailwindcss-animate"),customGradientPlugin,customTextStrokePlugin],
} satisfies Config

export default config