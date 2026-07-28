import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          base: "#080b0d",
          raised: "#11181c",
          panel: "#172024",
          overlay: "rgba(8, 11, 13, 0.76)",
        },
        steel: {
          DEFAULT: "#7da7b5",
          bright: "#a9d4df",
          dim: "#425f69",
        },
        brass: {
          DEFAULT: "#a48552",
          dim: "#5b4b32",
        },
        bone: {
          DEFAULT: "#efe8dc",
          soft: "#cfc6b8",
          muted: "#898273",
        },
        ember: "#c96f45",
        hairline: "rgba(239, 232, 220, 0.14)",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        sans: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        hud: "0 18px 60px rgba(0, 0, 0, 0.36)",
        line: "inset 0 0 0 1px rgba(239, 232, 220, 0.12)",
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 20% 10%, rgba(125,167,181,0.14), transparent 28%), radial-gradient(circle at 85% 15%, rgba(164,133,82,0.12), transparent 25%), linear-gradient(135deg, rgba(255,255,255,0.045) 0 1px, transparent 1px 8px)",
      },
    },
  },
  plugins: [],
};

export default config;
