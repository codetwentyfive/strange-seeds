import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-rubik)", "sans-serif"],
        mono: ["var(--font-rubik-mono-one)", "monospace"],
        display: ["var(--font-rubik-dirt)", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
