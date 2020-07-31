/* eslint-disable global-require */
module.exports = {
  purge: [
    './src/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          red: '#cf112d',
        },
        secondary: {
          grey: '#4D4D4D',
        },
      },
    },
    typography: theme => ( {
      default: {
        css: {
          color: '#ffffff',
          h1: {
            color: '#ffffff',
            fontWight: '900',
          },
          h2: {
            color: '#ffffff',
          },
          h4: {
            color: '#ffffff',
          },
          thead: {
            color: '#ffffff',
          },
          a: {
            color: theme( 'colors.primary.red' ),
            textDecoration: 'none',
            fontWeight: 500,
            '&:hover': {
              color: '#ffffff',
            },
          },
          p: {
            fontSize: '1.05rem',
            lineHeight: 1.4,
          },
          li: {
            margin: 0,
          },
        },
      },
    } ),
  },
  variants: {},
  plugins: [
    require( '@tailwindcss/typography' ),
  ],
}
