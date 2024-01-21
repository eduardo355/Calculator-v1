/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  "darkMode": "class",
  theme: {
    extend: {
      backgroundColor: {
        'dark-bg': '#000000',
        'dark-card': '#1a1a40',
        'dark-btn': '#082032'
      }
      ,
      textColor: {
        'dark-color': '#1e5128'
      }
    },
  },
  plugins: [],
}

