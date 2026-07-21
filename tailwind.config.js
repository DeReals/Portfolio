/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B1120",
        panel: "#121A2E",
        panel2: "#182238",
        paper: "#EDF1F7",
        muted: "#8C97B3",
        beacon: "#F5A623",
        beacon2: "#FFC466",
        signal: "#4CD6E0",
        line: "#243050",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'IBM Plex Sans'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(180deg, rgba(11,17,32,0) 0%, #0B1120 100%)",
      },
      keyframes: {
        pulseTravel: {
          "0%": { offsetDistance: "0%", opacity: "0" },
          "8%": { opacity: "1" },
          "92%": { opacity: "1" },
          "100%": { offsetDistance: "100%", opacity: "0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
