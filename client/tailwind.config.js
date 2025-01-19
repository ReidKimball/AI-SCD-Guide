/** @type {import('tailwindcss').Config} */
export default {
  content: [
    //'./client/index.html',
    //'./client/src/**/*.{html,jsx,js,ts,tsx}',
    //'./client/src/components/**/*.{html,jsx,js,ts,tsx}',
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}