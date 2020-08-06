/* eslint-disable global-require */
module.exports = {
  purge: [
    './src/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        viga: [ 'Viga' ],
        andika: [ 'Andika' ],
      },
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
          fontSize: '1.35rem',
          color: '#ffffff',
          'h1, h2, h3, h4, h5, h6, thead': {
            color: '#ffffff',
          },
          h1: {
            fontWight: '900',
            fontFamily: 'Viga',
          },
          a: {
            color: theme( 'colors.primary.red' ),
            textDecoration: 'none',
            fontWeight: 500,
            '&:hover': {
              color: '#ffffff',
            },
          },
          strong: {
            color: theme( 'colors.primary.red' ),
            fontWeight: 900,
          },
          p: {
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
