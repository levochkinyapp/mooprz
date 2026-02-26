import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    screens: {
      /** mobile: < 640px */
      sm: "640px",
      /** tablet: 640px+ */
      md: "768px",
      /** desktop: 1024px+ */
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      /** Переключение на мобильное меню при ширине < 1164px */
      nav: "1164px",
    },
    fontFamily: {
      sans: ["Lato", "sans-serif"],
      serif: ["Georgia", "serif"],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      /** Типографика в em (масштабируется с html font-size) */
      fontSize: {
        xs: ["0.75em", { lineHeight: "1em" }],
        sm: ["0.875em", { lineHeight: "1.25em" }],
        base: ["1em", { lineHeight: "1.5em" }],
        lg: ["1.125em", { lineHeight: "1.75em" }],
        xl: ["1.25em", { lineHeight: "1.75em" }],
        "2xl": ["1.5em", { lineHeight: "2em" }],
        "3xl": ["1.875em", { lineHeight: "2.25em" }],
        "4xl": ["2.25em", { lineHeight: "2.5em" }],
        "5xl": ["3em", { lineHeight: "1.2" }],
        "6xl": ["3.75em", { lineHeight: "1.1" }],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        brand: {
          blue: "hsl(var(--brand-blue))",
          red: "hsl(var(--brand-red))",
          gray: "hsl(var(--brand-gray))",
        },
        /** Hover для нейтральных кнопок: CMYK 0/0/0/100, 10% */
        hoverCyan: "var(--hover-cyan)",
        /** Текст чёрный 75% (пункты меню и т.п.) */
        "black-75": "hsl(var(--text-black-75))",
        heading: "var(--heading)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        "slide-up": {
          from: {
            transform: "translateY(10px)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
