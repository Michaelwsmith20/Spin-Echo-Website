// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        spinecho: {
          dark: "#0A0C10",        // Deep Midnight Base
          charcoal: "#121417",    // Surface color
          accent: "#06B6D4",      // Teal Blue
          teal: "#14B8A6",        // Resonance Teal (Secondary accent)
          slate: "#94A3B8",       // Technical text
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;

