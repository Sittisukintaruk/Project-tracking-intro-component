/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}", "*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1112px",
      xl: "1440px",
    },
    colors: {
      red: "#FF5C5C",
      VeryDarkBlue: "#242942",
      GrayishBlue: "#A0A1AC",
      LightGrayishBlue: "#EEF3F6",
      Darkgrayblue: "#5B5F71",
      white: "#ffffff",
      graylight: "#9FA1AC",
      transparent: "transparent",
    },
    fontSize: {
      sm: ["0.875rem", "1.25rem"],
      base: ["1rem", "1.5rem"],
      lg: ["1.25rem", "1.75rem"],
      xl: ["1.5rem", "2rem"],
    },
    fontFamily: {
      Barlow: ["Barlow", "sans-serif"],
      Condensed: ["Barlow Condensed", "sans-serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
