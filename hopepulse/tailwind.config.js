/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#81c230',
        secondary: '#aad573',
        grayish: '#36454F',
        fafafa: '#fafafa',
        third: '#3195B0',
        fourth: '#072608',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}
