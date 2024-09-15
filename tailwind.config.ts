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
      vs:'460px',
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
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        "gradient": {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        "gradient": "gradient 8s linear infinite",
        scroll:
        "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
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
      borderColor: {
        'custom-light': '#7e7c7c',
        'custom-dark': '#a9a9a929',
      },
    },
  },
  plugins: [require("tailwindcss-animate"),customGradientPlugin,customTextStrokePlugin,addVariablesForColors],
} satisfies Config

function flattenColorPalette(colors: any, prefix = ''): any {
  return Object.keys(colors).reduce((acc: any, key: string) => {
    const value = colors[key];
    if (typeof value === 'object') {
      // Recursively flatten nested objects (like 'bgdark.100')
      Object.assign(acc, flattenColorPalette(value, `${prefix}${key}-`));
    } else {
      acc[`${prefix}${key}`] = value;
    }
    return acc;
  }, {});
}

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config