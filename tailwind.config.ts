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
        script: ["'Loved by the King'", "cursive"],
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
        orange: {
          DEFAULT:    "hsl(var(--citrus-orange))",
          foreground: "hsl(var(--citrus-orange-foreground))",
        },
        "pool-blue": {
          DEFAULT:    "hsl(var(--pool-blue))",
          foreground: "hsl(var(--pool-blue-foreground))",
        },
      },
      fontSize: {
        /* ── Blumaa type scale ─────────────────────────────
           Desktop: H1=42 H2=36 H3=28 H4=22 P3=20 P2=16 P1=12
           Mobile:  H1=28 H2=22 H3=20            P2=16 P1=12
        ── */
        "h1":    ["2.625rem",  { lineHeight: "0.95" }],   /* 42pt desktop */
        "h2":    ["2.25rem",   { lineHeight: "1.0" }],   /* 36pt desktop */
        "h3":    ["1.75rem",   { lineHeight: "1.05" }],   /* 28pt desktop */
        "h4":    ["1.375rem",  { lineHeight: "1.1" }],   /* 22pt desktop */
        "p3":    ["1.25rem",   { lineHeight: "1.35" }],   /* 20pt */
        "p2":    ["1rem",      { lineHeight: "1.45" }],   /* 16pt */
        "p1":    ["0.75rem",   { lineHeight: "1.45" }],   /* 12pt */
        /* mobile variants */
        "h1-mob": ["1.75rem",  { lineHeight: "0.95" }],   /* 28pt */
        "h2-mob": ["1.375rem", { lineHeight: "1.0" }],   /* 22pt */
        "h3-mob": ["1.25rem",  { lineHeight: "1.05" }],   /* 20pt */
        /* ── Editorial display scale (fluid) ───────────────
           Used for the oversized headlines of the redesign.
           Instrument Serif · ALL CAPS for H1 / key highlights */
        "display":    ["clamp(3.25rem, 12vw, 10.5rem)",  { lineHeight: "0.84", letterSpacing: "-0.01em" }],
        "statement":  ["clamp(2.25rem, 7.2vw, 6rem)",    { lineHeight: "0.94", letterSpacing: "-0.005em" }],
        "headline":   ["clamp(2.25rem, 6vw, 5.25rem)",   { lineHeight: "0.95" }],
        "row":        ["clamp(2rem, 5.6vw, 5rem)",       { lineHeight: "1" }],
        "script-xl":  ["clamp(5rem, 15vw, 13rem)",       { lineHeight: "1" }],
        "script-lg":  ["clamp(2.5rem, 8vw, 6.5rem)",     { lineHeight: "0.9" }],
        "script-md":  ["clamp(1.5rem, 3.4vw, 2.5rem)",   { lineHeight: "1" }],
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
        /* Ticker strip — content is rendered twice, so -50% loops seamlessly */
        marquee: {
          from: { transform: "translateX(0)" },
          to:   { transform: "translateX(-50%)" },
        },
        /* Gentle bob for floating stickers (no rotation — the logo never rotates) */
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
        marquee: "marquee 40s linear infinite",
        float:   "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
