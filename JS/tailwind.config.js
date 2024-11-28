/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // Matcher alle HTML-filer i roden
    "./JS/**/*.js" // Matcher alle JS-filer i JS-mappen (hvis du bruger Tailwind-klasser i JS)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

