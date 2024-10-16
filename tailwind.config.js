module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cellar-dark': '#1c1c1e',
        'cellar-light': '#f5f5f7',
        'cellar-accent': '#6e6e73',
        'cellar-highlight': '#B7410E',
      },
      fontFamily: {
        sans: ['SF Pro Display', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}