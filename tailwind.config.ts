import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: ["class"],

  prefix: "",

  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1536px",
      },
    },

    screens: {
      xs: "356px",
      sm: "400px",
      smd: "532px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      "2xl": "1536px",
      "3xl": "1920px",
    },

    extend: {
      colors: {},

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        blink: {
          "0%, 100%": {
            color: "#000000",
            borderColor: "#e5e5e5",
            backgroundColor: "#ffffff",
          },
          "50%": {
            color: "#7F56D9",
            borderColor: "#7F56D9",
            backgroundColor: "#F8F5FF",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        blink: "blink 1s infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addVariant }) {
      addVariant("trigger", [
        "@media (min-width: 976px) { &:hover }",
        "&:active",
      ]);
      addVariant("group-trigger", [
        ":merge(.group):active &",
        "@media (min-width: 976px) { :merge(.group):hover & }",
      ]);
      addVariant("peer-trigger", [
        ":merge(.peer):active ~ &",
        "@media (min-width: 976px) { :merge(.peer):lg:hover ~ & }",
      ]);
    }),
  ],
} satisfies Config;

export default config;
