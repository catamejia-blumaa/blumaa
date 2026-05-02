import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        md: "2rem",
        lg: "3rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      fontFamily: {
        serif:  ["'Instrument Serif'", "Georgia", "serif"],
        sans:   ["'DM Sans'", "system-ui", "sans-serif"],
        mono:   ["'Roboto Mono'", "'Courier New'", "monospace"],
        biro:   ["'Biro Script'", "cursive"],
      },
      colors: {
        /* ── shadcn semantic tokens ─────────────────────── */
        border:     "hsl(var(--border))",
        input:      "hsl(var(--input))",
        ring:       "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT:    "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT:    "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT:    "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT:    "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT:    "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT:    "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT:    "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT:              "hsl(var(--sidebar-background))",
          foreground:           "hsl(var(--sidebar-foreground))",
          primary:              "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent:               "hsl(var(--sidebar-accent))",
          "accent-foreground":  "hsl(var(--sidebar-accent-foreground))",
          border:               "hsl(var(--sidebar-border))",
          ring:                 "hsl(var(--sidebar-ring))",
        },
        /* ── Blumaa brand palette ────────────────────────── */
        blue: {
          DEFAULT:    "hsl(var(--blue))",
          foreground: "hsl(var(--blue-foreground))",
        },
        butter: {
          DEFAULT:    "hsl(var(--butter))",
          foreground: "hsl(var(--butter-foreground))",
        },
        /* alias kept for existing usage */
        "light-yellow": {
          DEFAULT:    "hsl(var(--light-yellow))",
          foreground: "hsl(var(--light-yellow-foreground))",
        },
        crema: {
          DEFAULT:    "hsl(var(--crema))",
          foreground: "hsl(var(--crema-foreground))",
        },
        /* alias kept for existing usage */
        "white-chocolate": {
          DEFAULT:    "hsl(var(--white-chocolate))",
          foreground: "hsl(var(--white-chocolate-foreground))",
        },
        cafe: {
          DEFAULT:    "hsl(var(--cafe))",
          foreground: "hsl(var(--cafe-foreground))",
        },
        night: {
          DEFAULT:    "hsl(var(--night))",
          foreground: "hsl(var(--night-foreground))",
        },
        pink: {
          DEFAULT:    "hsl(var(--pink))",
          foreground: "hsl(var(--pink-foreground))",
        },
        "citrus-orange": {
          DEFAULT:    "hsl(var(--citrus-orange))",
          foreground: "hsl(var(--citrus-orange-foreground))",
        },
        "pool-blue": {
          DEFAULT:    "hsl(var(--pool-blue))",
          foreground: "hsl(var(--pool-blue-foreground))",
        },
      },
      borderRadius: {
        lg:   "var(--radius)",
        md:   "calc(var(--radius) - 2px)",
        sm:   "calc(var(--radius) - 4px)",
        pill: "99px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
