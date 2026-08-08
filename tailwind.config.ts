import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-dark": "var(--color-primary-dark)",
        secondary: "var(--color-secondary)",
        "secondary-dark": "var(--color-secondary-dark)",
        canvas: "var(--color-background)",
        surface: "var(--color-surface)",
        accent: "var(--color-accent)",
        "accent-light": "var(--color-accent-light)",
        electric: "var(--color-electric-blue)",
        mauve: "var(--color-mauve)",
        lilac: "var(--color-lilac)",
        copper: "var(--color-copper)",
        ink: "var(--color-text)",
        muted: "var(--color-text-muted)",
        line: "var(--color-border)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        nav: "0 18px 55px rgba(1, 10, 42, 0.22)",
        accent: "0 12px 28px rgba(184, 138, 50, 0.24)",
      },
    },
  },
  plugins: [],
};

export default config;
