/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'neon-effect': '0 4px 6px -1px rgba(34, 193, 195, 0.3), 0 2px 4px -2px rgba(253, 187, 45, 0.3)',
      },
    },
  },
  plugins: [],
}

