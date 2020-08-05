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
          color: '#ffffff',
          h1: {
            color: '#ffffff',
            fontWight: '900',
            fontFamily: 'Viga',
          },
          h2: {
            color: '#ffffff',
          },
          h3: {
            color: '#ffffff',
          },
          h4: {
            color: '#ffffff',
          },
          h5: {
            color: '#ffffff',
          },
          h6: {
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
          strong: {
            color: theme( 'colors.primary.red' ),
            fontWeight: 900,
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
