import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",
        muted: "#525252",
        panel: "#ffffff",
        line: "#d4d4d4",
        accent: "#0a0a0a",
        coral: "#404040"
      },
      boxShadow: {
        glow: "0 18px 48px rgba(0, 0, 0, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
