import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "zg-purple": {
          DEFAULT: "#7c3aed",
          light: "#8b5cf6",
          dark: "#5b21b6",
          glow: "rgba(124, 58, 237, 0.4)",
        },
        "zg-dark": {
          DEFAULT: "#0f0f13",
          card: "rgba(30, 30, 36, 0.7)",
          border: "rgba(124, 58, 237, 0.3)",
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "zg-neon": "0 0 15px var(--tw-colors-zg-purple-glow)",
      }
    },
  },
  plugins: [],
};
export default config;