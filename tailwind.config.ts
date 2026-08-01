import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        deep: "#070a0f",
        panel: "#0f1420",
        line: "#1f2c45",
        electric: "#24c5ff",
        neon: "#34f7aa",
      },
      boxShadow: {
        glass: "0 10px 28px rgba(0, 0, 0, 0.35)",
        glow: "0 0 24px rgba(36, 197, 255, 0.26)",
      },
      backgroundImage: {
        "hero-grid": "radial-gradient(circle at 15% 15%, rgba(36,197,255,0.15), transparent 42%), radial-gradient(circle at 85% 20%, rgba(52,247,170,0.14), transparent 36%), linear-gradient(180deg, #05070b 0%, #070b12 45%, #05070b 100%)",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)"],
        body: ["var(--font-manrope)"],
      },
    },
  },
  plugins: [],
};

export default config;
