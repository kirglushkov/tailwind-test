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
        'container': '0 1px 2px 0 rgba(16, 24, 40, 0.06), 0 1px 3px 0 rgba(16, 24, 40, 0.1)',
        'tabs': '0 1px 2px 0 rgba(16, 24, 40, 0.05)'
      },
      colors: {
        'my-lightgreen': '#ecfdf3',
        'green': '#12B76A',
        'darkgreen': '#027A48',
        'lightred': '#FEF3F2',
        'red': '#F04438',
        'darkred': '#B42318',
        'my-violet': '#7f56d9',
        'darkblue': '#175CD3',
        'lightblue': '#EFF8FF',
        'indigo': '#EEF4FF',
        'darkindigo': '#3538CD'
      }
    },
  },
  plugins: [],
}