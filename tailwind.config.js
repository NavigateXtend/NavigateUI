/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      keyframes: {
        u: {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' }
        }
      },
      boxShadow: {
        blue: '0 0 20px rgba(0, 149, 255, 0.5), 0 5px 15px rgba(0, 0, 0, 0.1)'
      },

      height: {
        ch: 'calc(100vh - 70px)'
      }
    }
  },
  plugins: []
};
