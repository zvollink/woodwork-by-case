import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,

  include: ["./src/**/*.{js,jsx,ts,tsx,astro}"],
  exclude: [],

  theme: {
    extend: {
      tokens: {
        colors: {
          forestGreen: { value: "#2C5F2D" },
          woodTan:     { value: "#C19A6B" },
          cream:       { value: "#FAF9F6" },
          charcoal:    { value: "#333333" },
          lightGray:   { value: "#F5F5F5" },
          white:       { value: "#FFFFFF" },
        },
        fonts: {
          sans: { value: "system-ui, -apple-system, sans-serif" },
        },
        sizes: {
          maxWidth: { value: "1200px" },
        },
      },
    },
  },

  outdir: "styled-system",
});
