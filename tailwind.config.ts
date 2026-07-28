import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          base: "#060912",
          radial: "#0d1726",
        },
        glass: {
          fill: "rgba(255,255,255,0.075)",
          strong: "rgba(255,255,255,0.12)",
          border: "rgba(255,255,255,0.18)",
          highlight: "rgba(255,255,255,0.42)",
        },
        accent: {
          primary: "#54d6ff",
          violet: "#a78bfa",
          teal: "#5eead4",
        },
        text: {
          primary: "#f7fbff",
          secondary: "#c9d7e6",
          muted: "#8796a8",
        },
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        sans: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        glass:
          "0 24px 80px rgba(0,0,0,.32), 0 8px 26px rgba(84,214,255,.08), inset 0 1px 0 rgba(255,255,255,.22)",
        glassHover:
          "0 34px 100px rgba(0,0,0,.38), 0 14px 34px rgba(84,214,255,.14), inset 0 1px 0 rgba(255,255,255,.28)",
      },
    },
  },
  plugins: [],
};

export default config;