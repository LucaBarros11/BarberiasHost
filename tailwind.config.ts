import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        espresso: "#1C1410",
        oxblood: "#6B1E23",
        "oxblood-light": "#8A2C32",
        brass: "#B08D57",
        "brass-light": "#CBA96E",
        bone: "#EDE6D6",
        steel: "#4A5A5E",
        tile: "#2F3B2C",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-franklin)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      backgroundImage: {
        grain: "url('/grain.svg')",
      },
    },
  },
  plugins: [],
};

export default config;
