/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'my-shadow': '0 6px 20px 0 rgba(0, 0, 0, 0.08)',
      },
      colors: {
        'my-green': '#29c6cf'
      }
    },
  },
  plugins: [],
}