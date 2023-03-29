module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,vue, d, ts}'
  ],
  theme: {
    colors: {
      'main-bg': '#0a192f',
      'light-gray': '#ccd6f6',
      'gray': '#8892b0', 
      'dark-gray': '#233554',
      'green': '#64ffda'
    },
    screens: {
      'xs': { 'min': '325px', 'max': '639px' },
      'sm': { 'min': '640px', 'max': '767px' },
      'md': { 'min': '768px', 'max': '1023px' },
      'lg': { 'min': '1024px', 'max': '1279px' },
      'xl': { 'max': '1280px' }
    }
  },
  plugins: []
};
