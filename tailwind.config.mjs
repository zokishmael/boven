/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#111827', // Pastikan warna dark mode ada
          100: '#f3f4f6' // Warna teks light
        }
      }
    },
  },
  plugins: [],
};

export default config;