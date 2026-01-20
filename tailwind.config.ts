import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1E3A8A",
          gold: "#C8A24A",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-display)", "ui-serif", "Georgia"],
      },
      boxShadow: {
        card: "0 18px 45px rgba(30, 58, 138, 0.08), 0 2px 10px rgba(11, 18, 32, 0.08)",
        glow: "0 0 0 1px rgba(200, 162, 74, 0.25), 0 18px 45px rgba(30, 58, 138, 0.10)",
      },
      keyframes: {
        "mesh-shift": {
          "0%": { transform: "translate3d(-2%, -2%, 0) scale(1.02)" },
          "50%": { transform: "translate3d(2%, 1%, 0) scale(1.04)" },
          "100%": { transform: "translate3d(-2%, -2%, 0) scale(1.02)" },
        },
        "float-y": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "marquee-x": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "cue-bounce": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.9" },
          "50%": { transform: "translateY(10px)", opacity: "0.55" },
        },
        "sweep": {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
      },
      animation: {
        mesh: "mesh-shift 10s ease-in-out infinite",
        float: "float-y 5s ease-in-out infinite",
        marquee: "marquee-x 24s linear infinite",
        cue: "cue-bounce 1.8s ease-in-out infinite",
        sweep: "sweep 1.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;

