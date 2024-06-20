import type { Config } from "tailwindcss"
import customGradientPlugin from "./plugins/tailwind-gradient-plugin"

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
          DEFAULT:'#00a7fa',
          hover:'#028cd1',
        },
        bgdark:{DEFAULT:'#042e4d',100:'#004567'}
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
    },
  },
  plugins: [require("tailwindcss-animate"),customGradientPlugin],
} satisfies Config

export default config