/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      dark: {
        bgcolor: "var(--bg-dark-color)",
        textcolor: "var(--text-dark-primary-color)",
        graytextcolor: "var(--text-dark-gray-color)",
        graylighttextcolor: "var(--text-dark-light-gray-color)",
        skillscardbg: "var(--skills-card-dark-bg-color)",
        skillscardtext: "var(--skills-card-dark-text-color)",
      },
      light: {
        bgcolor: "var(--bg-light-color)",
        textcolor: "var(--text-light-primary-color)",
        skillscardbg: "var(--skills-card-light-bg-color)",
        skillscardtext: "var(--skills-card-light-text-color)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
