/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-inner': 'inset 0 4px 8px rgba(0, 0, 0, 0.2)',  // Adjust as needed
      }
    },
  },
  plugins: [],
}