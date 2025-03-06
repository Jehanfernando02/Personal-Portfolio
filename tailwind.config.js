module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Dark Blue
        secondary: '#3B82F6', // Light Blue
        accent: '#EF4444', // Red
        'light-text': '#FFFFFF', // White
        'dark-text': '#1F2937', // Dark Gray
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};