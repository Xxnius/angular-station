module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    container: {
      center: true,
    },

    screens: {
      md: "768px",
      lg: "1200px",
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: '#000000',
      white: '#ffffff',

      'grey-black': '#35343b',
      'grey-white': '#fff',

      red: {
        DEFAULT: '#e10914',
        dark: '#c4213b',
      },
      blue: {
        dark: '#035273',
      },
      orange: {
        light: '#ffce9b',
        DEFAULT: '#ff642c',
      },
      yellow: {
        DEFAULT: '#ffeb5f',
      },
      purple: {
        DEFAULT: '#800080',
        dark: '#372277'
      },
      beige: {
        DEFAULT: '#ffce9b',
      },
      gray: {
        light: '#ebe8f1',
        DEFAULT: '#757575',
        dark: '#333333',
      },
      green: {
        light: '#e9fcee',
        dark: '#148533',
      },
    },
    extend: {},
  },
  plugins: [],
}
