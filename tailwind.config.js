/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        primary: "#34CAA5",
        secondary: "#E2A640",
        success: "#66C87B",
        error: "#ED544E",
        warning: "#F4C700",
        accent: "#FAFAFA",
        dark: "#26282C",
      },
    },
  },
  plugins: [],
};
