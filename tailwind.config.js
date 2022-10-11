/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: ["active"],
      fontFamily: {
        Muli: ["Muli", "san-serif"],
      },
      colors: {
        afexgreen: {
          DEFAULT: "#38CB89",
          lighter: "rgba(56, 203, 137, .08)",
          light: "rgba(56, 203, 137, .5)",
        },
        bggrey: "#F9FAFB",
        textgrey: {
          DEFAULT: "#54565B",
          light: "#C9C8C6",
          lighter: "rgba(201, 200, 198, .1)",
        },
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
