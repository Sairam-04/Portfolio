/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gradientColorStops: theme => ({
        'purple-500': '#a855f7',
        'indigo-500': '#6366f1',
      }),
    },
    colors: {
      dark: {
        bgcolor: "var(--bg-dark-color)",
        textcolor: "var(--text-dark-primary-color)",
        graytextcolor: "var(--text-dark-gray-color)",
        graylighttextcolor: "var(--text-dark-light-gray-color)",
        skillscardbg: "var(--skills-card-dark-bg-color)",
        skillscardtext: "var(--skills-card-dark-text-color)",
        hovercolor: "var(--hover-dark-color)",
        hammenu:"var(--dark-hammenu)"
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
